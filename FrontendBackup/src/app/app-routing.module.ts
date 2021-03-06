import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AdminReportsComponent } from './Components/admin-reports/admin-reports.component';
import { AdminTestComponent } from './Components/admin-test/admin-test.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { RegisterComponent } from './Components/register/register.component';
import { SelectTestComponent } from './Components/select-test/select-test.component';
import { SingleReportAdminComponent } from './Components/single-report-admin/single-report-admin.component';
import { StudentDashboardComponent } from './Components/student-dashboard/student-dashboard.component';
import { StudentReportComponent } from './Components/student-report/student-report.component';
import { TestLevel1Component } from './Components/test-level1/test-level1.component';
import { TestLevel2Component } from './Components/test-level2/test-level2.component';
import { TestLevel3Component } from './Components/test-level3/test-level3.component';
import { AuthenticationAdminGuard } from './Guards/authentication-admin.guard';
import { AuthenticationGuard } from './Guards/authentication.guard';

//Consists of All secured Routes. Only Register, Login and Forgot Password is Accessible to anyone. Aprt from that every route to be accessed needs a valid Login.
const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"forgotPassword",component:ForgotPasswordComponent},
  {path:"adminDashboard",component:AdminDashboardComponent,canActivate:[AuthenticationAdminGuard]},
  {path:"studentDashboard",component:StudentDashboardComponent,canActivate:[AuthenticationGuard]},
  {path:"studentReport",component:StudentReportComponent,canActivate:[AuthenticationGuard]},
  {path:"adminTest",component:AdminTestComponent,canActivate:[AuthenticationAdminGuard]},
  {path:"adminReport",component:AdminReportsComponent,canActivate:[AuthenticationAdminGuard]},
  {path:"detailReport/:id",component:SingleReportAdminComponent,canActivate:[AuthenticationAdminGuard]},
  {path:"testL1",component:TestLevel1Component,canActivate:[AuthenticationGuard]},
  {path:"testL2",component:TestLevel2Component,canActivate:[AuthenticationGuard]},
  {path:"testL3",component:TestLevel3Component,canActivate:[AuthenticationGuard]},
  {path:"selectTest",component:SelectTestComponent,canActivate:[AuthenticationGuard]},
  {path:"aboutUs",component:AboutUsComponent,canActivate:[AuthenticationGuard]},
  {path:"aboutUsAdmin",component:AboutUsComponent,canActivate:[AuthenticationAdminGuard]},
  {path: '404-invalid', component:NotFoundComponent},
  {path: '**', redirectTo: '/404-invalid'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
