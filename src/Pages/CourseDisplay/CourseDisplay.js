import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../../LocalStorage/LocalStorage';

const CourseDisplay = ({course}) => {
   const { name, img, id, price } = course; 

   const addTolS = (id)=>{
        addToCart(id)


   }
   

   return (
     <div>
       <div className="card w-64 h-96 bg-base-100 shadow-xl ">
         <Link to={`/course-details/${id}`}>
           <figure>
             <img src={img} />
           </figure>
           <div className="card-body">
             <h2 className="card-title text-center">{name}</h2>
           </div>
         </Link>
         <div className="flex justify-between items-center border p-5 absolute bottom-0 right-0 w-full">
           <p className="text-rose-400 hover:text-rose-600 font-bold">
             {price}$
           </p>
           <button
             className="text-rose-400 hover:text-rose-600 font-bold"
             onClick={() => addTolS(id)}
           >
             Add to Cart
           </button>
           <Link to={`/course-details/${id}`}>
             <button className="text-rose-400 hover:text-rose-600 font-bold">
               See Details
             </button>
           </Link>
         </div>
       </div>
     </div>
   );
};

export default CourseDisplay;