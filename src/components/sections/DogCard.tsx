import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Heart, Calendar, Ruler } from 'lucide-react';
import { Card, CardImage, CardContent, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

/**
 * Dog interface for type safety
 */
export interface Dog {
  id: string;
  name: string;
  breed: string;
  age: string;
  gender: string;
  size: string;
  image: string;
  description: string;
  location: string;
  goodWith?: string[];
}

/**
 * DogCard Component
 * Card component to display dog information
 */

interface DogCardProps {
  dog: Dog;
  onFavorite?: (id: string) => void;
  isFavorite?: boolean;
}

export const DogCard: React.FC<DogCardProps> = ({
  dog,
  onFavorite,
  isFavorite = false,
}) => {
  return (
    <Card hover padding="none" className="group">
      {/* Image Section */}
      <div className="relative">
        <CardImage
          src={dog.image}
          alt={`${dog.name} - ${dog.breed}`}
          aspectRatio="square"
        />
        
        {/* Favorite Button */}
        {onFavorite && (
          <button
            onClick={() => onFavorite(dog.id)}
            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
            aria-label={isFavorite ? `Remove ${dog.name} from favorites` : `Add ${dog.name} to favorites`}
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
              }`}
            />
          </button>
        )}

        {/* Status Badge */}
        <div className="absolute bottom-3 left-3">
          <Badge variant="primary" size="md">
            Available
          </Badge>
        </div>
      </div>

      {/* Content Section */}
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="mb-0">{dog.name}</CardTitle>
          <Badge variant={dog.gender === 'Male' ? 'info' : 'warning'} size="sm">
            {dog.gender}
          </Badge>
        </div>

        <p className="text-gray-600 font-medium mb-3">{dog.breed}</p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" aria-hidden="true" />
            <span>{dog.age}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Ruler className="w-4 h-4" aria-hidden="true" />
            <span>{dog.size}</span>
          </div>
          <div className="flex items-center gap-1.5 col-span-2">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span>{dog.location}</span>
          </div>
        </div>

        {/* Good With Tags */}
        {dog.goodWith && dog.goodWith.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {dog.goodWith.map((item) => (
              <Badge key={item} variant="success" size="sm">
                {item}
              </Badge>
            ))}
          </div>
        )}

        {/* CTA */}
        <Link to={`/rehoming/${dog.id}`} className="block">
          <Button variant="secondary" fullWidth>
            Meet {dog.name}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

/**
 * DogCardSkeleton Component
 * Loading skeleton for dog cards
 */
export const DogCardSkeleton: React.FC = () => {
  return (
    <Card padding="none" className="animate-pulse">
      <div className="aspect-square bg-gray-200" />
      <CardContent className="p-4">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded" />
        </div>
        <div className="h-10 bg-gray-200 rounded" />
      </CardContent>
    </Card>
  );
};
