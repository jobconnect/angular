import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../class/job';
import { Router } from '@reach/router';
import { JobService } from '../service/job.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  job: Job;

  constructor(private jobService: JobService, route: ActivatedRoute) {
    route.data.subscribe((data)=>{
      this.job = data.job[0];
    })
  }

  ngOnInit() {
  }

}
