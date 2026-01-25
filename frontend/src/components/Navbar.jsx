import React, { useEffect, useState } from 'react';
import { Menu, X, BookOpen, User, LayoutDashboard,Blocks, Home, LogIn } from 'lucide-react';
import logo from '../assets/logo-ve-rm.png'
import { NavLink } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../features/UserSlice';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()
  const {user , isLoggedin } = useSelector((state) => state.user)
  
  useEffect(() => {
    dispatch(fetchUser('tharindudkodippili@gmail.com'))
    console.log(user);
    
  },[])

  // Navigation Links array to keep code clean
  const navLinks = [
    { name: 'Home', href: '/', icon: <Home size={18} /> },
    { name: 'Profile', href: '/profile', icon: <User size={18} /> },
    { name: 'Admin', href: '/admin', icon: <LayoutDashboard size={18} /> },
  ];

  return (
    <nav className="bg-[#0F172A] text-[#F8FAFC] border-b border-[#1E293B] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LEFT: Logo Section */}
          <div className="shrink-0 flex items-center">
            <img 
              className="h-10 w-auto cursor-pointer" 
              src={logo} 
              alt="Libraria Logo" 
            />
          </div>

          {/* RIGHT: Desktop Menu (Hidden on Mobile) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium hover:text-[#38BDF8] hover:bg-[#1E293B] transition-all"
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              ))}
              {isLoggedin ? <span className="ml-4 bg-[#38BDF8] text-[#0F172A] px-4 py-2 rounded-md text-sm font-bold hover:bg-[#7dd3fc] transition-colors">Hello {user.fName}</span> : 
              <button className="ml-4 bg-[#38BDF8] text-[#0F172A] px-4 py-2 rounded-md text-sm font-bold hover:bg-[#7dd3fc] transition-colors cursor-pointer">
                Login 
              </button>}
              
            </div>
          </div>

          {/* MOBILE BUTTON (Visible on Small Screens) */}
          <div className="md:hidden flex items-center">
          {isLoggedin && <span className="ml-4 bg-[#38BDF8] text-[#0F172A] px-4 py-2 rounded-md text-sm font-bold hover:bg-[#7dd3fc] transition-colors">Hello {user.fName}</span>}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#94A3B8] hover:text-white hover:bg-[#1E293B] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-[#1E293B] border-b border-[#334155] animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium hover:bg-[#334155] text-[#F8FAFC]"
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}
            {/* {isLoggedin ? <span className="ml-4 bg-[#38BDF8] text-[#0F172A] px-4 py-2 rounded-md text-sm font-bold hover:bg-[#7dd3fc] transition-colors">Hello {user.fName}</span> :
            <button className="w-full mt-2 bg-[#38BDF8] text-[#0F172A] px-4 py-3 rounded-md font-bold text-center">
              Login
            </button>
} */}
          {!isLoggedin &&(
            <button className="w-full mt-2 bg-[#38BDF8] text-[#0F172A] px-4 py-3 rounded-md font-bold text-center cursor-pointer">
              Login
            </button>
          )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;