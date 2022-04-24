const UserView = require('./../../app/views/UserView');

describe('Test for UserView', () => { 

    // 1. Valida que al enviar en el `payload` un valor `null`, obtenga un objeto con la llave `error` y el valor indique `payload no existe`.
    test('Return an error object when try to creat a new user whit an null playload', () => { 
        const payload = null;
        const result = UserView.createUser(payload);
        //https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/payload no existe/);
    });

   // 2. Valida que un `payload` contenga en alguna de las llaves `username`, `name`, o `id` un valor en `null`. Si hay un valor `null` regresa un objeto con la llave `error` y que indique el texto: `necesitan tener un valor válido`.
    test('Return an error object when try to create a new user with a paylod with invalid properties', () => {
        const paload = {username: null, name: 12, id: "id"};
        const result = UserView.createUser(paload);
        expect(result.error).toMatch(/necesitan tener un valor válido/);
    })
})