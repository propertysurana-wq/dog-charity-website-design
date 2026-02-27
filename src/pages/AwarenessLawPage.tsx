/**
 * Awareness & Law Page - Suranango for Dogs
 * Legal rights of community dogs and citizen responsibilities
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scale, 
  Shield,
  BookOpen,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Heart,
  Phone,
  FileText,
  Users,
  Gavel,
  Info
} from 'lucide-react';

const AwarenessLawPage: React.FC = () => {
  // Key laws protecting dogs
  const keyLaws = [
    {
      title: 'Prevention of Cruelty to Animals Act, 1960',
      description: 'The primary law protecting animals in India. It prohibits cruelty, neglect, and unnecessary pain to all animals including community dogs.',
      keyPoints: [
        'Beating, kicking, torturing, or killing dogs is a punishable offense',
        'Abandoning dogs or leaving them without food/water is illegal',
        'Organizing or participating in dog fights is a criminal offense',
        'First offense: Fine up to ₹50, repeat offense: Fine up to ₹100 or 3 months imprisonment'
      ]
    },
    {
      title: 'Animal Birth Control (Dogs) Rules, 2001',
      description: 'These rules govern the management of street dogs through humane methods. They explicitly prohibit killing or relocating community dogs.',
      keyPoints: [
        'Street dogs can only be controlled through sterilization and vaccination',
        'No dog shall be killed or relocated from its territory',
        'Local authorities must implement ABC (Animal Birth Control) programs',
        'Vaccinated and sterilized dogs must be released back to their area'
      ]
    },
    {
      title: 'IPC Section 428 & 429',
      description: 'Indian Penal Code sections that criminalize killing or causing injury to animals.',
      keyPoints: [
        'Killing or maiming any animal is punishable with imprisonment up to 2-5 years',
        'Poisoning animals is a serious criminal offense',
        'These sections apply to community dogs as well'
      ]
    },
    {
      title: 'Article 51A(g) - Constitution of India',
      description: 'A fundamental duty of every Indian citizen to protect wildlife and have compassion for living creatures.',
      keyPoints: [
        'Compassion towards all living creatures is a constitutional duty',
        'Protecting animals is not just moral but a constitutional obligation'
      ]
    }
  ];

  // Citizen responsibilities
  const citizenResponsibilities = [
    {
      icon: Heart,
      title: 'Show Compassion',
      description: 'Treat community dogs with kindness. They are part of our shared environment and deserve humane treatment.'
    },
    {
      icon: Shield,
      title: 'Do Not Harm',
      description: 'Never beat, stone, poison, or harm dogs in any way. This is both illegal and inhumane.'
    },
    {
      icon: Phone,
      title: 'Report Cruelty',
      description: 'If you witness animal cruelty, report it to local authorities or animal welfare organizations.'
    },
    {
      icon: Users,
      title: 'Support Vaccination',
      description: 'Allow and support vaccination drives in your area. Vaccinated dogs are safe dogs.'
    },
    {
      icon: BookOpen,
      title: 'Educate Others',
      description: 'Spread awareness about animal welfare laws and the importance of humane treatment.'
    },
    {
      icon: Gavel,
      title: 'Respect the Law',
      description: 'Do not participate in or encourage illegal activities like dog relocation or killing.'
    }
  ];

  // What is illegal
  const illegalActions = [
    'Killing community dogs',
    'Poisoning dogs or leaving poisoned food',
    'Beating, kicking, or torturing dogs',
    'Forcibly relocating dogs to another area',
    'Abandoning pet dogs on the street',
    'Denying food or water to dogs in your care',
    'Organizing or participating in dog fights',
    'Using dogs for illegal activities',
    'Refusing to allow ABC/vaccination programs',
    'Threatening or harming animal welfare workers'
  ];

  // What to do in different situations
  const situationGuide = [
    {
      situation: 'If a dog bites you',
      actions: [
        'Wash the wound immediately with soap and running water for 15 minutes',
        'Apply antiseptic and seek medical attention immediately',
        'Get anti-rabies vaccination (PEP) as advised by doctor',
        'Report to local authorities - the dog should be observed, not killed',
        'The dog may need to be quarantined for 10 days for observation'
      ]
    },
    {
      situation: 'If you find an injured dog',
      actions: [
        'Call an animal welfare organization immediately',
        'Do not try to move the dog unless absolutely necessary',
        'Keep the dog warm and calm until help arrives',
        'Provide water if the dog is conscious and alert',
        'Stay with the dog if safe to do so'
      ]
    },
    {
      situation: 'If someone is harming a dog',
      actions: [
        'Do not put yourself in danger',
        'Document the incident with photos/video if possible',
        'Note the location, time, and description of the person',
        'Call the police (100) or animal welfare helpline',
        'File a written complaint with the police station'
      ]
    },
    {
      situation: 'If dogs are being illegally removed',
      actions: [
        'This is illegal under ABC Rules 2001',
        'Inform the persons that relocation is against the law',
        'Document the incident and vehicle details',
        'Report to police, municipal commissioner, and AWBI',
        'Contact local animal welfare organizations for support'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 to-navy-800/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-yellow-500 text-navy-900 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Know Your Rights & Responsibilities
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Awareness & 
              <span className="text-yellow-400"> Law</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Understanding the legal rights of community dogs and our responsibilities 
              as citizens is essential for peaceful coexistence.
            </p>
          </div>
        </div>
      </section>

      {/* Key Message */}
      <section className="py-8 bg-yellow-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <Scale className="w-10 h-10 text-navy-900 flex-shrink-0" />
            <p className="text-lg font-medium text-navy-900">
              <span className="font-bold">Did You Know?</span> Community dogs have legal rights in India. 
              Killing, relocating, or harming them is a punishable offense under multiple laws.
            </p>
          </div>
        </div>
      </section>

      {/* Key Laws Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-navy-600 font-semibold text-sm uppercase tracking-wider">Legal Framework</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
              Laws Protecting Community Dogs
            </h2>
            <p className="text-gray-600 text-lg">
              Several Indian laws protect the rights and welfare of community dogs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {keyLaws.map((law, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Scale className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">{law.title}</h3>
                    <p className="text-gray-600 mt-1">{law.description}</p>
                  </div>
                </div>
                <div className="ml-16 space-y-2">
                  {law.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Illegal Section */}
      <section className="py-16 lg:py-24 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Important</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
                What is ILLEGAL
              </h2>
              <p className="text-gray-600 text-lg">
                The following actions are punishable offenses under Indian law.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-4">
                {illegalActions.map((action, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-800 font-medium">{action}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-red-100 rounded-xl">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-red-800 text-lg mb-2">Penalties for Animal Cruelty</h4>
                    <p className="text-red-700">
                      Offenders can face fines ranging from ₹50 to ₹100 under PCA Act, 
                      and imprisonment of 2-5 years under IPC Sections 428/429 for killing 
                      or causing grievous injury to animals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citizen Responsibilities Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Your Role</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
              Citizen Responsibilities
            </h2>
            <p className="text-gray-600 text-lg">
              As responsible citizens, we all have a role to play in ensuring the welfare of community dogs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {citizenResponsibilities.map((item, index) => (
              <div 
                key={index}
                className="bg-green-50 rounded-xl p-6 border border-green-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Situation Guide Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-navy-600 font-semibold text-sm uppercase tracking-wider">Quick Guide</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
              What To Do In Different Situations
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {situationGuide.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="bg-navy-900 text-white px-6 py-4">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <Info className="w-5 h-5 text-yellow-400" />
                    {item.situation}
                  </h3>
                </div>
                <div className="p-6">
                  <ol className="space-y-3">
                    {item.actions.map((action, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-yellow-400 text-navy-900 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {idx + 1}
                        </span>
                        <p className="text-gray-700">{action}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Coexistence Section */}
      <section className="py-16 lg:py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Humane Coexistence Matters
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">For Public Health</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    Vaccinated dogs prevent rabies transmission
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    Sterilization controls population humanely
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    Killing dogs creates vacuum, inviting new dogs
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">For Society</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    Dogs provide security and companionship
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    Compassion builds a better society
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    Legal compliance protects everyone
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Cruelty Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 rounded-2xl p-8 md:p-12 border-2 border-red-200">
              <div className="text-center mb-8">
                <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                  Witnessed Animal Cruelty?
                </h2>
                <p className="text-gray-600 text-lg">
                  Report it immediately. Your action can save a life.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 text-center">
                  <Phone className="w-10 h-10 text-red-600 mx-auto mb-3" />
                  <h4 className="font-bold text-navy-900 mb-1">Police</h4>
                  <p className="text-2xl font-bold text-red-600">100</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <Phone className="w-10 h-10 text-red-600 mx-auto mb-3" />
                  <h4 className="font-bold text-navy-900 mb-1">Suranango for Dogs</h4>
                  <p className="text-2xl font-bold text-red-600">98765 43210</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <Phone className="w-10 h-10 text-red-600 mx-auto mb-3" />
                  <h4 className="font-bold text-navy-900 mb-1">AWBI Helpline</h4>
                  <p className="text-2xl font-bold text-red-600">1800 599 3000</p>
                </div>
              </div>

              <div className="text-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  File a Detailed Report
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Spread Awareness
          </h2>
          <p className="text-navy-800 text-lg mb-8 max-w-2xl mx-auto">
            Help us create a more compassionate society by sharing this information with 
            your family, friends, and community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/community-support"
              className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
            >
              Get Community Support
            </Link>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwarenessLawPage;
