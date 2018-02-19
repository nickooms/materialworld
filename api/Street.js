const request = require('./CRAB');
const Housenumber = require('./Housenumber');
const RoadObject = require('./RoadObject');

class Street {
  static map({ GemeenteId, StraatnaamId, Straatnaam }) {
    return {
      id: +StraatnaamId,
      name: Straatnaam,
      cityId: +GemeenteId,
    };
  }

  static async byId({ id }) {
    const results = await request('GetStraatnaamByStraatnaamId', {
      StraatnaamId: id,
    });
    return new Street(Street.map(results[0]));
  }

  static async byName({ name, cityId }) {
    const results = await request('GetStraatnaamByStraatnaam', {
      Straatnaam: name,
      GemeenteId: cityId,
    });
    return Street.map(results[0]);
  }

  constructor({ id, name }) {
    Object.assign(this, { id, name });
  }

  async housenumbers() {
    const results = await request('ListHuisnummersByStraatnaamId', {
      StraatnaamId: this.id,
      SorteerVeld: 0,
    });
    return results
      .map(housenumber => ({ ...housenumber, StraatnaamId: this.id }))
      .map(housenumber => Housenumber.map(housenumber));
  }

  async objects() {
    const results = await request('ListWegobjectenByStraatnaamId', {
      StraatnaamId: this.id,
      SorteerVeld: 0,
    });
    return results
      .map(roadObject => ({ ...roadObject, StraatnaamId: this.id }))
      .map(roadObject => RoadObject.map(roadObject));
  }
}

module.exports = Street;
