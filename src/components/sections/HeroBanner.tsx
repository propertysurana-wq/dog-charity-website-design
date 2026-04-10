import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';

/**
 * HeroBanner Component
 * Main hero section with background image and CTAs
 * Uses consistent yellow (#FFD100) theme throughout
 */

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    label: string;
    path: string;
  };
  secondaryCTA?: {
    label: string;
    path: string;
  };
  backgroundImage?: string;
  variant?: 'default' | 'centered' | 'minimal';
  overlay?: boolean;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage = 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&h=800&fit=crop',
  variant = 'default',
  overlay = true,
}) => {
  const variants = {
    default: 'text-left',
    centered: 'text-center items-center',
    minimal: 'text-left py-16',
  };

  return (
    <section
      className={cn(
        'relative min-h-[500px] lg:min-h-[600px] flex items-center -mt-20 md:-mt-28',
        variant === 'minimal' && 'min-h-[400px]'
      )}
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        role="img"
        aria-label="Happy dogs in a field"
      />

      {/* Overlay - Using yellow theme gradient */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-yellow-500/30" />
      )}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 pt-32 md:pt-40 w-full">
        <div
          className={cn(
            'flex flex-col max-w-2xl',
            variants[variant],
            variant === 'centered' && 'mx-auto'
          )}
        >
          {/* Subtitle Badge */}
          {subtitle && (
            <span className="inline-flex items-center gap-2 text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-4">
              <Heart className="w-4 h-4 fill-current" />
              {subtitle}
            </span>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              {description}
            </p>
          )}

          {/* CTAs - Using yellow theme */}
          <div className={cn('flex flex-col sm:flex-row gap-4', variant === 'centered' && 'justify-center')}>
            {primaryCTA && (
              <Link to={primaryCTA.path}>
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                >
                  {primaryCTA.label}
                </Button>
              </Link>
            )}
            {secondaryCTA && (
              <Link to={secondaryCTA.path}>
                <Button variant="outline" size="lg" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900">
                  {secondaryCTA.label}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};
