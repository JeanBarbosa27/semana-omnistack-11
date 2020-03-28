const request = require('supertest');
const app = require('../../src/app');

module.exports = {
  login: id => request(app).post('/session').send({ id }),
};
