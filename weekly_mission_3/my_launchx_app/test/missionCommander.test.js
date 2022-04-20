const MisssionCommander = require('./../app/missionCommander');

describe('Unit Tests for Mission Commander Class', () => {
    test('1) Create a mission commander objet', () => {
        
        const myMissionCommander =  new MisssionCommander("Woopa");
        
        expect(myMissionCommander.name).toBe("Woopa");
    });
})