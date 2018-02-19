const request = require('./CRAB');
const Street = require('./Street');
const { SorteerVeld } = require('./constants');

const NAME = 'Gemeente';
const ID = `${NAME}Id`;

class City {
  static get ID() {
    return ID;
  }

  static get NAME() {
    return NAME;
  }

  static map(x) {
    return {
      id: +x[ID],
      name: x[`${NAME}Naam`],
    };
  }

  static async byId({ id }) {
    const results = await request(`Get${NAME}By${ID}`, { [ID]: id });
    return new City(City.map(results[0]));
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
    return list.map(x => ({ ...x, ...id })).map(x => Class.map(x));
  }

  async streets() {
    return this.list('Straatnamen', Street);
  }
}

module.exports = City;
