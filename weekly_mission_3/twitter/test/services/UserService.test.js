const User = require('../../app/models/User');
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
})