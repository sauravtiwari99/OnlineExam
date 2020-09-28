import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AdminReportsComponent } from './Components/admin-reports/admin-reports.component';
import { AdminTestComponent } from './Components/admin-test/admin-test.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { RegisterComponent } from './Components/register/register.component';
import { StudentDashboardComponent } from './Components/student-dashboard/student-dashboard.component';
import { AuthenticationAdminGuard } from './Guards/authentication-admin.guard';
import { AuthenticationGuard } from './Guards/authentication.guard';



const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"forgotPassword",component:ForgotPasswordComponent},
  {path:"adminDashboard",component:AdminDashboardComponent,canActivate:[AuthenticationAdminGuard]},
  {path:"studentDashboard",component:StudentDashboardComponent,canActivate:[AuthenticationGuard]},
  {path:"adminTest",component:AdminTestComponent,canActivate:[AuthenticationAdminGuard]},
  {path:"adminReport",component:AdminReportsComponent},
  {path: '404-invalid', component:NotFoundComponent},
  {path: '**', redirectTo: '/404-invalid'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
