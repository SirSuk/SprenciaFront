import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-addcurso',
  templateUrl: './addcurso.component.html',
  styleUrls: ['./addcurso.component.css']
})
export class AddcursoComponent {

  form! : FormGroup;
  alerta: boolean = false;
  usuarioCreado: boolean= false

  constructor(private LoginService: LoginService,
              private Router: Router){}

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl(''),
      descripcion: new FormControl(''),
      img_url: new FormControl(''),
      horarios: new FormControl(''),
      precios: new FormControl(''),
      categoria_id: new FormControl(''),
      ubicacion: new FormControl(''),
      dias_semana: new FormControl(''),
      formato: new FormControl(''),
      profesor: new FormControl(''),
  });
 }

 onSubmit() {
  console.log(this.form.value)
  this.LoginService.login(this.form.value).subscribe(data => {
  if(data.token) {
    this.form.reset();
    window.localStorage.setItem('token', data.token)
    this.Router.navigate(['/dashboard'])
  } else {
    this.alerta = true
  }
    
 })
 }
}
