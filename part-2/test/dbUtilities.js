const { db } = require('../database.js');

/* truncate all tables in database
returns Promise that resolves to the list of all results from truncated tables */

const initDb = () => {
  const tables = ['grocery', 'shoppers', 'orders'];
  return Promise.all(tables.map(table =>
    db.query(`TRUNCATE TABLE ${table} RESTART IDENTITY CASCADE`)))
    .catch(console.error);
};

const seedDb = () => {
  db.any('INSERT INTO grocery (productID, name, price, section) VALUES ($1, $2, $3, $4)', [1, 'milk', 3.99, 'dairy'])
    .then(() => db.any('INSERT INTO shoppers (shopperID, name) VALUES ($1, $2)', [1, 'Kitty C']))
    .then(() => db.any('INSERT INTO orders (orderID, shopper_id, total_cost) VALUES ($1, $2, $3)', [1, 1, '14.99']))
    .catch(console.error);
};

const resetDb = () => initDb().then(seedDb);

module.exports = { resetDb }
