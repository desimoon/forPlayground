import React, { useContext } from 'react';
import { MenuItems, Anchor } from 'components/';
import { ScrollContext } from 'Context/ScrollContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import logo from 'Assets/Images/logo-playground-white.png';
import styles from './Footer.module.scss';

const Footer = props => {
  const scroll = useContext(ScrollContext);

  return (
    <div className={styles.Footer}>
      <div>
        <img src={logo} alt="logo aziendale" />
      </div>
      <div className={styles.menu}>
        <MenuItems
          items={['we are', 'we do', 'careers', 'contact us']}
          //isMobile={size.width < 768 && mobile.isOpenMenu ? true : false}
          target="footer"
        />
      </div>
      <div className={styles.social}>
        <Anchor
          href="https://www.facebook.com/playground.digital.agency"
          color="#4d4d4d"
        >
          <FontAwesomeIcon icon={faFacebookSquare} />
        </Anchor>
        <Anchor
          href="https://www.linkedin.com/company/playground-digital-agency"
          color="#4d4d4d"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Anchor>
        <Anchor
          href="https://www.instagram.com/playground_agency/?hl=it"
          color="#4d4d4d"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Anchor>
      </div>
    </div>
  );
};

export default Footer;
