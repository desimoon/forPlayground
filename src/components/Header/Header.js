import React, { useContext } from 'react';
import { MobileContext } from 'Context/MobileContext';
import { MenuItems, Hamburger } from 'components';
import useWindowSize from 'customHooks/useWindowSize';
import Logo from 'Assets/Images/logo-playground-white.png';
import './Header.scss';

const Header = () => {
  const mobile = useContext(MobileContext);
  const screen = useWindowSize();

  return (
    <header>
      <div className={`menu`}>
        <MenuItems
          items={['we are', 'we do', 'careers', 'contact us']}
          isMobile={screen.width < 768 && mobile.isOpenMenu ? true : false}
          target="header"
        />
        <div className="brand">
          <img src={Logo} alt="Playground's logo" className="logo" />
          <Hamburger
            openMenu={mobile.setIsOpenMenu}
            isOpen={mobile.isOpenMenu}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
