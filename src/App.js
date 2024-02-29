import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Grocery from "./components/Grocery";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
import Error from "./components/Error";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    children:[
      {
        path:"/",
        element: <Body />,
      },
      {
        path:"/about",
        element: <About />,
      },
      {
        path:"/contact",
        element: <Contact />,
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<h2>Preview</h2>} ><Grocery /></Suspense>,
      },
      {
        path:"/restaurant/:resId",
        element: <RestaurantMenu />,
      }
    ],
    errorElement: <Error />
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering React functional component
root.render(<RouterProvider router={appRouter} />);
