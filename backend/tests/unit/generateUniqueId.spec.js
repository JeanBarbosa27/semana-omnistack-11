const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate a unique id', () => {
  it('should generate an unique id with 8 characters', () => {
    const id = generateUniqueId();
    expect(id).toHaveLength(8);
  })
})