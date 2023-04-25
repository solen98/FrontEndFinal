import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IntroComponent } from './intro/intro.component';
import { ModalHardskillComponent } from './dashboard/panel/modal-hardskill/modal-hardskill.component';
import { GuardGuard } from './servicios/guard.guard';
import { LoginComponent } from './modals/login/login.component';

const routes: Routes = [
{path:'', component:IntroComponent},
{path: 'login', component: LoginComponent},
{path:'dashboard', component:DashboardComponent, canActivate: [GuardGuard]},
{path: '', redirectTo:'/', pathMatch: 'full'},
{path: 'error', component:ErrorComponent}, 
{path: 'editskill/:id', component:ModalHardskillComponent} ,


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
