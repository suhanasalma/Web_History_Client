import React from 'react';

const CourseDisplay = ({course}) => {
   const {name,img} = course
   console.log(course.course_feature)
   return (
     <div>
       <div className="card w-64 h-96 bg-base-100 shadow-xl">
         <figure>
           <img src={img} alt="Shoes" />
         </figure>
         <div className="card-body">
           <h2 className="card-title">{name}</h2>
         </div>
         <div className="">
           <div>

           </div>
           <div></div>
           <div></div>
         </div>
       </div>
     </div>
   );
};

export default CourseDisplay;