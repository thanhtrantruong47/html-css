import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from "./product";
import Category from "./category";
import Home from "./home";
import Cart from "./cart";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Home />,
  },
  {
    path: "/product",
    element:  <Product />,
  },
  {
    path: "/category",
    element:  <Category />,
  },
  {
    path: "/cart",
    element:  <Cart />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);