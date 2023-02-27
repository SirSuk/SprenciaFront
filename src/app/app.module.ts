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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
