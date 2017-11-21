/*
20: Clicking on "Add to cart" will update the number displayed next to the
"Cart" button to show the total number of items in the user's cart
20: Clicking on the "Cart" button will show the cart modal with a list of all items added
20: Clicking on the "Clear" button in the cart modal removes all items from the cart
20: Clicking on the "X" button in the cart modal closes the modal
*/
const addItemToCart = () => {
  // update the number displayed next to cart to show total number of items in cart.
};

const showCartContents = () => {
  // show cart modal with list of all items added.
};

const clearContents = () => {
  // remove all items from cart.
};

const closeModal = () => {
  // closes cart modal.
};


const addToCartBtn = document.getElementById('add-button');
const cartBtn = document.getElementById('cart-button');
const clearBtn = document.getElementById('clear-button');
const xBtn = document.getElementById('x-button')

/* event listeners for "Add to cart" */
addToCartBtn.addEventListener('click', addItemToCart);

/* event listeners for  other buttons */
cartBtn.addEventListener('click', showCartContents);
clearBtn.addEventListener('click', clearContents);
xBtn.addEventListener('click', closeModal);
