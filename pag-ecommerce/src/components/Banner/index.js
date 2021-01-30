import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './styles.css';

export default function Banner(){

    return(
        <Swiper style={{ marginTop: '60px' }} className='swiper-container'>
            <SwiperSlide>
                <img src="https://picsum.photos/1600/500?random=3"/>
            </SwiperSlide>
        </Swiper>
    );
}