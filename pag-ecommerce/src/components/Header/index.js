/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react';
import './styles.css';
import { CSSTransition } from 'react-transition-group';
import { IoBasketOutline, IoPersonCircleOutline, IoSearchSharp, IoMenu } from "react-icons/io5";

import Logo from '../../image/logo.png';

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <div className='root'>
      <header className='Header'>
        <img src={Logo} className="Logo" alt="logo" />
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <nav className="Nav">
            <a href="/">Menu</a>
            <a href="/">Menu</a>
            <a href="/">Menu</a>
            <a href="/">Menu</a>
            <a href="/">Menu</a>
            <nav>
            <IoSearchSharp className='Icons' size={25} />
            <IoPersonCircleOutline className='Icons' size={25}/>
            <IoBasketOutline className='Icons' size={25}/>
            </nav>
          </nav>
        </CSSTransition>
        <button onClick={toggleNav} className="Menu">
          <IoMenu/>
        </button>
      </header>
    </div>
  );
}
