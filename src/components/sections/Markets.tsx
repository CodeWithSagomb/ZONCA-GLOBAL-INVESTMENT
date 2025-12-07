import React from 'react';
import { Home as HomeIcon, Building2, Hammer } from 'lucide-react';
import { AnimatedSection } from '../common/AnimatedSection';

export const Markets: React.FC = () => (
  <div className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <AnimatedSection animation="fade-right" delay={0}>
            <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tight mb-6">Markets We Serve</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Zonca Global Investment isn't just a supplier; we are a strategic partner for diverse sectors. We understand the unique requirements of each industry.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              { title: "Residential", desc: "Luxury villas and estates requiring high thermal comfort and aesthetics.", icon: HomeIcon },
              { title: "Commercial", desc: "Office towers, malls, and hotels needing structural glazing and durability.", icon: Building2 },
              { title: "Industrial", desc: "Warehouses and factories requiring heavy-duty functional installations.", icon: Hammer },
            ].map((market, idx) => (
              <AnimatedSection key={idx} animation="fade-right" delay={100 + idx * 100}>
                <div className="flex group transition-smooth hover-lift cursor-pointer">
                  <div className="mr-6">
                    <div className="w-12 h-12 bg-slate-100 flex items-center justify-center rounded group-hover:bg-zonca-red transition-colors duration-300">
                      <market.icon className="text-slate-700 group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-zonca-red transition-colors">{market.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{market.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <AnimatedSection animation="fade-left" delay={200}>
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover rounded shadow-lg hover-lift" alt="Residential" />
          </AnimatedSection>
          <AnimatedSection animation="fade-left" delay={300}>
            <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover rounded shadow-lg mt-8 hover-lift" alt="Commercial" />
          </AnimatedSection>
        </div>
      </div>
    </div>
  </div>
);
