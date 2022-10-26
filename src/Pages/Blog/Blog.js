import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({blog}) => {
   const { img, name, id, blog_desc } = blog;
   return (
     <div>
       <div className="mb-20">
         <Link to={`/blogs/${id}`}>
           <img src={img} alt="" />
           <h1 className="text-3xl font-bold my-3">{name}</h1>
           <p className="w-3/6 my-5">{blog_desc.slice(0, 250)}...</p>
           <button>Read More</button>
         </Link>
       </div>
     </div>
   );
};

export default Blog;