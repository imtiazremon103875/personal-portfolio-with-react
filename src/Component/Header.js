import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const menuItem = <>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skill">Skill</a></li>
        <li><a href="#contact">Contact Us</a></li>

    </>
    return (
        <div className="  navbar  text-white">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex="1" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="1" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-500 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <p className="btn btn-ghost normal-case text-2xl "> Portfolio</p>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>

        </div>
    );
};

export default Header;