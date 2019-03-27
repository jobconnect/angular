import { Component, OnInit, Sanitizer } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../class/video';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-interview-etiquette',
  templateUrl: './interview-etiquette.component.html',
  styleUrls: ['./interview-etiquette.component.css']
})
export class InterviewEtiquetteComponent implements OnInit {

  video: Video[];
  constructor(route: ActivatedRoute, public sanitizer: DomSanitizer) {
    route.data.subscribe((data)=>{
      this.video = data.video;
      console.log(this.video);
    })
  }
  
  ngOnInit() {
  }

}
