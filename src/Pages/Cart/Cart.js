import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Cart = ({cart,removeItem}) => {
   const {id,name,price} = cart;

   return (
     <div className="">
       <div className="border p-3 flex justify-between items-center mb-3 gap-4">
         <Link to={`/course-details/${id}`}>
           <img src={cart.img} className="w-20 object-cover " alt="" />
         </Link>
         <p className="">{name}</p>
         <p className="">{price} $</p>
         <button
           onClick={() => removeItem(id)}
           className="text-xl text-red-800"
         >
           <FaTimesCircle />
         </button>
       </div>
     </div>
   );
};

export default Cart;