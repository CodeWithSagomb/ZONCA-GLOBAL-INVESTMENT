import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/config';

export const TopBar: React.FC = () => (
  <div className="bg-slate-900 text-gray-300 text-xs py-2 hidden md:block border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
       <div className="flex space-x-6">
         <span className="flex items-center hover:text-white transition cursor-pointer">
           <Phone size={12} className="mr-2 text-zonca-red"/> {COMPANY_INFO.phone}
         </span>
         <span className="flex items-center hover:text-white transition cursor-pointer">
           <Mail size={12} className="mr-2 text-zonca-red"/> {COMPANY_INFO.email}
         </span>
         <span className="flex items-center">
           <Clock size={12} className="mr-2 text-zonca-red"/> {COMPANY_INFO.hours}
         </span>
       </div>
       <div className="flex space-x-4">
         <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer">
           LinkedIn
         </a>
         <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer">
           Instagram
         </a>
         <span className="text-zonca-red font-bold">ISO 9001:2015 Certified</span>
       </div>
    </div>
  </div>
);
