import { RefObject, useEffect } from 'react';

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  setState: () => void
) => {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      if (!ref.current.contains(e.target as Node)) {
        setState();
      }
    };
    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, [ref, setState]);
};
