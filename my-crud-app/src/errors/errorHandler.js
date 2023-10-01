// errorHandler.js

function errorHandler(err, req, res, next) {
  console.error(err); // Registre o erro para fins de depuração.

  if (err instanceof NotFoundError) {
    // Se for um erro de recurso não encontrado (404), responda com uma mensagem personalizada.
    return res.status(404).json({ error: 'Recurso não encontrado' });
  }

  if (err instanceof ValidationError) {
    // Se for um erro de validação, responda com uma mensagem personalizada.
    return res.status(400).json({ error: 'Erro de validação: ' + err.message });
  }

  // Outros erros são tratados como erros internos do servidor.
  res.status(500).json({ error: 'Ocorreu um erro interno do servidor' });
}

module.exports = errorHandler;

  