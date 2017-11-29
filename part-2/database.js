// default options = ();
const pg = require('pg-promise')();
// connects db to app;
const connectionString = /* process.env.NODE_ENV === 'test'
  ? `postgres://${process.env.NODE_ENV}:@localhost:5432/grocery_store_test`
  : */`postgres://${process.env.USER}:@localhost:5432/grocery_store`;

// this creates our database object
const db = pg(connectionString);

// write all queries here
const productList = (section) => {
  return db.any(`
    SELECT
      name, section
    FROM
      grocery
    WHERE
      section = $1
    `,
    section);
};

const shopperOrders = (shopperID) => {
  return db.any(`
    SELECT
      orders.orderID, orders.total_cost
    FROM
      orders
    JOIN
      shoppers
    ON
      shoppers.shopperID=orders.shopper_id
    WHERE
      shoppers.shopperID = $1
    `,
    shopperID);
};

const realShoppers = () => {
  return db.any(`
    SELECT
      shoppers.name, COUNT(*) AS number_of_orders
    FROM
      orders
    JOIN
      shoppers
    ON
      shoppers.shopperID=orders.shopper_id
    GROUP BY shoppers.name;
    `);
};

const displayProductData = (data) => {
  console.log('|--------------+---------+');
  console.log('| Product Name | Section |');
  console.log('|--------------+---------+');
  data.forEach((obj) => {
    console.log(`|  ${obj.name}      |    ${obj.section}  |`);
  });
  console.log('|--------------+---------+');
};

const displayOrderData = (data) => {
  console.log('|--------------+---------+');
  console.log('|----OrderID---+--Total Cost-|');
  console.log('|--------------+------------+');
  data.forEach((obj) => {
    console.log(`|       ${obj.orderid}      |    ${obj.total_cost}    |`);
  });
  console.log('|--------------+---------+');
};

const displayShopperData = (data) => {
  console.log('|--------------+---------+');
  console.log('| Shopper Name | #  of Orders |');
  console.log('|--------------+---------+');
  data.forEach((obj) => {
    console.log(`|  ${obj.name}      |    ${obj.number_of_orders}         |`);
  });
  console.log('|--------------+---------+');
};

module.exports = {
  db,
  productList,
  shopperOrders,
  realShoppers,
  displayOrderData,
  displayShopperData,
  displayProductData,
};
