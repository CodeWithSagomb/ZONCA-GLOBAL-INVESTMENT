import React, { useState } from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import { FAQS } from '../../constants/config';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto my-16 px-4">
      <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
        <HelpCircle className="mr-2 text-zonca-red" /> Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {FAQS.map((faq, idx) => (
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
