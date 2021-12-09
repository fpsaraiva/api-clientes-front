import { ClientesService } from '../../services/clientes.service';
import { ClienteDTORequest } from './../clienteDTORequest';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: ClienteDTORequest[] = [];
  clienteSelecionado: ClienteDTORequest;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private service: ClientesService,
    private router: Router) {}

  ngOnInit(): void {
    this.service
    .getClientes()
    .subscribe(resposta => this.clientes = resposta);
  }

  novoCadastro() {
    this.router.navigate(['/clientes/form'])
  }

  preparaParaDeletar(cliente: ClienteDTORequest) {
    this.clienteSelecionado = cliente;
  }

  deletarCliente() {
    this.service
      .deletar(this.clienteSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = 'Cliente deletado com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar o cliente.'
      )
  }
}
