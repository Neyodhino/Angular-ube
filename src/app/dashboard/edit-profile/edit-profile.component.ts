import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { IProject } from 'src/app/models/project';
import { CrudService } from '../../service/crudService/crud.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  editProjectForm: FormGroup;
  id: string;
  project;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private crud: CrudService,
    private notification: ToastrService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.crud.getProject(this.id).subscribe(doc => this.displayProject(doc.data()),
    error => console.log(error));

    this.editProjectForm = this.fb.group({
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

  displayProject(project) {
    this.project = project;

    // Update the data on the form.
    this.editProjectForm.setValue({
      projectName: this.project.projectName,
      contractor: this.project.contractor,
      startDate: this.project.startDate,
      endDate: this.project.endDate,
      yearOfIntervention: this.project.yearOfIntervention,
      location: this.project.location,
      lga: this.project.lga,
      status: this.project.status
    });
  }

  editProject(formValue:  IProject): void {
    this.crud.updateProject(this.id, formValue);
  }

  cancelEditProject () {
    this.router.navigate(['dashboard/projects']);
  }

}

