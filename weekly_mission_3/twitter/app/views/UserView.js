const UserService = require('./../services/UserService')

class UserView{

    static createUser(playload){
        if(playload == null){
            return {error: "playload no existe"};
        }
    }
}

module.exports = UserView;