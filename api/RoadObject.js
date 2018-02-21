const request = require('./CRAB');
const Street = require('./Street');

const NAME = 'Wegobject';
const ID = `Identificator${NAME}`;

const float = text => +text.replace(',', '.');

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
      streetId: +x[Street.ID],
      center: x.CenterX && x.CenterY && ({
        x: float(x.CenterX),
        y: float(x.CenterY),
      }),
      min: x.MinimumX && x.MinimumY && ({
        x: float(x.MinimumX),
        y: float(x.MinimumY),
      }),
      max: x.MaximumX && x.MaximumY && ({
        x: float(x.MaximumX),
        y: float(x.MaximumY),
      }),
    };
  }

  static async byId({ id }) {
    const results = await request(`Get${NAME}By${ID}`, { [ID]: id });
    return new RoadObject(RoadObject.map(results[0]));
  }

  constructor({
    id, kind, center, min, max,
  }) {
    Object.assign(this, {
      id, kind, center, min, max,
    });
  }
}

module.exports = RoadObject;
