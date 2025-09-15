import React, { useState } from 'react';
import { ArrowDownAZ, ArrowUpAZ, ArrowDownWideNarrow, ArrowUpWideNarrow, Star, Grid2X2, Grid3X3, List } from 'lucide-react';
import { SortOption } from '../types';

interface ProductSortProps {
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
}

const ProductSort: React.FC<ProductSortProps> = ({ sortOption, onSortChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [gridSize, setGridSize] = useState<'small' | 'large'>('large');

  const sortOptions = [
    { value: 'name', label: 'Name (A-Z)', icon: <ArrowDownAZ className="h-4 w-4 mr-2" /> },
    { value: 'name-desc', label: 'Name (Z-A)', icon: <ArrowUpAZ className="h-4 w-4 mr-2" /> },
    { value: 'price-low', label: 'Price (Low to High)', icon: <ArrowDownWideNarrow className="h-4 w-4 mr-2" /> },
    { value: 'price-high', label: 'Price (High to Low)', icon: <ArrowUpWideNarrow className="h-4 w-4 mr-2" /> },
    { value: 'rating', label: 'Rating', icon: <Star className="h-4 w-4 mr-2" /> }
  ];

  const currentSortOption = sortOptions.find(option => option.value === sortOption) || sortOptions[0];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
      <div className="flex items-center mb-4 sm:mb-0">
        <span className="text-gray-600 mr-2">Sort by:</span>
        <div className="relative">
          <button
            className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md px-3 py-2 text-sm font-medium text-gray-700 focus:outline-none transition-colors"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {currentSortOption.icon}
            {currentSortOption.label}
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute z-10 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`flex items-center w-full text-left px-4 py-2 text-sm ${
                      option.value === sortOption
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => {
                      onSortChange(option.value as SortOption);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {option.icon}
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="bg-gray-100 rounded-md p-1 flex">
          <button
            className={`p-1 rounded ${
              viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setViewMode('grid')}
            title="Grid view"
          >
            {gridSize === 'small' ? (
              <Grid3X3 className="h-5 w-5" />
            ) : (
              <Grid2X2 className="h-5 w-5" />
            )}
          </button>
          <button
            className={`p-1 rounded ${
              viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setViewMode('list')}
            title="List view"
          >
            <List className="h-5 w-5" />
          </button>
        </div>

        {viewMode === 'grid' && (
          <div className="bg-gray-100 rounded-md p-1 flex">
            <button
              className={`p-1 rounded ${
                gridSize === 'large' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setGridSize('large')}
              title="Larger grid"
            >
              <Grid2X2 className="h-5 w-5" />
            </button>
            <button
              className={`p-1 rounded ${
                gridSize === 'small' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setGridSize('small')}
              title="Smaller grid"
            >
              <Grid3X3 className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSort;
