import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductFilters from './components/ProductFilters';
import ProductSort from './components/ProductSort';
import Footer from './components/Footer';
import PromoBar from './components/PromoBar';
import FeaturedProducts from './components/FeaturedProducts';
import NewsletterSignup from './components/NewsletterSignup';
import { products, categories } from './data/products';
import { Product, SortOption } from './types';

function App() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [sortOption, setSortOption] = useState<SortOption>("name");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1500]);
  const [loading, setLoading] = useState<boolean>(true);
  
  const maxPrice = Math.max(...products.map(product => product.price));

  // Get featured products (highest rated)
  const featuredProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  // Get trending products (random selection for demo)
  const trendingProducts = [...products]
    .sort(() => 0.5 - Math.random())
    .slice(0, 8);

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
        case 'name-desc':
          result.sort((a, b) => b.name.localeCompare(a.name));
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
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-200">
      <PromoBar />
      <Header />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop the Latest Trends</h1>
              <p className="text-lg md:text-xl mb-8 text-indigo-100">
                Discover our curated collection of premium products at unbeatable prices.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-indigo-700 font-medium px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
                  Shop Now
                </button>
                <button className="bg-transparent border-2 border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          {/* Featured Products Carousel */}
          <FeaturedProducts products={featuredProducts} title="Featured Products" />
          
          {/* Main Product Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Our Products</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Discover our wide range of high-quality products</p>
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
          
          {/* Trending Products */}
          <FeaturedProducts products={trendingProducts} title="Trending Now" />
          
          {/* Newsletter Signup */}
          <NewsletterSignup />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
