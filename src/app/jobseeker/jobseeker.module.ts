import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FindjobComponent } from './findjob/findjob.component';
import { HomeResolveService } from './resolve/home-resolve.service';
//Định nghĩa router riêng cho module này
const routing: Routes = [
  { path: '', component: JobseekerComponent, children: [{
    path: '', redirectTo: 'home'},
    {path: 'home', component: HomeComponent, resolve: { 'jobs': HomeResolveService }},
  {path: 'find', component: FindjobComponent}
], }
];

//forChild -> Vì router này sẽ được load như một router con
//cho nên chúng ta định nghĩa forChild cho router này
const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
  declarations: [JobseekerComponent, NavbarComponent ,HomeComponent, FooterComponent, FindjobComponent ],
  imports: [
    CommonModule,
    Routing
  ]
})
export class JobseekerModule { }
