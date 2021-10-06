// import { Injectable } from '@angular/core';
// import { HttpErrorResponse } from '@angular/common/http';

// import { Observable } from 'rxjs';

// import { MessageService } from './message.service';
// import { SnackbarService } from './service/snackbar.service';

// /** Type of the handleError function returned by HttpErrorHandler.createHandleError */
// export type HandleError =
//   <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

// /** Handles HttpClient errors */
// @Injectable()
// export class HttpErrorHandler {
//   constructor(private messageService: MessageService, private snackBarService: SnackbarService) { }

//   /** Create curried handleError function that already knows the service name */
//   createHandleError = (serviceName = '') => <T>
//     (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result);

//   /**
//    * Returns a function that handles Http operation failures.
//    * This error handler lets the app continue to run as if no error occurred.
//    * @param serviceName = name of the data service that attempted the operation
//    * @param operation - name of the operation that failed
//    * @param result - optional value to return as the observable result
//    */
//   handleError<T> (serviceName = '', operation = 'operation', result = {} as T) {

//     return (error: HttpErrorResponse): Observable<T> => {
//       // TODO: send the error to remote logging infrastructure
//       //console.error(error); // log to console instead

//       const message = (error.error instanceof ErrorEvent) ?
//         error.error.message :
//        `server returned code ${error.status} with body "${error.error}"`;

// /* TODO: better job of transforming error for user consumption */
//       this.messageService.add(`${serviceName}: ${operation} failed: ${message}`);
//       this.snackBarService.openSnackBar(`${serviceName}: ${operation} failed: ${error}`,null);

// /* Let the app keep running by returning a safe result. 
//       return of( result ); */

// /* Throw error on reception of error */
//       return Observable.throw(error || ' error');      

//     };
//   }
// }
