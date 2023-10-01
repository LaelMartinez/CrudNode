// controllers/UserController.js
const express = require('express');
const UserService = require('../services/UserService');
const { NotFoundError, ValidationError } = require('../errors/customErrors'); // Importe as classes de erro personalizadas.
const errorHandler = require('../errors/errorHandler'); // Importe o middleware de tratamento de erros.

const router = express.Router();
const userService = new UserService();

router.get('/', async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();

    res.json(users);
  } catch (err) {
    next(err); // Passe o erro para o middleware de tratamento de erros.
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);

    if (!user) {
      throw new NotFoundError('Usuário não encontrado');
    }

    res.json(user);
  } catch (err) {
    next(err); // Passe o erro para o middleware de tratamento de erros.
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { nome } = req.body;
    const user = await userService.createUser(nome);
    res.json(user);

    if (!user) {
      throw new NotFoundError('Erro Inserindo Usuário!');
    }


  } catch (err) {
    next(err); // Passe o erro para o middleware de tratamento de erros.
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nome } = req.body;
    const updatedUser = await userService.updateUser(id, nome);

    if (!updatedUser) {
      throw new NotFoundError('Erro Alterando Usuário!');
    }
   
    res.json(updatedUser);
  } catch (err) {
    next(err); // Passe o erro para o middleware de tratamento de erros.
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);
    res.sendStatus(204);
  } catch (err) {
    next(err); // Passe o erro para o middleware de tratamento de erros.
  }
});

router.use(errorHandler);

module.exports = router;
