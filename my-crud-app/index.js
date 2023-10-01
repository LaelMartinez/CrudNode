const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Importa a configuração do banco de dados
const db = require('./config/database');

// Importa as rotas
const userController = require('./src/controllers/UserController');

// Rotas
app.use('/users', userController);

// Lida com erros 404
app.use((req, res) => {
  res.status(404).json({ message: 'Recurso não encontrado' });
});

// Lida com erros 500 (erro interno do servidor)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Erro interno do servidor' });
});

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
