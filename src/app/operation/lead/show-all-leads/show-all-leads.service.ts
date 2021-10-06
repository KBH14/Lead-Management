import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/constants/constants.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ShowAllLeadsService {

  constructor(private httpclient: HttpClient) { }

  getShowalllead(): Observable<any>
  {
    return this.httpclient.get(AppSettings.COMMON_ENDPOINT+ 'show-all-lead')
  }
}
