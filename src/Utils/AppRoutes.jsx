import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

import { Navigate } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import ForgotPassword from "../Pages/ForgotPassword";
import CreateBlog from "../Pages/CreateBlog";

import UserEdit from "../Components/UserEdit";
import AllUsers from "../Pages/AllUsers";
import BlogModalPage from "../Pages/BlogModalPage";

const appRouter = [
  {
    path: "/home",
    element: <Home />,
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
    path: "/createBlog",
    element: <CreateBlog />,
  },
  {
    path: "/landingPage",
    element: <LandingPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/allUsers",
    element: <AllUsers />,
  },
  {
    path: "/users/:id",
    element: <UserEdit />,
  },
  {
    path: "/blogModelPage/:id",
    element: <BlogModalPage />,
  },
  {
    path: "*",
    element: <Navigate to="/landingPage" />,
  },
];

export default appRouter;
