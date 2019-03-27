import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Job } from '../class/job';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService{

  constructor(private http:HttpClient) { }
  
  getEmp(): Observable<Job>{
    let _url = "api/employee";
    return this.http.get<Job>(_url);
  }
  resolve(route:ActivatedRouteSnapshot){
    return this.getEmp();
  }
}
