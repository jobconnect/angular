import { Component, OnInit } from '@angular/core';
import { Job } from '../class/job';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../class/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jobs: Job[];
  category: Category[];
  constructor(route: ActivatedRoute) { 
    route.data.subscribe((data)=>{
      this.jobs = data.jobs;
      this.category = data.cate;
    })
  }
  
  ngOnInit() {
  }

}
