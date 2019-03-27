import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Job } from '../class/job';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeResolveService implements Resolve<any>{

  constructor(private http:HttpClient) { }
  _url = "api/jobs";
  getJob(): Observable<Job[]>{
    return this.http.get<Job[]>(this._url);
  }
  resolve(route:ActivatedRouteSnapshot){
    return this.getJob();
  }
}
