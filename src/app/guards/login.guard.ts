import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard {
  canActivate() : boolean{
    // const token = localStorage.getItem('token');
    // return token ? true : false;
    return true
  }
}
