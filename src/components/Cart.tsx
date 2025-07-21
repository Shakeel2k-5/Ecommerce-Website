import React from "react";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, updateQuantity, removeFromCart }) => {
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen w-full bg-[#F9FAFB]">
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
              <button
                onClick={() => navigate('/products')}
                className="px-6 py-3 bg-gradient-to-r from-[#4F46E5] to-[#2563EB] text-white rounded-lg hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </header>

        <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-[#F3F4F6] to-[#E5E7EB] rounded-full flex items-center justify-center">
              <span className="text-6xl">🛒</span>
            </div>
            <h2 className="text-3xl font-bold text-[#111827] mb-4">Your cart is empty</h2>
            <p className="text-[#6B7280] text-lg mb-8 max-w-md mx-auto">Looks like you haven't added any products to your cart yet. Start exploring our amazing collection!</p>
            <button
              onClick={handleContinueShopping}
              className="px-8 py-4 bg-gradient-to-r from-[#4F46E5] to-[#2563EB] text-white rounded-lg hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-200 font-semibold text-lg shadow-md hover:shadow-lg"
            >
              Start Shopping at S Cart
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#F9FAFB]">
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
            <button
              onClick={() => navigate('/products')}
              className="px-6 py-3 bg-gradient-to-r from-[#4F46E5] to-[#2563EB] text-white rounded-lg hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </header>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#111827] mb-6">Cart Items ({cartItems.length})</h2>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-6 border border-[#E5E7EB] rounded-xl hover:shadow-md transition-all duration-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#111827]">{item.name}</h3>
                        <p className="text-[#10B981] font-bold">{formatPrice(item.price)}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="w-10 h-10 bg-[#E5E7EB] text-[#111827] rounded-lg hover:bg-[#D1D5DB] transition-colors duration-200 font-bold"
                        >
                          -
                        </button>
                        <span className="w-16 text-center font-semibold text-[#111827] text-lg">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 bg-[#E5E7EB] text-[#111827] rounded-lg hover:bg-[#D1D5DB] transition-colors duration-200 font-bold"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-[#111827]">{formatPrice(item.price * item.quantity)}</p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#F43F5E] hover:text-[#E11D48] text-sm transition"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-[#111827] dark:text-white mb-4">Order Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#6B7280] dark:text-gray-400">Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="font-semibold text-[#111827] dark:text-white">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280] dark:text-gray-400">Shipping</span>
                  <span className="font-semibold text-[#111827] dark:text-white">Free</span>
                </div>
                <div className="border-t border-[#E5E7EB] dark:border-gray-600 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-[#111827] dark:text-white">Total</span>
                    <span className="text-lg font-bold text-[#10B981]">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full mt-6 py-4 bg-gradient-to-r from-[#4F46E5] to-[#2563EB] text-white rounded-lg hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-200 font-semibold text-lg shadow-md hover:shadow-lg"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 