import React from 'react';
import { FaBook, FaPenAlt, FaUserGraduate } from 'react-icons/fa';
import NewCourse from '../NewCourse/NewCourse';
import PopularCourse from '../PopularCourse/PopularCourse';
import SwiperSlider from '../Swiper/SwiperSlider';
import './Home.css'

const Home = () => {
   return (
     <div>
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
       <section className="user-count my-20">
         <article className=" h-full flex justify-center items-center border">
           <div className="stats shadow  text-white bg-transparent">
             <div className="stat">
               <div className="stat-figure text">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   className="inline-block w-10 h-10 stroke-current"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                   ></path>
                 </svg>
               </div>
               <div className="stat-title text-xl">Downloads</div>
               <div className="stat-value text-6xl">31K</div>
               <div className="stat-desc text-xl">Jan 1st - Feb 1st</div>
             </div>

             <div className="stat">
               <div className="stat-figure text">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   className="inline-block w-10 h-10 stroke-current"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                   ></path>
                 </svg>
               </div>
               <div className="stat-title text-xl">New Users</div>
               <div className="stat-value text-6xl">4,200</div>
               <div className="stat-desc text-xl">↗︎ 400 (22%)</div>
             </div>

             <div className="stat">
               <div className="stat-figure text">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   className="inline-block w-10 h-10 stroke-current"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                   ></path>
                 </svg>
               </div>
               <div className="stat-title text-xl">New Registers</div>
               <div className="stat-value text-6xl">1,200</div>
               <div className="stat-desc text-xl">↘︎ 90 (14%)</div>
             </div>
           </div>
         </article>
       </section>
       <section className='my-20'>
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