import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HellopageComponent } from '../app/hellopage/hellopage.component';

const routes: Routes = [
  { path: '', component: HellopageComponent},
  { path: 'jobseeker', loadChildren: './jobseeker/jobseeker.module#JobseekerModule'},
  { path: 'employeeseeker', component: HellopageComponent}
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
