import React from 'react';
import { Heart, Users, Home, Award, MapPin } from 'lucide-react';
import { StatsSection } from '@/components/sections/StatsSection';
import { CTABanner } from '@/components/sections/CTABanner';
import { orgInfo } from '@/constants/theme';

/**
 * AboutPage Component
 * Information about the organization, mission, and team
 */

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Compassion',
      description: 'We treat every dog with love, care, and respect they deserve.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'We work together with volunteers, supporters, and communities.',
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Commitment',
      description: 'We never give up on finding every dog their perfect home.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards of animal welfare and care.',
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Chief Executive',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    },
    {
      name: 'James Wilson',
      role: 'Head of Rehoming',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    },
    {
      name: 'Emma Thompson',
      role: 'Veterinary Director',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop',
    },
    {
      name: 'Michael Chen',
      role: 'Volunteer Coordinator',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    },
  ];

  const centres = [
    { name: 'Jaipur Centre', location: 'Jaipur District', dogs: 45 },
    { name: 'Jodhpur Centre', location: 'Jodhpur District', dogs: 38 },
    { name: 'Udaipur Centre', location: 'Udaipur District', dogs: 32 },
    { name: 'Ajmer Centre', location: 'Ajmer District', dogs: 28 },
    { name: 'Bikaner Centre', location: 'Bikaner District', dogs: 25 },
    { name: 'Kota Centre', location: 'Kota District', dogs: 20 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#002B5C] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block text-[#FFD100] font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Mission: {orgInfo.tagline}
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Since {orgInfo.foundedYear}, we've been dedicated to rescuing, rehabilitating,
              and rehoming street dogs across Rajasthan, India. Our team of passionate staff and
              volunteers work tirelessly to ensure every dog gets the second chance
              they deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[#F58220] font-semibold text-sm uppercase tracking-wider mb-2">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-6">
                14+ Years of Helping Dogs Find Love
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in {orgInfo.foundedYear}, {orgInfo.name} started as a small rescue 
                  operation in Surana Nagar, Rajasthan. Our founders saw the plight of street 
                  dogs in our community and knew they had to act. That belief continues to 
                  drive everything we do today.
                </p>
                <p>
                  Over the years, we've helped thousands of dogs find their forever
                  families. We've pioneered community-based approaches to dog welfare, 
                  vaccination drives, and rehabilitation programs that have become 
                  models for other NGOs in the region.
                </p>
                <p>
                  Today, with multiple rescue centres across Rajasthan and hundreds of
                  dedicated volunteers, we continue our mission to ensure no dog is
                  left without the love and care they deserve.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=500&fit=crop"
                alt="Happy dog being cared for"
                className="rounded-2xl shadow-lg"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#FFD100] p-6 rounded-xl shadow-lg">
                <p className="text-4xl font-bold text-[#002B5C]">{orgInfo.foundedYear}</p>
                <p className="text-[#002B5C] font-medium">Year Founded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-[#F58220] font-semibold text-sm uppercase tracking-wider mb-2">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C]">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[#FFD100] rounded-full flex items-center justify-center mx-auto mb-4 text-[#002B5C]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#002B5C] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <StatsSection />

      {/* Our Team */}
      <section className="py-16" id="team">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-[#F58220] font-semibold text-sm uppercase tracking-wider mb-2">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C]">
              Meet the People Behind Our Mission
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#002B5C]">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Centres */}
      <section className="py-16 bg-gray-50" id="centres">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-[#F58220] font-semibold text-sm uppercase tracking-wider mb-2">
              Our Centres
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C]">
              Find a Centre Near You
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {centres.map((centre, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#002B5C] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#FFD100]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#002B5C] mb-1">
                      {centre.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{centre.location}</p>
                    <p className="text-[#F58220] font-semibold text-sm">
                      {centre.dogs} dogs currently available
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Join Our Mission"
        description="Whether you adopt, donate, or volunteer, you can make a real difference in the lives of dogs in need."
        primaryButtonText="Get Involved"
        primaryButtonLink="/get-involved"
      />
    </div>
  );
};

export default AboutPage;
