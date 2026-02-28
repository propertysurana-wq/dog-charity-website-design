/**
 * Contact Us Page - Suranango for Dogs
 * Emergency contacts, contact form, and reporting instructions
 */

import React, { useState } from 'react';
import { 
  Phone, 
  Mail,
  MapPin,
  Clock,
  AlertTriangle,
  MessageCircle,
  Send,
  CheckCircle,
  ChevronDown,
  Ambulance,
  Heart,
  Shield
} from 'lucide-react';

const ContactUsPage: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requestType: '',
    location: '',
    message: '',
    urgent: false
  });
  const [submitted, setSubmitted] = useState(false);

  // Request types
  const requestTypes = [
    'Report Injured Dog',
    'Report Dog in Distress',
    'Report Animal Cruelty',
    'Dog-Related Complaint',
    'Request Vaccination Camp',
    'Request Community Support',
    'General Inquiry',
    'Volunteer Inquiry',
    'Donation Inquiry',
    'Other'
  ];

  // Service areas
  const serviceAreas = [
    { city: 'Jaipur', areas: 'All areas including Malviya Nagar, C-Scheme, Vaishali Nagar, Mansarovar, Jagatpura' },
    { city: 'Jodhpur', areas: 'Pratap Nagar, Shastri Nagar, Paota, Ratanada, Sardarpura' },
    { city: 'Udaipur', areas: 'City Center, Sukhadia Circle, Fatehsagar, Hiran Magri, Goverdhan Vilas' },
    { city: 'Ajmer', areas: 'Civil Lines, Vaishali Nagar, Ramganj, Madar Gate' },
    { city: 'Bikaner', areas: 'Station Road, Rani Bazar, Jorbeer, Pawan Puri' },
    { city: 'Kota', areas: 'Talwandi, Gumanpura, Vigyan Nagar, Kunhari' }
  ];

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        requestType: '',
        location: '',
        message: '',
        urgent: false
      });
    }, 5000);
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 to-navy-800/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-yellow-500 text-navy-900 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Contact 
              <span className="text-yellow-400"> Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              We are here to help. Reach out to us for emergencies, inquiries, 
              or to report dog-related issues.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-6 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-2">
              <Ambulance className="w-8 h-8 text-white animate-pulse" />
              <span className="text-white font-bold text-lg">EMERGENCY RESCUE:</span>
            </div>
            <a 
              href="tel:+919876543210"
              className="text-2xl md:text-3xl font-bold text-white hover:text-yellow-300 transition-colors"
            >
              +91 9999999999
            </a>
            <span className="text-red-100 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Available 24/7 for injured dogs
            </span>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Emergency */}
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Emergency</h3>
              <p className="text-gray-600 mb-4 text-sm">For injured, sick, or dogs in immediate danger</p>
              <a 
                href="tel:+919876543210"
                className="block text-2xl font-bold text-red-600 hover:text-red-700"
              >
                +91 9999999999
              </a>
              <p className="text-gray-500 text-sm mt-2">24/7 Available</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4 text-sm">Send photos, location, and details quickly</p>
              <a 
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-2xl font-bold text-green-600 hover:text-green-700"
              >
                +91 9999999999
              </a>
              <p className="text-gray-500 text-sm mt-2">Quick Response</p>
            </div>

            {/* Email */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4 text-sm">For detailed inquiries and documentation</p>
              <a 
                href="mailto:info@suranaNGO.org"
                className="block text-xl font-bold text-blue-600 hover:text-blue-700 break-all"
              >
                suranadogngo@gmail.com
              </a>
              <p className="text-gray-500 text-sm mt-2">Response within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Report Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-navy-600 font-semibold text-sm uppercase tracking-wider">Reporting Guide</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
                How to Report Dog-Related Issues
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Injured Dog */}
              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <Ambulance className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900">Reporting an Injured Dog</h3>
                </div>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <span><strong>Call immediately:</strong> +919999999999</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <span><strong>Share exact location:</strong> Landmark, street name, GPS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <span><strong>Describe condition:</strong> Injuries visible, mobility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <span><strong>Send photos:</strong> Via WhatsApp if possible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                    <span><strong>Stay nearby:</strong> If safe, until help arrives</span>
                  </li>
                </ol>
              </div>

              {/* Dog-Related Complaint */}
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900">Dog-Related Complaints</h3>
                </div>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <span><strong>Call or WhatsApp:</strong> Describe the issue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <span><strong>Provide location:</strong> Society name, area, city</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <span><strong>Explain concern:</strong> Barking, aggression, fear</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <span><strong>Share contact:</strong> RWA or society representative</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                    <span><strong>Schedule visit:</strong> We will arrange an assessment</span>
                  </li>
                </ol>
              </div>

              {/* Report Cruelty */}
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900">Reporting dog Cruelty</h3>
                </div>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <span><strong>Document:</strong> Photos/videos if safe to do so</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <span><strong>Note details:</strong> Time, location, description of person</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <span><strong>Call us:</strong> +91 9999999999 immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <span><strong>File FIR:</strong> We can help you file a police complaint</span>
                  </li>
                </ol>
              </div>

              {/* Request Services */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900">Request Our Services</h3>
                </div>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <span><strong>Contact us:</strong> Phone, WhatsApp, or email</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <span><strong>Specify service:</strong> Vaccination, sterilization, education</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <span><strong>Share details:</strong> Area, number of dogs, contact person</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <span><strong>Coordinate:</strong> We will schedule and confirm</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-navy-600 font-semibold text-sm uppercase tracking-wider">Send a Message</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
                Contact Form
              </h2>
              <p className="text-gray-600">
                For non-emergency requests, fill out this form and we will get back to you.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Urgent Checkbox */}
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="checkbox"
                        name="urgent"
                        checked={formData.urgent}
                        onChange={handleChange}
                        className="w-5 h-5 text-red-600 rounded focus:ring-red-500"
                      />
                      <span className="text-red-800 font-medium">
                        This is an urgent matter (injured dog, cruelty, emergency)
                      </span>
                    </label>
                    {formData.urgent && (
                      <p className="mt-2 text-red-700 text-sm">
                        For emergencies, please also call: <strong>+91 9999999999</strong>
                      </p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="+91 9999999999"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Request Type */}
                    <div>
                      <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-2">
                        Type of Request <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select 
                          id="requestType"
                          name="requestType"
                          value={formData.requestType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent appearance-none bg-white"
                        >
                          <option value="">Select type</option>
                          {requestTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Location / Area <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Society name, area, city"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Details <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                      placeholder="Please describe your request or concern in detail..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      {/* <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-navy-600 font-semibold text-sm uppercase tracking-wider">Coverage</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
                Our Service Areas
              </h2>
              <p className="text-gray-600">
                We currently serve the following cities and areas in Rajasthan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceAreas.map((area, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-xl font-bold text-navy-900">{area.city}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{area.areas}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Do not see your area? <a href="tel:+919876543210" className="text-yellow-600 font-semibold hover:underline">Call us</a> to check if we can help.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Office Location Section */}
      <section className="py-16 lg:py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-navy-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Address</h4>
                      <p className="text-gray-300">
                        123 Dog Welfare Street<br />
                        Surana Nagar, Jaipur<br />
                        Rajasthan - 302001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-navy-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Office Hours</h4>
                      <p className="text-gray-300">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: Closed
                      </p>
                      <p className="text-yellow-400 text-sm mt-2">
                        Emergency helpline available 24/7
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-navy-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Contact</h4>
                      <p className="text-gray-300">
                        Phone: +919999999999<br />
                        Email: info@suranaNGO.org
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                  <p className="text-gray-400">
                    [Map placeholder - Integration with Google Maps]
                  </p>
                  <a 
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-2 bg-yellow-400 text-navy-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
