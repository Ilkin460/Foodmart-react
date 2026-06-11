import React, { useState } from 'react';
import slide1 from '../../assets/img/gallery/slide-1.jpg' 
import bannerimage1 from '../../assets/img/gallery/banner-image-1.jpg' 
import bannerimage2 from '../../assets/img/gallery/banner-image-2.jpg' 


export default function Main() {
  // Kateqoriya məlumatları (Ikonlar public/images/ qovluğunda olmalıdır)
  const categories = [
    { name: 'Fruits & Veggies', icon: '/images/icon-vegetables-broccoli.png', count: '12 Items', bg: 'bg-green-50/70 hover:bg-green-50' },
    { name: 'Breads & Bakery', icon: '/images/icon-bread-baguette.png', count: '8 Items', bg: 'bg-orange-50/70 hover:bg-orange-50' },
    { name: 'Wine & Drinks', icon: '/images/icon-wine-glass-bottle.png', count: '24 Items', bg: 'bg-red-50/70 hover:bg-red-50' },
    { name: 'Soft Drinks', icon: '/images/icon-soft-drinks-bottle.png', count: '15 Items', bg: 'bg-blue-50/70 hover:bg-blue-50' },
    { name: 'Animal Products', icon: '/images/icon-animal-products-drumsticks.png', count: '19 Items', bg: 'bg-purple-50/70 hover:bg-purple-50' },
    { name: 'Bakery Herbs', icon: '/images/icon-bread-herb-flour.png', count: '10 Items', bg: 'bg-yellow-50/70 hover:bg-yellow-50' },
  ];

  // Məhsul siyahısı
  const initialProducts = [
    { id: 1, name: 'Sun-Dried Tomato Ketchup', img: '/images/thumb-tomatoketchup.png', price: 4.50, oldPrice: 5.90, rating: 4.5, category: 'Groceries' },
    { id: 2, name: 'Fresh Organic Tomatoes', img: '/images/thumb-tomatoes.png', price: 2.20, oldPrice: null, rating: 5.0, category: 'Fruits & Veggies' },
    { id: 3, name: 'Fresh Organic Avocado', img: '/images/thumb-avocado.png', price: 3.80, oldPrice: 4.20, rating: 4.0, category: 'Fruits & Veggies' },
    { id: 4, name: 'Organic Whole Milk 1L', img: '/images/thumb-milk.png', price: 1.90, oldPrice: null, rating: 4.8, category: 'Dairy & Eggs' },
  ];

  // Hər məhsul üçün sayğac state-i
  const [quantities, setQuantities] = useState({ 1: 1, 2: 1, 3: 1, 4: 1 });

  const updateQuantity = (id, amount) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + amount)
    }));
  };

  return (
    <main className="w-full bg-white pb-16">
      
      {/* 1. Hero / Slider Section (Vendor CSS-dəki yarallax və yarpaq naxışları əlavə olundu) */}
      <section 
        className="relative bg-[#f9f9f9] overflow-hidden py-12 md:py-20 lg:py-24 transition-all duration-500" 
        style={{ 
          backgroundImage: "url('/images/bg-leaves-pattern.png')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Arxa plan nöqtəli naxış effekti */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('/images/bg-dot-pattern.png')" }}></div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-8 relative z-10">
          <div>
            <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              ⚡ 100% Organic Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mt-4 leading-tight tracking-tight">
              Fresh Grocery <br />
              <span className="text-green-600">Delivered Right</span> <br />
              To Your Door
            </h1>
            <p className="text-gray-600 mt-4 text-base md:text-lg max-w-md leading-relaxed">
              We offer premium quality organic foods and fresh ingredients for your daily healthy lifestyle.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3.5 rounded-lg shadow-lg shadow-green-600/20 transition-all active:scale-95 flex items-center gap-2">
                Shop Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
          
          {/* Görsel Sahəsi (vendor.css-dəki zoom/floating effekti bura tətbiq olundu) */}
          <div className="relative flex justify-center animate-bounce-slow">
            <div className="absolute inset-0 bg-green-200/30 blur-3xl rounded-full scale-75 -z-10"></div>
            <img 
              src={slide1} 
              alt="Fresh Fruits Basket" 
              className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl border-4 border-white object-cover transform hover:scale-102 transition duration-500" 
            />
          </div>
        </div>
      </section>

      {/* 2. Kategoriya Bölməsi */}
      <section className="max-w-7xl mx-auto px-4 pt-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Explore Categories</h2>
          <p className="text-gray-500 text-sm mt-1">Check out our high-quality handpicked categories</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className={`${cat.bg} p-6 rounded-2xl text-center border border-gray-100/50 shadow-sm transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:shadow-md group`}
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition duration-300">
                <img src={cat.icon} alt={cat.name} className="w-10 h-10 object-contain" />
              </div>
              <h3 className="font-bold text-gray-800 mt-4 text-sm tracking-tight">{cat.name}</h3>
              <span className="text-xs text-gray-400 mt-1 block font-medium">{cat.count}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. İkili Reklam Bannerləri */}
      <section className="max-w-7xl mx-auto px-4 pt-16 grid md:grid-cols-2 gap-6">
        {/* Sol Banner */}
        <div className="relative bg-amber-50 rounded-3xl overflow-hidden p-8 md:p-12 flex items-center justify-between border border-amber-100/70 group">
          <div className="max-w-[65%] z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200/50 px-2.5 py-1 rounded-md">Flat 20% Off</span>
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mt-3 leading-tight">Freshly Baked Artisan Breads</h3>
            <a href="#" className="text-sm font-bold text-green-600 hover:text-green-700 transition-colors mt-4 inline-flex items-center gap-1 group-hover:gap-2">
              Shop Collection <span className="transition-all">→</span>
            </a>
          </div>
          <img src={bannerimage1} alt="Breads" className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-full shadow-lg border-2 border-white transform group-hover:scale-105 transition duration-500" />
        </div>

        {/* Sağ Banner */}
        <div className="relative bg-green-50 rounded-3xl overflow-hidden p-8 md:p-12 flex items-center justify-between border border-green-100/70 group">
          <div className="max-w-[65%] z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-green-800 bg-green-200/50 px-2.5 py-1 rounded-md">Organic Only</span>
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mt-3 leading-tight">Fresh Organic Fruits & Juices</h3>
            <a href="#" className="text-sm font-bold text-green-600 hover:text-green-700 transition-colors mt-4 inline-flex items-center gap-1 group-hover:gap-2">
              Shop Collection <span className="transition-all">→</span>
            </a>
          </div>
          <img src={bannerimage2} alt="Fruits" className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-full shadow-lg border-2 border-white transform group-hover:scale-105 transition duration-500" />
        </div>
      </section>

      {/* 4. Öne Çıkan Məhsullar (Featured Products) */}
      <section className="max-w-7xl mx-auto px-4 pt-16">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-8 gap-4 border-b border-gray-100 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Featured Products</h2>
            <p className="text-gray-500 text-sm mt-1">Top sale products of this week</p>
          </div>
          <div className="flex gap-2 text-sm font-semibold text-gray-500 overflow-x-auto scrollbar-none">
            <button className="text-green-600 border-b-2 border-green-600 px-3 pb-2 whitespace-nowrap">All</button>
            <button className="hover:text-gray-900 transition px-3 pb-2 whitespace-nowrap">Fruits & Veggies</button>
            <button className="hover:text-gray-900 transition px-3 pb-2 whitespace-nowrap">Dairy & Eggs</button>
            <button className="hover:text-gray-900 transition px-3 pb-2 whitespace-nowrap">Bakery</button>
          </div>
        </div>

        {/* Məhsul Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {initialProducts.map((product) => (
            <div key={product.id} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between">
              {product.oldPrice && (
                <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md z-10">SAVE</span>
              )}
              
              <div>
                {/* Məhsul Şəkli */}
                <div className="h-44 w-full bg-[#fcfcfc] rounded-xl flex items-center justify-center overflow-hidden p-4 mb-4 group-hover:bg-gray-50 transition">
                  <img src={product.img} alt={product.name} className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition duration-300" />
                </div>
                
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">{product.category}</span>
                <h3 className="font-bold text-gray-800 mt-1 h-12 line-clamp-2 hover:text-green-600 cursor-pointer transition-colors text-sm md:text-base">
                  {product.name}
                </h3>
                
                {/* Reytinq */}
                <div className="flex items-center gap-1 mt-2 text-amber-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <span className="text-xs font-bold text-gray-700">{product.rating}</span>
                </div>
              </div>

              {/* Fiyat, Sayğac və Sifariş düyməsi */}
              <div className="mt-4">
                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  <div>
                    <span className="text-lg font-black text-gray-900">${product.price.toFixed(2)}</span>
                    {product.oldPrice && (
                      <span className="text-xs text-gray-400 line-through ml-2 font-medium">${product.oldPrice.toFixed(2)}</span>
                    )}
                  </div>
                  
                  {/* Sayğac (Quantity Input) */}
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50 shadow-inner">
                    <button onClick={() => updateQuantity(product.id, -1)} className="px-2 py-1 hover:bg-gray-200/70 text-gray-500 font-bold transition">
                      -
                    </button>
                    <span className="px-2 text-xs font-bold text-gray-800 w-5 text-center bg-transparent select-none">
                      {quantities[product.id] || 1}
                    </span>
                    <button onClick={() => updateQuantity(product.id, 1)} className="px-2 py-1 hover:bg-gray-200/70 text-gray-500 font-bold transition">
                      +
                    </button>
                  </div>
                </div>

                <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-98 shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 110 4 2 2 0 010-4z"></path></svg>
                  Add to Cart
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

    </main>
  );
}