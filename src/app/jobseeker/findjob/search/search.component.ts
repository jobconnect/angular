import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../class/category';
import { Job } from '../../class/job';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() n:string;
  constructor() {
  }

  ngOnInit() {
  }

}
