import { Component } from '@angular/core';
import { ActividadesService } from 'src/app/services/actividades.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  categorias!: any[]

  constructor(private servicio: ActividadesService){}

  ngOnInit():void {
    this.servicio.getCategorias().subscribe(data => {
      this.categorias = data;
    })
  }
}