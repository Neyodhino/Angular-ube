import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { IProject } from '../../models/project';
import { CrudService } from '../../service/crudService/crud.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  addProjectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private crudService: CrudService
    ) { }

  ngOnInit() {
    this.addProjectForm = this.fb.group({
      projectName: ['', Validators.required],
      contractor: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      yearOfIntervention: ['', Validators.required],
      location: ['', Validators.required],
      lga: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  addProject(formValue: IProject) {
    this.crudService.addProject(formValue);
  }
  cancelProject() {
    this.router.navigate(['dashboard/projects']);
  }
}

