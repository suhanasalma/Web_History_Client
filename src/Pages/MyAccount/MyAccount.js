import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextDetails } from '../../Context/ContextProvide';

const MyAccount = () => {
   const { user, updateInfo, passwordReset } = useContext(ContextDetails);

   const updateInformation = (e)=>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      console.log(name,photo)
      const profile = {displayName:name, photoURL:photo}
      updateInfo(profile)
        .then(() => {
         console.log(user)
        })
        .catch((error) => {})


   }

   const changePassword = () => {
     passwordReset(user?.email)
       .then(() => {
         alert("please check your Email to reset password");
       })
       .catch((error) => {});
   };


   return (
     <div>
       <div className="course-cotainer">
         <h1 className="text-white flex h-full justify-center items-center font-bold text-4xl">
           {user?.uid ? (
             <h1>Welcome {user?.displayName}</h1>
           ) : (
             <h1>Be a Member or Already a Member?</h1>
           )}
         </h1>
       </div>
       <article className="flex justify-around sm:flex-col md:flex-row my-20 items-center">
         <section className="p-3">
           <h1 className="text-4xl font-bold">{user?.displayName}</h1>
           <p className="my-5 font-semibold">
             Email ID: <span className="text-red-500">{user?.email}</span>
           </p>
           <img src={user?.photoURL} className="w-96" alt=" No img" />
           <Link onClick={changePassword}>
             <p className="my-10 text-white border text-center bg-black p-2 text-lg font-semibold">
               Reset Password
             </p>
           </Link>
         </section>
         <section className="flex justify-center mt-10">
           <form
             onSubmit={updateInformation}
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
                   defaultValue={user?.displayName}
                   required
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
                   defaultValue={user?.photoURL}
                   className="input input-bordered"
                 />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Email</span>
                 </label>
                 <input
                   readOnly
                   name="email"
                   type="email"
                   required
                   defaultValue={user?.email}
                   className="input input-bordered"
                 />
               </div>
               <div className="form-control mt-6">
                 <button className="btn btn-primary"> Update </button>
               </div>
             </div>
           </form>
         </section>
       </article>
     </div>
   );
};

export default MyAccount;