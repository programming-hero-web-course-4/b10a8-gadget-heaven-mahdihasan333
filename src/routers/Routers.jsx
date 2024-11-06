import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Categories from "../components/Categories";
import ProductDetails from "../pages/ProductDetails";
import Testimonials from "../components/Testimonials";
import Error from "../components/Error";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/categories.json'),
        children: [
          {
            path: "/",
            loader: ()=> fetch('../category.json'),
            element: <Categories />,
          },
          {
            path: "/category/:category",
            loader: ()=> fetch('../category.json'),
            element: <Categories />,
          },
        ],
      },
      {
        path: "/statistics",
        
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/product-details/:productId",

        element: <ProductDetails />,
      },
      {
        path: "/testimonials",
        element: <Testimonials/>,
      },
    ],
  },
]);

export default Routers;
