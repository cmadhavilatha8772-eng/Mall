// src/shoppingfolder/pages/Offers.jsx
import Collections from '../components/Collections';
import { allProducts } from '../data';   // ← fixed

const Offers = () => <Collections title="All Offers" products={allProducts} />;
export default Offers;