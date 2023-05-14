import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './modal/login/login.component';
import { IndexComponent } from './index/index.component';
import { RedesComponent } from './redes/redes.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { RegistroComponent } from './modal/registro/registro.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './dashboard/perfil/perfil.component';
import { ExperienciaLaboralComponent } from './dashboard/experiencia-laboral/experiencia-laboral.component';
import { EstudiosComponent } from './dashboard/estudios/estudios.component';
import { HardysComponent } from './dashboard/hardys/hardys.component';
import { ProyComponent } from './dashboard/proy/proy.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    LoginComponent,
    IndexComponent,
    RedesComponent,
    SobreMiComponent,
    ExperienciaComponent,
    RegistroComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    DashboardComponent,
    PerfilComponent,
    ExperienciaLaboralComponent,
    EstudiosComponent,
    HardysComponent,
    ProyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
