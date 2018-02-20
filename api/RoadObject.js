const request = require('./CRAB');

const NAME = 'Wegobject';
const ID = `Identificator${NAME}`;

class RoadObject {
  static get ID() {
    return ID;
  }

  static get NAME() {
    return NAME;
  }

  static map(x) {
    return {
      id: +x[ID],
      kind: +x[`Aard${NAME}`],
      streetId: +x[ID],
    };
  }

  static async byId({ id }) {
    const results = await request(`Get${NAME}By${ID}`, { [ID]: id });
    return new RoadObject(RoadObject.map(results[0]));
  }

  constructor({ id, kind }) {
    Object.assign(this, { id, kind });
  }
}

module.exports = RoadObject;
