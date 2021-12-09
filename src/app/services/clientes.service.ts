import { ClienteDTORequest } from '../clientes/clienteDTORequest';
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

  getClientes(): Observable<ClienteDTORequest[]> {
    const tokenString = localStorage.getItem('access_token') as string;
    const token = JSON.parse(tokenString)
    const headers = {
      'Authorization': 'Bearer ' + token.access_token
    }
    return this.http.get<ClienteDTORequest[]>('http://localhost:8080/api/clientes?size=50', {headers});
  }

  getClienteById(id: number): Observable<ClienteDTORequest> {
    return this.http.get<any>(`http://localhost:8080/api/clientes/${id}`);
  }

  atualizar(  cliente: ClienteDTORequest ): Observable<ClienteDTORequest> {
    return this.http.patch<ClienteDTORequest>(`http://localhost:8080/api/clientes/${cliente.id}`, cliente);
  }

  deletar(  cliente: ClienteDTORequest ): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/clientes/${cliente.id}`);
  }
}
