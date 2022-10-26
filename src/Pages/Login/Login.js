import React from 'react';
import { Link } from "react-router-dom";


const Login = () => {
   return (
     <div>
       <div>
         <div className="course-cotainer">
           <h1 className="text-white flex h-full justify-center items-center font-bold text-4xl">
             PLease Login
           </h1>
         </div>
         <div className="hero min-h-screen bg-base-300">
           <div className="hero-content flex-col lg:flex-row-reverse">
             <div className="text-center lg:text-left">
               <h1 className="text-5xl font-bold">Login now!</h1>
               <p className="py-6">
                 Don't have any account <Link to="/register"> Create Now</Link>
               </p>
             </div>
             <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <div className="card-body">
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Email</span>
                   </label>
                   <input
                     name="email"
                     type="email"
                     placeholder="email"
                     className="input input-bordered"
                   />
                 </div>
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Password</span>
                   </label>
                   <input
                     type="text"
                     placeholder="password"
                     className="input input-bordered"
                   />
                   <label className="label">
                     <a href="#" className="label-text-alt link link-hover">
                       Forgot password?
                     </a>
                   </label>
                 </div>
                 <div className="form-control mt-6">
                   <button className="btn btn-primary">Login</button>
                 </div>
                 <div className="form-control mt-6">
                   <button className="btn btn-primary">Google Login</button>
                 </div>
                 <div className="form-control mt-6">
                   <button className="btn btn-primary">Github Login</button>
                 </div>
                 <div className="form-control mt-6">
                   <button className="btn btn-primary">Facebook Login</button>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
};

export default Login;