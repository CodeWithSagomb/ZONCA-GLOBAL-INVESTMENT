import React, { useEffect } from 'react';
import { ChevronRight, FileText, Ruler, Check } from 'lucide-react';
import { SEO } from '../common/SEO';
import { ProductSchema } from '../common/StructuredData';
import { trackEvent } from '../common/GoogleAnalytics';
import { Product, ViewType } from '../../types';

interface ProductDetailProps {
  product: Product;
  setView: (view: ViewType) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, setView }) => {
  // Track product view in Google Analytics
  useEffect(() => {
    if (product) {
      trackEvent('Product', 'View Details', product.name);
    }
  }, [product]);

  if (!product) return null;

  return (
    <>
      <SEO
        title={product.name}
        description={product.shortDesc}
        url={`https://zoncaglobal.com/products/${product.id}`}
        image={product.image}
      />
      <ProductSchema product={product} />
      <div className="bg-white min-h-screen">
      {/* Industrial Header */}
      <div className="bg-slate-100 border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center text-sm text-gray-500 mb-6">
              <span className="cursor-pointer hover:text-zonca-red" onClick={() => setView('home')}>Home</span>
              <ChevronRight size={14} className="mx-2"/>
              <span className="cursor-pointer hover:text-zonca-red" onClick={() => setView('catalog')}>Catalog</span>
              <ChevronRight size={14} className="mx-2"/>
              <span className="font-bold text-slate-900">{product.name}</span>
           </div>

           <div className="flex flex-col md:flex-row justify-between items-start">
             <div>
               <h1 className="text-4xl font-bold text-slate-900 uppercase tracking-tight mb-2">{product.name}</h1>
               <p className="text-lg text-gray-600 max-w-2xl">{product.shortDesc}</p>
             </div>
             <button
                onClick={() => setView('contact')}
                className="mt-6 md:mt-0 bg-zonca-red text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-red-800 shadow-lg flex items-center">
               <FileText className="mr-2" size={18} /> Request Data Sheet
             </button>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           {/* Left Column: Visuals */}
           <div className="lg:col-span-7 space-y-8">
              <img src={product.image} className="w-full rounded-sm shadow-md border border-gray-100" alt={product.name} />

              {/* Technical Drawing Area */}
              {product.techDrawing && (
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-sm">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-gray-300 pb-2">Profile Section</h3>
                  <div className="aspect-[2/1] bg-white border border-gray-300 flex items-center justify-center relative overflow-hidden">
                     <img src={product.techDrawing} className="w-full h-full object-cover mix-blend-multiply opacity-75 grayscale contrast-125" alt="Tech Drawing" />
                     <div className="absolute bottom-2 right-2 text-[10px] font-mono text-gray-400 border p-1">DWG-04-22</div>
                  </div>
                </div>
              )}
           </div>

           {/* Right Column: Data */}
           <div className="lg:col-span-5">
              <div className="bg-white border border-gray-200 shadow-xl p-8 sticky top-24">
                 <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                    <Ruler className="mr-2 text-zonca-red" /> Specifications
                 </h3>

                 <div className="divide-y divide-gray-100 border-t border-b border-gray-100 mb-8">
                    {product.specs.map((s, i) => (
                      <div key={i} className="py-3 flex justify-between text-sm">
                        <span className="text-gray-500 font-medium">{s.label}</span>
                        <span className="text-slate-900 font-bold font-mono">{s.value}</span>
                      </div>
                    ))}
                 </div>

                 <h3 className="text-lg font-bold text-slate-900 mb-4">System Advantages</h3>
                 <ul className="space-y-3 mb-8">
                   {product.features.map((f, i) => (
                     <li key={i} className="flex items-start text-sm text-gray-700">
                       <Check size={16} className="text-green-600 mr-3 mt-0.5 shrink-0" />
                       {f}
                     </li>
                   ))}
                 </ul>

                 <div className="bg-slate-100 p-4 text-center">
                   <p className="text-xs text-gray-500 mb-3">Need customization? We offer bespoke extrusion services.</p>
                   <button onClick={() => setView('contact')} className="text-zonca-red font-bold text-sm underline uppercase tracking-wide">Contact Engineering Team</button>
                 </div>
              </div>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};
