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


const deletefromLocalStorage = (id)=>{
   const CourseCart = localStorage.getItem("cart");
   if (CourseCart) {
     const cartLS = JSON.parse(CourseCart);
     if (id in cartLS) {
       delete cartLS[id];
       localStorage.setItem("cart", JSON.stringify(cartLS));
     }
   }
}


export { addToCart, savedCart, deletefromLocalStorage };