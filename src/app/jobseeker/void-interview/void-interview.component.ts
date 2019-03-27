import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VoidInterview } from '../class/void-interview';

@Component({
  selector: 'app-void-interview',
  templateUrl: './void-interview.component.html',
  styleUrls: ['./void-interview.component.css']
})
export class VoidInterviewComponent implements OnInit {

  post: VoidInterview[];
  constructor(route: ActivatedRoute) { 
    route.data.subscribe((data)=>{
      this.post = data.post;
      console.log(this.post)
    })
  }

  ngOnInit() {
  }

}
