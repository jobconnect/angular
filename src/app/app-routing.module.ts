import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HellopageComponent } from '../app/hellopage/hellopage.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HellopageComponent},
  { path: 'jobseeker', component: HomeComponent},
  { path: 'employeeseeker', component: HomeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { 
  constructor(private route: Router){
    if(localStorage.getItem('usr')){
      const {jobRadio} = <any> JSON.parse(localStorage.getItem('usr'));
      if(jobRadio===0){
        this.route.navigate(['/jobseeker']);
      }
      if(jobRadio===1){
        this.route.navigate(['/employeeseeker'])
      }
    }else {
      this.route.navigate(['/']);
    }
  }
}
