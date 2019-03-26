import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Job } from '../class/job';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobResolveService {

  constructor(private http:HttpClient) { }
  
  getJob(id): Observable<Job>{
    let _url = "api/jobs?id="+id;
    alert(_url);
    return this.http.get<Job>(_url);
  }
  resolve(route:ActivatedRouteSnapshot){
    let id = route.paramMap.get('id');
    return this.getJob(id);
  }
}
