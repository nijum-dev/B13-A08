import React from 'react';


const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#0D3B1E] shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold text-white">Qurbani<span className='text-[#C89731]'>Hat</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a className='text-white hover:text-[#C89731]'>Home</a></li>

            <li><a className='text-white hover:text-[#C89731]'>All Animals</a></li>
          </ul>
        </div>
        <div className="navbar-end gap-1">
          <a className="btn bg-[#0D3B1E] text-[#C89731] border-amber-300">Logout</a>
          <a className="btn bg-[#0D3B1E] text-[#C89731] border-amber-300">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;