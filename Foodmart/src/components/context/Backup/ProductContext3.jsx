import React, { createContext, useContext } from 'react';

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
const productList = [
  { id: 1, name: 'Sunstar Fresh Melon',  price: '$18.00', img: imgBananas,     cat: 'FRUITS & VEGES' },
  { id: 2, name: 'Crunchy Cookies',      price: '$18.00', img: imgBiscuits,    cat: 'OTHERS'         },
  { id: 3, name: 'Fresh Cucumber',       price: '$18.00', img: imgCucumber,    cat: 'FRUITS & VEGES' },
  { id: 4, name: 'Fresh Milk',           price: '$18.00', img: imgMilk,        cat: 'OTHERS'         },
  { id: 5, name: 'Tomato Ketchup',       price: '$18.00', img: imgKetchup,     cat: 'JUICES'         },
  { id: 6, name: 'Orange Juice',         price: '$18.00', img: imgJuice,       cat: 'JUICES'         },
  { id: 7, name: 'Fresh Raspberries',    price: '$18.00', img: imgRaspberries, cat: 'FRUITS & VEGES' },
];

// ── Provider ──────────────────────────────────────────────────────────────────
export const ProductProvider = ({ children }) => {
  // İleride API'den çekme, filtreleme vb. buraya eklenebilir.
  return (
    <PRODUCT.Provider value={{ products: productList }}>
      {children}
    </PRODUCT.Provider>
  );
};

// ── Hook ──────────────────────────────────────────────────────────────────────
export const useProducts = () => useContext(PRODUCT);
