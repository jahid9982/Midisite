import React from 'react';

const Header = () => {
    const menuIitems = (
        < >
            <li className='text-white  text-xl font-semibold'><a>Home</a></li>
            <li className='text-white  text-xl font-semibold'><a>pages</a></li>
            <li className='text-white  text-xl font-semibold'><a>Service Area</a></li>
            <li className='text-white  text-xl font-semibold'><a>Blogs</a></li>
            <li className='text-white  text-xl font-semibold'><a> Contact Us</a></li>
            <li className='text-white  text-xl font-semibold'><a>About Us</a></li>
        </>
    )
    return (
        <header>
            <div >
                <div className="navbar bg-primary shadow-sm px-4 md:p-5 hedd md:pb-50">
                    <div className="navbar-start ">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-primary rounded-box z-1 mt-3 w-52 p-2 shadow  ">
                                {menuIitems}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-4xl font-bold text-white text-center ">Medisite</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menuIitems}
                        </ul>
                    </div>
                    <div className="navbar-end mr-4">
                        <a className="btn">Button</a>
                    </div>
                </div>
            </div>
            <nav>

            </nav>
        </header>
    );
};

export default Header;