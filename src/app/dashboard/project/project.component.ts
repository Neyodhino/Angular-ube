import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../../service/crudService/crud.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() projects: any;
  constructor(
    private crud: CrudService
  ) {
   }

  ngOnInit() {
  }

  deleteProject(id: string) {
    if (confirm('Are you sure want to delete this project?')) {
      this.crud.deleteProject(id);
    }
  }
}


