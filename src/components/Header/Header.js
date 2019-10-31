import React, { useContext, useEffect } from 'react';
import { MobileContext } from 'Context/MobileContext';
import { MenuItems, Hamburger } from 'components';
import Logo from 'Assets/Images/logo-playground-white.png';
import './Header.scss';

const Header = () => {
  const { breakpoint, isMenuOpen, setIsMenuOpen } = useContext(MobileContext);

  useEffect(() => {
    if (!breakpoint.isMobile) setIsMenuOpen(false);
  }, [breakpoint.isMobile]);

  return (
    <header>
      <div className={`menu`}>
        <MenuItems
          items={['we are', 'we do', 'careers', 'contact us']}
          isMobile={breakpoint.isMobile}
          showMenu={isMenuOpen}
          target="header"
        />
        <div className="brand">
          <img src={Logo} alt="Playground's logo" className="logo" />
          <Hamburger openMenu={setIsMenuOpen} isOpen={isMenuOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
