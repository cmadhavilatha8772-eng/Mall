import React from 'react';

// lucide-react dropped brand/logo icons — small inline SVGs instead.
const SocialIcon = ({ path }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d={path} />
  </svg>
);
const ICONS = {
  instagram:
    'M12 2c2.7 0 3 .01 4.1.06 1.1.05 1.8.22 2.4.46.65.25 1.2.6 1.75 1.14.5.5.85 1.05 1.1 1.7.24.6.4 1.3.46 2.4.05 1.1.06 1.4.06 4.1s-.01 3-.06 4.1c-.05 1.1-.22 1.8-.46 2.4a4.6 4.6 0 0 1-1.1 1.75 4.6 4.6 0 0 1-1.75 1.1c-.6.24-1.3.4-2.4.46-1.1.05-1.4.06-4.1.06s-3-.01-4.1-.06c-1.1-.05-1.8-.22-2.4-.46a4.6 4.6 0 0 1-1.75-1.1 4.6 4.6 0 0 1-1.1-1.75c-.24-.6-.4-1.3-.46-2.4C2.01 15 2 14.7 2 12s.01-3 .06-4.1c.05-1.1.22-1.8.46-2.4.25-.65.6-1.2 1.1-1.75.5-.5 1.1-.85 1.75-1.1.6-.24 1.3-.4 2.4-.46C9 2.01 9.3 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-8.4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z',
  facebook:
    'M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.3v7A10 10 0 0 0 22 12z',
  youtube:
    'M23 12s0-3.4-.4-5a3 3 0 0 0-2.1-2.1C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.5.4A3 3 0 0 0 1.4 7C1 8.6 1 12 1 12s0 3.4.4 5a3 3 0 0 0 2.1 2.1c1.6.4 8.5.4 8.5.4s6.9 0 8.5-.4A3 3 0 0 0 22.6 17c.4-1.6.4-5 .4-5zM9.7 15.3V8.7l6 3.3-6 3.3z',
  linkedin:
    'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.5-.95 1.8-1.95 3.7-1.95 3.95 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.25 0-2.85-1.75-2.85s-2 1.35-2 2.75V21H9z',
};

const COLUMNS = [
  {
    heading: 'Shopping Mall',
    links: ['About us', 'Contact', 'Careers'],
  },
  {
    heading: 'Customer Service',
    links: ['Help Center', 'Returns', 'Shipping', 'FAQ'],
  },
  {
    heading: 'Categories',
    links: ['Men', 'Women', 'Children', 'Beauty'],
  },
];

const Footer = () => {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 md:grid-cols-4 md:px-8">
        {COLUMNS.map((col) => (
          <div key={col.heading}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">
              {col.heading}
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              {col.links.map((link) => (
                <li key={link} className="cursor-pointer hover:text-white">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">Follow Us</h3>
          <div className="flex gap-3">
            {Object.entries(ICONS).map(([key, path]) => (
              <span key={key} className="cursor-pointer hover:text-accent">
                <SocialIcon path={path} />
              </span>
            ))}
          </div>

          <form className="mt-5 flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-l-full bg-white/10 px-4 py-2 text-sm placeholder:text-white/50 focus:outline-none"
            />
            <button className="rounded-r-full bg-accent px-4 py-2 text-sm font-medium">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Shopping Mall. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
