import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './Components/categorias/categorias.component';
import { EmpresasComponent } from './Components/empresas/empresas.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { WorkwithusComponent } from './Components/workwithus/workwithus.component';
import { ListadoCursosComponent } from './Components/listado-cursos/listado-cursos.component';
import { DetalleCursoComponent } from './Components/detalle-curso/detalle-curso.component';
import { OpinionesComponent } from './Components/opiniones/opiniones.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginGuard } from './guards/login.guard';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EditarComponent } from './Components/editar/editar.component';
import { AllopinionsComponent } from './Components/allopinions/allopinions.component';
import { AddcursoComponent } from './Components/addcurso/addcurso.component';


const routes: Routes = [
   {path: '', pathMatch: 'full', redirectTo: 'home'},
   {path: 'home', component: HomeComponent},
   {path: 'categorias', component: CategoriasComponent},
   {path: 'cursos/categoria/:id', component: ListadoCursosComponent },
   {path: 'cursos/curso/:id', component: DetalleCursoComponent , children: [
      {path: 'opiniones', component: OpinionesComponent}]},
   {path: 'empresas', component: EmpresasComponent},
   {path: 'login', component: LoginComponent},
   {path: 'register', component: RegisterComponent},
   {path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard], children: [
      {path: 'addcurso', component: AddcursoComponent},
      {path: 'editar', component: EditarComponent, } ]}
  ,
   {path: 'workwithus', component: WorkwithusComponent},
   {path: 'allopinions', component: AllopinionsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
