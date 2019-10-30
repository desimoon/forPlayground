import React, { useContext } from 'react';
import { ScrollContext } from 'Context/ScrollContext';
import useScroll from 'customHooks/useScroll';
import styles from './GridContainer.module.scss';

const GridContainer = ({
  container_fluid = null,
  container = null,
  forceToFluid = false,
  forceToColumnOnMobile = false,
  overrideConstraint = false,
  background = null,
  header = false,
}) => {
  const scroll = useContext(ScrollContext);
  const isTresholdExceeded = useScroll(scroll.tresholdNav)
    ? '#4A00E4'
    : 'transparent';

  const bgStyle = header
    ? {
        backgroundColor: background ? background : isTresholdExceeded,
        transition: 'background-color 300ms ease-in-out',
      }
    : {
        backgroundColor: background,
      };

  return (
    <div className={styles.GridContainer} style={bgStyle}>
      <div
        className={`
          ${styles.narrowContainer} 
          ${forceToFluid ? styles.forceToFluid : ''}
          ${forceToColumnOnMobile ? styles.forceToColumnOnMobile : ''}
        `}
      >
        {container}
      </div>
      <div
        className={`${styles.broadContainer} ${
          overrideConstraint ? styles.override : ''
        }`}
      >
        {container_fluid}
      </div>
    </div>
  );
};

export default GridContainer;
