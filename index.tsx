import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Menu, X, ChevronRight, Download, Phone, Mail, MapPin, 
  Check, Globe, ArrowRight, Layers, Ruler, Hammer, HardHat,
  Building2, Factory, Home as HomeIcon, FileText, ChevronDown,
  Clock, Award, Users, Quote, HelpCircle, Plus, Minus, Briefcase, Map
} from 'lucide-react';

// --- Types & Mock Data ---

type Category = 'all' | 'windows-doors' | 'facades' | 'sliders' | 'office';

interface Product {
  id: string;
  name: string;
  category: Category;
  shortDesc: string;
  image: string;
  specs: { label: string; value: string }[];
  features: string[];
  techDrawing?: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'wd50t',
    name: 'WD50T Thermal Series',
    category: 'windows-doors',
    shortDesc: 'High-performance thermal break system optimized for energy efficiency in tropical climates.',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfe1?auto=format&fit=crop&q=80&w=800', 
    techDrawing: 'https://images.unsplash.com/photo-1626282902353-8d070b42f10b?auto=format&fit=crop&q=80&w=800&blur=2',
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
    image: 'https://images.unsplash.com/photo-1506434304575-afbb92660c28?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
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

// --- Sub-Components ---

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase tracking-tight">{title}</h2>
    {subtitle && (
      <div className="flex flex-col items-center mt-4">
        <div className="w-16 h-1 bg-zonca-red mb-4"></div>
        <p className="text-gray-500 max-w-2xl text-lg">{subtitle}</p>
      </div>
    )}
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc }: any) => (
  <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-zonca-red transition-all duration-300 group">
    <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-zonca-red transition-colors">
      <Icon className="text-zonca-red group-hover:text-white" size={28} />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-zonca-red transition-colors">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
  </div>
);

// --- Brand Components ---

const ZoncaLogo = ({ className = "h-12", dark = false }: { className?: string, dark?: boolean }) => {
  const textColor = dark ? "#FFFFFF" : "#1A1A1A";
  const subTextColor = dark ? "#9CA3AF" : "#6B7280";
  
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Symbol SVG */}
      <svg width="45" height="45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
         {/* Red Top Bar */}
         <rect x="5" y="15" width="90" height="15" fill="#8B0000" />
         {/* The Z */}
         <path d="M5 40H95V55L35 85H95V100H5V85L65 55H5V40Z" fill={textColor} />
      </svg>
      
      {/* Text */}
      <div className="flex flex-col justify-center">
        <span className="font-extrabold text-2xl tracking-tighter leading-none" style={{ color: textColor }}>ZONCA</span>
        <span className="text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5" style={{ color: subTextColor }}>Global Investment Ltd</span>
      </div>
    </div>
  );
};

// --- Founder Profile Component ---

const FounderProfile = ({ setView }: any) => (
  <div className="bg-white min-h-screen">
    {/* Header Section */}
    <div className="bg-slate-900 text-white relative">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-20"></div>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
                <div className="flex items-center space-x-2 text-zonca-red font-bold uppercase tracking-widest mb-4">
                   <div className="h-0.5 w-8 bg-zonca-red"></div>
                   <span>Leadership</span>
                </div>
                <h1 className="text-5xl font-bold mb-4 leading-tight">Emmanuel <span className="text-gray-400">Senameh</span></h1>
                <h2 className="text-xl text-gray-300 font-light mb-8">Founder & Chief Executive Officer</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  A visionary leader with over 16 years of expertise in civil engineering, general contracting, and international trade. Emmanuel drives the strategic direction of Zonca Global with a focus on precision, quality, and cross-border innovation.
                </p>
                <div className="flex flex-wrap gap-4">
                   <div className="bg-white/10 px-4 py-2 rounded border border-white/20">
                      <span className="block text-2xl font-bold text-white">16+</span>
                      <span className="text-xs text-gray-400 uppercase">Years Experience</span>
                   </div>
                   <div className="bg-white/10 px-4 py-2 rounded border border-white/20">
                      <span className="block text-2xl font-bold text-white">5+</span>
                      <span className="text-xs text-gray-400 uppercase">Countries Served</span>
                   </div>
                </div>
             </div>
             <div className="relative">
                <div className="absolute inset-0 bg-zonca-red transform translate-x-4 translate-y-4 rounded-sm"></div>
                {/* 
                  NOTE: In a real deployment, replace the src below with the actual URL of Emmanuel's photo provided by the user.
                  Currently using a placeholder or the URL if hosted. 
                  Since I cannot upload files, I am simulating the look with a high-quality placeholder 
                  that represents a CEO working on designs.
                */}
                <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800" 
                  alt="Emmanuel Senameh - CEO" 
                  className="relative w-full rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 object-cover h-[500px]"
                />
             </div>
          </div>
       </div>
    </div>

    {/* Experience Timeline & Details */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Biography */}
          <div className="lg:col-span-2">
             <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
               <Briefcase className="text-zonca-red mr-3" /> Professional Trajectory
             </h3>
             <div className="prose prose-lg text-gray-600">
                <p>
                  Since founding <strong>Zonca Global Investment Ltd</strong> in 2010, Emmanuel has transformed the company from a general merchant enterprise into a powerhouse of engineering and construction. His philosophy rests on a simple pillar: providing comprehensive solutions that span from the initial architectural design to the final installation of complex systems.
                </p>
                <p>
                  His expertise is not limited to Nigeria. Emmanuel has successfully managed large-scale industrial and hospitality projects across the EMEA region. Notably, he oversaw the <strong>revival of interior designs for the Ibis Hotel in Algiers</strong> and managed critical rack system projects for <strong>Hayat Kimya</strong> across their operations in Algeria, Nigeria, and Kenya.
                </p>
             </div>

             <div className="mt-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                   <Globe className="text-zonca-red mr-3" /> Global Project Footprint
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="bg-slate-50 p-6 border-l-4 border-zonca-red">
                      <h4 className="font-bold text-slate-900 mb-2">Healthcare Infrastructure</h4>
                      <p className="text-sm text-gray-600">Execution of multiple specialized projects for <strong>Multiplus Hospital</strong> in Qatar and Georgia, ensuring medical-grade standards in construction and finishing.</p>
                   </div>
                   <div className="bg-slate-50 p-6 border-l-4 border-zonca-red">
                      <h4 className="font-bold text-slate-900 mb-2">Industrial Logistics</h4>
                      <p className="text-sm text-gray-600">Management of warehouse rack systems for <strong>Sacho</strong> and industrial setups for major manufacturers, optimizing supply chain infrastructure.</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Sidebar Roles */}
          <div>
             <div className="bg-white border border-gray-200 shadow-xl p-8 sticky top-24">
                <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-gray-100 pb-2">Current Roles</h3>
                
                <div className="mb-8 group">
                   <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-800 group-hover:text-zonca-red transition-colors">CEO & Founder</h4>
                      <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">2010 - Present</span>
                   </div>
                   <p className="text-sm font-bold text-gray-500 mb-1">Zonca Global Investment Ltd</p>
                   <p className="text-xs text-gray-400">Lagos, Nigeria</p>
                   <p className="text-sm text-gray-600 mt-2">Leading operations, contracting, and strategic expansion.</p>
                </div>

                <div className="mb-8 group">
                   <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-800 group-hover:text-zonca-red transition-colors">Country Manager</h4>
                      <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">2022 - Present</span>
                   </div>
                   <p className="text-sm font-bold text-gray-500 mb-1">Neser Metal</p>
                   <p className="text-xs text-gray-400">Turkey / Africa</p>
                   <p className="text-sm text-gray-600 mt-2">Serving as the strategic bridge for the Turkey-based metal giant Neser Metal within the African market.</p>
                </div>

                <div className="bg-zonca-red text-white p-6 rounded-sm text-center">
                   <Quote className="mx-auto mb-4 opacity-50" />
                   <p className="italic text-sm mb-4">"We don't just build structures; we build relationships founded on integrity and engineering excellence."</p>
                   <p className="font-bold text-xs uppercase tracking-widest">- Emmanuel Senameh</p>
                </div>
             </div>
          </div>

       </div>
    </div>
  </div>
);

// --- New Components for Professional Polish ---

const TopBar = () => (
  <div className="bg-slate-900 text-gray-300 text-xs py-2 hidden md:block border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
       <div className="flex space-x-6">
         <span className="flex items-center hover:text-white transition cursor-pointer">
           <Phone size={12} className="mr-2 text-zonca-red"/> +234 805 540 8624
         </span>
         <span className="flex items-center hover:text-white transition cursor-pointer">
           <Mail size={12} className="mr-2 text-zonca-red"/> zoncaglobalinvestment@gmail.com
         </span>
         <span className="flex items-center">
           <Clock size={12} className="mr-2 text-zonca-red"/> Mon - Sat: 08:00 - 18:00
         </span>
       </div>
       <div className="flex space-x-4">
         <span className="hover:text-white cursor-pointer">LinkedIn</span>
         <span className="hover:text-white cursor-pointer">Instagram</span>
         <span className="text-zonca-red font-bold">ISO 9001:2015 Certified</span>
       </div>
    </div>
  </div>
);

const Stats = () => (
  <div className="bg-zonca-red py-16 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
        <div>
          <div className="text-4xl md:text-5xl font-bold mb-2">16+</div>
          <p className="text-sm uppercase tracking-widest opacity-80">Years Experience</p>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
          <p className="text-sm uppercase tracking-widest opacity-80">Projects Completed</p>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
          <p className="text-sm uppercase tracking-widest opacity-80">Quality Guaranteed</p>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold mb-2">50</div>
          <p className="text-sm uppercase tracking-widest opacity-80">Expert Engineers</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="py-20 bg-slate-50 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Client Success Stories" subtitle="Trusted by leading architects and developers across West Africa." />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
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
        ].map((t, i) => (
          <div key={i} className={`p-8 shadow-lg rounded-sm relative ${t.bg}`}>
            <Quote className="text-zonca-red mb-4 opacity-50" size={40} />
            <p className={`text-lg italic mb-6 leading-relaxed ${t.bg.includes('black') ? 'text-gray-300' : 'text-gray-600'}`}>"{t.quote}"</p>
            <div>
              <p className={`font-bold ${t.bg.includes('black') ? 'text-white' : 'text-slate-900'}`}>{t.author}</p>
              <p className="text-xs text-zonca-red uppercase font-bold tracking-wide">{t.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Partners/Clients Strip */}
      <div className="mt-16 pt-8 border-t border-gray-200">
         <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Proudly working with</p>
         <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
            {/* Simulated Logo Placeholders using Text */}
            <span className="text-2xl font-black text-slate-800">JULIUS BERGER</span>
            <span className="text-2xl font-black text-slate-800">CAPPA & D'ALBERTO</span>
            <span className="text-2xl font-black text-slate-800">ELALAN</span>
            <span className="text-2xl font-black text-slate-800">ITB NIGERIA</span>
         </div>
      </div>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    { q: "Do you manufacture your own profiles?", a: "Yes, we have our own extrusion plant with state-of-the-art die correction facilities to ensure precision tolerances." },
    { q: "What warranty do you offer on finishes?", a: "We offer a 10-year warranty on powder coating and anodizing against peeling, cracking, or significant fading." },
    { q: "Can you handle custom designs?", a: "Absolutely. Our in-house engineering team works with architects to create bespoke dies for unique project requirements." },
    { q: "Do you install outside of Lagos?", a: "Yes, Zonca Global Investment operates nationwide across Nigeria and neighboring West African countries." }
  ];

  return (
    <div className="max-w-3xl mx-auto my-16 px-4">
      <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
        <HelpCircle className="mr-2 text-zonca-red" /> Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-gray-200 rounded bg-white overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex justify-between items-center p-4 text-left font-bold text-slate-800 hover:bg-gray-50"
            >
              {faq.q}
              {openIndex === idx ? <Minus size={16} className="text-zonca-red"/> : <Plus size={16} className="text-gray-400"/>}
            </button>
            {openIndex === idx && (
              <div className="p-4 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main Views ---

const Navbar = ({ view, setView, lang, setLang }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'catalog', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'founder', label: 'Leadership' }, // New Item
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2 top-0' : 'bg-white border-b border-gray-100 py-4 relative'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <div className="cursor-pointer group" onClick={() => setView('home')}>
             <ZoncaLogo />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setView(item.id)}
                className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                  view === item.id ? 'text-zonca-red' : 'text-slate-600 hover:text-zonca-red'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="h-6 w-px bg-gray-300 mx-2"></div>
            <button 
              onClick={() => setView('contact')}
              className="bg-zonca-red text-white px-6 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-red-800 transition-colors shadow-lg shadow-red-900/20"
            >
              Request Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setView(item.id);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-4 text-base font-bold text-slate-800 border-b border-gray-50 hover:text-zonca-red"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ setView }: any) => {
  return (
    <div className="relative h-[650px] bg-slate-900 flex items-center">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600")' }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
        {/* Subtle Grid Overlay for "Engineering" feel */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-block bg-zonca-red text-white text-xs font-bold px-3 py-1 mb-6 uppercase tracking-widest flex items-center w-fit">
            <Award size={14} className="mr-2"/> Premium Aluminium Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Precision <span className="text-gray-400">Engineering.</span><br/>
            Superior <span className="text-gray-400">Execution.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
            Your partner for high-performance facades, custom aluminium extrusion, and architectural systems in West Africa. Engineered for durability, designed for aesthetics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setView('catalog')}
              className="px-8 py-4 bg-white text-slate-900 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors"
            >
              View Our Products
            </button>
            <button 
              onClick={() => setView('contact')}
              className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Start a Project <ChevronRight className="ml-2" size={18}/>
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

const Capabilities = () => (
  <div className="bg-slate-50 py-20 border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle 
        title="Our Core Capabilities" 
        subtitle="We deliver end-to-end aluminium solutions, from technical design to on-site installation."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={Ruler}
          title="Design & Engineering"
          desc="Our in-house team uses CAD/CAM technology to design bespoke profiles and calculate structural loads for high-rise facades."
        />
        <FeatureCard 
          icon={Factory}
          title="Precision Fabrication"
          desc="State-of-the-art CNC machining centers ensure that every joint, cut, and assembly meets strict European tolerances."
        />
        <FeatureCard 
          icon={HardHat}
          title="Professional Installation"
          desc="Our certified installation teams ensure that systems are fitted correctly for maximum thermal performance and longevity."
        />
      </div>
    </div>
  </div>
);

const Markets = () => (
  <div className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tight mb-6">Markets We Serve</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Zonca Global Investment isn't just a supplier; we are a strategic partner for diverse sectors. We understand the unique requirements of each industry.
          </p>
          
          <div className="space-y-6">
            {[
              { title: "Residential", desc: "Luxury villas and estates requiring high thermal comfort and aesthetics.", icon: HomeIcon },
              { title: "Commercial", desc: "Office towers, malls, and hotels needing structural glazing and durability.", icon: Building2 },
              { title: "Industrial", desc: "Warehouses and factories requiring heavy-duty functional installations.", icon: Hammer },
            ].map((market, idx) => (
              <div key={idx} className="flex group">
                <div className="mr-6">
                  <div className="w-12 h-12 bg-slate-100 flex items-center justify-center rounded group-hover:bg-zonca-red transition-colors">
                    <market.icon className="text-slate-700 group-hover:text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{market.title}</h4>
                  <p className="text-gray-500 text-sm mt-1">{market.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
           <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover rounded shadow-lg" alt="Residential" />
           <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover rounded shadow-lg mt-8" alt="Commercial" />
        </div>
      </div>
    </div>
  </div>
);

const CatalogPreview = ({ setProduct, setView }: any) => {
  return (
    <div className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-700 pb-4">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white">Featured Systems</h2>
            <p className="text-gray-400 mt-2">Browse our technical catalog of standard and custom profiles.</p>
          </div>
          <button 
             onClick={() => setView('catalog')}
             className="mt-4 md:mt-0 text-zonca-red hover:text-white font-bold uppercase tracking-wider flex items-center transition-colors">
            View All Series <ArrowRight className="ml-2" size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id}
              onClick={() => { setProduct(product); setView('product-detail'); window.scrollTo(0,0); }}
              className="group bg-slate-800 border border-slate-700 hover:border-zonca-red cursor-pointer transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={product.image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" alt={product.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-3 left-3">
                   <span className="text-xs font-bold bg-zonca-red px-2 py-0.5 rounded text-white uppercase">{product.category}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zonca-red transition-colors">{product.name}</h3>
                <p className="text-xs text-gray-400 line-clamp-2 mb-4 font-mono">{product.shortDesc}</p>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center group-hover:text-white">
                   View Specs <ChevronRight size={12} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = ({ product, setView }: { product: Product, setView: any }) => {
  if (!product) return null;

  return (
    <div className="bg-white min-h-screen">
      {/* Industrial Header */}
      <div className="bg-slate-100 border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center text-sm text-gray-500 mb-6">
              <span className="cursor-pointer hover:text-zonca-red" onClick={() => setView('home')}>Home</span>
              <ChevronRight size={14} className="mx-2"/>
              <span className="cursor-pointer hover:text-zonca-red" onClick={() => setView('catalog')}>Catalog</span>
              <ChevronRight size={14} className="mx-2"/>
              <span className="font-bold text-slate-900">{product.name}</span>
           </div>
           
           <div className="flex flex-col md:flex-row justify-between items-start">
             <div>
               <h1 className="text-4xl font-bold text-slate-900 uppercase tracking-tight mb-2">{product.name}</h1>
               <p className="text-lg text-gray-600 max-w-2xl">{product.shortDesc}</p>
             </div>
             <button 
                onClick={() => setView('contact')}
                className="mt-6 md:mt-0 bg-zonca-red text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-red-800 shadow-lg flex items-center">
               <FileText className="mr-2" size={18} /> Request Data Sheet
             </button>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           {/* Left Column: Visuals */}
           <div className="lg:col-span-7 space-y-8">
              <img src={product.image} className="w-full rounded-sm shadow-md border border-gray-100" alt={product.name} />
              
              {/* Technical Drawing Area */}
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-sm">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-gray-300 pb-2">Profile Section</h3>
                <div className="aspect-[2/1] bg-white border border-gray-300 flex items-center justify-center relative overflow-hidden">
                   <img src={product.techDrawing} className="w-full h-full object-cover mix-blend-multiply opacity-75 grayscale contrast-125" alt="Tech Drawing" />
                   <div className="absolute bottom-2 right-2 text-[10px] font-mono text-gray-400 border p-1">DWG-04-22</div>
                </div>
              </div>
           </div>

           {/* Right Column: Data */}
           <div className="lg:col-span-5">
              <div className="bg-white border border-gray-200 shadow-xl p-8 sticky top-24">
                 <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                    <Ruler className="mr-2 text-zonca-red" /> Specifications
                 </h3>
                 
                 <div className="divide-y divide-gray-100 border-t border-b border-gray-100 mb-8">
                    {product.specs.map((s, i) => (
                      <div key={i} className="py-3 flex justify-between text-sm">
                        <span className="text-gray-500 font-medium">{s.label}</span>
                        <span className="text-slate-900 font-bold font-mono">{s.value}</span>
                      </div>
                    ))}
                 </div>

                 <h3 className="text-lg font-bold text-slate-900 mb-4">System Advantages</h3>
                 <ul className="space-y-3 mb-8">
                   {product.features.map((f, i) => (
                     <li key={i} className="flex items-start text-sm text-gray-700">
                       <Check size={16} className="text-green-600 mr-3 mt-0.5 shrink-0" />
                       {f}
                     </li>
                   ))}
                 </ul>
                 
                 <div className="bg-slate-100 p-4 text-center">
                   <p className="text-xs text-gray-500 mb-3">Need customization? We offer bespoke extrusion services.</p>
                   <button onClick={() => setView('contact')} className="text-zonca-red font-bold text-sm underline uppercase tracking-wide">Contact Engineering Team</button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- Contact Form (RFQ Style) ---

const Contact = () => (
  <div className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 uppercase">Request For Quote</h2>
        <p className="text-gray-500 mt-2">Please provide project details. Our estimation team will respond within 24 hours.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Info Column */}
        <div className="lg:col-span-1 bg-slate-900 text-white p-10 flex flex-col justify-between h-full">
           <div>
             <h3 className="text-xl font-bold mb-8 text-zonca-red">Contact Information</h3>
             <div className="space-y-8">
               <div className="flex">
                 <MapPin className="text-gray-400 mr-4 shrink-0" />
                 <div>
                   <p className="font-bold text-sm uppercase text-gray-400 mb-1">Headquarters / Factory</p>
                   <p className="leading-relaxed">48 Lambe Iluyomade Street,<br/>Okota, Lagos, Nigeria</p>
                 </div>
               </div>
               <div className="flex">
                 <Phone className="text-gray-400 mr-4 shrink-0" />
                 <div>
                   <p className="font-bold text-sm uppercase text-gray-400 mb-1">Phone</p>
                   <p>+234 805 540 8624</p>
                 </div>
               </div>
               <div className="flex">
                 <Mail className="text-gray-400 mr-4 shrink-0" />
                 <div>
                   <p className="font-bold text-sm uppercase text-gray-400 mb-1">Email</p>
                   <p>zoncaglobalinvestment@gmail.com</p>
                 </div>
               </div>
             </div>
           </div>
           <div className="mt-12">
             <p className="text-xs text-gray-500">Operating Hours: Mon-Sat, 8:00 AM - 6:00 PM</p>
           </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-2">
           <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">First Name *</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-300 p-3 text-sm focus:border-zonca-red focus:ring-0 outline-none transition-colors" placeholder="John" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Last Name *</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-300 p-3 text-sm focus:border-zonca-red focus:ring-0 outline-none transition-colors" placeholder="Doe" />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Company Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-300 p-3 text-sm focus:border-zonca-red focus:ring-0 outline-none transition-colors" placeholder="Construction Co. Ltd" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email *</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-300 p-3 text-sm focus:border-zonca-red focus:ring-0 outline-none transition-colors" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Phone</label>
                <input type="tel" className="w-full bg-gray-50 border border-gray-300 p-3 text-sm focus:border-zonca-red focus:ring-0 outline-none transition-colors" />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Project Interest</label>
                <select className="w-full bg-gray-50 border border-gray-300 p-3 text-sm focus:border-zonca-red focus:ring-0 outline-none transition-colors">
                  <option>Commercial Facade System</option>
                  <option>Residential Windows & Doors</option>
                  <option>Office Partitioning</option>
                  <option>Wholesale Aluminum Profiles</option>
                  <option>Other / Consultation</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Project Details / Specs</label>
                <textarea rows={5} className="w-full bg-gray-50 border border-gray-300 p-3 text-sm focus:border-zonca-red focus:ring-0 outline-none transition-colors" placeholder="Please describe dimensions, quantities, and specific requirements..."></textarea>
              </div>

              <div className="md:col-span-2">
                <button className="w-full bg-zonca-red text-white font-bold uppercase tracking-widest py-4 hover:bg-red-800 transition-colors">
                  Submit Request
                </button>
              </div>
           </form>
        </div>
      </div>
    </div>
  </div>
);

// --- Footer ---

const Footer = ({ setView }: any) => (
  <footer className="bg-slate-900 text-white border-t-4 border-zonca-red pt-16 pb-8">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 pr-8">
             <div className="mb-8">
                <ZoncaLogo dark={true} className="h-10" />
             </div>
             <p className="text-gray-400 text-sm leading-relaxed mb-6">
               Leading the West African market in aluminum extrusion and architectural systems. We combine local manufacturing precision with international engineering standards to deliver superior facades and fenestration solutions.
             </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-zonca-red mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
               <li><button onClick={() => setView('home')} className="hover:text-white transition-colors">Home</button></li>
               <li><button onClick={() => setView('catalog')} className="hover:text-white transition-colors">Product Catalog</button></li>
               <li><button onClick={() => setView('services')} className="hover:text-white transition-colors">Services</button></li>
               <li><button onClick={() => setView('projects')} className="hover:text-white transition-colors">Projects</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-zonca-red mb-6">Standards</h4>
            <ul className="space-y-3 text-sm text-gray-400">
               <li className="flex items-center"><Check size={14} className="text-green-500 mr-2" /> ISO 9001:2015</li>
               <li className="flex items-center"><Check size={14} className="text-green-500 mr-2" /> SONCAP Certified</li>
               <li className="flex items-center"><Check size={14} className="text-green-500 mr-2" /> Qualicoat Standards</li>
            </ul>
          </div>
       </div>
       
       <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
         <p>&copy; {new Date().getFullYear()} Zonca Global Investment Ltd. All Rights Reserved.</p>
         <div className="flex space-x-6 mt-4 md:mt-0">
           <span>Privacy Policy</span>
           <span>Terms of Service</span>
         </div>
       </div>
     </div>
  </footer>
);

// --- App Container ---

const App = () => {
  const [view, setView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [lang, setLang] = useState('en');

  useEffect(() => { window.scrollTo(0, 0); }, [view]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900 selection:bg-zonca-red selection:text-white">
      <TopBar />
      <Navbar view={view} setView={setView} lang={lang} setLang={setLang} />
      
      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero setView={setView} />
            <Stats />
            <Capabilities />
            <CatalogPreview setProduct={setSelectedProduct} setView={setView} />
            <Markets />
            <Testimonials />
            {/* Call to Action Strip */}
            <div className="bg-zonca-red py-12 text-center text-white">
               <h2 className="text-2xl font-bold uppercase tracking-wide mb-4">Ready to start your next project?</h2>
               <button onClick={() => setView('contact')} className="bg-white text-zonca-red px-8 py-3 font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors">
                 Get a Quote
               </button>
            </div>
          </>
        )}
        
        {view === 'founder' && <FounderProfile setView={setView} />}

        {view === 'catalog' && (
           <div className="pt-8 pb-20">
             <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
                <h1 className="text-4xl font-bold text-slate-900 uppercase tracking-tight mb-4">Product Catalog</h1>
                <p className="text-gray-500 max-w-2xl mx-auto">Explore our range of architectural aluminium systems.</p>
             </div>
             <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {PRODUCTS.map(p => (
                 <div key={p.id} onClick={() => { setSelectedProduct(p); setView('product-detail'); }} className="group border border-gray-200 cursor-pointer hover:shadow-xl transition-all bg-white">
                    <div className="h-64 overflow-hidden">
                       <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                       <h3 className="font-bold text-lg mb-2 group-hover:text-zonca-red">{p.name}</h3>
                       <p className="text-sm text-gray-500 mb-4">{p.shortDesc}</p>
                       <span className="text-xs font-bold uppercase tracking-wider text-zonca-red border-b border-zonca-red pb-1">Technical Specs</span>
                    </div>
                 </div>
               ))}
             </div>
           </div>
        )}

        {view === 'product-detail' && selectedProduct && (
          <ProductDetail product={selectedProduct} setView={setView} />
        )}

        {view === 'services' && (
           <div className="pt-8">
              <div className="max-w-7xl mx-auto px-4 text-center mb-16">
                 <h1 className="text-4xl font-bold text-slate-900 uppercase tracking-tight mb-4">Our Services</h1>
                 <p className="text-gray-500 max-w-2xl mx-auto">Comprehensive aluminium solutions from design to installation.</p>
              </div>
              <Capabilities />
              <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" className="rounded shadow-lg" />
                 <div>
                    <h3 className="text-2xl font-bold mb-4">Custom Extrusion</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                       We understand that standard profiles don't fit every vision. Our engineering team works with you to design custom dies and extrude specific shapes suited to your structural requirements.
                    </p>
                    <ul className="space-y-2">
                       <li className="flex items-center font-bold text-slate-800"><Check className="text-zonca-red mr-2" size={16}/> Custom Die Creation</li>
                       <li className="flex items-center font-bold text-slate-800"><Check className="text-zonca-red mr-2" size={16}/> 6063 & 6061 Alloys</li>
                       <li className="flex items-center font-bold text-slate-800"><Check className="text-zonca-red mr-2" size={16}/> Powder Coating & Anodizing</li>
                    </ul>
                 </div>
              </div>
              <FAQ />
           </div>
        )}
        
        {view === 'projects' && (
           <div className="py-16 bg-slate-50">
             <div className="max-w-7xl mx-auto px-4">
               <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-tight">Recent Projects</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
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
                  ].map((project, i) => (
                    <div key={i} className="bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                      <div className="h-64 overflow-hidden">
                        <img src={project.img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt={project.title} />
                      </div>
                      <div className="p-6">
                        <h4 className="font-bold text-lg text-slate-900">{project.title}</h4>
                        <p className="text-sm text-zonca-red font-bold uppercase mt-1">{project.system}</p>
                      </div>
                    </div>
                  ))}
               </div>
             </div>
           </div>
        )}

        {view === 'contact' && <Contact />}
      </main>

      <Footer setView={setView} />
      
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button onClick={() => setView('contact')} className="bg-[#25D366] hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110">
           <Phone size={28} />
        </button>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);

export default App;