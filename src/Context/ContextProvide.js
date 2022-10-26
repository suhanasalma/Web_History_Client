
import React , { createContext } from 'react';



export const ContextDetails = createContext();

const ContextProvide = ({ children }) => {

   
   const allInfo = {  };

  return <div>
      <ContextDetails.Provider value={allInfo}>
         {children}
      </ContextDetails.Provider>
  </div>;
};

export default ContextProvide;