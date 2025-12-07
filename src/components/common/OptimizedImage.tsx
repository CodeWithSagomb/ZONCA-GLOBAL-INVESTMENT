import React from 'react';

/**
 * OptimizedImage Component
 *
 * A high-performance image component with:
 * - WebP support with JPG fallback
 * - Lazy loading
 * - Responsive sizing
 * - Error handling with fallback
 *
 * Usage:
 *   <OptimizedImage
 *     src="/images/products/wd50t-thermal-series.jpg"
 *     webp="/images/products/wd50t-thermal-series.webp"
 *     alt="WD50T Thermal Series"
 *     className="w-full h-64 object-cover"
 *   />
 */

interface OptimizedImageProps {
  /** Main image source (JPG/PNG) */
  src: string;
  /** WebP version of the image (optional, recommended) */
  webp?: string;
  /** Alternative text for accessibility */
  alt: string;
  /** CSS classes */
  className?: string;
  /** Fallback image if main image fails to load */
  fallback?: string;
  /** Loading strategy: "lazy" (default) or "eager" */
  loading?: 'lazy' | 'eager';
  /** Optional width attribute */
  width?: number;
  /** Optional height attribute */
  height?: number;
  /** Optional onClick handler */
  onClick?: () => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  webp,
  alt,
  className = '',
  fallback,
  loading = 'lazy',
  width,
  height,
  onClick
}) => {
  const [imageError, setImageError] = React.useState(false);
  const [currentSrc, setCurrentSrc] = React.useState(src);

  // Handle image load error
  const handleError = () => {
    if (!imageError && fallback) {
      console.warn(`Failed to load image: ${currentSrc}, using fallback`);
      setCurrentSrc(fallback);
      setImageError(true);
    } else {
      console.error(`Failed to load image: ${currentSrc}`);
      setImageError(true);
    }
  };

  // Reset error state when src changes
  React.useEffect(() => {
    setImageError(false);
    setCurrentSrc(src);
  }, [src]);

  return (
    <picture onClick={onClick} className={onClick ? 'cursor-pointer' : ''}>
      {/* WebP version for modern browsers */}
      {webp && !imageError && (
        <source srcSet={webp} type="image/webp" />
      )}

      {/* Fallback JPG/PNG */}
      <img
        src={currentSrc}
        alt={alt}
        className={className}
        loading={loading}
        width={width}
        height={height}
        onError={handleError}
      />
    </picture>
  );
};

/**
 * Helper hook to check WebP support
 * (Optional - modern browsers all support WebP now)
 */
export const useWebPSupport = (): boolean => {
  const [supportsWebP, setSupportsWebP] = React.useState(true);

  React.useEffect(() => {
    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas');
      if (canvas.getContext && canvas.getContext('2d')) {
        // Check if browser supports WebP
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      }
      return false;
    };

    setSupportsWebP(checkWebPSupport());
  }, []);

  return supportsWebP;
};
