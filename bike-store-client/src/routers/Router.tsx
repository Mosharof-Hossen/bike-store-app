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
import UserProfile from "../pages/User/UserProfile";
import MyOrders from "../pages/User/MyOrders";
import PaymentHistory from "../pages/User/PaymentHistory";
import UpdatePassword from "../pages/User/UpdatePassword";

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
    },

    {
        path: "/user/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "/user/dashboard",
                element: <UserProfile></UserProfile>
            },
            {
                path: "/user/dashboard/my-orders",
                element: <MyOrders></MyOrders>
            },
            {
                path: "/user/dashboard/Payment-history",
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: "/user/dashboard/update-password",
                element: <UpdatePassword></UpdatePassword>
            },
        ]
    },

])

export default router;