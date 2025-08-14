import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';

const navItems = [
    { path: '/', label: 'Home' },
    { path: '/page', label: 'Pages' },
    { path: '/service', label: 'Service Area' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/about', label: 'About Us' },
];

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleUser = () => {
        logOut()
            .then(() => { })
            .catch((err) => {
                console.log(err);

            })
    }

    const menuItems = (
        <>
            {navItems.map((item) => (
                <li key={item.path}>
                    <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                            `text-xl font-semibold transition-colors duration-200 ${isActive ? 'text-[#d8e7e5] border-b-4  border-white' : 'text-white hover:text-[#66b4ab]'
                            }`
                        }
                    >
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </>
    );

    return (
        <header>
            <div className="navbar bg-primary shadow-sm px-4 md:p-5 fixed top-0 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-primary rounded-box z-50 mt-3 w-52 p-2 shadow"
                        >
                            {menuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-4xl font-bold text-white">Medisite</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{menuItems}</ul>
                </div>
                <div className="navbar-end mr-4">
                    {
                        user ? <button onClick={handleUser} className="btn bg-[#34C9B6] text-white hover:bg-[#2ab3a2] border-none">
                            LogOut
                        </button> : <Link to={'/singin'} className="btn bg-[#34C9B6] text-white hover:bg-[#2ab3a2] border-none">
                            LogIn
                        </Link>
                    }


                </div>
            </div>
        </header>
    );
};

export default Header;
