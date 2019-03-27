import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  isCollapsed = true;
  
  obj = JSON.parse(localStorage.getItem('usr'));

  ngOnInit() {
  }

}
