import { Component, OnInit } from '@angular/core';
import { employee } from '../employee';
import { EMPLIST } from '../empList';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list: employee[];
  selectedEmp: employee;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee(): void{
    this.employeeService.getEmployee().subscribe(list => this.list = list);
  }

  onSelect(emp: employee): void{
    this.selectedEmp = emp;
  }
}
