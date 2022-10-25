import React from 'react';
import {FaEnvelope, FaPhoneAlt} from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
   return (
     <div>
       <section className="up-header ">
         <article className="flex justify-between items-center  w-9/12 m-auto p-2 ">
           <div className="flex items-center sm:flex-col md:flex-row">
             <p>Have any question?</p>
             <div className="flex items-center ml-5">
               <p
                 className="mr-2 tooltip tooltip-bottom"
                 data-tip="01518390570"
               >
                 <FaPhoneAlt />
               </p>
               <p className="sm:hidden lg:flex">01518390570</p>
             </div>
             <div className="flex items-center ml-5 ">
               <p
                 className="mr-2 tooltip tooltip-bottom"
                 data-tip="suhanasalma800@gmail.com"
               >
                 <FaEnvelope />
               </p>
               <p className="sm:hidden lg:flex">suhanasalma800@gmail.com</p>
             </div>
           </div>
           <div className="sm:flex sm:flex-col md:flex-row">
             <NavLink
               to="/register"
               className={`mr-5 ({ isActive }) =>
               isActive ? activeClassName : undefined`}
             >
               Register
             </NavLink>
             <NavLink to="/login">Log In</NavLink>
           </div>
         </article>
       </section>
       <section className="">
         <div className="navbar w-11/12 m-auto">
           <div className="navbar-start">
             <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="h-5 w-5"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M4 6h16M4 12h8m-8 6h16"
                   />
                 </svg>
               </label>
               <ul
                 tabIndex={0}
                 className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
               >
                 <li>
                   <Link to="/faq">FAQ</Link>
                 </li>
                 <li>
                   <Link to="/courses/08" className="justify-between">
                     Courses
                   </Link>
                 </li>
                 <li>
                   <Link to="/blogs">BLOG</Link>
                 </li>
               </ul>
             </div>
             <Link to="/" className=" flex items-center">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 strokeWidth="1.5"
                 stroke="currentColor"
                 className="w-10 h-10 mr-3 edu-hat"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                 />
               </svg>
               <p className="font-bold text-2xl">WebHistory</p>
             </Link>
           </div>
           <div className="navbar-center hidden lg:flex">
             <ul className="menu menu-horizontal p-0">
               <li>
                 <Link to="/courses">Courses</Link>
               </li>
               <li>
                 <Link to="/faq">FAQ</Link>
               </li>

               <li>
                 <Link to="/blogs">BLOG</Link>
               </li>
             </ul>
           </div>
           <div className="navbar-end">
             <label className="swap swap-rotate">
               <input type="checkbox" />
               <svg
                 className="swap-on fill-current w-6 h-6"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
               >
                 <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
               </svg>

               <svg
                 className="swap-off fill-current w-6 h-6"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
               >
                 <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
               </svg>
             </label>
           </div>
         </div>
       </section>
     </div>
   );
};

export default Header;