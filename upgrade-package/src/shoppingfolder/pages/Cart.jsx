import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQty, subtotal, discount } = useCart();
  const delivery = items.length && subtotal < 999 ? 49 : 0;
  const total = subtotal + delivery;

  return (
    <div>
      <Header />
      <div className="mx-auto max-w-5xl px-4 py-10 md:px-8">
        <h1 className="mb-6 text-2xl font-bold">Your Cart</h1>

        {items.length === 0 ? (
          <div className="flex flex-col items-center gap-4 rounded-xl2 bg-white py-16 text-center shadow-card">
            <p className="text-ink/60">Your cart is waiting for something special.</p>
            <Link to="/" className="btn-primary">Start Shopping</Link>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4 md:col-span-2">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 rounded-xl2 bg-white p-4 shadow-card">
                  <img src={item.image} alt={item.name} className="h-24 w-20 rounded-lg object-cover" />
                  <div className="flex-1">
                    <p className="text-xs text-ink/50">{item.brand}</p>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="mt-1 font-bold">₹{item.price}</p>

                    <div className="mt-2 flex items-center gap-3">
                      <button onClick={() => updateQty(item.id, item.qty - 1)} className="rounded-full border p-1">
                        <Minus size={14} />
                      </button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} className="rounded-full border p-1">
                        <Plus size={14} />
                      </button>
                      <button onClick={() => removeFromCart(item.id)} className="ml-4 flex items-center gap-1 text-sm text-accent">
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </div>
                  <p className="font-bold">₹{item.price * item.qty}</p>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-xl2 bg-white p-5 shadow-card">
              <h2 className="mb-4 font-semibold">Order Summary</h2>
              <div className="flex justify-between text-sm"><span>Subtotal</span><span>₹{subtotal}</span></div>
              <div className="flex justify-between text-sm text-green-600"><span>Discount</span><span>-₹{discount}</span></div>
              <div className="flex justify-between text-sm"><span>Delivery</span><span>{delivery === 0 ? 'FREE' : `₹${delivery}`}</span></div>
              <hr className="my-3" />
              <div className="flex justify-between font-bold"><span>Total</span><span>₹{total}</span></div>
              <Link to="/checkout" className="btn-primary mt-4 block text-center">Checkout</Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
