import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/constants/constants.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutoDialLeadService {

  constructor(private httpclient: HttpClient) { }

  getAutodiallead(): Observable<any>
  {
    return this.httpclient.get(AppSettings.COMMON_ENDPOINT+ 'auto-dial-lead')
  }
}
