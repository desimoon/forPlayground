import React, { useState } from 'react';
import { Button } from 'components/';
import styles from './CookieBanner.module.scss';

const CookieBanner = props => {
  const [showCookie, setShowCookie] = useState(true);

  const handleShowCookie = () => {
    console.log('close cookie');
    setShowCookie(false);
  };

  return (
    <div
      className={styles.CookieBanner}
      style={showCookie ? {} : { display: 'none' }}
    >
      <p>
        Our website uses cookies to improve your experience. To find out more
        about the cookies we use please see our Cookies Policy.
      </p>
      <Button action={handleShowCookie}>ok</Button>
    </div>
  );
};

export default CookieBanner;
