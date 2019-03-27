import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FindjobComponent } from './findjob/findjob.component';
import { HomeResolveService } from './resolve/home-resolve.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { JobComponent } from './job/job.component';
import { JobResolveService } from './resolve/job-resolve.service';
import { CategoryResolveService } from './resolve/category-resolve.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SampleInterviewComponent } from './sample-interview/sample-interview.component';
//Định nghĩa router riêng cho module này
const routing: Routes = [
  { path: '', component: JobseekerComponent, children: [{
    path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent, resolve: { 'jobs': HomeResolveService, 'cate': CategoryResolveService }},
    {path: 'find', component: FindjobComponent, resolve: { 'jobs': HomeResolveService, 'cate': CategoryResolveService }},
    {path: 'job/:id', component: JobComponent, resolve: {'job': JobResolveService}},
    {path: 'sample-interview', component: SampleInterviewComponent}
], }
];

//forChild -> Vì router này sẽ được load như một router con
//cho nên chúng ta định nghĩa forChild cho router này
const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
<<<<<<< HEAD
  declarations: [JobseekerComponent, NavbarComponent ,HomeComponent, FooterComponent, FindjobComponent, JobComponent, SampleInterviewComponent, InterviewEtiquetteComponent ],
=======
  declarations: [JobseekerComponent, NavbarComponent ,HomeComponent, FooterComponent, FindjobComponent, JobComponent, FilterUnique, SearchComponent, SampleInterviewComponent ],
>>>>>>> parent of 9d0c67a... working video
  imports: [
    CommonModule,
    Routing,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class JobseekerModule { }