
INSERT INTO shoppers (shopperID, name)
VALUES
 (1, 'Brittany');
INSERT INTO shoppers (shopperID, name)
VALUES
(2, 'Miles');


INSERT INTO orders (orderID, shopperID, total_cost)
VALUES
 (1, 1, 49.99);

\copy grocery (name, price, section) FROM 'grocery.csv' WITH DELIMITER ',' CSV HEADER
