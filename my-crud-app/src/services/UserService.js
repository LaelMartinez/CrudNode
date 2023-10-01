// services/UserService.js
const UserRepository = require('../repositories/UserRepository');
const User = require('../models/User');

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async getAllUsers() {
    return await this.userRepository.findAll();
  }

  async getUserById(id) {
    return await this.userRepository.findById(id);
  }

  async createUser(nome) {
    const user = new User(null, nome);
    return await this.userRepository.create(user);
  }

  async updateUser(id, nome) {
    const user = new User(null, nome);
    return await this.userRepository.update(id, user);
  }

  async deleteUser(id) {
    return await this.userRepository.delete(id);
  }
}

module.exports = UserService;
