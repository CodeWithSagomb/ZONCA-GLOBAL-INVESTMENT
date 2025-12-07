import React from 'react';
import { ChevronRight, ChevronDown, Award } from 'lucide-react';
import { ViewType } from '../../types';
import { useParallax } from '../../hooks/useParallax';

interface HeroProps {
  setView: (view: ViewType) => void;
}

export const Hero: React.FC<HeroProps> = ({ setView }) => {
  const parallaxOffset = useParallax({ speed: 0.5, direction: 'down' });

  return (
    <div className="relative h-[650px] bg-slate-900 flex items-center overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600")',
          transform: `translateY(${parallaxOffset}px)`,
        }}
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
              className="group relative px-8 py-4 bg-white text-slate-900 font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Our Products</span>
              <div className="absolute inset-0 bg-zonca-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <button
              onClick={() => setView('contact')}
              className="group relative px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center"
            >
              <span className="relative z-10">Start a Project</span>
              <ChevronRight className="ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" size={18}/>
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
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
