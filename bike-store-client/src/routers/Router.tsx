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
import PrivateRouter from "./PrivateRouter";
import Cart from "../components/Cart/Cart";
import ProductDetails from "../components/Products/ProductDetails";

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
                path: "/product-details/:id",
                element: <ProductDetails></ProductDetails>
            },
            {
                path: "/sign-up",
                element: <SignUp></SignUp>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/user/cart",
                element: <Cart></Cart>
            },
        ]
    },

    {
        path: "/admin/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "/admin/dashboard",
                element: <PrivateRouter role="admin"><AdminProfile></AdminProfile></PrivateRouter>
            },
            {
                path: "/admin/dashboard/all-products",
                element: <PrivateRouter role="admin"><AllProducts></AllProducts></PrivateRouter>
            },
            {
                path: "/admin/dashboard/create-bike",
                element: <PrivateRouter role="admin"><CreateBike></CreateBike></PrivateRouter>
            },
            {
                path: "/admin/dashboard/manage-order",
                element: <PrivateRouter role="admin"><ManageOrders></ManageOrders></PrivateRouter>
            },
            {
                path: "/admin/dashboard/manage-users",
                element: <PrivateRouter role="admin"><ManageUsers></ManageUsers></PrivateRouter>
            },
        ]
    },

    {
        path: "/user/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "/user/dashboard",
                element: <PrivateRouter role="customer"><UserProfile></UserProfile></PrivateRouter>
            },
            {
                path: "/user/dashboard/my-orders",
                element: <PrivateRouter role="customer"><MyOrders></MyOrders></PrivateRouter>
            },
            {
                path: "/user/dashboard/Payment-history",
                element: <PrivateRouter role="customer"><PaymentHistory></PaymentHistory></PrivateRouter>
            },
            {
                path: "/user/dashboard/update-password",
                element: <PrivateRouter role="customer"><UpdatePassword></UpdatePassword></PrivateRouter>
            },

        ]
    },

])

export default router;