const initOptions = {
  // Coloque aqui as opções de inicialização do PostgreSQL, se necessário
};

const pgp = require('pg-promise')(initOptions);

// Configuração da conexão com o PostgreSQL
const connection = {
  host: 'localhost', // Host do PostgreSQL
  port: 5432, // Porta do PostgreSQL
  database: 'node', // Nome da sua base de dados
  user: 'postgres', // Seu nome de usuário do PostgreSQL
  password: '123456', // Sua senha do PostgreSQL
};

const db = pgp(connection);

module.exports = db;
