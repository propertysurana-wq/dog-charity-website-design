// // /**
// //  * Vaccination Programs Page - Suranango for Dogs
// //  * Anti-rabies vaccination and disease prevention programs
// //  */

// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { 
// //   Syringe, 
// //   Phone, 
// //   Shield,
// //   CheckCircle,
// //   ArrowLeft,
// //   Calendar,
// //   MapPin,
// //   Users,
// //   Heart,
// //   AlertTriangle,
// //   FileText
// // } from 'lucide-react';

// // const VaccinationProgramsPage: React.FC = () => {
// //   // Vaccination services
// //   const services = [
// //     {
// //       title: 'Anti-Rabies Vaccination',
// //       description: 'Our primary focus is vaccinating community dogs against rabies, protecting both dogs and humans from this fatal disease.',
// //       icon: Syringe,
// //       stats: '10,000+ vaccinations/year'
// //     },
// //     {
// //       title: 'Community Vaccination Drives',
// //       description: 'We organize regular vaccination camps in different areas, systematically covering all community dogs in the region.',
// //       icon: MapPin,
// //       stats: '50+ areas covered'
// //     },
// //     {
// //       title: 'Disease Prevention',
// //       description: 'Beyond rabies, we vaccinate against other diseases like parvovirus, distemper, and canine hepatitis where possible.',
// //       icon: Shield,
// //       stats: 'Comprehensive protection'
// //     },
// //     {
// //       title: 'Public Safety Education',
// //       description: 'We educate communities about the importance of vaccination and how it protects everyone.',
// //       icon: Users,
// //       stats: 'Awareness programs'
// //     }
// //   ];

// //   // Why vaccination matters
// //   const whyVaccination = [
// //     {
// //       title: 'Prevents Rabies Deaths',
// //       description: 'Rabies is 100% fatal once symptoms appear, but 100% preventable through vaccination. Vaccinated dogs cannot transmit rabies.',
// //       icon: AlertTriangle
// //     },
// //     {
// //       title: 'Protects Human Health',
// //       description: 'Over 95% of human rabies cases come from dog bites. Vaccinating dogs is the most effective way to protect humans.',
// //       icon: Heart
// //     },
// //     {
// //       title: 'Saves Dog Lives',
// //       description: 'Unvaccinated dogs that bite humans are often killed out of fear. Vaccination protects dogs from this fate.',
// //       icon: Shield
// //     },
// //     {
// //       title: 'Community Safety',
// //       description: 'When 70% of dogs in an area are vaccinated, the entire community is protected through herd immunity.',
// //       icon: Users
// //     }
// //   ];

// //   // Vaccination process
// //   const vaccinationProcess = [
// //     {
// //       step: 1,
// //       title: 'Area Survey',
// //       description: 'We survey the area to count dogs and plan the vaccination drive.'
// //     },
// //     {
// //       step: 2,
// //       title: 'Community Notice',
// //       description: 'We inform residents about the upcoming vaccination camp date and time.'
// //     },
// //     {
// //       step: 3,
// //       title: 'Humane Capture',
// //       description: 'Dogs are humanely caught using nets and gentle handling techniques.'
// //     },
// //     {
// //       step: 4,
// //       title: 'Health Check',
// //       description: 'Each dog is checked for illness or injury before vaccination.'
// //     },
// //     {
// //       step: 5,
// //       title: 'Vaccination',
// //       description: 'The anti-rabies vaccine is administered by trained personnel.'
// //     },
// //     {
// //       step: 6,
// //       title: 'Marking & Release',
// //       description: 'Dogs are marked (collar/tag) and released back to their territory.'
// //     }
// //   ];

// //   // Statistics
// //   const stats = [
// //     { number: '15,000+', label: 'Dogs Vaccinated' },
// //     { number: '50+', label: 'Areas Covered' },
// //     { number: '0', label: 'Rabies Cases in Vaccinated Dogs' },
// //     { number: '100%', label: 'Free Service' }
// //   ];

// //   return (
// //     <div className="min-h-screen">
// //       {/* Hero Section */}
// //       <section className="relative bg-gradient-to-br from-green-600 via-green-500 to-green-600 text-white py-16 lg:py-24">
// //         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920')] bg-cover bg-center opacity-10"></div>
        
// //         <div className="container mx-auto px-4 relative z-10">
// //           <Link 
// //             to="/our-work" 
// //             className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
// //           >
// //             <ArrowLeft className="w-5 h-5" />
// //             Back to Our Work
// //           </Link>
          
// //           <div className="max-w-4xl">
// //             <div className="flex items-center gap-4 mb-6">
// //               <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
// //                 <Syringe className="w-8 h-8 text-green-600" />
// //               </div>
// //               <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold">
// //                 Our Work
// //               </span>
// //             </div>
// //             <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
// //               Vaccination Programs
// //             </h1>
// //             <p className="text-xl text-green-100 leading-relaxed max-w-3xl">
// //               We conduct regular anti-rabies vaccination drives to protect community dogs and 
// //               humans. Vaccination is the most effective way to prevent rabies and save lives.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Stats Banner */}
// //       <section className="py-8 bg-navy-900">
// //         <div className="container mx-auto px-4">
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// //             {stats.map((stat, index) => (
// //               <div key={index} className="text-center">
// //                 <p className="text-3xl md:text-4xl font-bold text-yellow-400">{stat.number}</p>
// //                 <p className="text-gray-300">{stat.label}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Why Vaccination Section */}
// //       <section className="py-16 lg:py-24 bg-white">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-3xl mx-auto text-center mb-12">
// //             <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">The Importance</span>
// //             <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
// //               Why Vaccination Matters
// //             </h2>
// //             <p className="text-gray-600 text-lg">
// //               Vaccination is not just about protecting dogs—it is about protecting entire communities.
// //             </p>
// //           </div>

// //           <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
// //             {whyVaccination.map((item, index) => (
// //               <div 
// //                 key={index}
// //                 className="bg-green-50 rounded-xl p-6 border border-green-100 flex items-start gap-4"
// //               >
// //                 <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
// //                   <item.icon className="w-6 h-6 text-white" />
// //                 </div>
// //                 <div>
// //                   <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
// //                   <p className="text-gray-600 leading-relaxed">{item.description}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Rabies Facts Section */}
// //       <section className="py-16 lg:py-24 bg-red-50">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto">
// //             <div className="text-center mb-12">
// //               <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Important Facts</span>
// //               <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
// //                 Understanding Rabies
// //               </h2>
// //             </div>

// //             <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
// //               <div className="grid md:grid-cols-2 gap-8">
// //                 <div>
// //                   <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
// //                     <AlertTriangle className="w-6 h-6" />
// //                     The Danger
// //                   </h3>
// //                   <ul className="space-y-3 text-gray-700">
// //                     <li className="flex items-start gap-2">
// //                       <span className="text-red-500 mt-1">•</span>
// //                       Rabies kills approximately 20,000 people in India every year
// //                     </li>
// //                     <li className="flex items-start gap-2">
// //                       <span className="text-red-500 mt-1">•</span>
// //                       Once symptoms appear, rabies is 100% fatal
// //                     </li>
// //                     <li className="flex items-start gap-2">
// //                       <span className="text-red-500 mt-1">•</span>
// //                       Most victims are children under 15 years old
// //                     </li>
// //                     <li className="flex items-start gap-2">
// //                       <span className="text-red-500 mt-1">•</span>
// //                       95% of human cases are caused by dog bites
// //                     </li>
// //                   </ul>
// //                 </div>
// //                 <div>
// //                   <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
// //                     <Shield className="w-6 h-6" />
// //                     The Solution
// //                   </h3>
// //                   <ul className="space-y-3 text-gray-700">
// //                     <li className="flex items-start gap-2">
// //                       <span className="text-green-500 mt-1">✓</span>
// //                       Rabies is 100% preventable through vaccination
// //                     </li>
// //                     <li className="flex items-start gap-2">
// //                       <span className="text-green-500 mt-1">✓</span>
// //                       One vaccine protects a dog for 1-3 years
// //                     </li>
// //                     <li className="flex items-start gap-2">
// //                       <span className="text-green-500 mt-1">✓</span>
// //                       70% vaccination coverage eliminates rabies transmission
// //                     </li>
// //                     <li className="flex items-start gap-2">
// //                       <span className="text-green-500 mt-1">✓</span>
// //                       Vaccinating dogs is more cost-effective than treating human cases
// //                     </li>
// //                   </ul>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Our Services Section */}
// //       <section className="py-16 lg:py-24 bg-white">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-3xl mx-auto text-center mb-12">
// //             <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
// //             <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
// //               Vaccination Programs We Offer
// //             </h2>
// //           </div>

// //           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
// //             {services.map((service, index) => (
// //               <div 
// //                 key={index}
// //                 className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
// //               >
// //                 <div className="flex items-start gap-4">
// //                   <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
// //                     <service.icon className="w-7 h-7 text-white" />
// //                   </div>
// //                   <div>
// //                     <h3 className="text-xl font-bold text-navy-900 mb-2">{service.title}</h3>
// //                     <p className="text-gray-600 leading-relaxed mb-3">{service.description}</p>
// //                     <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
// //                       {service.stats}
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Vaccination Process */}
// //       <section className="py-16 lg:py-24 bg-green-50">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-3xl mx-auto text-center mb-12">
// //             <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
// //             <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
// //               How We Conduct Vaccination Drives
// //             </h2>
// //           </div>

// //           <div className="max-w-5xl mx-auto">
// //             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //               {vaccinationProcess.map((item) => (
// //                 <div 
// //                   key={item.step}
// //                   className="bg-white rounded-xl p-6 shadow-md"
// //                 >
// //                   <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
// //                     {item.step}
// //                   </div>
// //                   <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
// //                   <p className="text-gray-600 leading-relaxed">{item.description}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Request Vaccination Section */}
// //       <section className="py-16 lg:py-24 bg-white">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto">
// //             <div className="grid lg:grid-cols-2 gap-12 items-center">
// //               <div>
// //                 <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Request Service</span>
// //                 <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6">
// //                   Want Vaccination in Your Area?
// //                 </h2>
// //                 <p className="text-gray-600 mb-6 leading-relaxed">
// //                   If you have community dogs in your area that need vaccination, contact us. 
// //                   We conduct vaccination drives for residential societies, commercial areas, 
// //                   and public spaces across Rajasthan.
// //                 </p>
                
// //                 <div className="space-y-4 mb-8">
// //                   <div className="flex items-start gap-3">
// //                     <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
// //                     <div>
// //                       <h4 className="font-semibold text-navy-900">Free Service</h4>
// //                       <p className="text-gray-600 text-sm">All our vaccination programs are completely free</p>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-start gap-3">
// //                     <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
// //                     <div>
// //                       <h4 className="font-semibold text-navy-900">Professional Team</h4>
// //                       <p className="text-gray-600 text-sm">Trained personnel with humane handling techniques</p>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-start gap-3">
// //                     <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
// //                     <div>
// //                       <h4 className="font-semibold text-navy-900">Quality Vaccines</h4>
// //                       <p className="text-gray-600 text-sm">We use approved, high-quality vaccines only</p>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-start gap-3">
// //                     <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
// //                     <div>
// //                       <h4 className="font-semibold text-navy-900">Documentation</h4>
// //                       <p className="text-gray-600 text-sm">Complete records of all vaccinated dogs</p>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="flex flex-col sm:flex-row gap-4">
// //                   <a 
// //                     href="tel:+919876543210"
// //                     className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
// //                   >
// //                     <Phone className="w-5 h-5" />
// //                     +91 98765 43210
// //                   </a>
// //                   <Link 
// //                     to="/contact"
// //                     className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
// //                   >
// //                     <FileText className="w-5 h-5" />
// //                     Submit Request
// //                   </Link>
// //                 </div>
// //               </div>

// //               <div className="bg-green-100 rounded-2xl p-8">
// //                 <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center gap-2">
// //                   <Calendar className="w-6 h-6 text-green-600" />
// //                   Upcoming Vaccination Camps
// //                 </h3>
// //                 <div className="space-y-4">
// //                   <div className="bg-white rounded-lg p-4">
// //                     <p className="font-semibold text-navy-900">Surana Nagar, Jaipur</p>
// //                     <p className="text-gray-600 text-sm">15th December 2024 | 8:00 AM - 12:00 PM</p>
// //                   </div>
// //                   <div className="bg-white rounded-lg p-4">
// //                     <p className="font-semibold text-navy-900">Malviya Nagar, Jaipur</p>
// //                     <p className="text-gray-600 text-sm">18th December 2024 | 8:00 AM - 12:00 PM</p>
// //                   </div>
// //                   <div className="bg-white rounded-lg p-4">
// //                     <p className="font-semibold text-navy-900">Pratap Nagar, Jodhpur</p>
// //                     <p className="text-gray-600 text-sm">22nd December 2024 | 8:00 AM - 12:00 PM</p>
// //                   </div>
// //                   <div className="bg-white rounded-lg p-4">
// //                     <p className="font-semibold text-navy-900">Udaipur City Center</p>
// //                     <p className="text-gray-600 text-sm">28th December 2024 | 8:00 AM - 12:00 PM</p>
// //                   </div>
// //                 </div>
// //                 <p className="text-gray-600 text-sm mt-4">
// //                   Contact us to schedule a vaccination drive in your area.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="py-16 lg:py-20 bg-gradient-to-r from-green-500 to-green-600 text-white">
// //         <div className="container mx-auto px-4 text-center">
// //           <div className="max-w-3xl mx-auto">
// //             <Syringe className="w-16 h-16 text-white mx-auto mb-6" />
// //             <h2 className="text-3xl md:text-4xl font-bold mb-4">
// //               Help Us Vaccinate More Dogs
// //             </h2>
// //             <p className="text-green-100 text-lg mb-8">
// //               Your support helps us reach more areas and protect more dogs and humans from rabies. 
// //               Every vaccination saves lives.
// //             </p>
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //               <Link 
// //                 to="/donate"
// //                 className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
// //               >
// //                 Support Our Work
// //               </Link>
// //               <Link 
// //                 to="/community-support"
// //                 className="inline-flex items-center justify-center px-8 py-4 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors"
// //               >
// //                 Partner With Us
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default VaccinationProgramsPage;





// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowLeft, CheckCircle } from 'lucide-react';

// // ─── Styles ──────────────────────────────────────────────────────────────────
// const styles = `
//   @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap');

//   .vacc-root * { font-family: 'Nunito', sans-serif; }
//   .vacc-root h1,
//   .vacc-root h2,
//   .vacc-root h3,
//   .vacc-root h4 { font-family: 'Playfair Display', serif; }

//   /* Why vaccination cards */
//   .why-card {
//     transition: transform 0.35s cubic-bezier(.34,1.56,.64,1), box-shadow 0.35s ease;
//   }
//   .why-card:hover {
//     transform: translateY(-8px) scale(1.02);
//     box-shadow: 0 20px 40px rgba(0,43,92,0.13);
//   }
//   .why-card .why-img {
//     transition: transform 0.45s ease;
//   }
//   .why-card:hover .why-img {
//     transform: scale(1.12) rotate(-4deg);
//   }

//   /* Service cards */
//   .service-card {
//     transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
//   }
//   .service-card:hover {
//     transform: translateY(-6px);
//     box-shadow: 0 16px 36px rgba(0,43,92,0.12);
//     border-color: #FFD100;
//   }
//   .service-card .svc-img {
//     transition: transform 0.4s cubic-bezier(.34,1.56,.64,1);
//   }
//   .service-card:hover .svc-img {
//     transform: scale(1.15);
//   }

//   /* Process step cards */
//   .step-card {
//     transition: transform 0.3s ease, box-shadow 0.3s ease;
//   }
//   .step-card:hover {
//     transform: translateY(-6px) scale(1.03);
//     box-shadow: 0 14px 32px rgba(0,43,92,0.13);
//   }
//   .step-card .step-num {
//     transition: background 0.3s ease, color 0.3s ease, transform 0.3s cubic-bezier(.34,1.56,.64,1);
//   }
//   .step-card:hover .step-num {
//     background: #FFD100;
//     color: #002B5C;
//     transform: scale(1.15);
//   }

//   /* Stat cards */
//   .stat-card {
//     transition: transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease;
//   }
//   .stat-card:hover {
//     transform: translateY(-6px) scale(1.05);
//     box-shadow: 0 10px 28px rgba(0,43,92,0.15);
//   }
//   .stat-card .stat-img {
//     transition: transform 0.4s ease;
//   }
//   .stat-card:hover .stat-img {
//     transform: scale(1.12) rotate(-3deg);
//   }

//   /* Camp cards */
//   .camp-card {
//     transition: transform 0.25s ease, box-shadow 0.25s ease, border-left-color 0.25s ease;
//     border-left: 4px solid transparent;
//   }
//   .camp-card:hover {
//     transform: translateX(5px);
//     box-shadow: 0 6px 18px rgba(0,43,92,0.1);
//     border-left-color: #FFD100;
//   }

//   /* CTA buttons */
//   .cta-btn {
//     transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
//   }
//   .cta-btn:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 8px 20px rgba(0,0,0,0.18);
//   }

//   /* Request buttons */
//   .req-btn {
//     transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
//   }
//   .req-btn:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 6px 16px rgba(0,0,0,0.15);
//   }

//   /* Checklist items */
//   .check-item {
//     transition: background 0.2s ease, transform 0.2s ease;
//     border-radius: 10px;
//     padding: 6px 8px;
//   }
//   .check-item:hover {
//     background: #fffbe6;
//     transform: translateX(4px);
//   }

//   /* Rabies facts list items */
//   .fact-item {
//     transition: background 0.2s ease, transform 0.2s ease;
//     border-radius: 8px;
//     padding: 5px 8px;
//   }
//   .fact-item:hover {
//     background: #fff1f1;
//     transform: translateX(4px);
//   }
//   .solution-item:hover {
//     background: #f0fff4 !important;
//   }

//   /* Back link */
//   .back-link {
//     transition: gap 0.2s ease, opacity 0.2s ease;
//   }
//   .back-link:hover {
//     opacity: 1;
//     gap: 10px;
//   }

//   /* Pulse for CTA icon */
//   @keyframes pulse-ring {
//     0%   { box-shadow: 0 0 0 0 rgba(255,209,0,0.5); }
//     70%  { box-shadow: 0 0 0 14px rgba(255,209,0,0); }
//     100% { box-shadow: 0 0 0 0 rgba(255,209,0,0); }
//   }
//   .pulse-img { animation: pulse-ring 2.2s infinite; }

//   /* Fade up */
//   @keyframes fadeUp {
//     from { opacity: 0; transform: translateY(28px); }
//     to   { opacity: 1; transform: translateY(0); }
//   }
//   .fade-up  { animation: fadeUp 0.7s ease both; }
//   .d1 { animation-delay: 0.1s; }
//   .d2 { animation-delay: 0.2s; }
//   .d3 { animation-delay: 0.3s; }
// `;

// const VaccinationProgramsPage: React.FC = () => {

//   const services = [
//     {
//       img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=100&h=100&fit=crop',
//       title: 'Anti-Rabies Vaccination',
//       description: 'Our primary focus is vaccinating community dogs against rabies, protecting both dogs and humans from this fatal disease.',
//       stats: '10,000+ vaccinations/year',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=100&h=100&fit=crop',
//       title: 'Community Vaccination Drives',
//       description: 'We organize regular vaccination camps in different areas, systematically covering all community dogs in the region.',
//       stats: '50+ areas covered',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=100&h=100&fit=crop',
//       title: 'Disease Prevention',
//       description: 'Beyond rabies, we vaccinate against parvovirus, distemper, and canine hepatitis where possible.',
//       stats: 'Comprehensive protection',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1488778578932-0d8ce5f40dba?w=100&h=100&fit=crop',
//       title: 'Public Safety Education',
//       description: 'We educate communities about the importance of vaccination and how it protects everyone.',
//       stats: 'Awareness programs',
//     },
//   ];

//   const whyVaccination = [
//     {
//       img: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=80&h=80&fit=crop',
//       title: 'Prevents Rabies Deaths',
//       description: 'Rabies is 100% fatal once symptoms appear, but 100% preventable through vaccination. Vaccinated dogs cannot transmit rabies.',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=80&h=80&fit=crop',
//       title: 'Protects Human Health',
//       description: 'Over 95% of human rabies cases come from dog bites. Vaccinating dogs is the most effective way to protect humans.',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=80&h=80&fit=crop',
//       title: 'Saves Dog Lives',
//       description: 'Unvaccinated dogs that bite humans are often killed out of fear. Vaccination protects dogs from this fate.',
//     },
//     {
//       img: 'https://images.unsplash.com/photo-1488778578932-0d8ce5f40dba?w=80&h=80&fit=crop',
//       title: 'Community Safety',
//       description: 'When 70% of dogs in an area are vaccinated, the entire community is protected through herd immunity.',
//     },
//   ];

//   const vaccinationProcess = [
//     { step: 1, title: 'Area Survey', description: 'We survey the area to count dogs and plan the vaccination drive.', img: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=60&h=60&fit=crop' },
//     { step: 2, title: 'Community Notice', description: 'We inform residents about the upcoming vaccination camp date and time.', img: 'https://images.unsplash.com/photo-1488778578932-0d8ce5f40dba?w=60&h=60&fit=crop' },
//     { step: 3, title: 'Humane Capture', description: 'Dogs are humanely caught using nets and gentle handling techniques.', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=60&h=60&fit=crop' },
//     { step: 4, title: 'Health Check', description: 'Each dog is checked for illness or injury before vaccination.', img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=60&h=60&fit=crop' },
//     { step: 5, title: 'Vaccination', description: 'The anti-rabies vaccine is administered by trained personnel.', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=60&h=60&fit=crop' },
//     { step: 6, title: 'Marking & Release', description: 'Dogs are marked (collar/tag) and released back to their territory.', img: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=60&h=60&fit=crop' },
//   ];

//   const stats = [
//     { number: '15,000+', label: 'Dogs Vaccinated', img: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=80&h=80&fit=crop' },
//     { number: '50+', label: 'Areas Covered', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=80&h=80&fit=crop' },
//     { number: '0', label: 'Rabies Cases in Vaccinated Dogs', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=80&h=80&fit=crop' },
//     { number: '100%', label: 'Free Service', img: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=80&h=80&fit=crop' },
//   ];

//   const upcomingCamps = [
//     { area: 'Surana Nagar, Jaipur', date: '15th December 2024 | 8:00 AM – 12:00 PM' },
//     { area: 'Malviya Nagar, Jaipur', date: '18th December 2024 | 8:00 AM – 12:00 PM' },
//     { area: 'Pratap Nagar, Jodhpur', date: '22nd December 2024 | 8:00 AM – 12:00 PM' },
//     { area: 'Udaipur City Center', date: '28th December 2024 | 8:00 AM – 12:00 PM' },
//   ];

//   return (
//     <div className="vacc-root min-h-screen">
//       <style>{styles}</style>

//       {/* ── Hero ── */}
//       <section className="relative bg-gradient-to-br from-[#002B5C] via-[#003D82] to-[#00A19A] text-white py-16 lg:py-24 overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-10"
//           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920')" }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#002B5C]/90 to-[#00A19A]/60" />

//         <div className="container mx-auto px-4 relative z-10">
//           <Link to="/our-work" className="back-link inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-all font-semibold">
//             <ArrowLeft className="w-5 h-5" />
//             Back to Our Work
//           </Link>

//           <div className="max-w-4xl">
//             <div className="flex items-center gap-4 mb-6 fade-up">
//               {/* Image instead of icon */}
//               <div className="w-16 h-16 rounded-xl overflow-hidden ring-4 ring-[#FFD100] shadow-lg">
//                 <img
//                   src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=80&h=80&fit=crop"
//                   alt="Vaccination"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <span className="bg-[#FFD100] text-[#002B5C] px-4 py-1.5 rounded-full text-sm font-bold">
//                 Our Work
//               </span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight fade-up d1">
//               Vaccination Programs
//             </h1>
//             <p className="text-xl text-green-100 leading-relaxed max-w-3xl fade-up d2">
//               We conduct regular anti-rabies vaccination drives to protect community dogs and
//               humans. Vaccination is the most effective way to prevent rabies and save lives.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ── Stats Banner ── */}
//       <section className="py-10 bg-[#002B5C]">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {stats.map((stat, i) => (
//               <div key={i} className="stat-card bg-[#003D82] rounded-2xl p-5 text-center cursor-default">
//                 <div className="stat-img w-14 h-14 rounded-full overflow-hidden mx-auto mb-3 ring-4 ring-[#FFD100]">
//                   <img src={stat.img} alt={stat.label} className="w-full h-full object-cover" loading="lazy" />
//                 </div>
//                 <p className="text-3xl md:text-4xl font-black text-[#FFD100]">{stat.number}</p>
//                 <p className="text-gray-300 text-sm font-semibold mt-1">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Why Vaccination ── */}
//       <section className="py-16 lg:py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <span className="text-[#00A19A] font-bold text-sm uppercase tracking-widest">The Importance</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mt-2 mb-4">
//               Why Vaccination Matters
//             </h2>
//             <p className="text-gray-600 text-lg">
//               Vaccination is not just about protecting dogs — it is about protecting entire communities.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//             {whyVaccination.map((item, i) => (
//               <div
//                 key={i}
//                 className="why-card bg-[#f0fffe] rounded-xl p-6 border border-[#00A19A]/20 flex items-start gap-4 cursor-default"
//               >
//                 <div className="why-img w-14 h-14 rounded-full overflow-hidden ring-4 ring-[#00A19A] flex-shrink-0">
//                   <img src={item.img} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-[#002B5C] mb-2">{item.title}</h3>
//                   <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Rabies Facts ── */}
//       <section className="py-16 lg:py-24 bg-red-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-12">
//               <span className="text-red-600 font-bold text-sm uppercase tracking-widest">Important Facts</span>
//               <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mt-2 mb-4">
//                 Understanding Rabies
//               </h2>
//             </div>

//             <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
//               <div className="grid md:grid-cols-2 gap-8">
//                 {/* Danger */}
//                 <div>
//                   <h3 className="text-xl font-bold text-red-600 mb-5 flex items-center gap-3">
//                     <span className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-red-400 flex-shrink-0 inline-block">
//                       <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=40&h=40&fit=crop" alt="Danger" className="w-full h-full object-cover" />
//                     </span>
//                     The Danger
//                   </h3>
//                   <ul className="space-y-2 text-gray-700">
//                     {[
//                       'Rabies kills approximately 20,000 people in India every year',
//                       'Once symptoms appear, rabies is 100% fatal',
//                       'Most victims are children under 15 years old',
//                       '95% of human cases are caused by dog bites',
//                     ].map((item, i) => (
//                       <li key={i} className="fact-item flex items-start gap-2 cursor-default">
//                         <span className="text-red-500 font-bold mt-0.5">•</span>
//                         <span className="font-medium">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Solution */}
//                 <div>
//                   <h3 className="text-xl font-bold text-[#00A19A] mb-5 flex items-center gap-3">
//                     <span className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#00A19A] flex-shrink-0 inline-block">
//                       <img src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=40&h=40&fit=crop" alt="Solution" className="w-full h-full object-cover" />
//                     </span>
//                     The Solution
//                   </h3>
//                   <ul className="space-y-2 text-gray-700">
//                     {[
//                       'Rabies is 100% preventable through vaccination',
//                       'One vaccine protects a dog for 1–3 years',
//                       '70% vaccination coverage eliminates rabies transmission',
//                       'Vaccinating dogs is more cost-effective than treating human cases',
//                     ].map((item, i) => (
//                       <li key={i} className="fact-item solution-item flex items-start gap-2 cursor-default">
//                         <span className="text-[#00A19A] font-bold mt-0.5">✓</span>
//                         <span className="font-medium">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── Our Services ── */}
//       <section className="py-16 lg:py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <span className="text-[#F58220] font-bold text-sm uppercase tracking-widest">Our Services</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mt-2 mb-4">
//               Vaccination Programs We Offer
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {services.map((service, i) => (
//               <div
//                 key={i}
//                 className="service-card bg-gray-50 rounded-xl p-6 border border-gray-100 cursor-default"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="svc-img w-16 h-16 rounded-xl overflow-hidden ring-4 ring-[#FFD100] flex-shrink-0">
//                     <img src={service.img} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-[#002B5C] mb-2">{service.title}</h3>
//                     <p className="text-gray-600 leading-relaxed mb-3 text-sm">{service.description}</p>
//                     <span className="inline-block bg-[#00A19A]/10 text-[#00A19A] px-3 py-1 rounded-full text-sm font-bold">
//                       {service.stats}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Vaccination Process ── */}
//       <section className="py-16 lg:py-24 bg-[#f0fffe]">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <span className="text-[#00A19A] font-bold text-sm uppercase tracking-widest">Our Process</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mt-2 mb-4">
//               How We Conduct Vaccination Drives
//             </h2>
//           </div>

//           <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {vaccinationProcess.map((item) => (
//               <div key={item.step} className="step-card bg-white rounded-xl p-6 shadow-md cursor-default">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="step-num w-12 h-12 bg-[#002B5C] text-white rounded-full flex items-center justify-center font-black text-lg flex-shrink-0">
//                     {item.step}
//                   </div>
//                   <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#FFD100]">
//                     <img src={item.img} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
//                   </div>
//                 </div>
//                 <h3 className="text-lg font-bold text-[#002B5C] mb-2">{item.title}</h3>
//                 <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── Request Section ── */}
//       <section className="py-16 lg:py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="grid lg:grid-cols-2 gap-12 items-start">
//               {/* Left */}
//               <div>
//                 <span className="text-[#00A19A] font-bold text-sm uppercase tracking-widest">Request Service</span>
//                 <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mt-2 mb-6">
//                   Want Vaccination in Your Area?
//                 </h2>
//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   If you have community dogs in your area that need vaccination, contact us.
//                   We conduct vaccination drives for residential societies, commercial areas,
//                   and public spaces across Rajasthan.
//                 </p>

//                 <div className="space-y-3 mb-8">
//                   {[
//                     { title: 'Free Service', desc: 'All our vaccination programs are completely free' },
//                     { title: 'Professional Team', desc: 'Trained personnel with humane handling techniques' },
//                     { title: 'Quality Vaccines', desc: 'We use approved, high-quality vaccines only' },
//                     { title: 'Documentation', desc: 'Complete records of all vaccinated dogs' },
//                   ].map((item, i) => (
//                     <div key={i} className="check-item flex items-start gap-3 cursor-default">
//                       <CheckCircle className="w-6 h-6 text-[#00A19A] flex-shrink-0 mt-0.5" />
//                       <div>
//                         <h4 className="font-bold text-[#002B5C]">{item.title}</h4>
//                         <p className="text-gray-600 text-sm">{item.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <a
//                     href="tel:+919876543210"
//                     className="req-btn inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#00A19A] text-white font-bold rounded-xl"
//                   >
//                     📞 +91 98765 43210
//                   </a>
//                   <Link
//                     to="/contact"
//                     className="req-btn inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#002B5C] text-white font-bold rounded-xl"
//                   >
//                     📋 Submit Request
//                   </Link>
//                 </div>
//               </div>

//               {/* Right — Upcoming Camps */}
//               <div className="bg-[#f0fffe] rounded-2xl p-8 border border-[#00A19A]/20">
//                 <h3 className="text-xl font-bold text-[#002B5C] mb-6 flex items-center gap-3">
//                   <span className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#FFD100]">
//                     <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=40&h=40&fit=crop" alt="Schedule" className="w-full h-full object-cover" />
//                   </span>
//                   Upcoming Vaccination Camps
//                 </h3>
//                 <div className="space-y-3">
//                   {upcomingCamps.map((camp, i) => (
//                     <div key={i} className="camp-card bg-white rounded-lg p-4 cursor-default">
//                       <p className="font-bold text-[#002B5C]">{camp.area}</p>
//                       <p className="text-gray-500 text-sm mt-1">📅 {camp.date}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <p className="text-gray-500 text-sm mt-5">
//                   Contact us to schedule a vaccination drive in your area.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── CTA ── */}
//       <section className="py-16 lg:py-20 bg-gradient-to-r from-[#002B5C] to-[#00A19A] text-white">
//         <div className="container mx-auto px-4 text-center">
//           <div className="max-w-3xl mx-auto">
//             {/* Pulsing image */}
//             <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-[#FFD100] pulse-img">
//               <img
//                 src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=80&h=80&fit=crop"
//                 alt="Help vaccinate dogs"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Help Us Vaccinate More Dogs
//             </h2>
//             <p className="text-green-100 text-lg mb-8">
//               Your support helps us reach more areas and protect more dogs and humans from rabies.
//               Every vaccination saves lives.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 to="/donate"
//                 className="cta-btn inline-flex items-center justify-center px-8 py-4 bg-[#FFD100] text-[#002B5C] font-black rounded-xl text-lg"
//               >
//                 ❤️ Support Our Work
//               </Link>
//               <Link
//                 to="/community-support"
//                 className="cta-btn inline-flex items-center justify-center px-8 py-4 bg-white/10 border-2 border-white text-white font-bold rounded-xl text-lg hover:bg-white hover:text-[#002B5C]"
//               >
//                 🤝 Partner With Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default VaccinationProgramsPage;




import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Heart, Bell, ArrowLeft} from 'lucide-react';

const ComingSoonPage: React.FC = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Floating paw prints data
  const pawPrints = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 90 + 5}%`,
    top: `${Math.random() * 90 + 5}%`,
    size: Math.random() * 20 + 14,
    delay: Math.random() * 4,
    duration: Math.random() * 4 + 4,
  }));

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 50%, #1e3a5f 100%)' }}>

      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full opacity-10" style={{ background: '#facc15', animation: 'pulse 4s ease-in-out infinite' }}></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-10" style={{ background: '#facc15', animation: 'pulse 4s ease-in-out infinite 2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5" style={{ background: '#ffffff', animation: 'pulse 6s ease-in-out infinite 1s' }}></div>
      </div>

      {/* Floating paw prints */}
      {pawPrints.map(paw => (
        <div
          key={paw.id}
          className="absolute opacity-10 text-yellow-400 pointer-events-none select-none"
          style={{
            left: paw.left,
            top: paw.top,
            fontSize: paw.size,
            animation: `float ${paw.duration}s ease-in-out ${paw.delay}s infinite alternate`,
          }}
        >
          🐾
        </div>
      ))}

      {/* Back Button */}
      <div className="relative z-10 container mx-auto px-4 pt-8">
        <Link
          to="/our-work"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Our Work
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">

          {/* Icon */}
          {/* <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-2xl"
                style={{ animation: 'bounce 2s ease-in-out infinite' }}>
                <Home className="w-12 h-12 text-blue-900" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </div>
            </div>
          </div> */}

          {/* Coming Soon Tag */}
          {/* <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 px-5 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block" style={{ animation: 'ping 1.5s ease-in-out infinite' }}></span>
            Shelter Support
          </div> */}

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight tracking-tight">
            Coming
            <span className="text-yellow-400"> Soon</span>
            <span className="text-yellow-400">{dots}</span>
          </h1>

          {/* Subheading */}
          {/* <p className="text-blue-200 text-lg md:text-xl mb-10 leading-relaxed max-w-lg mx-auto">
            Hum <span className="text-yellow-300 font-semibold">Shelter Support</span> page par kaam kar rahe hain.
            Jald hi yahan injured aur beemar dogs ke liye humari services uplabdh hongi. 🐶
          </p> */}

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px bg-white/20 flex-1 max-w-20"></div>
            <span className="text-2xl">🐾</span>
            <div className="h-px bg-white/20 flex-1 max-w-20"></div>
          </div>

          {/* Feature Preview Pills */}
          {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Safe Environment', 'Medical Care', 'Proper Nutrition', '24/7 Supervision', 'Loving Care'].map(item => (
              <span
                key={item}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-colors"
              >
                {item}
              </span>
            ))}
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-xl hover:bg-yellow-300 transition-all shadow-lg hover:shadow-yellow-400/30 hover:-translate-y-0.5"
              style={{ transition: 'all 0.2s ease' }}
            >
              <Bell className="w-5 h-5" />
              Notify Me
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/30 hover:-translate-y-0.5"
              style={{ transition: 'all 0.2s ease' }}
            >
              Contact Us
            </Link>
          </div>

          {/* Footer note */}
          <p className="text-white/40 text-sm mt-12">
            © Surana NGO · Shelter Support coming soon
          </p>
        </div>
      </div>

      {/* Inline Styles for animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(15deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.15; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ComingSoonPage;
