import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
   

    return (

        <div className="navbar bg-base-100 md:px-20 py-5">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>

            </div>
            <div className="navbar-center">
                <ul className="md:flex space-x-3 hidden">
                    <li>
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link>All Toys</Link>
                    </li>
                    <li>
                        <Link>My Toys</Link>
                    </li>
                    <li>
                        <Link> Add A Toy</Link>
                    </li>
                    <li>
                        <Link>Blogs</Link>
                    </li>
                </ul>
                
            </div>
            <div className="navbar-end">

               
                <div className="dropdown md:hidden block">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;