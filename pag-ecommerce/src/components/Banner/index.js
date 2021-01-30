import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './styles.css';

export default function Banner(){

    return(
        <Swiper style={{ marginTop: '70px' }} className='swiper-container'>
            <SwiperSlide>
                <img src="https://picsum.photos/seed/picsum/1700/500"/>
            </SwiperSlide>
        </Swiper>
    );
}