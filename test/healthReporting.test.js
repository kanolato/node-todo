const app = require('../server'),
  chai = require('chai'),
  request = require('supertest');
const expect = chai.expect;

// test group for app/healthReporting.js
describe('Health reporting test', () => {
  describe('Should give the liveness probe', () => {
    it('Should return a status code 200', (done) => {
      request(app).get('/probes/healthz').end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe('Should give the readiness probe', () => {
    it('Should return a status code 200', (done) => {
      request(app).get('/probes/readinezz').end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });
});