import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Job } from '../class/job';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'src/app/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class JobService {

  
  constructor(private http: HttpClient, private messageService: MessageService) {

  }
  _url = "api/jobs";
  getJob(): Observable<Job[]>{
    return of([{
      "id": 1,
      "name": "Front End Developers",
      "company": "Facebook Inc.",
      "companyUrl": "https://facebook.com",
      "category": "Fulltime",
      "location": "California"
  }]);
  }

/**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }  
  private log(message: string) {
    this.messageService.add(`JobService: ${message}`);
  }
}
