/**
 * Vaccination & Disease Prevention Page
 * Information about vaccination programs, disease prevention, and public health initiatives
 */

import React, { useState } from 'react';
import { Syringe, Shield, Heart, Calendar, MapPin, Users, Phone, CheckCircle, AlertTriangle, Info, Clock, Award, FileText } from 'lucide-react';

// Vaccination programs
const vaccinationPrograms = [
  {
    id: 'antirabies',
    title: 'Anti-Rabies Vaccination',
    description: 'Free rabies vaccination for all community dogs to prevent this deadly disease',
    frequency: 'Annual',
    importance: 'Critical',
    icon: Syringe,
    color: 'bg-red-500',
    details: [
      'Protects dogs and humans from rabies',
      'Valid for 1 year',
      'Free of cost for community dogs',
      'Certificate provided',
    ],
  },
  {
    id: 'dhpp',
    title: '7-in-1 Vaccine',
    description: 'Comprehensive protection against Distemper, Hepatitis, Parvovirus, Parainfluenza, and more',
    frequency: 'Annual boosters',
    importance: 'Essential',
    icon: Shield,
    color: 'bg-blue-500',
    details: [
      'Protects against 7 major diseases',
      'Initial series + annual boosters',
      'Prevents deadly viral infections',
      'Safe and effective',
    ],
  },
  {
    id: 'deworming',
    title: 'Deworming Program',
    description: 'Regular deworming to eliminate intestinal parasites and improve dog health',
    frequency: 'Every 3 months',
    importance: 'Important',
    icon: Heart,
    color: 'bg-green-500',
    details: [
      'Removes intestinal worms',
      'Improves overall health',
      'Prevents transmission to humans',
      'Safe oral medication',
    ],
  },
  {
    id: 'tick',
    title: 'Tick & Flea Treatment',
    description: 'Treatment and prevention of external parasites that cause skin diseases',
    frequency: 'As needed',
    importance: 'Preventive',
    icon: Shield,
    color: 'bg-purple-500',
    details: [
      'Spot treatment application',
      'Prevents tick-borne diseases',
      'Reduces skin infections',
      'Safe topical treatment',
    ],
  },
];

// Why vaccination matters
const vaccinationBenefits = [
  {
    title: 'Protects Dogs',
    description: 'Prevents painful and deadly diseases in community dogs',
    icon: Heart,
  },
  {
    title: 'Protects Humans',
    description: 'Rabies vaccination prevents transmission to humans',
    icon: Users,
  },
  {
    title: 'Reduces Suffering',
    description: 'Healthy dogs live longer, happier lives without disease',
    icon: Shield,
  },
  {
    title: 'Community Safety',
    description: 'Vaccinated dog populations are safer for everyone',
    icon: CheckCircle,
  },
];

// Upcoming vaccination camps
const upcomingCamps = [
  {
    date: 'Every Sunday',
    location: 'Surana Nagar Community Center',
    time: '9:00 AM - 1:00 PM',
    vaccines: ['Anti-Rabies', 'Deworming'],
  },
  {
    date: '1st Saturday',
    location: 'Jaipur - Mansarovar Area',
    time: '8:00 AM - 12:00 PM',
    vaccines: ['Anti-Rabies', '7-in-1', 'Deworming'],
  },
  {
    date: '2nd Saturday',
    location: 'Jodhpur - Ratanada',
    time: '9:00 AM - 1:00 PM',
    vaccines: ['Anti-Rabies', 'Deworming'],
  },
  {
    date: '3rd Saturday',
    location: 'Udaipur - Fatehpura',
    time: '8:00 AM - 12:00 PM',
    vaccines: ['Anti-Rabies', 'Deworming'],
  },
];

// Statistics
const stats = [
  { number: '50,000+', label: 'Dogs Vaccinated Yearly' },
  { number: '200+', label: 'Vaccination Camps' },
  { number: '6', label: 'Districts Covered' },
  { number: '0', label: 'Rabies Cases in Vaccinated Dogs' },
];

// Diseases we prevent
const diseases = [
  {
    name: 'Rabies',
    severity: 'Fatal',
    description: 'A deadly viral disease that affects the brain. 100% fatal once symptoms appear.',
    prevention: 'Annual anti-rabies vaccination',
    humanRisk: 'High - can be transmitted through bites',
  },
  {
    name: 'Canine Distemper',
    severity: 'Often Fatal',
    description: 'A highly contagious viral disease affecting respiratory, GI, and nervous systems.',
    prevention: 'DHPP vaccine series',
    humanRisk: 'None - does not affect humans',
  },
  {
    name: 'Parvovirus',
    severity: 'Often Fatal',
    description: 'Highly contagious virus causing severe vomiting and bloody diarrhea.',
    prevention: 'DHPP vaccine series',
    humanRisk: 'None - does not affect humans',
  },
  {
    name: 'Canine Hepatitis',
    severity: 'Serious',
    description: 'Viral infection affecting the liver, kidneys, and blood vessels.',
    prevention: 'DHPP vaccine series',
    humanRisk: 'None - does not affect humans',
  },
  {
    name: 'Leptospirosis',
    severity: 'Serious',
    description: 'Bacterial disease affecting kidneys and liver, spread through contaminated water.',
    prevention: 'Leptospirosis vaccine',
    humanRisk: 'High - can infect humans',
  },
  {
    name: 'Intestinal Worms',
    severity: 'Moderate',
    description: 'Parasitic worms causing malnutrition, weakness, and digestive issues.',
    prevention: 'Regular deworming every 3 months',
    humanRisk: 'Moderate - some species affect humans',
  },
];

const VaccinationDiseasePage: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Syringe className="w-4 h-4" />
                Public Health Initiative
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Vaccination & Disease Prevention
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Our vaccination programs protect both community dogs and humans. Through regular 
                vaccination drives, we prevent deadly diseases like rabies and ensure healthier, 
                safer communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#schedule"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  View Camp Schedule
                </a>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-900 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Request Vaccination
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <div className="aspect-square bg-white/20 rounded-2xl flex items-center justify-center">
                  <Syringe className="w-32 h-32 text-white/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-blue-600">{stat.number}</p>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vaccination Matters */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Vaccination Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vaccination is the most effective way to prevent deadly diseases in dogs and protect public health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vaccinationBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Vaccination Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive vaccination and preventive care for community dogs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vaccinationPrograms.map((program) => {
              const IconComponent = program.icon;
              const isSelected = selectedProgram === program.id;
              
              return (
                <div
                  key={program.id}
                  className={`rounded-2xl p-6 cursor-pointer transition-all ${
                    isSelected ? 'ring-2 ring-blue-500 shadow-lg' : 'shadow-md hover:shadow-lg'
                  } bg-white`}
                  onClick={() => setSelectedProgram(isSelected ? null : program.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${program.color} p-3 rounded-xl`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                          program.importance === 'Critical' ? 'bg-red-100 text-red-700' :
                          program.importance === 'Essential' ? 'bg-blue-100 text-blue-700' :
                          program.importance === 'Important' ? 'bg-green-100 text-green-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {program.importance}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{program.description}</p>
                      <p className="text-sm text-blue-600 font-medium">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Frequency: {program.frequency}
                      </p>
                      
                      {isSelected && (
                        <div className="mt-4 pt-4 border-t">
                          <p className="font-semibold text-gray-900 mb-2">Key Benefits:</p>
                          <ul className="space-y-2">
                            {program.details.map((detail, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diseases We Prevent */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Diseases We Prevent
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Through vaccination and preventive care, we protect dogs from these serious diseases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diseases.map((disease, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{disease.name}</h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    disease.severity === 'Fatal' ? 'bg-red-500 text-white' :
                    disease.severity === 'Often Fatal' ? 'bg-orange-500 text-white' :
                    disease.severity === 'Serious' ? 'bg-yellow-500 text-gray-900' :
                    'bg-blue-500 text-white'
                  }`}>
                    {disease.severity}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{disease.description}</p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-400">
                    <span className="text-green-400 font-medium">Prevention:</span> {disease.prevention}
                  </p>
                  <p className="text-gray-400">
                    <span className={`font-medium ${
                      disease.humanRisk.includes('High') ? 'text-red-400' :
                      disease.humanRisk.includes('Moderate') ? 'text-yellow-400' :
                      'text-green-400'
                    }`}>Human Risk:</span> {disease.humanRisk}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rabies Focus Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full text-sm font-medium text-red-700 mb-6">
                <AlertTriangle className="w-4 h-4" />
                Critical Public Health Issue
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Rabies Prevention is Our Priority
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Rabies is a deadly disease that kills approximately 20,000 people in India every year - 
                the highest in the world. Most cases are transmitted through dog bites. Vaccination is 
                the only way to prevent this disease.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Why Rabies Vaccination is Critical:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Rabies is 100% fatal once symptoms appear - there is no cure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Vaccinating 70% of dogs can eliminate rabies in a community</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">One vaccination provides protection for one full year</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Our free vaccination drives make prevention accessible to all</span>
                  </li>
                </ul>
              </div>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Request Rabies Vaccination
              </a>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Rabies Facts</h3>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-red-600">20,000+</p>
                  <p className="text-gray-600">Deaths in India per year</p>
                </div>
                <div className="bg-red-50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-red-600">99%</p>
                  <p className="text-gray-600">Cases from dog bites</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-green-600">100%</p>
                  <p className="text-gray-600">Preventable with vaccination</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-blue-600">1 Year</p>
                  <p className="text-gray-600">Protection per vaccine dose</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vaccination Camp Schedule */}
      <section id="schedule" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vaccination Camp Schedule
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our regular vaccination drives or request a camp in your area
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {upcomingCamps.map((camp, index) => (
              <div key={index} className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{camp.date}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <MapPin className="w-4 h-4" />
                      {camp.location}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <Clock className="w-4 h-4" />
                      {camp.time}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {camp.vaccines.map((vaccine, i) => (
                        <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          {vaccine}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Request a Camp */}
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Request a Vaccination Camp in Your Area
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you have community dogs in your area that need vaccination, we can organize a 
              special camp. We require a minimum of 10 dogs and a local coordinator.
            </p>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call to Request: +91 98765 43210
            </a>
          </div>
        </div>
      </section>

      {/* How to Prepare */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Help with Vaccination Drives
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Community participation is essential for successful vaccination programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Identify Dogs',
                description: 'Count and observe community dogs in your area before the camp',
              },
              {
                step: '2',
                title: 'Inform Neighbors',
                description: 'Spread the word about the vaccination camp date and location',
              },
              {
                step: '3',
                title: 'Assist Safely',
                description: 'Help our team locate dogs, but let trained handlers catch them',
              },
              {
                step: '4',
                title: 'Monitor After',
                description: 'Watch for any reactions and report to us within 24 hours',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates & Records */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Vaccination Records & Certificates
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                We maintain proper records of all vaccinated dogs and provide certificates 
                when requested. This helps track vaccination coverage and proves a dog is protected.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Ear Notching</p>
                    <p className="text-blue-200 text-sm">Vaccinated dogs receive a small V-notch on their left ear for easy identification</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Digital Records</p>
                    <p className="text-blue-200 text-sm">We maintain a database of all vaccinated dogs with photos and locations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Info className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Certificates on Request</p>
                    <p className="text-blue-200 text-sm">Community members can request vaccination certificates for identified dogs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-6 text-gray-900">
                <div className="border-b pb-4 mb-4">
                  <p className="text-sm text-gray-500">VACCINATION CERTIFICATE</p>
                  <p className="text-xl font-bold">Suranango for Dogs</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Dog ID:</span>
                    <span className="font-medium">SFD-2024-XXXX</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Location:</span>
                    <span className="font-medium">Surana Nagar</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Vaccine:</span>
                    <span className="font-medium">Anti-Rabies</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Date:</span>
                    <span className="font-medium">DD/MM/YYYY</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Valid Until:</span>
                    <span className="font-medium">DD/MM/YYYY</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t text-center">
                  <p className="text-xs text-gray-500">Verified by Veterinary Officer</p>
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
            Help Us Vaccinate More Dogs
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            Every vaccinated dog makes our community safer. Support our vaccination programs 
            through donations or by volunteering at our vaccination camps.
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
              <Users className="w-6 h-6" />
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VaccinationDiseasePage;
