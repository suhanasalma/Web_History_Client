import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';
import LeftSide from '../LeftSide/LeftSide';
import './Blog.css'

const Blogs = () => {
   const allBlogs = useLoaderData()
   console.log(allBlogs)
   return (
     <div className="">
       <div className="blog-cotainer mb-10">
         <h1 className="text-white font-bold text-4xl flex h-full justify-center items-center">
           Welcome To My Blog
         </h1>
       </div>
       <section className="flex sm:flex-col lg:flex-row items-start justify-around w-5/6 m-auto">
         <div>
           {allBlogs.map((blog) => (
             <Blog blog={blog} key={blog.id}></Blog>
           ))}
         </div>
         <div className="w-full lg:ml-20 lg:sticky top-0">
           <LeftSide />
         </div>
       </section>
     </div>
   );
};

export default Blogs;