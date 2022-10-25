import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseDisplay from '../CourseDisplay/CourseDisplay';

import { useEffect } from "react";
import { useState } from "react";
import SwiperSlider from "../Swiper/SwiperSlider";
import LeftSide from '../LeftSide/LeftSide';
import './Course.css'


const Courses = () => {
   const courses  =  useLoaderData()

   return (
     <div>
       <div className="course-cotainer"></div>
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

export default Courses;