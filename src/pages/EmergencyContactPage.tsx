/**
 * Emergency Contact & Reporting Page
 * Provides emergency contact information and reporting forms for dog-related emergencies
 */

import React, { useState } from 'react';
import { Phone, MessageCircle, Clock, MapPin, AlertTriangle, CheckCircle, Send, Ambulance, Heart, Shield, Info } from 'lucide-react';

// Emergency contact information
const emergencyContacts = {
  mainHelpline: '+919999999999',
  whatsapp: '+919999999999',
  emergencyHotline: '+91 98765 43211',
  email: 'emergency@suranaNGO.org',
};

// Types of emergencies we handle
const emergencyTypes = [
  {
    id: 'injured',
    title: 'Injured Dog',
    description: 'Dog hit by vehicle, bleeding, or visibly injured',
    icon: Ambulance,
    priority: 'HIGH',
    color: 'bg-red-500',
  },
  {
    id: 'sick',
    title: 'Sick Dog',
    description: 'Dog showing signs of illness, weakness, or distress',
    icon: Heart,
    priority: 'HIGH',
    color: 'bg-orange-500',
  },
  {
    id: 'stuck',
    title: 'Dog Stuck/Trapped',
    description: 'Dog trapped in drain, well, or confined space',
    icon: AlertTriangle,
    priority: 'HIGH',
    color: 'bg-red-600',
  },
  {
    id: 'aggressive',
    title: 'Aggressive Behavior',
    description: 'Dog showing unusual aggression or fear',
    icon: Shield,
    priority: 'MEDIUM',
    color: 'bg-yellow-500',
  },
  {
    id: 'puppies',
    title: 'Puppies in Danger',
    description: 'Abandoned or orphaned puppies needing care',
    icon: Heart,
    priority: 'HIGH',
    color: 'bg-pink-500',
  },
  {
    id: 'abuse',
    title: 'Animal Abuse',
    description: 'Report cruelty or mistreatment of dogs',
    icon: AlertTriangle,
    priority: 'HIGH',
    color: 'bg-red-700',
  },
];

// Service areas
const serviceAreas = [
  'Jaipur City',
  'Jodhpur',
  'Udaipur',
  'Ajmer',
  'Bikaner',
  'Kota',
  'Surana Nagar',
  'Surrounding Villages (within 50km)',
];

// Response time information
const responseInfo = [
  {
    type: 'Critical Emergency',
    time: '15-30 minutes',
    description: 'Life-threatening injuries, accidents',
  },
  {
    type: 'Urgent Cases',
    time: '1-2 hours',
    description: 'Sick dogs, trapped animals',
  },
  {
    type: 'General Reports',
    time: 'Same day',
    description: 'Behavioral issues, general concerns',
  },
];

const EmergencyContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    reporterName: '',
    phone: '',
    emergencyType: '',
    location: '',
    landmark: '',
    description: '',
    dogCount: '1',
    canWait: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Validation
    if (!formData.reporterName || !formData.phone || !formData.emergencyType || !formData.location) {
      setError('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch {
      setError('Failed to submit report. Please call our emergency helpline directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Emergency Banner */}
      <section className="bg-red-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <AlertTriangle className="w-8 h-8 animate-pulse" />
            <div>
              <p className="font-bold text-lg">For Life-Threatening Emergencies, Call Immediately:</p>
              <a href={`tel:${emergencyContacts.emergencyHotline}`} className="text-2xl font-bold hover:underline">
                {emergencyContacts.emergencyHotline}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Emergency Contact & Reporting
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto mb-8">
            Report injured, sick, or distressed dogs. Our rescue team is available 24/7 to help 
            community dogs in need. Every report matters - you could save a life today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${emergencyContacts.mainHelpline}`}
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors"
            >
              <Phone className="w-6 h-6" />
              Call Now: {emergencyContacts.mainHelpline}
            </a>
            <a
              href={`https://wa.me/${emergencyContacts.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Emergency Hotline */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Hotline</h3>
              <p className="text-gray-600 mb-4">For critical emergencies</p>
              <a href={`tel:${emergencyContacts.emergencyHotline}`} className="text-2xl font-bold text-red-600 hover:underline">
                {emergencyContacts.emergencyHotline}
              </a>
              <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
            </div>

            {/* WhatsApp Support */}
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp Support</h3>
              <p className="text-gray-600 mb-4">Send photos & location</p>
              <a 
                href={`https://wa.me/${emergencyContacts.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-green-600 hover:underline"
              >
                {emergencyContacts.whatsapp}
              </a>
              <p className="text-sm text-gray-500 mt-2">Quick response</p>
            </div>

            {/* General Helpline */}
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">General Helpline</h3>
              <p className="text-gray-600 mb-4">For queries & reports</p>
              <a href={`tel:${emergencyContacts.mainHelpline}`} className="text-2xl font-bold text-yellow-600 hover:underline">
                {emergencyContacts.mainHelpline}
              </a>
              <p className="text-sm text-gray-500 mt-2">9 AM - 9 PM Daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Respond To
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We handle all types of dog-related emergencies and concerns. Select the type that matches your situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyTypes.map((emergency) => {
              const IconComponent = emergency.icon;
              return (
                <div
                  key={emergency.id}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-yellow-400"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${emergency.color} p-3 rounded-xl`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{emergency.title}</h3>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                          emergency.priority === 'HIGH' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {emergency.priority}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{emergency.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reporting Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Report an Emergency
            </h2>
            <p className="text-lg text-gray-600">
              Fill out this form to report a dog in need. For immediate emergencies, please call us directly.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Report Submitted Successfully!</h3>
              <p className="text-gray-600 mb-4">
                Thank you for reporting. Our rescue team has been notified and will respond shortly.
              </p>
              <p className="text-gray-600 mb-6">
                Reference ID: <span className="font-bold">SR-{Date.now().toString().slice(-8)}</span>
              </p>
              <div className="bg-yellow-50 rounded-xl p-4 mb-6">
                <p className="text-gray-700">
                  <strong>What happens next?</strong><br />
                  Our team will call you within 30 minutes to confirm details and dispatch help.
                </p>
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    reporterName: '',
                    phone: '',
                    emergencyType: '',
                    location: '',
                    landmark: '',
                    description: '',
                    dogCount: '1',
                    canWait: false,
                  });
                }}
                className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition-colors"
              >
                Submit Another Report
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-6 md:p-8">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Reporter Name */}
                <div>
                  <label htmlFor="reporterName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="reporterName"
                    name="reporterName"
                    value={formData.reporterName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>

                {/* Emergency Type */}
                <div>
                  <label htmlFor="emergencyType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Emergency Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="emergencyType"
                    name="emergencyType"
                    value={formData.emergencyType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors bg-white"
                    required
                  >
                    <option value="">Select emergency type</option>
                    {emergencyTypes.map(type => (
                      <option key={type.id} value={type.id}>{type.title}</option>
                    ))}
                  </select>
                </div>

                {/* Number of Dogs */}
                <div>
                  <label htmlFor="dogCount" className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Dogs
                  </label>
                  <select
                    id="dogCount"
                    name="dogCount"
                    value={formData.dogCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors bg-white"
                  >
                    <option value="1">1 Dog</option>
                    <option value="2">2 Dogs</option>
                    <option value="3">3 Dogs</option>
                    <option value="4+">4 or more Dogs</option>
                    <option value="unknown">Not sure</option>
                  </select>
                </div>

                {/* Location */}
                <div className="md:col-span-2">
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                    Location / Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors"
                    placeholder="Full address where the dog is located"
                    required
                  />
                </div>

                {/* Landmark */}
                <div className="md:col-span-2">
                  <label htmlFor="landmark" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nearby Landmark
                  </label>
                  <input
                    type="text"
                    id="landmark"
                    name="landmark"
                    value={formData.landmark}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors"
                    placeholder="E.g., Near SBI Bank, Opposite City Mall"
                  />
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                    Describe the Situation
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors resize-none"
                    placeholder="Describe what you observed - dog's condition, behavior, any visible injuries..."
                  />
                </div>

                {/* Can Wait Checkbox */}
                <div className="md:col-span-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="canWait"
                      checked={formData.canWait}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-yellow-500 border-gray-300 rounded focus:ring-yellow-400"
                    />
                    <span className="text-gray-700">I can wait at the location until help arrives</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 text-gray-900 py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Emergency Report
                    </>
                  )}
                </button>
              </div>

              {/* Form Note */}
              <p className="text-center text-gray-500 text-sm mt-4">
                <Info className="w-4 h-4 inline mr-1" />
                For immediate emergencies, please call {emergencyContacts.emergencyHotline} directly
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Response Times */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Response Times</h2>
            <p className="text-lg text-gray-300">We prioritize based on urgency to save the most lives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {responseInfo.map((info, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 text-center">
                <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{info.type}</h3>
                <p className="text-3xl font-bold text-yellow-400 mb-2">{info.time}</p>
                <p className="text-gray-400">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Service Areas
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We provide emergency response services across Rajasthan. Our rescue teams are stationed 
                at strategic locations to ensure quick response times.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="aspect-video bg-gray-300 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Service Area Map</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Help Until We Arrive
            </h2>
            <p className="text-lg text-gray-600">Follow these tips to keep the dog and yourself safe</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-4 text-xl font-bold text-gray-900">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Stay Calm</h3>
              <p className="text-gray-600 text-sm">Keep your voice low and movements slow. Injured dogs may be scared and defensive.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-4 text-xl font-bold text-gray-900">2</div>
              <h3 className="font-bold text-gray-900 mb-2">Keep Distance</h3>
              <p className="text-gray-600 text-sm">Do not try to touch or move the dog unless absolutely necessary to prevent further harm.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-4 text-xl font-bold text-gray-900">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Provide Shade</h3>
              <p className="text-gray-600 text-sm">If possible, create shade or shelter. Offer water in a shallow bowl if the dog is conscious.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-4 text-xl font-bold text-gray-900">4</div>
              <h3 className="font-bold text-gray-900 mb-2">Stay Nearby</h3>
              <p className="text-gray-600 text-sm">If safe, stay near the dog to monitor and guide our rescue team to the exact location.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Every Minute Counts
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            Your quick action can save a life. Do not hesitate to report - even if you are unsure, it is better to call than to wait.
          </p>
          <a
            href={`tel:${emergencyContacts.emergencyHotline}`}
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-800 transition-colors"
          >
            <Phone className="w-7 h-7" />
            Call Emergency: {emergencyContacts.emergencyHotline}
          </a>
        </div>
      </section>
    </div>
  );
};

export default EmergencyContactPage;
