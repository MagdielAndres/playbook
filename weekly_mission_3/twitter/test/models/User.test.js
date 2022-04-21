const User = require('./../../app/models/User')

describe('Unit Tests for User class', () => { 
    test('Create an USer object', () => {
        
        //Aquí se invoca el código que se va a usar en la app
        const user = new User(1, "MagdielAndres", "Magdiel Andrés", "Biografía", "dateCreated", "lasUpdated");


        // Aquí validas los resultados de ese código
        // Esta es una comparación que va igualar el valo de la izquierda
        // con el valor de la derecha (valor esperado).
        expect(user.id).toBe(1);
        expect(user.username).toBe("MagdielAndres");
        expect(user.user).toBe("Magdiel Andrés");
        expect(user.bio).toBe("Biografía");
        expect(user.dateCreated).toBe("dateCreated");
        expect(user.lasUpdated).toBe("lasUpdated")
    });
})