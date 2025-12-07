import { CompanyInfo, Testimonial, Project, FAQ, NavItem } from '../types';

export const COMPANY_INFO: CompanyInfo = {
  name: 'Zonca Global Investment Ltd',
  phone: '+234 805 540 8624',
  email: 'zoncaglobalinvestment@gmail.com',
  address: '48 Lambe Iluyomade Street, Okota, Lagos, Nigeria',
  hours: 'Mon - Sat: 08:00 - 18:00',
  whatsapp: '+2348055408624',
  social: {
    linkedin: 'https://linkedin.com/company/zonca-global',
    instagram: 'https://instagram.com/zoncaglobal'
  }
};

export const CERTIFICATIONS = [
  'ISO 9001:2015',
  'SONCAP Certified',
  'Qualicoat Standards'
];

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'catalog', label: 'Products' },
  { id: 'services', label: 'Services' },
  { id: 'founder', label: 'Leadership' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Zonca's engineering team solved a complex wind-load challenge for our high-rise project in Eko Atlantic. Their precision is unmatched.",
    author: "Engr. Tunde Bakare",
    role: "Project Director, Eko Atlantic",
    bg: "bg-white"
  },
  {
    quote: "The quality of the extrusion and the finish on the profiles is European standard. We don't need to import anymore.",
    author: "Sarah Johnson",
    role: "Principal Architect, SJ Designs",
    bg: "bg-slate-900 text-white"
  },
  {
    quote: "Professional installation team and excellent after-sales support. Highly recommended for commercial facades.",
    author: "David Okon",
    role: "CEO, BuildRite Construction",
    bg: "bg-white"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Eko Atlantic Towers",
    system: "Curtain Wall",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Lekki Luxury Villa",
    system: "Thermal Windows",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Victoria Island Office",
    system: "Office Glazing",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  },
];

export const FAQS: FAQ[] = [
  {
    q: "Do you manufacture your own profiles?",
    a: "Yes, we have our own extrusion plant with state-of-the-art die correction facilities to ensure precision tolerances."
  },
  {
    q: "What warranty do you offer on finishes?",
    a: "We offer a 10-year warranty on powder coating and anodizing against peeling, cracking, or significant fading."
  },
  {
    q: "Can you handle custom designs?",
    a: "Absolutely. Our in-house engineering team works with architects to create bespoke dies for unique project requirements."
  },
  {
    q: "Do you install outside of Lagos?",
    a: "Yes, Zonca Global Investment operates nationwide across Nigeria and neighboring West African countries."
  }
];

export const PARTNER_COMPANIES = [
  "JULIUS BERGER",
  "CAPPA & D'ALBERTO",
  "ELALAN",
  "ITB NIGERIA"
];
