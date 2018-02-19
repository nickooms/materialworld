const request = require('./CRAB');

class Housenumber {
  static map({ StraatnaamId, HuisnummerId, Huisnummer }) {
    return {
      id: +HuisnummerId,
      number: Huisnummer,
      streetId: +StraatnaamId,
    };
  }

  static async byId({ id }) {
    const results = await request('GetHuisnummerByHuisnummerId', {
      HuisnummerId: id,
    });
    return new Housenumber(Housenumber.map(results[0]));
  }

  constructor({ id, number }) {
    Object.assign(this, { id, number });
  }
}

module.exports = Housenumber;
