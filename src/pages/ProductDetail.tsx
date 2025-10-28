import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../hooks/useProduct";
import { useCart } from "../hooks/useCart";
import { useToast } from "../contexts/ToastContext";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import Button from "../components/UI/Button";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products, loading } = useProducts();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const product = products.find((p) => p.id === parseInt(id || "0"));

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      showToast(`${product.title} added to cart!`);
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400 text-xl">
          ⭐
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400 text-xl">
          ⭐
        </span>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300 text-xl">
          ⭐
        </span>
      );
    }

    return stars;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">😞</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Product Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The product you're looking for doesn't exist.
        </p>
        <Button onClick={() => navigate("/products")}>Back to Products</Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate("/products")}
        className="flex items-center text-gray-600 hover:text-emerald-600 mb-6 transition-colors group"
      >
        <span className="text-lg group-hover:-translate-x-1 transition-transform">
          ←
        </span>
        <span className="ml-2 font-medium">Back to Products</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-contain"
          />
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          {/* Category & Rating */}
          <div className="flex items-center justify-between">
            <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
              {product.category}
            </span>
            <div className="flex items-center space-x-2">
              <div className="flex">{renderStars(product.rating.rate)}</div>
              <span className="text-sm text-gray-600">
                {product.rating.rate} ({product.rating.count} reviews)
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
            {product.title}
          </h1>

          {/* Price */}
          <div className="text-4xl font-bold text-emerald-600">
            ${product.price}
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Product Description
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {product.description}
            </p>
          </div>

          {/* Rating Details */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Customer Reviews
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Average Rating:</span>
                <span className="font-semibold text-gray-800">
                  {product.rating.rate}/5
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total Reviews:</span>
                <span className="font-semibold text-gray-800">
                  {product.rating.count}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-6">
            <Button
              size="lg"
              onClick={handleAddToCart}
              className="flex-1 py-4 text-lg"
            >
              🛒 Add to Cart
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/products")}
              className="flex-1 py-4 text-lg"
            >
              Continue Shopping
            </Button>
          </div>

          {/* Additional Info */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Product Information
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Category:</span>
                <p className="font-medium text-gray-800 capitalize">
                  {product.category}
                </p>
              </div>
              <div>
                <span className="text-gray-600">Product ID:</span>
                <p className="font-medium text-gray-800">#{product.id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section (Optional) */}
      <div className="mt-16 border-t pt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          You Might Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* You can add related products here later */}
          <div className="text-center py-8 text-gray-500">
            <p>More products coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
