import React from 'react';
import style from './Button.module.scss';

const Button = ({
  children,
  type = 'button',
  background = '#000',
  color = '#fff',
  border = '1px solid #000',
  uppercase = true,
  action = null,
  disabled = false,
}) => {
  const btn = {
    backgroundColor: background,
    color,
    border,
    textTransform: uppercase ? 'uppercase' : 'lowercase',
  };
  return (
    <button
      onClick={action}
      type={type}
      className={style.button}
      style={btn}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
