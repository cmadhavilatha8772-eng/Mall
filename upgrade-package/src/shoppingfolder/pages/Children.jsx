// src/shoppingfolder/pages/Children.jsx
import Collections from '../components/Collections';

const childrenBrands = ['H&M Kids', 'Gini & Jony', 'Mothercare', 'Max Fashion', 'Pantaloons Junior', 'FirstCry'];

const childrenProducts = [299, 349, 499, 599, 249, 449].map((price, i) => ({
  id: `children-${i + 1}`,
  name: `Kids Wear ${i + 1}`,
  brand: childrenBrands[i],
  category: 'Children',
  subCategory: 'Fashion',
  price,
  originalPrice: Math.round(price * 1.5),
  discount: 33,
  rating: (4 + (i % 5) / 10).toFixed(1),
  reviews: 30 + i * 12,
  image: `https://placehold.co/400x500/e8f0f5/5b7a8b?text=Kids+${i + 1}`,
  isNew: i % 3 === 0,
  isSale: true,
  stock: 20,
}));

const Children = () => <Collections title="Children's Fashion" products={childrenProducts} />;
export default Children;