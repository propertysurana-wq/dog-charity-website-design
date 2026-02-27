/**
 * Theme Configuration for Suranango for Dogs
 * Dog Rescue NGO Website
 * 
 * Primary: Yellow/Gold - Warm, friendly, optimistic
 * Secondary: Navy Blue - Trust, reliability, professionalism
 * Accent: Various warm tones for highlights
 */

// Organization Details
export const orgInfo = {
  name: 'Suranango for Dogs',
  tagline: 'Giving Every Dog a Loving Home',
  address: '123 Dog Welfare Street, Surana Nagar, Rajasthan - 302001',
  phone: '+91 98765 43210',
  email: 'info@suranaNGO.org',
  foundedYear: '2010',
};

export const theme = {
  colors: {
    // Primary Colors
    primary: {
      yellow: '#FFD100',      // Main brand yellow
      yellowLight: '#FFE34D', // Lighter yellow for hovers
      yellowDark: '#E6BC00',  // Darker yellow for accents
    },
    // Secondary Colors
    secondary: {
      navy: '#002B5C',        // Primary navy blue
      navyLight: '#003D82',   // Lighter navy for hovers
      navyDark: '#001F42',    // Darker navy for text
    },
    // Accent Colors
    accent: {
      teal: '#00A19A',        // Teal for highlights
      orange: '#F58220',      // Orange for CTAs
      green: '#78BE20',       // Green for success states
      purple: '#6B3FA0',      // Purple for special features
    },
    // Neutral Colors
    neutral: {
      white: '#FFFFFF',
      gray50: '#F9FAFB',
      gray100: '#F3F4F6',
      gray200: '#E5E7EB',
      gray300: '#D1D5DB',
      gray400: '#9CA3AF',
      gray500: '#6B7280',
      gray600: '#4B5563',
      gray700: '#374151',
      gray800: '#1F2937',
      gray900: '#111827',
      black: '#000000',
    },
  },
  
  fonts: {
    heading: '"Nunito Sans", system-ui, sans-serif',
    body: '"Open Sans", system-ui, sans-serif',
  },
  
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '6rem',   // 96px
  },
  
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  },
};

// Dog placeholder data
export const placeholderDogs = [
  {
    id: '1',
    name: 'Buddy',
    breed: 'Labrador Retriever',
    age: '3 years',
    gender: 'Male',
    size: 'Large',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop',
    description: 'Buddy is a friendly and energetic Labrador who loves playing fetch and going for long walks.',
    location: 'Jaipur',
    goodWith: ['children', 'other dogs'],
  },
  {
    id: '2',
    name: 'Sheru',
    breed: 'Indian Pariah',
    age: '2 years',
    gender: 'Male',
    size: 'Medium',
    image: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?w=400&h=400&fit=crop',
    description: 'Sheru is an intelligent and loyal Indian Pariah looking for a loving home.',
    location: 'Jodhpur',
    goodWith: ['active families'],
  },
  {
    id: '3',
    name: 'Raja',
    breed: 'Labrador Mix',
    age: '4 years',
    gender: 'Male',
    size: 'Large',
    image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=400&fit=crop',
    description: 'Raja is a loyal and protective companion who would thrive in an active household.',
    location: 'Udaipur',
    goodWith: ['adults'],
  },
  {
    id: '4',
    name: 'Rani',
    breed: 'Indian Spitz',
    age: '5 years',
    gender: 'Female',
    size: 'Medium',
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=400&h=400&fit=crop',
    description: 'Rani is a sweet and gentle soul who loves cuddles and peaceful walks.',
    location: 'Ajmer',
    goodWith: ['children', 'cats', 'other dogs'],
  },
  {
    id: '5',
    name: 'Moti',
    breed: 'Mixed Breed',
    age: '1 year',
    gender: 'Male',
    size: 'Medium',
    image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=400&h=400&fit=crop',
    description: 'Moti is a curious and playful young pup with endless energy.',
    location: 'Bikaner',
    goodWith: ['children', 'other dogs'],
  },
  {
    id: '6',
    name: 'Lali',
    breed: 'Desi Mix',
    age: '3 years',
    gender: 'Female',
    size: 'Medium',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop',
    description: 'Lali is an affectionate rescue who loves being around people.',
    location: 'Kota',
    goodWith: ['adults'],
  },
];

// Navigation items
export const navItems = [
  { label: 'What We Do', path: '/what-we-do' },
  { label: 'Who We Are', path: '/who-we-are' },
  { label: 'Rehoming', path: '/rehoming' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Donate', path: '/donate' },
  { label: 'Contact', path: '/contact' },
];

// Statistics
export const statistics = [
  { value: '2,500+', label: 'Dogs rehomed yearly' },
  { value: '5+', label: 'Rescue centres' },
  { value: '14+', label: 'Years of service' },
  { value: '50K+', label: 'Supporters' },
];
