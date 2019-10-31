import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { 

  }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*'
    })
  }

  post(urlName,data):Observable<any>{
    return this.http.post(this.apiGetUrl(urlName), data, this.httpOptions);/*.pipe(
      retry(1),
      catchError(this.errorHandl)
    );*/
    
  }
  // Error handling
  errorHandl(error) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
  }

  baseUrl = "http://localhost/learnangular/";
  apiGetUrl(istek): string{
      let secim:string = "";
      switch(istek)
      {
        case "login":
          secim = this.baseUrl+"login.php";
          break;
         
      }

      return secim;
   }
  
}