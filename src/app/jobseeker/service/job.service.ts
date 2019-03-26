import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from '../class/job';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jobData from './jobData.json';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private http: HttpClient;
  constructor() {
    console.log(jobData);
   }

  getJob(): Observable<Job[]>{
    return of(jobData);
  }
}
