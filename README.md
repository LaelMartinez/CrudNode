# My Node CRUD Application 

![Node.js](https://img.shields.io/badge/Node.js-14.17.3-green)
![Express.js](https://img.shields.io/badge/Express.js-4.17.1-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13.4-orange)

Este é um projeto de aplicação CRUD (Create, Read, Update, Delete) simples em Node.js com Clean Architecture, usando PostgreSQL como banco de dados. O projeto foi criado com a ajuda do ChatGPT, um modelo de linguagem da OpenAI.

## Funcionalidades

- [x] Criação, leitura, atualização e exclusão de registros de usuários.
- [x] Estrutura de projeto organizada em camadas: Controllers, Services, Repositories.
- [x] Utilização do PostgreSQL para armazenar dados.

## Pré-requisitos

Certifique-se de ter os seguintes pré-requisitos instalados:

- [Node.js](https://nodejs.org/) (v14.17.3 ou superior)
- [PostgreSQL](https://www.postgresql.org/) (v13.4 ou superior)

## Configuração do Banco de Dados

1. Crie um banco de dados PostgreSQL com o nome "mycrudapp" (você pode alterar o nome no arquivo `config/database.js`).

2. Configure as informações de conexão com o banco de dados no arquivo `config/database.js`.

## Instalação

1. Clone este repositório:
   ```shell
   git clone https://github.com/LaelMartinez/CrudNode.git
   cd my-crud-app
2. Instale as dependências:
   ```shell
   npm install
3. npm run migrate
   ```shell
   npm run migrate
4. Uso
   ```shell
   npm start
   Acesse a API em http://localhost:3001/users.

Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests para melhorar este projeto.

Licença
Este projeto está licenciado sob a Licença MIT.

Este projeto foi criado com a ajuda do ChatGPT, um modelo de linguagem da OpenAI. Todas as funcionalidades, estrutura e configurações foram geradas com base em respostas às perguntas feitas ao ChatGPT.

Powered by ChatGPT






   

