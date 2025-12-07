import React from 'react';
import { SEO } from '../components/common/SEO';
import { ProductGrid } from '../components/products/ProductGrid';
import { PRODUCTS } from '../constants/products';
import { Product, ViewType } from '../types';

interface CatalogPageProps {
  setProduct: (product: Product) => void;
  setView: (view: ViewType) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({ setProduct, setView }) => {
  return (
    <>
      <SEO
        title="Product Catalog - Aluminium Systems"
        description="Browse our comprehensive range of architectural aluminium systems including windows, doors, facades, and curtain walls. ISO certified quality products."
        url="https://zoncaglobal.com/catalog"
      />
      <div className="pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
         <h1 className="text-4xl font-bold text-slate-900 uppercase tracking-tight mb-4">Product Catalog</h1>
         <p className="text-gray-500 max-w-2xl mx-auto">Explore our range of architectural aluminium systems.</p>
      </div>
        <div className="max-w-7xl mx-auto px-4">
          <ProductGrid products={PRODUCTS} setProduct={setProduct} setView={setView} />
        </div>
      </div>
    </>
  );
};
