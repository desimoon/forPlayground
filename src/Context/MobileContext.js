import React, { useState, createContext } from 'react';

export const MobileContext = createContext();

const MobileContextProvider = props => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const value = {
    isOpenMenu,
    setIsOpenMenu,
  };
  return (
    <MobileContext.Provider value={value}>
      {props.children}
    </MobileContext.Provider>
  );
};
export default MobileContextProvider;
