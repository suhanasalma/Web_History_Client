import React from 'react';
import { FaBook, FaPenAlt, FaUserGraduate } from 'react-icons/fa';
import NewCourse from '../NewCourse/NewCourse';
import PopularCourse from '../PopularCourse/PopularCourse';
import SwiperSlider from '../Swiper/SwiperSlider';
import './Home.css'

const Home = () => {
   return (
     <div className="overflow-hidden">
       <section className="flex justify-center items-center  home-container ">
         <article className="text-center">
           <h1 className="text-5xl font-bold mb-3">ONLINE COURSES TO LEARN</h1>
           <p className="text-lg font-semibold  mb-7">
             Own your future learning new skills
           </p>
           <div>
             <input
               className="w-11/12 p-3 bg-transparent outline-none text-white border-2 mb-10 relative"
               type="search"
               name=""
               id=""
               placeholder="What are you going to learn today ?"
             />
           </div>
           <div className="flex items-center justify-between sm:flex-col md:flex-row">
             <div className="flex items-center">
               <p>
                 <FaUserGraduate />
               </p>
               <p className="ml-3">Over 7 million students</p>
             </div>
             <div className="flex items-center">
               <p>
                 <FaBook />
               </p>
               <p className="ml-3">More than 30,000 courses.</p>
             </div>
             <div className="flex items-center">
               <p>
                 <FaPenAlt />
               </p>
               <p className="ml-3">Learn anything online.</p>
             </div>
           </div>
         </article>
       </section>
       <section className="my-20">
         <article className="w-6/12 m-auto">
           <SwiperSlider></SwiperSlider>
         </article>
       </section>
       <section className="w-9/12 m-auto">
         <div className="mb-10">
           <h1 className="text-4xl font-bold">Popular Courses</h1>
           <p>Limitless learning, more possibilities Typography</p>
         </div>
         <div>
           <PopularCourse></PopularCourse>
         </div>
       </section>
       <section className="user-count my-20 flex items-center justify-center h-full">
         <div className="stats stats-vertical lg:stats-horizontal shadow bg-transparent text-white ">
           <div className="stat">
             <div className="stat-title">Downloads</div>
             <div className="stat-value">31K</div>
             <div className="stat-desc">Jan 1st - Feb 1st</div>
           </div>

           <div className="stat ">
             <div className="stat-title">New Users</div>
             <div className="stat-value">4,200</div>
             <div className="stat-desc">↗︎ 400 (22%)</div>
           </div>

           <div className="stat">
             <div className="stat-title">New Registers</div>
             <div className="stat-value">1,200</div>
             <div className="stat-desc">↘︎ 90 (14%)</div>
           </div>
         </div>
       </section>
       <section className="my-20">
         <article className="w-9/12 m-auto">
           <div className="mb-10 text-center">
             <h1 className="text-4xl font-bold ">New Courses</h1>
             <p>Limitless learning, more possibilities Typography</p>
           </div>
           <div>
             <NewCourse></NewCourse>
           </div>
         </article>
       </section>
     </div>
   );
};

export default Home;