import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const BrandPage = () => {
  const { brandName } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartCount } = useCart();
  const [searchTerm, setSearchTerm] = useState("");

  // Brand-specific product data
  const brandProducts = {
    apple: [
      {
        id: 2,
        name: "iPhone 15 Pro Max",
        price: 149999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
        description: "The most advanced iPhone ever with A17 Pro chip and titanium design",
        category: "electronics",
        brand: "apple"
      },
      {
        id: 5,
        name: "MacBook Pro 16-inch M3 Max",
        price: 349999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
        description: "The most powerful MacBook Pro with M3 Max chip and Liquid Retina XDR",
        category: "electronics",
        brand: "apple"
      },
      {
        id: 9,
        name: "Apple Watch Series 9",
        price: 41999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
        description: "Advanced health monitoring with S9 chip and double tap gesture",
        category: "electronics",
        brand: "apple"
      }
    ],
    samsung: [
      {
        id: 7,
        name: "Samsung 65-inch QLED 4K Smart TV",
        price: 129999,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop",
        description: "Stunning QLED display with Quantum HDR and Smart TV features",
        category: "electronics",
        brand: "samsung"
      },
      {
        id: 11,
        name: "Samsung Galaxy S24 Ultra",
        price: 129999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
        description: "Premium smartphone with S Pen and advanced AI features",
        category: "electronics",
        brand: "samsung"
      }
    ],
    nike: [
      {
        id: 3,
        name: "Nike Air Zoom Pegasus 40",
        price: 12999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
        description: "Responsive running shoes with breathable mesh upper",
        category: "sports",
        brand: "nike"
      },
      {
        id: 12,
        name: "Nike Air Force 1",
        price: 8999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
        description: "Classic sneaker with timeless design and comfort",
        category: "sports",
        brand: "nike"
      }
    ],
    sony: [
      {
        id: 1,
        name: "Sony WH-1000XM4 Wireless Headphones",
        price: 24999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
        description: "Industry-leading noise canceling wireless headphones with 30-hour battery life",
        category: "electronics",
        brand: "sony"
      },
      {
        id: 13,
        name: "Sony PlayStation 5",
        price: 49999,
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop",
        description: "Next-generation gaming console with lightning-fast loading",
        category: "electronics",
        brand: "sony"
      }
    ],
    adidas: [
      {
        id: 10,
        name: "Adidas Ultraboost 22",
        price: 15999,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop",
        description: "Energy-returning running shoes with Primeknit+ upper",
        category: "sports",
        brand: "adidas"
      },
      {
        id: 14,
        name: "Adidas Stan Smith",
        price: 7999,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop",
        description: "Iconic tennis shoe with clean, minimalist design",
        category: "sports",
        brand: "adidas"
      }
    ],
    microsoft: [
      {
        id: 15,
        name: "Microsoft Surface Pro 9",
        price: 89999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
        description: "Versatile 2-in-1 laptop with Windows 11 and powerful performance",
        category: "electronics",
        brand: "microsoft"
      },
      {
        id: 16,
        name: "Microsoft Xbox Series X",
        price: 49999,
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300&h=300&fit=crop",
        description: "Most powerful Xbox ever with 4K gaming and ray tracing",
        category: "electronics",
        brand: "microsoft"
      }
    ],
    google: [
      {
        id: 17,
        name: "Google Pixel 8 Pro",
        price: 89999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
        description: "AI-powered smartphone with advanced camera features",
        category: "electronics",
        brand: "google"
      },
      {
        id: 18,
        name: "Google Pixel Buds Pro",
        price: 19999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
        description: "Wireless earbuds with active noise cancellation",
        category: "electronics",
        brand: "google"
      }
    ]
  };

  const brandInfo = {
    apple: {
      name: "Apple",
      logo: "/apple-logo.png",
      description: "Think Different. Discover the world's most innovative technology.",
      color: "from-[#4F46E5] to-[#2563EB]"
    },
    samsung: {
      name: "Samsung",
      logo: "/samsung-logo.png",
      description: "Do What You Can't. Experience cutting-edge electronics and innovation.",
      color: "from-[#4F46E5] to-[#2563EB]"
    },
    nike: {
      name: "Nike",
      logo: "/nike-logo.png",
      description: "Just Do It. Performance footwear and athletic wear for every athlete.",
      color: "from-[#4F46E5] to-[#2563EB]"
    },
    sony: {
      name: "Sony",
      logo: "/sony-logo.png",
      description: "Make.Believe. Premium electronics and entertainment experiences.",
      color: "from-[#4F46E5] to-[#2563EB]"
    },
    adidas: {
      name: "Adidas",
      logo: "/adidas-logo.png",
      description: "Impossible Is Nothing. Sportswear and athletic footwear for champions.",
      color: "from-[#4F46E5] to-[#2563EB]"
    },
    microsoft: {
      name: "Microsoft",
      logo: "/microsoft-logo.png",
      description: "Empowering every person and organization to achieve more.",
      color: "from-[#4F46E5] to-[#2563EB]"
    },
    google: {
      name: "Google",
      logo: "/google-logo.png",
      description: "Organize the world's information and make it universally accessible.",
      color: "from-[#4F46E5] to-[#2563EB]"
    }
  };

  const currentBrand = brandName ? brandInfo[brandName] : null;
  const products = brandName ? brandProducts[brandName] || [] : [];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatPrice = (price) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  if (!currentBrand) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#111827] mb-4">Brand not found</h2>
          <button
            onClick={() => navigate('/products')}
            className="px-6 py-3 bg-[#4F46E5] text-white rounded-lg hover:bg-[#2563EB] transition"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#F9FAFB]">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-[#E5E7EB]">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#4F46E5] to-[#2563EB] rounded-lg flex items-center justify-center">
                <img 
                  src="/Bold Minimalist Logo for S Cart with Movement.svg" 
                  alt="S Cart Logo" 
                  className="w-8 h-8"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/products')}
                className="px-4 py-2 text-[#4F46E5] hover:text-[#2563EB] transition"
              >
                ← Back to Products
              </button>
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

      {/* Brand Header */}
      <div className={`w-full bg-gradient-to-r ${currentBrand.color} py-12`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
            <div className="mb-6 md:mb-0 md:mr-8">
              <img 
                src={currentBrand.logo} 
                alt={currentBrand.name} 
                className="h-24 w-auto object-contain filter brightness-0 invert"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{currentBrand.name}</h1>
              <p className="text-xl text-white/90 max-w-2xl">{currentBrand.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-[#111827] mb-6 text-center">Discover {currentBrand.name} Products</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder={`Search ${currentBrand.name} products...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pb-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-[#111827] mb-2">No products found</h3>
            <p className="text-[#6B7280]">Try adjusting your search terms</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#111827] mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-[#6B7280] text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-[#10B981]">{formatPrice(product.price)}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="px-4 py-2 bg-[#4F46E5] text-white rounded-lg hover:bg-[#2563EB] transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandPage; 