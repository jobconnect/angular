import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Job } from '../../class/job';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() jobs:Job[];
  constructor(private ref: ChangeDetectorRef) {
    setTimeout(() => {
      console.log(this.jobs);
      this.ref.markForCheck();
    },2000)
  }

  ngOnInit() {
  }
  
}
