import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { IProject } from '../models/project';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

import { AuthenticationService } from '../service/authService/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  projects: IProject;
  logoutIcon = faPowerOff;
  constructor(
    private activatedRoute: ActivatedRoute,
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.projects = this.activatedRoute.snapshot.data['resolvedProjects'];
  }

  logOut() {
    this.auth.logOutUser();
  }
}
