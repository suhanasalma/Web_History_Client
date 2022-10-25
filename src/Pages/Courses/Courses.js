import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseDisplay from '../../CourseDisplay/CourseDisplay';

import { useEffect } from "react";
import { useState } from "react";
import SwiperSlider from "../Swiper/SwiperSlider";
import RightSide from '../RightSide/RightSide';


const Courses = () => {
   const courses  =  useLoaderData()
   const [links,setLinks] = useState([]);
   useEffect(()=>{
    fetch("https://web-history-server-side.vercel.app/categories")
    .then(res=>res.json())
    .then(data=>setLinks(data))
   },[])

   return (
     <div className="flex my-20 p-5 justify-around">
       <section className="grid grid-cols-3 gap-10">
         {courses.map((course) => (
           <CourseDisplay course={course}></CourseDisplay>
         ))}
       </section>

       <section>
        <h1>Courses Category</h1>
         {links.map((link) => (
          <RightSide link={link} key={link.id}></RightSide>
         ))}
       </section>
     </div>
   );
};

export default Courses;