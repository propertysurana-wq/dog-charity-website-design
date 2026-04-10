import React from 'react';
import { cn } from '@/utils/cn';

/**
 * Card Component
 * Flexible card container with various styling options
 */

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false,
  padding = 'md',
}) => {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-md overflow-hidden',
        hover && 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg',
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * CardImage Component
 * Image section for cards
 */

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'wide';
}

export const CardImage: React.FC<CardImageProps> = ({
  src,
  alt,
  className,
  aspectRatio = 'square',
}) => {
  const aspectRatios = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[2/1]',
  };

  return (
    <div className={cn('overflow-hidden', aspectRatios[aspectRatio], className)}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
    </div>
  );
};

/**
 * CardContent Component
 * Content section for cards
 */

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  return <div className={cn('p-4', className)}>{children}</div>;
};

/**
 * CardTitle Component
 * Title for cards
 */

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => {
  return (
    <h3 className={cn('text-xl font-bold text-[#002B5C] mb-2', className)}>
      {children}
    </h3>
  );
};

/**
 * CardDescription Component
 * Description text for cards
 */

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, className }) => {
  return (
    <p className={cn('text-gray-600 text-sm', className)}>
      {children}
    </p>
  );
};
