/**
 * Centralized Image Path Configuration
 *
 * This file manages all image paths for the application.
 * Benefits:
 * - Single source of truth for all images
 * - Easy to update image paths
 * - Type-safe image references
 * - Support for multiple formats (WebP with fallbacks)
 */

// Base paths
const IMAGES_BASE = '/images';

// Image paths organized by category
export const IMAGES = {
  // Product Images
  products: {
    wd50t: {
      main: `${IMAGES_BASE}/products/wd50t-thermal-series.jpg`,
      webp: `${IMAGES_BASE}/products/wd50t-thermal-series.webp`,
      techDrawing: `${IMAGES_BASE}/products/wd50t-technical-drawing.jpg`,
      alt: 'WD50T Thermal Series - High-performance windows and doors'
    },
    fs50: {
      main: `${IMAGES_BASE}/products/fs50-structural-glazing.jpg`,
      webp: `${IMAGES_BASE}/products/fs50-structural-glazing.webp`,
      alt: 'FS50 Structural Glazing - Curtain wall system for high-rise buildings'
    },
    s32: {
      main: `${IMAGES_BASE}/products/s32-heavy-duty-slider.jpg`,
      webp: `${IMAGES_BASE}/products/s32-heavy-duty-slider.webp`,
      alt: 'S32 Heavy Duty Slider - Large span sliding door system'
    },
    of80: {
      main: `${IMAGES_BASE}/products/of80-modular-partition.jpg`,
      webp: `${IMAGES_BASE}/products/of80-modular-partition.webp`,
      alt: 'OF80 Modular Partition - Demountable office partition system'
    }
  },

  // Project Images
  projects: {
    ekoAtlantic: {
      main: `${IMAGES_BASE}/projects/eko-atlantic-towers.jpg`,
      webp: `${IMAGES_BASE}/projects/eko-atlantic-towers.webp`,
      alt: 'Eko Atlantic Towers - Curtain Wall Installation'
    },
    lekkiVilla: {
      main: `${IMAGES_BASE}/projects/lekki-luxury-villa.jpg`,
      webp: `${IMAGES_BASE}/projects/lekki-luxury-villa.webp`,
      alt: 'Lekki Luxury Villa - Thermal Windows Installation'
    },
    victoriaIsland: {
      main: `${IMAGES_BASE}/projects/victoria-island-office.jpg`,
      webp: `${IMAGES_BASE}/projects/victoria-island-office.webp`,
      alt: 'Victoria Island Office - Commercial Glazing Project'
    }
  },

  // Hero Section
  hero: {
    main: `${IMAGES_BASE}/hero/hero-background.jpg`,
    webp: `${IMAGES_BASE}/hero/hero-background.webp`,
    alt: 'Zonca Global Investment - Premium Aluminium Solutions'
  },

  // Team/Leadership
  team: {
    emmanuelSenameh: {
      main: `${IMAGES_BASE}/team/emmanuel-senameh.jpg`,
      webp: `${IMAGES_BASE}/team/emmanuel-senameh.webp`,
      alt: 'Emmanuel Senameh - Founder & CEO of Zonca Global Investment Ltd'
    }
  },

  // Patterns & Overlays
  patterns: {
    graphy: `${IMAGES_BASE}/patterns/graphy.png`
  }
} as const;

// Helper function to get image with WebP support
export const getImageSrc = (imagePath: { main: string; webp?: string }) => {
  // Returns WebP if available and supported, otherwise falls back to main
  return imagePath.webp || imagePath.main;
};

// Fallback images (temporary placeholders during development)
export const FALLBACK_IMAGES = {
  products: {
    wd50t: 'https://images.unsplash.com/photo-1600566752355-35792bedcfe1?auto=format&fit=crop&q=80&w=800',
    fs50: 'https://images.unsplash.com/photo-1506434304575-afbb92660c28?auto=format&fit=crop&q=80&w=800',
    s32: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800',
    of80: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
    wd50tTech: 'https://images.unsplash.com/photo-1626282902353-8d070b42f10b?auto=format&fit=crop&q=80&w=800&blur=2'
  },
  projects: {
    ekoAtlantic: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    lekkiVilla: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
    victoriaIsland: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  },
  hero: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600',
  team: {
    emmanuelSenameh: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800'
  },
  patterns: {
    graphy: 'https://www.transparenttextures.com/patterns/graphy.png'
  }
} as const;
