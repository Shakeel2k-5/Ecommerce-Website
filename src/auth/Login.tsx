import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    // Redirect to product listing page after successful login
    navigate('/products');
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold text-center text-[#111827]">Login to Your Account</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>
      <p className="text-center text-[#6B7280]">
        Don't have an account?{' '}
        <Link to="/signup" className="text-[#4F46E5] hover:underline">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login; 