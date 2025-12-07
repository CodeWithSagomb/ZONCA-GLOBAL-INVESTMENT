import React from 'react';
import { ChevronRight, ChevronDown, Award } from 'lucide-react';
import { ViewType } from '../../types';

interface HeroProps {
  setView: (view: ViewType) => void;
}

export const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <div className="relative h-[650px] bg-slate-900 flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600")' }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
        {/* Subtle Grid Overlay for "Engineering" feel */}
        <div className="absolute inset-0 bg-[url('/images/patterns/graphy.png')] opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="flex items-center bg-zonca-red text-white text-xs font-bold px-3 py-1 mb-6 uppercase tracking-widest w-fit">
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
