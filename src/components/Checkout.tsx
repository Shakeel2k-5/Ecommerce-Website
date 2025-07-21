import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

interface CheckoutForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  doorNo: string;
  streetName: string;
  city: string;
  state: string;
  pincode: string;
}

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const [formData, setFormData] = useState<CheckoutForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    doorNo: "",
    streetName: "",
    city: "",
    state: "",
    pincode: ""
  });

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/order-confirmation', { 
      state: { 
        orderDetails: {
          items: cartItems,
          total: total,
          deliveryAddress: formData
        }
      }
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#F9FAFB]">
        <header className="bg-white shadow-sm">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4F46E5] to-[#2563EB] rounded-lg flex items-center justify-center">
                  <img
                    src="/Bold Minimalist Logo for S Cart with Movement.svg"
                    alt="S Cart Logo"
                    className="w-8 h-8"
                  />
                </div>
                <h1 className="text-2xl font-bold text-[#111827]">Checkout</h1>
              </div>
              <button
                onClick={() => navigate('/products')}
                className="px-4 py-2 bg-[#4F46E5] text-white rounded hover:bg-[#2563EB] transition"
              >
                Continue Shopping at S Cart
              </button>
            </div>
          </div>
        </header>

        <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-[#111827] mb-2">Your cart is empty</h2>
            <p className="text-[#6B7280] mb-6">You need to add items to your cart before checkout.</p>
            <button
              onClick={() => navigate('/products')}
              className="px-6 py-3 bg-[#4F46E5] text-white rounded-lg hover:bg-[#2563EB] transition"
            >
              Start Shopping at S Cart
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <header className="bg-white shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#4F46E5] to-[#2563EB] rounded-lg flex items-center justify-center">
                <img
                  src="/Bold Minimalist Logo for S Cart with Movement.svg"
                  alt="S Cart Logo"
                  className="w-8 h-8"
                />
              </div>
              <h1 className="text-2xl font-bold text-[#111827]">Checkout</h1>
            </div>
            <button
              onClick={() => navigate('/cart')}
              className="px-4 py-2 bg-[#6B7280] text-white rounded hover:bg-[#4B5563] transition"
            >
              Back to Cart
            </button>
          </div>
        </div>
      </header>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#111827] mb-6">Delivery Address</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1 font-medium text-[#111827]">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium text-[#111827]">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1 font-medium text-[#111827]">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium text-[#111827]">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1 font-medium text-[#111827]">Door No *</label>
                      <input
                        type="text"
                        name="doorNo"
                        value={formData.doorNo}
                        onChange={handleInputChange}
                        required
                        placeholder="Door/Flat number"
                        className="w-full px-3 py-2 border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium text-[#111827]">Street Name *</label>
                      <input
                        type="text"
                        name="streetName"
                        value={formData.streetName}
                        onChange={handleInputChange}
                        required
                        placeholder="Street name, area, landmark"
                        className="w-full px-3 py-2 border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block mb-1 font-medium text-[#111827]">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium text-[#111827]">State *</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium text-[#111827]">Pincode *</label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        required
                        placeholder="6-digit pincode"
                        className="w-full px-3 py-2 border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
                      />
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="mt-6 p-4 bg-[#F9FAFB] rounded-lg">
                    <h3 className="text-lg font-semibold text-[#111827] mb-3">Payment Method</h3>
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="cod"
                        name="paymentMethod"
                        value="cod"
                        defaultChecked
                        className="text-[#4F46E5] focus:ring-[#4F46E5]"
                      />
                      <label htmlFor="cod" className="text-[#111827] font-medium">
                        Cash on Delivery (COD)
                      </label>
                    </div>
                    <p className="text-[#6B7280] text-sm mt-2">
                      Pay with cash when your order is delivered
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-[#111827] mb-4">Order Summary</h2>
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex-1">
                      <p className="font-medium text-[#111827]">{item.name}</p>
                      <p className="text-[#6B7280] text-sm">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-semibold text-[#111827]">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
                <div className="border-t border-[#E5E7EB] pt-3">
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Subtotal</span>
                    <span className="font-semibold text-[#111827]">{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Shipping</span>
                    <span className="font-semibold text-[#111827]">Free</span>
                  </div>
                  <div className="border-t border-[#E5E7EB] pt-3">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-[#111827]">Total</span>
                      <span className="text-lg font-bold text-[#10B981]">{formatPrice(total)}</span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full mt-6 py-3 bg-[#4F46E5] text-white rounded-lg hover:bg-[#2563EB] transition font-semibold"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 