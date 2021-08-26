import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './Navbar.css';
import { Button } from './Button';

const menuArray = [
  { link: '/', name: 'Bosh sahifa' },
  { link: '/services', name: 'Xizmatlar' },
  { link: '/products', name: 'Avtomobillar' },
  { link: '/sign-up', name: 'Kirish' },
];

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              className="img-logo"
              src="images/A_logo_compress.png"
              alt="A logo"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {menuArray.map((item, index) => {
              return (
                <li key={index} className="nav-item">
                  <Link
                    to={item.link}
                    className={
                      item.link === '/sign-up'
                        ? 'nav-links-mobile'
                        : 'nav-links'
                    }
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          {button && <Button buttonStyle="btn_outline">Kirish</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
