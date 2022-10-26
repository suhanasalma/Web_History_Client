import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import CourseDisplay from "../CourseDisplay/CourseDisplay";

const PopularCourse = () => {
   const [courses, setCourses] = useState([]);
   useEffect(() => {
     fetch("https://web-history-server-side.vercel.app/courses/09")
       .then((res) => res.json())
       .then((data) => setCourses(data));
   }, []);
   return (
     <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
       {courses.map((course) => (
          <CourseDisplay course={course} key={course.id}></CourseDisplay>
       ))}
     </div>
   );
};

export default PopularCourse;