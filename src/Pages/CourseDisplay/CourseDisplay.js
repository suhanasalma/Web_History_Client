import React from 'react';
import { Link } from 'react-router-dom';

const CourseDisplay = ({course}) => {
   const {name,img,id} = course

   return (
     <div>
       <Link to={`/course-details/${id}`}>
         <div className="card w-64 h-96 bg-base-100 shadow-xl">
           <figure>
             <img src={img}  />
           </figure>
           <div className="card-body">
             <h2 className="card-title">{name}</h2>
           </div>
           <div className="">
             <div></div>
             <div></div>
             <div></div>
           </div>
         </div>
       </Link>
     </div>
   );
};

export default CourseDisplay;