DROP TABLE IF EXISTS shoppers;
DROP TABLE IF EXISTS grocery;
DROP TABLE IF EXISTS orders;

CREATE TABLE grocery (
  productID SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL DEFAULT 0,
  section TEXT NOT NULL
);

CREATE TABLE shoppers (
  shopperID INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE orders (
  orderID INTEGER PRIMARY KEY,
  shopper_id INTEGER NOT NULL REFERENCES shoppers(shopperID),
  total_cost DECIMAL DEFAULT 0
);

-- CREATE TABLE order_details (
--   orderID INTEGER NOT NULL,
--   productID INTEGER NOT NULL
-- )
