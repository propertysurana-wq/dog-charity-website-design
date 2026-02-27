import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

/**
 * CTABanner Component
 * Call-to-action banner for donations
 */

interface CTABannerProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export const CTABanner: React.FC<CTABannerProps> = ({
  title = 'Help Us Save More Dogs',
  description = 'Every donation helps us rescue, rehabilitate, and rehome dogs in need. Together, we can give every dog the loving home they deserve.',
  primaryButtonText = 'Donate Now',
  primaryButtonLink = '/donate',
  secondaryButtonText = 'Learn More',
  secondaryButtonLink = '/about',
}) => {
  return (
    <section
      className="py-16 bg-gradient-to-r from-[#FFD100] to-[#FFE34D]"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <Heart className="w-8 h-8 text-[#002B5C] fill-current" aria-hidden="true" />
              <span className="text-[#002B5C] font-semibold uppercase tracking-wider text-sm">
                Make a Difference
              </span>
            </div>
            <h2
              id="cta-heading"
              className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4"
            >
              {title}
            </h2>
            <p className="text-[#002B5C]/80 max-w-2xl">
              {description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={primaryButtonLink}>
              <Button
                variant="secondary"
                size="lg"
                leftIcon={<Heart className="w-5 h-5" />}
              >
                {primaryButtonText}
              </Button>
            </Link>
            <Link to={secondaryButtonLink}>
              <Button
                variant="outline"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="border-[#002B5C] text-[#002B5C] hover:bg-[#002B5C] hover:text-white"
              >
                {secondaryButtonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
