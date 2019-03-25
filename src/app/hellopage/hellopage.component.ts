import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgLocalization } from '@angular/common';

@Component({
  selector: 'app-hellopage',
  templateUrl: './hellopage.component.html',
  styleUrls: ['./hellopage.component.css']
})
export class HellopageComponent implements OnInit {
  submitted = false;

  name = new FormControl('');
  jobRadio = new FormControl('');

  onSubmit() { 
    if(this.name.value!=""){
      localStorage.setItem('usr', JSON.stringify({name: this.name.value, 
      jobRadio: Number(this.jobRadio.value)}));
    }
  }

  constructor() { }

  ngOnInit() {
    this.jobRadio.setValue("0");
  }
}
