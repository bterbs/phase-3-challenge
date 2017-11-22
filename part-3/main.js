// access modal
const modal = document.getElementById('theModal');
// access Span element that closes the modal
const span = document.getElementsByClassName('close')[0];

let cart = {
  shoppingCartItems: {}, // array of objects, each a store item-price pair
  numberOfItems: 0,
};

// update the number displayed next to cart to show total number of items in cart.
const addItemToCart = function () {
  const item = this.parentElement.children[0].innerHTML;
  const price = this.parentElement.children[1].innerHTML;
  cart.shoppingCartItems[item] = price;
  cart.numberOfItems += 1;
  console.log(cart.numberOfItems);
};

// function to clear shoppingCart.
const clearContents = () => {
  cart = {
    shoppingCartItems: {},
    numberOfItems: 0,
  };
};

// When the user clicks on the button, open the modal
const openModalOfCart = () => {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
const closeModal = () => {
  modal.style.display = 'none';
};


const addToCartBtn = document.getElementById('add-button');
const cartBtn = document.getElementById('cart-button');
const clearBtn = document.getElementById('clear-button');

/* event listeners for "Add to cart" */
addToCartBtn.addEventListener('click', addItemToCart);

/* event listeners for  other buttons */
cartBtn.addEventListener('click', openModalOfCart);
clearBtn.addEventListener('click', clearContents);
span.addEventListener('click', closeModal);
