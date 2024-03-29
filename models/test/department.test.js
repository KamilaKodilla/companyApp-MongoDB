const Department = require('../department.model.js');
const expect = require('chai').expect;


describe('Department', () => {

    it('should throw an error if no "name" arg', () => {
        const dep = new Department({}); // create new Department, but don't set `name` attr value
      
        dep.validate(err => {
          expect(err.errors.name).to.exist;
        });
      
      });
    
      it('should throw an error if "name" is not a string', () => {

        const cases = [{}, []];
        for(let name of cases) {
          const dep = new Department({ name });
      
          dep.validate(err => {
            expect(err.errors.name).to.exist;
        });

    }

});

        it('should throw an error if "name" is to short or too long', () => {

            const cases = ['Abc', 'abcd', 'Lorem Ipsum, Lorem Ip'];

            for(let name of cases) {
              const dep = new Department({ name });
          
              dep.validate(err => {
                expect(err.errors.name).to.exist;
              });
          
            }
      
      });

      it('should not throw an error if "name" is perfect', () => {

        const cases = ['Abcde', 'Lorem Ipsum'];

        for(let name of cases) {
          const dep = new Department({ name });
      
          dep.validate(err => {
            expect(err).to.not.exist;
          });
      
        }
  
  });
  
  });