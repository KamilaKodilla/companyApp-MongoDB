const chai = require('chai');
const chaiHttp = require('chai-http');
const Department = require('../../../models/department.model');
const server = require('../../../server.js');

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;


describe('DELETE api/departments', () => {

  before(async () => {
    const testDepOne = new Department({ _id: '5d9f1140f10a81216cfd4408', name: 'Department #1' });
    await testDepOne.save();

    const testDepTwo = new Department({ _id: '5d9f1159f81ce8d1ef2bee48', name: 'Department #2' });
    await testDepTwo.save();
  });

  it('/ should delete one document from db and return success', async () => {
    const res = await request(server).delete('/api/departments/5d9f1140f10a81216cfd4408').send({ name: '=#Department #1=' });
    const deletedDepartment = await Department.findOne({ name: '#Department #1' });
    expect(res.status).to.be.equal(200);
    expect(deletedDepartment).to.be.null;
  });
  
  after(async () => {
    await Department.deleteMany();
  });
  
});