import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/icon/logo.png';
import { AuthContext } from "../../Provider/AuthProvider";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
    const [isMenu, setMenu] = useState(false);
    const { user, logout } = useContext(AuthContext);
    const handleMenu = () => {
        setMenu(!isMenu);
    };
    return (

        <div className="navbar bg-base-100  py-5 max-w-screen-xl mx-auto">
            <div className="navbar-start flex space-x-4">
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
                <span className=" hidden md:block text-lg text-stone-950 tracking-[0.3em] font-bold">PLANET</span>

            </div>
            <div className="navbar-center">
                <ul className="md:flex space-x-4  hidden ">
                    <li>
                        <NavLink to='/' onClick={() => setMenu(false)} className={({ isActive }) => (isActive ? "navActive" : "default")} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/allToy' onClick={() => setMenu(false)} className={({ isActive }) => (isActive ? "navActive" : "default")}>All Toys</NavLink>
                    </li>
                    {
                        user && <>
                            <li>
                                <NavLink to='/my-toys' onClick={() => setMenu(false)} className={({ isActive }) => (isActive ? "navActive" : "default")}>My Toys</NavLink>
                            </li>
                            <li>
                                <NavLink to='/addToy' onClick={() => setMenu(false)} className={({ isActive }) => (isActive ? "navActive" : "default")}> Add Toy</NavLink>
                            </li>

                        </>
                    }
                    <li>
                        <NavLink to='/blogs' onClick={() => setMenu(false)} className={({ isActive }) => (isActive ? "navActive" : "default ")}>Blogs</NavLink>
                    </li>

                </ul>

            </div>
            <div className="navbar-end">


                <div className="dropdown md:hidden block mr-2">

                    <button onClick={handleMenu}>
                        {isMenu ? <FaTimes className="w-5 h-5 text-zinc-900" /> :
                            <FaBars className="w-5 h-5 text-zinc-900" />
                        }
                    </button>
                    {/* mobile menu */}
                    <ul className={isMenu ? 'absolute z-40 mr-5 mt-5 -r-10 p-4 shadow bg-base-100 rounded-box -left-12 w-[250px]' : 'hidden'}>
                        <li className="mb-5">
                            <Link to='/' onClick={() => setMenu(false)}>Home</Link>
                        </li>
                        <li className="mb-5">
                            <Link to='/allToy' onClick={() => setMenu(false)}>All Toys</Link>
                        </li>
                        {
                            user && <>
                                <li className="mb-5">
                                    <Link to='/my-toys' onClick={() => setMenu(false)}>My Toys</Link>
                                </li>
                                <li className="mb-5">
                                    <Link to='addToy' onClick={() => setMenu(false)}> Add Toy</Link>
                                </li>

                            </>
                        }
                        <li>
                            <Link to='/blogs' onClick={() => setMenu(false)}>Blogs</Link>
                        </li>

                    </ul>
                </div>
                {user ?
                    <div className="dropdown dropdown-end">

                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar" title={user?.name? user?.name : 'user'}>
                            <div className="w-10 rounded-full">

                                <img src={user?.photoURL? user?.photoURL: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li ><button onClick={logout}>Sign Out</button></li>
                        </ul>
                    </div>
                    :
                    <Link to='/login' onClick={() => setMenu(false)} className="btn-primary px-5 py-2">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;

