import React from 'react';
import { cn } from '@/utils/cn';

/**
 * Button Component
 * Reusable button with multiple variants matching Dogs Trust styling
 */

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = `
    inline-flex items-center justify-center font-semibold rounded-lg
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-[#FFD100] text-[#002B5C] hover:bg-[#FFE34D]
      focus:ring-[#FFD100] active:bg-[#E6BC00]
    `,
    secondary: `
      bg-[#002B5C] text-white hover:bg-[#003D82]
      focus:ring-[#002B5C] active:bg-[#001F42]
    `,
    outline: `
      border-2 border-[#002B5C] text-[#002B5C] bg-transparent
      hover:bg-[#002B5C] hover:text-white
      focus:ring-[#002B5C]
    `,
    ghost: `
      text-[#002B5C] bg-transparent hover:bg-gray-100
      focus:ring-gray-300
    `,
    danger: `
      bg-red-600 text-white hover:bg-red-700
      focus:ring-red-500
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="flex-shrink-0" aria-hidden="true">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="flex-shrink-0" aria-hidden="true">{rightIcon}</span>}
    </button>
  );
};
