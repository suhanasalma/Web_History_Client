const addToCart = (id) => {
  // e.target.innerText = 'View Cart'
  console.log(id);
  let shoppingCart = {};

  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  let quantity = 1;
  shoppingCart[id] = quantity;

  localStorage.setItem("cart", JSON.stringify(shoppingCart));
};


const savedCart = () => {
  let shoppingCart = {};

  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};


export {addToCart, savedCart}