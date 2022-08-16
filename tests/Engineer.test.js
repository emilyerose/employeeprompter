const Engineer = require('../lib/Engineer')

describe('Engineer Class Constructor', () => {
    it('Initializes an object with class Engineer', () =>{
        expect(new Engineer('Zahir',30,'zTehrani@test.com','zThr')).toBeInstanceOf(Engineer)
    });
    it('should have a method getRole() which returns Engineer', () => {
        expect (new Engineer('Alexa', 2, 'aBett@test.com','ollyin').getRole()).toBe('Engineer')
    })
    it('should save (and have a getter for) the engineer\'s github username', () => {
        expect (new Engineer('Irina', 14, 'iZahv@test.com','IrinaZ').getGithub()).toBe('IrinaZ')
    })
})