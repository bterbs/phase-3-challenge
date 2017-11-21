DROP TABLE IF EXISTS shoppers;
DROP TABLE IF EXISTS grocery_items;
DROP TABLE IF EXISTS orders;

CREATE TABLE grocery_items (
  productID INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL DEFAULT 0,
  section TEXT NOT NULL,
);

CREATE TABLE shoppers (
  shopperID INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
);

CREATE TABLE orders (
  orderID INTEGER PRIMARY KEY,
  shopperID TEXT NOT NULL,
  total_cost DECIMAL DEFAULT 0,
);
