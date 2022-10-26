import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Cart = ({cart,removeItem}) => {
   const {id,name,price} = cart;

   return (
     <div className="">
       <Link to={`/course-details/${id}`}>
         <div className="border p-3 flex sm:flex-col md:flex-row justify-between items-center mb-3 gap-4">
           <img src={cart.img} className="w-20 object-cover " alt="" />
           <p className="">{name}</p>
           <p className="">{price}</p>
           <button
             onClick={() => removeItem(id)}
             className="text-xl text-red-800"
           >
             <FaTimesCircle />
           </button>
         </div>
       </Link>
     </div>
   );
};

export default Cart;