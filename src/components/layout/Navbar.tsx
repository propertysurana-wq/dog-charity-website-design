// // // /**
// // //  * Navbar Component
// // //  * Responsive navigation with mobile menu and dropdown support
// // //  * Updated with consistent yellow theme colors
// // //  */

// // // // import React, { useState, useEffect } from 'react';
// // // // import { Link, useLocation } from 'react-router-dom';
// // // // import { Menu, X, Phone, ChevronDown, Heart } from 'lucide-react';

// // // // // Navigation structure - Updated as per requirements
// // // // const navItems = [
// // // //   {
// // // //     label: 'About',
// // // //     href: '/about-us',
// // // //     children: [
// // // //       { label: 'About Us', href: '/about-us' },
// // // //       { label: 'Mission & Vision', href: '/mission-vision' },
// // // //       { label: 'Who We Are', href: '/who-we-are' },
// // // //       { label: 'Gallery', href: '/gallery' },
// // // //     ],
// // // //   },
// // // //   {
// // // //     label: 'Problems We Resolved',
// // // //     href: '/our-work/dog-problem-resolution',
// // // //   },
// // // //   {
// // // //     label: 'Our Work',
// // // //     href: '/our-work',
// // // //     children: [
// // // //       { label: 'What We Do', href: '/what-we-do' },
// // // //       { label: 'Our Work Overview', href: '/our-work' },
// // // //       { label: 'Injury & Medical Care', href: '/our-work/injury-medical-care' },
// // // //       { label: 'Vaccination Programs', href: '/our-work/vaccination-programs' },
// // // //       { label: 'Shelter Support', href: '/our-work/shelter-support' },
// // // //     ],
// // // //   },
// // // //   {
// // // //     label: 'Shelter & Safe Care',
// // // //     href: '/shelter-safe-care',
// // // //   },
// // // //   {
// // // //     label: 'Services',
// // // //     href: '/emergency-contact',
// // // //     children: [
// // // //       { label: 'Emergency Contact', href: '/emergency-contact' },
// // // //       { label: 'Vaccination & Disease Prevention', href: '/vaccination-disease-prevention' },
// // // //       { label: 'Community Support', href: '/community-support' },
// // // //     ],
// // // //   },
// // // //   {
// // // //     label: 'Awareness & Law',
// // // //     href: '/awareness-law',
// // // //   },
// // // //   {
// // // //     label: 'Become Volunteer',
// // // //     href: '/get-involved',
// // // //   },
// // // //   {
// // // //     label: 'Donate',
// // // //     href: '/donate',
// // // //   },
// // // //   {
// // // //     label: 'Contact',
// // // //     href: '/contact-us',
// // // //   },
// // // // ];

// // // // const Navbar: React.FC = () => {
// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const [scrolled, setScrolled] = useState(false);
// // // //   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
// // // //   const location = useLocation();

// // // //   // Handle scroll effect
// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       setScrolled(window.scrollY > 20);
// // // //     };
// // // //     window.addEventListener('scroll', handleScroll);
// // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // //   }, []);

// // // //   // Close mobile menu on route change
// // // //   useEffect(() => {
// // // //     setIsOpen(false);
// // // //     setActiveDropdown(null);
// // // //   }, [location.pathname]);

// // // //   const toggleDropdown = (label: string) => {
// // // //     setActiveDropdown(activeDropdown === label ? null : label);
// // // //   };

// // // //   return (
// // // //     <header
// // // //       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
// // // //         scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
// // // //       }`}
// // // //     >
// // // //       {/* Top Bar */}
// // // //       <div className="bg-gray-900 text-white py-2 hidden md:block">
// // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //           <div className="flex items-center justify-between text-sm">
// // // //             <div className="flex items-center gap-6">
// // // //               <a
// // // //                 href="tel:+919876543210"
// // // //                 className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
// // // //               >
// // // //                 <Phone className="w-4 h-4" />
// // // //                 <span>Emergency: +91 98765 43210</span>
// // // //               </a>
// // // //               <span className="text-gray-400">|</span>
// // // //               <span>24/7 Rescue Helpline</span>
// // // //             </div>
// // // //             <div className="flex items-center gap-4">
// // // //               <Link
// // // //                 to="/donate"
// // // //                 className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-semibold hover:bg-yellow-300 transition-colors flex items-center gap-1"
// // // //               >
// // // //                 <Heart className="w-4 h-4" />
// // // //                 Donate Now
// // // //               </Link>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Main Navigation */}
// // // //       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //         <div className="flex items-center justify-between h-16 md:h-20">
// // // //           {/* Logo */}
// // // //           <Link to="/" className="flex items-center gap-3" aria-label="Suranango for Dogs Home">
// // // //             <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
// // // //               <span className="text-2xl">🐕</span>
// // // //             </div>
// // // //             <div className="hidden sm:block">
// // // //               <h1 className="text-xl font-bold text-gray-900">Suranango</h1>
// // // //               <p className="text-xs text-gray-600">for Dogs</p>
// // // //             </div>
// // // //           </Link>

// // // //           {/* Desktop Navigation */}
// // // //           <div className="hidden lg:flex items-center gap-1">
// // // //             {navItems.map((item) => (
// // // //               <div key={item.label} className="relative group">
// // // //                 {item.children ? (
// // // //                   <button
// // // //                     className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-colors ${
// // // //                       location.pathname.startsWith(item.href)
// // // //                         ? 'text-yellow-600 bg-yellow-50'
// // // //                         : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
// // // //                     }`}
// // // //                     onMouseEnter={() => setActiveDropdown(item.label)}
// // // //                     onMouseLeave={() => setActiveDropdown(null)}
// // // //                     aria-expanded={activeDropdown === item.label}
// // // //                     aria-haspopup="true"
// // // //                   >
// // // //                     {item.label}
// // // //                     <ChevronDown className="w-4 h-4" />
// // // //                   </button>
// // // //                 ) : (
// // // //                   <Link
// // // //                     to={item.href}
// // // //                     className={`px-4 py-2 rounded-lg font-medium transition-colors ${
// // // //                       location.pathname === item.href
// // // //                         ? 'text-yellow-600 bg-yellow-50'
// // // //                         : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
// // // //                     }`}
// // // //                   >
// // // //                     {item.label}
// // // //                   </Link>
// // // //                 )}

// // // //                 {/* Dropdown Menu */}
// // // //                 {item.children && (
// // // //                   <div
// // // //                     className={`absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
// // // //                       activeDropdown === item.label
// // // //                         ? 'opacity-100 visible translate-y-0'
// // // //                         : 'opacity-0 invisible -translate-y-2'
// // // //                     }`}
// // // //                     onMouseEnter={() => setActiveDropdown(item.label)}
// // // //                     onMouseLeave={() => setActiveDropdown(null)}
// // // //                   >
// // // //                     {item.children.map((child) => (
// // // //                       <Link
// // // //                         key={child.href}
// // // //                         to={child.href}
// // // //                         className={`block px-4 py-2 text-sm transition-colors ${
// // // //                           location.pathname === child.href
// // // //                             ? 'text-yellow-600 bg-yellow-50'
// // // //                             : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
// // // //                         }`}
// // // //                       >
// // // //                         {child.label}
// // // //                       </Link>
// // // //                     ))}
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //             ))}
// // // //           </div>

// // // //           {/* CTA Button - Desktop */}
// // // //           <div className="hidden lg:flex items-center gap-4">
// // // //             <Link
// // // //               to="/emergency-contact"
// // // //               className="bg-red-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors flex items-center gap-2"
// // // //             >
// // // //               <Phone className="w-4 h-4" />
// // // //               Emergency
// // // //             </Link>
// // // //           </div>

// // // //           {/* Mobile Menu Button */}
// // // //           <button
// // // //             className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
// // // //             onClick={() => setIsOpen(!isOpen)}
// // // //             aria-label="Toggle menu"
// // // //             aria-expanded={isOpen}
// // // //           >
// // // //             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// // // //           </button>
// // // //         </div>

// // // //         {/* Mobile Navigation */}
// // // //         <div
// // // //           className={`lg:hidden overflow-hidden transition-all duration-300 ${
// // // //             isOpen ? 'max-h-screen pb-6' : 'max-h-0'
// // // //           }`}
// // // //         >
// // // //           <div className="pt-4 border-t border-gray-200">
// // // //             {/* Emergency Contact - Mobile */}
// // // //             <a
// // // //               href="tel:+919876543210"
// // // //               className="flex items-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-lg mb-4 font-medium"
// // // //             >
// // // //               <Phone className="w-5 h-5" />
// // // //               Emergency: +91 98765 43210
// // // //             </a>

// // // //             {/* Nav Items - Mobile */}
// // // //             <div className="space-y-1">
// // // //               {navItems.map((item) => (
// // // //                 <div key={item.label}>
// // // //                   {item.children ? (
// // // //                     <>
// // // //                       <button
// // // //                         className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors ${
// // // //                           activeDropdown === item.label
// // // //                             ? 'bg-yellow-50 text-yellow-600'
// // // //                             : 'text-gray-700 hover:bg-gray-50'
// // // //                         }`}
// // // //                         onClick={() => toggleDropdown(item.label)}
// // // //                         aria-expanded={activeDropdown === item.label}
// // // //                       >
// // // //                         {item.label}
// // // //                         <ChevronDown
// // // //                           className={`w-5 h-5 transition-transform ${
// // // //                             activeDropdown === item.label ? 'rotate-180' : ''
// // // //                           }`}
// // // //                         />
// // // //                       </button>
// // // //                       <div
// // // //                         className={`overflow-hidden transition-all duration-200 ${
// // // //                           activeDropdown === item.label ? 'max-h-96' : 'max-h-0'
// // // //                         }`}
// // // //                       >
// // // //                         <div className="pl-4 py-2 space-y-1">
// // // //                           {item.children.map((child) => (
// // // //                             <Link
// // // //                               key={child.href}
// // // //                               to={child.href}
// // // //                               className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
// // // //                                 location.pathname === child.href
// // // //                                   ? 'text-yellow-600 bg-yellow-50'
// // // //                                   : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
// // // //                               }`}
// // // //                             >
// // // //                               {child.label}
// // // //                             </Link>
// // // //                           ))}
// // // //                         </div>
// // // //                       </div>
// // // //                     </>
// // // //                   ) : (
// // // //                     <Link
// // // //                       to={item.href}
// // // //                       className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
// // // //                         location.pathname === item.href
// // // //                           ? 'bg-yellow-50 text-yellow-600'
// // // //                           : 'text-gray-700 hover:bg-gray-50'
// // // //                       }`}
// // // //                     >
// // // //                       {item.label}
// // // //                     </Link>
// // // //                   )}
// // // //                 </div>
// // // //               ))}
// // // //             </div>

// // // //             {/* Donate Button - Mobile */}
// // // //             <div className="mt-6 pt-4 border-t border-gray-200">
// // // //               <Link
// // // //                 to="/donate"
// // // //                 className="flex items-center justify-center gap-2 w-full bg-yellow-400 text-gray-900 py-3 rounded-full font-bold hover:bg-yellow-500 transition-colors"
// // // //               >
// // // //                 <Heart className="w-5 h-5" />
// // // //                 Donate Now
// // // //               </Link>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </nav>
// // // //     </header>
// // // //   );
// // // // };

// // // // export default Navbar;







// // // import React, { useState, useEffect } from 'react';
// // // import { Link, useLocation } from 'react-router-dom';
// // // import { Menu, X, Phone, ChevronDown, Heart } from 'lucide-react';

// // // // Navigation structure - Updated as per requirements
// // // const navItems = [
// // //   {
// // //     label: 'About',
// // //     href: '/about-us',
// // //     children: [
// // //       { label: 'About Us', href: '/about-us' },
// // //       { label: 'Mission & Vision', href: '/mission-vision' },
// // //       { label: 'Who We Are', href: '/who-we-are' },
// // //       { label: 'Gallery', href: '/gallery' },
// // //     ],
// // //   },
// // //   {
// // //     label: 'Problems We Resolved',
// // //     href: '/our-work/dog-problem-resolution',
// // //   },
// // //   {
// // //     label: 'Our Work',
// // //     href: '/our-work',
// // //     children: [
// // //       { label: 'What We Do', href: '/what-we-do' },
// // //       { label: 'Our Work Overview', href: '/our-work' },
// // //       { label: 'Injury & Medical Care', href: '/our-work/injury-medical-care' },
// // //       { label: 'Vaccination Programs', href: '/our-work/vaccination-programs' },
// // //       { label: 'Shelter Support', href: '/our-work/shelter-support' },
// // //     ],
// // //   },
// // //   {
// // //     label: 'Shelter & Safe Care',
// // //     href: '/shelter-safe-care',
// // //   },
// // //   {
// // //     label: 'Services',
// // //     href: '/emergency-contact',
// // //     children: [
// // //       { label: 'Emergency Contact', href: '/emergency-contact' },
// // //       { label: 'Vaccination & Disease Prevention', href: '/vaccination-disease-prevention' },
// // //       { label: 'Community Support', href: '/community-support' },
// // //     ],
// // //   },
// // //   {
// // //     label: 'Awareness & Law',
// // //     href: '/awareness-law',
// // //   },
// // //   {
// // //     label: 'Become Volunteer',
// // //     href: '/get-involved',
// // //   },
// // //   {
// // //     label: 'Donate',
// // //     href: '/donate',
// // //   },
// // //   {
// // //     label: 'Contact',
// // //     href: '/contact-us',
// // //   },
// // // ];

// // // const Navbar: React.FC = () => {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
// // //   const location = useLocation();

// // //   // Close mobile menu on route change
// // //   useEffect(() => {
// // //     setIsOpen(false);
// // //     setActiveDropdown(null);
// // //   }, [location.pathname]);

// // //   const toggleDropdown = (label: string) => {
// // //     setActiveDropdown(activeDropdown === label ? null : label);
// // //   };

// // //   return (
// // //     // ✅ CHANGED: Removed `fixed top-0 left-0 right-0 z-50` — navbar ab scroll ke saath move karega
// // //     <header className="w-full bg-white shadow-md">
// // //       {/* Top Bar */}
// // //       <div className="bg-gray-900 text-white py-1.5 hidden md:block">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="flex items-center justify-between text-xs"> {/* ✅ text-sm → text-xs */}
// // //             <div className="flex items-center gap-4">
// // //               <a
// // //                 href="tel:+919876543210"
// // //                 className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors"
// // //               >
// // //                 <Phone className="w-3 h-3" />
// // //                 <span>Emergency: +91 98765 43210</span>
// // //               </a>
// // //               <span className="text-gray-400">|</span>
// // //               <span>24/7 Rescue Helpline</span>
// // //             </div>
// // //             <div className="flex items-center gap-4">
// // //               <Link
// // //                 to="/donate"
// // //                 className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-semibold hover:bg-yellow-300 transition-colors flex items-center gap-1 text-xs" // ✅ smaller padding + font
// // //               >
// // //                 <Heart className="w-3 h-3" />
// // //                 Donate Now
// // //               </Link>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Main Navigation */}
// // //       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         <div className="flex items-center justify-between h-14 md:h-16"> {/* ✅ slightly shorter */}
// // //           {/* Logo */}
// // //           <Link to="/" className="flex items-center gap-2" aria-label="Suranango for Dogs Home">
// // //             <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center"> {/* ✅ smaller logo circle */}
// // //               <span className="text-xl">🐕</span>
// // //             </div>
// // //             <div className="hidden sm:block">
// // //               <h1 className="text-base font-bold text-gray-900">Suranango</h1> {/* ✅ text-xl → text-base */}
// // //               <p className="text-xs text-gray-500">for Dogs</p>
// // //             </div>
// // //           </Link>

// // //           {/* Desktop Navigation */}
// // //           <div className="hidden lg:flex items-center gap-0.5">
// // //             {navItems.map((item) => (
// // //               <div key={item.label} className="relative group">
// // //                 {item.children ? (
// // //                   <button
// // //                     className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${ // ✅ px-4 → px-3, text-sm implicit → text-xs
// // //                       location.pathname.startsWith(item.href)
// // //                         ? 'text-yellow-600 bg-yellow-50'
// // //                         : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
// // //                     }`}
// // //                     onMouseEnter={() => setActiveDropdown(item.label)}
// // //                     onMouseLeave={() => setActiveDropdown(null)}
// // //                     aria-expanded={activeDropdown === item.label}
// // //                     aria-haspopup="true"
// // //                   >
// // //                     {item.label}
// // //                     <ChevronDown className="w-3 h-3" />
// // //                   </button>
// // //                 ) : (
// // //                   <Link
// // //                     to={item.href}
// // //                     className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${ // ✅ text-xs
// // //                       location.pathname === item.href
// // //                         ? 'text-yellow-600 bg-yellow-50'
// // //                         : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
// // //                     }`}
// // //                   >
// // //                     {item.label}
// // //                   </Link>
// // //                 )}

// // //                 {/* Dropdown Menu */}
// // //                 {item.children && (
// // //                   <div
// // //                     className={`absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 z-50 ${ // ✅ w-64 → w-56
// // //                       activeDropdown === item.label
// // //                         ? 'opacity-100 visible translate-y-0'
// // //                         : 'opacity-0 invisible -translate-y-2'
// // //                     }`}
// // //                     onMouseEnter={() => setActiveDropdown(item.label)}
// // //                     onMouseLeave={() => setActiveDropdown(null)}
// // //                   >
// // //                     {item.children.map((child) => (
// // //                       <Link
// // //                         key={child.href}
// // //                         to={child.href}
// // //                         className={`block px-4 py-2 text-xs transition-colors ${ // ✅ text-sm → text-xs
// // //                           location.pathname === child.href
// // //                             ? 'text-yellow-600 bg-yellow-50'
// // //                             : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
// // //                         }`}
// // //                       >
// // //                         {child.label}
// // //                       </Link>
// // //                     ))}
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* CTA Button - Desktop */}
// // //           <div className="hidden lg:flex items-center gap-3">
// // //             <Link
// // //               to="/emergency-contact"
// // //               className="bg-red-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-red-600 transition-colors flex items-center gap-1.5" // ✅ smaller
// // //             >
// // //               <Phone className="w-3 h-3" />
// // //               Emergency
// // //             </Link>
// // //           </div>

// // //           {/* Mobile Menu Button */}
// // //           <button
// // //             className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
// // //             onClick={() => setIsOpen(!isOpen)}
// // //             aria-label="Toggle menu"
// // //             aria-expanded={isOpen}
// // //           >
// // //             {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
// // //           </button>
// // //         </div>

// // //         {/* Mobile Navigation */}
// // //         <div
// // //           className={`lg:hidden overflow-hidden transition-all duration-300 ${
// // //             isOpen ? 'max-h-screen pb-6' : 'max-h-0'
// // //           }`}
// // //         >
// // //           <div className="pt-4 border-t border-gray-200">
// // //             {/* Emergency Contact - Mobile */}
// // //             <a
// // //               href="tel:+919876543210"
// // //               className="flex items-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-lg mb-4 font-medium text-sm" // ✅ text-sm
// // //             >
// // //               <Phone className="w-4 h-4" />
// // //               Emergency: +91 98765 43210
// // //             </a>

// // //             {/* Nav Items - Mobile */}
// // //             <div className="space-y-1">
// // //               {navItems.map((item) => (
// // //                 <div key={item.label}>
// // //                   {item.children ? (
// // //                     <>
// // //                       <button
// // //                         className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${ // ✅ text-sm
// // //                           activeDropdown === item.label
// // //                             ? 'bg-yellow-50 text-yellow-600'
// // //                             : 'text-gray-700 hover:bg-gray-50'
// // //                         }`}
// // //                         onClick={() => toggleDropdown(item.label)}
// // //                         aria-expanded={activeDropdown === item.label}
// // //                       >
// // //                         {item.label}
// // //                         <ChevronDown
// // //                           className={`w-4 h-4 transition-transform ${
// // //                             activeDropdown === item.label ? 'rotate-180' : ''
// // //                           }`}
// // //                         />
// // //                       </button>
// // //                       <div
// // //                         className={`overflow-hidden transition-all duration-200 ${
// // //                           activeDropdown === item.label ? 'max-h-96' : 'max-h-0'
// // //                         }`}
// // //                       >
// // //                         <div className="pl-4 py-1 space-y-1">
// // //                           {item.children.map((child) => (
// // //                             <Link
// // //                               key={child.href}
// // //                               to={child.href}
// // //                               className={`block px-4 py-2 rounded-lg text-xs transition-colors ${ // ✅ text-xs
// // //                                 location.pathname === child.href
// // //                                   ? 'text-yellow-600 bg-yellow-50'
// // //                                   : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
// // //                               }`}
// // //                             >
// // //                               {child.label}
// // //                             </Link>
// // //                           ))}
// // //                         </div>
// // //                       </div>
// // //                     </>
// // //                   ) : (
// // //                     <Link
// // //                       to={item.href}
// // //                       className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${ // ✅ text-sm
// // //                         location.pathname === item.href
// // //                           ? 'bg-yellow-50 text-yellow-600'
// // //                           : 'text-gray-700 hover:bg-gray-50'
// // //                       }`}
// // //                     >
// // //                       {item.label}
// // //                     </Link>
// // //                   )}
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             {/* Donate Button - Mobile */}
// // //             <div className="mt-6 pt-4 border-t border-gray-200">
// // //               <Link
// // //                 to="/donate"
// // //                 className="flex items-center justify-center gap-2 w-full bg-yellow-400 text-gray-900 py-2.5 rounded-full text-sm font-bold hover:bg-yellow-500 transition-colors"
// // //               >
// // //                 <Heart className="w-4 h-4" />
// // //                 Donate Now
// // //               </Link>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </nav>
// // //     </header>
// // //   );
// // // };

// // // export default Navbar;  





// // import React, { useState, useEffect } from 'react';
// // import { Link, useLocation } from 'react-router-dom';
// // import { Menu, X, Phone, ChevronDown, Heart } from 'lucide-react';

// // // Navigation structure - Updated as per requirements
// // const navItems = [
// //   {
// //     label: 'About',
// //     href: '/about-us',
// //     children: [
// //       // { label: 'About Us', href: '/about-us' },
// //       { label: 'Mission & Vision', href: '/mission-vision' },
// //       { label: 'Who We Are', href: '/who-we-are' },
// //       { label: 'Gallery', href: '/gallery' },
// //     ],
// //   },
// //   {
// //     label: 'Problems We Resolved',
// //     href: '/our-work/dog-problem-resolution',
// //   },
// //   {
// //     label: 'Our Work',
// //     href: '/our-work',
// //     children: [
// //       { label: 'What We Do', href: '/what-we-do' },
// //       { label: 'Our Work Overview', href: '/our-work' },
// //       { label: 'Injury & Medical Care', href: '/our-work/injury-medical-care' },
// //       { label: 'Vaccination Programs', href: '/our-work/vaccination-programs' },
// //       // { label: 'Shelter Support', href: '/our-work/shelter-support' },
// //     ],
// //   },
// //   {
// //     label: 'Shelter & Safe Care',
// //     href: '/shelter-safe-care',
// //   },
// //   // {
// //   //   label: 'Services',
// //   //   href: '/emergency-contact',
// //   //   children: [
// //   //     { label: 'Emergency Contact', href: '/emergency-contact' },
// //   //     { label: 'Vaccination & Disease Prevention', href: '/vaccination-disease-prevention' },
// //   //     { label: 'Community Support', href: '/community-support' },
// //   //   ],
// //   // },
// //   // {
// //   //   label: 'Awareness & Law',
// //   //   href: '/awareness-law',
// //   // },
// //   {
// //     label: 'Become Volunteer',
// //     href: '/get-involved',
// //   },
// //   // {
// //   //   label: 'Donate',
// //   //   href: '/donate',
// //   // },
// //   {
// //     label: 'Contact',
// //     href: '/contact-us',
// //   },
// // ];

// // const Navbar: React.FC = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
// //   const location = useLocation();

// //   // Close mobile menu on route change
// //   useEffect(() => {
// //     setIsOpen(false);
// //     setActiveDropdown(null);
// //   }, [location.pathname]);

// //   const toggleDropdown = (label: string) => {
// //     setActiveDropdown(activeDropdown === label ? null : label);
// //   };

// //   return (
// //     // ✅ CHANGED: Removed `fixed top-0 left-0 right-0 z-50` — navbar ab scroll ke saath move karega
// //     <header className="fixed top-0 left-0 right-0 z-50  w-full bg-white shadow-md">
// //       {/* Top Bar */}
// //       <div className="bg-gray-900 text-white py-1.5 hidden md:block">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex items-center justify-between text-xs"> {/* ✅ text-sm → text-xs */}
// //             <div className="flex items-center gap-4">
// //               <a
// //                 href="tel:+919876543210"
// //                 className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors"
// //               >
// //                 <Phone className="w-3 h-3" />
// //                 <span>Emergency: +91 98765 43210</span>
// //               </a>
// //               <span className="text-gray-400">|</span>
// //               <span>24/7 Rescue Helpline</span>
// //             </div>
// //             <div className="flex items-center gap-4">
// //               <Link
// //                 to="/donate"
// //                 className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-semibold hover:bg-yellow-300 transition-colors flex items-center gap-1 text-xs" // ✅ smaller padding + font
// //               >
// //                 <Heart className="w-3 h-3" />
// //                 Donate Now
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Navigation */}
// //       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex items-center justify-between h-20 md:h-24">
// //           {/* Logo */}
// //           <Link to="/" className="flex items-center gap-2" aria-label="Suranango for Dogs Home">
// //             <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center"> {/* ✅ smaller logo circle */}
// //               <span className="text-xl">🐕</span>
// //             </div>
// //             <div className="hidden sm:block">
// //               <h1 className="text-base font-bold text-gray-900">Suranango</h1> {/* ✅ text-xl → text-base */}
// //               <p className="text-xs text-gray-500">for Dogs</p>
// //             </div>
// //           </Link>

// //           {/* Desktop Navigation */}
// //           <div className="hidden lg:flex items-center gap-0.5">
// //             {navItems.map((item) => (
// //               <div key={item.label} className="relative group">
// //                 {item.children ? (
// //                   <button
// //                     className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${ // ✅ px-4 → px-3, text-sm implicit → text-xs
// //                       location.pathname.startsWith(item.href)
// //                         ? 'text-yellow-600 bg-yellow-50'
// //                         : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
// //                     }`}
// //                     onMouseEnter={() => setActiveDropdown(item.label)}
// //                     onMouseLeave={() => setActiveDropdown(null)}
// //                     aria-expanded={activeDropdown === item.label}
// //                     aria-haspopup="true"
// //                   >
// //                     {item.label}
// //                     <ChevronDown className="w-3 h-3" />
// //                   </button>
// //                 ) : (
// //                   <Link
// //                     to={item.href}
// //                     className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${ // ✅ text-xs
// //                       location.pathname === item.href
// //                         ? 'text-yellow-600 bg-yellow-50'
// //                         : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
// //                     }`}
// //                   >
// //                     {item.label}
// //                   </Link>
// //                 )}

// //                 {/* Dropdown Menu */}
// //                 {item.children && (
// //                   <div
// //                     className={`absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 z-50 ${ // ✅ w-64 → w-56
// //                       activeDropdown === item.label
// //                         ? 'opacity-100 visible translate-y-0'
// //                         : 'opacity-0 invisible -translate-y-2'
// //                     }`}
// //                     onMouseEnter={() => setActiveDropdown(item.label)}
// //                     onMouseLeave={() => setActiveDropdown(null)}
// //                   >
// //                     {item.children.map((child) => (
// //                       <Link
// //                         key={child.href}
// //                         to={child.href}
// //                         className={`block px-4 py-2 text-xs transition-colors ${ // ✅ text-sm → text-xs
// //                           location.pathname === child.href
// //                             ? 'text-yellow-600 bg-yellow-50'
// //                             : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
// //                         }`}
// //                       >
// //                         {child.label}
// //                       </Link>
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>



// //   <div className="hidden lg:flex items-center gap-3">
// //   <Link
// //     to="/donate"
// //     className="relative flex items-center gap-1.5 
// //                px-4 py-1.5 rounded-full 
// //                text-xs font-bold text-gray-900
// //                bg-gradient-to-r from-yellow-400 to-yellow-500
// //                hover:from-yellow-500 hover:to-yellow-600
// //                shadow-md hover:shadow-lg
// //                transition-all duration-300 ease-in-out"
// //   >
// //     <Heart className="w-3 h-3 text-red-600" />
// //     Donate
// //   </Link>
// // </div>

// //           {/* CTA Button - Desktop */}
// //           <div className="hidden lg:flex items-center gap-3">
// //             <Link
// //               to="/emergency-contact"
// //               className="bg-red-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-red-600 transition-colors flex items-center gap-1.5" // ✅ smaller
// //             >
// //               <Phone className="w-3 h-3" />
// //               Emergency
// //             </Link>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <button
// //             className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
// //             onClick={() => setIsOpen(!isOpen)}
// //             aria-label="Toggle menu"
// //             aria-expanded={isOpen}
// //           >
// //             {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
// //           </button>
// //         </div>

// //         {/* Mobile Navigation */}
// //         <div
// //           className={`lg:hidden overflow-hidden transition-all duration-300 ${
// //             isOpen ? 'max-h-screen pb-6' : 'max-h-0'
// //           }`}
// //         >
// //           <div className="pt-4 border-t border-gray-200">
// //             {/* Emergency Contact - Mobile */}
// //             <a
// //               href="tel:+919876543210"
// //               className="flex items-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-lg mb-4 font-medium text-sm" // ✅ text-sm
// //             >
// //               <Phone className="w-4 h-4" />
// //               Emergency: +91 98765 43210
// //             </a>

// //             {/* Nav Items - Mobile */}
// //             <div className="space-y-1">
// //               {navItems.map((item) => (
// //                 <div key={item.label}>
// //                   {item.children ? (
// //                     <>
// //                       <button
// //                         className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${ // ✅ text-sm
// //                           activeDropdown === item.label
// //                             ? 'bg-yellow-50 text-yellow-600'
// //                             : 'text-gray-700 hover:bg-gray-50'
// //                         }`}
// //                         onClick={() => toggleDropdown(item.label)}
// //                         aria-expanded={activeDropdown === item.label}
// //                       >
// //                         {item.label}
// //                         <ChevronDown
// //                           className={`w-4 h-4 transition-transform ${
// //                             activeDropdown === item.label ? 'rotate-180' : ''
// //                           }`}
// //                         />
// //                       </button>
// //                       <div
// //                         className={`overflow-hidden transition-all duration-200 ${
// //                           activeDropdown === item.label ? 'max-h-96' : 'max-h-0'
// //                         }`}
// //                       >
// //                         <div className="pl-4 py-1 space-y-1">
// //                           {item.children.map((child) => (
// //                             <Link
// //                               key={child.href}
// //                               to={child.href}
// //                               className={`block px-4 py-2 rounded-lg text-xs transition-colors ${ // ✅ text-xs
// //                                 location.pathname === child.href
// //                                   ? 'text-yellow-600 bg-yellow-50'
// //                                   : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
// //                               }`}
// //                             >
// //                               {child.label}
// //                             </Link>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     </>
// //                   ) : (
// //                     <Link
// //                       to={item.href}
// //                       className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${ // ✅ text-sm
// //                         location.pathname === item.href
// //                           ? 'bg-yellow-50 text-yellow-600'
// //                           : 'text-gray-700 hover:bg-gray-50'
// //                       }`}
// //                     >
// //                       {item.label}
// //                     </Link>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Donate Button - Mobile */}
// //             <div className="mt-6 pt-4 border-t border-gray-200">
// //               <Link
// //   to="/donate"
// //   className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full 
// //              bg-gradient-to-r from-yellow-400 to-yellow-500 
// //              text-gray-900 text-sm font-bold 
// //              shadow-md hover:shadow-xl 
// //              transition-all duration-300 ease-out
// //              hover:scale-105"
// // >
// //   <span className="absolute inset-0 rounded-full bg-yellow-300 opacity-0 
// //                    group-hover:opacity-30 blur transition-all duration-300"></span>

// //   <Heart className="w-4 h-4 text-red-600 group-hover:scale-110 transition-transform" />
// //   Donate
// // </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Navbar;



// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Phone, ChevronDown, Heart } from 'lucide-react';

// const navItems = [
//   {
//     label: 'About',
//     href: '/about-us',
//     children: [
//       { label: 'Mission & Vision', href: '/mission-vision' },
//       { label: 'Who We Are', href: '/who-we-are' },
//       { label: 'Gallery', href: '/gallery' },
//     ],
//   },
//   {
//     label: 'Problems We Resolved',
//     href: '/our-work/dog-problem-resolution',
//   },
//   {
//     label: 'Our Work',
//     href: '/our-work',
//     children: [
//       { label: 'What We Do', href: '/what-we-do' },
//       { label: 'Our Work Overview', href: '/our-work' },
//       { label: 'Injury & Medical Care', href: '/our-work/injury-medical-care' },
//       { label: 'Vaccination Programs', href: '/our-work/vaccination-programs' },
//     ],
//   },
//   {
//     label: 'Shelter & Safe Care',
//     href: '/shelter-safe-care',
//   },
//   {
//     label: 'Become Volunteer',
//     href: '/get-involved',
//   },
//   {
//     label: 'Contact',
//     href: '/contact-us',
//   },
// ];

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const location = useLocation();

//   useEffect(() => {
//     setIsOpen(false);
//     setActiveDropdown(null);
//   }, [location.pathname]);

//   const toggleDropdown = (label: string) => {
//     setActiveDropdown(activeDropdown === label ? null : label);
//   };

//   return (
//     <header
//       className=" fixed top-0 left-0 right-0 z-50  w-full bg-white shadow-md w-full bg-white shadow-md"
//       style={{ fontFamily: "'Poppins', sans-serif" }}
//     >
//       {/* Google Fonts */}
//       <link
//         href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Poppins:wght@400;500;600;700&display=swap"
//         rel="stylesheet"
//       />

//       {/* Top Bar */}
//       <div className="bg-gray-900 text-white py-1.5 hidden md:block">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between text-xs">
//             <div className="flex items-center gap-4">
              
//                <a  href="tel:+919876543210"
//                 className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors font-medium"
//               >
//                 <Phone size={12} />
//                 <span>Emergency: +91 98765 43210</span>
//               </a>
//               <span className="text-gray-500">|</span>
//               <span className="text-gray-300">24/7 Rescue Helpline</span>
//             </div>
//             <div>
//               <Link
//                 to="/donate"
//                 className="flex items-center gap-1.5 bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-4 py-1 rounded-full font-bold text-xs transition-all duration-300 shadow-sm"
//               >
//                 <Heart size={12} className="text-red-600" />
//                 Donate Now
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20 md:h-24">

//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3" aria-label="Suranango for Dogs Home">
//             <div className="w-11 h-11 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
//               <span className="text-2xl">🐕</span>
//             </div>
//             <div className="hidden sm:block" style={{ fontFamily: "'Nunito', sans-serif" }}>
//               <h1 className="text-lg font-extrabold text-gray-900 leading-tight">Suranango</h1>
//               <p className="text-xs font-bold text-yellow-500 tracking-widest uppercase">for Dogs</p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-1">
//             {navItems.map((item) => (
//               <div key={item.label} className="relative">
//                 {item.children ? (
//                   <button
//                     className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
//                       location.pathname.startsWith(item.href)
//                         ? 'text-yellow-600 bg-yellow-50'
//                         : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
//                     }`}
//                     onMouseEnter={() => setActiveDropdown(item.label)}
//                     onMouseLeave={() => setActiveDropdown(null)}
//                     aria-expanded={activeDropdown === item.label}
//                     aria-haspopup="true"
//                   >
//                     {item.label}
//                     <ChevronDown size={12} />
//                   </button>
//                 ) : (
//                   <Link
//                     to={item.href}
//                     className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
//                       location.pathname === item.href
//                         ? 'text-yellow-600 bg-yellow-50'
//                         : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
//                     }`}
//                   >
//                     {item.label}
//                   </Link>
//                 )}

//                 {/* Dropdown */}
//                 {item.children && (
//                   <div
//                     className={`absolute top-full left-0 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 transition-all duration-200 z-50 ${
//                       activeDropdown === item.label
//                         ? 'opacity-100 visible translate-y-1'
//                         : 'opacity-0 invisible -translate-y-2'
//                     }`}
//                     onMouseEnter={() => setActiveDropdown(item.label)}
//                     onMouseLeave={() => setActiveDropdown(null)}
//                   >
//                     {item.children.map((child) => (
//                       <Link
//                         key={child.href}
//                         to={child.href}
//                         className={`block px-5 py-2.5 text-xs font-medium transition-colors ${
//                           location.pathname === child.href
//                             ? 'text-yellow-600 bg-yellow-50'
//                             : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
//                         }`}
//                       >
//                         {child.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Right Side Buttons - Desktop */}
//           <div className="hidden lg:flex items-center gap-2">
//             {/* Donate Button */}
//             <Link
//               to="/donate"
//               className="flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold text-gray-900 bg-yellow-400 hover:bg-yellow-300 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-yellow-300 hover:shadow-lg"
//             >
//               <Heart size={14} className="text-red-600" />
//               Donate
//             </Link>

//             {/* Emergency Button */}
//             <Link
//               to="/emergency-contact"
//               className="flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold text-white bg-red-500 hover:bg-red-600 shadow-md transition-all duration-300 hover:scale-105"
//             >
//               <Phone size={14} />
//               Emergency
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//             aria-expanded={isOpen}
//           >
//             {isOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <div
//           className={`lg:hidden overflow-hidden transition-all duration-300 ${
//             isOpen ? 'max-h-screen pb-6' : 'max-h-0'
//           }`}
//         >
//           <div className="pt-4 border-t border-gray-100">

//             {/* Emergency - Mobile */}
            
//                <a href="tel:+919876543210"
//               className="flex items-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-xl mb-4 font-semibold text-sm"
//             >
//               <Phone size={16} />
//               Emergency: +91 98765 43210
//             </a>

//             {/* Nav Items */}
//             <div className="space-y-1">
//               {navItems.map((item) => (
//                 <div key={item.label}>
//                   {item.children ? (
//                     <>
//                       <button
//                         className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
//                           activeDropdown === item.label
//                             ? 'bg-yellow-50 text-yellow-600'
//                             : 'text-gray-700 hover:bg-gray-50'
//                         }`}
//                         onClick={() => toggleDropdown(item.label)}
//                         aria-expanded={activeDropdown === item.label}
//                       >
//                         {item.label}
//                         <ChevronDown
//                           size={16}
//                           className={`transition-transform ${
//                             activeDropdown === item.label ? 'rotate-180' : ''
//                           }`}
//                         />
//                       </button>
//                       <div
//                         className={`overflow-hidden transition-all duration-200 ${
//                           activeDropdown === item.label ? 'max-h-96' : 'max-h-0'
//                         }`}
//                       >
//                         <div className="pl-4 py-1 space-y-1">
//                           {item.children.map((child) => (
//                             <Link
//                               key={child.href}
//                               to={child.href}
//                               className={`block px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
//                                 location.pathname === child.href
//                                   ? 'text-yellow-600 bg-yellow-50'
//                                   : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
//                               }`}
//                             >
//                               {child.label}
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     </>
//                   ) : (
//                     <Link
//                       to={item.href}
//                       className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
//                         location.pathname === item.href
//                           ? 'bg-yellow-50 text-yellow-600'
//                           : 'text-gray-700 hover:bg-gray-50'
//                       }`}
//                     >
//                       {item.label}
//                     </Link>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Donate Button - Mobile */}
//             <div className="mt-6 pt-4 border-t border-gray-100">
//               <Link
//                 to="/donate"
//                 className="flex items-center justify-center gap-2 w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg"
//               >
//                 <Heart size={16} className="text-red-600" />
//                 Donate Now
//               </Link>
//             </div>

//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;






import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Heart } from 'lucide-react';

const navItems = [
  {
    label: 'About',
    href: '/about-us',
    children: [
      { label: 'Mission & Vision', href: '/mission-vision' },
      { label: 'Who We Are', href: '/who-we-are' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  {
    label: 'Problems We Resolved',
    href: '/our-work/dog-problem-resolution',
  },
  {
    label: 'Our Work',
    href: '/our-work',
    children: [
      { label: 'What We Do', href: '/what-we-do' },
      { label: 'Our Work Overview', href: '/our-work' },
      { label: 'Injury & Medical Care', href: '/our-work/injury-medical-care' },
      { label: 'Vaccination Programs', href: '/our-work/vaccination-programs' },
    ],
  },
  {
    label: 'Shelter & Safe Care',
    href: '/shelter-safe-care',
  },
  {
    label: 'Become Volunteer',
    href: '/get-involved',
  },
  {
    label: 'Contact',
    href: '/contact-us',
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50  w-full bg-white shadow-md w-full bg-white shadow-md"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-4">
              
               <a  href="tel:+919876543210"
                className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors font-medium"
              >
                <Phone size={12} />
                <span>Emergency: +91 98765 43210</span>
              </a>
              <span className="text-gray-500">|</span>
              <span className="text-gray-300">24/7 Rescue Helpline</span>
            </div>
            <div>
              <Link
                to="/donate"
                className="flex items-center gap-1.5 bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-4 py-1 rounded-full font-bold text-xs transition-all duration-300 shadow-sm"
              >
                <Heart size={12} className="text-red-600" />
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* ✅ LOGO - Image version */}
          <Link to="/" aria-label="Suranango for Dogs Home" className="flex items-center gap-3">
            {/* 
              👇 Apna logo image path yahan rakho
              Agar public folder mein hai → src="/logo.png"
              Agar src/assets mein hai  → import logoImg from '../assets/logo.png' upar karke → src={logoImg}
            */}
            <img
              src="image/doglogo.png"
              alt="Suranango for Dogs Logo"
              className="h-19 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                      location.pathname.startsWith(item.href)
                        ? 'text-yellow-600 bg-yellow-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown size={12} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                      location.pathname === item.href
                        ? 'text-yellow-600 bg-yellow-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && (
                  <div
                    className={`absolute top-full left-0 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 transition-all duration-200 z-50 ${
                      activeDropdown === item.label
                        ? 'opacity-100 visible translate-y-1'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className={`block px-5 py-2.5 text-xs font-medium transition-colors ${
                          location.pathname === child.href
                            ? 'text-yellow-600 bg-yellow-50'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Donate Button */}
            <Link
              to="/donate"
              className="flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold text-gray-900 bg-yellow-400 hover:bg-yellow-300 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Heart size={14} className="text-red-600" />
              Donate
            </Link>

            {/* Emergency Button */}
            <Link
              to="/emergency-contact"
              className="flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold text-white bg-red-500 hover:bg-red-600 shadow-md transition-all duration-300 hover:scale-105"
            >
              <Phone size={14} />
              Emergency
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-screen pb-6' : 'max-h-0'
          }`}
        >
          <div className="pt-4 border-t border-gray-100">

            {/* Emergency - Mobile */}
            
               <a href="tel:+919876543210"
              className="flex items-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-xl mb-4 font-semibold text-sm"
            >
              <Phone size={16} />
              Emergency: +91 98765 43210
            </a>

            {/* Nav Items */}
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                          activeDropdown === item.label
                            ? 'bg-yellow-50 text-yellow-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => toggleDropdown(item.label)}
                        aria-expanded={activeDropdown === item.label}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-200 ${
                          activeDropdown === item.label ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className="pl-4 py-1 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className={`block px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                                location.pathname === child.href
                                  ? 'text-yellow-600 bg-yellow-50'
                                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        location.pathname === item.href
                          ? 'bg-yellow-50 text-yellow-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Donate Button - Mobile */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <Link
                to="/donate"
                className="flex items-center justify-center gap-2 w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Heart size={16} className="text-red-600" />
                Donate Now
              </Link>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;