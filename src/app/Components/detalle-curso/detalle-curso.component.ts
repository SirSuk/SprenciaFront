import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActividadesService } from 'src/app/services/actividades.service';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.css']
})
export class DetalleCursoComponent {
  detalleCurso!: any[]
  categoria!:number
  
  constructor(private servicio: ActividadesService,
              private ActivatedRoute: ActivatedRoute){}

  ngOnInit():void {
     this.ActivatedRoute.params.subscribe(param => {
        this.categoria=(Number(param['id']))
           this.servicio.getDetalleCurso(this.categoria).subscribe(data => {
              this.detalleCurso = data;
              console.log(this.detalleCurso)
            })
      })

  }


}
