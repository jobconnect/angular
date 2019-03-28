import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HellopageComponent } from '../app/hellopage/hellopage.component';

const routes: Routes = [
  { path: '', component: HellopageComponent},
  { path: 'jobseeker', loadChildren: './jobseeker/jobseeker.module#JobseekerModule'},
  { path: 'employer', loadChildren: './employer/employer.module#EmployerModule'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
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
        console.log(this.route.url);
        this.route.navigate(['/employer'])
      }
    }
  }
}
