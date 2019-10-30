import React from 'react';
import Button from 'components/Button/Button';
import useWindowSize from 'customHooks/useWindowSize';
import style from './Card.module.scss';

const Card = ({ img, text }) => {
  const screen = useWindowSize();
  const paragraph = screen.width < 576 ? `${text.slice(0, 50)}...` : text;
  const bgImg = {
    backgroundImage: `url('${img}')`,
    backgroundRepeat: 'no-repeat',
    width: '100%',
  };

  return (
    <div className={style.card}>
      <div className={style.wrapperImg} style={bgImg}></div>
      <div>
        <p>{paragraph}</p>
        <Button background="#000" color="#fff">
          Read more
        </Button>
      </div>
    </div>
  );
};

export default Card;
