import React from 'react';
import { IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5';

import Logo2 from '../../image/logo2.png';

import './styles.css';

export default function Banner(){

    return(
        <footer>
            <div className='principalGridFooter'>
                <hr className='hr'/>
                <img class="imagem-linha" src={Logo2} width="180" />
            </div>
            <div className='gridFooter'>
                <div>
                    <h3 className='h3'>MENU</h3>
                    <div className='gridMenu'>
                        <div className='pSubtitle'>
                            <p>Submenu</p>
                            <p>Submenu</p>
                        </div>
                        <div className='pSubtitle'>
                            <p>Submenu</p>
                            <p>Submenu</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='h3'>MENU</h3>
                    <div style={{ position: 'relative' }}>
                    <input
                        type="text"
                        placeholder="Email"
                        />
                    </div>
                </div>
                <div>
                    <h3 className='h3'>MENU</h3>
                        <div className='logoRedes'>
                            <IoLogoInstagram size={30}/>
                            <IoLogoFacebook size={30}/>
                        </div>
                </div>
            </div>
        </footer>
    );
}