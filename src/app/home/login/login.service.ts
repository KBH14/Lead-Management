// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';

// import { HttpErrorHandler, HandleError } from '../../http-error-handler.service';

// import { Observable } from 'rxjs';
// import { catchError, map, timeout, retry } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {
//   private handleError: HandleError;
  
//   constructor(
//     private http: HttpClient,
//     httpErrorHandler: HttpErrorHandler) {
//     this.handleError = httpErrorHandler.createHandleError('LoginService');
//   }

//   postLoginData(url,data){
//     return this.http.post(url, data)
//     .pipe(
//       map(data => {
//         return data;
//       }),
      
      
//       catchError(this.handleError('Login', []))
//     );
//   }

// }
