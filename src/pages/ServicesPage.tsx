import React from 'react';
import { Check } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Capabilities } from '../components/sections/Capabilities';
import { FAQ } from '../components/sections/FAQ';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Services - Aluminium Fabrication & Installation"
        description="Comprehensive aluminium solutions from design to installation. Custom extrusion, powder coating, anodizing, and professional installation services."
        url="https://zoncaglobal.com/services"
      />
      <div className="pt-8">
       <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 uppercase tracking-tight mb-4">Our Services</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Comprehensive aluminium solutions from design to installation.</p>
       </div>
       <Capabilities />
       <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" className="rounded shadow-lg" alt="Custom Extrusion" />
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
    </>
  );
};
