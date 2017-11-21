#!/usr/bin/env node
const fs = require('fs');
const { productList, shopperOrders, realShoppers } = require('./database.js');

const command = process.argv[2];
const commandArg = process.argv[3];

switch (command) {
  case 'product-list':
    productList(commandArg).then((data) =>
    console.log(data));
    break;
  case 'shopper-orders':
    shopperOrders(commandArg).then((data) =>
    console.log(data));
    break;
  case 'real-shoppers':
    realShoppers().then((data) =>
    console.log(data));
    break;
  default: console.log('Whoops! Try a different command.');
}
