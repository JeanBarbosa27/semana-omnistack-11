const connection = require('../../src/database/connection');
const { ongData, createOng, listOngs } = require('../utils/ongs');


describe('ONG', () => {
  beforeAll(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  let ongId = '';

  afterAll(async () => {
    await connection.destroy();
  })

  it('should create an ONG with an unique id', async () => {
    const response = await createOng();
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
    ongId = response.body.id;
  })

  it('should list all ongs', async () => {
    const response = await listOngs();
    const expected = [{...ongData, id: ongId}]
    expect(response.body).toEqual(expect.arrayContaining(expected));
  })
})