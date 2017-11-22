#!/usr/bin/env node

const { productList, shopperOrders, realShoppers, displayOrderData, displayProductData, displayShopperData } = require('./database.js');

const command = process.argv[2];
const commandArg = process.argv[3];

switch (command) {
  case 'product-list':
    productList(commandArg).then((data) => {
      displayProductData(data);
    });
    break;
  case 'shopper-orders':
    shopperOrders(commandArg).then((data) => {
      displayOrderData(data);
    });
    break;
  case 'real-shoppers':
    realShoppers().then((data) => {
      displayShopperData(data);
    });
    break;
  default: console.log('Whoops! Try a different command.');
}
