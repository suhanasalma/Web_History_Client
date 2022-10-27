import React from 'react';
import { Link } from "react-router-dom";
import { ContextDetails } from "../../Context/ContextProvide";
import { useContext } from "react";


const Login = () => {
   const {signInEmailPass ,user} =
     useContext(ContextDetails);



   const login = (e) => {
     e.preventDefault();
     const form = e.target;
     const email = form.email.value;
     const password = form.password.value;
     console.log(email, password);

     signInEmailPass(email, password)
       .then((userCredential) => {
         // Signed in
         const user = userCredential.user;
         console.log(user);
         form.reset();
         // ...
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.error(error);
       });
   };

   

   return (
     <div>
       <div>
         <div className="course-cotainer">
           {user?.uid ? (
             <h1>Hello User</h1>
           ) : (
             <h1 className="text-white flex h-full justify-center items-center font-bold text-4xl">
               PLease Login
             </h1>
           )}
         </div>
         <div className="hero min-h-screen bg-base-200">
           <div className="hero-content flex-col lg:flex-row-reverse">
             <div className="text-center lg:text-left">
               <h1 className="text-5xl font-bold">Login now!</h1>
             </div>
             <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <form onSubmit={login} className="card-body">
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Email</span>
                   </label>
                   <input
                     name="email"
                     type="email"
                     placeholder="email"
                     className="input input-bordered"
                     required
                   />
                 </div>
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Password</span>
                   </label>
                   <input
                     type="password"
                     name="password"
                     placeholder="password"
                     className="input input-bordered"
                     required
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
               </form>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
};

export default Login;