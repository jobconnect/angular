import { Component, OnInit } from '@angular/core';
import { VoidInterview } from '../../class/void-interview';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  post: VoidInterview[];
  id: number;
  p: VoidInterview;
  constructor(route: ActivatedRoute) {
    route.params.subscribe(p=>this.id=p['id']);
    route.data.subscribe((data)=>{
      this.post = data.post;
      //Just demo code in real life need use from api to make more speed on performance
      this.p = this.post[this.id];
    })
  }

  ngOnInit() {
  }

}
