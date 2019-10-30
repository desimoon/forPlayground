import React from 'react';
import styles from './GridContainer.module.scss';

const GridContainer = ({
  container_fluid = null,
  container = null,
  forceToFluid = false,
  forceToColumnOnMobile = false,
  overrideConstraint = false,
  background = null,
}) => {
  return (
    <div
      className={styles.GridContainer}
      style={{
        backgroundColor: background,
        transition: 'background-color 300ms ease-in-out',
      }}
    >
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
