// src/shoppingfolder/pages/Beauty.jsx
import Collections from '../components/Collections';

const beautyBrands = ['Lakmé', 'Maybelline', 'Nykaa', 'MAC', 'Sugar', 'Forest Essentials'];

const beautyProducts = [399, 299, 599, 799, 249, 899].map((price, i) => ({
  id: `beauty-${i + 1}`,
  name: `Beauty Product ${i + 1}`,
  brand: beautyBrands[i],
  category: 'Beauty',
  subCategory: 'Cosmetics',
  price,
  originalPrice: Math.round(price * 1.4),
  discount: 28,
  rating: (4 + (i % 5) / 10).toFixed(1),
  reviews: 40 + i * 15,
  image: `https://placehold.co/400x500/f5e6e8/8b5e6b?text=Beauty+${i + 1}`,
  isNew: i % 2 === 0,
  isSale: true,
  stock: 20,
}));

const Beauty = () => <Collections title="Beauty" products={beautyProducts} />;
export default Beauty;