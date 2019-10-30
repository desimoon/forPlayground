import React from 'react';
import styles from './Anchor.module.scss';

const Anchor = ({
  href,
  target = '_blank',
  background = 'none',
  color = '#000',
  border = '0',
  uppercase = true,
  look = null,
  children,
}) => {
  const a_style = {
    backgroundColor: background,
    color,
    border,
    textTransform: uppercase ? 'uppercase' : 'lowercase',
  };
  return (
    <a
      href={href}
      target={target}
      className={look ? styles.likeBtn : ''}
      style={a_style}
    >
      {children}
    </a>
  );
};

export default Anchor;
