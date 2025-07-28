import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    alert(`Account created for ${name}`);
    // Redirect to login page after successful signup
    navigate('/login');
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center relative bg-[#F9FAFB]"
      style={{
        backgroundImage: "url('/login-bg-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 w-full max-w-md mx-4 p-8 space-y-6 bg-white rounded-lg shadow-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-[#4F46E5] to-[#2563EB] rounded-lg flex items-center justify-center">
            <img 
              src="/Bold Minimalist Logo for S Cart with Movement.svg" 
              alt="S Cart Logo" 
              className="w-12 h-12"
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-[#111827]">Join Us Today</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium text-[#111827]">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-[#111827]">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-[#111827]">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-[#E5E7EB] rounded focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-[#4F46E5] rounded hover:bg-[#2563EB] transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-[#6B7280]">
          Already have an account?{' '}
          <Link to="/login" className="text-[#4F46E5] hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup; 