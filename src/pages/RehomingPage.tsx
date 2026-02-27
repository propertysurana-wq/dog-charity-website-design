import React, { useState, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { DogCard } from '@/components/sections/DogCard';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { placeholderDogs } from '@/constants/theme';

/**
 * RehomingPage Component
 * Page displaying all dogs available for adoption with filtering
 */

const RehomingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Toggle favorite
  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // Filter dogs based on criteria
  const filteredDogs = useMemo(() => {
    return placeholderDogs.filter((dog) => {
      const matchesSearch =
        dog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dog.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dog.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSize = !selectedSize || dog.size === selectedSize;
      const matchesGender = !selectedGender || dog.gender === selectedGender;

      return matchesSearch && matchesSize && matchesGender;
    });
  }, [searchTerm, selectedSize, selectedGender]);

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSize('');
    setSelectedGender('');
  };

  const hasActiveFilters = searchTerm || selectedSize || selectedGender;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#002B5C] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Find Your Perfect Companion
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Browse our lovely dogs looking for their forever homes. Use the filters
            to find the perfect match for your lifestyle.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white shadow-md sticky top-[128px] z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, breed, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD100] focus:border-transparent"
                aria-label="Search dogs"
              />
            </div>

            {/* Filter Toggle (Mobile) */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
              leftIcon={<Filter className="w-5 h-5" />}
            >
              Filters
              {hasActiveFilters && (
                <Badge variant="primary" size="sm" className="ml-2">
                  Active
                </Badge>
              )}
            </Button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-4">
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD100] bg-white"
                aria-label="Filter by size"
              >
                <option value="">All Sizes</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>

              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD100] bg-white"
                aria-label="Filter by gender"
              >
                <option value="">All Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  onClick={clearFilters}
                  leftIcon={<X className="w-4 h-4" />}
                >
                  Clear
                </Button>
              )}
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 flex flex-wrap gap-4">
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="flex-1 min-w-[140px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD100] bg-white"
                aria-label="Filter by size"
              >
                <option value="">All Sizes</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>

              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="flex-1 min-w-[140px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD100] bg-white"
                aria-label="Filter by gender"
              >
                <option value="">All Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              {hasActiveFilters && (
                <Button variant="ghost" onClick={clearFilters} fullWidth>
                  Clear Filters
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Results Count */}
          <p className="text-gray-600 mb-6">
            Showing <span className="font-semibold text-[#002B5C]">{filteredDogs.length}</span> dogs
          </p>

          {/* Dogs Grid */}
          {filteredDogs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDogs.map((dog) => (
                <DogCard
                  key={dog.id}
                  dog={dog}
                  onFavorite={toggleFavorite}
                  isFavorite={favorites.includes(dog.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-[#002B5C] mb-2">
                No dogs found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or filters to find more dogs.
              </p>
              <Button variant="primary" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Rehoming Process Info */}
      <section className="py-16 bg-white" id="process">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#002B5C] text-center mb-12">
            Our Rehoming Process
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Browse Dogs',
                description: 'Look through our available dogs and find ones that might be a good match.',
              },
              {
                step: '02',
                title: 'Submit Application',
                description: 'Fill out our adoption application to tell us about yourself and your home.',
              },
              {
                step: '03',
                title: 'Meet & Greet',
                description: 'Visit our centre to meet the dog and see if you are the right fit for each other.',
              },
              {
                step: '04',
                title: 'Take Them Home',
                description: 'Complete the adoption process and welcome your new family member home!',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#FFD100] rounded-full flex items-center justify-center mx-auto mb-4 text-[#002B5C] font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#002B5C] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RehomingPage;
