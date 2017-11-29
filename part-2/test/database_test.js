// During the test the env variable is set to test
// process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const { productList, shopperOrders, realShoppers } = require('../database.js');
const { resetDb } = require('./dbUtilities.js');

describe('query tests', () => {
  // beforeEach('reset the test db', (done) => {
  //   resetDb();
  //   done();
  // });

  describe('productList', () => {
    context('when given a valid section argument', () => {
      it('should return all the products in a given section from the db', () => {
        return productList('dairy').then((results) => {
          expect(results.length).to.equal(7);
        });
      });
    });
    context('when given an invalid section argument', () => {
      it('should return \'whoops\' error message', () => {

      });
    });
  });

  describe('shopperOrders', () => {
    context('when given a valid shopper_id', () => {
      it('should return all the products in a given section from the db', () => {
        return shopperOrders('1').then((results) => {
          expect(results.length).to.equal(2);
        });
      });
    });
  });

  describe('realShoppers', () => {
    context('when called', () => {
      it('should list all the shoppers that have at least one order', () => {
        return realShoppers().then((results) => {
          expect(results.length).to.equal(3);
        });
      });
    });
  });
});
