import React, { useState } from 'react';
import { Heart, ShoppingCart, Check, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const ProductCard = ({ product }) => {
  const { addToCart, items } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const [justAdded, setJustAdded] = useState(false);

  const wishlisted = isWishlisted(product.id);
  const inCart = items.some((i) => i.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <div className="card group relative w-full overflow-hidden">
      <div className="relative aspect-[3/4] overflow-hidden rounded-t-xl2 bg-neutral-100">
        {product.isSale && <span className="badge-sale">{product.discount}% OFF</span>}
        {!product.isSale && product.isNew && <span className="badge-new">NEW</span>}

        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <button
          onClick={() => toggleWishlist(product)}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className="absolute top-3 right-3 rounded-full bg-white/90 p-2 shadow-card transition-transform hover:scale-110"
        >
          <Heart
            size={18}
            className={wishlisted ? 'fill-accent text-accent' : 'text-ink'}
          />
        </button>
      </div>

      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-ink/50">
          {product.brand}
        </p>
        <h3 className="mt-1 truncate text-sm font-semibold text-ink">{product.name}</h3>

        <div className="mt-1 flex items-center gap-1 text-xs text-ink/70">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span>{product.rating}</span>
          <span className="text-ink/40">({product.reviews})</span>
        </div>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-base font-bold text-ink">₹{product.price}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-ink/40 line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className={`mt-3 flex w-full items-center justify-center gap-2 rounded-full py-2 text-sm font-medium transition-colors ${
            justAdded || inCart
              ? 'bg-green-600 text-white'
              : 'bg-ink text-white hover:bg-accent'
          }`}
        >
          {justAdded ? (
            <>
              <Check size={16} /> Added
            </>
          ) : (
            <>
              <ShoppingCart size={16} /> {inCart ? 'In Cart' : 'Add to Cart'}
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
