import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Home, HandHeart, BookOpen, ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

/**
 * InfoCards Component
 * Section with cards highlighting key services/actions
 */

interface InfoCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
  color: string;
}

const infoCards: InfoCard[] = [
  {
    icon: <Home className="w-8 h-8" />,
    title: 'Adopt a Dog',
    description: 'Give a rescue dog a loving forever home. Browse our dogs waiting for adoption.',
    link: '/rehoming',
    linkText: 'Find your match',
    color: 'bg-[#FFD100]',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Donate',
    description: 'Your generosity helps us care for dogs and find them loving homes.',
    link: '/donate',
    linkText: 'Make a donation',
    color: 'bg-[#F58220]',
  },
  {
    icon: <HandHeart className="w-8 h-8" />,
    title: 'Volunteer',
    description: 'Join our team of dedicated volunteers and help make a difference.',
    link: '/get-involved',
    linkText: 'Get involved',
    color: 'bg-[#00A19A]',
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Dog Care Tips',
    description: 'Expert advice on training, health, and caring for your furry friend.',
    link: '/dog-care',
    linkText: 'Learn more',
    color: 'bg-[#78BE20]',
  },
];

export const InfoCards: React.FC = () => {
  return (
    <section className="py-16" aria-labelledby="info-cards-heading">
      <div className="max-w-7xl mx-auto px-4">
        <h2 id="info-cards-heading" className="sr-only">How You Can Help</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, index) => (
            <Link
              key={index}
              to={card.link}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Icon Header */}
              <div className={cn('p-6 text-white', card.color)}>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#002B5C] mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {card.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[#002B5C] font-semibold text-sm group-hover:gap-2 transition-all">
                  {card.linkText}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
