import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActividadesService } from 'src/app/services/actividades.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 listadoCursos!: any[]
 url!: string
  constructor(private servicio: ActividadesService){}

  ngOnInit():void {
    this.servicio.getAllCursos().subscribe(data => {
      this.listadoCursos = data;
      console.log(this.listadoCursos)
    })
  }
}
