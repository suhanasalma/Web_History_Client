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
         <h1 className="text-white">Hello</h1>
       </div>
       <div className="flex sm:flex-col md:flex-row   my-20 p-5 justify-around">
         <section className="sm:m-auto md:m-0 grid lg:grid-cols-3 md:grid-cols-2 gap-10">
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

export default Courses;