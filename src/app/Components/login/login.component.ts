import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private LoginService: LoginService,
              private Router: Router){}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
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
