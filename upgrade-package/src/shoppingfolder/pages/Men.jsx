// src/shoppingfolder/pages/Men.jsx
import Collections from '../components/Collections';
import { mensProducts } from '../data';   // ← fixed from '../../data'

const Men = () => <Collections title="Men's Fashion" products={mensProducts} />;
export default Men;