import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { SuccessFollowsUpComponent } from '../success-follows-up/success-follows-up.component';
import { EmailTemplateComponent } from '../email-template/email-template.component';
import { SmsTemplateComponent } from '../sms-template/sms-template.component';

@Component({
  selector: 'app-lead-calling',
  templateUrl: './lead-calling.component.html',
  styleUrls: ['./lead-calling.component.css']
})
export class LeadCallingComponent implements OnInit {

  model: NgbDateStruct;
  constructor(public dialog: MatDialog) { }

  btn_success():void {
    const dialogRef = this.dialog.open(SuccessFollowsUpComponent, {
      height: '450px',
     width: '500px',
    });
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
