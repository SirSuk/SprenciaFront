import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './Components/categorias/categorias.component';
import { EmpresasComponent } from './Components/empresas/empresas.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { WorkwithusComponent } from './Components/workwithus/workwithus.component';
import { ListadoCursosComponent } from './Components/listado-cursos/listado-cursos.component';
import { DetalleCursoComponent } from './Components/detalle-curso/detalle-curso.component';


const routes: Routes = [
   {path: '', pathMatch: 'full', redirectTo: 'categorias'},
   {path: 'categorias', component: CategoriasComponent},
   {path: 'categorias/:id', component: ListadoCursosComponent },
   {path: 'cursos/detalle/:id', component: DetalleCursoComponent },
   {path: 'empresas', component: EmpresasComponent},
   {path: 'login', component: LoginComponent},
   {path: 'register', component: RegisterComponent},
   {path: 'workwithus', component: WorkwithusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
