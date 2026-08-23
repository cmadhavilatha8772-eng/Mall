// src/shoppingfolder/pages/Women.jsx
import Collections from '../components/Collections';
import { womensProducts } from '../data';   // ← fixed

const Women = () => <Collections title="Women's Fashion" products={womensProducts} />;
export default Women;