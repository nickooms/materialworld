const request = require('./CRAB');
const City = require('./City');

class Region {
  static map({ GewestId, GewestNaam }) {
    return {
      id: +GewestId,
      name: GewestNaam,
    };
  }

  static async byId({ id }) {
    const results = await request('GetGewestByGewestIdAndTaalCode', {
      GewestId: id,
      TaalCode: 'nl',
    });
    return new Region(Region.map(results[0]));
  }

  constructor({ id, name }) {
    Object.assign(this, { id, name });
  }

  async cities() {
    const results = await request('ListGemeentenByGewestId', {
      GewestId: this.id,
      SorteerVeld: 0,
    });
    return results
      .filter(city => city.TaalCodeGemeenteNaam === 'nl')
      .map(city => ({ ...city, GewestId: this.id }))
      .map(city => City.map(city));
  }
}

module.exports = Region;
