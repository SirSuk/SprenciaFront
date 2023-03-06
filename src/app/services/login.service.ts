import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 urlBase = 'http://localhost:3000/api/users/'

  constructor(private http: HttpClient) { }

   ngOnInit(){}

   login(data:any) {
    return this.http.post<any>(this.urlBase + 'login', data)
   }

    register(data:any) {
    return this.http.post<any>(this.urlBase + 'register', data)
   }

}
