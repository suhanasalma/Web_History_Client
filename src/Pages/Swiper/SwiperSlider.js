import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "swiper/css/navigation";
import { Link, useLoaderData } from 'react-router-dom';




const SwiperSlider = () => {
   const allCategories = useLoaderData()
   return (
     <div>
       <Swiper
         pagination={{
           clickable: true,
         }}
         grabCursor={true}
         loop={true}
         modules={[Pagination]}
         className="mySwiper"
         breakpoints={{
           0: {
             slidesPerView: 1,
             spaceBetween: 10,
           },
           480: {
             slidesPerView: 1,
             spaceBetween: 10,
           },
           659: {
             slidesPerView: 2,
             spaceBetween: 15,
           },
           1024: {
             slidesPerView: 3,
             spaceBetween: 10,
           },
           1500: {
             slidesPerView: 4,
             spaceBetween: 10,
           },
         }}
       >
         {allCategories.map((category) => (
           <SwiperSlide>
             <Link to={`courses/${category.id}`}>
               <div className="card w-40 h-40 rounded-full bg-base-100 shadow-xl image-full">
                 <figure>
                   <img src={category.img} />
                 </figure>
                 <div className="card-body">
                   <h2 className="card-title">{category.name}</h2>
                 </div>
               </div>
             </Link>
           </SwiperSlide>
         ))}
       </Swiper>
     </div>
   );
};

export default SwiperSlider;