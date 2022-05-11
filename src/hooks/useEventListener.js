import { useEffect } from 'react';

const useEventListener = (eventName, handler, element = window) => {
  useEffect(() => {
    const eventListener = (e) => handler(e);

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  });
};

export { useEventListener };
