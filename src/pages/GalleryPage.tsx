import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Heart, Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { orgInfo } from '@/constants/theme';

/**
 * GalleryPage Component
 * Photo and video gallery showcasing dogs, events, facilities, and success stories
 */

// Gallery categories
type GalleryCategory = 'all' | 'dogs' | 'rescues' | 'events' | 'facilities' | 'adoptions';

interface GalleryImage {
  id: number;
  src: string;
  thumbnail: string;
  title: string;
  description: string;
  category: GalleryCategory;
  date?: string;
}

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Gallery categories
  const categories: { value: GalleryCategory; label: string; count: number }[] = [
    { value: 'all', label: 'All Photos', count: 24 },
    { value: 'dogs', label: 'Our Dogs', count: 8 },
    { value: 'rescues', label: 'Rescue Stories', count: 5 },
    { value: 'events', label: 'Events', count: 4 },
    { value: 'facilities', label: 'Our Facilities', count: 4 },
    { value: 'adoptions', label: 'Happy Adoptions', count: 3 },
  ];

  // Gallery images data
  const galleryImages: GalleryImage[] = [
    // Dogs
    { id: 1, src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop', title: 'Buddy - Ready for Adoption', description: 'Buddy is a friendly Labrador mix who loves playing fetch and going for walks.', category: 'dogs', date: 'Dec 2024' },
    { id: 2, src: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop', title: 'Sheru - Shelter Favorite', description: 'Sheru has been with us for 6 months and is looking for his forever home.', category: 'dogs', date: 'Nov 2024' },
    { id: 3, src: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=400&h=300&fit=crop', title: 'Rani - Sweet Senior', description: 'Rani is a gentle soul who loves quiet cuddles and short walks.', category: 'dogs', date: 'Dec 2024' },
    { id: 4, src: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?w=400&h=300&fit=crop', title: 'Raja - Playful Pup', description: 'Raja is full of energy and always ready for adventure!', category: 'dogs', date: 'Dec 2024' },
    { id: 5, src: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=400&h=300&fit=crop', title: 'Moti - Happy Boy', description: 'Moti is a cheerful fellow who greets everyone with a wagging tail.', category: 'dogs', date: 'Nov 2024' },
    { id: 6, src: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=300&fit=crop', title: 'Lali - Beautiful Girl', description: 'Lali is a beautiful rescue who has blossomed into a confident companion.', category: 'dogs', date: 'Oct 2024' },
    { id: 7, src: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=400&h=300&fit=crop', title: 'Coco - Curious Explorer', description: 'Coco loves exploring new places and meeting new friends.', category: 'dogs', date: 'Dec 2024' },
    { id: 8, src: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&h=300&fit=crop', title: 'Bruno - Gentle Giant', description: 'Bruno is a large but gentle boy who loves belly rubs.', category: 'dogs', date: 'Nov 2024' },
    
    // Rescues
    { id: 9, src: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop', title: 'Highway Rescue', description: 'This pup was found injured on NH-48. After months of care, she made a full recovery.', category: 'rescues', date: 'Sep 2024' },
    { id: 10, src: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=400&h=300&fit=crop', title: 'Market Area Rescue', description: 'Our team rescued 5 puppies from the Jaipur market area during monsoon.', category: 'rescues', date: 'Aug 2024' },
    { id: 11, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', title: 'Before & After: Tikku', description: 'Tikku was severely malnourished when found. Look at him now!', category: 'rescues', date: 'Jul 2024' },
    { id: 12, src: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=400&h=300&fit=crop', title: 'Emergency Surgery Success', description: 'Emergency surgery saved this brave pup after a road accident.', category: 'rescues', date: 'Oct 2024' },
    { id: 13, src: 'https://images.unsplash.com/photo-1601758123927-4f7acc7da589?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1601758123927-4f7acc7da589?w=400&h=300&fit=crop', title: 'Recovery Ward', description: 'Dogs recovering in our medical care unit after treatment.', category: 'rescues', date: 'Nov 2024' },
    
    // Events
    { id: 14, src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop', title: 'Annual Adoption Drive 2024', description: 'Our biggest adoption event of the year with 50+ dogs finding homes.', category: 'events', date: 'Oct 2024' },
    { id: 15, src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop', title: 'Vaccination Camp', description: 'Free vaccination camp at Jodhpur covering 500+ street dogs.', category: 'events', date: 'Sep 2024' },
    { id: 16, src: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=400&h=300&fit=crop', title: 'School Awareness Program', description: 'Teaching children about animal welfare at Government School, Jaipur.', category: 'events', date: 'Aug 2024' },
    { id: 17, src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop', title: 'Volunteer Meet 2024', description: 'Annual gathering of our amazing volunteers from all centres.', category: 'events', date: 'Dec 2024' },
    
    // Facilities
    { id: 18, src: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=400&h=300&fit=crop', title: 'Jaipur Main Shelter', description: 'Our flagship facility in Surana Nagar with capacity for 60+ dogs.', category: 'facilities', date: '2024' },
    { id: 19, src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop', title: 'Veterinary Clinic', description: 'Our fully equipped veterinary clinic with surgical facilities.', category: 'facilities', date: '2024' },
    { id: 20, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', title: 'Play Area', description: 'Dogs enjoying our spacious outdoor play area.', category: 'facilities', date: '2024' },
    { id: 21, src: 'https://images.unsplash.com/photo-1601758174493-9eb393d3e1c8?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1601758174493-9eb393d3e1c8?w=400&h=300&fit=crop', title: 'Rescue Vehicle', description: 'Our rescue ambulance ready for 24/7 emergency response.', category: 'facilities', date: '2024' },
    
    // Adoptions
    { id: 22, src: 'https://images.unsplash.com/photo-1601758003122-53c40e686a19?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1601758003122-53c40e686a19?w=400&h=300&fit=crop', title: 'Happy Adoption: Simba', description: 'Simba found his forever home with the Sharma family in Jaipur!', category: 'adoptions', date: 'Dec 2024' },
    { id: 23, src: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=400&h=300&fit=crop', title: 'Happy Adoption: Luna', description: 'Luna now lives happily with her new family in Udaipur.', category: 'adoptions', date: 'Nov 2024' },
    { id: 24, src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop', thumbnail: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop', title: 'Happy Adoption: Rocky', description: 'Rocky was adopted by a loving couple from Jodhpur.', category: 'adoptions', date: 'Oct 2024' },
  ];

  // Filter images by category
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  // Open image modal
  const openImage = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Navigate between images
  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = filteredImages.length - 1;
    if (newIndex >= filteredImages.length) newIndex = 0;
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#002B5C] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#FFD100] font-semibold text-sm uppercase tracking-wider mb-4">
              <Camera className="w-4 h-4" />
              Photo Gallery
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Gallery
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Explore heartwarming photos from our rescue operations, shelter life, 
              adoption success stories, and community events. Every image tells a story 
              of hope and compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b sticky top-[128px] z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={cn(
                  'px-5 py-2.5 rounded-full font-medium transition-all',
                  selectedCategory === category.value
                    ? 'bg-[#002B5C] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                )}
              >
                {category.label}
                <span className={cn(
                  'ml-2 px-2 py-0.5 rounded-full text-xs',
                  selectedCategory === category.value
                    ? 'bg-[#FFD100] text-[#002B5C]'
                    : 'bg-gray-100 text-gray-600'
                )}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                onClick={() => openImage(image)}
              >
                <img
                  src={image.thumbnail}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-sm truncate">{image.title}</h3>
                    <p className="text-gray-300 text-xs">{image.date}</p>
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-[#FFD100] text-[#002B5C] text-xs font-semibold rounded-full capitalize">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#002B5C] mb-2">No photos found</h3>
              <p className="text-gray-600">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 p-2 text-white hover:text-[#FFD100] transition-colors z-10"
            aria-label="Close gallery"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full text-white hover:bg-[#FFD100] hover:text-[#002B5C] transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full text-white hover:bg-[#FFD100] hover:text-[#002B5C] transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image */}
          <div className="max-w-5xl w-full px-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-400">{selectedImage.description}</p>
              <p className="text-gray-500 text-sm mt-2">{selectedImage.date}</p>
            </div>
          </div>
        </div>
      )}

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-[#F58220] font-semibold text-sm uppercase tracking-wider mb-2">
              Featured Videos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C]">
              Watch Our Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'A Day at the Shelter', desc: 'See what daily life looks like at our Jaipur centre' },
              { title: 'Rescue Mission', desc: 'Follow our team on a real rescue operation' },
              { title: 'Happy Tails: Adoption Stories', desc: 'Heartwarming stories from our adopters' },
            ].map((video, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden group">
                <div className="aspect-video bg-gray-200 relative">
                  <img
                    src={`https://images.unsplash.com/photo-${1587300003388 + index * 1000000}-59208cc962cb?w=400&h=225&fit=crop`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 bg-[#FFD100] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-[#002B5C] ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#002B5C]">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FFD100]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Heart className="w-12 h-12 text-[#002B5C] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-[#002B5C] mb-4">
            Want to Create Happy Memories Together?
          </h2>
          <p className="text-[#002B5C]/80 max-w-2xl mx-auto mb-8">
            Adopt a dog from {orgInfo.name} and add your own photos to our gallery 
            of happy tails and loving homes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Adopt a Dog
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-[#002B5C] text-[#002B5C] hover:bg-[#002B5C] hover:text-white"
            >
              Share Your Story
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
