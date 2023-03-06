import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriasComponent } from './Components/categorias/categorias.component';

import { EmpresasComponent } from './Components/empresas/empresas.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { WorkwithusComponent } from './Components/workwithus/workwithus.component';
import { ListadoCursosComponent } from './Components/listado-cursos/listado-cursos.component';
import { DetalleCursoComponent } from './Components/detalle-curso/detalle-curso.component';
import { OpinionesComponent } from './Components/opiniones/opiniones.component';
import { HomeComponent } from './Components/home/home.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EditarComponent } from './Components/editar/editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdduserComponent } from './Components/adduser/adduser.component';
import { EditusersComponent } from './Components/editusers/editusers.component';
import { AllopinionsComponent } from './Components/allopinions/allopinions.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriasComponent,
    EmpresasComponent,
    LoginComponent,
    RegisterComponent,
    WorkwithusComponent,
    ListadoCursosComponent,
    DetalleCursoComponent,
    OpinionesComponent,
    HomeComponent,
    DashboardComponent,
    EditarComponent,
    AdduserComponent,
    EditusersComponent,
    AllopinionsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
