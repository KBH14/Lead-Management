import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/constants/constants.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmailLogService {

  constructor(private httpclient: HttpClient) { }

  mockurl="http://localhost:3000/email-log";

  getemaillog(): Observable<any>
  {
    return this.httpclient.get(this.mockurl)
  }

  getEmaillog(): Observable<any>
  {
    return this.httpclient.get(AppSettings.COMMON_ENDPOINT+ 'email-log')
  }

  

}
