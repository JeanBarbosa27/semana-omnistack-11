const request = require('supertest');
const app = require('../../src/app');

module.exports = {
  createIncident: (auth, body) => request(app).post('/incidents').set(auth).send(body),
  listIncidents: page => request(app).get('/incidents').query({ page }),
  listProfile: auth => request(app).get('/profile').set(auth),
  deleteIncident: (auth, id) => request(app).delete(`/incidents/${id}`).set(auth),
}