const User = require('./../models/User');

class UserService {
    static create(id, username, user){
        return new User(id, username, user, "Sin bio");
    }

    static getInfo(user){
        return [user.id, user.username, user.user, user="Sin bio"];
    }
}



module.exports = UserService;