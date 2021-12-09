import { Usuario } from '../login/usuario';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiURLBase + "/api/usuarios";
  tokenURL: string = environment.apiURLBase + environment.retrieveTokenUrl;
  clienteID: string = environment.clienteID;
  clientSecret: string = environment.clientSecret;

  constructor(private http: HttpClient) {

  }

  salvar(usuario: Usuario) : Observable<any> {
    return this.http.post(this.apiURL, usuario)
  }

  tentarLogar(username: string, password: string): Observable<any> {
    const params = new HttpParams()
                        .set('username', username)
                        .set('password', password)
                        .set('grant_type', 'password')

    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clienteID}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    return this.http.post(this.tokenURL, params.toString(), { headers })
  }
}
