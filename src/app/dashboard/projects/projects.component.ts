import { Component, OnInit, OnDestroy, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { DownloadService } from '../../service/exportService/download-service.service';
import { CrudService } from '../../service/crudService/crud.service';
import { Subscription } from 'rxjs';
import { IProject } from '../../models/project';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  projects: Array<IProject>;
  projectsSubscription: Subscription;

  downloadOptionForm: FormGroup;

  @ViewChild('downloadOption') downloadOption: ElementRef<any>;

  constructor(
    private downloadService: DownloadService,
    private crud: CrudService,
    private renderer: Renderer2,
    private elRef: ElementRef
  ) {
    this.crud.getProjects().subscribe((response: Array<IProject>) => {
      this.projects = response;
    });
  }

  ngOnInit() {
    this.projectsSubscription = this.crud.emittedProjects.subscribe((projects: Array<IProject>) => {
      this.projects = projects;
    },
    error => {
      console.log(error);
    });

    let download = new FormControl ();

    this.downloadOptionForm = new FormGroup ({
      download : download
    });
  }

  modalTrigger() {
    this.renderer.setStyle(this.downloadOption.nativeElement, 'display', 'block');
  }

  onSubmit(value: any) {
    if (value.download === 'excel') {
      this.downloadService.exportAsExcelFile(this.projects, 'Universal Basic Eduction');
    }
    this.renderer.setStyle(this.downloadOption.nativeElement, 'display', 'none');
  }


  ngOnDestroy(): void {
    this.projectsSubscription.unsubscribe();
  }
}

