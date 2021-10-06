import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../constants/constants.module';

@Injectable({
  providedIn: 'root'
})

export class GlobalsService {

    // mockurl="http://localhost:3000/email-log";

    // constructor(private httpclient: HttpClient) {}  

    // getemaillog(): Observable<any>
    // {
    //    return this.httpclient.get(this.mockurl)
    // }

// /* Observable Loading Flag */
// private _loadingFlag = new BehaviorSubject<any>(null);

// /* Common Loading for all pages */
// loadingFlag$ = this._loadingFlag.asObservable();

//  /* logoutFlag for token expiry */
//  private _logoutFlag = new BehaviorSubject<any>(false);

//  /* Observable gender list */
//  private _gender = new BehaviorSubject<any>(null);

//    /* Observable navItem source */
  // private _navItemSource = new BehaviorSubject<number>(0);

//   /* Observable navItem stream */
  // navItem$ = this._navItemSource.asObservable();

//    // service command
//   changeScreen(number) {
//     this._navItemSource.next(number);
//   }
//   genderList(item) {
//     this._gender.next(item);
//   }
//   setLoadingFlag(flag) {
//     this._loadingFlag.next(flag);
//   }

//   setLogoutFlag(flag) {
//     this._logoutFlag.next(flag);
//   }
}