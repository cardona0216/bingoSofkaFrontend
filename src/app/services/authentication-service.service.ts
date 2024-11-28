import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {


  private apiUrl = 'https://localhost:7212/'; // Cambia esto a la URL de tu API

  constructor(private http: HttpClient) { }

  login(credentials: { nombreUsuario: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}login`, credentials, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  

  register(usuario: { nombreUsuario: string, correo: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}registrar`, usuario); // Llamada al endpoint de registro
  }
}
