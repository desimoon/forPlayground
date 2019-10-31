import React, { useContext } from 'react';
import { ScrollContext } from 'Context/ScrollContext';
import { MobileContext } from 'Context/MobileContext';
import styles from './MenuItems.module.scss';

const MenuItems = ({ items, isMobile, showMenu, target }) => {
  const scroll = useContext(ScrollContext);
  const { setIsMenuOpen } = useContext(MobileContext);
  /* Destructuring classnames */
  const { MenuItemsHeader, menuItemsFooter, show } = styles;

  const handleClickMenuItem = item => () => {
    scroll.setClickedLink(item);
    setIsMenuOpen(false);
  };

  return (
    <ul
      className={`${target === 'header' ? MenuItemsHeader : menuItemsFooter} ${
        target === 'header' && isMobile && showMenu ? show : ''
      }`}
    >
      {items.map(item => (
        <li key={item} onClick={handleClickMenuItem(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
