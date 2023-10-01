// controllers/UserController.js
const express = require('express');
const UserService = require('../services/UserService');

const router = express.Router();
const userService = new UserService();

router.get('/', async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  res.json(user);
});

router.post('/', async (req, res) => {
  const { nome } = req.body;
  const user = await userService.createUser(nome);
  res.json(user);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  const updatedUser = await userService.updateUser(id, nome);
  res.json(updatedUser);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await userService.deleteUser(id);
  res.sendStatus(204);
});

module.exports = router;
