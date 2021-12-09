# api-clientes-front

Frontend de um sistema de gerenciamento de clientes.

## Tecnologias utilizadas

* Angular
* Typescript
* Bootstrap

## Rodando o projeto

1. Baixar o repositório na máquina local através do comando:
```
git clone https://github.com/fpsaraiva/api-clientes-front.git
```
2. Abrir o projeto na IDE.
3. Subir a aplicação, digitando o seguinte comando no terminal:
```
ng serve
```
4. Acessar a URL http://localhost:4200/login no navegador

Obs: para que o projeto funcione, é necessário que o [backend da aplicação](https://github.com/fpsaraiva/api-clientes) esteja rodando.
## Funcionalidades

* Formulário de cadastro de usuários e de login.
* Tela de listagem dos clientes cadastrados.
* Formulário para cadastro de clientes.
* Opções de atualização e de remoção de clientes cadastrados.
* Logout.

## Bugs encontrados

* Fechar o modal de deletar cliente após o registro ser removido.
* Revisar a geração de tokens para usuários diferentes que utilizam o mesmo navegador.

## Melhorias futuras

* Permitir o cadastro de endereços no momento do cadastro de um cliente, com a possibilidade de definir endereço principal.
* Permitir o cadastro de telefones no momento do cadastro de um cliente.
* Deploy da aplicação.

