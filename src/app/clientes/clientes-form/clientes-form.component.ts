import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';

import { ClienteDTORequest } from '../clienteDTORequest';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: ClienteDTORequest;

  constructor( private service: ClientesService ) {
    this.cliente = new ClienteDTORequest();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service
      .salvar(this.cliente)
      .subscribe(response => {
        console.log(response);

      });
  }

}
