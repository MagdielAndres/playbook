const UserService = require('./../../app/services/UserService');

describe('Test for UserService', () => { 
    test('1. Create a new user using the UserService', () => { 
        const user = UserService.create(1, "MagdielAndres", "Magdiel Andrés");

        expect(user.id).toBe(1);
        expect(user.username).toBe("MagdielAndres");
        expect(user.user).toBe("Magdiel Andrés");
        expect(user.bio).not.toBeUndefined();
    });

    test('2. Get all user data in a list', () => { 
        const user = UserService.create(1, "MagdielAndres", "Magdiel Andrés");
        const userInfoInList = UserService.getInfo(user);

        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe("MagdielAndres");
        expect(userInfoInList[2]).toBe("Magdiel Andrés");
        expect(userInfoInList[3]).toBe("Sin bio");
    });

    test('3. Update username', () => { 
        const user = UserService.create(1, "MagdielAndres", "Magdiel Andrés");
        UserService.updateUserUsername(user, "magdiel");
        expect(user.username).toBe("magdiel");
    });

    //Requerimiento 4: Agregar un nuevo método estático en `UserService` llamado `getAllUsernames`, que recibirá una lista de objetos de la clase `User`, y regresará la lista de todos los usernames de dichos objetos
    test('4. Give a list of users give me the list of username', () => { 
        const user1 = UserService.create(1, "MagdielAndres1", "Magdiel Andrés");
        const user2 = UserService.create(1, "MagdielAndres2", "Magdiel Andrés");
        const user3 = UserService.create(1, "MagdielAndres3", "Magdiel Andrés");

        const username = UserService.getAllUsernames([user1, user2, user3]);

        expect(username).toContain("MagdielAndres1");
        expect(username).toContain("MagdielAndres2");
        expect(username).toContain("MagdielAndres3");

    });
})