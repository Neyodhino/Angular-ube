import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const dashboardRoute: Routes = [
  {path: 'dashboard', component: DashboardComponent, children: [

  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
