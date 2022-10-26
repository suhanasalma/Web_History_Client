import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDisplay from '../CourseDisplay/CourseDisplay';

import LeftSide from '../LeftSide/LeftSide';
import './Course.css'


const Courses = () => {
   const courses  =  useLoaderData()

   return (
     <div>
       <div className="course-cotainer">
         <h1 className="text-white flex h-full justify-center items-center font-bold text-4xl">
           {courses[0].category_name}
         </h1>
       </div>
       <div className="flex sm:flex-col xl:flex-row my-20 p-5 justify-around">
         <section className="sm:m-auto sm:w-9/12 lg:m-0 grid lg:grid-cols-3 md:grid-cols-2 gap-10 md:w-9/12 lg:w-10/12 xl:w-7/12">
           {courses.map((course) => (
             <CourseDisplay course={course} key={course.id}></CourseDisplay>
           ))}
         </section>
         <div className="lg:sticky top-0">
           <LeftSide />
         </div>
       </div>
     </div>
   );
};

export default Courses;