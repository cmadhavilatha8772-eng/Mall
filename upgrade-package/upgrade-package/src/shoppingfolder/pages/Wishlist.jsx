import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useWishlist } from '../../context/WishlistContext';

const Wishlist = () => {
  const { items } = useWishlist();

  return (
    <div>
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <h1 className="mb-6 text-2xl font-bold">Your Wishlist</h1>

        {items.length === 0 ? (
          <div className="flex flex-col items-center gap-4 rounded-xl2 bg-white py-16 text-center shadow-card">
            <p className="text-ink/60">No favorites yet.</p>
            <Link to="/" className="btn-primary">Explore Products</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
