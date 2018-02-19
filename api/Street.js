const request = require('./CRAB');
const Housenumber = require('./Housenumber');
const RoadObject = require('./RoadObject');
const { SorteerVeld } = require('./constants');

const NAME = 'Straatnaam';
const ID = `${NAME}Id`;

class Street {
  static get ID() {
    return ID;
  }

  static get NAME() {
    return NAME;
  }

  static map(x) {
    return {
      id: +x[ID],
      name: x[NAME],
      cityId: +x.GemeenteId,
    };
  }

  static async byId({ id }) {
    const results = await request(`Get${NAME}By${ID}`, { [ID]: id });
    return new Street(Street.map(results[0]));
  }

  static async byName({ name, cityId }) {
    const results = await request(`Get${NAME}By${NAME}`, {
      [NAME]: name,
      GemeenteId: cityId,
    });
    return Street.map(results[0]);
  }

  constructor({ id, name }) {
    Object.assign(this, { id, name });
  }

  get ID() {
    return { [ID]: this.id };
  }

  async list(name, Class) {
    const id = this.ID;
    const operation = `List${name}By${ID}`;
    const list = await request(operation, { ...id, SorteerVeld });
    return list
      .map(x => ({ ...x, ...id }))
      .map(x => Class.map(x));
  }

  async housenumbers() {
    return this.list('Huisnummers', Housenumber);
  }

  async objects() {
    return this.list('Wegobjecten', RoadObject);
  }
}

module.exports = Street;
