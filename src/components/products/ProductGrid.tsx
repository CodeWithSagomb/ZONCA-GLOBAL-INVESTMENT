import React from 'react';
import { ProductCard } from './ProductCard';
import { Product, ViewType } from '../../types';

interface ProductGridProps {
  products: Product[];
  setProduct: (product: Product) => void;
  setView: (view: ViewType) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, setProduct, setView }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          setProduct={setProduct}
          setView={setView}
        />
      ))}
    </div>
  );
};
