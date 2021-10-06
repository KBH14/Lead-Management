import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';

// import { AppSettings } from '../../constants/constants.module';

// import { StorageService } from '../../service/storage.service';
// import { LoginService } from './login.service';
// import { GlobalsService } from 'src/app/service/globals.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // providers: [LoginService],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //  form: FormGroup;

  // errorMsgs = AppSettings.ERROR_MSGS;

  // constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<LoginComponent>,
  //   private router: Router, private loginService: LoginService, private globalservice: GlobalsService,
  //   private storageService: StorageService) {
  //   this.form = this.formBuilder.group({
  //     userName: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern('^([+][9][1]|[9][1]|[0]){0,1}([4-9]{1})([0-9]{9})|([A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})$')]),
  //     password: new FormControl('', [Validators.required, Validators.maxLength(50)])
  //   });
  // }

 ngOnInit() {

  }

//   login() {
//     let data;
//     let currentDate = new Date();

//     if (this.form.invalid) {
//       return;
//     }
//     data = this.form.value;
    
//     this.globalservice.setLoadingFlag(true);
//     this.loginService.postLoginData(AppSettings.COMMON_ENDPOINT + 'login',data)
//       .subscribe(response => {
//         this.globalservice.setLoadingFlag(false);
//         this.storageService.setItem('user',response);
//         this.dialogRef.close();
//         /* If the expiry date while login itself is less than current date ignore it and log out */
//         if (new Date(this.storageService.getItem('user').data.tokenExpires) > currentDate)
//           this.router.navigate([this.storageService.getItem('user').data.path]);
//         else {
//           this.globalservice.setLogoutFlag(true);
//         }
//     },
//     err => {
//       //Do Nothing
//       this.globalservice.setLoadingFlag(false);
//     },
//     () => {
//       this.form.controls['password'].reset();
//       this.globalservice.setLoadingFlag(false);
//     });
//   }

//   close() {
//     this.dialogRef.close();
//   }

//   forgotPassword() {
//     this.dialogRef.close();
//     this.router.navigate(['/', 'validate']);
//   }

//   public hasError = (controlName: string, errorName: string) =>{
//     return this.form.controls[controlName].hasError(errorName);
//   }

 }
