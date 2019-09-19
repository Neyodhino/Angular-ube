import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProjectsResolverService } from './service/projectResolver/projects-resolver.service';
import { AuthGuard } from './service/authService/auth.guard';

const ROUTES: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,
    resolve: {resolvedProjects: ProjectsResolverService},
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

