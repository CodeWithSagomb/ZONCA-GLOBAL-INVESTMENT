import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out' | 'slide-up' | 'slide-down';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.6,
  className = '',
  threshold = 0.1,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold, triggerOnce: true });

  const getAnimationClass = () => {
    const baseClass = 'transition-all';

    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseClass} opacity-0 translate-y-10`;
        case 'fade-down':
          return `${baseClass} opacity-0 -translate-y-10`;
        case 'fade-left':
          return `${baseClass} opacity-0 translate-x-10`;
        case 'fade-right':
          return `${baseClass} opacity-0 -translate-x-10`;
        case 'zoom-in':
          return `${baseClass} opacity-0 scale-95`;
        case 'zoom-out':
          return `${baseClass} opacity-0 scale-105`;
        case 'slide-up':
          return `${baseClass} translate-y-20`;
        case 'slide-down':
          return `${baseClass} -translate-y-20`;
        default:
          return `${baseClass} opacity-0`;
      }
    }

    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
};
