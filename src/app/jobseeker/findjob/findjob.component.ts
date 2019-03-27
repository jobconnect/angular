import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../class/job';
import { Category } from '../class/category';
import { FormControl } from '@angular/forms';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-findjob',
  templateUrl: './findjob.component.html',
  styleUrls: ['./findjob.component.css']
})
export class FindjobComponent implements OnInit {
  filterArgs = {name: 'Frontend'};
  jobs: Job[];
  category: Category[];
  name= new FormControl('');
  select = new FormControl('');
  location = new FormControl('');
  loadComponent = false;
  findJob: Job[];
  constructor(route: ActivatedRoute) { 
    route.data.subscribe((data)=>{
      this.jobs = data.jobs;
      this.category = data.cate;
    })
  }

  onSubmit(){
    this.findJob = this.jobs.filter(job=> job.name.indexOf(this.name.value) && String(job.summary['address']).indexOf(this.location.value));
    this.loadComponent = true;
  }

  ngOnInit() {
  }

}
