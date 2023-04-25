import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { SkillsComponent } from './skills/skills.component';
import { BannerComponent } from './banner/banner.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IntroComponent } from './intro/intro.component';
import { NavbardashboardComponent } from './navbardashboard/navbardashboard.component';
import { LogoutdashboardComponent } from './logoutdashboard/logoutdashboard.component';
import { PanelComponent } from './dashboard/panel/panel.component';
import { ModalEducacionComponent } from './dashboard/panel/modal-educacion/modal-educacion.component';
import { ModalUsuarioComponent } from './dashboard/panel/modal-usuario/modal-usuario.component';
import { ModalInfoComponent } from './dashboard/panel/modal-info/modal-info.component';
import { ModalExperienciaComponent } from './dashboard/panel/modal-experiencia/modal-experiencia.component';
import { ModalRedesComponent } from './dashboard/panel/modal-redes/modal-redes.component';
import { ModalPortfolioComponent } from './dashboard/panel/modal-portfolio/modal-portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalHardskillComponent } from './dashboard/panel/modal-hardskill/modal-hardskill.component';
import { ModalSoftskillComponent } from './dashboard/panel/modal-softskill/modal-softskill.component';
import { ModalBannerComponent } from './dashboard/panel/modal-banner/modal-banner.component';
import { InterceptorService } from './servicios/interceptor.service';
import { PersonaService } from './servicios/persona.service';
import { LoginService } from './servicios/login.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    AcercadeComponent,
    EducacionComponent,
    ExperienciaComponent,
    SkillsComponent,
    BannerComponent,
    ProyectosComponent,
    DashboardComponent,
    ErrorComponent,
    IntroComponent,
    NavbardashboardComponent,
    LogoutdashboardComponent,
    PanelComponent,
    ModalEducacionComponent,
    ModalUsuarioComponent,
    ModalInfoComponent,
    ModalExperienciaComponent,
    ModalRedesComponent,
    ModalPortfolioComponent,
    ModalHardskillComponent,
    ModalSoftskillComponent,
    ModalBannerComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [LoginService, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
