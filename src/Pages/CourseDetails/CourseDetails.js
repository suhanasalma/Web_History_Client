import React from 'react';
import {
  FaBook,
  FaQuestionCircle,
  FaStopwatch,
  FaLanguage,
  FaUserFriends,
} from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import { addToCart } from "../../LocalStorage/LocalStorage";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

import LeftSide from '../LeftSide/LeftSide';
import { useRef } from 'react';

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

   const addToLS = ()=>{
    addToCart(fullDetails.id)
   }

   const pdfExportComponent = useRef(null)
   const contentArea = useRef(null)

   const handleExportWithComponent = (event) =>{
    pdfExportComponent.current.save();
   }

   return (
     <section className="">
       <div className="course-cotainer mb-20">
         <h1 className="text-white font-bold text-4xl flex h-full justify-center items-center">
           {name}
         </h1>
       </div>

       <PDFExport ref={pdfExportComponent} paperSize="A4">
         <button onClick={handleExportWithComponent} primary={true}>
           Download PDF
         </button>
         <div className="flex sm:flex-col xl:flex-row items-start justify-around w-5/6 m-auto">
           <div className="">
             <section className="">
               <article className="flex justify-between items-center mb-10 ">
                 <div className="flex sm:flex-col lg:flex-row items-center gap-10">
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

                 <div className="flex gap-4">
                   <p className="price text-2xl font-bold">{price}</p>
                   <button>Get Premium Acces</button>
                   <button onClick={addToLS}>Add to Cart</button>
                 </div>
               </article>
               <article className="mb-10">
                 <img src={img} alt="" className="w-full" />
               </article>
             </section>
             <section className="flex justify-between border p-3 sm:flex-col lg:flex-row mb-10">
               <article className="sm:w-full lg:w-7/12 mr-20">
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
               <article className="sm:w-9/12 md:w-6/12 lg:w-3/12">
                 <h1 className="mb-3">COURSE FEATURES</h1>
                 <div className="flex justify-between items-center mb-3">
                   <p className="flex gap-2 items-center ">
                     <FaBook /> lecture
                   </p>
                   <p>{course_feature[0].lecture}</p>
                 </div>
                 <div className="flex justify-between items-center mb-3">
                   <p className="flex gap-2 items-center ">
                     <FaQuestionCircle /> Quize
                   </p>
                   <p>{course_feature[0].quize}</p>
                 </div>
                 <div className="flex justify-between items-center mb-3">
                   <p className="flex gap-2 items-center ">
                     <FaStopwatch /> Duration
                   </p>
                   <p>{course_feature[0].duration}</p>
                 </div>
                 <div className="flex justify-between items-center  mb-3">
                   <p className="flex gap-2 items-center">
                     {" "}
                     <FaLanguage /> Language
                   </p>
                   <p>{course_feature[0].language}</p>
                 </div>
                 <div className="flex justify-between items-center">
                   <p className="flex gap-2 items-center">
                     {" "}
                     <FaUserFriends />
                     Students
                   </p>
                   <p>{course_feature[0].student}</p>
                 </div>
               </article>
             </section>
           </div>
           <div className="w-full lg:ml-20 xl:sticky top-0">
             <LeftSide />
           </div>
         </div>
       </PDFExport>
     </section>
   );
};

export default CourseDetails;