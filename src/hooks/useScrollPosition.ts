import { useEffect, useState } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Function to update the scroll position.
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    // Add a scroll event listener to update the scroll position.
    window.addEventListener('scroll', updatePosition);

    // Initial update of scroll position.
    updatePosition();

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener('scroll', updatePosition);
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
