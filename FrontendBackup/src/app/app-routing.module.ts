import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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



const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"forgotPassword",component:ForgotPasswordComponent},
  {path:"adminDashboard",component:AdminDashboardComponent,canActivate:[AuthenticationAdminGuard]},
  // {path:"adminDashboard",component:AdminDashboardComponent},
  {path:"studentDashboard",component:StudentDashboardComponent,canActivate:[AuthenticationGuard]},
  // {path:"studentDashboard",component:StudentDashboardComponent},
  {path:"studentReport",component:StudentReportComponent,canActivate:[AuthenticationGuard]},
  // {path:"studentReport",component:StudentReportComponent},
  {path:"adminTest",component:AdminTestComponent,canActivate:[AuthenticationAdminGuard]},
  // {path:"adminTest",component:AdminTestComponent},
  {path:"adminReport",component:AdminReportsComponent,canActivate:[AuthenticationAdminGuard]},
  // {path:"adminReport",component:AdminReportsComponent},
  {path:"detailReport/:id",component:SingleReportAdminComponent,canActivate:[AuthenticationAdminGuard]},
  {path:"testL1",component:TestLevel1Component,canActivate:[AuthenticationGuard]},
  {path:"testL2",component:TestLevel2Component,canActivate:[AuthenticationGuard]},
  {path:"testL3",component:TestLevel3Component,canActivate:[AuthenticationGuard]},
  {path:"selectTest",component:SelectTestComponent,canActivate:[AuthenticationGuard]},
  {path: '404-invalid', component:NotFoundComponent},
  {path: '**', redirectTo: '/404-invalid'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
