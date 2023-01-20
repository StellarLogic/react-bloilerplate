import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Views/Layout/Layout";
import Home from "../Views/Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
