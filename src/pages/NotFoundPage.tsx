/**
 * 404 Not Found Page
 * Displays when users navigate to a non-existent route
 */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-[70vh] bg-gradient-to-b from-yellow-50 to-white flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full text-center">
          {/* Dog Illustration */}
          <div className="mb-8">
            <div className="relative inline-block">
              <span className="text-[120px] md:text-[180px] font-bold text-yellow-400 leading-none">
                404
              </span>
              {/* Decorative paw prints */}
              <div className="absolute -top-4 -right-4 text-4xl animate-bounce">
                🐾
              </div>
              <div className="absolute -bottom-2 -left-4 text-3xl animate-pulse">
                🐕
              </div>
            </div>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            Oops! This page has gone for a walk
          </h1>

          <p className="text-gray-600 mb-8 text-base md:text-lg max-w-md mx-auto">
            The page you are looking for might have been moved, deleted, or perhaps 
            never existed. Let us help you find your way back.
          </p>

          {/* Quick Links */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Here are some helpful links:
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Link
                to="/"
                className="flex flex-col items-center p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors group"
              >
                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">🏠</span>
                <span className="text-sm font-medium text-gray-700">Home</span>
              </Link>
              <Link
                to="/about-us"
                className="flex flex-col items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
              >
                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">ℹ️</span>
                <span className="text-sm font-medium text-gray-700">About Us</span>
              </Link>
              <Link
                to="/our-work"
                className="flex flex-col items-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group"
              >
                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">💼</span>
                <span className="text-sm font-medium text-gray-700">Our Work</span>
              </Link>
              <Link
                to="/contact-us"
                className="flex flex-col items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors group"
              >
                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">📞</span>
                <span className="text-sm font-medium text-gray-700">Contact</span>
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              aria-label="Go back to previous page"
            >
              ← Go Back
            </button>
            <Link
              to="/"
              className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              aria-label="Go to homepage"
            >
              Go to Homepage
            </Link>
          </div>

          {/* Emergency Contact */}
          <div className="mt-12 p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="text-red-800 font-medium">
              🚨 Emergency? Spotted an injured dog?
            </p>
            <a
              href="tel:+919876543210"
              className="text-red-600 font-bold text-lg hover:underline"
            >
              Call +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
