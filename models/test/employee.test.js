const Employee = require('../employee.model.js');
const expect = require('chai').expect;


describe('Employee', () => {

  it('should throw an error if no "first name", "lastname", "department" arg', () => {
    const emp = new Employee({}); // create new Employee, but don't set `firstname, lastname, department` attr value
      
    emp.validate(err => {
      expect(err.errors.firstName).to.exist;
      expect(err.errors.lastName).to.exist;
      expect(err.errors.department).to.exist;
    });
      
  });
    
  it('should throw an error if "firstName", "lastName", "department" is not a string', () => {
    const cases = [{}, []];
      for(let name of cases) {
        const emp = new Employee({ name });
      
        emp.validate(err => {
          expect(err.errors.firstName).to.exist;
          expect(err.errors.lastName).to.exist;
          expect(err.errors.department).to.exist;
        });

      } 
    });

  it('should not throw an error if "firstName, lastName, department" is perfect', () => {
    const emp = new Employee({firstName: 'Amanda', lastName: 'Doe', department: 'Managment' });

    emp.validate(err => {
      expect(err).to.not.exist;
    });

    });
  
});