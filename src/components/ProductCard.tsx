import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, price, image, rating, category, description } = product;
  
  // Format price with commas
  const formattedPrice = price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });
  
  // Calculate discount percentage (mock data)
  const hasDiscount = id % 3 === 0; // Every third product has a discount
  const originalPrice = hasDiscount ? price * 1.2 : null;
  const discountPercentage = hasDiscount ? Math.round((1 - price / (originalPrice || price)) * 100) : null;
  
  // Format original price
  const formattedOriginalPrice = originalPrice?.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product Image with Overlay */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Discount Badge */}
        {hasDiscount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discountPercentage}% OFF
          </div>
        )}
        
        {/* Quick Action Buttons */}
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-2">
            <button className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">{category}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 text-sm text-gray-700 dark:text-gray-300">{rating}</span>
          </div>
        </div>
        
        <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-1 line-clamp-2">{name}</h2>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-800 dark:text-white">{formattedPrice}</span>
            {hasDiscount && (
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 line-through">{formattedOriginalPrice}</span>
            )}
          </div>
          
          <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 text-sm font-medium transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
