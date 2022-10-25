import React from 'react';
import { FaBook, FaPenAlt, FaUserGraduate } from 'react-icons/fa';
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
       <section className='my-20'>
         <article className="w-6/12 m-auto">
           <SwiperSlider></SwiperSlider>
         </article>
       </section>
     </div>
   );
};

export default Home;