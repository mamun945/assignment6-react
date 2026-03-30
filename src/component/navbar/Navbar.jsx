import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = ({cardArray}) => {
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a href=''>Products</a></li>
                    <li><a href=''>Features</a></li>
                    <li><a href=''>Pricing</a></li>
                    <li><a href=''>Testimonials</a></li>
                    <li><a href=''>FAQ</a></li>
                </ul>
                </div>
                <a className="text-md md:text-2xl bg-gradient-to-r from-[#652df7] to-[#8e18fa] text-transparent bg-clip-text font-bold">DigiTools</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a href=''>Products</a></li>
                <li><a href=''>Features</a></li>
                <li><a href=''>Pricing</a></li>
                <li><a href=''>Testimonials</a></li>
                <li><a href=''>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-4">
                <a href="" className='relative'>
                    <CiShoppingCart className='text-4xl'/>
                    <span className='absolute text-red-500 text-sm top-[8px] left-[15px] font-bold'>{cardArray.length ? cardArray.length : ""}</span>
                </a>
                <a href="">Login</a>
                <a className="btn rounded-full bg-linear-to-r from-[#652df7] to-[#8e18fa] text-white">Get Started</a>
            </div>
            </div>
        </div>
    );
};

export default Navbar;