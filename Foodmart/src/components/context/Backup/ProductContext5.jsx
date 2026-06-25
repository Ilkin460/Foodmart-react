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
  { id: 1,  name: 'Vegetables',    icon: iconBroccoli  },
  { id: 2,  name: 'Bakery',        icon: iconBaguette  },
  { id: 3,  name: 'Soft Drinks',   icon: iconSoftDrink },
  { id: 4,  name: 'Beverages',     icon: iconWine      },
  { id: 5,  name: 'Meat Products', icon: iconDrumstick },
  { id: 6,  name: 'Flour & Bakery',icon: iconFlour     },
  { id: 7,  name: 'Vegetables',    icon: iconBroccoli  },
  { id: 8,  name: 'Bakery',        icon: iconBaguette  },
  { id: 9,  name: 'Soft Drinks',   icon: iconSoftDrink },
  { id: 10, name: 'Beverages',     icon: iconWine      },
  { id: 11, name: 'Meat Products', icon: iconDrumstick },
  { id: 12, name: 'Flour & Bakery',icon: iconFlour     },
];

const productList = [
  { id: 1, name: 'Sunstar Fresh Melon',  price: '$18.00', img: imgBananas,     cat: 'FRUITS & VEGES' },
  { id: 2, name: 'Crunchy Cookies',      price: '$18.00', img: imgBiscuits,    cat: 'OTHERS'         },
  { id: 3, name: 'Fresh Cucumber',       price: '$18.00', img: imgCucumber,    cat: 'FRUITS & VEGES' },
  { id: 4, name: 'Fresh Milk',           price: '$18.00', img: imgMilk,        cat: 'OTHERS'         },
  { id: 5, name: 'Tomato Ketchup',       price: '$18.00', img: imgKetchup,     cat: 'JUICES'         },
  { id: 6, name: 'Orange Juice',         price: '$18.00', img: imgJuice,       cat: 'JUICES'         },
  { id: 7, name: 'Fresh Raspberries',    price: '$18.00', img: imgRaspberries, cat: 'FRUITS & VEGES' },
  { id: 8, name: 'Green Apples',         price: '$18.00', img: productImg, cat: 'FRUITS & VEGES' },
  { id: 9, name: 'Strawberry Jam', price: '$18.00', img: productImg, cat: 'OTHERS' },
  { id: 10, name: 'Mango Juice', price: '$18.00', img: productImg, cat: 'JUICES' },
  { id: 11, name: 'Fresh Carrot', price: '$18.00', img: productImg, cat: 'FRUITS & VEGES' },
  { id: 12, name: 'Chocolate Cookies', price: '$18.00', img: productImg, cat: 'OTHERS' },
  { id: 13, name: 'Apple Juice', price: '$18.00', img: productImg, cat: 'JUICES' },
  { id: 14, name: 'Fresh Broccoli', price: '$18.00', img: productImg, cat: 'FRUITS & VEGES' },
  { id: 15, name: 'Vanilla Biscuits', price: '$18.00', img: productImg, cat: 'OTHERS' },
  { id: 16, name: 'Pineapple Juice', price: '$18.00', img: productImg, cat: 'JUICES' },
  { id: 17, name: 'Fresh Grapes', price: '$18.00', img: productImg, cat: 'FRUITS & VEGES' },
  { id: 18, name: 'Butter Cookies', price: '$18.00', img: productImg, cat: 'OTHERS' },
  { id: 19, name: 'Peach Juice', price: '$18.00', img: productImg, cat: 'JUICES' },
  { id: 20, name: 'Fresh Pears', price: '$18.00', img: productImg, cat: 'FRUITS & VEGES' },
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
