import { useEffect } from 'react';
import { useState } from 'react';

export const useForceRerender = (enabled: boolean, interval = 1000) => {
  const [_, update] = useState(0);
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const updateTime = () => {
      update(currentTime => currentTime + 1);
    };

    const intervalId = setInterval(updateTime, interval);

    return () => clearInterval(intervalId);
  }, [enabled, interval]);
};
