import { useState, useEffect, useMemo } from 'react';

const useWindowSize = () => {
  function getSize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    let breakpoint = 'xs';
    switch (true) {
      case w >= 576 && w < 768:
        breakpoint = 'sm';
        break;
      case w >= 768 && w < 992:
        breakpoint = 'md';
        break;
      case w >= 992 && w < 1200:
        breakpoint = 'lg';
        break;
      case w >= 1200:
        breakpoint = 'xl';
        break;
      default:
    }
    return {
      width: breakpoint,
      height: h,
    };
  }

  const [gridBreakpoint, setGridBreakpoint] = useState(getSize().width);
  const [windowHeight, setWindowHeight] = useState(getSize().height);

  const size = useMemo(() => {
    return { gridBreakpoint, windowHeight };
  }, [gridBreakpoint, windowHeight]);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getSize();
      setGridBreakpoint(width);
      setWindowHeight(height);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }); // [] Empty array ensures that effect is only run on mount and unmount

  return {
    width: size.gridBreakpoint,
    height: size.windowHeight,
  };
};

export default useWindowSize;
