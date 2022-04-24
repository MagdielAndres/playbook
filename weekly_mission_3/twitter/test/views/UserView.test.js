const UserService = require('../../app/services/UserService');
const UserView = require('./../../app/views/UserView');

describe('Test for UserView', () => { 

    // 1. Valida que al enviar en el `payload` un valor `null`, obtenga un objeto con la llave `error` y el valor indique `payload no existe`.
    test('1. Return an error object when try to creat a new user whit an null playload', () => { 
        const payload = null;
        const result = UserView.createUser(payload);
        //https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/);
    });

    // 2. Valida que un `payload` contenga en alguna de las llaves `username`, `name`, o `id` un valor en `null`. Si hay un valor `null` regresa un objeto con la llave `error` y que indique el texto: `necesitan tener un valor válido`.
    test('2. Return an error object when try to create a new user with invalid properties', () => { 
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/necesita tener un valor válido/)
    });


    // 3. Valida que un `payload` con algunas de las propiedades necesarias regrese un objeto con la llave `error` indicando `necesitan tener un valor válido`.
    test('3. Return an error object when try to create a new user whith a payload whith missing properties', () => { 
        const payload = {username: "username"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesita tener un valor válido/)
    });


    // 4. Verifica que se pueda crear un objeto `User`, al enviar un payload con las siguientes propiedades: `username`, `id` y `name`.
    test('Create a user by a give valid payload', () => { 
        const payload = { username: "username", id: 1, user: "name"}
        const result = UserView.createUser(payload)
        expect(result.user).toBe("name")
        expect(result.username).toBe("username")
        expect(result.id).toBe(1)
    });
})