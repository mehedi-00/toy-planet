import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/icon/logo.png';
import { AuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (

        <div className="navbar bg-base-100 md:px-20 py-5">
            <div className="navbar-start flex space-x-4">
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
                <span className="text-lg text-stone-950 tracking-[0.3em] font-bold">PLANET</span>

            </div>
            <div className="navbar-center">
                <ul className="md:flex space-x-3 hidden">
                    <li>
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link>All Toys</Link>
                    </li>
                    {
                        user && <>
                            <li>
                                <Link>My Toys</Link>
                            </li>
                            <li>
                                <Link to='addToy'> Add Toy</Link>
                            </li>

                        </>
                    }
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
                {user ?
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
                            <li ><button onClick={logout}>Sign Out</button></li>
                        </ul>
                    </div>
                    :
                    <Link to='/login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;

