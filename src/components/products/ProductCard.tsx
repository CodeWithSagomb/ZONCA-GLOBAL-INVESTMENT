import React from 'react';
import { Product, ViewType } from '../../types';

interface ProductCardProps {
  product: Product;
  setProduct: (product: Product) => void;
  setView: (view: ViewType) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, setProduct, setView }) => {
  const handleClick = () => {
    setProduct(product);
    setView('product-detail');
    window.scrollTo(0, 0);
  };

  return (
    <div
      onClick={handleClick}
      className="group border border-gray-200 cursor-pointer hover:shadow-xl transition-all bg-white"
    >
      <div className="h-64 overflow-hidden">
         <img
           src={product.image}
           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
           alt={product.name}
         />
      </div>
      <div className="p-6">
         <h3 className="font-bold text-lg mb-2 group-hover:text-zonca-red">{product.name}</h3>
         <p className="text-sm text-gray-500 mb-4">{product.shortDesc}</p>
         <span className="text-xs font-bold uppercase tracking-wider text-zonca-red border-b border-zonca-red pb-1">
           Technical Specs
         </span>
      </div>
    </div>
  );
};
