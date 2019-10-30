import React, { useState, createContext } from 'react';

export const ScrollContext = createContext();

const ScrollContextProvider = props => {
  const [clickedLink, setClickedLink] = useState('');
  const [tresholdNav, setTresholdNav] = useState(null);
  return (
    <ScrollContext.Provider
      value={{ clickedLink, setClickedLink, tresholdNav, setTresholdNav }}
    >
      {props.children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
