import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  
  obj = JSON.parse(localStorage.getItem('usr'));

  constructor(public route: Router) { }

  ngOnInit() {
  }
  exit(){
    localStorage.removeItem('usr');
    this.route.navigate(['/']);
  }
}
