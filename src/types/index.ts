// Types pour l'application Zonca Global Investment

export type Category = 'all' | 'windows-doors' | 'facades' | 'sliders' | 'office';

export interface Product {
  id: string;
  name: string;
  category: Category;
  shortDesc: string;
  image: string;
  specs: { label: string; value: string }[];
  features: string[];
  techDrawing?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  bg: string;
}

export interface Project {
  title: string;
  system: string;
  img: string;
  description?: string;
  client?: string;
  location?: string;
  year?: number;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  phone?: string;
  projectType: string;
  message: string;
}

export type ViewType = 'home' | 'catalog' | 'services' | 'founder' | 'projects' | 'contact' | 'product-detail';

export interface NavItem {
  id: ViewType;
  label: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface SocialLinks {
  linkedin: string;
  instagram: string;
}

export interface CompanyInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  whatsapp: string;
  social: SocialLinks;
}
