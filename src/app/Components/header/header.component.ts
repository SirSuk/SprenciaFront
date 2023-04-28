import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  role!:string 
  usuario! : any | null
  constructor(private router: Router){}

  ngDoCheck() {
    const user = localStorage.getItem('user');
    if(user) {
      this.usuario = JSON.parse(user)
    }else {
      this.usuario = null
    }
  }


    cerrarSesion() {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  this.router.navigate(['/home'])
  }


}
