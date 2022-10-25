import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link} from 'react-router-dom';

const RightSide = ({link}) => {
  const {name} = link;


   return (
     <div>
       <div>
         <Link to={`/courses/${link.id}`}>
           <p>{link.name}</p>
         </Link>
       </div>
     </div>
   );
};

export default RightSide;