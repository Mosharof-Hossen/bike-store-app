import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact/Contact";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import AdminProfile from "../pages/Admin/AdminProfile";
import AllProducts from "../pages/Admin/AllProducts";
import CreateBike from "../pages/Admin/CreateBike";
import ManageOrders from "../pages/Admin/ManageOrders";
import ManageUsers from "../pages/Admin/ManageUsers";

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
        path: "/admin/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "/admin/dashboard",
                element: <AdminProfile></AdminProfile>
            },
            {
                path: "/admin/dashboard/all-products",
                element: <AllProducts></AllProducts>
            },
            {
                path: "/admin/dashboard/create-bike",
                element: <CreateBike></CreateBike>
            },
            {
                path: "/admin/dashboard/manage-order",
                element: <ManageOrders></ManageOrders>
            },
            {
                path: "/admin/dashboard/manage-users",
                element: <ManageUsers></ManageUsers>
            },
        ]
    }
])

export default router;