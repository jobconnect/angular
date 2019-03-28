import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
      if(this.jobRadio.value == 0){
        window.location.href= "/jobseeker";
      }

      if(this.jobRadio.value == 1){
        window.location.href= "/employer";
      }
      
    } else {
      this.route.navigate(['/']);
    }
  }

  constructor(private route:Router) { }

  ngOnInit() {
    this.jobRadio.setValue("0");
  }
}
