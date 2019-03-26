import { Injectable } from '@angular/core';
import { Category } from '../class/category';
import { ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryResolveService {

  constructor(private http:HttpClient) { }
    _url = "api/cate";

    getCategory(): Observable<Category[]>{
      return this.http.get<Category[]>(this._url);
    }
    
    resolve(route:ActivatedRouteSnapshot){
      return this.getCategory();
    }
}
