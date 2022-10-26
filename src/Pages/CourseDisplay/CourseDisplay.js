import React from 'react';
import { Link } from 'react-router-dom';

const CourseDisplay = ({course}) => {
   const {name,img,id,price} = course

   return (
     <div>
         <div className="card w-64 h-96 bg-base-100 shadow-xl">
           <figure>
             <img src={img} />
           </figure>
           <div className="card-body">
             <h2 className="card-title text-center">{name}</h2>
           </div>
           <div className="flex justify-between p-5">
             <p>{price}$</p>
             <p>Add to Cart</p>
             <Link to={`/course-details/${id}`}>
               <p>See Details</p>
             </Link>
           </div>
         </div>
     </div>
   );
};

export default CourseDisplay;