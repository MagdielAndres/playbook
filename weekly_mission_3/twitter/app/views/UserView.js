const UserService = require('./../services/UserService')

class UserView{

    static createUser(payload){
        
        if(payload === null){            
            return {error: "payload no existe"}
        }else if((typeof payload.username !== 'string' || payload.username === null) || (typeof payload.name !== 'string' || payload.name === null) || (typeof payload.id !== 'number' || payload.id === null)){
            return {error: "necesita tener un valor válido"}
        }else{
            
            return UserService.create(payload.id, payload.username, payload.name)
        } 
    }
}

// const payload = { username: "username", id: 1, name: "name"}
// const result = UserView.createUser(payload)
// console.log(result)
module.exports = UserView;