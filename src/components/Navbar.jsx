'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'react-hot-toast';

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
  };

  return (
    <div>
      <div className="navbar bg-[#0D3B1E] shadow-sm py-4 px-4 md:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow-xl font-bold text-[#104216]">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/animals">All Animals</Link></li>
              {user && <li><Link href="/my-profile">My Profile</Link></li>}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-2xl font-black text-white">
            Qurbani<span className='text-[#C89731]'>Hat</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li><Link href="/" className='text-white hover:text-[#C89731] transition-colors'>Home</Link></li>
            <li><Link href="/animals" className='text-white hover:text-[#C89731] transition-colors ml-2'>All Animals</Link></li>
            {user && <li><Link href="/my-profile" className='text-white hover:text-[#C89731] transition-colors ml-2'>My Profile</Link></li>}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {user ? (
            <div className="flex items-center gap-4">
                <div className="hidden md:block text-right">
                    <p className="text-white text-xs font-bold opacity-70 uppercase tracking-widest">Welcome</p>
                    <p className="text-[#C89731] font-bold">{user.name}</p>
                </div>
                <img src={user.photo} className="w-10 h-10 rounded-full border-2 border-[#C89731] shadow-md" alt="" />
                <button 
                    onClick={handleLogout}
                    className="btn bg-transparent hover:bg-red-500 hover:text-white text-red-400 border-2 border-red-500/30 rounded-xl transition-all"
                >
                    Logout
                </button>
            </div>
          ) : (
            <>
              <Link href="/login" className="btn bg-transparent text-[#C89731] border-2 border-[#C89731] hover:bg-[#C89731] hover:text-white rounded-xl transition-all font-bold px-6">
                Login
              </Link>
              <Link href="/register" className="btn bg-[#C89731] text-white border-none hover:bg-[#b0842a] rounded-xl transition-all font-bold px-6 shadow-lg shadow-amber-900/20">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;