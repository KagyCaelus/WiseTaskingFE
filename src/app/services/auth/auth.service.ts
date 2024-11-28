import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { userRegister } from '../../models/userRegister';
import { userLogin } from '../../models/userLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.apiURL + 'Auth'

  constructor(private http: HttpClient) { }

  register(user : userRegister) : Observable<any> {
    return this.http.post(`${this.url}/register`, user)
  }

  login(user : userLogin) : Observable<any> {
    return this.http.post(`${this.url}/login`, user)
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
  }
}
