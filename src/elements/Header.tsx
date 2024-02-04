import { Link, NavLink } from "react-router-dom";

export default function Header () {
    return (
        <header className="header">
            <nav className="navbar bg-gray-light-9 text-white">
                <div className="container">
                    {/* Logo Start */}
                    <Link to={"/"} className="site-title">Header - Navbar</Link>
                    {/* Logo End */}
                    {/* Main navigation links start */}
                    <ul className="display-f">
                        <li ><NavLink to={"/"}
                        className={({isActive}) =>
                            isActive
                                ? "nav_link_active-gray-4"
                                : "nav_link-primary-6"}>Search</NavLink></li>
                        <li><NavLink to={"/plan"} className={({isActive}) =>
                            isActive
                                ? "nav_link_active-gray-4"
                                : "nav_link-primary-6"}>Plan</NavLink></li>
                        <li><NavLink to={"/tour"} className={({isActive}) =>
                            isActive
                                ? "nav_link_active-gray-4"
                                : "nav_link-primary-6"}>Tour</NavLink></li>
                    </ul>
                    {/* Main navigation links End */}
                    {/* User navigation options Start */}
                    <ul className="display-f">
                        <li className="ml-1"><NavLink to={"/login"}>Login</NavLink></li>
                        <li className="ml-1"><NavLink to={"/signup"}>Signup</NavLink></li>
                    </ul>
                    {/* User navigation options End */}
                    </div>
            </nav>
        </header>
    );
}