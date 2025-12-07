import { useEffect, useState, useRef } from 'react';

interface UseCountAnimationOptions {
  end: number;
  duration?: number;
  start?: number;
  enableOnView?: boolean;
}

export const useCountAnimation = ({
  end,
  duration = 2000,
  start = 0,
  enableOnView = true,
}: UseCountAnimationOptions) => {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enableOnView || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [hasAnimated, enableOnView]);

  const animateCount = () => {
    const startTime = Date.now();
    const range = end - start;

    const updateCount = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + range * easeOutQuart);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  };

  return { count, ref: countRef };
};
