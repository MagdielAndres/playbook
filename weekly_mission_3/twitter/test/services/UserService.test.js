const UserService = require('./../../app/services/UserService');

describe('Test for UserService', () => { 
    test('1. Create a new user using the UserService', () => { 
        const user = UserService.create(1, "MagdielAndres", "Magdiel Andrés");

        expect(user.id).toBe(1);
        expect(user.username).toBe("MagdielAndres");
        expect(user.user).toBe("Magdiel Andrés");
        expect(user.bio).not.toBeUndefined();
    });
})