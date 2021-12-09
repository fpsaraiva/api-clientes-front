import { environment } from './../../environments/environment';
import { ClienteDTORequest } from '../clientes/clienteDTORequest';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient) {  }

  apiURL: string = environment.apiURLBase + '/api/clientes';

  salvar( cliente: ClienteDTORequest ): Observable<any> {
    return this.http.post<any>(`${this.apiURL}`, cliente);
  }

  getClientes(): Observable<ClienteDTORequest[]> {
    return this.http.get<ClienteDTORequest[]>(`${this.apiURL}?size=50`);
  }

  getClienteById(id: number): Observable<ClienteDTORequest> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  atualizar(  cliente: ClienteDTORequest ): Observable<ClienteDTORequest> {
    return this.http.patch<ClienteDTORequest>(`${this.apiURL}/${cliente.id}`, cliente);
  }

  deletar(  cliente: ClienteDTORequest ): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
  }
}
