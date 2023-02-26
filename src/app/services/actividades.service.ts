import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  urlBase = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

   ngOnInit(){}


  getCategorias(){
    return this.http.get<any[]>(this.urlBase + 'categorias')
  }

  getEmpresas() {
        return this.http.get<any[]>(this.urlBase + 'empresas')
  }

  getCursosByCategoria(idCategoria:number){
    return this.http.get<any[]>(this.urlBase + 'categorias/cursos/' +idCategoria)
  }

}