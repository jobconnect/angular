import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FindjobComponent } from './findjob/findjob.component';
import { HomeResolveService } from './resolve/home-resolve.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { JobComponent } from './job/job.component';
import { JobResolveService } from './resolve/job-resolve.service';
import { CategoryResolveService } from './resolve/category-resolve.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SampleInterviewComponent } from './sample-interview/sample-interview.component';
import { InterviewEtiquetteComponent } from './interview-etiquette/interview-etiquette.component';
import { InterviewEtiquetteService } from './resolve/interview-etiquette.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { VoidInterviewComponent } from './void-interview/void-interview.component';
import { DetailsComponent } from './void-interview/details/details.component';
import { InterviewVoidService } from './resolve/interview-void.service';
import { FooterComponent } from './footer/footer.component';


//Định nghĩa router riêng cho module này
const routing: Routes = [
  { path: '', component: JobseekerComponent, children: [{
    path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent, resolve: { 'jobs': HomeResolveService, 'cate': CategoryResolveService }},
    {path: 'find', component: FindjobComponent, resolve: { 'jobs': HomeResolveService, 'cate': CategoryResolveService }},
    {path: 'job/:id', component: JobComponent, resolve: {'job': JobResolveService, 'other': HomeResolveService}},
    {path: 'sample-interview', component: SampleInterviewComponent},
    {path: 'interview-etiquette', component: InterviewEtiquetteComponent, resolve: {'video': InterviewEtiquetteService}},
    {path: 'void-interview', component: VoidInterviewComponent, resolve: {'post': InterviewVoidService}},
    {path: 'void-interview/:id', component: DetailsComponent, resolve: {'post': InterviewVoidService}},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
], }
];

//forChild -> Vì router này sẽ được load như một router con
//cho nên chúng ta định nghĩa forChild cho router này
const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
  declarations: [JobseekerComponent, AboutComponent, NavbarComponent ,FooterComponent, HomeComponent, FindjobComponent, JobComponent, SearchComponent, SampleInterviewComponent, InterviewEtiquetteComponent, ContactComponent, VoidInterviewComponent, DetailsComponent ],
  imports: [
    CommonModule,
    Routing,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    CollapseModule.forRoot()
  ]
})
export class JobseekerModule { }
