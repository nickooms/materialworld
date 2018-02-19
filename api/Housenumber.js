const request = require('./CRAB');
const Street = require('./Street');

const NAME = 'Huisnummer';
const ID = `${NAME}Id`;

class Housenumber {
  static get ID() {
    return ID;
  }

  static get NAME() {
    return NAME;
  }

  static map(x) {
    return {
      id: +x[ID],
      number: x[NAME],
      streetId: +x[Street.ID],
    };
  }

  static async byId({ id }) {
    const results = await request(`Get${NAME}By${ID}`, { [ID]: id });
    return new Housenumber(Housenumber.map(results[0]));
  }

  constructor({ id, number }) {
    Object.assign(this, { id, number });
  }
}

module.exports = Housenumber;
