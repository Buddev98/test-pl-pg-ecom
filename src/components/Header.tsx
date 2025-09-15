import React, { useState } from 'react';
import { Search, ShoppingCart, User, Heart, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Mock cart count

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-800">ShopSmart</span>
            </a>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 mx-6">
            <div className="relative w-full max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors">
              <Heart className="h-5 w-5 mr-1" />
              <span className="text-sm">Wishlist</span>
            </a>
            <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors">
              <User className="h-5 w-5 mr-1" />
              <span className="text-sm">Account</span>
            </a>
            <div className="relative">
              <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors">
                <ShoppingCart className="h-5 w-5 mr-1" />
                <span className="text-sm">Cart</span>
              </a>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Search Bar - Mobile Only */}
        <div className="md:hidden pb-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors">
                <Heart className="h-5 w-5 mr-2" />
                <span>Wishlist</span>
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors">
                <User className="h-5 w-5 mr-2" />
                <span>Account</span>
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors">
                <ShoppingCart className="h-5 w-5 mr-2" />
                <span>Cart ({cartCount})</span>
              </a>
            </nav>
          </div>
        )}
      </div>

      {/* Categories Navigation */}
      <div className="bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 overflow-x-auto py-3 scrollbar-hide">
            <a href="#" className="text-sm font-medium text-indigo-600 whitespace-nowrap">All Products</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-600 whitespace-nowrap transition-colors">Electronics</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-600 whitespace-nowrap transition-colors">Clothing</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-600 whitespace-nowrap transition-colors">Furniture</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-600 whitespace-nowrap transition-colors">Home</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-600 whitespace-nowrap transition-colors">Accessories</a>
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-600 whitespace-nowrap transition-colors">Sports</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
