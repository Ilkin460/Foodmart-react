import React, { createContext, useContext, useState, useMemo } from 'react';

// Kategori ikonları
import iconBroccoli  from '../../assets/img/gallery/icon-vegetables-broccoli.png';
import iconBaguette  from '../../assets/img/gallery/icon-bread-baguette.png';
import iconSoftDrink from '../../assets/img/gallery/icon-soft-drinks-bottle.png';
import iconWine      from '../../assets/img/gallery/icon-wine-glass-bottle.png';
import iconDrumstick from '../../assets/img/gallery/icon-animal-products-drumsticks.png';
import iconFlour     from '../../assets/img/gallery/icon-bread-herb-flour.png';

// Ürün görselleri
import imgMilk        from '../../assets/img/gallery/thumb-milk.png';
import imgBananas     from '../../assets/img/gallery/thumb-bananas.png';
import imgBiscuits    from '../../assets/img/gallery/thumb-biscuits.png';
import imgCucumber    from '../../assets/img/gallery/thumb-cucumber.png';
import imgKetchup     from '../../assets/img/gallery/thumb-tomatoketchup.png';
import imgJuice       from '../../assets/img/gallery/thumb-orange-juice.png';
import imgRaspberries from '../../assets/img/gallery/thumb-raspberries.png';

// ── Context ──────────────────────────────────────────────────────────────────
export const PRODUCT = createContext(null);

// ── Veri ─────────────────────────────────────────────────────────────────────
const categoryList = [
  { id: 1,  name: 'Fruits & Veges',  icon: iconBroccoli  },
  { id: 2,  name: 'Bakery',          icon: iconBaguette  },
  { id: 3,  name: 'Soft Drinks',     icon: iconSoftDrink },
  { id: 4,  name: 'Beverages',       icon: iconWine      },
  { id: 5,  name: 'Meat Products',   icon: iconDrumstick },
  { id: 6,  name: 'Flour & Bakery',  icon: iconFlour     },
  { id: 7,  name: 'Vegetables',      icon: iconBroccoli  },
  { id: 8,  name: 'Juices',          icon: iconWine      },
];

const productList = [
  { id: 1,  name: 'Sunstar Fresh Melon',  price: '$4.99', img: imgBananas,     cat: 'Fruits & Veges' },
  { id: 2,  name: 'Crunchy Cookies',      price: '$3.49', img: imgBiscuits,    cat: 'Bakery' },
  { id: 3,  name: 'Fresh Cucumber',       price: '$1.29', img: imgCucumber,    cat: 'Fruits & Veges' },
  { id: 4,  name: 'Fresh Milk',           price: '$2.99', img: imgMilk,        cat: 'Beverages' },
  { id: 5,  name: 'Tomato Ketchup',       price: '$3.99', img: imgKetchup,     cat: 'Juices' },
  { id: 6,  name: 'Orange Juice',         price: '$4.49', img: imgJuice,       cat: 'Juices' },
  { id: 7,  name: 'Fresh Raspberries',    price: '$5.99', img: imgRaspberries, cat: 'Fruits & Veges' },
  { id: 8,  name: 'Green Apples',         price: '$3.99', img: imgBananas,     cat: 'Fruits & Veges' },
  { id: 9,  name: 'Strawberry Jam',       price: '$4.29', img: imgBiscuits,    cat: 'Flour & Bakery' },
  { id: 10, name: 'Mango Juice',          price: '$4.99', img: imgJuice,       cat: 'Juices' },
  { id: 11, name: 'Fresh Carrot',         price: '$1.49', img: imgCucumber,    cat: 'Fruits & Veges' },
  { id: 12, name: 'Chocolate Cookies',    price: '$3.99', img: imgBiscuits,    cat: 'Bakery' },
  { id: 13, name: 'Apple Juice',          price: '$4.29', img: imgJuice,       cat: 'Juices' },
  { id: 14, name: 'Fresh Broccoli',       price: '$2.49', img: imgCucumber,    cat: 'Fruits & Veges' },
  { id: 15, name: 'Vanilla Biscuits',     price: '$2.99', img: imgBiscuits,    cat: 'Bakery' },
  { id: 16, name: 'Pineapple Juice',      price: '$5.49', img: imgJuice,       cat: 'Juices' },
  { id: 17, name: 'Fresh Grapes',         price: '$4.99', img: imgRaspberries, cat: 'Fruits & Veges' },
  { id: 18, name: 'Butter Cookies',       price: '$3.79', img: imgBiscuits,    cat: 'Bakery' },
  { id: 19, name: 'Peach Juice',          price: '$4.79', img: imgJuice,       cat: 'Juices' },
  { id: 20, name: 'Fresh Pears',          price: '$3.49', img: imgBananas,     cat: 'Fruits & Veges' },
    { id: 21, name: 'French Baguette', price: '$2.99', img: imgBiscuits, cat: 'Bakery' },
    { id: 22, name: 'Croissant', price: '$1.99', img: imgBiscuits, cat: 'Bakery' },
    { id: 23, name: 'Whole Wheat Bread', price: '$3.49', img: imgBiscuits, cat: 'Bakery' },
  
    { id: 24, name: 'Cola Drink', price: '$1.99', img: imgJuice, cat: 'Soft Drinks' },
    { id: 25, name: 'Orange Soda', price: '$2.29', img: imgJuice, cat: 'Soft Drinks' },
    { id: 26, name: 'Lemon Soda', price: '$2.19', img: imgJuice, cat: 'Soft Drinks' },
  
    { id: 27, name: 'Red Wine', price: '$12.99', img: imgJuice, cat: 'Beverages' },
    { id: 28, name: 'White Wine', price: '$13.99', img: imgJuice, cat: 'Beverages' },
    { id: 29, name: 'Grape Juice', price: '$4.99', img: imgJuice, cat: 'Beverages' },
  
    { id: 30, name: 'Chicken Breast', price: '$7.99', img: imgMilk, cat: 'Meat Products' },
    { id: 31, name: 'Beef Steak', price: '$12.49', img: imgMilk, cat: 'Meat Products' },
    { id: 32, name: 'Turkey Fillet', price: '$8.99', img: imgMilk, cat: 'Meat Products' },
  
    { id: 33, name: 'Wheat Flour', price: '$3.99', img: imgBiscuits, cat: 'Flour & Bakery' },
    { id: 34, name: 'Corn Flour', price: '$4.29', img: imgBiscuits, cat: 'Flour & Bakery' },
    { id: 35, name: 'Cake Mix', price: '$5.49', img: imgBiscuits, cat: 'Flour & Bakery' },
  
    { id: 36, name: 'Fresh Spinach', price: '$2.19', img: imgCucumber, cat: 'Vegetables' },
    { id: 37, name: 'Chocolate Muffin', price: '$2.79', img: imgBiscuits, cat: 'Bakery' },
    { id: 38, name: 'Energy Drink', price: '$2.99', img: imgJuice, cat: 'Soft Drinks' },
    { id: 39, name: 'Lamb Chops', price: '$14.99', img: imgMilk, cat: 'Meat Products' },
    { id: 40, name: 'Pancake Mix', price: '$4.99', img: imgBiscuits, cat: 'Flour & Bakery' },
];

// ── Provider ──────────────────────────────────────────────────────────────────
export const ProductProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return productList;
    return productList.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.cat.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <PRODUCT.Provider value={{
      products: productList,
      filteredProducts,
      categories: categoryList,
      searchQuery,
      setSearchQuery,
    }}>
      {children}
    </PRODUCT.Provider>
  );
};

// ── Hook ──────────────────────────────────────────────────────────────────────
export const useProducts = () => useContext(PRODUCT);
