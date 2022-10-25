import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NewCourse = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
      fetch("https://web-history-server-side.vercel.app/courses/10")
        .then((res) => res.json())
        .then((data) => setCourses(data));
    }, []);
   return (
     <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
       {courses.map((course) => (
         <Link key={course.id} to={`/course-details/${course.id}`}>
           <div className="card w-64 h-96 bg-base-100 shadow-xl">
             <figure>
               <img src={course.img} alt="Shoes" />
             </figure>
             <div className="card-body">
               <h2 className="card-title">{course.name}</h2>
             </div>
             <div className="">
               <div></div>
               <div></div>
               <div></div>
             </div>
           </div>
         </Link>
       ))}
     </div>
   );
};

export default NewCourse;