import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/jobseeker/class/employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees: Employee[];
  constructor(route: ActivatedRoute) { 
    route.data.subscribe((data)=>{
      this.employees = data.emp;
      console.log(this.employees)
    })
  }

  ngOnInit() {
  }

}
