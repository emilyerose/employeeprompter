const Intern = require('../lib/Intern')

describe('Intern Class Constructor', () => {
    it('Should inherit a property id', () =>{
        expect(new Intern('Zahir',30,'zTehrani@test.com','Pomona College').id).toBe(30)
    });
    it('should have a property "name" that you can get via getName', () => {
        expect (new Intern('Alexa', 2, 'aBett@test.com','Cal Poly Pomona').getName()).toBe('Alexa')
    })
    it('should have a getter for the intern\'s school name', () => {
        expect (new Intern('Irina', 14, 'iZahv@test.com','Ponoma City College').getSchool()).toBe('Ponoma City College')
    })
})