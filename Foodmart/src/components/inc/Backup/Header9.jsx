import React, { useState, useContext } from 'react';
import logo from '../../assets/img/gallery/logo.png';
import { FiSearch, FiHeart } from 'react-icons/fi';
import { IoPersonOutline } from 'react-icons/io5';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BASKET } from '../context/BasketContext';
import { useProducts } from '../context/ProductContext';
import SearchBar from './SearchBar';

const Header = () => {
  const [opensebet, setOpensebet] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const { sebet, increase, decrease, removeItem, totalPrice } = useContext(BASKET);
  const { searchQuery, setSearchQuery, filteredProducts } = useProducts();

  const totalQty = sebet.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="w-full bg-white font-sans sticky top-0 z-50 shadow-sm">
      
      <div className="max-w-360 mx-auto px-6 md:px-12 py-5 flex items-center justify-between gap-4">
        
        <div className="shrink-0">
          <img src={logo} alt="Foodmart Logo" className="h-5 md:h-11 w-auto object-contain" />
        </div>

        <SearchBar />

        <div className="flex items-center gap-2 md:gap-6">
          {/* Mobile search button */}
          <button
            className="p-2.5 bg-[#F5F5F5] text-gray-700 rounded-full hover:bg-gray-200 min-[993px]:hidden"
            onClick={() => setMobileSearch(v => !v)}
          >
            <FiSearch className="w-4 h-4" />
          </button>

          <div className="text-right hidden lg:block mr-2">
            <p className="text-[11px] text-gray-400 font-medium leading-tight">For Support?</p>
            <p className="text-sm font-bold text-gray-800 leading-tight">+980-34984089</p>
          </div>

          <button className="p-2.5 bg-[#F5F5F5] text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
            <IoPersonOutline className="w-4 h-4 md:w-5 h-5" />
          </button>

          <button className="p-2.5 bg-[#F5F5F5] text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
            <FiHeart className="w-4 h-4 md:w-5 h-5" />
          </button>

          <div 
            className="text-left pl-2 cursor-pointer group select-none relative" 
            onClick={() => setOpensebet(true)}
          >
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-1 w-5 h-5 bg-amber-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {totalQty}
              </span>
            )}
            <div className="flex items-center gap-0.5 text-gray-500">
              <span className="text-xs font-medium">Your Cart</span>
              <IoMdArrowDropdown className="w-4 h-4 text-gray-600 group-hover:translate-y-0.5 transition-transform" />
            </div>
            <p className="text-base font-black text-gray-900 tracking-tight">
              ${totalPrice.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* Mobil search panel */}
      {mobileSearch && (
        <div className="min-[993px]:hidden px-4 pb-3 relative">
          <div className="flex items-center bg-[#F5F5F5] rounded-full px-4 py-2.5">
            <input
              type="text"
              placeholder="Məhsul axtar..."
              autoFocus
              className="bg-transparent text-sm w-full outline-none text-gray-700 placeholder-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="text-gray-400 hover:text-gray-700 ml-2"
              onClick={() => { setSearchQuery(''); setMobileSearch(false); }}
            >
              {searchQuery ? (
                <span className="text-sm font-bold">✕</span>
              ) : (
                <FiSearch className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Mobil dropdown nəticələr */}
          {searchQuery && (
            <div className="absolute left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 max-h-72 overflow-y-auto">
              {filteredProducts.length === 0 ? (
                <div className="px-5 py-4 text-sm text-gray-400 text-center">
                  Nəticə tapılmadı
                </div>
              ) : (
                filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-amber-50 cursor-pointer transition-colors"
                    onClick={() => { setSearchQuery(''); setMobileSearch(false); }}
                  >
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-10 h-10 object-contain rounded-lg bg-gray-50 p-1 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">{product.name}</p>
                      <p className="text-xs text-gray-400">{product.cat}</p>
                    </div>
                    <span className="text-sm font-bold text-gray-900 shrink-0">{product.price}</span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      )}

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
              <li><a href="#" className="block px-4 py-2 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors text-sm">Shop</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors text-sm">Cart</a></li>
              <li><a href="#" className="block px-4 py-2 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          <a href="#" className="hover:text-amber-500 transition-colors">Brand</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Sale</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Blog</a>
        </nav>
      </div>

      {opensebet && (
        <>
          <div 
            className="fixed inset-0 bg-opacity-40 z-[100]" 
            onClick={() => setOpensebet(false)}
          />
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[101] flex flex-col transition-transform duration-300">
            
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">
                Your Cart
              </h2>
              <button 
                onClick={() => setOpensebet(false)} 
                className="text-gray-400 hover:text-black font-bold text-2xl leading-none"
              >
                &times;
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {sebet.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 gap-3">
                  <span className="text-5xl">🛒</span>
                  <p className="font-medium">Səbətiniz boşdur</p>
                  <p className="text-sm">Məhsul əlavə edin</p>
                </div>
              ) : (
                sebet.map(item => {
                  const unitPrice = parseFloat(String(item.price).replace('$', '')) || 0
                  return (
                    <div key={item.id} className="flex flex-col gap-2 p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-start gap-3">
                        {item.img && (
                          <img src={item.img} alt={item.name} className="w-14 h-14 object-contain rounded-lg shrink-0 bg-white p-1" />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-gray-900 leading-snug break-words">{item.name}</p>
                          <p className="text-xs text-gray-400 mt-0.5">${unitPrice.toFixed(2)}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-sm font-extrabold text-gray-900">${(unitPrice * item.qty).toFixed(2)}</p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-[13px] text-gray-300 hover:text-red-400 transition-colors mt-0.5"
                          >
                            Sil
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 pl-[68px]">
                        <button
                          onClick={() => decrease(item.id)}
                          className="w-7 h-7 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-red-50 hover:border-red-300 hover:text-red-500 transition-colors flex items-center justify-center font-bold text-sm"
                        >
                          −
                        </button>
                        <span className="w-5 text-center text-sm font-bold text-gray-900">{item.qty}</span>
                        <button
                          onClick={() => increase(item.id)}
                          className="w-7 h-7 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-green-50 hover:border-green-300 hover:text-green-600 transition-colors flex items-center justify-center font-bold text-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )
                })
              )}
            </div>

            {sebet.length > 0 && (
              <div className="px-6 py-5 border-t border-gray-100 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">Cəmi</span>
                  <span className="text-xl font-extrabold text-gray-900">${totalPrice.toFixed(2)}</span>
                </div>
                <button className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-bold hover:bg-amber-500 transition-colors duration-200">
                  Ödəməyə keç
                </button>
                <button
                  onClick={() => setOpensebet(false)}
                  className="w-full text-sm text-gray-400 hover:text-gray-700 text-center transition-colors"
                >
                  Alışverişə davam et
                </button>
              </div>
            )}
          </div>
        </>
      )}
      
    </header>
  );
};

export default Header;
