import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  features?: string[];
  specifications?: { [key: string]: string };
  images?: string[];
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, clearCart, cartCount } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Enhanced product data with more details
  const products: Product[] = [
    {
      id: 1,
      name: "Sony WH-1000XM4 Wireless Headphones",
      price: 24999,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
      description: "Industry-leading noise canceling wireless headphones with 30-hour battery life and exceptional sound quality.",
      category: "electronics",
      features: [
        "Industry-leading noise cancellation",
        "30-hour battery life",
        "Touch controls",
        "Quick Charge (10 min = 5 hours)",
        "Speak-to-Chat technology",
        "Multipoint connection"
      ],
      specifications: {
        "Driver Unit": "40mm",
        "Frequency Response": "4Hz-40,000Hz",
        "Battery Life": "Up to 30 hours",
        "Weight": "254g",
        "Connectivity": "Bluetooth 5.0"
      },
      images: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max",
      price: 149999,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop",
      description: "The most advanced iPhone ever with A17 Pro chip, titanium design, and revolutionary camera system.",
      category: "electronics",
      features: [
        "A17 Pro chip with 6-core GPU",
        "Titanium design",
        "48MP Main camera",
        "5x Telephoto camera",
        "Action button",
        "USB-C connector"
      ],
      specifications: {
        "Display": "6.7-inch Super Retina XDR",
        "Storage": "256GB, 512GB, 1TB",
        "Camera": "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
        "Battery": "Up to 29 hours video playback",
        "Chip": "A17 Pro"
      },
      images: [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      name: "Nike Air Zoom Pegasus 40",
      price: 12999,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      description: "The perfect running shoe with responsive cushioning and breathable mesh upper for ultimate comfort.",
      category: "sports",
      features: [
        "Responsive Air Zoom cushioning",
        "Breathable mesh upper",
        "Durable rubber outsole",
        "Reflective details",
        "Wide toe box",
        "Lightweight design"
      ],
      specifications: {
        "Weight": "280g (Men's size 9)",
        "Drop": "10mm",
        "Stack Height": "35mm heel, 25mm forefoot",
        "Upper": "Engineered mesh",
        "Midsole": "Nike Air Zoom + Cushlon"
      },
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      name: "Breville Barista Express Espresso Machine",
      price: 89999,
      image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&h=600&fit=crop",
      description: "Professional-grade espresso machine with built-in grinder for café-quality coffee at home.",
      category: "home",
      features: [
        "Built-in conical burr grinder",
        "15-bar Italian pump",
        "Thermocoil heating system",
        "Steam wand for milk frothing",
        "Pressure gauge",
        "Programmable shot volume"
      ],
      specifications: {
        "Power": "1600W",
        "Water Tank": "2L",
        "Grinder": "Conical burr",
        "Pressure": "15 bar",
        "Dimensions": "31.5 x 34.5 x 40.5 cm"
      },
      images: [
        "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=600&fit=crop"
      ]
    },
    {
      id: 5,
      name: "MacBook Pro 16-inch M3 Max",
      price: 349999,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=600&fit=crop",
      description: "The most powerful MacBook Pro ever with M3 Max chip, Liquid Retina XDR display, and up to 22-core GPU.",
      category: "electronics",
      features: [
        "M3 Max chip with up to 22-core GPU",
        "16-inch Liquid Retina XDR display",
        "Up to 128GB unified memory",
        "Up to 8TB SSD storage",
        "Pro camera system",
        "Studio-quality microphones"
      ],
      specifications: {
        "Processor": "M3 Max (14-core CPU, 30-core GPU)",
        "Memory": "32GB unified memory",
        "Storage": "1TB SSD",
        "Display": "16-inch Liquid Retina XDR",
        "Battery": "Up to 22 hours"
      },
      images: [
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=600&fit=crop"
      ]
    },
    {
      id: 6,
      name: "Lululemon Align Yoga Mat",
      price: 3999,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop",
      description: "Premium yoga mat with perfect cushioning and grip for all types of yoga practice.",
      category: "sports",
      features: [
        "5mm thickness for comfort",
        "Non-slip surface",
        "Moisture-wicking technology",
        "Lightweight and portable",
        "Eco-friendly materials",
        "Alignment lines"
      ],
      specifications: {
        "Thickness": "5mm",
        "Length": "183cm",
        "Width": "61cm",
        "Weight": "2.5kg",
        "Material": "Natural rubber"
      },
      images: [
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop"
      ]
    },
    {
      id: 7,
      name: "Samsung 65-inch QLED 4K Smart TV",
      price: 129999,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=600&fit=crop",
      description: "Stunning QLED display with Quantum HDR and Smart TV features for immersive entertainment.",
      category: "electronics",
      features: [
        "QLED Quantum Dot technology",
        "4K Ultra HD resolution",
        "Quantum HDR",
        "Smart TV with Bixby",
        "Game Mode",
        "Ambient Mode"
      ],
      specifications: {
        "Screen Size": "65 inches",
        "Resolution": "3840 x 2160 (4K)",
        "HDR": "Quantum HDR",
        "Smart Platform": "Tizen OS",
        "Connectivity": "4 HDMI, 2 USB"
      },
      images: [
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=600&fit=crop"
      ]
    },
    {
      id: 8,
      name: "Dyson V15 Detect Cordless Vacuum",
      price: 54999,
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop",
      description: "Revolutionary cordless vacuum with laser dust detection and powerful suction for deep cleaning.",
      category: "home",
      features: [
        "Laser dust detection",
        "240AW suction power",
        "60-minute runtime",
        "HEPA filtration",
        "LCD screen",
        "5 cleaning modes"
      ],
      specifications: {
        "Suction Power": "240AW",
        "Runtime": "Up to 60 minutes",
        "Dust Bin": "0.54L",
        "Weight": "2.6kg",
        "Charging Time": "4.5 hours"
      },
      images: [
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop"
      ]
    }
  ];

  const product = products.find(p => p.id === parseInt(id || "0"));

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#111827] mb-4">Product not found</h2>
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

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const handleBuyNow = () => {
    // Clear cart and add only this product
    clearCart();
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    // Navigate to checkout
    navigate('/checkout');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-[#111827]">E-Commerce Store</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/products')}
                className="px-4 py-2 text-[#4F46E5] hover:text-[#2563EB] transition"
              >
                ← Back to Products
              </button>
              <button
                onClick={() => navigate('/cart')}
                className="relative px-4 py-2 bg-[#4F46E5] text-white rounded-lg hover:bg-[#2563EB] transition"
              >
                🛒 Cart
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#F43F5E] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.images ? product.images[selectedImage] : product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-3 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition ${
                        selectedImage === index ? 'border-[#4F46E5]' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-[#111827] mb-2">{product.name}</h1>
                <p className="text-[#6B7280] text-lg">{product.description}</p>
              </div>

              <div className="text-3xl font-bold text-[#10B981]">
                {formatPrice(product.price)}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <label className="text-[#111827] font-medium">Quantity:</label>
                <div className="flex items-center border border-[#E5E7EB] rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-[#6B7280] hover:text-[#111827] transition"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-[#111827] font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-[#6B7280] hover:text-[#111827] transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleAddToCart}
                  className="w-full py-4 bg-[#4F46E5] text-white rounded-lg hover:bg-[#2563EB] transition font-semibold text-lg"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="w-full py-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-white rounded-lg hover:from-[#059669] hover:to-[#047857] transition font-semibold text-lg shadow-md hover:shadow-lg"
                >
                  Buy Now
                </button>
              </div>

              {/* Features */}
              {product.features && (
                <div className="bg-[#F9FAFB] rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#111827] mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-[#6B7280]">
                        <span className="w-2 h-2 bg-[#10B981] rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specifications */}
              {product.specifications && (
                <div className="bg-[#F9FAFB] rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#111827] mb-4">Specifications</h3>
                  <div className="space-y-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-[#E5E7EB] last:border-b-0">
                        <span className="text-[#6B7280]">{key}</span>
                        <span className="text-[#111827] font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 