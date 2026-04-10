/**
 * About Us Page - Suranango for Dogs
 * Explains who the NGO is, why it focuses on dogs, and commitment to humane solutions
 * Uses consistent yellow theme throughout
 */

import React from 'react';
import { Heart, Shield, Users, Scale, Leaf, HandHeart, CheckCircle, Quote } from 'lucide-react';
import { PageHeader } from '@/components/sections/PageHeader';

const AboutUsPage: React.FC = () => {
  // Core values of the organization
  const coreValues = [
    {
      icon: Heart,
      title: 'Compassion First',
      description: 'Every dog deserves kindness. We approach each situation with empathy and understanding, treating every animal with the respect they deserve.'
    },
    {
      icon: Shield,
      title: 'Humane Solutions',
      description: 'We never resort to cruel or harmful methods. Our solutions are always peaceful, ethical, and in the best interest of both dogs and communities.'
    },
    {
      icon: Scale,
      title: 'Legal Compliance',
      description: 'We operate strictly within Indian law, ensuring all our actions comply with the Prevention of Cruelty to Animals Act and municipal regulations.'
    },
    {
      icon: Users,
      title: 'Community Partnership',
      description: 'We believe in working together with communities, not against them. Peaceful coexistence is achieved through education and cooperation.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Welfare',
      description: 'Our programs are designed for long-term impact, creating lasting change in how communities and dogs live together harmoniously.'
    },
    {
      icon: HandHeart,
      title: 'Responsible Care',
      description: 'We take full responsibility for the dogs in our care, providing medical treatment, shelter, and support until they are healthy and safe.'
    }
  ];

  // Why we focus on dogs
  const whyDogs = [
    'Community dogs are among the most misunderstood and mistreated animals in urban India',
    'They face daily challenges: traffic accidents, abuse, disease, and displacement',
    'Dogs are social animals that have coexisted with humans for thousands of years',
    'Proper care and management of community dogs benefits public health and safety',
    'No other organization in our region was addressing these issues comprehensively',
    'Our founder witnessed the suffering of street dogs and decided to act'
  ];

  // Our commitments
  const commitments = [
    {
      title: 'No Forced Relocation',
      description: 'We never forcibly remove dogs from their territory. Dogs have a right to live in their community.'
    },
    {
      title: 'Medical Care for All',
      description: 'Every injured or sick dog receives proper medical attention, regardless of where they came from.'
    },
    {
      title: 'Community Education',
      description: 'We educate communities about dog behavior, reducing fear and promoting understanding.'
    },
    {
      title: 'Legal Advocacy',
      description: 'We advocate for the legal rights of community dogs and report illegal cruelty.'
    },
    {
      title: 'Vaccination Programs',
      description: 'We conduct regular vaccination drives to protect both dogs and humans from rabies.'
    },
    {
      title: 'Peaceful Resolution',
      description: 'We resolve dog-human conflicts through dialogue, understanding, and practical solutions.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Using PageHeader for consistent styling */}
      <PageHeader
        badge="About Suranango for Dogs"
        title="Giving Every Dog a | Loving Home"
        description="We are a dedicated animal welfare organization working to protect, heal, and support community dogs across Rajasthan through humane, legal, and compassionate solutions."
        backgroundImage="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920"
        size="large"
      />

      {/* Who We Are Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6">
                A Voice for the Voiceless
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-navy-900">Suranango for Dogs</strong> was founded in 2010 with a simple yet 
                  powerful mission: to create a world where every community dog is treated with dignity, 
                  receives proper care when needed, and lives in harmony with the humans around them.
                </p>
                <p>
                  We are not just an animal rescue organization. We are a bridge between communities and 
                  the dogs that share their streets. We believe that peaceful coexistence is not only 
                  possible but essential for a compassionate society.
                </p>
                <p>
                  Our team consists of passionate animal welfare workers, veterinarians, community 
                  coordinators, and volunteers who share a common goal: to end the suffering of 
                  community dogs through practical, humane, and sustainable solutions.
                </p>
                <p>
                  Based in Surana Nagar, Rajasthan, we serve communities across the state, responding 
                  to emergencies, conducting vaccination drives, resolving dog-human conflicts, and 
                  educating the public about responsible coexistence.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=700&fit=crop" 
                alt="Volunteer caring for a community dog"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 rounded-xl p-6 shadow-lg">
                <p className="text-navy-900 font-bold text-4xl">14+</p>
                <p className="text-navy-800 font-medium">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Dogs Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">Our Focus</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
              Why We Work Only for Dogs
            </h2>
            <p className="text-gray-600 text-lg">
              We chose to dedicate ourselves entirely to community dogs because they face unique 
              challenges that require specialized knowledge, resources, and commitment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyDogs.map((reason, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-navy-900" />
                </div>
                <p className="text-gray-700 leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="max-w-3xl mx-auto mt-12 bg-navy-900 rounded-2xl p-8 text-center relative">
            <Quote className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <blockquote className="text-white text-xl md:text-2xl font-medium italic leading-relaxed">
              "The greatness of a nation and its moral progress can be judged by the way its animals are treated."
            </blockquote>
            <cite className="text-yellow-400 mt-4 block font-semibold">— Mahatma Gandhi</cite>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop" 
                  alt="Happy community dog"
                  className="rounded-xl w-full h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop" 
                  alt="Dogs in the community"
                  className="rounded-xl w-full h-48 object-cover mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1602879295686-0e47d3c0f5c5?w=400&h=300&fit=crop" 
                  alt="Volunteer with dog"
                  className="rounded-xl w-full h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8571?w=400&h=300&fit=crop" 
                  alt="Community dog care"
                  className="rounded-xl w-full h-48 object-cover mt-8"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">Our Purpose</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6">
                Supporting Both Dogs & Society
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our work is not just about helping dogs—it is about creating healthier, safer, 
                  and more compassionate communities for everyone.
                </p>
                <p>
                  <strong className="text-navy-900">For Dogs:</strong> We provide emergency medical care, 
                  vaccination, shelter during recovery, and protection from cruelty. We ensure that 
                  community dogs receive the care they need to live healthy lives.
                </p>
                <p>
                  <strong className="text-navy-900">For Communities:</strong> We address concerns about 
                  dog behavior, reduce rabies risk through vaccination, resolve conflicts peacefully, 
                  and educate residents about living harmoniously with community dogs.
                </p>
                <p>
                  <strong className="text-navy-900">For Society:</strong> We promote a culture of compassion, 
                  respect for all living beings, and adherence to animal welfare laws. We believe that 
                  how we treat animals reflects who we are as a society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-24 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
              What We Stand For
            </h2>
            <p className="text-gray-600 text-lg">
              Our work is guided by a set of core values that define everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow text-center group"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-navy-900" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 lg:py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Our Commitment</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Humane, Legal & Compassionate
            </h2>
            <p className="text-gray-300 text-lg">
              We are committed to solving dog-related issues through ethical, lawful, and 
              kind-hearted methods. Here is what you can always expect from us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((commitment, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-navy-900" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{commitment.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Compliance Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">Legal Framework</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
                We Operate Within the Law
              </h2>
              <p className="text-gray-600 text-lg">
                All our actions comply with Indian animal welfare laws and regulations.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 text-lg mb-2">Prevention of Cruelty to Animals Act, 1960</h3>
                  <p className="text-gray-600">
                    We strictly adhere to this act which prohibits cruelty to animals and mandates 
                    their humane treatment. Any act of cruelty is reportable and punishable by law.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 text-lg mb-2">Animal Birth Control (Dogs) Rules, 2001</h3>
                  <p className="text-gray-600">
                    These rules govern the management of street dogs through sterilization and 
                    vaccination programs. Dogs cannot be relocated or killed—only humanely managed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 text-lg mb-2">Registered NGO Status</h3>
                  <p className="text-gray-600">
                    Suranango for Dogs is a registered non-profit organization under the Societies 
                    Registration Act. We maintain full transparency in our operations and finances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-navy-800 text-lg mb-8 max-w-2xl mx-auto">
            Whether you want to report an injured dog, volunteer with us, or support our mission, 
            we welcome your involvement in creating a more compassionate world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="/our-work"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              See Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
