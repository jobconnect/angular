import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VoidInterview } from '../class/void-interview';
@Injectable({
  providedIn: 'root'
})
export class InterviewVoidService{

  constructor(private http:HttpClient) { }
  _url = "api/interview";
  getVoidIn(): Observable<VoidInterview[]>{
    return this.http.get<VoidInterview[]>(this._url);
  }
  resolve(route:ActivatedRouteSnapshot){
    return this.getVoidIn();
  }
}
