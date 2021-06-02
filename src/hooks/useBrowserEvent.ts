import { useEffect, useRef } from 'react';

export function useBrowserEvent<T extends keyof WindowEventMap>(
  type: T,
  callback: (ev: WindowEventMap[T]) => any,
  options?: boolean | AddEventListenerOptions,
) {
  const cbRef = useRef(callback);
  cbRef.current = callback;

  useEffect(() => {
    function el(ev: WindowEventMap[T]) {
      cbRef.current(ev);
    }

    window.addEventListener(type, el, options);
    return () => window.removeEventListener(type, el, options);
  }, [type, options]);
}
