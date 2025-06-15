import React from "react";
import { useTheme } from "../context/ThemeContext";

const Login = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white text-gray-800 dark:bg-black dark:text-gray-100 transition duration-300">
      <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl px-8 py-10 w-full max-w-md border border-gray-200 dark:border-gray-700 backdrop-blur-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={theme === "dark" ? "/icon(White).png" : "/icon(Blue).png"}
            alt="VYPA Logo"
            className="h-10"
          />
        </div>

        {/* Welcome Text */}
        <h2 className="text-center text-2xl font-bold mb-1">
          Welcome back to <span className="text-blue-600">VYPΛ</span>
        </h2>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6">Login to your dashboard</p>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="admin@vypa.ca"
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg px-4 py-2 text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg px-4 py-2 text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Forgot Password Link */}
        <div className="text-right mb-6">
          <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
        </div>

        {/* Login Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition">
          Login
        </button>

        {/* Sign Up Link */}
        <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline font-medium">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
