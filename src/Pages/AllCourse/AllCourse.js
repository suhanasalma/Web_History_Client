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
       <div className="flex sm:flex-col xl:flex-row my-20 p-5 justify-around">
         <section className="sm:m-auto sm:w-9/12 lg:m-0 grid lg:grid-cols-3 md:grid-cols-2 gap-10 md:w-9/12 lg:w-10/12 xl:w-7/12">
           {courses.map((course) => (
             <CourseDisplay course={course} key={course.id}></CourseDisplay>
           ))}
         </section>
         <section className="lg:sticky top-0">
           <LeftSide />
         </section>
       </div>
     </div>
   );
};

export default AllCourse;