COPY grocery_items(name, price, section)
FROM './grocery.csv' DELIMITER ',' CSV HEADER;


INSERT INTO shoppers(shopperID, name)
VALUES
 (1, 'Brittany');


INSERT INTO orders(orderID, shopperID, total_cost)
VALUES
 (1, 1, 49.99);
