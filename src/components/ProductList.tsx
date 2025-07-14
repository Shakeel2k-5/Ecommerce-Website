import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const ProductList: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart, cartCount } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Enhanced product data with rupee pricing
  const products: Product[] = [
    {
      id: 1,
      name: "Sony WH-1000XM4 Wireless Headphones",
      price: 24999,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      description: "Industry-leading noise canceling wireless headphones with 30-hour battery life",
      category: "electronics"
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max",
      price: 149999,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
      description: "The most advanced iPhone ever with A17 Pro chip and titanium design",
      category: "electronics"
    },
    {
      id: 3,
      name: "Nike Air Zoom Pegasus 40",
      price: 12999,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
      description: "Responsive running shoes with breathable mesh upper",
      category: "sports"
    },
    {
      id: 4,
      name: "Breville Barista Express",
      price: 89999,
      image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=300&h=300&fit=crop",
      description: "Professional-grade espresso machine with built-in grinder",
      category: "home"
    },
    {
      id: 5,
      name: "MacBook Pro 16-inch M3 Max",
      price: 349999,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
      description: "The most powerful MacBook Pro with M3 Max chip and Liquid Retina XDR",
      category: "electronics"
    },
    {
      id: 6,
      name: "Lululemon Align Yoga Mat",
      price: 3999,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop",
      description: "Premium yoga mat with perfect cushioning and grip",
      category: "sports"
    },
    {
      id: 7,
      name: "Samsung 65-inch QLED 4K Smart TV",
      price: 129999,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop",
      description: "Stunning QLED display with Quantum HDR and Smart TV features",
      category: "electronics"
    },
    {
      id: 8,
      name: "Dyson V15 Detect Cordless Vacuum",
      price: 54999,
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=300&fit=crop",
      description: "Revolutionary cordless vacuum with laser dust detection",
      category: "home"
    },
    {
      id: 9,
      name: "Apple Watch Series 9",
      price: 41999,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      description: "Advanced health monitoring with S9 chip and double tap gesture",
      category: "electronics"
    },
    {
      id: 10,
      name: "Adidas Ultraboost 22",
      price: 15999,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop",
      description: "Energy-returning running shoes with Primeknit+ upper",
      category: "sports"
    },
    {
      id: 11,
      name: "KitchenAid Stand Mixer",
      price: 69999,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",
      description: "Professional stand mixer with 10-speed motor and tilt-head design",
      category: "home"
    },
    {
      id: 12,
      name: "Canon EOS R6 Mark II",
      price: 189999,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop",
      description: "Full-frame mirrorless camera with 24.2MP sensor and 4K video",
      category: "electronics"
    }
  ];

  const categories = ["all", "electronics", "sports", "home"];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#4F46E5] to-[#2563EB] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">🛍️</span>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#111827] to-[#4F46E5] bg-clip-text text-transparent">
                E-Commerce Store
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/cart')}
                className="relative px-6 py-3 bg-gradient-to-r from-[#4F46E5] to-[#2563EB] text-white rounded-lg hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                🛒 Cart
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#F43F5E] text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={handleLogout}
                className="px-6 py-3 bg-gradient-to-r from-[#F43F5E] to-[#E11D48] text-white rounded-lg hover:from-[#E11D48] hover:to-[#BE123C] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-[#111827] mb-6 text-center">Discover Amazing Products</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for products, brands, and more..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5] transition-all duration-200"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5] transition-all duration-200 bg-white"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
          {filteredProducts.length > 0 && (
            <p className="text-[#6B7280] text-sm mt-4 text-center">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div 
                className="cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#111827] mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-[#6B7280] text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-[#10B981]">{formatPrice(product.price)}</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(product);
                        }}
                        className="px-4 py-2 bg-[#4F46E5] text-white rounded-lg hover:bg-[#2563EB] transition-colors duration-200 text-sm font-medium"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-[#F3F4F6] rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#111827] mb-2">No products found</h3>
            <p className="text-[#6B7280] text-lg mb-6">Try adjusting your search or filter criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="px-6 py-3 bg-[#4F46E5] text-white rounded-lg hover:bg-[#2563EB] transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList; 