import React from 'react';
import './Faqs.css'

const Faq = () => {
   return (
     <div>
       <div className="course-cotainer mb-20">
         <h1 className="text-white flex h-full justify-center items-center font-bold text-4xl">
           frequently asked question Section
         </h1>
       </div>
       <h1 className="text-center text-4xl font-bold">Frequently Asked</h1>
       <section className=" flex sm:flex-col lg:flex-row gap-5  w-9/12 m-auto collapse-plus border-base-300 bg-base-100 rounded-box">
         <article>
           <div className="collapse my-10 border">
             <input type="checkbox" />
             <div className="collapse-title text-xl font-medium">
               What is CORS
             </div>
             <div className="collapse-content">
               <p>Cross-Origin Resource Sharing</p>
               <p>
                 Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                 mechanism that allows a server to indicate any origins (domain,
                 scheme, or port) other than its own from which a browser should
                 permit loading resources. CORS also relies on a mechanism by
                 which browsers make a "preflight" request to the server hosting
                 the cross-origin resource, in order to check that the server
                 will permit the actual request. In that preflight, the browser
                 sends headers that indicate the HTTP method and headers that
                 will be used in the actual request.
               </p>
             </div>
           </div>
           <div className="collapse border">
             <input type="checkbox" />
             <div className="collapse-title text-xl font-medium">
               Why are we using firebase? What other options do we have to
               implement authentication?
             </div>
             <div className="collapse-content">
               <p>Cross-Origin Resource Sharing</p>
               <p>
                 Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                 mechanism that allows a server to indicate any origins (domain,
                 scheme, or port) other than its own from which a browser should
                 permit loading resources. CORS also relies on a mechanism by
                 which browsers make a "preflight" request to the server hosting
                 the cross-origin resource, in order to check that the server
                 will permit the actual request. In that preflight, the browser
                 sends headers that indicate the HTTP method and headers that
                 will be used in the actual request.
               </p>
             </div>
           </div>
         </article>
         <article>
           <div className="collapse my-10 border">
             <input type="checkbox" />
             <div className="collapse-title text-xl font-medium">
               How does the private route work?
             </div>
             <div className="collapse-content">
               <p>Cross-Origin Resource Sharing</p>
               <p>
                 Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                 mechanism that allows a server to indicate any origins (domain,
                 scheme, or port) other than its own from which a browser should
                 permit loading resources. CORS also relies on a mechanism by
                 which browsers make a "preflight" request to the server hosting
                 the cross-origin resource, in order to check that the server
                 will permit the actual request. In that preflight, the browser
                 sends headers that indicate the HTTP method and headers that
                 will be used in the actual request.
               </p>
             </div>
           </div>
           <div className="collapse border">
             <input type="checkbox" />
             <div className="collapse-title text-xl font-medium">
               What is Node? How does Node work?
             </div>
             <div className="collapse-content">
               <p>Cross-Origin Resource Sharing</p>
               <p>
                 Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                 mechanism that allows a server to indicate any origins (domain,
                 scheme, or port) other than its own from which a browser should
                 permit loading resources. CORS also relies on a mechanism by
                 which browsers make a "preflight" request to the server hosting
                 the cross-origin resource, in order to check that the server
                 will permit the actual request. In that preflight, the browser
                 sends headers that indicate the HTTP method and headers that
                 will be used in the actual request.
               </p>
             </div>
           </div>
         </article>
       </section>
       <section className=" call-center my-10 flex md:flex-row sm:flex-col justify-around items-center text-3xl font-bold p-3">
         <h1>
           If You Have Any Questions <br /> You Can Call us 24/7
         </h1>
         <p>Call Us Now</p>
       </section>
       <section className="my-20">
         <div className="hero ">
           <div className="hero-content flex-col lg:flex-row-reverse">
             <div className="text-center lg:text-left">
               <h1 className="text-5xl font-bold">Didn't find the answer?</h1>
             </div>
             <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <div className="card-body">
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Email</span>
                   </label>
                   <input
                     type="text"
                     placeholder="email"
                     className="input input-bordered"
                   />
                 </div>
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Question</span>
                   </label>
                   <textarea
                     className="border"
                     name="text-area"
                     rows="4"
                     cols="50"
                   />
                 </div>
                 <div className="form-control mt-6">
                   <button className="btn btn-primary">Submit</button>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

       <section className=" flex sm:flex-col lg:flex-row gap-5  w-9/12 m-auto collapse-plus border-base-300 bg-base-100 rounded-box">
         <article>
           <h1>Purchases & Refunds</h1>
           <div className="collapse my-10 border">
             <input type="checkbox" />
             <div className="collapse-title text-xl font-medium">
               Why won't my payment go through?
             </div>
             <div className="collapse-content">
               <p>Cross-Origin Resource Sharing</p>
               <p>
                 Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                 mechanism that allows a server to indicate any origins (domain,
                 scheme, or port) other than its own from which a browser should
                 permit loading resources. CORS also relies on a mechanism by
                 which browsers make a "preflight" request to the server hosting
                 the cross-origin resource, in order to check that the server
                 will permit the actual request. In that preflight, the browser
                 sends headers that indicate the HTTP method and headers that
                 will be used in the actual request.
               </p>
             </div>
           </div>
           <div className="collapse border">
             <input type="checkbox" />
             <div className="collapse-title text-xl font-medium">
               How do i get a refund?
             </div>
             <div className="collapse-content">
               <p>Cross-Origin Resource Sharing</p>
               <p>
                 Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                 mechanism that allows a server to indicate any origins (domain,
                 scheme, or port) other than its own from which a browser should
                 permit loading resources. CORS also relies on a mechanism by
                 which browsers make a "preflight" request to the server hosting
                 the cross-origin resource, in order to check that the server
                 will permit the actual request. In that preflight, the browser
                 sends headers that indicate the HTTP method and headers that
                 will be used in the actual request.
               </p>
             </div>
           </div>
           <div className="collapse my-10 border">
             <input type="checkbox" />
             <div className="collapse-title text-xl font-medium">
               How do i reedem a coupon?
             </div>
             <div className="collapse-content">
               <p>Cross-Origin Resource Sharing</p>
               <p>
                 Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                 mechanism that allows a server to indicate any origins (domain,
                 scheme, or port) other than its own from which a browser should
                 permit loading resources. CORS also relies on a mechanism by
                 which browsers make a "preflight" request to the server hosting
                 the cross-origin resource, in order to check that the server
                 will permit the actual request. In that preflight, the browser
                 sends headers that indicate the HTTP method and headers that
                 will be used in the actual request.
               </p>
             </div>
           </div>
         </article>

         <article>
           <h1>Making Courses</h1>
           <div className="collapse my-10 border">
             <input type="checkbox" />
             <div className="collapse-title text-xl font-medium">
               Changing account name
             </div>
             <div className="collapse-content">
               <p>Cross-Origin Resource Sharing</p>
               <p>
                 Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                 mechanism that allows a server to indicate any origins (domain,
                 scheme, or port) other than its own from which a browser should
                 permit loading resources. CORS also relies on a mechanism by
                 which browsers make a "preflight" request to the server hosting
                 the cross-origin resource, in order to check that the server
                 will permit the actual request. In that preflight, the browser
                 sends headers that indicate the HTTP method and headers that
                 will be used in the actual request.
               </p>
             </div>
           </div>
           <div className="collapse border">
             <input type="checkbox" />
             <div className="collapse-title text-xl font-medium">
               How do i change my password
             </div>
             <div className="collapse-content">
               <p>Cross-Origin Resource Sharing</p>
               <p>
                 Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                 mechanism that allows a server to indicate any origins (domain,
                 scheme, or port) other than its own from which a browser should
                 permit loading resources. CORS also relies on a mechanism by
                 which browsers make a "preflight" request to the server hosting
                 the cross-origin resource, in order to check that the server
                 will permit the actual request. In that preflight, the browser
                 sends headers that indicate the HTTP method and headers that
                 will be used in the actual request.
               </p>
             </div>
           </div>
           <div className="collapse border my-10">
             <input type="checkbox" />
             <div className="collapse-title text-xl font-medium">
               How do i unsubscribed from Web-History email?
             </div>
             <div className="collapse-content">
               <p>Cross-Origin Resource Sharing</p>
               <p>
                 Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                 mechanism that allows a server to indicate any origins (domain,
                 scheme, or port) other than its own from which a browser should
                 permit loading resources. CORS also relies on a mechanism by
                 which browsers make a "preflight" request to the server hosting
                 the cross-origin resource, in order to check that the server
                 will permit the actual request. In that preflight, the browser
                 sends headers that indicate the HTTP method and headers that
                 will be used in the actual request.
               </p>
             </div>
           </div>
         </article>
       </section>
     </div>
   );
};

export default Faq;