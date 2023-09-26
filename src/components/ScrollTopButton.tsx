'use client';
import useScrollPosition from '@/hooks/useScrollPosition';
import { DoubleArrowUpIcon } from '@radix-ui/react-icons';
import { useEffect } from 'react';

const ScrollTopButton = () => {
  const scrollPosition = useScrollPosition();

  // Function to scroll to the top of the page.
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

  useEffect(() => {
    // Function to update the background gradient based on scroll position.
    const updateBackgroundGradient = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      const degrees = scrollPercent * 360;

      const bg = document.getElementsByClassName(
        'bg'
      ) as HTMLCollectionOf<HTMLElement>;

      // Apply the gradient background to the body element.
      bg[0].style.background = `conic-gradient(currentColor ${degrees}deg, transparent ${degrees}deg)`;
    };

    // Add a scroll event listener to update the background gradient on scroll.
    window.addEventListener('scroll', updateBackgroundGradient);

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener('scroll', updateBackgroundGradient);
    };
  }, []);

  return (
    <div
      className={`fixed right-6 bottom-6 transition z-10 rounded-full bg-white dark:bg-black ${
        scrollPosition > 64 ? 'visible shadow' : 'invisible'
      }`}
    >
      <div className='bg text-primary rounded-full p-1 '>
        <div className='bg-white dark:bg-black rounded-full'>
          <button
            className='w-10 h-10 flex justify-center items-center rounded-full text-black dark:text-white '
            onClick={handleScrollToTop}
          >
            <DoubleArrowUpIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScrollTopButton;
