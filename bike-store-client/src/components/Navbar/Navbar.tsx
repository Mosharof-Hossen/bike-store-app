import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png"
import "./Navbar.css"
import { FaRegUser } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { logout, TUser, useCurrentToken } from '../../redux/features/Auth/authSlice';
import { verifyToken } from '../../utils/verifytoken';
import { FiLogOut } from 'react-icons/fi';

const Navbar = () => {
    const token = useAppSelector(useCurrentToken);
    const dispatch = useAppDispatch();
    let user;
    if (token) {
        user = verifyToken(token) as TUser;
    }

    const links = <>
        <NavLink to={"/"} className={"text-[#22292f]  lg:px-2 px-2 lg:mx-1 w-full md:w-fit  py-1 rounded  text-lg font-semibold "}><li>Home</li></NavLink>
        <NavLink to={"/shop"} className={"text-[#22292f]  lg:px-2 px-2 lg:mx-1 w-full md:w-fit py-1 rounded  text-lg font-semibold "}><li>Shop</li></NavLink>
        <NavLink to={"/contact"} className={"text-[#22292f] lg:px-2 px-2 lg:mx-1 w-full md:w-fit py-1 rounded  text-lg font-semibold "}><li>Contact</li></NavLink>
        {
            user?.role === "admin" &&
                <NavLink to={"/admin/dashboard"} className={"text-[#22292f] lg:px-2 px-2 lg:mx-1 w-full md:w-fit py-1 rounded  text-lg font-semibold "}><li>Dashboard</li></NavLink>
        }
        {
            user?.role === "customer" &&
                <NavLink to={"/user/dashboard"} className={"text-[#22292f] lg:px-2 px-2 lg:mx-1 w-full md:w-fit py-1 rounded  text-lg font-semibold "}><li>Dashboard</li></NavLink>
        }

    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center flex-1 space-x-2">
                        <Link to={"/"} className="flex items-center">
                            <h1 className="text-3xl text-[#22292f] font-bold">BikeHut</h1>
                            <img src={logo} alt="" className="w-12 h-fit" />
                        </Link>
                    </div>
                   
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ?
                            <button onClick={()=>dispatch(logout())} className="btn bg-[#22292f] text-white hover:bg-black flex items-center gap-1 text-lg">Logout <FiLogOut /> </button>
                            :
                            <Link to={"/sign-up"}><button className="btn bg-[#22292f] text-white hover:bg-black flex items-center gap-1 text-lg"><FaRegUser /> Join Us</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;