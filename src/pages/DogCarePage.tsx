import React from 'react';
import { BookOpen, Heart, Activity, Brain, Stethoscope, Dog, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

/**
 * DogCarePage Component
 * Dog care tips, training, health, and breed information
 */

const DogCarePage: React.FC = () => {
  const categories = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Training Tips',
      description: 'Learn effective training techniques for puppies and adult dogs.',
      articles: [
        'Basic obedience commands',
        'House training your puppy',
        'Lead walking made easy',
        'Dealing with jumping up',
      ],
      color: 'bg-[#FFD100]',
      id: 'training',
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Health & Wellbeing',
      description: 'Keep your dog healthy with our expert veterinary advice.',
      articles: [
        'Vaccination schedules',
        'Common health issues',
        'Dental care for dogs',
        'Signs of illness to watch for',
      ],
      color: 'bg-[#00A19A]',
      id: 'health',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Behaviour',
      description: 'Understand your dog\'s behaviour and address common issues.',
      articles: [
        'Understanding body language',
        'Separation anxiety',
        'Reactive dog management',
        'Fear and phobias',
      ],
      color: 'bg-[#6B3FA0]',
      id: 'behaviour',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'New Dog Owner Guide',
      description: 'Everything you need to know when bringing a new dog home.',
      articles: [
        'Preparing your home',
        'First day essentials',
        'Settling in tips',
        'Building a routine',
      ],
      color: 'bg-[#F58220]',
      id: 'new-owner',
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Exercise & Nutrition',
      description: 'Keep your dog fit and healthy with proper diet and exercise.',
      articles: [
        'Exercise requirements by breed',
        'Choosing the right food',
        'Healthy treats and rewards',
        'Weight management',
      ],
      color: 'bg-[#78BE20]',
      id: 'nutrition',
    },
    {
      icon: <Dog className="w-8 h-8" />,
      title: 'Breed Information',
      description: 'Learn about different breeds and their specific needs.',
      articles: [
        'Popular breed profiles',
        'Breed-specific health concerns',
        'Choosing the right breed',
        'Mixed breed benefits',
      ],
      color: 'bg-[#002B5C]',
      id: 'breeds',
    },
  ];

  const featuredArticles = [
    {
      title: 'How to Choose the Right Dog for Your Family',
      excerpt: 'Finding the perfect match for your lifestyle and home environment.',
      image: 'https://images.unsplash.com/photo-1601758123927-4f7acc7da589?w=400&h=300&fit=crop',
      category: 'Adoption',
      readTime: '5 min read',
    },
    {
      title: 'Essential First Aid for Dogs',
      excerpt: 'What every dog owner should know about emergency care.',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop',
      category: 'Health',
      readTime: '8 min read',
    },
    {
      title: 'Understanding Your Rescue Dog\'s Past',
      excerpt: 'Helping your new companion overcome their history.',
      image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=400&h=300&fit=crop',
      category: 'Behaviour',
      readTime: '6 min read',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#002B5C] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block text-[#FFD100] font-semibold text-sm uppercase tracking-wider mb-4">
              Dog Care Hub
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Expert Advice for Happy, Healthy Dogs
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you're a first-time owner or an experienced dog lover, our
              comprehensive guides cover everything from training to health care.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                id={category.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className={`${category.color} p-6 text-white`}>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                  <p className="text-white/80">{category.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <a
                          href="#"
                          className="flex items-center gap-2 text-gray-700 hover:text-[#002B5C] transition-colors group"
                        >
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#FFD100] transition-colors" />
                          {article}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="mt-6 w-full">
                    View All Articles
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-[#F58220] font-semibold text-sm uppercase tracking-wider mb-2">
              Featured Articles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C]">
              Popular Guides & Tips
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-[#FFD100] text-[#002B5C] text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#002B5C] mb-2 group-hover:text-[#003D82] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Banner */}
      <section className="py-16 bg-[#FFD100]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002B5C] mb-4">
              Quick Tips for Dog Owners
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { tip: 'Exercise daily', icon: '🏃' },
              { tip: 'Fresh water always', icon: '💧' },
              { tip: 'Regular vet checks', icon: '🩺' },
              { tip: 'Positive training', icon: '⭐' },
              { tip: 'Mental stimulation', icon: '🧩' },
              { tip: 'Socialisation', icon: '🐕' },
              { tip: 'Dental care', icon: '🦷' },
              { tip: 'Lots of love!', icon: '❤️' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center"
              >
                <span className="text-3xl mb-2 block">{item.icon}</span>
                <span className="font-semibold text-[#002B5C]">{item.tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ask an Expert */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#002B5C] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Have a Question?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Our team of dog behaviour experts and veterinarians are here to help.
              Get personalized advice for your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Ask Our Experts
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#002B5C]"
              >
                Browse FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DogCarePage;
