import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Page from "../Pages/Home/baner/Page";
import Min from "../layout/Min/Min";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Shared/Error";
import Blogs from "../Pages/Blogs/Blogs";
import Service from "../Pages/Service/Service";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Min></Min>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/page',
                element: <Page></Page>
            }
            ,
            {
                path: '/about',
                element: <About></About>
            }
            ,
            {
                path: '/contact',
                element: <Contact></Contact>
            }
            ,
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
            ,
            {
                path: '/service',
                element: <Service></Service>
            }

        ]
    }
])
export default router;