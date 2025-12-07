import React from 'react';
import { SEO } from '../components/common/SEO';
import { Hero } from '../components/sections/Hero';
import { Stats } from '../components/sections/Stats';
import { Capabilities } from '../components/sections/Capabilities';
import { CatalogPreview } from '../components/sections/CatalogPreview';
import { Markets } from '../components/sections/Markets';
import { Testimonials } from '../components/sections/Testimonials';
import { Product, ViewType } from '../types';

interface HomePageProps {
  setView: (view: ViewType) => void;
  setProduct: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setView, setProduct }) => {
  return (
    <>
      <SEO />
      <Hero setView={setView} />
      <Stats />
      <Capabilities />
      <CatalogPreview setProduct={setProduct} setView={setView} />
      <Markets />
      <Testimonials />
      {/* Call to Action Strip */}
      <div className="bg-zonca-red py-12 text-center text-white">
         <h2 className="text-2xl font-bold uppercase tracking-wide mb-4">Ready to start your next project?</h2>
         <button onClick={() => setView('contact')} className="bg-white text-zonca-red px-8 py-3 font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors">
           Get a Quote
         </button>
      </div>
    </>
  );
};
