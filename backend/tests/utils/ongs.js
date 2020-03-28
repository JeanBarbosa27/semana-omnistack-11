const request = require('supertest');
const app = require('../../src/app');

const ongData = { 
  name: "Uma ONG de teste",
  email: "ong@test.com.br",
  whatsapp: "21999999999",
  city: "Rio de Janeiro",
  uf: "RJ"
}

module.exports = {
  ongData: ongData,
  createOng: () => request(app).post('/ongs').send(ongData),
  listOngs: () => request(app).get('/ongs'),
  firstOng: async () => {
    const ongs = await request(app).get('/ongs');
    return ongs.body[0];
  },
};
