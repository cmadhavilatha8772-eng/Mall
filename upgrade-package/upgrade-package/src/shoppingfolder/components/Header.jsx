import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const NAV_LINKS = [
  { label: 'Men', to: '/men' },
  { label: 'Women', to: '/women' },
  { label: 'Children', to: '/children' },
  { label: 'Beauty', to: '/beauty' },
  { label: 'Offers', to: '/offers' },
];

const Header = () => {
  const { itemCount } = useCart();
  const { items: wishItems } = useWishlist();
  const [query, setQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-ink text-white">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-8">
        {/* LEFT: logo */}
        <Link to="/" className="shrink-0 text-lg font-bold tracking-tight md:text-xl">
          Shopping<span className="text-accent">Mall</span>
        </Link>

        {/* CENTER: search + nav (desktop only) */}
        <form
          onSubmit={handleSearchSubmit}
          className="relative hidden flex-1 max-w-md md:block"
        >
          <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink/50" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, brands..."
            className="w-full rounded-full bg-white py-2 pl-9 pr-8 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/40 hover:text-ink"
            >
              <X size={16} />
            </button>
          )}
        </form>

        <nav className="hidden items-center gap-5 text-sm font-medium lg:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-accent transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT: icons */}
        <div className="ml-auto flex items-center gap-4">
          <Link to="/wishlist" aria-label="Wishlist" className="relative hidden sm:block">
            <Heart size={22} />
            {wishItems.length > 0 && (
              <span className="absolute -right-2 -top-2 rounded-full bg-accent px-1.5 text-xs font-semibold">
                {wishItems.length}
              </span>
            )}
          </Link>

          <Link to="/cart" aria-label="Cart" className="relative">
            <ShoppingCart size={22} />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 rounded-full bg-accent px-1.5 text-xs font-semibold">
                {itemCount}
              </span>
            )}
          </Link>

          <Link to="/login" aria-label="Account" className="hidden items-center gap-1 text-sm font-medium sm:flex">
            <User size={20} /> Sign In
          </Link>

          <button
            className="lg:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative ml-auto flex h-full w-72 flex-col gap-1 bg-white p-5 text-ink shadow-xl">
            <button
              className="mb-4 self-end"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X size={22} />
            </button>

            <form onSubmit={handleSearchSubmit} className="relative mb-4">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/50" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="w-full rounded-full border border-ink/10 py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </form>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-2 py-2 text-sm font-medium hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2 border-ink/10" />
            <Link to="/wishlist" onClick={() => setMobileOpen(false)} className="rounded-lg px-2 py-2 text-sm font-medium hover:bg-surface">
              Wishlist
            </Link>
            <Link to="/account" onClick={() => setMobileOpen(false)} className="rounded-lg px-2 py-2 text-sm font-medium hover:bg-surface">
              Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
