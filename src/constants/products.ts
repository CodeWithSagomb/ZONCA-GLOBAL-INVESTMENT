import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'wd50t',
    name: 'WD50T Thermal Series',
    category: 'windows-doors',
    shortDesc: 'High-performance thermal break system optimized for energy efficiency in tropical climates.',
    image: '/images/products/wd50t-thermal-series.jpg',
    techDrawing: '/images/products/wd50t-technical-drawing.jpg',
    specs: [
      { label: 'Alloy', value: '6063-T6' },
      { label: 'Frame Depth', value: '50 mm' },
      { label: 'Insulation', value: 'Polyamide Strip 24mm' },
      { label: 'Glass Capacity', value: 'Double Glazed (24mm)' },
    ],
    features: [
      'Euro-groove standard hardware',
      'Dual-color extrusion capability',
      'High wind-load resistance',
      'Acoustic insulation up to 40dB'
    ]
  },
  {
    id: 'fs50',
    name: 'FS50 Structural Glazing',
    category: 'facades',
    shortDesc: 'Stick curtain wall system for high-rise applications offering seamless glass aesthetics.',
    image: '/images/products/fs50-structural-glazing.jpg',
    specs: [
      { label: 'Mullion Face', value: '50 mm' },
      { label: 'Inertia (Ix)', value: 'Up to 1200 cm4' },
      { label: 'Glazing', value: 'Structural Silicone / Cap' },
      { label: 'Max Height', value: '6000mm (single span)' },
    ],
    features: [
      'Integrated water drainage',
      'Earthquake resistant design',
      'Supports heavy glass weights',
      'Rapid installation brackets'
    ]
  },
  {
    id: 's32',
    name: 'S32 Heavy Duty Slider',
    category: 'sliders',
    shortDesc: 'Robust sliding system designed for large span openings and penthouse terraces.',
    image: '/images/products/s32-heavy-duty-slider.jpg',
    specs: [
      { label: 'Track Depth', value: '120 mm (3-Track)' },
      { label: 'Sash Height', value: 'Up to 3.0m' },
      { label: 'Rollers', value: 'Stainless Steel (300kg)' },
    ],
    features: [
      'Lift-and-slide mechanism available',
      'Embedded bottom track option',
      'Interlocking reinforced mullion'
    ]
  },
  {
    id: 'of80',
    name: 'OF80 Modular Partition',
    category: 'office',
    shortDesc: 'Demountable aluminum partition system for flexible commercial workspaces.',
    image: '/images/products/of80-modular-partition.jpg',
    specs: [
      { label: 'Profile Width', value: '80 mm' },
      { label: 'Infill', value: 'Glass / Melamine / Fabric' },
      { label: 'Door Frames', value: 'Integrated Aluminum' },
    ],
    features: [
      'Concealed wiring channels',
      'Quick assembly clip system',
      'Single or double glazing'
    ]
  }
];
