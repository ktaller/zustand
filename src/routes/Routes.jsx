import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/layout/Layout";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";
// import LoginForm from "../pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      // {
      //   path: "/login",
      //   element: <LoginForm />,
      // },
      {
        path: "*",
        element: <Home />,
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
