// src/shoppingfolder/pages/SignIn.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError('Please enter both email and password.');
      return;
    }

    // No real backend yet — just simulate a successful login.
    // Replace this with an actual API call when you have one.
    console.log('Signing in with:', form);
    navigate('/'); // redirect to home page after "signing in"
  };

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-16">
      <h2 className="text-2xl font-bold text-ink">Sign In</h2>
      <p className="mt-1 text-sm text-ink/60">Enter your credentials to continue.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-ink">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-ink"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-ink">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-ink"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          className="w-full rounded-full bg-ink py-2 text-sm font-medium text-white transition-colors hover:bg-accent"
        >
          Sign In
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-ink/60">
        Don't have an account?{' '}
        <Link to="/signup" className="font-medium text-ink hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;