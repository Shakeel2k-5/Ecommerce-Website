import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

interface OrderDetails {
  items: any[];
  total: number;
  deliveryAddress: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    doorNo: string;
    streetName: string;
    city: string;
    state: string;
    pincode: string;
  };
}

const OrderConfirmation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { clearCart } = useCart();
  
  const orderDetails = location.state?.orderDetails as OrderDetails;

  React.useEffect(() => {
    // Clear the cart after successful order - only run once
    if (clearCart) {
      clearCart();
    }
  }, []); // Empty dependency array to run only once

  const handleContinueShopping = () => {
    console.log('Continue Shopping clicked');
    navigate('/products');
  };

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#111827] mb-4">Order not found</h2>
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Order Placed Text */}
          <h1 className="text-3xl font-bold text-[#111827] mb-4">Order Placed!</h1>
          <p className="text-[#6B7280] text-lg mb-8">
            Thank you for your order. We'll send you a confirmation email shortly.
          </p>

          {/* Order Summary */}
          <div className="bg-[#F9FAFB] rounded-lg p-6 mb-8 text-left">
            <h2 className="text-xl font-semibold text-[#111827] mb-4">Order Summary</h2>
            <div className="space-y-3">
              {orderDetails.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex-1">
                    <p className="font-medium text-[#111827]">{item.name}</p>
                    <p className="text-[#6B7280] text-sm">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-semibold text-[#111827]">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t border-[#E5E7EB] pt-3">
                <div className="flex justify-between">
                  <span className="text-lg font-bold text-[#111827]">Total</span>
                  <span className="text-lg font-bold text-[#10B981]">${orderDetails.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="bg-[#F9FAFB] rounded-lg p-6 mb-8 text-left">
            <h2 className="text-xl font-semibold text-[#111827] mb-4">Delivery Address</h2>
            <div className="space-y-2 text-[#6B7280]">
              <p className="font-medium text-[#111827]">{orderDetails.deliveryAddress.firstName} {orderDetails.deliveryAddress.lastName}</p>
              <p>{orderDetails.deliveryAddress.doorNo}, {orderDetails.deliveryAddress.streetName}</p>
              <p>
                {orderDetails.deliveryAddress.city}, {orderDetails.deliveryAddress.state} {orderDetails.deliveryAddress.pincode}
              </p>
              <p>Phone: {orderDetails.deliveryAddress.phone}</p>
              <p>Email: {orderDetails.deliveryAddress.email}</p>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-[#F9FAFB] rounded-lg p-6 mb-8 text-left">
            <h2 className="text-xl font-semibold text-[#111827] mb-4">Payment Method</h2>
            <p className="text-[#6B7280]">Cash on Delivery (COD)</p>
            <p className="text-[#6B7280] text-sm mt-1">
              Pay with cash when your order is delivered
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-[#EFF6FF] rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-[#111827] mb-4">What's Next?</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#4F46E5] text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-medium text-[#111827]">Order Confirmation</p>
                  <p className="text-[#6B7280] text-sm">You'll receive an email confirmation shortly</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#4F46E5] text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-medium text-[#111827]">Order Processing</p>
                  <p className="text-[#6B7280] text-sm">We'll process and prepare your order</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#4F46E5] text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-medium text-[#111827]">Delivery</p>
                  <p className="text-[#6B7280] text-sm">Your order will be delivered within 3-5 business days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center">
            <button
              onClick={handleContinueShopping}
              className="px-8 py-3 bg-[#4F46E5] text-white rounded-lg hover:bg-[#2563EB] transition font-semibold"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation; 