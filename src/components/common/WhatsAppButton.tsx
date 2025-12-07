import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/config';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
    'Bonjour Zonca Global Investment, je souhaite obtenir des informations sur vos services.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 group"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <Phone size={28} />
        <span className="absolute bottom-full mb-2 hidden group-hover:block bg-slate-900 text-white text-xs px-3 py-1 rounded whitespace-nowrap">
          WhatsApp
        </span>
      </a>
    </div>
  );
};
