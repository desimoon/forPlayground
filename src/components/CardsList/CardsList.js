import React from 'react';
import Card from 'components/Card/Card';
import card1 from 'Assets/Images/card-play-harder.png';
import card2 from 'Assets/Images/card-simplicity.png';
import card3 from 'Assets/Images/card-innovation.png';
import style from 'components/CardsList/CardsList.module.scss';

const cards = [
  {
    img: card1,
    title: 'play harder',
    text:
      'Aenean mollis dolor a mattis viverra.In hac habitasse platea dictumst.Curabitur tempus dui tortor, et bibendum lacus eleifend ut.',
  },
  {
    img: card2,
    title: 'simplicity',
    text:
      'Donec vitae augue tellus. Proin et urna sit amet metus fermentum dapibus non quis urna.',
  },
  {
    img: card3,
    title: 'innovation',
    text:
      'Suspendisse vehicula, lectus sed molestie aliquam, arcu neque gravida lacus.',
  },
];

const CardsList = () => {
  return (
    <div className={style.cards}>
      {cards.map((card, ind) => {
        return (
          <Card
            key={`card${ind + 1}`}
            img={card.img}
            title={card.title}
            text={card.text}
          />
        );
      })}
    </div>
  );
};

export default CardsList;
