import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActividadesService } from 'src/app/services/actividades.service';

@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent {
  listadoCursos!: any[]
  categoria!:number;
  
  constructor(private servicio: ActividadesService,
              private ActivatedRoute: ActivatedRoute){}

  ngOnInit():void {
     this.ActivatedRoute.params.subscribe(param => {
        this.categoria=(Number(param['id']))
           this.servicio.getCursosByCategoria(this.categoria).subscribe(data => {
              this.listadoCursos = data;
              console.log(this.listadoCursos)
            })
      })

 
  }
}
