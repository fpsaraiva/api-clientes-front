import { Usuario } from './login/usuario';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiURLBase + "/api/usuarios"
  constructor(private http: HttpClient) {

  }

  salvar(usuario: Usuario) : Observable<any> {
    return this.http.post(this.apiURL, usuario)
  }
}
