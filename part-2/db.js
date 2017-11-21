// default options = ();
const pg = require('pg-promise')();
//connects db to app;
const connectionString = `postgres://${process.env.USER}:@localhost:5432/grocery_store`
const db = pg(connectionString);

//write all queries here
