// repositories/UserRepository.js
const db = require('c:/node/my-crud-app/config/database');

class UserRepository {
  constructor() {
    //  this.db = require('../config/database');
    // Você pode adicionar qualquer inicialização aqui, se necessário.
    // Por exemplo, configurar uma instância do pg-promise.
  }

  async findAll() {     
    return await db.any('SELECT * FROM users');
  }

  async findById(id) {
    return await db.one('SELECT * FROM users WHERE id = $1', [id]);
  }

  async create(user) {
    return await db.one('INSERT INTO users(nome) VALUES($1) RETURNING *', [user.nome]);
  }

  async update(id, user) {
    return await db.one('UPDATE users SET nome = $1 WHERE id = $2 RETURNING *', [user.nome, id]);
  }

  async delete(id) {
    return await db.none('DELETE FROM users WHERE id = $1', [id]);
  }
}

module.exports = UserRepository;
