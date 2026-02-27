/**
 * PageHeader Component
 * Consistent page header with yellow theme for all pages
 * Handles the negative margin to work with Layout padding
 */

import React from 'react';
import { Heart } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  backgroundImage?: string;
  size?: 'small' | 'medium' | 'large';
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  description,
  badge,
  backgroundImage = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920',
  size = 'medium',
}) => {
  const sizeClasses = {
    small: 'py-12 lg:py-16',
    medium: 'py-16 lg:py-24',
    large: 'py-20 lg:py-32',
  };

  return (
    <section 
      className={`relative bg-gray-900 text-white ${sizeClasses[size]} -mt-20 md:-mt-28`}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Yellow gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-yellow-500/30" />
      
      <div className="container mx-auto px-4 relative z-10 pt-20 md:pt-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {badge && (
            <span className="inline-block bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              {badge}
            </span>
          )}
          
          {/* Subtitle */}
          {subtitle && (
            <span className="flex items-center justify-center gap-2 text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-4">
              <Heart className="w-4 h-4 fill-current" />
              {subtitle}
            </span>
          )}
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {title.includes('|') ? (
              <>
                {title.split('|')[0]}
                <span className="text-yellow-400">{title.split('|')[1]}</span>
              </>
            ) : (
              title
            )}
          </h1>
          
          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
