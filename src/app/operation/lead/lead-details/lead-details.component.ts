import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SuccessFollowsUpComponent } from '../lead-details/success-follows-up/success-follows-up.component';
import { SmsTemplateComponent } from '../lead-details/sms-template/sms-template.component';
import { EmailTemplateComponent } from '../lead-details/email-template/email-template.component';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { LeadCallingComponent } from './lead-calling/lead-calling.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lead-details',
  templateUrl: './lead-details.component.html',
  styleUrls: ['./lead-details.component.css']
})
export class LeadDetailsComponent implements OnInit {
  
  model: NgbDateStruct;
  constructor(public dialog: MatDialog,private route: Router) { }

  btn_success():void {
    const dialogRef = this.dialog.open(SuccessFollowsUpComponent, {
      height: '450px',
     width: '500px',
    });
  }

  btn_lead_Calling():void {
    this.route.navigate(['/lead-calling']);
}

  btn_email():void {
    const dialogRef = this.dialog.open(EmailTemplateComponent, {
      height: '500px',
     width: '500px',
    })
  }

  btn_sms():void {
    const dialogRef = this.dialog.open(SmsTemplateComponent, {
      height: '270px',
     width: '500px',
    });
  }

  ngOnInit() {
  }

}
