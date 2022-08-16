const Intern = require('../lib/Intern')

describe('Intern Class Constructor', () => {
    it('Should inherit a property id and the getter getID from Employee', () =>{
        expect(new Intern('Zahir',30,'zTehrani@test.com','Pomona College')).getId().toBe(30)
    });
    it('should have a property "name" given from the args', () => {
        expect (new Intern('Alexa', 2, 'aBett@test.com','Cal Poly Pomona').name).toBe('Alexa')
    })
    it('should have a getter for the intern\'s school name', () => {
        expect (new Intern('Irina', 14, 'iZahv@test.com','Ponoma City College').getSchool()).toBe('Ponoma City College')
    })
})