/**
 * Community Support Page - Suranango for Dogs
 * How communities can contact and work with the NGO
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Phone, 
  MessageCircle,
  Building,
  ShieldCheck,
  Store,
  Home,
  AlertTriangle,
  CheckCircle,
  Heart,
  Handshake,
  BookOpen,
  Clock,
  Mail
} from 'lucide-react';

const CommunitySupportPage: React.FC = () => {
  // Who can contact us
  const whoCanContact = [
    {
      icon: Building,
      title: 'Residential Societies',
      description: 'RWAs, apartment complexes, and housing societies can partner with us for dog management, vaccination, and conflict resolution.'
    },
    {
      icon: Home,
      title: 'Individual Residents',
      description: 'Any resident can report injured dogs, seek help for dog-related concerns, or learn about coexisting with community dogs.'
    },
    {
      icon: Store,
      title: 'Shop Owners & Businesses',
      description: 'Business owners facing dog-related challenges can contact us for humane solutions and guidance.'
    },
    {
      icon: ShieldCheck,
      title: 'Security Staff',
      description: 'Security guards and watchmen can report emergencies or seek guidance on handling dog situations.'
    },
    {
      icon: Users,
      title: 'Community Groups',
      description: 'NGOs, citizen groups, and community organizations can collaborate with us on welfare programs.'
    },
    {
      icon: Building,
      title: 'Local Authorities',
      description: 'Municipal bodies and local government can partner with us for area-wide dog management.'
    }
  ];

  // Types of support we offer
  const supportTypes = [
    {
      title: 'Emergency Assistance',
      description: 'Immediate response for injured dogs, accidents, or urgent situations.',
      icon: AlertTriangle,
      urgent: true
    },
    {
      title: 'Conflict Resolution',
      description: 'Professional mediation for dog-human conflicts in your area.',
      icon: Handshake,
      urgent: false
    },
    {
      title: 'Vaccination Camps',
      description: 'Organize vaccination drives for community dogs in your locality.',
      icon: ShieldCheck,
      urgent: false
    },
    {
      title: 'Education Programs',
      description: 'Awareness sessions for residents about dog behavior and safety.',
      icon: BookOpen,
      urgent: false
    },
    {
      title: 'Sterilization Programs',
      description: 'Arrange sterilization for community dogs to manage population.',
      icon: Heart,
      urgent: false
    },
    {
      title: 'Ongoing Partnership',
      description: 'Long-term collaboration for comprehensive dog welfare in your area.',
      icon: Users,
      urgent: false
    }
  ];

  // How we help communities
  const howWeHelp = [
    {
      title: 'Assess the Situation',
      description: 'Our team visits your area to understand the specific challenges and concerns.'
    },
    {
      title: 'Create a Plan',
      description: 'We develop a customized solution based on your community unique needs.'
    },
    {
      title: 'Implement Solutions',
      description: 'We carry out vaccination, conflict resolution, or other agreed-upon actions.'
    },
    {
      title: 'Educate Residents',
      description: 'We conduct awareness sessions to help residents understand dog behavior.'
    },
    {
      title: 'Provide Follow-Up',
      description: 'We stay in touch to ensure solutions are working and adjust as needed.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-700 via-purple-600 to-purple-700 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/95 to-purple-700/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-yellow-500 text-navy-900 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Community Support
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              We Are Here for 
              <span className="text-yellow-400"> Your Community</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed max-w-3xl mx-auto">
              Whether you are a resident, society, or business owner, we provide support 
              for dog-related concerns and help create peaceful coexistence.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-8 bg-yellow-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-3">
              <Phone className="w-8 h-8 text-navy-900" />
              <div className="text-left">
                <p className="text-navy-900 font-bold text-xl">+919999999999</p>
                <p className="text-navy-800 text-sm">Call or WhatsApp</p>
              </div>
            </div>
            <div className="hidden lg:block w-px h-12 bg-navy-900/30"></div>
            <div className="flex items-center gap-3">
              <Mail className="w-8 h-8 text-navy-900" />
              <div className="text-left">
                <p className="text-navy-900 font-bold text-xl">community@suranaNGO.org</p>
                <p className="text-navy-800 text-sm">Email Us</p>
              </div>
            </div>
            <div className="hidden lg:block w-px h-12 bg-navy-900/30"></div>
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-navy-900" />
              <div className="text-left">
                <p className="text-navy-900 font-bold text-xl">24/7 Emergency</p>
                <p className="text-navy-800 text-sm">Always Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Contact Us Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Who We Serve</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
              Anyone Can Reach Out
            </h2>
            <p className="text-gray-600 text-lg">
              We welcome contact from all community members who need help with dog-related matters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whoCanContact.map((item, index) => (
              <div 
                key={index}
                className="bg-purple-50 rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Support Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
              How We Can Help
            </h2>
            <p className="text-gray-600 text-lg">
              We offer various types of support to meet your community needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {supportTypes.map((support, index) => (
              <div 
                key={index}
                className={`rounded-xl p-6 ${support.urgent ? 'bg-red-50 border-2 border-red-200' : 'bg-white shadow-md'} hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${support.urgent ? 'bg-red-500' : 'bg-purple-500'}`}>
                    <support.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    {support.urgent && (
                      <span className="inline-block bg-red-500 text-white text-xs px-2 py-0.5 rounded mb-2">
                        EMERGENCY
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-navy-900 mb-1">{support.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{support.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6">
                How We Work With Communities
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                When you reach out to us, we follow a systematic approach to understand 
                your needs and provide effective, lasting solutions.
              </p>
              
              <div className="space-y-4">
                {howWeHelp.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=500&fit=crop" 
                alt="Community working together"
                className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-purple-500 text-white rounded-xl p-6 shadow-lg">
                <p className="font-bold text-3xl">50+</p>
                <p className="font-medium">Communities Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-16 lg:py-24 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Benefits</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
                What Your Community Gains
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <CheckCircle className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">Healthier Dogs</h3>
                <p className="text-gray-600">Vaccinated, sterilized dogs are healthier and pose less risk to the community.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <CheckCircle className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">Reduced Conflicts</h3>
                <p className="text-gray-600">Proper understanding and management reduces dog-human conflicts significantly.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <CheckCircle className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">Safer Environment</h3>
                <p className="text-gray-600">Vaccination programs eliminate rabies risk, making your area safer for everyone.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <CheckCircle className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">Expert Support</h3>
                <p className="text-gray-600">Access to trained professionals for any dog-related situation or emergency.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <CheckCircle className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">Legal Compliance</h3>
                <p className="text-gray-600">All our solutions comply with animal welfare laws, protecting your society.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <CheckCircle className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-navy-900 mb-2">Peaceful Coexistence</h3>
                <p className="text-gray-600">Education and awareness lead to harmonious living between humans and dogs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Common Questions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-navy-900 mb-2">Do you charge for your services?</h3>
                <p className="text-gray-600">No, all our community support services are free of cost. We are a non-profit organization funded by donations.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-navy-900 mb-2">Will you remove the dogs from our area?</h3>
                <p className="text-gray-600">No, we do not remove or relocate dogs. This is illegal and ineffective. Instead, we manage dogs humanely through vaccination, sterilization, and behavior modification.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-navy-900 mb-2">How quickly can you respond to emergencies?</h3>
                <p className="text-gray-600">For emergencies like injured dogs, we aim to respond within 30-60 minutes in our service area. For non-emergency requests, we schedule visits within 2-3 days.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-navy-900 mb-2">Can you help if residents are scared of dogs?</h3>
                <p className="text-gray-600">Yes, we conduct awareness sessions to help residents understand dog behavior, reduce fear, and learn safe interaction practices.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-navy-900 mb-2">What areas do you serve?</h3>
                <p className="text-gray-600">We currently serve Jaipur, Jodhpur, Udaipur, Ajmer, Bikaner, and Kota in Rajasthan. Contact us to check if your area is covered.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 lg:py-20 bg-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <MessageCircle className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Community Support?
            </h2>
            <p className="text-purple-100 text-lg mb-8">
              Contact us today to discuss how we can help your community with dog-related 
              concerns. We are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 text-navy-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +919999999999
              </a>
              <a 
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors"
              >
                WhatsApp Us
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/30"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunitySupportPage;
