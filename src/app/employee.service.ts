import { Injectable } from '@angular/core';
import { employee } from '../app/employee';
import { EMPLIST } from '../app/empList';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployee(): Observable<employee[]>{
    return of(EMPLIST);
  }
}
