import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hellopage',
  templateUrl: './hellopage.component.html',
  styleUrls: ['./hellopage.component.css']
})
export class HellopageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void{
      alert(this.usrName.value);
  }
}
