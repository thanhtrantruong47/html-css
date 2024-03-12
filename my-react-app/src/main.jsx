import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from "./product";
import Index from ".";
import Category from "./category";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Index />,
  },
  {
    path: "/product",
    element:  <Product />,
  },
  {
    path: "/category",
    element:  <Category />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);