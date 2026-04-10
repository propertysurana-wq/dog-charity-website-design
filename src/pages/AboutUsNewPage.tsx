/**
 * About Us Page (New Comprehensive Version)
 * Who we are, why we work for dogs, our purpose, and commitment to humane solutions
 */

import React from 'react';
import { Heart, Shield, Users, Scale, Award, Clock, MapPin, Phone, Mail, CheckCircle, Star, Lightbulb, HandHeart, Eye, Target, Building, Calendar } from 'lucide-react';

// Organization timeline
const timeline = [
  {
    year: '2010',
    title: 'Foundation',
    description: 'Suranango for Dogs was founded by a group of passionate animal lovers in Surana Nagar, Rajasthan.',
  },
  {
    year: '2012',
    title: 'First Shelter',
    description: 'Opened our first temporary shelter facility with capacity for 50 dogs.',
  },
  {
    year: '2015',
    title: 'Vaccination Program',
    description: 'Launched large-scale anti-rabies vaccination drives across Jaipur district.',
  },
  {
    year: '2018',
    title: 'Regional Expansion',
    description: 'Expanded operations to Jodhpur, Udaipur, and Ajmer districts.',
  },
  {
    year: '2020',
    title: 'Emergency Response',
    description: 'Established 24/7 emergency rescue helpline and response team.',
  },
  {
    year: '2022',
    title: 'Community Programs',
    description: 'Launched comprehensive community education and conflict resolution programs.',
  },
  {
    year: '2024',
    title: 'Growing Impact',
    description: 'Now serving 6 districts with over 50,000 dogs vaccinated annually.',
  },
];

// Team members
const teamMembers = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Founder & Director',
    description: 'Veterinarian with 20+ years of experience in animal welfare',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Operations Head',
    description: 'Manages rescue operations and shelter facilities',
  },
  {
    name: 'Dr. Amit Singh',
    role: 'Chief Veterinary Officer',
    description: 'Leads all medical programs and treatments',
  },
  {
    name: 'Sunita Devi',
    role: 'Community Coordinator',
    description: 'Manages community outreach and education',
  },
  {
    name: 'Mohammed Farooq',
    role: 'Rescue Team Lead',
    description: 'Heads the emergency rescue response team',
  },
  {
    name: 'Kavita Meena',
    role: 'Volunteer Coordinator',
    description: 'Manages volunteer programs and training',
  },
];

// Why dogs specifically
const whyDogs = [
  {
    icon: Heart,
    title: 'Largest Stray Population',
    description: 'India has over 35 million street dogs - the largest population in the world, requiring dedicated attention.',
  },
  {
    icon: Shield,
    title: 'Public Health Priority',
    description: 'Dogs are the primary source of rabies transmission. Our work directly saves human lives.',
  },
  {
    icon: Users,
    title: 'Human-Dog Bond',
    description: 'Dogs have lived alongside humans for thousands of years. They deserve our care and protection.',
  },
  {
    icon: Scale,
    title: 'Legal Protection Needed',
    description: 'Despite legal protections, community dogs face constant threats of cruelty and illegal removal.',
  },
];

// Our commitments
const commitments = [
  {
    title: 'Humane Treatment Always',
    description: 'We never use cruel methods. Every intervention is designed to minimize stress and maximize welfare.',
    icon: Heart,
  },
  {
    title: 'Legal Compliance',
    description: 'All our activities comply with the Prevention of Cruelty to Animals Act, 1960 and Animal Birth Control Rules.',
    icon: Scale,
  },
  {
    title: 'Compassionate Solutions',
    description: 'We resolve human-dog conflicts through education, management, and understanding - never through removal.',
    icon: HandHeart,
  },
  {
    title: 'Community Partnership',
    description: 'We work with communities, not against them. Sustainable change comes through cooperation.',
    icon: Users,
  },
  {
    title: 'Transparency',
    description: 'We maintain open records and regularly report our activities, finances, and impact.',
    icon: Eye,
  },
  {
    title: 'Continuous Improvement',
    description: 'We constantly learn and adapt based on experience, research, and best practices.',
    icon: Lightbulb,
  },
];

// Statistics
const stats = [
  { number: '14+', label: 'Years of Service' },
  { number: '50,000+', label: 'Dogs Vaccinated Yearly' },
  { number: '10,000+', label: 'Rescues Completed' },
  { number: '6', label: 'Districts Served' },
];

const AboutUsNewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-gray-900">
              <div className="inline-flex items-center gap-2 bg-white/30 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Building className="w-4 h-4" />
                Since 2010
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                About Suranango for Dogs
              </h1>
              <p className="text-lg md:text-xl text-gray-800 mb-8">
                We are a dedicated non-profit organization committed to the welfare of community dogs 
                in Rajasthan. For over 14 years, we have been providing compassionate care, medical 
                treatment, and advocacy for the voiceless.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/mission-vision"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
                >
                  <Target className="w-5 h-5" />
                  Our Mission
                </a>
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Contact Us
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8">
                <div className="aspect-square bg-white/30 rounded-2xl flex items-center justify-center">
                  <Heart className="w-32 h-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-yellow-400">{stat.number}</p>
                <p className="text-gray-300 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Suranango for Dogs began in 2010 when a small group of animal lovers in Surana Nagar 
                  witnessed the suffering of community dogs - injured, sick, and often mistreated. 
                  They decided to take action.
                </p>
                <p className="mb-4">
                  What started as a few volunteers feeding and caring for local street dogs has grown 
                  into a full-fledged organization serving six districts across Rajasthan. We now 
                  operate emergency rescue services, vaccination programs, a temporary shelter, and 
                  community education initiatives.
                </p>
                <p className="mb-4">
                  Our name &quot;Suranango&quot; combines &quot;Surana&quot; from our hometown with &quot;ango&quot; meaning 
                  companion in the local dialect. We believe dogs have been humanity&apos;s companions 
                  for millennia, and they deserve our protection and care.
                </p>
                <p>
                  Today, we vaccinate over 50,000 dogs annually, respond to thousands of emergency 
                  calls, and work with communities across the region to create peaceful coexistence 
                  between humans and dogs.
                </p>
              </div>
            </div>
            <div className="bg-yellow-50 rounded-3xl p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-8 h-8 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">2010</p>
                    <p className="text-gray-600">Year Founded</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-8 h-8 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">Surana Nagar</p>
                    <p className="text-gray-600">Where It All Began</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">50+</p>
                    <p className="text-gray-600">Team Members</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-8 h-8 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">200+</p>
                    <p className="text-gray-600">Active Volunteers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Work Only for Dogs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why We Focus Exclusively on Dogs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              While all animals deserve care, we have chosen to dedicate our resources to community dogs for important reasons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyDogs.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-yellow-400 rounded-2xl p-8 text-center">
            <p className="text-lg text-gray-900 font-medium max-w-3xl mx-auto">
              By focusing our resources and expertise on a single cause, we can make a deeper, 
              more meaningful impact. Specialization allows us to develop best practices, train 
              expert teams, and truly understand the needs of community dogs.
            </p>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-indigo-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">We Serve Both Dogs AND Society</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Healthier Communities</p>
                    <p className="text-indigo-200">Our vaccination programs protect humans from rabies and other diseases</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Reduced Conflicts</p>
                    <p className="text-indigo-200">We mediate human-dog conflicts and create peaceful solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Safer Streets</p>
                    <p className="text-indigo-200">Well-managed dog populations are healthier and less problematic</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Compassionate Society</p>
                    <p className="text-indigo-200">Teaching kindness to animals builds empathy in communities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Purpose: Dogs & Society Together
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that the welfare of community dogs and the welfare of human communities 
                are interconnected. When dogs are healthy, vaccinated, and well-managed, 
                everyone benefits.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our work is not just about helping dogs - it&apos;s about creating harmonious communities 
                where humans and animals can coexist peacefully. We address both animal welfare AND 
                public health concerns.
              </p>
              <p className="text-lg text-gray-600">
                This dual purpose guides everything we do: from vaccination programs that protect 
                both dogs and humans, to conflict resolution that helps neighbors live peacefully 
                alongside community dogs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Commitment to Humane, Legal, Compassionate Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We are committed to ethical practices in everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((commitment, index) => {
              const IconComponent = commitment.icon;
              return (
                <div key={index} className="bg-gray-800 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{commitment.title}</h3>
                  <p className="text-gray-400">{commitment.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-gray-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">We Will Never:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✕</span>
                </div>
                <span className="text-gray-300">Forcibly relocate dogs from their territory</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✕</span>
                </div>
                <span className="text-gray-300">Use cruel or inhumane methods</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✕</span>
                </div>
                <span className="text-gray-300">Support or participate in illegal activities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✕</span>
                </div>
                <span className="text-gray-300">Compromise animal welfare for convenience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✕</span>
                </div>
                <span className="text-gray-300">Ignore community concerns or complaints</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✕</span>
                </div>
                <span className="text-gray-300">Hide our methods, finances, or outcomes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our growth and impact
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-yellow-400 transform -translate-x-1/2" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`bg-gray-50 rounded-2xl p-6 inline-block ${
                      index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                    }`}>
                      <p className="text-2xl font-bold text-yellow-500 mb-2">{item.year}</p>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full border-4 border-white shadow-md" />
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals working for animal welfare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-yellow-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal & Registration */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Legal Status & Registration
              </h2>
              <p className="text-gray-600 mb-6">
                Suranango for Dogs is a legally registered non-profit organization committed to 
                transparency and accountability.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4">
                  <Award className="w-8 h-8 text-yellow-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Registered NGO</p>
                    <p className="text-gray-600 text-sm">Registration No: RJ/2010/XXXXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4">
                  <Award className="w-8 h-8 text-yellow-500" />
                  <div>
                    <p className="font-semibold text-gray-900">80G Tax Exemption</p>
                    <p className="text-gray-600 text-sm">Donations are tax-deductible under Section 80G</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4">
                  <Award className="w-8 h-8 text-yellow-500" />
                  <div>
                    <p className="font-semibold text-gray-900">FCRA Registered</p>
                    <p className="text-gray-600 text-sm">Authorized to receive foreign contributions</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="bg-yellow-50 rounded-2xl p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">123 Dog Welfare Street<br />Surana Nagar, Rajasthan - 302001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+919999999999 (Helpline)</p>
                      <p className="text-gray-600">+91 98765 43211 (Emergency)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@suranaNGO.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Hours</p>
                      <p className="text-gray-600">Office: 9 AM - 6 PM (Mon-Sat)</p>
                      <p className="text-gray-600">Emergency: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            Whether through volunteering, donating, or simply spreading awareness, 
            you can help us create a better world for community dogs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors"
            >
              <Heart className="w-6 h-6" />
              Donate Now
            </a>
            <a
              href="/get-involved"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              <Star className="w-6 h-6" />
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsNewPage;
