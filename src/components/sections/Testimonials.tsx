import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/utils/cn';

/**
 * Testimonials Component
 * Carousel of success stories from adopters
 */

interface Testimonial {
  id: number;
  name: string;
  dogName: string;
  quote: string;
  image: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh & Priya',
    dogName: 'Buddy',
    quote: 'Adopting Buddy was the best decision we ever made. The team at Suranango for Dogs made the whole process so smooth and supportive. Buddy has brought so much joy into our lives!',
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=400&h=400&fit=crop',
    location: 'Jaipur',
  },
  {
    id: 2,
    name: 'The Sharma Family',
    dogName: 'Rani',
    quote: 'Rani has been the perfect addition to our family. The staff helped us find a dog that was great with our children, and we couldn\'t be happier.',
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=400&h=400&fit=crop',
    location: 'Jodhpur',
  },
  {
    id: 3,
    name: 'Amit',
    dogName: 'Sheru',
    quote: 'As a first-time dog owner, I was nervous. But the guidance I received from Suranango for Dogs was invaluable. Sheru is my best friend now!',
    image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=400&h=400&fit=crop',
    location: 'Udaipur',
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 bg-[#002B5C]" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#FFD100] font-semibold text-sm uppercase tracking-wider mb-2">
            Happy Tails
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Success Stories
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="aspect-square md:aspect-auto">
                <img
                  src={current.image}
                  alt={`${current.dogName} with ${current.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <Quote className="w-12 h-12 text-[#FFD100] mb-4" aria-hidden="true" />
                <blockquote className="text-gray-700 text-lg mb-6 leading-relaxed">
                  "{current.quote}"
                </blockquote>
                <div>
                  <p className="font-bold text-[#002B5C]">{current.name}</p>
                  <p className="text-gray-500">
                    Adopted {current.dogName} · {current.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white/10 rounded-full text-white hover:bg-[#FFD100] hover:text-[#002B5C] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    'w-3 h-3 rounded-full transition-colors',
                    index === currentIndex
                      ? 'bg-[#FFD100]'
                      : 'bg-white/30 hover:bg-white/50'
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white/10 rounded-full text-white hover:bg-[#FFD100] hover:text-[#002B5C] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
