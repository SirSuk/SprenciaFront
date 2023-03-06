import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form! : FormGroup;
  mensajeError: string = ''
  usuarioCreado: boolean= false
  alerta: boolean = false

  constructor(private LoginService: LoginService,
              private Router: Router){}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
  });
 }

 onSubmit() {
  this.LoginService.register(this.form.value).subscribe(data => {
   this.form.reset;
   this.alerta = true
   setTimeout(() => {
    this.usuarioCreado = true
    this.alerta = false

   }, 1000);
     
    
  })
 }

}
