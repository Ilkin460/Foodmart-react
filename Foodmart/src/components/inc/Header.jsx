import React from 'react';
import logo from '../../assets/img/gallery/logo.png';
import { FiSearch, FiHeart } from 'react-icons/fi';
import { IoPersonOutline } from 'react-icons/io5';
import { IoMdArrowDropdown } from 'react-icons/io';

const Header = () => {
  return (
    <header className="w-full bg-white font-sans sticky top-0 z-50 shadow-sm">
      
      <div className="max-w-360 mx-auto px-6 md:px-12 py-5 flex items-center justify-between gap-4">
        
        <div className="shrink-0">
          <img src={logo} alt="Foodmart Logo" className="h-5 md:h-11 w-auto object-contain" />
        </div>

        <div className="hidden min-[993px]:flex grow max-w-162.5 items-center bg-[#F5F5F5] rounded-full px-5 py-2.5 mx-8">
          <select className="bg-transparent text-sm text-gray-600 outline-none pr-3 border-r border-gray-300 mr-3 cursor-pointer">
            <option>All Categories</option>
            <option>Groceries</option>
            <option>Drinks</option>
            <option>Chocolates</option>
          </select>
          <input 
            type="text" 
            placeholder="Search for more than 20,000 products" 
            className="bg-transparent text-sm w-full outline-none text-gray-700 placeholder-gray-400"
          />
          <button className="text-gray-500 hover:text-gray-700 ml-2">
            <FiSearch className="w-3 h-3 md:w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <button className="p-2.5 bg-[#F5F5F5] text-gray-700 rounded-full hover:bg-gray-200 min-[993px]:hidden">
            <FiSearch className="w-3 h-3 md:w-5 h-5" />
          </button>

          <div className="text-right hidden lg:block mr-2">
            <p className="text-[11px] text-gray-400 font-medium leading-tight">For Support?</p>
            <p className="text-sm font-bold text-gray-800 leading-tight">+980-34984089</p>
          </div>

          <button className="p-2.5 bg-[#F5F5F5] text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
            <IoPersonOutline className="w-3 h-3 md:w-5 h-5" />
          </button>

          <button className="p-2.5 bg-[#F5F5F5] text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
            <FiHeart className="w-3 h-3 md:w-5 h-5" />
          </button>

          <div className="text-left pl-2 cursor-pointer group select-none">
            <div className="flex items-center gap-0.5 text-gray-500">
              <span className="text-xs font-medium">Your Cart</span>
              <IoMdArrowDropdown className="w-4 h-4 text-gray-600 group-hover:translate-y-0.5 transition-transform" />
            </div>
            <p className="text-base font-black text-gray-900 tracking-tight">$1290.00</p>
          </div>
        </div>

      </div>

      <hr className="border-gray-100" />

      <div className="max-w-360 mx-auto px-6 md:px-12 py-4 flex items-center gap-8 text-[14px] font-medium text-gray-500">
        
        <div className="relative flex items-center text-gray-900 font-bold">
          <select className="bg-transparent border-0 outline-none pr-5 cursor-pointer appearance-none font-bold text-gray-900 hover:text-amber-500 transition-colors">
            <option>Shop by Departments</option>
            <option>Groceries</option>
            <option>Drinks</option>
            <option>Chocolates</option>
          </select>
          <IoMdArrowDropdown className="w-4 h-4 text-gray-800 absolute right-0 pointer-events-none" />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="hover:text-amber-500 transition-colors">Women</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Men</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Kids</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Accessories</a>
          
          <div className="relative group cursor-pointer py-1">
            <div className="flex items-center gap-0.5 hover:text-amber-500 transition-colors">
              <span>Pages</span>
              <IoMdArrowDropdown className="w-3.5 h-3.5 text-gray-500 group-hover:text-amber-500" />
            </div>

            <ul className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white border border-gray-100 rounded-md shadow-lg py-2 w-48 z-50">
              <li><a href="index.html" className="block px-4 py-2 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors text-sm">About Us</a></li>
              <li><a href="index.html" className="block px-4 py-2 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors text-sm">Shop</a></li>
              <li><a href="index.html" className="block px-4 py-2 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors text-sm">Single Product</a></li>
              <li><a href="index.html" className="block px-4 py-2 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors text-sm">Cart</a></li>
              <li><a href="index.html" className="block px-4 py-2 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors text-sm">Checkout</a></li>
              <li><a href="index.html" className="block px-4 py-2 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors text-sm">Blog</a></li>
              <li><a href="index.html" className="block px-4 py-2 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors text-sm">Single Post</a></li>
              <li><a href="index.html" className="block px-4 py-2 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors text-sm">Styles</a></li>
              <li><a href="index.html" className="block px-4 py-2 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors text-sm">Contact</a></li>
              <li><a href="index.html" className="block px-4 py-2 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors text-sm">Thank You</a></li>
              <li><a href="index.html" className="block px-4 py-2 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors text-sm">My Account</a></li>
              <li><a href="index.html" className="block px-4 py-2 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors text-sm">404 Error</a></li>
            </ul>
          </div>

          <a href="#" className="hover:text-amber-500 transition-colors">Brand</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Sale</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Blog</a>
        </nav>

      </div>
    </header>
  );
};

export default Header;