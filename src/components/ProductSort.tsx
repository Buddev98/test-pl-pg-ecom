import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { SortOption } from '../types';

interface ProductSortProps {
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
}

const ProductSort: React.FC<ProductSortProps> = ({ sortOption, onSortChange }) => {
  return (
    <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-center">
        <ArrowUpDown className="h-5 w-5 text-indigo-600 mr-2" />
        <h2 className="text-lg font-semibold hidden sm:block">Sort Products</h2>
      </div>
      
      <select
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value as SortOption)}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="name">Name (A-Z)</option>
        <option value="price-low">Price (Low to High)</option>
        <option value="price-high">Price (High to Low)</option>
        <option value="rating">Rating (Highest)</option>
      </select>
    </div>
  );
};

export default ProductSort;
