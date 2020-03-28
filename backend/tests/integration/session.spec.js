const connection = require('../../src/database/connection');
const { createOng, firstOng } = require('../utils/ongs');
const { login } = require('../utils/session');

describe('Session', () => {
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to make login', async () => {
    await createOng();
    const ong = await firstOng();
    const expected = { name: ong.name }
    const session = await login(ong.id);
    expect(session.body).toEqual(expect.objectContaining(expected));
  })
});
