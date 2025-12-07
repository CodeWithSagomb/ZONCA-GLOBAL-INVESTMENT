import React, { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  pageKey: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children, pageKey }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Reset visibility
    setIsVisible(false);

    // Trigger entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [pageKey]);

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
};
