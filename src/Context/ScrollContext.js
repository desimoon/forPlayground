import React, { useState, createContext } from 'react';

export const ScrollContext = createContext();

const ScrollContextProvider = props => {
  const [clickedLink, setClickedLink] = useState('');
  return (
    <ScrollContext.Provider value={{ clickedLink, setClickedLink }}>
      {props.children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
