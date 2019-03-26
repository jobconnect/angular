import { Component, OnInit } from '@angular/core';
import { JobService } from '../service/job.service';
import { Job } from '../class/job';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private jobService: JobService) {   }
  jobs: Job[];
  ngOnInit() {
    this.getJobs();
  }

  getJobs():void{
    this.jobService.getJob().subscribe(jobs=>this.jobs = jobs);
  }

}
