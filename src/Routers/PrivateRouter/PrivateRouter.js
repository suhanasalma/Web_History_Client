import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ContextDetails } from '../../Context/ContextProvide';

const PrivateRouter = ({children}) => {
   const {user,loading} = useContext(ContextDetails)
   let location = useLocation()
   if(loading){
      return (
        <div className='flex justify-center'>
          <ul className="steps">
            <li data-content="?" className="step step-neutral">
              Step 1
            </li>
            <li data-content="!" className="step step-neutral">
              Step 2
            </li>
            <li data-content="✓" className="step step-neutral">
              Step 3
            </li>
            <li data-content="✕" className="step step-neutral">
              Step 4
            </li>
            <li data-content="★" className="step step-neutral">
              Step 5
            </li>
            <li data-content="" className="step step-neutral">
              Step 6
            </li>
            <li data-content="●" className="step step-neutral">
              Step 7
            </li>
          </ul>
        </div>
      );
   }
   if(user && user.uid){
      return children
   }
   return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRouter;
