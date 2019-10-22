import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { IProject } from '../../models/project';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  ref = firebase.firestore().collection('projects');
  emittedProjects: Subject<IProject[]>  = new Subject<IProject[]>();

  constructor(
    private firestore: AngularFirestore,
    private notification: ToastrService,
    private router: Router
  ) { }

  public getProjects(): any {
    return this.firestore.collection('projects').snapshotChanges();
  }

  public addProject(formValue: IProject): void {
    this.firestore.collection('projects').add(formValue);
    this.notification.success('Project Added Successfully');
    this.router.navigate(['dashboard/projects']);
  }

  getProject(id: string) {
    return this.firestore.collection('projects').doc(id).get();
  }

  updateProject(projectId: string, data: IProject) {
    this.firestore.doc('projects/' + projectId).update(data);
    this.notification.success('Record has been updated successfully', 'Notification');
    this.router.navigate(['/dashboard/projects']);
  }

  deleteProject(projectId: string) {
    this.firestore.doc('projects/' + projectId).delete();
  }
}
