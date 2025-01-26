import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact/Contact";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Dashboard from "../Layout/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/shop",
                element: <Shop></Shop>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/sign-up",
                element: <SignUp></SignUp>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
        ]
    },
    
    {
        path: "/user/dashboard",
        element: <Dashboard></Dashboard>,
    }
])

export default router;