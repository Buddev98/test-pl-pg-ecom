import React from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

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
  const [isFiltersOpen, setIsFiltersOpen] = React.useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div 
        className="flex items-center justify-between cursor-pointer md:cursor-default"
        onClick={() => setIsFiltersOpen(!isFiltersOpen)}
      >
        <div className="flex items-center">
          <SlidersHorizontal className="h-5 w-5 text-indigo-600 mr-2" />
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>
        <ChevronDown className={`h-5 w-5 text-gray-500 md:hidden transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
      </div>
      
      <div className={`mt-4 space-y-6 ${isFiltersOpen ? 'block' : 'hidden md:block'}`}>
        {/* Category Filter */}
        <div>
          <h3 className="text-md font-medium mb-2">Category</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="all"
                name="category"
                checked={selectedCategory === ""}
                onChange={() => onCategoryChange("")}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="all" className="ml-2 text-sm text-gray-700">All Categories</label>
            </div>
            
            {categories.map((category) => (
              <div key={category} className="flex items-center">
                <input
                  type="radio"
                  id={category}
                  name="category"
                  checked={selectedCategory === category}
                  onChange={() => onCategoryChange(category)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor={category} className="ml-2 text-sm text-gray-700">{category}</label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Price Range Filter */}
        <div>
          <h3 className="text-md font-medium mb-2">Price Range</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>${priceRange[0].toFixed(0)}</span>
              <span>${priceRange[1].toFixed(0)}</span>
            </div>
            <div className="flex gap-4">
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={priceRange[0]}
                onChange={(e) => onPriceRangeChange([parseInt(e.target.value), priceRange[1]])}
                className="w-full"
              />
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={priceRange[1]}
                onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
          </div>
        </div>
        
        {/* In Stock Filter */}
        <div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="inStock"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="inStock" className="ml-2 text-sm text-gray-700">In Stock Only</label>
          </div>
        </div>
        
        {/* Rating Filter */}
        <div>
          <h3 className="text-md font-medium mb-2">Rating</h3>
          <div className="space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center">
                <input
                  type="checkbox"
                  id={`rating-${rating}`}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor={`rating-${rating}`} className="ml-2 text-sm text-gray-700">
                  {rating}+ Stars
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <button className="w-full py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default ProductFilters;
