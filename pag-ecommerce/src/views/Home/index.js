import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './styles.css';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Products from '../../components/Products';
import ProductsBanner from '../../components/ProductsBanner';

export default function Home(){

    return (
      <div>
          {/* <Header/>
          <Banner/> */}
          <Products/>
          <ProductsBanner/>
      </div>
    );
}