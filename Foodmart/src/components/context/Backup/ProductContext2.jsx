export const ProductProvider = ({ children }) => {
  const [axtar, setAxtar] = useState("");
  
  // Ürünlerin olduğu dizi
  const allProducts = [
    { id: 1, name: "Sunstar Fresh Melon", price: "$18.00", img: imgMilk, cat: 'FRUITS & VEGES' },
    // ... diğer ürünlerin
  ];

  // Axtar değişkenine göre filtreleme
  const filteredProducts = allProducts.filter(product => 
    product.name.toLowerCase().includes(axtar.toLowerCase())
  );

  return (
    <PRODUCT_CONTEXT.Provider value={{ axtar, setAxtar, filteredProducts }}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};