const UserView = require('./../../app/views/UserView');

describe('Test for UserView', () => { 

    // Valida que al enviar en el `payload` un valor `null`, obtenga un objeto con la llave `error` y el valor indique `payload no existe`.
    test('Return an error object when try to creat a new user whit an null playload', () => { 
        const playload = null;
        const result = UserView.createUser(playload);
        //https://jestjs.io/docs/using-matchers#strings
        expect(result.error).toMatch(/playload no existe/);
    });
})