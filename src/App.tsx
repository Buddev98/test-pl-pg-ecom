import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductFilters from './components/ProductFilters';
import ProductSort from './components/ProductSort';
import Footer from './components/Footer';
import { products, categories } from './data/products';
import { Product, SortOption } from './types';

function App() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [sortOption, setSortOption] = useState<SortOption>("name");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1500]);
  const [loading, setLoading] = useState<boolean>(true);
  
  const maxPrice = Math.max(...products.map(product => product.price));

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    
    setTimeout(() => {
      let result = [...products];
      
      // Apply category filter
      if (selectedCategory) {
        result = result.filter(product => product.category === selectedCategory);
      }
      
      // Apply price range filter
      result = result.filter(
        product => product.price >= priceRange[0] && product.price <= priceRange[1]
      );
      
      // Apply sorting
      switch (sortOption) {
        case 'name':
          result.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'price-low':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          result.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          result.sort((a, b) => b.rating - a.rating);
          break;
      }
      
      setFilteredProducts(result);
      setLoading(false);
    }, 500);
  }, [selectedCategory, sortOption, priceRange]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Our Products</h1>
          <p className="text-gray-600 mt-2">Discover our wide range of high-quality products</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className="w-full md:w-1/4">
            <ProductFilters 
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              maxPrice={maxPrice}
            />
          </div>
          
          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <ProductSort 
              sortOption={sortOption}
              onSortChange={setSortOption}
            />
            
            <ProductList 
              products={filteredProducts}
              loading={loading}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
