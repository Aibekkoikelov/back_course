


class UserService {
    constructor() {
      this.users = [];
    }
     async getAllUsers() {
        return this.users;
     }
        async getOneUser(id) {
        return this.users.find((user) => user.id === id);
        }
        async registration(email, password) {

        }
        async login(email, password) {

        }
  }



  module.exports = new UserService();