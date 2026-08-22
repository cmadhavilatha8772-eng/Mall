// Centralized mock product data — built from your existing assets/Men and assets/Woman images.
const menBrands = ['Roadster', 'H&M', "Levi's", 'Puma', 'Allen Solly', 'U.S. Polo'];
const womenBrands = ['Vero Moda', 'Zara', 'Only', 'AND', 'W', 'Biba'];

export const mensProducts = [559, 459, 659, 759, 859, 959].map((price, i) => ({
  id: `men-${i + 1}`,
  name: `Men's Casual Wear ${i + 1}`,
  brand: menBrands[i],
  category: 'Men',
  subCategory: 'Fashion',
  price,
  originalPrice: Math.round(price * 1.6),
  discount: 38,
  rating: (4 + (i % 5) / 10).toFixed(1),
  reviews: 60 + i * 23,
  image: `assets/Men/${i + 1}.jpg`,
  isNew: i % 2 === 0,
  isSale: true,
  stock: 20,
}));

export const womensProducts = [1559, 1459, 1659, 1759, 1859, 1959].map((price, i) => ({
  id: `women-${i + 1}`,
  name: `Women's Trend Wear ${i + 1}`,
  brand: womenBrands[i],
  category: 'Women',
  subCategory: 'Fashion',
  price,
  originalPrice: Math.round(price * 1.5),
  discount: 33,
  rating: (4 + ((i + 2) % 5) / 10).toFixed(1),
  reviews: 45 + i * 31,
  image: `assets/Woman/${i + 1}.jpg`,
  isNew: i % 3 === 0,
  isSale: true,
  stock: 20,
}));

export const allProducts = [...mensProducts, ...womensProducts];

// Kept so anything still importing the old shape doesn't break.
export const Gents = { title: 'Gents Fashion', products: mensProducts };
export const Ladies = { title: 'Ladies Fashion', products: womensProducts };
