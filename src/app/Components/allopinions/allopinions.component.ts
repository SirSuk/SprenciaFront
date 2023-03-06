import { Component } from '@angular/core';
import { ActividadesService } from 'src/app/services/actividades.service';

@Component({
  selector: 'app-allopinions',
  templateUrl: './allopinions.component.html',
  styleUrls: ['./allopinions.component.css']
})
export class AllopinionsComponent {
opiniones! : any[]

  constructor(private servicio: ActividadesService){}

  ngOnInit():void {
    this.servicio.getAllOpinions().subscribe(data => {
      this.opiniones = data;
      console.log(this.opiniones)
    })
  }


}