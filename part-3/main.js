// access modal
const modal = document.getElementById('theModal');
// access Span element that closes the modal
const span = document.getElementsByClassName('close')[0];

const displayCount = document.getElementById('cart-item-count');
const table = document.getElementById('cart-items');
let cart = {
  shoppingCartItems: {}, // array of objects, each a store-item:price pair
  numberOfItems: 0,
};

// update the number displayed next to cart to show total number of items in cart.
const addItemToCart = function () {
  const item = this.parentElement.children[0].innerHTML;
  const price = this.parentElement.children[1].innerHTML;
  cart.shoppingCartItems[item] = price;
  cart.numberOfItems += 1;
  displayCount.innerHTML = `(${cart.numberOfItems})`;
};

// function to create table to list items and prices in.
const addCartToModal = () => {
  const itemsToList = Object.keys(cart.shoppingCartItems);
  const pricesToList = Object.values(cart.shoppingCartItems);
  itemsToList.forEach((el, index) => {
    const row = table.insertRow(index);
    const cell1 = row.insertCell(0);
    cell1.innerHTML = el;
  });
  pricesToList.forEach((el, index) => {
    const row = table.rows[index];
    const cell2 = row.insertCell(1);
    cell2.innerHTML = el;
  });
};

const totalCost = () => {
  const pricesToList = Object.values(cart.shoppingCartItems);
  const priceFloats = [];
  let total = 0;
  pricesToList.forEach((price) => {
    priceFloats.push(parseFloat(price.substr(1)));
    total = priceFloats.reduce((a, b) => a + b);
  });
  const row = table.insertRow(-1);
  const cell = row.insertCell(0);
  cell.innerHTML = '<h3>Total<h3>';
  const row2 = table.rows[table.rows.length - 1];
  const cell2 = row2.insertCell(-1);
  cell2.innerHTML = `$${total}`;
};

// function to clear shoppingCart contents.
const clearContents = () => {
  cart = {
    shoppingCartItems: {},
    numberOfItems: 0,
  };
  displayCount.innerHTML = `(${cart.numberOfItems})`;
  table.innerHTML = '';
};

// When the user clicks on the button, load the cart, open the modal
const openModalOfCart = () => {
  addCartToModal();
  totalCost();
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
const closeModal = () => {
  modal.style.display = 'none';
};


const btnArray = document.querySelectorAll('button.add');
const cartBtn = document.getElementById('cart-button');
const clearBtn = document.getElementById('clear-button');

/* event listeners for all "Add to cart" buttons */
btnArray.forEach((btn) => {
  btn.addEventListener('click', addItemToCart);
});

/* event listeners for  other buttons */
cartBtn.addEventListener('click', openModalOfCart);
clearBtn.addEventListener('click', clearContents);
span.addEventListener('click', closeModal);
