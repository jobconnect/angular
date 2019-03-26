import { Component, OnInit } from '@angular/core';
import { JobService } from '../service/job.service';
import { Job } from '../class/job';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jobs: Job[];
  constructor(private jobService: JobService, route: ActivatedRoute) { 
    route.data.subscribe((data)=>{
      this.jobs = data.jobs;
    })
  }
  
  ngOnInit() {
  }

  public getJobs() {
  }

}
