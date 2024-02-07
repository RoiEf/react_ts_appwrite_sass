import { Link, NavLink } from "react-router-dom";

export default function Header () {
    return (
        <header className="header">
            <nav className="navbar bg-gray-light-9 text-white">
                <div className="container">
                    {/* Logo Start */}
                    <Link to={"/"} className="site-title">
                    <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="text-blue"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                />
              </svg>
                        <div className="font-size-lg text-blue">Travi.AI</div>
                    </Link>
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