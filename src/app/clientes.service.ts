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

  getClientes(): ClienteDTORequest[] {
    let cliente = new ClienteDTORequest();
    cliente.nome = 'Fulano';
    cliente.documento = '00011122233';
    return [cliente];
  }
}
