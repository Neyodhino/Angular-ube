import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectsComponent } from './projects/projects.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const dashboardRoute: Routes = [
  {path: 'dashboard', component: DashboardComponent, children: [
    { path: 'projects', component: ProjectsComponent },
    {path: 'add-project', component: AddProjectComponent},
    {path: 'edit-project/:id', component: EditProfileComponent}
  ]},
];

@NgModule({
  imports: [ RouterModule.forChild(dashboardRoute) ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

