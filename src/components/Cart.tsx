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

  const handleCheckout = () => {
    alert("Checkout functionality coming soon!");
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#F9FAFB]">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <h1 className="text-2xl font-bold text-[#111827]">Shopping Cart</h1>
              <button
                onClick={() => navigate('/products')}
                className="px-4 py-2 bg-[#4F46E5] text-white rounded hover:bg-[#2563EB] transition"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-[#111827] mb-2">Your cart is empty</h2>
            <p className="text-[#6B7280] mb-6">Looks like you haven't added any products to your cart yet.</p>
            <button
              onClick={handleContinueShopping}
              className="px-6 py-3 bg-[#4F46E5] text-white rounded-lg hover:bg-[#2563EB] transition"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-[#111827]">Shopping Cart</h1>
            <button
              onClick={() => navigate('/products')}
              className="px-4 py-2 bg-[#4F46E5] text-white rounded hover:bg-[#2563EB] transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#111827] mb-4">Cart Items ({cartItems.length})</h2>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border border-[#E5E7EB] rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#111827]">{item.name}</h3>
                        <p className="text-[#10B981] font-bold">${item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="w-8 h-8 bg-[#E5E7EB] text-[#111827] rounded hover:bg-[#D1D5DB] transition"
                        >
                          -
                        </button>
                        <span className="w-12 text-center font-semibold text-[#111827]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-[#E5E7EB] text-[#111827] rounded hover:bg-[#D1D5DB] transition"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-[#111827]">${(item.price * item.quantity).toFixed(2)}</p>
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
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-[#111827] mb-4">Order Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="font-semibold text-[#111827]">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Shipping</span>
                  <span className="font-semibold text-[#111827]">Free</span>
                </div>
                <div className="border-t border-[#E5E7EB] pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-[#111827]">Total</span>
                    <span className="text-lg font-bold text-[#10B981]">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full mt-6 py-3 bg-[#4F46E5] text-white rounded-lg hover:bg-[#2563EB] transition font-semibold"
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