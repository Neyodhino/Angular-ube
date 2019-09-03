import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { IProject } from '../../models/project';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  ref = firebase.firestore().collection('projects');
  emittedProjects: Subject<IProject[]>  = new Subject<IProject[]>();

  constructor(
    private db: AngularFireDatabase,
    private firestore: AngularFirestore
  ) { }

  public getProjects() {
    return this.firestore.collection('projects').valueChanges();
  }

  public searchProject(searchTerm: String) {
    return this.firestore.collection('projects', ref => ref.where('location', '==', searchTerm)).snapshotChanges  ();
  }
}
