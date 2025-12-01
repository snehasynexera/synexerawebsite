import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export const useLocomotiveScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    scrollRef.current = scroll;

    // Update scroll on window resize
    const handleResize = () => {
      scroll.update();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      scroll.destroy();
    };
  }, []);

  return scrollRef.current;
};
