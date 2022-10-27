
import Main from "../../Layouts/Main";
import AllCourse from "../../Pages/AllCourse/AllCourse";
import BlogDetails from "../../Pages/BlogDetails/BlogDetails";
import Blogs from "../../Pages/Blogs/Blogs";
import Carts from "../../Pages/Carts/Carts";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/FAQ/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyAccount from "../../Pages/MyAccount/MyAccount";
import NotFound from "../../Pages/NotFoundPage/NotFound";
import Register from "../../Pages/Register/Register";
import SwiperSlider from "../../Pages/Swiper/SwiperSlider";
import PrivateRoute from "../PrivateRouter/PrivateRouter";

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
        element: <Home />,
      },
      {
        path: "/home",
        loader: () =>
          fetch("https://web-history-server-side.vercel.app/categories"),
        element: <Home />,
      },
      {
        path: "/allCourse",
        loader: () =>
          fetch("https://web-history-server-side.vercel.app/allCourse"),
        element: <AllCourse />,
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
        path: "/carts",
        loader: () =>
          fetch("https://web-history-server-side.vercel.app/allCourse"),
        element: (
          <PrivateRoute>
            <Carts />
          </PrivateRoute>
        ),
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
        element: <CourseDetails />,
      },
      {
        path: "/blogs",
        loader: () => fetch("https://web-history-server-side.vercel.app/blogs"),
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        loader: ({ params }) =>
          fetch(
            `https://web-history-server-side.vercel.app/blogs/${params.id}`
          ),
        element: <BlogDetails />,
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
      {
        path: "/account",

        element: <MyAccount />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);