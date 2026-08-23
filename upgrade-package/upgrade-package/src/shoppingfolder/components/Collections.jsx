import React from 'react';
import ProductCard from './ProductCard';

const Collections = ({ title, products }) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <h2 className="mb-5 text-xl font-bold text-ink md:text-2xl">{title}</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Collections;
