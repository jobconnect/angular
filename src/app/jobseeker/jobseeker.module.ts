import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeResolveService } from './resolve/home-resolve.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { CategoryResolveService } from './resolve/category-resolve.service';
import { JobComponent } from './job/job.component';
import { JobResolveService } from './resolve/job-resolve.service';
import { SampleInterviewComponent } from './sample-interview/sample-interview.component';
import { InterviewEtiquetteComponent } from './interview-etiquette/interview-etiquette.component';
import { InterviewEtiquetteService } from './resolve/interview-etiquette.service';
//Định nghĩa router riêng cho module này
const routing: Routes = [
  { path: '', component: JobseekerComponent, children: [{
    path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent, resolve: { 'jobs': HomeResolveService, 'cate': CategoryResolveService }},
    {path: 'find', loadChildren: './findjob/findjob.module#FindjobModule'},
    {path: 'job/:id', component: JobComponent, resolve: {'job': JobResolveService, 'other': HomeResolveService}},
    {path: 'sample-interview', component: SampleInterviewComponent},
    {path: 'interview-etiquette', component: InterviewEtiquetteComponent, resolve: {'video': InterviewEtiquetteService}}
], }
];

//forChild -> Vì router này sẽ được load như một router con
//cho nên chúng ta định nghĩa forChild cho router này
const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
  declarations: [JobseekerComponent, NavbarComponent ,HomeComponent, SampleInterviewComponent, InterviewEtiquetteComponent ,JobComponent, FooterComponent],
  imports: [
    CommonModule,
    Routing,
    NgxPaginationModule
  ]
})
export class JobseekerModule { }
