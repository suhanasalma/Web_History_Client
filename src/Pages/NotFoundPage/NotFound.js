import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
   return (
     <div className=" error-container">
       <div className="error-page h-screen flex items-center 	justify-center	">
         <div className=" w-2/4	h-2/4 flex items-center	justify-center flex-col text-2xl	 font-bold">
           <h1>Oops!</h1>
           <p>Sorry, an unexpected error has occurred.</p>
           <p>
             <small>404 not found</small>
           </p>
           <Link to="/">
             <p className='text-red-500'>Go To Website</p>
           </Link>
         </div>
       </div>
     </div>
   );
};

export default NotFound;