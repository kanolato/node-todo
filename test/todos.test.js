const app = require('../server'),
  chai = require('chai'),
  request = require('supertest');
const expect = chai.expect;

// dummy todo
const todo = {
  text: "im a todo"
};

// test group for app/routes.js
describe('Todos Tests', () => {
  describe('Create a todo', () => {
    it('should create a todo', (done) => {
      request(app).post('/api/todos').send(todo).end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body[0].text).to.equal(todo.text);
        todo.id = res.body[0]._id;
        done();
      });
    });
  });

  describe('Get todos', () => {
    it('should get a todos list', (done) => {
      request(app).get('/api/todos').end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('array');
        done();
      });
    });
  });

  describe('Delete todo', () => {
    it('should delete a todo', (done) => {
      request(app).delete('/api/todos' + todo.id).end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('array');
        done();
      });
    });
  });
});