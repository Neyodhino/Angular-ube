import { Component, OnInit, OnDestroy } from '@angular/core';
import { DownloadService } from '../../service/download-service.service';
import { CrudService } from '../../service/crud/crud.service';
import { Subscription } from 'rxjs';
import { IProject } from '../../models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  projects: Array<IProject>;
  projectsSubscription: Subscription;

  constructor(
    private download: DownloadService,
    private crud: CrudService
  ) {
    this.crud.getProjects().subscribe((response: Array<IProject>) => {
      this.projects = response;
    })
  }

  ngOnInit() {
    this.projectsSubscription = this.crud.emittedProjects.subscribe((projects: Array<IProject>) => {
      this.projects = projects;
    },
    error => {
      console.log(error);
    });
  }
  exportAsExcel (data: Array<Object>): void {
    this.download.exportAsExcelFile(this.projects, 'Universal Basic Eduction')
  }

  ngOnDestroy(): void {
    this.projectsSubscription.unsubscribe();
  }
}
