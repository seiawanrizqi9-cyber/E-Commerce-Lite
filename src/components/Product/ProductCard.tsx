import React from 'react';
import { Product } from '../../types';
import { useCart } from '../../hooks/useCart';
import { useToast } from '../../contexts/ToastContext';
import Button from '../UI/Button';

interface ProductCardProps {
  product: Product;
  onViewDetails: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    const truncatedTitle = product.title.length > 20 
      ? `${product.title.substring(0, 20)}...` 
      : product.title;
    showToast(`${truncatedTitle} added to cart`);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 border border-gray-100 w-full">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain p-4 group-hover:scale-110 transition-transform duration-300 bg-white"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
            ${product.price}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500 bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            {product.category}
          </span>
          <div className="flex items-center">
            <span className="text-yellow-400 text-sm">⭐</span>
            <span className="text-xs text-gray-600 ml-1">
              {product.rating.rate}
            </span>
          </div>
        </div>
        
        <h3 className="font-bold text-sm text-gray-800 mb-3 line-clamp-2 leading-tight min-h-10">
          {product.title}
        </h3>
        
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(product.id)}
            className="flex-1 py-2 text-xs font-medium"
          >
            View Details
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleAddToCart}
            className="flex-1 py-2 text-xs font-medium"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;