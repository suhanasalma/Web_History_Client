import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

const LeftSide = () => {
   const [links, setLinks] = useState([]);
   useEffect(() => {
     fetch("https://web-history-server-side.vercel.app/categories")
       .then((res) => res.json())
       .then((data) => setLinks(data));
   }, []);
   return (
     <div>
       <h1>Course Categories</h1>
       {links.map((link) => (
         <Link key={link.id} to={`/courses/${link.id}`}>
           <li>{link.name}</li>
         </Link>
       ))}
     </div>
   );
};

export default LeftSide;