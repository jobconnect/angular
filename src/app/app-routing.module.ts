import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HellopageComponent } from '../app/hellopage/hellopage.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HellopageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
