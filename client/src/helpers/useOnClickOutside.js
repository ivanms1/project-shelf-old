import { useEffect } from 'react';

function useOnClickOutside(ref, setVisibility) {
  useEffect(() => {
    const listener = (event) => {
      if (ref?.current?.contains(event?.target)) {
        return;
      }
      setVisibility(false);
    };

    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, setVisibility]);
}

export default useOnClickOutside;
