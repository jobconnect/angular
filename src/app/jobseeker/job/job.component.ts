import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../class/job';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  job: Job;
  other: Job[];

  constructor(route: ActivatedRoute) {
    route.data.subscribe((data)=>{
      this.job = data.job[0];
      this.other = data.other;
    })
  }

  ngOnInit() {
  }

}
