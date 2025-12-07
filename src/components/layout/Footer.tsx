import React from 'react';
import { Check } from 'lucide-react';
import { ZoncaLogo } from '../common/ZoncaLogo';
import { COMPANY_INFO, CERTIFICATIONS, NAV_ITEMS } from '../../constants/config';
import { ViewType } from '../../types';

interface FooterProps {
  setView: (view: ViewType) => void;
}

export const Footer: React.FC<FooterProps> = ({ setView }) => (
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
               {NAV_ITEMS.map((item) => (
                 <li key={item.id}>
                   <button onClick={() => setView(item.id)} className="hover:text-white transition-colors">
                     {item.label}
                   </button>
                 </li>
               ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-zonca-red mb-6">Standards</h4>
            <ul className="space-y-3 text-sm text-gray-400">
               {CERTIFICATIONS.map((cert, idx) => (
                 <li key={idx} className="flex items-center">
                   <Check size={14} className="text-green-500 mr-2" /> {cert}
                 </li>
               ))}
            </ul>
          </div>
       </div>

       <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
         <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</p>
         <div className="flex space-x-6 mt-4 md:mt-0">
           <span>Privacy Policy</span>
           <span>Terms of Service</span>
         </div>
       </div>
     </div>
  </footer>
);
