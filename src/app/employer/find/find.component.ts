import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/jobseeker/class/employee';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  employees: Employee[];
  findEmp: Employee[];
  name = new FormControl('');
  job = new FormControl('');
  constructor(route: ActivatedRoute) {
    route.data.subscribe((data)=>{
      this.employees = data.emp;
    })
  }

  onSubmit(){
    this.findEmp = this.employees.filter(x=>x.name.includes(this.name.value)&&x.job.includes(this.name.value));
  }

  ngOnInit() {
  }

}
