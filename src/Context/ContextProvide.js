
import React , { createContext } from 'react';


export const ContextDetails = createContext();

const ContextProvide = ({ children }) => {
   const addToCart = (e)=>{
      e.target.innerText = 'View Cart'

   }
   const allInfo = { addToCart };

  return <div>
      <ContextDetails.Provider value={allInfo}>
         {children}
      </ContextDetails.Provider>
  </div>;
};

export default ContextProvide;