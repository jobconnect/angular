import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FindjobComponent } from './findjob.component';
import { HomeResolveService } from '../resolve/home-resolve.service';
import { CategoryResolveService } from '../resolve/category-resolve.service';
import { ReactiveFormsModule } from '@angular/forms';
const routing: Routes = [
  { path: '', component: FindjobComponent, resolve: { 'jobs': HomeResolveService, 'cate': CategoryResolveService } }
];
const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
  declarations: [FindjobComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FindjobModule { }
