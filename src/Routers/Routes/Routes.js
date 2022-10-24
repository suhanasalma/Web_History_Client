import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/FAQ/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
   {
      path:'/',
      element:<Main></Main>,
      children:[
         {
            path:'/',
            element:<Home></Home>
         },
         {
            path:'/login',
            element:<Login/>
         },
         {
            path:'/register',
            element:<Register/>
         },
         {
            path:'/courses',
            element:<Courses/>
         },
         {
            path:'/blogs',
            element:<Blogs/>
         },
         {
            path:'/faq',
            element:<Faq/>
         },
      ]
   }
])