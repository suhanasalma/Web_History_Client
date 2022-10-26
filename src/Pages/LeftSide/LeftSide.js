import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NewCourse from '../NewCourse/NewCourse';

const LeftSide = () => {
   const [links, setLinks] = useState([]);

   const [courses, setCourses] = useState([]);
   useEffect(() => {
     fetch("https://web-history-server-side.vercel.app/courses/10")
       .then((res) => res.json())
       .then((data) => setCourses(data));
   }, []);

   useEffect(() => {
     fetch("https://web-history-server-side.vercel.app/categories")
       .then((res) => res.json())
       .then((data) => setLinks(data));
   }, []);
   return (
     <div className="my-10 ">
       <div className="border w-10/12 sm:m-auto lg:m-0 p-5">
         <h1>Course Categories</h1>
         {links.map((link) => (
           <Link key={link.id} to={`/courses/${link.id}`}>
             <li>{link.name}</li>
           </Link>
         ))}
       </div>
       <div className="my-10">
         <div className=" border sm:m-auto lg:m-0 w-10/12 p-5">
           <h1>Latest Course</h1>
           {courses.map((course) => (
             <Link key={course.id} to={`/course-details/${course.id}`}>
               <div className="flex gap-4 mb-3">
                 <img src={course.img} className="w-20 object-cover " alt="" />
                 <div className=''>
                   <p>{course.name}</p>
                   <p>{course.price}</p>
                 </div>
               </div>
             </Link>
           ))}
         </div>
       </div>
       <div className="border sm:m-auto lg:m-0 w-10/12 p-5">
         <h1 className="text-2xl font-semibold mb-3">Stay Connected With US</h1>
         <div className="">
           <Link className="">
             <FaFacebook className="text-4xl text-center mb-3 " />
           </Link>
           <Link>
             <FaTwitter className="text-4xl mb-3" />
           </Link>
           <Link>
             <FaInstagram className="text-4xl mb-3" />
           </Link>
           <Link>
             <FaLinkedin className="text-4xl" />
           </Link>
         </div>
       </div>
     </div>
   );
};

export default LeftSide;