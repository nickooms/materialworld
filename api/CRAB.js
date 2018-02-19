const fetch = require('node-fetch');
const querystring = require('querystring');
const sqlite = require('sqlite');

const Tag = require('./Tag');

const dbPromise = sqlite.open('./database.sqlite', { Promise });

const nameValueObject = ([Name, Value]) => ({ Name, Value });

const url = 'http://crab.agiv.be/Examples/Home/ExecOperation';
const method = 'POST';
const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

const [tr, td, b, i] = 'tr td b i'.split(' ').map(Tag.from);

const parseCol = (html) => {
  const col = i.remove(b.remove(html));
  if (col === 'NULL') return null;
  return col;
};

const parseCols = html => td.split(html).map(parseCol);

const parseRows = html => tr.split(html).map(parseCols);

const parseTable = (html) => {
  const rows = html
    .replace("<table border='1' cellspacing='0'>", '')
    .replace('</table>', '');
  return parseRows(rows);
};

const request = async (operation, params) => {
  const parameters = Object.entries(params).map(nameValueObject);
  const parametersJson = JSON.stringify(parameters);
  let text;
  const log = `CACHE-CHECK ${operation}`;
  console.time(log);
  try {
    const db = await dbPromise;
    const row = await db.get('SELECT response FROM Cache WHERE operation = ? AND params = ?', [operation, parametersJson]);
    if (row) text = row.response;
  } catch (err) {
    console.log(err);
  }
  console.timeEnd(log);
  if (!text) {
    const body = querystring.stringify({ operation, parametersJson });
    const response = await fetch(url, { method, headers, body });
    text = await response.text();
    try {
      const db = await dbPromise;
      await db.run('INSERT INTO Cache (operation, params, response) VALUES (?, ?, ?)', [operation, parametersJson, text]);
    } catch (err) {
      console.log(err);
    }
  }
  const result = parseTable(text);
  const columns = result.shift();
  return result.map(row =>
    row
      .map((col, index) => ({ [columns[index]]: col }))
      .reduce((object, property) => Object.assign(object, property), {}));
};

module.exports = request;
