const request = require('./CRAB');

class RoadObject {
  static map({ StraatnaamId, IdentificatorWegobject, AardWegobject }) {
    return {
      id: +IdentificatorWegobject,
      kind: AardWegobject,
      streetId: +StraatnaamId,
    };
  }

  static async byId({ id }) {
    const results = await request('GetWegobjectByIdentificatorWegobject', {
      IdentificatorWegobject: id,
    });
    return new RoadObject(RoadObject.map(results[0]));
  }

  constructor({ id, kind }) {
    Object.assign(this, { id, kind });
  }
}

module.exports = RoadObject;
