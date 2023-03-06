import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  urlBase = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) { }

   ngOnInit(){}


  getCategorias(){
    return this.http.get<any[]>(this.urlBase + 'categorias')
  }

  getEmpresas() {
        return this.http.get<any[]>(this.urlBase + 'empresas')
  }

  getAllCursos() {
     return this.http.get<any[]>(this.urlBase + 'cursos')
  }
  getCursosByCategoria(idCategoria:number){
    return this.http.get<any[]>(this.urlBase + 'cursos/categoria/' +idCategoria)
  }
  getDetalleCurso(idCurso:number){
    return this.http.get<any[]>(this.urlBase + 'cursos/curso/' +idCurso)
  }

   getOpiniones(idCurso:number){
    return this.http.get<any[]>(this.urlBase + 'opiniones/opinion/curso/' +idCurso)
  }

  getAllOpinions(){
    return this.http.get<any[]>(this.urlBase + 'opiniones')
  }

}