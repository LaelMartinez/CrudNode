const initOptions = {
  // Coloque aqui as opções de inicialização do PostgreSQL, se necessário
};

const pgp = require('pg-promise')(initOptions);

// Configuração da conexão com o PostgreSQL
const connection = {
  host: 'localhost', // Host do PostgreSQL
  port: 5432, // Porta do PostgreSQL
  database: 'sua_database', // Nome da sua base de dados
  user: 'seu_usuario', // Seu nome de usuário do PostgreSQL
  password: 'sua_senha', // Sua senha do PostgreSQL
};

const db = pgp(connection);

module.exports = db;
