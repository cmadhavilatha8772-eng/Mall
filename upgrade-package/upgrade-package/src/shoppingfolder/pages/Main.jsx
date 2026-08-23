import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Collections from '../components/Collections';
import WomanCollection from '../components/WomanCollection';
import Footer from '../components/Footer';
import { mensProducts, womensProducts } from '../data';

const Main = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Collections title="Gents Fashion" products={mensProducts} />
      <WomanCollection title="Ladies Fashion" products={womensProducts} />
      <Footer />
    </div>
  );
};

export default Main;
