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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { JobComponent } from './job/job.component';
import { JobResolveService } from './resolve/job-resolve.service';
import { FilterUnique } from './class/filter-unique';
import { CategoryResolveService } from './resolve/category-resolve.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './findjob/search/search.component';
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
  declarations: [JobseekerComponent, NavbarComponent ,HomeComponent, FooterComponent, FindjobComponent, JobComponent, FilterUnique, SearchComponent, SampleInterviewComponent ],
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
