const User = require('./../../app/models/User')

describe('Unit Tests for User class', () => { 
    test('Create an USer object', () => {
        
        //Aquí se invoca el código que se va a usar en la app
        const user = new User(1, "MagdielAndres", "Magdiel Andrés", "Biografía");


        // Aquí validas los resultados de ese código
        // Esta es una comparación que va igualar el valo de la izquierda
        // con el valor de la derecha (valor esperado).
        expect(user.id).toBe(1);
        expect(user.username).toBe("MagdielAndres");
        expect(user.user).toBe("Magdiel Andrés");
        expect(user.bio).toBe("Biografía");
        expect(user.dateCreated).not.toBeUndefined(); // Verifica que el valor no sea definida
        expect(user.lasUpdated).not.toBeUndefined(); // Verifica que el valor no sea definida
    });

    test('Requerimiento 2: Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha', () => { 
        
        const user = new User(1, "MagdielAndres", "Magdiel Andrés", "Biografía");

        expect(user.id).toBe(1);
        expect(user.username).toBe("MagdielAndres");
        expect(user.user).toBe("Magdiel Andrés");
        expect(user.bio).toBe("Biografía");
        expect(user.dateCreated).not.toBeUndefined(); // Verifica que el valor no sea definida
        expect(user.lasUpdated).not.toBeUndefined(); // Verifica que el valor no sea definida
    });

    test('Requerimiento 3: add getters: getUsername, getBio, getDateCreated, getLastUpdated', () => { 
        const user =  new User(1, "MagdielAndres", "Magdiel Andrés", "Biografía");

        expect(user.getUsername).toBe("MagdielAndres");
        expect(user.getBio).toBe("Biografía");
        expect(user.getDateCreated).not.toBeUndefined();
        expect(user.getLasUpdated).not.toBeUndefined();
    });
})