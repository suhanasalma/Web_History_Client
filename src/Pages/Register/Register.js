import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextDetails } from '../../Context/ContextProvide';


const Register = () => {
   const { createUser, googleSignIn, faceBookSignIn, gitLogIn ,user} =
     useContext(ContextDetails);
   const register = (e)=>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password)
    createUserEmailPass(email,name)
    form.reset();
   }

   const createUserEmailPass = (email, password) => {
    createUser(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user)
      
    })
    .catch(error=>{
      console.log(error)
    })

   };


   const signInGoogle = ()=>{
    googleSignIn()
    .then(result=>{
      const user = result.user
      console.log(user)
    })
    .catch(error=>{
      console.error(error)
    })
   }

   const signInFaceBook = ()=>{
     faceBookSignIn()
       .then((result) => {
         const user = result.user;
         console.log(user);
       })
       .catch((error) => {
         console.error(error);
       });
   }

   const gitSingIn = ()=>{
    gitLogIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
   }
   return (
     <div>
       <div className="course-cotainer">
         <h1 className="text-white flex h-full justify-center items-center font-bold text-4xl">
           {user?.uid ? (
             <h1>Welcome {user.uid}</h1>
           ) : (
             <h1>Be a Member or Already a Member?</h1>
           )}
         </h1>
       </div>
       <div className="hero min-h-screen bg-base-300">
         <div className="hero-content flex-col lg:flex-row-reverse">
           <div className="text-center lg:text-left">
             <h1 className="text-5xl font-bold">Register now!</h1>
             <p className="py-6">
               Already a Member? <Link to="/login"> Log In</Link>
             </p>
           </div>
           <form
             onSubmit={register}
             className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
           >
             <div className="card-body">
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">FUll Name</span>
                 </label>
                 <input
                   name="name"
                   type="text"
                   placeholder="name"
                   className="input input-bordered"
                 />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Photo</span>
                 </label>
                 <input
                   name="photo"
                   type="text"
                   placeholder="upload photo"
                   className="input input-bordered"
                 />
               </div>
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
                   name="password"
                   type="password"
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
                 <button
                   //  onClick={createUserEmailPass}
                   className="btn btn-primary"
                 >
                   Register
                 </button>
               </div>
               <div className="form-control mt-6">
                 <button onClick={signInGoogle} className="btn btn-primary">
                   Google Login
                 </button>
               </div>
               <div className="form-control mt-6">
                 <button onClick={gitSingIn} className="btn btn-primary">
                   Github Login
                 </button>
               </div>
               <div className="form-control mt-6">
                 <button onClick={signInFaceBook} className="btn btn-primary">
                   Facebook Login
                 </button>
               </div>
             </div>
           </form>
         </div>
       </div>
     </div>
   );
};

export default Register;