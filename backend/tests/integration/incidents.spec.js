const connection = require('../../src/database/connection');
const {createOng, firstOng} = require('../utils/ongs');
const {createIncident, listIncidents, listProfile, deleteIncident} = require('../utils/incidents');

describe('Incidents', () => {
  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  const incidentBody = {
    title: "Incident test",
    description: "Incidente teste description",
    value: 10
  }

  it('should create an incident in an ONG', async () => {
    await createOng();
    const { id } = await firstOng();
    const { body: incident } = await createIncident({ authorization: id}, incidentBody);
    expect(incident).toEqual(expect.objectContaining({ id: incident.id }));
  });

  it('should list all incidents from one ONG', async () => {
    // TODO: Instanciar ambas as criações de ong e casos em uma variável externa, a fim de melhorar esse teste, de forma que além de verificar se está recebendo uma lista de incidentes, se ela é diferente da lista de incidentes da outra ong. Isso também possibilitará a criação do teste de listagem de todos os incidentes, pois terá que ser o "join" dessas listas Outra melhoria seria criar mais incidentes dentro da mesma ong e verificar se o array delas é diferente.
    
    await createOng();
    const { id: ong_id } = await firstOng();
    const { body: incident } = await createIncident({ authorization: ong_id }, incidentBody);
    const ongIncidents = await listProfile({ authorization: ong_id });
    const expected = [{...incidentBody, id: incident.id, ong_id}];
    expect(ongIncidents.body).toEqual(expect.arrayContaining(expected));
  });

  // TODO: Criar testes para a rota de delete e para listagem de todos os incidentes

});
