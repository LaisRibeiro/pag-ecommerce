import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './styles.css';

export default function Instagram(){
    return(
        <div className='principalGridInsta'>
          <div className='gridInsta'>
              <div>
                  <img className='imgInsta' src="https://picsum.photos/250/250?random=3"/>      
              </div>
              <div>
                  <p className='pInsta'>
                      @instadamarca
                  </p>
                  <img className='imgInsta' src="https://picsum.photos/250/250?random=3"/>      
              </div>
              <div>
                  <img className='imgInsta' src="https://picsum.photos/250/250?random=3"/>      
              </div>
          </div>
        </div>
    );
}