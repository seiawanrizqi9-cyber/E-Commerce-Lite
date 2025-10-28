import React from 'react';
import { Product } from '../../types';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
  onProductClick: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onProductClick }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">😕</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">No products found</h3>
        <p className="text-gray-600">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-1 gap-6">
      {products.map((product) => (
        <div key={product.id} className="h-full">
          <ProductCard
            product={product}
            onViewDetails={onProductClick}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;