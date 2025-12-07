import React from 'react';
import { Quote } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { TESTIMONIALS, PARTNER_COMPANIES } from '../../constants/config';

export const Testimonials: React.FC = () => (
  <div className="py-20 bg-slate-50 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Client Success Stories" subtitle="Trusted by leading architects and developers across West Africa." />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className={`p-8 shadow-lg rounded-sm relative ${t.bg}`}>
            <Quote className="text-zonca-red mb-4 opacity-50" size={40} />
            <p className={`text-lg italic mb-6 leading-relaxed ${t.bg.includes('slate-900') ? 'text-gray-300' : 'text-gray-600'}`}>"{t.quote}"</p>
            <div>
              <p className={`font-bold ${t.bg.includes('slate-900') ? 'text-white' : 'text-slate-900'}`}>{t.author}</p>
              <p className="text-xs text-zonca-red uppercase font-bold tracking-wide">{t.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Partners/Clients Strip */}
      <div className="mt-16 pt-8 border-t border-gray-200">
         <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Proudly working with</p>
         <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
            {PARTNER_COMPANIES.map((company, idx) => (
              <span key={idx} className="text-2xl font-black text-slate-800">{company}</span>
            ))}
         </div>
      </div>
    </div>
  </div>
);
