import React, { useState, useEffect, createContext } from 'react';
import useWindowSize from 'customHooks/useWindowSize';

export const MobileContext = createContext();

const MobileContextProvider = props => {
  const screen = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [breakpoint, setBreakpoint] = useState({
    value: screen.width,
    isMobile: ['xs', 'sm'].includes(screen.width),
  });

  useEffect(() => {
    setBreakpoint({
      value: screen.width,
      isMobile: ['xs', 'sm'].includes(screen.width),
    });
  }, [screen.width]);

  const value = {
    isMenuOpen,
    setIsMenuOpen,
    breakpoint,
    setBreakpoint,
  };

  return (
    <MobileContext.Provider value={value}>
      {props.children}
    </MobileContext.Provider>
  );
};
export default MobileContextProvider;
