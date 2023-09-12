import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://your-api-url'; // Reemplaza con la URL de tu servidor de autenticación
  private token: string | null = null;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  register(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post(`${this.apiUrl}/register`, credentials);
  }

  setToken(token: string) {
    localStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');;
  }
}