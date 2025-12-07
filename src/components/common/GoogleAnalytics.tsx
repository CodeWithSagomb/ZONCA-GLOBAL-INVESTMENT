import { useEffect } from 'react';
import ReactGA from 'react-ga4';

// Google Analytics 4 Measurement ID
// TO CONFIGURE: Replace with your actual GA4 Measurement ID (format: G-XXXXXXXXXX)
// You can get this from Google Analytics Admin > Data Streams > Web > Measurement ID
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

export const GoogleAnalytics = () => {
  useEffect(() => {
    // Only initialize GA if a measurement ID is provided
    if (GA_MEASUREMENT_ID) {
      try {
        ReactGA.initialize(GA_MEASUREMENT_ID, {
          gaOptions: {
            siteSpeedSampleRate: 100, // Track site speed for all users
          },
          gtagOptions: {
            send_page_view: true, // Automatically send page views
          },
        });

        // Send initial pageview
        ReactGA.send({
          hitType: 'pageview',
          page: window.location.pathname + window.location.search,
        });

        console.log('Google Analytics initialized successfully');
      } catch (error) {
        console.error('Error initializing Google Analytics:', error);
      }
    } else {
      console.warn(
        'Google Analytics not initialized: No measurement ID provided. ' +
        'Set VITE_GA_MEASUREMENT_ID in your .env file.'
      );
    }
  }, []);

  return null; // This component doesn't render anything
};

// Utility function to track custom events
export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
) => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  }
};

// Track page views manually (for SPA navigation)
export const trackPageView = (path: string) => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.send({
      hitType: 'pageview',
      page: path,
    });
  }
};

// Example usage:
// trackEvent('Contact', 'Form Submit', 'Contact Form');
// trackEvent('Product', 'View Details', 'WD50T Thermal Series');
// trackPageView('/catalog');
