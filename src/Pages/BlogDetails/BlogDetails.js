import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSide from "../LeftSide/LeftSide";
import PopularCourse from '../PopularCourse/PopularCourse'

const BlogDetails = () => {
  const singleBlog = useLoaderData();
  const { date,category_name,name, id, img, blog_desc, author_info } = singleBlog;
 
   console.log(singleBlog.author_info)
   return (
     <div>
       <div className="blog-cotainer mb-10">
         <h1 className="text-white font-bold text-4xl flex h-full justify-center items-center">
           {name}
         </h1>
       </div>
       <section className="flex sm:flex-col lg:flex-row items-start justify-around">
         <div className="mb-20 w-11/12  m-auto lg:mx-10">
           <div className=" text-center p-3 flex justify-between items-center border">
             <div className="">
               <p className="font-bold">Posted By</p>
               <p>{author_info[0].teacher_name}</p>
             </div>
             <div>
               <p className="font-bold">Categories</p>
               <p>{category_name}</p>
             </div>
             <div>
               <p className="font-bold">Published Date</p>
               <p>{date}</p>
             </div>
           </div>
           <h1 className="text-3xl font-bold my-3">{name}</h1>
           <img className="w-full" src={img} alt="" />
           {/* <p className="my-5">{blog_desc}...</p> */}
           <p className="my-5">
             Lorem Ipsum is simply dummy text of the printing and typesetting
             industry. Lorem Ipsum has been the industry’s standard dummy text
             ever since the 1500s,
           </p>

           <p className="my-5">
             when an unknown printer took a galley of type and scrambled it to
             make a type specimen book. It has survived not only five centuries,
             but also the leap into electronic typesetting, remaining
             essentially unchanged.
           </p>
           <p className="my-5">
             It was popularised in the 1960s with the release of Letraset sheets
             containing Lorem Ipsum passages, and more recently with desktop
             publishing software like Aldus PageMaker including versions of
             Lorem Ipsum.
           </p>
           <p className="my-5">
             There are many variations of passages of Lorem Ipsum available, but
             the majority have suffered alteration in some form, by injected
             humour, or randomised words which don’t look even slightly
             believable.
           </p>
           <p className="my-5">
             If you are going to use a passage of Lorem Ipsum, you need to be
             sure there isn’t anything embarrassing hidden in the middle of
             text.
           </p>
           <p className="my-5">
             All the Lorem Ipsum generators on the Internet tend to repeat
             predefined chunks as necessary, making this the first true
             generator on the Internet.
           </p>
           <p className="my-5">
             It uses a dictionary of over 200 Latin words, combined with a
             handful of model sentence structures, to generate Lorem Ipsum which
             looks reasonable. The generated Lorem Ipsum is therefore always
             free from repetition, injected humour, or non-characteristic words
             etc.
           </p>
           <p className="mb-20">
             The standard chunk of Lorem Ipsum used since the 1500s is
             reproduced below for those interested. Sections 1.10.32 and 1.10.33
             from “de Finibus Bonorum et Malorum” by Cicero are also reproduced
             in their exact original form, accompanied by English versions from
             the 1914 translation by H. Rackham.
           </p>
           <div className="border p-10 sm:w-full w-9/12 m-auto text-center">
             <div className="">
               <img
                 src={author_info[0].teacher_img}
                 className="m-auto w-32 h-32 object-cover rounded-full"
                 alt=""
               />
             </div>
             <div className="">
               <h1 className="my-5 font-bold">{author_info[0].teacher_name}</h1>
               <p className="">{author_info[0].author_details}</p>
             </div>
           </div>
         </div>
         <div className="xl:w-5/12 sm:w-full lg:ml-20 lg:sticky top-0">
           <LeftSide />
         </div>
       </section>
     </div>
   );
};

export default BlogDetails;