import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png"
import "./Navbar.css"

const Navbar = () => {

    const links = <>
        <NavLink to={"/"} className={"text-[#22292f]  lg:px-2 px-2 lg:mx-1 w-full md:w-fit  py-1 rounded  text-lg font-semibold "}><li>Home</li></NavLink>
        <NavLink to={"/shop"} className={"text-[#22292f]  lg:px-2 px-2 lg:mx-1 w-full md:w-fit py-1 rounded  text-lg font-semibold "}><li>Shop</li></NavLink>
        <NavLink to={"/contact"} className={"text-[#22292f] lg:px-2 px-2 lg:mx-1 w-full md:w-fit py-1 rounded  text-lg font-semibold "}><li>Contact</li></NavLink>
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
                    <div className="flex items-center">
                        <img src={logo} alt="" className="w-12 h-fit" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;