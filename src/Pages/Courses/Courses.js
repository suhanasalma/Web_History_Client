import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDisplay from '../../CourseDisplay/CourseDisplay';

const Courses = () => {
   const courses  =  useLoaderData()
   return (
     <div className='flex my-20 p-5'>
       <section className='grid grid-cols-3 gap-10'>
         {courses.map((course) => (
           <CourseDisplay course={course}></CourseDisplay>
         ))}
       </section>
       <section></section>
     </div>
   );
};

export default Courses;