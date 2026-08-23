import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import Layout from './shoppingfolder/components/Layout';
import Main from './shoppingfolder/pages/Main';
import Cart from './shoppingfolder/pages/Cart';
import Wishlist from './shoppingfolder/pages/Wishlist';
import Men from './shoppingfolder/pages/Men';
import Women from './shoppingfolder/pages/Women';
import Children from './shoppingfolder/pages/Children';
import Beauty from './shoppingfolder/pages/Beauty';
import Offers from './shoppingfolder/pages/Offers';
import SignIn from './shoppingfolder/pages/SignIn';
import SignUp from './shoppingfolder/pages/SignUp';

// Strip trailing slash from "/ReactApp/" so it becomes "/ReactApp"
const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <BrowserRouter basename={basename}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Main />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/children" element={<Children />} />
              <Route path="/beauty" element={<Beauty />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;