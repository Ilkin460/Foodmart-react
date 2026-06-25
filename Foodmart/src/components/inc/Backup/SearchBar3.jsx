import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useProducts } from '../context/ProductContext';

const SearchBar = () => {
  const { searchQuery, setSearchQuery, filteredProducts } = useProducts();

  return (
    <div className="hidden min-[993px]:flex grow max-w-162.5 items-center bg-[#F5F5F5] rounded-full px-5 py-2.5 mx-8 relative">
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
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <button
        className="text-gray-500 hover:text-gray-700 ml-2"
        onClick={() => setSearchQuery('')}
      >
        {searchQuery ? (
          <span className="text-sm font-bold">✕</span>
        ) : (
          <FiSearch className="w-5 h-5" />
        )}
      </button>

      {/* Dropdown nəticələr */}
      {searchQuery && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden max-h-80 overflow-y-auto">
          {filteredProducts.length === 0 ? (
            <div className="px-5 py-4 text-sm text-gray-400 text-center">
              Nəticə tapılmadı
            </div>
          ) : (
            filteredProducts.map(product => (
              <div
                key={product.id}
                className="flex items-center gap-3 px-5 py-3 hover:bg-amber-50 cursor-pointer transition-colors"
                onClick={() => setSearchQuery('')}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-10 h-10 object-contain rounded-lg bg-gray-50 p-1"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-800">{product.name}</p>
                  <p className="text-xs text-gray-400">{product.cat}</p>
                </div>
                <span className="ml-auto text-sm font-bold text-gray-900">{product.price}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
