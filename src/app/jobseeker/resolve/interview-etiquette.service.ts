import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Video } from '../class/video';

@Injectable({
  providedIn: 'root'
})
export class InterviewEtiquetteService {

  constructor(private http:HttpClient) { }
  _url = "api/video";
  getVideo(): Observable<Video[]>{
    return this.http.get<Video[]>(this._url);
  }
  resolve(route:ActivatedRouteSnapshot){
    return this.getVideo();
  }
}
