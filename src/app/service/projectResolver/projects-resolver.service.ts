import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CrudService } from './../crudService/crud.service';
import { IProject } from '../../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsResolverService implements Resolve<IProject[]> {

  constructor(
    private crud: CrudService
  ) { }

  resolve (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<IProject[]> {
      return this.crud.getProjects();
  }
}
