import React, { useState } from 'react';
import { Sliders, ChevronDown, ChevronUp, Check, Star } from 'lucide-react';

interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  maxPrice: number;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  maxPrice
}) => {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    rating: true
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const handlePriceMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    onPriceRangeChange([value, priceRange[1]]);
  };

  const handlePriceMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    onPriceRangeChange([priceRange[0], value]);
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const isMinRange = e.target.id === 'price-min-range';
    
    if (isMinRange) {
      onPriceRangeChange([value, priceRange[1]]);
    } else {
      onPriceRangeChange([priceRange[0], value]);
    }
  };

  // Calculate what percentage of the slider the min and max values represent
  const minPercentage = (priceRange[0] / maxPrice) * 100;
  const maxPercentage = (priceRange[1] / maxPrice) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-5">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
          <Sliders className="h-5 w-5 mr-2 text-indigo-600" />
          Filters
        </h2>
        <button 
          className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
          onClick={() => {
            onCategoryChange("");
            onPriceRangeChange([0, maxPrice]);
          }}
        >
          Reset All
        </button>
      </div>

      {/* Categories Section */}
      <div className="mb-6 border-b border-gray-200 pb-6">
        <button 
          className="flex items-center justify-between w-full text-left mb-4"
          onClick={() => toggleSection('categories')}
        >
          <h3 className="font-medium text-gray-800">Categories</h3>
          {expandedSections.categories ? 
            <ChevronUp className="h-4 w-4 text-gray-600" /> : 
            <ChevronDown className="h-4 w-4 text-gray-600" />
          }
        </button>
        
        {expandedSections.categories && (
          <div className="space-y-2 animate-fadeIn">
            <div 
              className={`flex items-center cursor-pointer p-2 rounded-md transition-colors ${
                selectedCategory === "" ? "bg-indigo-50" : "hover:bg-gray-50"
              }`}
              onClick={() => onCategoryChange("")}
            >
              <div className={`h-4 w-4 rounded border flex items-center justify-center ${
                selectedCategory === "" ? "border-indigo-600 bg-indigo-600" : "border-gray-300"
              }`}>
                {selectedCategory === "" && <Check className="h-3 w-3 text-white" />}
              </div>
              <span className={`ml-2 ${
                selectedCategory === "" ? "text-indigo-600 font-medium" : "text-gray-700"
              }`}>
                All Categories
              </span>
              <span className="ml-auto text-xs text-gray-500">({categories.length})</span>
            </div>
            
            {categories.map((category) => (
              <div 
                key={category}
                className={`flex items-center cursor-pointer p-2 rounded-md transition-colors ${
                  selectedCategory === category ? "bg-indigo-50" : "hover:bg-gray-50"
                }`}
                onClick={() => onCategoryChange(category)}
              >
                <div className={`h-4 w-4 rounded border flex items-center justify-center ${
                  selectedCategory === category ? "border-indigo-600 bg-indigo-600" : "border-gray-300"
                }`}>
                  {selectedCategory === category && <Check className="h-3 w-3 text-white" />}
                </div>
                <span className={`ml-2 ${
                  selectedCategory === category ? "text-indigo-600 font-medium" : "text-gray-700"
                }`}>
                  {category}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Price Range Section */}
      <div className="mb-6 border-b border-gray-200 pb-6">
        <button 
          className="flex items-center justify-between w-full text-left mb-4"
          onClick={() => toggleSection('price')}
        >
          <h3 className="font-medium text-gray-800">Price Range</h3>
          {expandedSections.price ? 
            <ChevronUp className="h-4 w-4 text-gray-600" /> : 
            <ChevronDown className="h-4 w-4 text-gray-600" />
          }
        </button>
        
        {expandedSections.price && (
          <div className="animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <div className="w-[45%]">
                <label htmlFor="min-price" className="block text-sm text-gray-600 mb-1">Min</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    id="min-price"
                    value={priceRange[0]}
                    onChange={handlePriceMinChange}
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              <div className="text-gray-400">to</div>
              <div className="w-[45%]">
                <label htmlFor="max-price" className="block text-sm text-gray-600 mb-1">Max</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    id="max-price"
                    value={priceRange[1]}
                    onChange={handlePriceMaxChange}
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="relative mt-8 px-2">
              <div className="h-1 bg-gray-200 rounded-full">
                <div 
                  className="absolute h-1 bg-indigo-600 rounded-full"
                  style={{
                    left: `${minPercentage}%`,
                    right: `${100 - maxPercentage}%`
                  }}
                ></div>
              </div>
              
              <input
                type="range"
                id="price-min-range"
                min="0"
                max={maxPrice}
                value={priceRange[0]}
                onChange={handleRangeChange}
                className="absolute top-0 left-0 w-full h-1 appearance-none bg-transparent pointer-events-none"
                style={{
                  zIndex: 2,
                  pointerEvents: 'auto'
                }}
              />
              
              <input
                type="range"
                id="price-max-range"
                min="0"
                max={maxPrice}
                value={priceRange[1]}
                onChange={handleRangeChange}
                className="absolute top-0 left-0 w-full h-1 appearance-none bg-transparent pointer-events-none"
                style={{
                  zIndex: 2,
                  pointerEvents: 'auto'
                }}
              />
              
              <div className="flex justify-between mt-4 text-xs text-gray-500">
                <span>$0</span>
                <span>${Math.round(maxPrice / 2)}</span>
                <span>${maxPrice}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Rating Section */}
      <div className="mb-6">
        <button 
          className="flex items-center justify-between w-full text-left mb-4"
          onClick={() => toggleSection('rating')}
        >
          <h3 className="font-medium text-gray-800">Rating</h3>
          {expandedSections.rating ? 
            <ChevronUp className="h-4 w-4 text-gray-600" /> : 
            <ChevronDown className="h-4 w-4 text-gray-600" />
          }
        </button>
        
        {expandedSections.rating && (
          <div className="space-y-2 animate-fadeIn">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div 
                key={rating}
                className="flex items-center cursor-pointer p-2 rounded-md hover:bg-gray-50 transition-colors"
              >
                <div className="h-4 w-4 rounded border border-gray-300"></div>
                <div className="ml-2 flex items-center">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  {[...Array(5 - rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gray-300" />
                  ))}
                </div>
                <span className="ml-1 text-sm text-gray-700">& Up</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
        Apply Filters
      </button>
    </div>
  );
};

export default ProductFilters;
