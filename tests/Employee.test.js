const Employee = require('../lib/Employee')

describe('Employee Class Constructor', () => {
    it('Initializes an object with class Employee', () =>{
        expect(new Employee('Zahir',30,'zTehrani@test.com')).toBeInstanceOf(Employee)
    });
    it('should have a method getRole() which returns Employee', () => {
        expect (new Employee('Alexa', 2, 'aBett@test.com').getRole()).toBe('Employee')
    })
    it('should save the employee\'s email', () => {
        expect (new Employee('Irina', 14, 'iZahv@test.com').getEmail()).toBe('iZahv@test.com')
    })
})