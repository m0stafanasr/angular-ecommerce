import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError, Observable, retry, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iuser } from '../view_models/Iuser';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  httpOption;
  constructor(private httpclient: HttpClient, private router:Router) { 
    this.httpOption={
      headers: new HttpHeaders({
        'content-type':'application/json'
      })
    }
  }
  private handleError(error:HttpErrorResponse){
    if(error.status === 0){
      console.error('error occured:', error.error)
    }else{
      console.error(`backend returned error code ${error.status}, with message: `, error.error)
    }
    return throwError(()=>new Error('Error happened, please try again'))
  }
  addUser(newuser: Iuser): Observable<Iuser>{
    return this.httpclient
    .post<Iuser>(`${environment.APIURL}/Users`, JSON.stringify(newuser), this.httpOption)
    .pipe(retry(2), catchError(this.handleError))
  }

  isuserexest(val:string) 
  { 
    let found=this.httpclient.get<Iuser[]>(`${environment.APIURL}/Users?email=${val}`);
    if(found)
    return true;
    else 
    return false;
  }
}

