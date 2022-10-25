
import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/FAQ/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import SwiperSlider from "../../Pages/Swiper/SwiperSlider";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://web-history-server-side.vercel.app/categories"),
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/courses/:id",
        loader: ({ params }) =>
          fetch(
            `https://web-history-server-side.vercel.app/courses/${params.id}`
          ),
        element: <Courses />,
      },
      {
        path: "/course-details/:id",
        loader: ({ params }) =>
          fetch(
            `https://web-history-server-side.vercel.app/course-details/${params.id}`
          ),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/swiper",
        loader: () =>
          fetch("https://web-history-server-side.vercel.app/categories"),
        element: <SwiperSlider />,
      },
    ],
  },
]);