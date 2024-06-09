import { Link, NavLink } from "react-router-dom";
import logo from '../../public/logo.jpg'
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    return (

        <div className="navbar bg-base-100 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/available'>Available Camps</NavLink></li>
                        {
                            !user && <p><li><NavLink to='/signUp'>Join Us</NavLink></li></p>
                        }
                    </ul>
                </div>
                <Link to='/' className="h-10 w-10" ><img src={logo} /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/available'>Available Camps</NavLink></li>
                    {
                        !user && <p><li><NavLink to='/signUp'>Join Us</NavLink></li></p>
                    }

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user &&
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL || "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <p className="justify-between">
                                    {user?.displayName || "user not found"}

                                </p>
                            </li>

                            <li><Link to='/dashboard'>Dashboard</Link></li>
                            <li><a onClick={logOut}>Logout</a></li>
                        </ul>
                    </div>
                }

            </div>
        </div>

    );
};

export default Navbar;