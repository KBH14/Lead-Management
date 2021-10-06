import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontpageComponent } from './home/frontpage/frontpage.component';

import { LoginComponent } from './home/login/login.component';
import { LeadComponent } from './operation/lead/lead.component';
import { ReportsComponent } from './operation/reports/reports.component';
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


const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'frontPage',component:FrontpageComponent},

  {path: 'dashboard',component:DashboardComponent},
  {path: 'allcalllogcomponent',component:AllCallLogComponent},
  {path: 'successcalllogcomponent',component:SuccessCallLogComponent},
  {path: 'failcalllogcomponent',component:FailCallLogComponent},
  {path: 'todaycallsummerycomponent',component:TodayCallSummeryComponent},
  {path: 'lead', component: LeadComponent },
  {path: 'showallleadscomponent', component: ShowAllLeadsComponent },
  {path: 'categorywiseleadcomponent', component: CategoryWiseLeadComponent },
  {path: 'autodialleadcomponent', component: AutoDialLeadComponent },

  // {path: 'unattendedleadcomponent', component: UnattendedLeadComponent },
  // {path: 'successstateleadscomponent', component: SuccessStateLeadsComponent },
  // {path: 'failstateleadscomponent', component: FailStateLeadsComponent },
  // {path: 'todayleadcomponent', component: TodayLeadComponent },
  // {path: 'duetodaycomponent', component: DueTodayComponent },
  // {path: 'manageautodialleadcomponent', component: ManageAutoDialLeadComponent },
  // {path: 'failcallscomponent', component: FailCallsComponent },

  {path: 'emaillogcomponent', component: EmailLogComponent },
  {path:'lead-details',component:LeadDetailsComponent},
  {path:'lead-calling',component:LeadCallingComponent},
  {path:'success-follows-up', component:SuccessFollowsUpComponent},
  {path:'email-template',component:EmailTemplateComponent},
  {path:'sms-template',component:SmsTemplateComponent},
  
  {path: 'report', component: ReportsComponent },
  {path: 'auto-responder', component: AutoResponderComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
