import React from 'react';
import styles from './Image.module.scss';

const Image = ({ src }) => {
  return <img src={src} alt="immagine di sfondo" className={styles.Image} />;
};

export default Image;
