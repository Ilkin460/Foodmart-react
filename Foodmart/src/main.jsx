import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ProductProvider } from './components/context/ProductContext'
import BasketProvider from './components/context/BasketContext'
import { FavProvider } from './components/context/FavContext';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FavProvider>
      <BasketProvider>
        <ProductProvider> 
            <App />
        </ProductProvider>
      </BasketProvider>
    </FavProvider>
  </BrowserRouter>
)