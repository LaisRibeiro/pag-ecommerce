import React from 'react';

import './styles.css';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Products from '../../components/Products';

export default function Home(){

    return (
      <div>
          <Header/>
          <Banner/>
          <Products/>
      </div>
    );
}