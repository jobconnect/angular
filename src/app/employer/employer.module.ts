import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerComponent } from './employer/employer.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { FindComponent } from './find/find.component';

//Định nghĩa router riêng cho module này
const routing: Routes = [{ 
  path: '', component: EmployerComponent, children: [
    {path: '', redirectTo: 'home'},
    {path: 'home', component: HomeComponent}
  ]
}];

//forChild -> Vì router này sẽ được load như một router con
//cho nên chúng ta định nghĩa forChild cho router này
const Routing: ModuleWithProviders = RouterModule.forChild(routing);
@NgModule({
  declarations: [EmployerComponent, HomeComponent, FindComponent],
  imports: [
    CommonModule,
    Routing
  ]
})
export class EmployerModule { }
