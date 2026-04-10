import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { DogCard } from './DogCard';
import { Button } from '@/components/ui/Button';
import { placeholderDogs, orgInfo } from '@/constants/theme';

/**
 * FeaturedDogs Component
 * Section displaying featured dogs available for rehoming
 */

export const FeaturedDogs: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((fav) => fav !== id)
        : [...prev, id]
    );
  };

  // Display only first 4 dogs
  const featuredDogs = placeholderDogs.slice(0, 4);

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="featured-dogs-heading">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#F58220] font-semibold text-sm uppercase tracking-wider mb-2">
            Find Your Perfect Match
          </span>
          <h2
            id="featured-dogs-heading"
            className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4"
          >
            Dogs Looking for a Home
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet some of the wonderful dogs at {orgInfo.name} waiting for their forever families.
            Each one has their own unique personality and plenty of love to give.
          </p>
        </div>

        {/* Dogs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredDogs.map((dog) => (
            <DogCard
              key={dog.id}
              dog={dog}
              onFavorite={toggleFavorite}
              isFavorite={favorites.includes(dog.id)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/rehoming">
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              See All Dogs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
