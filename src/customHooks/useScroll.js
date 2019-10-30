import { useState, useEffect, useMemo } from 'react';

const useScroll = limit => {
  const isClient = typeof window === 'object';

  function getPageYOffset() {
    return isClient ? window.pageYOffset : undefined;
  }

  const [isTresholdExceeded, setIsTresholdExceeded] = useState(getPageYOffset);

  const position = useMemo(() => {
    return isTresholdExceeded;
  }, [isTresholdExceeded]);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleScroll() {
      setIsTresholdExceeded(getPageYOffset() > limit);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }); // [] Empty array ensures that effect is only run on mount and unmount

  return position;
};

export default useScroll;
