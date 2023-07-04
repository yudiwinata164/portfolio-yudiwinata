import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Gallery from "../components/Gallery";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/gallery",
        element: <Gallery />
    },
]);

export default Router;