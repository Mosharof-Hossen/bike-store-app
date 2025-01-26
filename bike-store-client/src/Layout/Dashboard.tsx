import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png"

const Dashboard = () => {

    const links = <>
        <NavLink to={"/dashboard/admin"} end className={"lg:px-2  lg:mx-1 w-fit py-1 rounded  text-xl font-semibold "}><li>Profile</li></NavLink>

        <div className="divider w-full"></div>

        <NavLink to={"/"} end className={"lg:px-2  lg:mx-1 w-fit py-1 rounded  text-xl font-semibold "}><li>Home</li></NavLink>
        <NavLink to={"/shop"} end className={"lg:px-2  lg:mx-1 w-fit py-1 rounded  text-xl font-semibold "}><li>Shop</li></NavLink>
    </>

    return (
        <div className="drawer ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* Navbar */}
                <div className="navbar px-8 bg-primary-c text-white w-full space-x-2">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="flex items-center flex-1 space-x-2">
                        <h1 className="text-3xl text-[#22292f] font-bold">BikeHut</h1>
                        <Link to={"/"}><img src={logo} alt="" className="w-12 h-fit" /> </Link>
                    </div>

                </div>
                <div className=" flex-none lg:flex min-h-screen">
                    <div className=" bg-primary-c min-w-80 hidden lg:block ">
                        <ul className="menu space-y-2 p-4 w-80">
                            {links}
                        </ul>
                    </div>
                    <div className="flex-1 overflow-x-auto  bg-slate-100  min-h-screen ">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            <div className="drawer-side mt-16 ">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"> dfe</label>
                <h1 className="text-black">Dashboard</h1>
                <ul className="menu bg-base-200 min-h-full w-80 p-4 px-8">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;