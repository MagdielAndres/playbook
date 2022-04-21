const User = require('./../models/User');

class UserService {
    static create(id, username, user){
        return new User(id, username, user, "Sin bio");
    }
}

module.exports = UserService;