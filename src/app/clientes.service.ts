import { ClienteDTORequest } from './clientes/clienteDTORequest';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient) {

  }

  salvar( cliente: ClienteDTORequest ): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/clientes', cliente);
  }

  getCliente(): ClienteDTORequest {
    let cliente: ClienteDTORequest = new ClienteDTORequest();
    cliente.nome = 'Fulando';
    cliente.documento = '55555555555';
    return cliente;
  }
}
