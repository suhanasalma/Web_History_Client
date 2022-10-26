import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDisplay from "../CourseDisplay/CourseDisplay";

import LeftSide from "../LeftSide/LeftSide";

const AllCourse = () => {
   const courses = useLoaderData();
   return (
     <div>
       <div className="course-cotainer">
         <h1 className="text-white font-bold text-4xl flex h-full justify-center items-center">
           Welcome To All Course List
         </h1>
       </div>
       <div className="flex my-20 p-5 justify-around">
         <section className="grid grid-cols-3 gap-10">
           {courses.map((course) => (
             <CourseDisplay course={course} key={course.id}></CourseDisplay>
           ))}
         </section>
         <section>
           <LeftSide />
         </section>
       </div>
     </div>
   );
};

export default AllCourse;