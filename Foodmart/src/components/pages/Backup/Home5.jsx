import React, { useState, useEffect,useContext } from 'react';
import { Truck, ShieldCheck, BadgeCheck, Tag, Gift } from 'lucide-react';
import { BASKET } from '../context/BasketContext';

//Hero
import bgPattern from '../../assets/img/gallery/background-pattern.jpg';

// Hero Slider
import slideImg1 from '../../assets/img/gallery/product-thumb-1.png'; 
import slideImg2 from '../../assets/img/gallery/product-thumb-2.png'; 

// Hero right Banner
import adImage1 from '../../assets/img/gallery/ad-image-1.png'; 
import adImage2 from '../../assets/img/gallery/ad-image-2.png';

// Category
import iconBroccoli from '../../assets/img/gallery/icon-vegetables-broccoli.png';
import iconBaguette from '../../assets/img/gallery/icon-bread-baguette.png';
import iconSoftDrink from '../../assets/img/gallery/icon-soft-drinks-bottle.png';
import iconWine from '../../assets/img/gallery/icon-wine-glass-bottle.png';
import iconDrumstick from '../../assets/img/gallery/icon-animal-products-drumsticks.png';
import iconFlour from '../../assets/img/gallery/icon-bread-herb-flour.png';

// Brands
import brandLogo1 from '../../assets/img/gallery/product-thumb-11.jpg';
import brandLogo2 from '../../assets/img/gallery/product-thumb-12.jpg';
import brandLogo3 from '../../assets/img/gallery/product-thumb-13.jpg';
import brandLogo4 from '../../assets/img/gallery/product-thumb-14.jpg';

// Ürün verileri ProductContext'ten gelir
import { useProducts } from '../context/ProductContext';

// AD
import adChocolate from '../../assets/img/gallery/ad-image-3.png';
import adMuffins from '../../assets/img/gallery/ad-image-4.png';

// Best Selling Products
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaHeart } from "react-icons/fa"; 
import { AiOutlineHeart } from "react-icons/ai"; 

//Recent blog
import post1 from '../../assets/img/gallery/post-thumb-1.jpg'; 
import post2 from '../../assets/img/gallery/post-thumb-2.jpg';
import post3 from '../..//assets/img/gallery/post-thumb-3.jpg';

//Download
import phoneImg from '../../assets/img/gallery/phone.png';
import appStoreImg from '../../assets/img/gallery/app-store.jpg';
import googlePlayImg from '../../assets/img/gallery/google-play.jpg';

const Home = () => {
  const { addBasket, increase, decrease, sebet } = useContext(BASKET)
  const { products } = useProducts()

  // Bir ürünün sepetteki miktarını döndürür
  const getQty = (id) => sebet.find(i => i.id === id)?.qty ?? 0

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      subtitle: "100% Natural",
      title: <>Fresh Smoothie <br /> & Summer Juice</>,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.",
      img: slideImg1,
      bgColor: "bg-[#E3F2F9]"
    },
    {
      id: 1,
      subtitle: "Pure Organic",
      title: <>Wild Berry Blend <br /> & Iced Shakes</>,
      desc: "Experience the ultimate refreshing taste with our freshly picked organic berries.",
      img: slideImg2,
      bgColor: "bg-[#FCEADE]"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);
  
  const categories = [
    { id: 1, name: "Vegetables", icon: iconBroccoli },
    { id: 2, name: "Bakery", icon: iconBaguette },
    { id: 3, name: "Soft Drinks", icon: iconSoftDrink },
    { id: 4, name: "Beverages", icon: iconWine },
    { id: 5, name: "Meat Products", icon: iconDrumstick },
    { id: 6, name: "Flour & Bakery", icon: iconFlour },
    { id: 7, name: "Vegetables", icon: iconBroccoli },
    { id: 8, name: "Bakery", icon: iconBaguette },
    { id: 9, name: "Soft Drinks", icon: iconSoftDrink },
    { id: 10, name: "Beverages", icon: iconWine },
    { id: 11, name: "Meat Products", icon: iconDrumstick },
    { id: 12, name: "Flour & Bakery", icon: iconFlour }
  ];

  const brands = [
    { id: 1, name: "Fresh Farm", items: "12", logo: brandLogo1 },
    { id: 2, name: "Bio Organic", items: "8", logo: brandLogo2 },
    { id: 3, name: "Dairy Best", items: "23", logo: brandLogo3 },
    { id: 4, name: "Green Valley", items: "15", logo: brandLogo4 },
    { id: 5, name: "Fresh Farm", items: "12", logo: brandLogo1 },
    { id: 6, name: "Bio Organic", items: "8", logo: brandLogo2 },
    { id: 7, name: "Dairy Best", items: "23", logo: brandLogo3 },
    { id: 8, name: "Green Valley", items: "15", logo: brandLogo4 },
  ];

  const [activeTab, setActiveTab] = useState('ALL');

  // Ürünler ProductContext'ten geliyor
  const allProducts     = products;
  const popularProducts = products;
  const justArrived     = products;

  const filteredProducts = activeTab === 'ALL'
    ? allProducts
    : allProducts.filter(p => p.cat === activeTab);

    const blogPosts = [
      { id: 1, date: "22 AUG 2021", category: "TIPS & TRICKS", title: "Top 10 casual look ideas to dress up your kids", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nibh et mauris tempor suscipit condimentum sed ipsum. In hac habitasse platea dictumst. Mauris eget posuere sapien. Cras maximus tristique pharetra. Vestibulum a tellus id enim porttitor tempus. Praesent accumsan congue ornare. In molestie velit ex, eu hendrerit magna imperdiet vitae. ", image: post1 },
      { id: 2, date: "25 AUG 2021", category: "TRENDING", title: "Latest trends of wearing street wears supremely", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nibh et mauris tempor suscipit condimentum sed ipsum. In hac habitasse platea dictumst. Mauris eget posuere sapien. Cras maximus tristique pharetra. Vestibulum a tellus id enim porttitor tempus. Praesent accumsan congue ornare. In molestie velit ex, eu hendrerit magna imperdiet vitae.", image: post2 },
      { id: 3, date: "28 AUG 2021", category: "INSPIRATION", title: "10 Different Types of comfortable clothes ideas for women", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales nibh et mauris tempor suscipit condimentum sed ipsum. In hac habitasse platea dictumst. Mauris eget posuere sapien. Cras maximus tristique pharetra. Vestibulum a tellus id enim porttitor tempus. Praesent accumsan congue ornare. In molestie velit ex, eu hendrerit magna imperdiet vitae.", image: post3 }
    ];

    const searchTerms = [
      "Blue diamon almonds", "Angie's Boomchickapop Corn", "Salty kettle Corn", 
      "Chobani Greek Yogurt", "Sweet Vanilla Yogurt", "Foster Farms Takeout Crispy wings",
      "Warrior Blend Organic", "Chao Cheese Creamy", "Chicken meatballs","Blue diamon almonds", "Angie's Boomchickapop Corn", "Salty kettle Corn", 
      "Chobani Greek Yogurt", "Sweet Vanilla Yogurt", "Foster Farms Takeout Crispy wings",
      "Warrior Blend Organic", "Chao Cheese Creamy", "Chicken meatballs"
    ];

    const features = [
      { icon: Truck, title: "Free delivery", desc: "Lorem ipsum dolor sit amet, consectetur adipi elit." },
      { icon: ShieldCheck, title: "100% secure payment", desc: "Lorem ipsum dolor sit amet, consectetur adipi elit." },
      { icon: BadgeCheck, title: "Quality guarantee", desc: "Lorem ipsum dolor sit amet, consectetur adipi elit." },
      { icon: Tag, title: "Guaranteed savings", desc: "Lorem ipsum dolor sit amet, consectetur adipi elit." },
      { icon: Gift, title: "Daily offers", desc: "Lorem ipsum dolor sit amet, consectetur adipi elit." },
    ];

  return (
    <main className="w-full">
      
      {/* ================= HERO SECTION START ================= */}
      <section 
        className="w-full bg-repeat bg-center py-6 md:py-10"
        style={{ backgroundImage: `url(${bgPattern})`, backgroundSize: 'auto' }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className={`lg:col-span-2 relative ${slides[currentSlide].bgColor} rounded-3xl overflow-hidden p-8 md:p-16 flex flex-col justify-between min-h-[460px] md:min-h-[500px] transition-all duration-700 ease-in-out`}>
            <div className="absolute right-0 md:right-4 bottom-4 h-[80%] md:h-[85%] w-[45%] flex items-end justify-end pointer-events-none z-0">
              <img src={slides[currentSlide].img} alt="Fresh Smoothie" className="h-full w-auto object-contain object-bottom" />
            </div>
            <div className="max-w-[55%] relative z-10 flex flex-col justify-center h-full">
              <span className="text-amber-500 font-sans text-lg md:text-xl font-medium mb-2 md:mb-3 block">{slides[currentSlide].subtitle}</span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 md:mb-5">{slides[currentSlide].title}</h1>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 max-w-[340px]">{slides[currentSlide].desc}</p>
              <div>
                <button className="border-2 border-gray-900 text-gray-900 text-xs font-bold uppercase tracking-wider px-6 py-3 rounded hover:bg-gray-900 hover:text-white transition-colors duration-300">Shop Collection</button>
              </div>
            </div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-10">
              {slides.map((slide, index) => (
                <span key={slide.id} onClick={() => setCurrentSlide(index)} className={`h-2.5 rounded-full cursor-pointer transition-all duration-300 ${currentSlide === index ? 'w-6 bg-amber-500' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}></span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative bg-[#E8F3E6] rounded-3xl p-8 flex flex-col justify-between h-[218px] md:h-[238px] overflow-hidden group">
              <div className="absolute right-0 bottom-0 h-[90%] w-[50%] flex items-end justify-end pointer-events-none z-0">
                <img src={adImage1} alt="Fruits" className="h-full w-auto object-contain object-bottom group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="max-w-[55%] relative z-10 flex flex-col justify-center h-full">
                <p className="text-xl md:text-2xl font-medium text-gray-800 mb-0.5">20% Off</p>
                <div className="w-8 border-b border-gray-400 my-1"></div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Sale</p>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight mb-2">Fruits & <br /> Vegetables</h3>
                <a href="#" className="text-xs font-bold text-gray-800 hover:text-amber-500 transition-colors flex items-center gap-1">Shop Collection <span className="text-sm">→</span></a>
              </div>
            </div>
            <div className="relative bg-[#F5EBE6] rounded-3xl p-8 flex flex-col justify-between h-[218px] md:h-[238px] overflow-hidden group">
              <div className="absolute right-0 bottom-0 h-[90%] w-[50%] flex items-end justify-end pointer-events-none z-0">
                <img src={adImage2} alt="Baked" className="h-full w-auto object-contain object-bottom group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="max-w-[55%] relative z-10 flex flex-col justify-center h-full">
                <p className="text-xl md:text-2xl font-medium text-gray-800 mb-0.5">15% Off</p>
                <div className="w-8 border-b border-gray-400 my-1"></div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Sale</p>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight mb-2">Baked Products</h3>
                <a href="#" className="text-xs font-bold text-gray-800 hover:text-amber-500 transition-colors flex items-center gap-1">Shop Collection <span className="text-sm">→</span></a>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* ================= HERO SECTION END ================= */}


      {/* ================= CATEGORIES SECTION START ================= */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-6 overflow-hidden">
          
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Category</h2>
            
            <div className="flex items-center gap-4">
              <button className="prev-btn-cat w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200 hover:bg-gray-900 hover:text-white transition-all">←</button>
              <button className="next-btn-cat w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200 hover:bg-gray-900 hover:text-white transition-all">→</button>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={2}
            navigation={{ prevEl: '.prev-btn-cat', nextEl: '.next-btn-cat' }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            style={{ overflow: 'visible' }}
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id}>
              <div 
                className={`flex flex-col items-center justify-center p-6 rounded-2xl ${cat.bgColor || 'bg-amber-50'} cursor-pointer border border-transparent transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:border-amber-500`}
              >
                <img 
                  src={cat.icon} 
                  alt={cat.name} 
                  className="w-9 h-9 mb-4 transition-transform duration-300 group-hover:scale-110" 
                />
                <span className="text-sm font-bold text-gray-900 transition-colors group-hover:text-amber-600">
                  {cat.name}
                </span>
              </div>
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* ================= CATEGORIES SECTION END ================= */}

      {/* ================= NEWLY ARRIVED BRANDS SECTION START ================= */}
      <section className="w-full py-16 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 overflow-hidden">
          
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Newly Arrived Brands</h2>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-600 font-bold hover:text-amber-500 transition-colors">View All Categories →</a>
              <div className="flex gap-2">
                <button className="prev-btn-brand w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all">←</button>
                <button className="next-btn-brand w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all">→</button>
              </div>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{ prevEl: '.prev-btn-brand', nextEl: '.next-btn-brand' }}
            className="!overflow-visible py-2"
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div className="flex items-center p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-2 group cursor-pointer hover:border-amber-200">
                  <div className="w-20 h-20 flex-shrink-0 mr-4">
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="w-full h-full object-contain rounded-lg" 
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-medium uppercase">{brand.name}</span>
                    <h4 className="text-sm font-bold text-gray-900 leading-tight mt-0.5">
                      {brand.items} Items Available
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* ================= NEWLY ARRIVED BRANDS SECTION END ================= */}

      {/* ================= TRENDING PRODUCTS ================= */}

      <section className="w-full py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <h2 className="text-3xl font-extrabold text-gray-900">Trending Products</h2>
          <div className="flex gap-6">
            {['ALL', 'FRUITS & VEGES', 'JUICES'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-bold pb-1 border-b-2 transition-colors ${activeTab === tab ? 'border-amber-500 text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-900'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="p-5 border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 group relative">
              
              <button className="absolute top-4 right-4 p-2 bg-gray-50 rounded-full hover:bg-red-100 transition-colors z-10">
                <AiOutlineHeart className="text-gray-400 w-5 h-5 hover:text-red-500 transition-colors" />
              </button>

              <img src={product.img} alt={product.name} className="w-full h-40 object-contain mb-4" />
              <h3 className="font-bold text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-2"> 1 UNIT <span className="text-amber-400 font-bold">★</span> 4.5</p>
              
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg">{product.price}</span>
                <div className="flex items-center gap-2">
                    <button onClick={() => decrease(product.id)} className="w-8 h-8 bg-gray-100 rounded-full hover:bg-red-100 hover:text-red-500 transition-colors">−</button>
                    <span className="w-5 text-center font-bold">{getQty(product.id)}</span>
                    <button onClick={() => increase(product.id)} className="w-8 h-8 bg-gray-100 rounded-full hover:bg-green-100 hover:text-green-600 transition-colors">+</button>
                </div>
              </div>
              <button onClick={() => addBasket(product.id, product.name, product.price)} className="w-full mt-4 text-sm font-bold text-gray-400 hover:text-amber-500">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="w-full py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="relative flex items-center bg-[#F9F0E8] rounded-3xl p-8 overflow-hidden">
          <div className="z-10 w-1/2">
            <span className="text-amber-500 font-bold tracking-wider">Upto 25% Off</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-3">Luxa Dark Chocolate</h2>
            <p className="text-gray-600 mb-6">Very tasty & creamy vanilla flavour creamy muffins.</p>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition">SHOW NOW</button>
          </div>
          <div className="absolute right-0 bottom-0 w-1/2 h-full flex items-end justify-end">
            <img src={adChocolate} alt="Dark Chocolate" className="h-full object-contain" />
          </div>
        </div>

        <div className="relative flex items-center bg-[#E8F4F9] rounded-3xl p-8 overflow-hidden">
          <div className="z-10 w-1/2">
            <span className="text-amber-500 font-bold tracking-wider">Upto 25% Off</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-3">Creamy Muffins</h2>
            <p className="text-gray-600 mb-6">Very tasty & creamy vanilla flavour creamy muffins.</p>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition">SHOW NOW</button>
          </div>
          <div className="absolute right-0 bottom-0 w-1/2 h-full flex items-end justify-end">
            <img src={adMuffins} alt="Creamy Muffins" className="h-full object-contain" />
          </div>
        </div>

      </div>
    </section>
    
    {/* ================= BEST SELLING PRODUCTS START ================= */}
    <section className="w-full py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Best selling products</h2>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-600 font-bold hover:text-amber-500">View All Categories →</a>
              <div className="flex gap-2">
                <button className="swiper-prev w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-500 hover:text-white transition">←</button>
                <button className="swiper-next w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-500 hover:text-white transition">→</button>
              </div>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl: '.swiper-prev', nextEl: '.swiper-next' }}
            spaceBetween={24}
            slidesPerView={2}
            breakpoints={{ 768: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }}
          >
            {allProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="p-5 border border-gray-100 rounded-2xl hover:shadow-lg transition">
                  <button className="absolute top-4 right-4 z-20 p-2 rounded-full bg-gray-50 hover:bg-red-100 transition-colors">
                    <FaHeart className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors" />
                  </button>
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-md">-15%</span>
                  <img src={product.img} alt={product.name} className="w-full h-40 object-contain my-4" />
                  <h3 className="font-bold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">1 UNIT <span className="text-amber-400 font-bold">★</span> 4.5</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">{product.price}</span>
                    <div className="flex items-center gap-2">
                      <button onClick={() => decrease(product.id)} className="w-8 h-8 bg-gray-100 rounded-full hover:bg-red-100 hover:text-red-500 transition-colors">−</button>
                      <span className="w-5 text-center font-bold">{getQty(product.id)}</span>
                      <button onClick={() => increase(product.id)} className="w-8 h-8 bg-gray-100 rounded-full hover:bg-green-100 hover:text-green-600 transition-colors">+</button>
                    </div>
                  </div>
                  <button onClick={() => addBasket(product.id, product.name, product.price)} className="w-full mt-4 text-sm font-bold text-gray-400 hover:text-amber-500">Add to Cart</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* ================= BEST SELLING PRODUCTS END ================= */}
      
      {/* ================= NEWSLETTER SECTION ================= */}
      <section className="w-full py-16 px-6">
        <div className="max-w-[1100px] mx-auto bg-blue-50 rounded-[40px] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Get <span className="text-amber-500">25% Discount</span> <br /> on your first <br /> purchase
            </h2>
            <p className="text-gray-500 mt-6 max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit massa posuere maecenas. At tellus ut nunc amet vel egestas.
            </p>
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            <div>
              <label className="text-sm text-gray-500 block mb-1">Name</label>
              <input type="text" placeholder="Name" className="w-full p-4 rounded-xl bg-white border border-transparent focus:border-amber-500 outline-none" />
            </div>
            <div>
              <label className="text-sm text-gray-500 block mb-1">Email</label>
              <input type="email" placeholder="abc@mail.com" className="w-full p-4 rounded-xl bg-white border border-transparent focus:border-amber-500 outline-none" />
            </div>
            <div className="flex items-center gap-2 py-2">
              <input type="checkbox" id="subscribe" className="w-4 h-4" />
              <label htmlFor="subscribe" className="text-sm text-gray-500">Subscribe to the newsletter</label>
            </div>
            <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition">
              Submit
            </button>
          </div>

        </div>
      </section>
      {/* ================= NEWSLETTER SECTION END ================= */}

      {/* ================= MOST POPULAR PRODUCTS (Swiper) ================= */}
      <section className="w-full py-16 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Most popular products</h2>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm font-bold text-gray-900 hover:text-amber-500">View All Categories →</a>
              <div className="flex gap-2">
                <button className="swiper-prev-btn w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">←</button>
                <button className="swiper-next-btn w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">→</button>
              </div>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{ prevEl: '.swiper-prev-btn', nextEl: '.swiper-next-btn' }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 6 },
            }}
          >
            {(popularProducts || []).map((product) => (
              <SwiperSlide key={product.id}>
                <div className="p-5 border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 relative">
                  <button className="absolute top-4 right-4 p-2 bg-gray-50 rounded-full hover:bg-red-100">
                  </button>
                  <img src={product.img} alt={product.name} className="w-full h-32 object-contain mb-4" />
                  <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">1 UNIT ★ 4.5</p>
                  <span className="font-extrabold text-lg block mb-4">{product.price}</span>
                  <div className="flex items-center justify-between gap-2">
                      <button onClick={() => addBasket(product.id, product.name, product.price)} className="text-sm font-bold text-gray-400 hover:text-gray-900 hover:text-amber-500 transition-colors">Add to Cart</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ================= JUST ARRIVED ================= */}
      <section className="w-full py-16 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Just arrived</h2>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm font-bold text-gray-900 hover:text-amber-500">View All Categories →</a>
              <div className="flex gap-2">
                <button className="swiper-prev-btn w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">←</button>
                <button className="swiper-next-btn w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">→</button>
              </div>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{ prevEl: '.swiper-prev-btn', nextEl: '.swiper-next-btn' }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 6 },
            }}
          >
            {(justArrived || []).map((product) => (
              <SwiperSlide key={product.id}>
                <div className="p-5 border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 relative">
                  <button className="absolute top-4 right-4 p-2 bg-gray-50 rounded-full hover:bg-red-100">
                  </button>
                  <img src={product.img} alt={product.name} className="w-full h-32 object-contain mb-4" />
                  <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">1 UNIT ★ 4.5</p>
                  <span className="font-extrabold text-lg block mb-4">{product.price}</span>
                  <div className="flex items-center justify-between gap-2">
                      <button onClick={() => addBasket(product.id, product.name, product.price)} className="text-sm font-bold text-gray-400 hover:text-gray-900 hover:text-amber-500 transition-colors">Add to Cart</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ================= OUR RECENT BLOG ================= */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Recent Blog</h2>
            <a href="#" className="text-sm font-bold text-gray-900 hover:text-amber-500 transition-colors">
              Read All Articles →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-400 font-bold mb-3">
                    <span>📅 {post.date}</span>
                    <span>📁 {post.category}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-4 group-hover:text-amber-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {post.excerpt.slice(0, 150)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APP DOWNLOAD ================= */}
      <section className="w-full py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#FFF9F0] rounded-[40px] flex flex-col md:flex-row items-center gap-6">
            
            <div className="w-full md:w-2/5 flex justify-center">
              <img 
                src={phoneImg} 
                alt="Foodmart App" 
                className="w-full max-w-[250px] drop-shadow-2xl" 
              />
            </div>

            <div className="w-full md:w-3/5">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Shop faster with foodmart App
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus liberolectus nonet psryroin. 
                Amet sed lorem posuere sit iaculis et, ac urna. Adipiscing fames semper erat ac in suspendisse iaculis.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <img src={appStoreImg} alt="App Store" className="h-14 cursor-pointer hover:opacity-90 transition" />
                <img src={googlePlayImg} alt="Google Play" className="h-14 cursor-pointer hover:opacity-90 transition" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
            People are also looking for
          </h2>

          <div className="flex flex-wrap gap-4">
            {searchTerms.map((term, index) => (
              <a 
                key={index} 
                href="#" 
                className="px-2 py-2 bg-amber-50 text-gray-700 font-semibold rounded-lg hover:bg-amber-100 transition-colors duration-200"
              >
                {term}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-white border-y border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-amber-500">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;