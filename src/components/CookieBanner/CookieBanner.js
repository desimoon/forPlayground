import React, { useState } from 'react';
import { GridContainer, Button } from 'components/';
import styles from './CookieBanner.module.scss';

const CookieBanner = props => {
  const [showCookie, setShowCookie] = useState(true);

  const handleShowCookie = () => {
    setShowCookie(false);
  };

  return (
    <div
      className={`${styles.CookieBanner} _global_cookie_banner_`}
      style={showCookie ? {} : { display: 'none' }}
    >
      <GridContainer
        container={
          <>
            <p>
              Our website uses cookies to improve your experience. To find out
              more about the cookies we use please see our Cookies Policy.
            </p>
            <Button action={handleShowCookie}>ok</Button>
          </>
        }
      />
    </div>
  );
};

export default CookieBanner;
