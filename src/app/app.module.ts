import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule }  from '@angular/common/http';

// import { StorageService } from './service/storage.service';
// import { MessageService } from './message.service';
// import { SnackbarService } from './service/snackbar.service';
// import { GlobalsService } from './service/globals.service';
// import { HttpErrorHandler } from './http-error-handler.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { FrontpageComponent } from './home/frontpage/frontpage.component';
import { LoginComponent } from './home/login/login.component';
import { DemoMaterialModule } from 'src/material.module';

import { OperationHeaderComponent } from './operation/operation-header/operation-header.component';
import { OperationComponent } from './operation/operation.component';

import { ReportsComponent } from './operation/reports/reports.component';
import { LeadComponent } from './operation/lead/lead.component';
import { AutoResponderComponent } from './operation/auto-responder/auto-responder.component';
import { ShowAllLeadsComponent } from './operation/lead/show-all-leads/show-all-leads.component';
import { CategoryWiseLeadComponent } from './operation/lead/category-wise-lead/category-wise-lead.component';
import { AutoDialLeadComponent } from './operation/lead/auto-dial-lead/auto-dial-lead.component';
import { UnattendedLeadComponent } from './operation/lead/unattended-lead/unattended-lead.component';
import { SuccessStateLeadsComponent } from './operation/lead/success-state-leads/success-state-leads.component';
import { FailStateLeadsComponent } from './operation/lead/fail-state-leads/fail-state-leads.component';
import { TodayLeadComponent } from './operation/lead/today-lead/today-lead.component';
import { DueTodayComponent } from './operation/lead/due-today/due-today.component';
import { ManageAutoDialLeadComponent } from './operation/lead/manage-auto-dial-lead/manage-auto-dial-lead.component';
import { FailCallsComponent } from './operation/lead/fail-calls/fail-calls.component';
import { EmailLogComponent } from './operation/lead/email-log/email-log.component';
import { DashboardComponent } from './operation/dashboard/dashboard.component';
import { AllCallLogComponent } from './operation/dashboard/all-call-log/all-call-log.component';
import { SuccessCallLogComponent } from './operation/dashboard/success-call-log/success-call-log.component';
import { FailCallLogComponent } from './operation/dashboard/fail-call-log/fail-call-log.component';
import { TodayCallSummeryComponent } from './operation/dashboard/today-call-summery/today-call-summery.component';
import { SuccessFollowsUpComponent } from './operation/lead/lead-details/success-follows-up/success-follows-up.component';
import { EmailTemplateComponent } from './operation/lead/lead-details/email-template/email-template.component';
import { SmsTemplateComponent } from './operation/lead/lead-details/sms-template/sms-template.component';
import { LeadDetailsComponent } from './operation/lead/lead-details/lead-details.component';
import { LeadCallingComponent } from './operation/lead/lead-details/lead-calling/lead-calling.component';
import { GlobalsService } from './service/globals.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    FrontpageComponent,
    LoginComponent,
    OperationComponent,
    OperationHeaderComponent,

    ReportsComponent,
    LeadComponent,
    AutoResponderComponent,
    ShowAllLeadsComponent,
    CategoryWiseLeadComponent,
    AutoDialLeadComponent,
    UnattendedLeadComponent,
    SuccessStateLeadsComponent,
    FailStateLeadsComponent,
    TodayLeadComponent,
    DueTodayComponent,
    ManageAutoDialLeadComponent,
    FailCallsComponent,
    EmailLogComponent,
    DashboardComponent,
    AllCallLogComponent,
    SuccessCallLogComponent,
    FailCallLogComponent,
    TodayCallSummeryComponent,
    SuccessFollowsUpComponent,
    EmailTemplateComponent,
    SmsTemplateComponent,
    LeadDetailsComponent,
    LeadCallingComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule

  ],
 


  providers: [
    // HttpErrorHandler,
    GlobalsService,
    // SnackbarService,
    // StorageService,
    // MessageService

  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
