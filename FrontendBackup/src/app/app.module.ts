import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatToolbarModule } from '@angular/material/toolbar'
import { GoogleChartsModule } from 'angular-google-charts';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './Components/student-dashboard/student-dashboard.component';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha';
import { AdminTestComponent } from './Components/admin-test/admin-test.component';
import { AdminReportsComponent } from './Components/admin-reports/admin-reports.component';
import { SingleReportAdminComponent } from './Components/single-report-admin/single-report-admin.component';
import { StudentReportComponent } from './Components/student-report/student-report.component';
import { TestLevel1Component } from './Components/test-level1/test-level1.component';
import { TestLevel2Component } from './Components/test-level2/test-level2.component';
import { TestLevel3Component } from './Components/test-level3/test-level3.component';
import { SelectTestComponent } from './Components/select-test/select-test.component';
import { TimeGeneratorPipe } from './Pipes/time-generator.pipe';
import { AboutUsComponent } from './Components/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    AdminDashboardComponent,
    StudentDashboardComponent,
    AdminTestComponent,
    AdminReportsComponent,
    SingleReportAdminComponent,
    StudentReportComponent,
    TestLevel1Component,
    TestLevel2Component,
    TestLevel3Component,
    SelectTestComponent,
    TimeGeneratorPipe,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    RecaptchaModule,
    RecaptchaFormsModule,
    MatToolbarModule,
    GoogleChartsModule,
    NgxPaginationModule
  ],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',//Temporary Site Key 
    } as RecaptchaSettings,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
