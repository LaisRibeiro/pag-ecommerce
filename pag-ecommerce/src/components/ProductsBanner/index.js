import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './styles.css';

export default function ProductsBanner(){
    return(
        <div className='principalGrid'>
            <div className='faixa'/>
            <div className='gridFaixa'>
                <div className='gridTitle'>
                    <h5 className='h1'>Lorem ipsum lorem dolor</h5>
                    <h2 className='h1'>Lorem ipsum dolor sit amet</h2>
                    <h5 className='h1'>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna
                        aliqua. Metus vulputate eu scelerisque
                        felis imperdiet proin fermentum. Praesent
                        semper feugiat nibh sed pulvinar proin
                        gravida.</h5>
                </div>
                <div>
                    <div>
                        <img className='imgCard1' src="https://picsum.photos/350/450?random=3"/>
                    </div>
                    <div className='backgroudTxt'>
                        <p className='pTitle'>Título do Banner</p>
                        <p className='pSubtitle'>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempo.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img className='imgCard2' src="https://picsum.photos/350/200?random=3"/>
                    </div>
                    <div className='backgroudTxt'>
                        <p className='pTitle'>Título do Banner</p>
                        <p className='pSubtitle'>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempo.</p>
                    </div>
                    <div style={{marginTop: '80px'}}>
                        <img className='imgCard1' src="https://picsum.photos/350/450?random=3"/>
                    </div>
                    <div className='backgroudTxt'>
                        <p className='pTitle'>Título do Banner</p>
                        <p className='pSubtitle'>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempo.</p>
                    </div>
                </div>
            </div>
            <div className='faixa2'/>
            <div className='gridFaixa'>
                <div>
                    <img className='imgFaixa2' src="https://picsum.photos/250/350?random=3"/>
                </div>
                <div>
                    <p className='pSubtitle'>Lorem ipsum lorem dolor</p>
                    <p className='pTitle'>Lorem ipsum dolor sit amet</p>
                    <p className='pSubtitle'>Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna
                                            aliqua. Metus vulputate eu scelerisque
                                            felis imperdiet proin fermentum. Praesent
                                            semper feugiat nibh sed pulvinar proin
                                            gravida.</p>
                </div>
                <div>
                    <Swiper style={{ marginTop: '60px' }} className='swiper-container2'>
                        <SwiperSlide>
                            <img src="https://picsum.photos/350/250?random=3"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}