import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
//import Captioned from 'react-awesome-slider/src/components/hoc/captioned-images/hoc';
import 'react-awesome-slider/dist/styles.css';
import slide1 from 'Assets/Images/slide-hello.jpg';
import slide2 from 'Assets/Images/slide-play.jpg';
import slide3 from 'Assets/Images/slide-circle.jpg';

const Carosuel = () => {
  return (
    <AwesomeSlider bullets={false}>
      <div data-src={slide1}>
        <div className="caption">
          <h2 className="caption-title-slide">lorem ipsum 1</h2>
          <p className="caption-content-slide">
            Consectetur adipiscing elit. Nulla condimentum tortor sem, in semper
            nisl bibendum eu.
          </p>
        </div>
      </div>
      <div data-src={slide2}>
        <h2 className="caption-title-slide">lorem ipsum 2</h2>
        <p className="caption-content-slide">
          Consectetur adipiscing elit. Nulla condimentum tortor sem, in semper
          nisl bibendum eu.
        </p>
      </div>
      <div data-src={slide3}>
        <h2 className="caption-title-slide">lorem ipsum 3</h2>
        <p className="caption-content-slide">
          Consectetur adipiscing elit. Nulla condimentum tortor sem, in semper
          nisl bibendum eu.
        </p>
      </div>
    </AwesomeSlider>
  );
};

export default Carosuel;
