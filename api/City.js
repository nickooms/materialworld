const request = require('./CRAB');
const Street = require('./Street');

class City {
  static map({ GemeenteId, GemeenteNaam }) {
    return {
      id: +GemeenteId,
      name: GemeenteNaam,
    };
  }

  static async byId({ id }) {
    const results = await request('GetGemeenteByGemeenteId', {
      GemeenteId: id,
    });
    return new City(City.map(results[0]));
  }

  constructor({ id, name }) {
    Object.assign(this, { id, name });
  }

  async streets() {
    const results = await request('ListStraatnamenByGemeenteId', {
      GemeenteId: this.id,
      SorteerVeld: 0,
    });
    return results
      .map(street => ({ ...street, GemeenteId: this.id }))
      .map(street => Street.map(street));
  }
}

module.exports = City;
