import { ClientesService } from './../../clientes.service';
import { ClienteDTORequest } from './../clienteDTORequest';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: ClienteDTORequest[] = [];

  constructor(private service: ClientesService) { }

  ngOnInit(): void {
    this.clientes = this.service.getClientes();
  }

}
