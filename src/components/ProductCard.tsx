import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, image, rating, stock, category, description } = product;
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-4 w-4 text-yellow-400" />
          <div className="absolute top-0 left-0 overflow-hidden w-1/2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-yellow-400" />);
    }

    return stars;
  };

  // Calculate discount percentage (mock data)
  const originalPrice = price * 1.2;
  const discountPercentage = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Category Badge */}
        <div className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
          {category}
        </div>
        
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {discountPercentage}% OFF
          </div>
        )}
        
        {/* Quick Action Buttons */}
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 flex justify-center space-x-4 py-3 transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button 
            className="text-white hover:text-indigo-300 transition-colors"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
          </button>
          <button className="text-white hover:text-indigo-300 transition-colors">
            <Eye className="h-5 w-5" />
          </button>
          <button className="text-white hover:text-indigo-300 transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
        
        {/* Stock Indicator */}
        {stock <= 5 && (
          <div className="absolute bottom-2 left-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
            Only {stock} left!
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{name}</h3>
        <p className="text-sm text-gray-500 mb-2 line-clamp-2">{description}</p>
        
        <div className="flex items-center mb-2">
          <div className="flex mr-2">
            {renderStars()}
          </div>
          <span className="text-sm text-gray-600">({rating})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold text-indigo-600">${price.toFixed(2)}</p>
            {discountPercentage > 0 && (
              <p className="text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</p>
            )}
          </div>
          <p className={`text-sm ${stock <= 5 ? 'text-amber-500 font-medium' : 'text-gray-500'}`}>
            {stock} in stock
          </p>
        </div>
        
        <button className="mt-3 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center group">
          <ShoppingCart className="h-4 w-4 mr-2 group-hover:animate-bounce" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
