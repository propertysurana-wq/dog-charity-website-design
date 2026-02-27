import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { orgInfo } from '@/constants/theme';

/**
 * Footer Component
 * Comprehensive footer with links, contact info, and social media
 */

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'About Us': [
      { label: 'What We Do', path: '/what-we-do' },
      { label: 'Who We Are', path: '/who-we-are' },
      { label: 'Our Team', path: '/who-we-are#team' },
      { label: 'Our Centres', path: '/who-we-are#centres' },
      { label: 'Gallery', path: '/gallery' },
    ],
    'Rehoming': [
      { label: 'Find a Dog', path: '/rehoming' },
      { label: 'Rehoming Process', path: '/rehoming#process' },
      { label: 'Fostering', path: '/get-involved#volunteer' },
      { label: 'Success Stories', path: '/gallery' },
    ],
    'Get Involved': [
      { label: 'Donate', path: '/donate' },
      { label: 'Volunteer', path: '/get-involved#volunteer' },
      { label: 'Fundraise', path: '/get-involved#fundraise' },
      { label: 'Corporate Partners', path: '/get-involved#corporate' },
    ],
    'Dog Care': [
      { label: 'Dog Training', path: '/dog-care#training' },
      { label: 'Dog Health', path: '/dog-care#health' },
      { label: 'Dog Behaviour', path: '/dog-care#behaviour' },
      { label: 'New Dog Owner Guide', path: '/dog-care#new-owner' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: '#' },
    { icon: Twitter, label: 'Twitter', url: '#' },
    { icon: Instagram, label: 'Instagram', url: '#' },
    { icon: Youtube, label: 'YouTube', url: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      {/* Newsletter Section */}
      <div className="bg-yellow-400 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Stay Updated
              </h3>
              <p className="text-gray-800">
                Get the latest news and dog care tips in your inbox
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg w-full md:w-64 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Contact */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#FFD100] rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-[#002B5C]"
                  aria-hidden="true"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold">{orgInfo.name}</span>
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              {orgInfo.tagline} since {orgInfo.foundedYear}.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <a
                href={`tel:${orgInfo.phone}`}
                className="flex items-center gap-2 hover:text-[#FFD100] transition-colors"
              >
                <Phone className="w-4 h-4" />
                {orgInfo.phone}
              </a>
              <a
                href={`mailto:${orgInfo.email}`}
                className="flex items-center gap-2 hover:text-[#FFD100] transition-colors"
              >
                <Mail className="w-4 h-4" />
                {orgInfo.email}
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{orgInfo.address}</span>
              </p>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-lg mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-[#FFD100] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="p-2 bg-gray-700 rounded-full hover:bg-[#FFD100] hover:text-[#002B5C] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="text-sm text-gray-400 text-center md:text-right">
              <p>
                © {currentYear} {orgInfo.name}. All rights reserved.
              </p>
              <p className="mt-1">
                <Link to="/privacy" className="hover:text-[#FFD100]">Privacy Policy</Link>
                {' · '}
                <Link to="/terms" className="hover:text-[#FFD100]">Terms of Use</Link>
                {' · '}
                <Link to="/cookies" className="hover:text-[#FFD100]">Cookie Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
