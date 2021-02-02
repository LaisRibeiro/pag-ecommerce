import React from 'react';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Products from '../../components/Products';
import ProductsBanner from '../../components/ProductsBanner';
import Instagram from '../../components/Instagram';
import Footer from '../../components/Footer';

export default function Home(){

    return (
      <div>
          <Header/>
          {/* <Banner/> */}
          <Products/>
          <ProductsBanner/>
          <Instagram/>
          <Footer/>
      </div>
    );
}