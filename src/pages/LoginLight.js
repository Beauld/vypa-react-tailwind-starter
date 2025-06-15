import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 px-4 text-gray-800">
      <div className="bg-white shadow-2xl rounded-2xl px-8 py-10 w-full max-w-md border border-gray-200">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="VYPA Logo" className="h-10" />
        </div>

        {/* Welcome Text */}
        <h2 className="text-center text-2xl font-bold mb-1">
          Welcome back to <span className="text-blue-600">VYPΛ</span>
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Login to your dashboard
        </p>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="admin@vypa.ca"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end mb-6">
          <a href="#" className="text-sm text-blue-600 hover:underline font-medium">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
          Login
        </button>

        {/* Sign Up Link */}
        <p className="mt-4 text-sm text-center text-gray-500">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";