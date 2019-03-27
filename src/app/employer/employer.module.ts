import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerComponent } from './employer/employer.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { FindComponent } from './find/find.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeeService } from '../jobseeker/resolve/employee.service';

//Định nghĩa router riêng cho module này
const routing: Routes = [{ 
  path: '', component: EmployerComponent, children: [
    {path: '', redirectTo: 'home'},
    {path: 'home', component: HomeComponent, resolve: {'emp':EmployeeService}},
    {path: 'find', component: FindComponent, resolve: {'emp': EmployeeService}}
  ]
}];

//forChild -> Vì router này sẽ được load như một router con
//cho nên chúng ta định nghĩa forChild cho router này
const Routing: ModuleWithProviders = RouterModule.forChild(routing);
@NgModule({
  declarations: [EmployerComponent, HomeComponent, FindComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    Routing,
    FormsModule,
    ReactiveFormsModule,
    CollapseModule.forRoot()
  ]
})
export class EmployerModule { }
