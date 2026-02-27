import React from 'react';
import { statistics } from '@/constants/theme';

/**
 * StatsSection Component
 * Display key statistics with animated counters
 */

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-[#002B5C] py-16" aria-labelledby="stats-heading">
      <div className="max-w-7xl mx-auto px-4">
        <h2 id="stats-heading" className="sr-only">Our Impact in Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#FFD100] mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-white text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
