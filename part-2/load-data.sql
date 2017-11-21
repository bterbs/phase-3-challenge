
INSERT INTO shoppers (shopperID, name)
VALUES
 (1, 'Brittany');
INSERT INTO shoppers (shopperID, name)
VALUES
(2, 'Miles');
INSERT INTO shoppers (shopperID, name)
VALUES
(3, 'Nathan');
INSERT INTO shoppers (shopperID, name)
VALUES
(4, 'Krystal');
INSERT INTO shoppers (shopperID, name)
VALUES
(5, 'Kitty');


INSERT INTO orders (orderID, shopper_id, total_cost)
VALUES
 (1, 1, 9.99);
INSERT INTO orders (orderID, shopper_id, total_cost)
VALUES
(2, 3, 11.50);
INSERT INTO orders (orderID, shopper_id, total_cost)
VALUES
(3, 3, 13.99);
INSERT INTO orders (orderID, shopper_id, total_cost)
VALUES
(4, 4, 49.99);
INSERT INTO orders (orderID, shopper_id, total_cost)
VALUES
(5, 1, 4.99);

\copy grocery (name, price, section) FROM 'grocery.csv' WITH DELIMITER ',' CSV HEADER
