import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { orgInfo } from '@/constants/theme';

/**
 * ContactPage Component
 * Contact information and enquiry form
 */

const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: orgInfo.phone,
      subtext: 'Mon-Sat 9am-6pm IST',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: orgInfo.email,
      subtext: 'We reply within 24 hours',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: '123 Dog Welfare Street',
      subtext: 'Surana Nagar, Rajasthan - 302001',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Opening Hours',
      details: 'Mon - Sun: 9am - 5pm',
      subtext: 'Public holidays may vary',
    },
  ];

  const faqItems = [
    {
      question: 'How do I adopt a dog?',
      answer: 'Visit our rehoming page to browse available dogs, then submit an application. Our team will contact you to discuss the next steps.',
    },
    {
      question: 'Can I visit without an appointment?',
      answer: 'Walk-ins are welcome during opening hours, but we recommend booking an appointment for dog viewings to ensure staff availability.',
    },
    {
      question: 'How can I volunteer?',
      answer: 'Fill out our volunteer application form online. We offer various roles from dog walking to administrative support.',
    },
    {
      question: 'Do you accept dog surrenders?',
      answer: 'Yes, we can help if you need to surrender a dog. Please contact us to discuss your situation and available options.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#002B5C] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Have a question or want to learn more about our work? We'd love to hear
            from you. Choose the best way to reach us below.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="w-14 h-14 bg-[#FFD100] rounded-full flex items-center justify-center mx-auto mb-4 text-[#002B5C]">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#002B5C] mb-1">{item.title}</h3>
                <p className="text-gray-800 font-medium">{item.details}</p>
                <p className="text-gray-500 text-sm">{item.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#002B5C] mb-6">
                Send Us a Message
              </h2>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD100] focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD100] focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD100] focus:border-transparent"
                        placeholder="07123 456789"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD100] focus:border-transparent bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="adoption">Dog Adoption</option>
                        <option value="donation">Donations</option>
                        <option value="volunteering">Volunteering</option>
                        <option value="surrender">Dog Surrender</option>
                        <option value="general">General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD100] focus:border-transparent resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    rightIcon={<Send className="w-5 h-5" />}
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold text-[#002B5C] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <details
                    key={index}
                    className="bg-gray-50 rounded-lg group"
                  >
                    <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-[#002B5C] hover:bg-gray-100 rounded-lg">
                      {item.question}
                      <span className="text-[#FFD100] group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <p className="px-4 pb-4 text-gray-600">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-[#002B5C] mx-auto mb-4" />
            <p className="text-gray-600">Interactive map would be displayed here</p>
            <p className="text-sm text-gray-500">{orgInfo.address}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
