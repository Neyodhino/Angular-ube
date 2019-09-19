import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject, Observable } from 'rxjs';
import { IProject } from '../../models/project';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  ref = firebase.firestore().collection('projects');
  emittedProjects: Subject<IProject[]>  = new Subject<IProject[]>();

  constructor(
    private firestore: AngularFirestore
  ) { }

  public getProjects(): Observable<IProject[]> {
    return this.firestore.collection<IProject>('projects').valueChanges();
  }

  public searchProject(searchTerm: String) {
    return this.firestore.collection('projects', ref => ref.where('location', '==', searchTerm)).snapshotChanges  ();
  }
}
