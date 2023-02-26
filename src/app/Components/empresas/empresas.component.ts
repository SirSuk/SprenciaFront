import { Component } from '@angular/core';
import { ActividadesService } from 'src/app/services/actividades.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent {
empresas! :any[]

constructor(private servicio: ActividadesService){}


ngOnInit() {
 this.servicio.getEmpresas().subscribe(data => {
  this.empresas = data
  console.log(data)
 })
}
}
