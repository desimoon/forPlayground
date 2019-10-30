import { useState, useEffect, useMemo } from 'react';

const useWindowSize = () => {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowWidth, setWindowWidth] = useState(getSize().width);
  const [windowHeight, setWindowHeight] = useState(getSize().height);
  const [isMobile, setIsMobile] = useState(getSize().width < 768);

  const size = useMemo(() => {
    return { windowWidth, windowHeight, isMobile };
  }, [windowWidth, windowHeight, isMobile]);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      const { width, height } = getSize();
      setWindowWidth(width);
      setWindowHeight(height);
      setIsMobile(width < 768);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }); // [] Empty array ensures that effect is only run on mount and unmount

  return {
    width: size.windowWidth,
    height: size.windowHeight,
    isMobile: size.isMobile,
  };
};

export default useWindowSize;
