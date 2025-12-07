import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../../constants/products';
import { Product, ViewType } from '../../types';

interface CatalogPreviewProps {
  setProduct: (product: Product) => void;
  setView: (view: ViewType) => void;
}

export const CatalogPreview: React.FC<CatalogPreviewProps> = ({ setProduct, setView }) => {
  return (
    <div className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-700 pb-4">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white">Featured Systems</h2>
            <p className="text-gray-400 mt-2">Browse our technical catalog of standard and custom profiles.</p>
          </div>
          <button
             onClick={() => setView('catalog')}
             className="mt-4 md:mt-0 text-zonca-red hover:text-white font-bold uppercase tracking-wider flex items-center transition-colors">
            View All Series <ArrowRight className="ml-2" size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              onClick={() => { setProduct(product); setView('product-detail'); window.scrollTo(0,0); }}
              className="group bg-slate-800 border border-slate-700 hover:border-zonca-red cursor-pointer transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={product.image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" alt={product.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-3 left-3">
                   <span className="text-xs font-bold bg-zonca-red px-2 py-0.5 rounded text-white uppercase">{product.category}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zonca-red transition-colors">{product.name}</h3>
                <p className="text-xs text-gray-400 line-clamp-2 mb-4 font-mono">{product.shortDesc}</p>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center group-hover:text-white">
                   View Specs <ChevronRight size={12} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
