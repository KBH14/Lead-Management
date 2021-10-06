import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public logoUrl: String;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.logoUrl = 'https://s3.ap-south-1.amazonaws.com/common-mmg/MMG+LOGOv2.png';
  }

  openModal (){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    

    const dialogRef = this.dialog.open(LoginComponent,dialogConfig);
  }
}
