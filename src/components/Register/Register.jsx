import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      {/* Container to center the content vertically and horizontally */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
        {/* Register Form Container */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Create Your Account</h2>
          <p className="text-gray-600 text-center mb-6">Enter your details to register.</p>

          {/* Register Form */}
          <form>
            {/* Full Name Input */}
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700 text-sm font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:outline-none"
                required
                placeholder="John Doe"
              />
            </div>

            {/* Email Address Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:outline-none"
                required
                placeholder="youremail@example.com"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
                Password *
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:outline-none"
                required
                placeholder="••••••••"
              />
            </div>

            {/* Confirm Password Input */}
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-semibold mb-2">
                Confirm Password *
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-2 mb-3 border rounded-lg text-gray-700 focus:ring-blue-500 focus:outline-none"
                required
                placeholder="••••••••"
              />
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                id="acceptTerms"
                className="mr-2"
                required
              />
              <label htmlFor="acceptTerms" className="text-sm text-gray-600">
                I agree to the{" "}
                <Link to="/terms" className="text-blue-500 hover:underline">
                  Terms and Conditions
                </Link>
              </label>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Register
            </button>

            {/* Login Link */}
            <p className="text-gray-600 text-xs text-center mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
