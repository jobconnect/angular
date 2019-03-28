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
import { InterviewEtiquetteService } from '../jobseeker/resolve/interview-etiquette.service';
import { InterviewEtiquetteComponent } from '../jobseeker/interview-etiquette/interview-etiquette.component';
import { VoidInterviewComponent } from '../jobseeker/void-interview/void-interview.component';
import { DetailsComponent } from '../jobseeker/void-interview/details/details.component';
import { AboutComponent } from '../jobseeker/about/about.component';
import { ContactComponent } from '../jobseeker/contact/contact.component';
import { InterviewVoidService } from '../jobseeker/resolve/interview-void.service';

//Định nghĩa router riêng cho module này
const routing: Routes = [{ 
  path: '', component: EmployerComponent, children: [
    {path: '', redirectTo: 'home'},
    {path: 'home', component: HomeComponent, resolve: {'emp':EmployeeService}},
    {path: 'find', component: FindComponent, resolve: {'emp': EmployeeService}},
    {path: 'interview-eiquette', component: InterviewEtiquetteComponent, resolve: {'video': InterviewEtiquetteService}},
    {path: 'void-interview', component: VoidInterviewComponent, resolve: {'post': InterviewVoidService}},
    {path: 'void-interview/:id', component: DetailsComponent, resolve: {'post': InterviewVoidService}},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent}
  ]
}];

//forChild -> Vì router này sẽ được load như một router con
//cho nên chúng ta định nghĩa forChild cho router này
const Routing: ModuleWithProviders = RouterModule.forChild(routing);
@NgModule({
  declarations: [EmployerComponent, HomeComponent, FindComponent, NavbarComponent, FooterComponent, InterviewEtiquetteComponent, VoidInterviewComponent, DetailsComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    Routing,
    FormsModule,
    ReactiveFormsModule,
    CollapseModule.forRoot()
  ]
})
export class EmployerModule { }
