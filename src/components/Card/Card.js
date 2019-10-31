import React, { useContext } from 'react';
import { MobileContext } from 'Context/MobileContext';
import { Button } from 'components/';
import style from './Card.module.scss';

const Card = ({ img, text }) => {
  const { breakpoint } = useContext(MobileContext);
  const paragraph =
    breakpoint.value === 'xs' ? `${text.slice(0, 50)}...` : text;
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
