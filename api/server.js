const express = require('express');
const sqlite = require('sqlite');

const Street = require('./Street');
const Region = require('./Region');
const City = require('./City');

const app = express();
const dbPromise = sqlite.open('./database.sqlite', { Promise });

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.get('/', async (req, res, next) => {
  try {
    const db = await dbPromise;
    await db.migrate({ force: 'last' });
    const [cities, streets] = await Promise.all([
      db.get('SELECT * FROM City'),
      db.all('SELECT * FROM Street'),
    ]);
    res.send({ cities, streets });
  } catch (err) {
    next(err);
  }
});

const select = async ({ sql, next }) => {
  let result;
  try {
    const db = await dbPromise;
    result = await db.all(sql);
  } catch (err) {
    next(err);
  }
  return result;
};

app.get('/streets', async (req, res, next) => {
  res.send(await select({ sql: 'SELECT * FROM Street', next }));
  /* try {
    const db = await dbPromise;
    const streets = await db.all('SELECT * FROM Street');
    res.send(streets);
  } catch (err) {
    next(err);
  } */
});

app.get('/cache', async (req, res, next) => {
  res.send(await select({ sql: 'SELECT * FROM Cache', next }));
  /* try {
    const db = await dbPromise;
    const cache = await db.all('SELECT * FROM Cache');
    res.send(cache);
  } catch (err) {
    next(err);
  } */
});

app.get('/cities', async (req, res, next) => {
  res.send(await select({ sql: 'SELECT * FROM City', next }));
  /* try {
    const db = await dbPromise;
    const cities = await db.all('SELECT * FROM City');
    res.send(cities);
  } catch (err) {
    next(err);
  } */
});

app.get('/city/:id/streets', async (req, res, next) => {
  try {
    const { id } = req.params;
    const city = await City.byId({ id });
    const streets = await city.streets();
    res.send(streets);
  } catch (err) {
    next(err);
  }
});

app.get('/region/:id/cities', async (req, res, next) => {
  try {
    const { id } = req.params;
    const region = await Region.byId({ id });
    const cities = await region.cities();
    res.send(cities);
  } catch (err) {
    next(err);
  }
});

app.get('/street/:id/housenumbers', async (req, res, next) => {
  try {
    const { id } = req.params;
    const street = await Street.byId({ id });
    const housenumbers = await street.housenumbers();
    res.send(housenumbers);
  } catch (err) {
    next(err);
  }
});

app.listen(3000);
