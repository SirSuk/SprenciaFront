import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY, catchError } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form! : FormGroup;
  alerta: boolean = false;
  usuarioCreado: boolean= false
  mensajeError: string = ''

  constructor(private LoginService: LoginService,
              private Router: Router){}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
  });
 }

 onSubmit() {
  this.LoginService.login(this.form.value).pipe(
    catchError((e) => {
      this.mensajeError = e.error.error
      return EMPTY
    })
  ).subscribe(data => {
    if(data.token !== undefined)
    localStorage.setItem('token', data.token)
    this.Router.navigate(['/dashboard'])
 })
 }
}
