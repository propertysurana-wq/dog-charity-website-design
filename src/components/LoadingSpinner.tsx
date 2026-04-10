/**
 * Loading Spinner Component
 * Displays a loading animation while content is being fetched
 */
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  message = 'Loading...',
  fullScreen = false,
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6 border-2',
    md: 'w-12 h-12 border-3',
    lg: 'w-16 h-16 border-4',
  };

  const containerClasses = fullScreen
    ? 'fixed inset-0 bg-white bg-opacity-90 z-50 flex items-center justify-center'
    : 'flex items-center justify-center p-8';

  return (
    <div className={containerClasses} role="status" aria-live="polite">
      <div className="text-center">
        {/* Animated Dog Paw */}
        <div className="relative mb-4">
          <div
            className={`${sizeClasses[size]} border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto`}
            style={{ borderStyle: 'solid' }}
          />
          <span className="absolute inset-0 flex items-center justify-center text-xl">
            🐾
          </span>
        </div>
        
        {/* Loading Text */}
        {message && (
          <p className="text-gray-600 font-medium animate-pulse">{message}</p>
        )}
        
        {/* Screen reader text */}
        <span className="sr-only">Loading content, please wait</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
