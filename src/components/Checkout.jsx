import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    doorNo: "",
    streetName: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const formatPrice = (price) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.doorNo.trim()) newErrors.doorNo = "Door/Flat number is required";
    if (!formData.streetName.trim()) newErrors.streetName = "Street name is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Pincode must be 6 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before checkout.");
      navigate('/products');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      const orderDetails = {
        orderId: `ORD-${Date.now()}`,
        items: cartItems,
        total: total,
        deliveryAddress: formData,
        orderDate: new Date().toISOString(),
        paymentMethod: "Cash on Delivery"
      };

      // Clear cart and navigate to confirmation
      clearCart();
      navigate('/order-confirmation', { state: { orderDetails } });
    } catch (error) {
      console.error('Order processing failed:', error);
      alert('There was an error processing your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToCart = () => {
    navigate('/cart');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#111827] mb-4">Your cart is empty</h2>
          <p className="text-[#6B7280] mb-6">Please add items to your cart before checkout.</p>
          <button
            onClick={() => navigate('/products')}
            className="px-6 py-3 bg-[#4F46E5] text-white rounded-lg hover:bg-[#2563EB] transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
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
              onClick={handleBackToCart}
              className="px-6 py-3 bg-gray-100 text-[#111827] rounded-lg hover:bg-gray-200 transition-all duration-200"
            >
              Back to Cart
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#111827] mb-6">Delivery Information</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent ${
                      errors.firstName ? 'border-red-500' : 'border-[#D1D5DB]'
                    }`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent ${
                      errors.lastName ? 'border-red-500' : 'border-[#D1D5DB]'
                    }`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-[#D1D5DB]'
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent ${
                      errors.phone ? 'border-red-500' : 'border-[#D1D5DB]'
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Address Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Door/Flat Number *
                  </label>
                  <input
                    type="text"
                    name="doorNo"
                    value={formData.doorNo}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent ${
                      errors.doorNo ? 'border-red-500' : 'border-[#D1D5DB]'
                    }`}
                    placeholder="e.g., 123, Flat 4A"
                  />
                  {errors.doorNo && (
                    <p className="text-red-500 text-sm mt-1">{errors.doorNo}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Street Name *
                  </label>
                  <input
                    type="text"
                    name="streetName"
                    value={formData.streetName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent ${
                      errors.streetName ? 'border-red-500' : 'border-[#D1D5DB]'
                    }`}
                    placeholder="Enter street name"
                  />
                  {errors.streetName && (
                    <p className="text-red-500 text-sm mt-1">{errors.streetName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent ${
                      errors.city ? 'border-red-500' : 'border-[#D1D5DB]'
                    }`}
                    placeholder="Enter city"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent ${
                      errors.state ? 'border-red-500' : 'border-[#D1D5DB]'
                    }`}
                    placeholder="Enter state"
                  />
                  {errors.state && (
                    <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent ${
                      errors.pincode ? 'border-red-500' : 'border-[#D1D5DB]'
                    }`}
                    placeholder="Enter pincode"
                    maxLength="6"
                  />
                  {errors.pincode && (
                    <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-[#4F46E5] to-[#2563EB] text-white rounded-lg hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-200 font-semibold text-lg shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                    Processing Order...
                  </div>
                ) : (
                  `Place Order - ${formatPrice(total)}`
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-lg p-8 h-fit">
            <h2 className="text-2xl font-bold text-[#111827] mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border border-[#E5E7EB] rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#111827]">{item.name}</h3>
                    <p className="text-[#6B7280] text-sm">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-semibold text-[#111827]">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#E5E7EB] pt-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                <span className="font-semibold text-[#111827]">{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Shipping</span>
                <span className="font-semibold text-[#10B981]">Free</span>
              </div>
              <div className="border-t border-[#E5E7EB] pt-3">
                <div className="flex justify-between">
                  <span className="text-xl font-bold text-[#111827]">Total</span>
                  <span className="text-xl font-bold text-[#10B981]">{formatPrice(total)}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#F0F9FF] rounded-lg">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-[#2563EB] font-medium">Cash on Delivery</span>
              </div>
              <p className="text-sm text-[#6B7280] mt-1">Pay with cash when your order is delivered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 