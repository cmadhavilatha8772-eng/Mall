import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import Main from './shoppingfolder/pages/Main';
import Cart from './shoppingfolder/pages/Cart';
import Wishlist from './shoppingfolder/pages/Wishlist';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            {/* Add /men, /women, /children, /beauty, /offers, /product/:id,
                /search, /checkout, /login, /signup, /account, /orders here
                as you build those pages — see the step-by-step notes below. */}
          </Routes>
        </BrowserRouter>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
