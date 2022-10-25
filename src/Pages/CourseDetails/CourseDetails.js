import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSide from '../LeftSide/LeftSide';

const CourseDetails = () => {
   const fullDetails = useLoaderData()
   
   const {
     name,
     price,
     category_name,
     course_desc,
     outcomes,
     img,
     course_feature,
     teacher_info,
   } = fullDetails;
   console.log(course_feature[0].lecture);
   return (
     <section>
       <div className="course-cotainer mb-20"></div>
       <div className="flex items-start w-9/12 m-auto">
         <div className="">
           <section className="">
             <article className="flex justify-between items-center mb-10 ">
               <div className="flex items-center gap-10">
                 <div className="flex items-center gap-3">
                   <img
                     src={teacher_info[0].teacher_img}
                     className="w-10 h-10 object-fill rounded-full"
                     alt=""
                   />
                   <div>
                     <p>Teacher</p>
                     <p>{teacher_info[0].teacher_name}</p>
                   </div>
                 </div>
                 <div>
                   <p>Category</p>
                   <p>{category_name}</p>
                 </div>
               </div>
               <div>
                 <p className="price text-2xl font-bold">{price}</p>
               </div>
             </article>
             <article className="mb-10">
               <img src={img} alt="" className="w-full h-full object-cover" />
             </article>
           </section>
           <section className="flex justify-between p-10 border">
             <article className="w-6/12 ">
               <div className="mb-10">
                 <h1>COURSE DESCRIPTION</h1>
                 <p>{course_desc}</p>
               </div>
               <div className="mb-10">
                 <h1>LEARNING OUTCOMES</h1>
                 {outcomes.map((feature) => (
                   <li>{feature}</li>
                 ))}
               </div>
             </article>
             <article className="justify-items-end">
               <h1>COURSE FEATURES</h1>
               <div className="flex justify-between items-center">
                 <p>lecture</p>
                 <p>{course_feature[0].lecture}</p>
               </div>
               <div className="flex justify-between items-center">
                 <p>Quize</p>
                 <p>{course_feature[0].quize}</p>
               </div>
               <div className="flex justify-between items-center">
                 <p>Duration</p>
                 <p>{course_feature[0].duration}</p>
               </div>
               <div className="flex justify-between items-center">
                 <p>Language</p>
                 <p>{course_feature[0].language}</p>
               </div>
               <div className="flex justify-between items-center">
                 <p>Students</p>
                 <p>{course_feature[0].student}</p>
               </div>
             </article>
           </section>
         </div>
         <div className="w-full ml-20">
           <LeftSide />
         </div>
       </div>
     </section>
   );
};

export default CourseDetails;