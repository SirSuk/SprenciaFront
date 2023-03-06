import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActividadesService } from 'src/app/services/actividades.service';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.css']
})
export class OpinionesComponent {
opinion! : any[]

  
  constructor(private servicio: ActividadesService,
              private ActivatedRoute: ActivatedRoute){}

  ngOnInit():void {
     this.ActivatedRoute.params.subscribe(param => {
        const opinionID=(Number(param['id']))
        console.log(opinionID)

        this.servicio.getOpiniones(opinionID).subscribe(data => {
          this.opinion = data
        })
      })

  }


}
