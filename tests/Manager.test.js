const Manager = require('../lib/Manager')

describe('Manager Class Constructor', () => {
    it('Should inherit methods from Employee, like getID', () =>{
        expect(new Manager('Zahir',30,'zTehrani@test.com',204)).getID().toBe(30);
    });
    it('should have a property email', () => {
        expect (new Manager('Alexa', 2, 'aBett@test.com',100).email).toBe('aBett@test.com')
    })
    it('should have a getter for the manager\'s office number', () => {
        expect (new Manager('Irina', 14, 'iZahv@test.com','IC30').getOfficeNumber()).toBe('IC30')
    })
})