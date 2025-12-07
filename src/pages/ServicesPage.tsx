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
        {/* Header Section with decorative frame */}
        <div className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 mb-8">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 text-center relative">
            <div className="w-20 h-1 bg-gradient-to-r from-zonca-red to-red-700 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 uppercase tracking-tight mb-4">Our Services</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Comprehensive aluminium solutions from design to installation.</p>
            <div className="w-20 h-1 bg-gradient-to-r from-zonca-red to-red-700 mx-auto mt-6"></div>
          </div>
        </div>

        {/* Capabilities Section */}
        <Capabilities />

        {/* Custom Extrusion Section with enhanced frame */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section container with border and shadow */}
            <div className="relative border-2 border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-2xl hover:border-zonca-red transition-all duration-500 bg-gradient-to-br from-white to-slate-50">
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-zonca-red rounded-tl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-zonca-red rounded-br-2xl"></div>

              {/* Content grid */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Image with decorative frame */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-zonca-red to-red-700 rounded-xl opacity-20 group-hover:opacity-30 blur transition-all duration-300"></div>
                  <img
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
                    className="relative rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-300"
                    alt="Custom Extrusion"
                  />
                </div>

                {/* Text content */}
                <div>
                  <div className="inline-block px-4 py-1 bg-zonca-red/10 rounded-full mb-4">
                    <span className="text-zonca-red font-semibold text-sm uppercase tracking-wider">Featured Service</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-slate-900">Custom Extrusion</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    We understand that standard profiles don't fit every vision. Our engineering team works with you to design custom dies and extrude specific shapes suited to your structural requirements.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-zonca-red transition-colors duration-300">
                      <div className="w-8 h-8 bg-zonca-red/10 rounded-full flex items-center justify-center mr-3">
                        <Check className="text-zonca-red" size={16} strokeWidth={3}/>
                      </div>
                      <span className="font-bold text-slate-800">Custom Die Creation</span>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-zonca-red transition-colors duration-300">
                      <div className="w-8 h-8 bg-zonca-red/10 rounded-full flex items-center justify-center mr-3">
                        <Check className="text-zonca-red" size={16} strokeWidth={3}/>
                      </div>
                      <span className="font-bold text-slate-800">6063 & 6061 Alloys</span>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-zonca-red transition-colors duration-300">
                      <div className="w-8 h-8 bg-zonca-red/10 rounded-full flex items-center justify-center mr-3">
                        <Check className="text-zonca-red" size={16} strokeWidth={3}/>
                      </div>
                      <span className="font-bold text-slate-800">Powder Coating & Anodizing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQ />
      </div>
    </>
  );
};
