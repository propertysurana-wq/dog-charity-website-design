// // /**
// //  * Shelter & Safe Care Page
// //  * Details about our temporary shelter facilities for injured, sick, or recovering dogs
// //  */

// // import React, { useState } from 'react';
// // import { Home, Heart, Shield, Clock, CheckCircle, Star, Phone, Camera, Utensils, Stethoscope, Sun, Moon, Users, ArrowRight } from 'lucide-react';

// // // Shelter features
// // const shelterFeatures = [
// //   {
// //     icon: Home,
// //     title: 'Safe Housing',
// //     description: 'Clean, secure kennels with proper bedding, ventilation, and temperature control',
// //   },
// //   {
// //     icon: Stethoscope,
// //     title: 'Medical Care',
// //     description: '24/7 veterinary supervision with regular health check-ups and medication management',
// //   },
// //   {
// //     icon: Utensils,
// //     title: 'Nutritious Food',
// //     description: 'Balanced diet tailored to each dog\'s health needs, served at regular intervals',
// //   },
// //   {
// //     icon: Heart,
// //     title: 'Emotional Care',
// //     description: 'Gentle handling, socialization, and comfort to reduce stress and anxiety',
// //   },
// //   {
// //     icon: Shield,
// //     title: 'Protection',
// //     description: 'Secure facility with 24/7 security to keep all animals safe',
// //   },
// //   {
// //     icon: Sun,
// //     title: 'Exercise Areas',
// //     description: 'Dedicated outdoor spaces for supervised exercise and sunlight exposure',
// //   },
// // ];

// // // Types of dogs we shelter
// // const shelterCategories = [
// //   {
// //     title: 'Injured Dogs',
// //     description: 'Dogs recovering from accidents, injuries, or surgical procedures',
// //     duration: '1-8 weeks',
// //     icon: '🩹',
// //   },
// //   {
// //     title: 'Sick Dogs',
// //     description: 'Dogs undergoing treatment for illnesses or infections',
// //     duration: '1-4 weeks',
// //     icon: '💊',
// //   },
// //   {
// //     title: 'Post-Surgery Recovery',
// //     description: 'Dogs recuperating after sterilization or other medical procedures',
// //     duration: '3-10 days',
// //     icon: '🏥',
// //   },
// //   {
// //     title: 'Rescued Puppies',
// //     description: 'Orphaned or abandoned puppies needing special care until they are strong enough',
// //     duration: '2-6 weeks',
// //     icon: '🐕',
// //   },
// //   {
// //     title: 'Malnourished Dogs',
// //     description: 'Dogs recovering from severe malnutrition or neglect',
// //     duration: '2-6 weeks',
// //     icon: '🍖',
// //   },
// //   {
// //     title: 'Traumatized Dogs',
// //     description: 'Dogs needing time and care to recover from abuse or trauma',
// //     duration: 'Varies',
// //     icon: '💝',
// //   },
// // ];

// // // Daily routine
// // const dailyRoutine = [
// //   { time: '6:00 AM', activity: 'Morning health check & medication', icon: Stethoscope },
// //   { time: '7:00 AM', activity: 'Breakfast - nutritious meal', icon: Utensils },
// //   { time: '8:00 AM', activity: 'Kennel cleaning & fresh bedding', icon: Home },
// //   { time: '9:00 AM', activity: 'Veterinary rounds & treatments', icon: Stethoscope },
// //   { time: '10:00 AM', activity: 'Supervised outdoor time (for able dogs)', icon: Sun },
// //   { time: '12:00 PM', activity: 'Midday rest & observation', icon: Clock },
// //   { time: '2:00 PM', activity: 'Afternoon meal & hydration check', icon: Utensils },
// //   { time: '4:00 PM', activity: 'Socialization & gentle exercise', icon: Heart },
// //   { time: '6:00 PM', activity: 'Evening health check & medication', icon: Stethoscope },
// //   { time: '7:00 PM', activity: 'Dinner service', icon: Utensils },
// //   { time: '9:00 PM', activity: 'Night settling & security check', icon: Moon },
// // ];

// // // Shelter statistics
// // const shelterStats = [
// //   { number: '150+', label: 'Dogs Currently in Care' },
// //   { number: '2,500+', label: 'Dogs Sheltered Yearly' },
// //   { number: '95%', label: 'Recovery Rate' },
// //   { number: '24/7', label: 'Care & Monitoring' },
// // ];

// // // Gallery images (placeholder)
// // const galleryImages = [
// //   { id: 1, title: 'Clean Kennels', category: 'Facilities' },
// //   { id: 2, title: 'Feeding Time', category: 'Daily Care' },
// //   { id: 3, title: 'Veterinary Care', category: 'Medical' },
// //   { id: 4, title: 'Outdoor Area', category: 'Facilities' },
// //   { id: 5, title: 'Recovery Ward', category: 'Medical' },
// //   { id: 6, title: 'Happy Recovery', category: 'Success' },
// // ];

// // const ShelterSafeCarePage: React.FC = () => {
// //   const [activeTab, setActiveTab] = useState<'features' | 'routine' | 'categories'>('features');

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       {/* Hero Section */}
// //       <section className="bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 py-16 md:py-24">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //             <div className="text-white">
// //               <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
// //                 <Home className="w-4 h-4" />
// //                 Temporary Care & Recovery
// //               </div>
// //               <h1 className="text-3xl md:text-5xl font-bold mb-6">
// //                 Shelter & Safe Care
// //               </h1>
// //               <p className="text-lg md:text-xl text-teal-100 mb-8">
// //                 We provide temporary shelter for injured, sick, and recovering dogs. Our facility 
// //                 offers a safe, clean, and caring environment where dogs can heal and regain strength 
// //                 before returning to their community.
// //               </p>
// //               <div className="flex flex-col sm:flex-row gap-4">
// //                 <a
// //                   href="tel:+919876543210"
// //                   className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-6 py-3 rounded-full font-bold hover:bg-teal-50 transition-colors"
// //                 >
// //                   <Phone className="w-5 h-5" />
// //                   Report a Dog in Need
// //                 </a>
// //                 <a
// //                   href="#visit"
// //                   className="inline-flex items-center justify-center gap-2 bg-teal-700 text-white px-6 py-3 rounded-full font-bold hover:bg-teal-800 transition-colors"
// //                 >
// //                   <Camera className="w-5 h-5" />
// //                   Virtual Tour
// //                 </a>
// //               </div>
// //             </div>
// //             <div className="hidden lg:block">
// //               <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
// //                 <div className="aspect-square bg-white/20 rounded-2xl flex items-center justify-center">
// //                   <Home className="w-32 h-32 text-white/60" />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Statistics */}
// //       <section className="py-12 bg-white border-b">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// //             {shelterStats.map((stat, index) => (
// //               <div key={index} className="text-center">
// //                 <p className="text-3xl md:text-4xl font-bold text-teal-600">{stat.number}</p>
// //                 <p className="text-gray-600 mt-1">{stat.label}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Important Notice */}
// //       <section className="py-8 bg-yellow-50 border-b border-yellow-200">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
// //             <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
// //               <Shield className="w-6 h-6 text-gray-900" />
// //             </div>
// //             <div>
// //               <h3 className="font-bold text-gray-900">Important: Our Shelter is for Recovery Only</h3>
// //               <p className="text-gray-700">
// //                 We provide temporary shelter for medical care and recovery. Once dogs are healthy, they return to their 
// //                 community. We do not offer permanent boarding or adoption services.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Tab Navigation */}
// //       <section className="py-16 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           {/* Tabs */}
// //           <div className="flex flex-wrap justify-center gap-4 mb-12">
// //             <button
// //               onClick={() => setActiveTab('features')}
// //               className={`px-6 py-3 rounded-full font-semibold transition-colors ${
// //                 activeTab === 'features'
// //                   ? 'bg-teal-600 text-white'
// //                   : 'bg-white text-gray-700 hover:bg-teal-50'
// //               }`}
// //             >
// //               Our Facilities
// //             </button>
// //             <button
// //               onClick={() => setActiveTab('categories')}
// //               className={`px-6 py-3 rounded-full font-semibold transition-colors ${
// //                 activeTab === 'categories'
// //                   ? 'bg-teal-600 text-white'
// //                   : 'bg-white text-gray-700 hover:bg-teal-50'
// //               }`}
// //             >
// //               Dogs We Shelter
// //             </button>
// //             <button
// //               onClick={() => setActiveTab('routine')}
// //               className={`px-6 py-3 rounded-full font-semibold transition-colors ${
// //                 activeTab === 'routine'
// //                   ? 'bg-teal-600 text-white'
// //                   : 'bg-white text-gray-700 hover:bg-teal-50'
// //               }`}
// //             >
// //               Daily Routine
// //             </button>
// //           </div>

// //           {/* Tab Content */}
// //           {activeTab === 'features' && (
// //             <div>
// //               <div className="text-center mb-12">
// //                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// //                   Our Shelter Facilities
// //                 </h2>
// //                 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
// //                   Our shelter is designed to provide the best possible care environment for recovering dogs
// //                 </p>
// //               </div>
// //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //                 {shelterFeatures.map((feature, index) => {
// //                   const IconComponent = feature.icon;
// //                   return (
// //                     <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
// //                       <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
// //                         <IconComponent className="w-7 h-7 text-teal-600" />
// //                       </div>
// //                       <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
// //                       <p className="text-gray-600">{feature.description}</p>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             </div>
// //           )}

// //           {activeTab === 'categories' && (
// //             <div>
// //               <div className="text-center mb-12">
// //                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// //                   Dogs We Provide Shelter For
// //                 </h2>
// //                 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
// //                   We offer temporary shelter and care for various categories of dogs in need
// //                 </p>
// //               </div>
// //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //                 {shelterCategories.map((category, index) => (
// //                   <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
// //                     <div className="text-4xl mb-4">{category.icon}</div>
// //                     <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
// //                     <p className="text-gray-600 mb-4">{category.description}</p>
// //                     <div className="flex items-center gap-2 text-sm text-teal-600 font-medium">
// //                       <Clock className="w-4 h-4" />
// //                       Typical stay: {category.duration}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           )}

// //           {activeTab === 'routine' && (
// //             <div>
// //               <div className="text-center mb-12">
// //                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// //                   A Day at Our Shelter
// //                 </h2>
// //                 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
// //                   Every dog in our care receives consistent, loving attention throughout the day
// //                 </p>
// //               </div>
// //               <div className="max-w-3xl mx-auto">
// //                 <div className="relative">
// //                   {/* Timeline line */}
// //                   <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-teal-200" />
                  
// //                   {dailyRoutine.map((item, index) => {
// //                     const IconComponent = item.icon;
// //                     return (
// //                       <div key={index} className="relative flex items-start gap-6 mb-6">
// //                         <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center z-10 flex-shrink-0">
// //                           <IconComponent className="w-5 h-5 text-white" />
// //                         </div>
// //                         <div className="bg-white rounded-xl p-4 shadow-md flex-1">
// //                           <p className="text-sm font-bold text-teal-600">{item.time}</p>
// //                           <p className="text-gray-800">{item.activity}</p>
// //                         </div>
// //                       </div>
// //                     );
// //                   })}
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </section>

// //       {/* How It Works */}
// //       <section className="py-16 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// //               How Our Shelter Process Works
// //             </h2>
// //             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
// //               From rescue to recovery - every step is designed for the dog&apos;s wellbeing
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
// //             {[
// //               { step: 1, title: 'Rescue', desc: 'Dog is rescued and brought to shelter' },
// //               { step: 2, title: 'Assessment', desc: 'Full medical evaluation by vet' },
// //               { step: 3, title: 'Treatment', desc: 'Medical care and treatment begins' },
// //               { step: 4, title: 'Recovery', desc: 'Rest, nutrition, and monitoring' },
// //               { step: 5, title: 'Release', desc: 'Healthy dog returns to community' },
// //             ].map((item, index) => (
// //               <div key={index} className="relative">
// //                 <div className="bg-teal-50 rounded-2xl p-6 text-center h-full">
// //                   <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
// //                     {item.step}
// //                   </div>
// //                   <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
// //                   <p className="text-gray-600 text-sm">{item.desc}</p>
// //                 </div>
// //                 {index < 4 && (
// //                   <div className="hidden md:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
// //                     <ArrowRight className="w-6 h-6 text-teal-400" />
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Gallery */}
// //       <section className="py-16 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// //               Inside Our Shelter
// //             </h2>
// //             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
// //               Take a look at our facilities and the care we provide
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
// //             {galleryImages.map((image) => (
// //               <div key={image.id} className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative group">
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
// //                 <div className="absolute bottom-4 left-4 text-white">
// //                   <p className="text-xs text-gray-300">{image.category}</p>
// //                   <p className="font-semibold">{image.title}</p>
// //                 </div>
// //                 <div className="absolute inset-0 flex items-center justify-center">
// //                   <Camera className="w-12 h-12 text-gray-400" />
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Support Our Shelter */}
// //       <section className="py-16 bg-teal-600 text-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //             <div>
// //               <h2 className="text-3xl md:text-4xl font-bold mb-6">
// //                 Support Our Shelter
// //               </h2>
// //               <p className="text-lg text-teal-100 mb-8">
// //                 Running a shelter requires significant resources. Your support helps us provide 
// //                 food, medicine, and care for hundreds of dogs every month.
// //               </p>
// //               <div className="grid grid-cols-2 gap-4 mb-8">
// //                 <div className="bg-white/10 rounded-xl p-4">
// //                   <p className="text-2xl font-bold">₹500</p>
// //                   <p className="text-teal-200 text-sm">Feeds a dog for 1 week</p>
// //                 </div>
// //                 <div className="bg-white/10 rounded-xl p-4">
// //                   <p className="text-2xl font-bold">₹1,000</p>
// //                   <p className="text-teal-200 text-sm">Medicine for 1 dog</p>
// //                 </div>
// //                 <div className="bg-white/10 rounded-xl p-4">
// //                   <p className="text-2xl font-bold">₹2,500</p>
// //                   <p className="text-teal-200 text-sm">Full recovery care</p>
// //                 </div>
// //                 <div className="bg-white/10 rounded-xl p-4">
// //                   <p className="text-2xl font-bold">₹5,000</p>
// //                   <p className="text-teal-200 text-sm">Sponsor a kennel</p>
// //                 </div>
// //               </div>
// //               <a
// //                 href="/donate"
// //                 className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors"
// //               >
// //                 <Heart className="w-5 h-5" />
// //                 Donate Now
// //               </a>
// //             </div>
// //             <div className="bg-white/10 rounded-3xl p-8">
// //               <h3 className="text-xl font-bold mb-6">Other Ways to Help</h3>
// //               <div className="space-y-4">
// //                 <div className="flex items-start gap-4">
// //                   <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
// //                   <div>
// //                     <p className="font-semibold">Donate Supplies</p>
// //                     <p className="text-teal-200 text-sm">Dog food, blankets, medicines, cleaning supplies</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-start gap-4">
// //                   <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
// //                   <div>
// //                     <p className="font-semibold">Volunteer Your Time</p>
// //                     <p className="text-teal-200 text-sm">Help with feeding, cleaning, and dog care</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-start gap-4">
// //                   <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
// //                   <div>
// //                     <p className="font-semibold">Professional Services</p>
// //                     <p className="text-teal-200 text-sm">Veterinarians, trainers, and caregivers welcome</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-start gap-4">
// //                   <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
// //                   <div>
// //                     <p className="font-semibold">Spread the Word</p>
// //                     <p className="text-teal-200 text-sm">Share our work on social media</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Visit Our Shelter */}
// //       <section id="visit" className="py-16 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
// //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //               <div>
// //                 <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Shelter</h2>
// //                 <p className="text-gray-600 mb-6">
// //                   We welcome visitors who want to see our work firsthand. Please schedule a visit 
// //                   in advance so we can arrange a proper tour.
// //                 </p>
// //                 <div className="space-y-4">
// //                   <div className="flex items-start gap-4">
// //                     <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
// //                       <Home className="w-5 h-5 text-teal-600" />
// //                     </div>
// //                     <div>
// //                       <p className="font-semibold text-gray-900">Main Shelter</p>
// //                       <p className="text-gray-600">123 Dog Welfare Street, Surana Nagar, Rajasthan - 302001</p>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-start gap-4">
// //                     <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
// //                       <Clock className="w-5 h-5 text-teal-600" />
// //                     </div>
// //                     <div>
// //                       <p className="font-semibold text-gray-900">Visiting Hours</p>
// //                       <p className="text-gray-600">Monday - Saturday: 10 AM - 4 PM</p>
// //                       <p className="text-gray-600">Sunday: By appointment only</p>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-start gap-4">
// //                     <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
// //                       <Phone className="w-5 h-5 text-teal-600" />
// //                     </div>
// //                     <div>
// //                       <p className="font-semibold text-gray-900">Schedule a Visit</p>
// //                       <p className="text-gray-600">Call: +919999999999</p>
// //                       <p className="text-gray-600">Email: shelter@suranaNGO.org</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="bg-gray-200 rounded-2xl flex items-center justify-center aspect-video lg:aspect-auto">
// //                 <div className="text-center p-8">
// //                   <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
// //                   <p className="text-gray-500">Virtual Tour Coming Soon</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* FAQ Section */}
// //       <section className="py-16 bg-gray-50">
// //         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
// //             Frequently Asked Questions
// //           </h2>
// //           <div className="space-y-4">
// //             {[
// //               {
// //                 q: 'How long do dogs stay at the shelter?',
// //                 a: 'The length of stay depends on the dog\'s condition. Most dogs stay between 3 days to 8 weeks for recovery. Once they are healthy, they are returned to their community.',
// //               },
// //               {
// //                 q: 'Can I adopt a dog from your shelter?',
// //                 a: 'We focus on medical care and rehabilitation of community dogs. We do not facilitate adoptions. Our goal is to treat and return dogs to their original territory.',
// //               },
// //               {
// //                 q: 'Do you accept surrendered pets?',
// //                 a: 'No, we specifically work with community street dogs. For pet-related issues, please contact local pet shelters or rescue organizations.',
// //               },
// //               {
// //                 q: 'Can I volunteer at the shelter?',
// //                 a: 'Yes! We welcome volunteers for various tasks including feeding, cleaning, and dog care. Please contact us to learn about volunteer opportunities.',
// //               },
// //               {
// //                 q: 'How is the shelter funded?',
// //                 a: 'We operate entirely on donations from individuals and organizations. We do not receive any government funding. Every contribution helps us save more lives.',
// //               },
// //             ].map((faq, index) => (
// //               <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
// //                 <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
// //                 <p className="text-gray-600">{faq.a}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA */}
// //       <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500">
// //         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
// //             Report a Dog in Need
// //           </h2>
// //           <p className="text-lg text-gray-800 mb-8">
// //             If you see an injured, sick, or distressed dog, please contact us immediately. 
// //             Your call could save a life.
// //           </p>
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //             <a
// //               href="tel:+919876543210"
// //               className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors"
// //             >
// //               <Phone className="w-6 h-6" />
// //               Call: +919999999999
// //             </a>
// //             <a
// //               href="/emergency-contact"
// //               className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
// //             >
// //               <Star className="w-6 h-6" />
// //               Report Online
// //             </a>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default ShelterSafeCarePage;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// // ─── Data ────────────────────────────────────────────────────────────────────

// const shelterFeatures = [
//   { title: 'Safe Housing', description: 'Clean, secure kennels with proper bedding, ventilation, and temperature control', img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500&h=340&fit=crop' },
//   { title: 'Medical Care', description: '24/7 veterinary supervision with regular health check-ups and medication management', img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=500&h=340&fit=crop' },
//   { title: 'Nutritious Food', description: 'Balanced diet tailored to each dog\'s health needs, served at regular intervals', img: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=500&h=340&fit=crop' },
//   { title: 'Emotional Care', description: 'Gentle handling, socialization, and comfort to reduce stress and anxiety', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&h=340&fit=crop' },
//   { title: 'Protection', description: 'Secure facility with 24/7 security to keep all animals safe', img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=500&h=340&fit=crop' },
//   { title: 'Exercise Areas', description: 'Dedicated outdoor spaces for supervised exercise and sunlight exposure', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=340&fit=crop' },
// ];

// const shelterCategories = [
//   { title: 'Injured Dogs', description: 'Dogs recovering from accidents, injuries, or surgical procedures', duration: '1-8 weeks', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=260&fit=crop', emoji: '🩹' },
//   { title: 'Sick Dogs', description: 'Dogs undergoing treatment for illnesses or infections', duration: '1-4 weeks', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=260&fit=crop', emoji: '💊' },
//   { title: 'Post-Surgery Recovery', description: 'Dogs recuperating after sterilization or other medical procedures', duration: '3-10 days', img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=260&fit=crop', emoji: '🏥' },
//   { title: 'Rescued Puppies', description: 'Orphaned or abandoned puppies needing special care until they are strong enough', duration: '2-6 weeks', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=260&fit=crop', emoji: '🐕' },
//   { title: 'Malnourished Dogs', description: 'Dogs recovering from severe malnutrition or neglect', duration: '2-6 weeks', img: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=400&h=260&fit=crop', emoji: '🍖' },
//   { title: 'Traumatized Dogs', description: 'Dogs needing time and care to recover from abuse or trauma', duration: 'Varies', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=260&fit=crop', emoji: '💝' },
// ];

// const dailyRoutine = [
//   { time: '6:00 AM', activity: 'Morning health check & medication', img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=80&h=80&fit=crop' },
//   { time: '7:00 AM', activity: 'Breakfast - nutritious meal', img: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=80&h=80&fit=crop' },
//   { time: '8:00 AM', activity: 'Kennel cleaning & fresh bedding', img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=80&h=80&fit=crop' },
//   { time: '9:00 AM', activity: 'Veterinary rounds & treatments', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=80&h=80&fit=crop' },
//   { time: '10:00 AM', activity: 'Supervised outdoor time (for able dogs)', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=80&h=80&fit=crop' },
//   { time: '12:00 PM', activity: 'Midday rest & observation', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=80&h=80&fit=crop' },
//   { time: '2:00 PM', activity: 'Afternoon meal & hydration check', img: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=80&h=80&fit=crop' },
//   { time: '4:00 PM', activity: 'Socialization & gentle exercise', img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=80&h=80&fit=crop' },
//   { time: '6:00 PM', activity: 'Evening health check & medication', img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=80&h=80&fit=crop' },
//   { time: '7:00 PM', activity: 'Dinner service', img: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=80&h=80&fit=crop' },
//   { time: '9:00 PM', activity: 'Night settling & security check', img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=80&h=80&fit=crop' },
// ];

// const shelterStats = [
//   { number: '150+', label: 'Dogs Currently in Care', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=80&h=80&fit=crop' },
//   { number: '2,500+', label: 'Dogs Sheltered Yearly', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=80&h=80&fit=crop' },
//   { number: '95%', label: 'Recovery Rate', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=80&h=80&fit=crop' },
//   { number: '24/7', label: 'Care & Monitoring', img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=80&h=80&fit=crop' },
// ];

// const galleryImages = [
//   { id: 1, title: 'Clean Kennels', category: 'Facilities', img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop' },
//   { id: 2, title: 'Feeding Time', category: 'Daily Care', img: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=600&h=400&fit=crop' },
//   { id: 3, title: 'Veterinary Care', category: 'Medical', img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&h=400&fit=crop' },
//   { id: 4, title: 'Outdoor Area', category: 'Facilities', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop' },
//   { id: 5, title: 'Recovery Ward', category: 'Medical', img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=400&fit=crop' },
//   { id: 6, title: 'Happy Recovery', category: 'Success', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop' },
// ];

// const processSteps = [
//   { step: 1, title: 'Rescue', desc: 'Dog is rescued and brought to shelter', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=200&h=200&fit=crop' },
//   { step: 2, title: 'Assessment', desc: 'Full medical evaluation by vet', img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=200&h=200&fit=crop' },
//   { step: 3, title: 'Treatment', desc: 'Medical care and treatment begins', img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=200&h=200&fit=crop' },
//   { step: 4, title: 'Recovery', desc: 'Rest, nutrition, and monitoring', img: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=200&h=200&fit=crop' },
//   { step: 5, title: 'Release', desc: 'Healthy dog returns to community', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=200&h=200&fit=crop' },
// ];

// const faqs = [
//   { q: 'How long do dogs stay at the shelter?', a: 'The length of stay depends on the dog\'s condition. Most dogs stay between 3 days to 8 weeks for recovery. Once they are healthy, they are returned to their community.' },
//   { q: 'Can I adopt a dog from your shelter?', a: 'We focus on medical care and rehabilitation of community dogs. We do not facilitate adoptions. Our goal is to treat and return dogs to their original territory.' },
//   { q: 'Do you accept surrendered pets?', a: 'No, we specifically work with community street dogs. For pet-related issues, please contact local pet shelters or rescue organizations.' },
//   { q: 'Can I volunteer at the shelter?', a: 'Yes! We welcome volunteers for various tasks including feeding, cleaning, and dog care. Please contact us to learn about volunteer opportunities.' },
//   { q: 'How is the shelter funded?', a: 'We operate entirely on donations from individuals and organizations. We do not receive any government funding. Every contribution helps us save more lives.' },
// ];

// const otherHelp = [
//   { title: 'Donate Supplies', desc: 'Dog food, blankets, medicines, cleaning supplies', img: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=80&h=80&fit=crop' },
//   { title: 'Volunteer Your Time', desc: 'Help with feeding, cleaning, and dog care', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=80&h=80&fit=crop' },
//   { title: 'Professional Services', desc: 'Veterinarians, trainers, and caregivers welcome', img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=80&h=80&fit=crop' },
//   { title: 'Spread the Word', desc: 'Share our work on social media', img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=80&h=80&fit=crop' },
// ];

// // ─── Component ───────────────────────────────────────────────────────────────

// const ShelterSafeCarePage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<'features' | 'routine' | 'categories'>('features');
//   const [openFaq, setOpenFaq] = useState<number | null>(null);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800&family=Hind:wght@400;500;600&display=swap');

//         :root {
//           --yellow: #ffd100;
//           --navy: #002b5c;
//           --navy-light: #003d85;
//           --yellow-dark: #e6bc00;
//         }

//         *, *::before, *::after { box-sizing: border-box; }

//         .sc-page {
//           font-family: 'Hind', sans-serif;
//           min-height: 100vh;
//           background: #f8f9ff;
//           color: #333;
//         }

//         .sc-page h1, .sc-page h2, .sc-page h3, .sc-page h4 {
//           font-family: 'Baloo 2', cursive;
//         }

//         .sc-container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 20px;
//         }

//         /* ── Hero ── */
//         .sc-hero {
//           background: var(--navy);
//           color: white;
//           padding: 80px 0 60px;
//           position: relative;
//           overflow: hidden;
//         }

//         .sc-hero::before {
//           content: '';
//           position: absolute;
//           top: -80px; right: -80px;
//           width: 420px; height: 420px;
//           background: var(--yellow);
//           border-radius: 50%;
//           opacity: 0.07;
//         }

//         .sc-hero::after {
//           content: '';
//           position: absolute;
//           bottom: -100px; left: -80px;
//           width: 300px; height: 300px;
//           background: var(--yellow);
//           border-radius: 50%;
//           opacity: 0.05;
//         }

//         .sc-hero-inner {
//           position: relative;
//           z-index: 1;
//           display: grid;
//           gap: 48px;
//           align-items: center;
//         }

//         @media (min-width: 1024px) {
//           .sc-hero-inner { grid-template-columns: 1fr 1fr; }
//         }

//         .sc-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           background: var(--yellow);
//           color: var(--navy);
//           padding: 8px 20px;
//           border-radius: 50px;
//           font-weight: 700;
//           font-family: 'Baloo 2', cursive;
//           font-size: 14px;
//           margin-bottom: 20px;
//         }

//         .sc-badge img {
//           width: 28px; height: 28px;
//           border-radius: 50%; object-fit: cover;
//         }

//         .sc-hero-title {
//           font-size: clamp(2.2rem, 5vw, 3.8rem);
//           font-weight: 800;
//           line-height: 1.1;
//           margin-bottom: 20px;
//         }

//         .sc-hero-title span { color: var(--yellow); }

//         .sc-hero-desc {
//           font-size: 1.05rem;
//           color: rgba(255,255,255,0.8);
//           line-height: 1.7;
//           margin-bottom: 28px;
//         }

//         .sc-hero-btns {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 14px;
//         }

//         .sc-btn-primary {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 14px 28px;
//           background: var(--yellow);
//           color: var(--navy);
//           font-family: 'Baloo 2', cursive;
//           font-weight: 700;
//           font-size: 1rem;
//           border-radius: 50px;
//           text-decoration: none;
//           transition: background 0.25s, transform 0.3s;
//         }

//         .sc-btn-primary:hover { background: var(--yellow-dark); transform: translateY(-4px); }

//         .sc-btn-secondary {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 14px 28px;
//           background: rgba(255,255,255,0.12);
//           color: white;
//           font-family: 'Baloo 2', cursive;
//           font-weight: 700;
//           font-size: 1rem;
//           border-radius: 50px;
//           text-decoration: none;
//           border: 2px solid rgba(255,255,255,0.3);
//           transition: background 0.25s, transform 0.3s;
//         }

//         .sc-btn-secondary:hover { background: rgba(255,255,255,0.25); transform: translateY(-4px); }

//         .sc-btn-primary img, .sc-btn-secondary img {
//           width: 24px; height: 24px;
//           border-radius: 50%; object-fit: cover;
//         }

//         /* Hero side visual */
//         .sc-hero-visual {
//           display: none;
//         }

//         @media (min-width: 1024px) { .sc-hero-visual { display: block; } }

//         .sc-hero-img-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 12px;
//         }

//         .sc-hero-img-grid img {
//           width: 100%; height: 160px;
//           object-fit: cover;
//           border-radius: 16px;
//           transition: transform 0.4s;
//         }

//         .sc-hero-img-grid img:hover { transform: scale(1.05); }

//         .sc-hero-img-grid img:first-child {
//           grid-column: 1 / -1;
//           height: 200px;
//         }

//         /* ── Stats ── */
//         .sc-stats {
//           background: white;
//           padding: 40px 0;
//           border-bottom: 3px solid var(--yellow);
//         }

//         .sc-stats-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 20px;
//         }

//         @media (min-width: 768px) {
//           .sc-stats-grid { grid-template-columns: repeat(4, 1fr); }
//         }

//         .sc-stat {
//           text-align: center;
//           padding: 20px;
//           border-radius: 14px;
//           transition: background 0.3s, transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
//           cursor: pointer;
//         }

//         .sc-stat:hover {
//           background: #fffbe6;
//           transform: translateY(-6px);
//         }

//         .sc-stat img {
//           width: 50px; height: 50px;
//           border-radius: 50%;
//           object-fit: cover;
//           margin: 0 auto 10px;
//           border: 3px solid var(--yellow);
//           transition: transform 0.3s;
//         }

//         .sc-stat:hover img { transform: rotate(-8deg) scale(1.1); }

//         .sc-stat .num {
//           font-family: 'Baloo 2', cursive;
//           font-size: 2.2rem;
//           font-weight: 800;
//           color: var(--navy);
//           line-height: 1;
//         }

//         .sc-stat .lbl {
//           color: #666;
//           font-size: 0.88rem;
//           margin-top: 4px;
//         }

//         /* ── Notice Banner ── */
//         .sc-notice {
//           background: var(--yellow);
//           padding: 18px 0;
//         }

//         .sc-notice-inner {
//           display: flex;
//           flex-wrap: wrap;
//           align-items: center;
//           justify-content: center;
//           gap: 14px;
//           text-align: center;
//         }

//         .sc-notice img {
//           width: 40px; height: 40px;
//           border-radius: 50%;
//           object-fit: cover;
//           border: 2px solid var(--navy);
//         }

//         .sc-notice h3 {
//           font-family: 'Baloo 2', cursive;
//           font-weight: 700;
//           color: var(--navy);
//           font-size: 1rem;
//           margin-bottom: 2px;
//         }

//         .sc-notice p {
//           color: rgba(0,43,92,0.8);
//           font-size: 0.9rem;
//         }

//         /* ── Section Label ── */
//         .sc-label {
//           display: inline-block;
//           background: var(--yellow);
//           color: var(--navy);
//           font-family: 'Baloo 2', cursive;
//           font-size: 12px;
//           font-weight: 700;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           padding: 4px 14px;
//           border-radius: 4px;
//           margin-bottom: 12px;
//         }

//         .sc-section-title {
//           font-size: clamp(1.8rem, 3.5vw, 2.6rem);
//           font-weight: 800;
//           color: var(--navy);
//           margin-bottom: 12px;
//         }

//         .sc-section-desc {
//           color: #666;
//           font-size: 1rem;
//           line-height: 1.7;
//         }

//         /* ── Tabs ── */
//         .sc-tabs-section {
//           padding: 80px 0;
//           background: #f8f9ff;
//         }

//         .sc-tab-nav {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           gap: 12px;
//           margin-bottom: 48px;
//         }

//         .sc-tab-btn {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 12px 24px;
//           border-radius: 50px;
//           font-family: 'Baloo 2', cursive;
//           font-weight: 600;
//           font-size: 0.95rem;
//           border: 2px solid transparent;
//           cursor: pointer;
//           transition: background 0.25s, color 0.25s, transform 0.3s, border-color 0.25s;
//           background: white;
//           color: #555;
//         }

//         .sc-tab-btn img {
//           width: 28px; height: 28px;
//           border-radius: 50%;
//           object-fit: cover;
//           border: 2px solid transparent;
//           transition: border-color 0.25s;
//         }

//         .sc-tab-btn.active {
//           background: var(--navy);
//           color: white;
//           border-color: var(--navy);
//         }

//         .sc-tab-btn.active img { border-color: var(--yellow); }

//         .sc-tab-btn:not(.active):hover {
//           border-color: var(--yellow);
//           color: var(--navy);
//           transform: translateY(-3px);
//         }

//         /* Features grid */
//         .sc-feat-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 22px;
//         }

//         .sc-feat-card {
//           background: white;
//           border-radius: 16px;
//           overflow: hidden;
//           box-shadow: 0 4px 20px rgba(0,43,92,0.08);
//           transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s, border-color 0.3s;
//           border-bottom: 4px solid transparent;
//           cursor: pointer;
//         }

//         .sc-feat-card:hover {
//           transform: translateY(-10px) scale(1.02);
//           box-shadow: 0 22px 50px rgba(0,43,92,0.16);
//           border-bottom-color: var(--yellow);
//         }

//         .sc-feat-img-wrap { overflow: hidden; position: relative; height: 180px; }

//         .sc-feat-img {
//           width: 100%; height: 100%;
//           object-fit: cover;
//           transition: transform 0.5s;
//         }

//         .sc-feat-card:hover .sc-feat-img { transform: scale(1.09); }

//         .sc-feat-overlay {
//           position: absolute; inset: 0;
//           background: linear-gradient(to bottom, transparent 40%, rgba(0,43,92,0.55));
//           opacity: 0;
//           transition: opacity 0.3s;
//         }

//         .sc-feat-card:hover .sc-feat-overlay { opacity: 1; }

//         .sc-feat-body { padding: 18px; }

//         .sc-feat-body h3 {
//           font-size: 1.1rem;
//           font-weight: 700;
//           color: var(--navy);
//           margin-bottom: 6px;
//         }

//         .sc-feat-body p { color: #666; font-size: 0.88rem; line-height: 1.6; }

//         /* Category cards */
//         .sc-cat-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           gap: 20px;
//         }

//         .sc-cat-card {
//           background: white;
//           border-radius: 16px;
//           overflow: hidden;
//           box-shadow: 0 4px 16px rgba(0,43,92,0.08);
//           transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s, border-color 0.3s;
//           border-top: 4px solid transparent;
//           cursor: pointer;
//         }

//         .sc-cat-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 18px 44px rgba(0,43,92,0.15);
//           border-top-color: var(--yellow);
//         }

//         .sc-cat-img-wrap { overflow: hidden; position: relative; height: 160px; }

//         .sc-cat-img {
//           width: 100%; height: 100%;
//           object-fit: cover;
//           transition: transform 0.5s;
//         }

//         .sc-cat-card:hover .sc-cat-img { transform: scale(1.08); }

//         .sc-cat-emoji {
//           position: absolute;
//           top: 12px; left: 12px;
//           font-size: 1.6rem;
//           background: var(--yellow);
//           padding: 4px 10px;
//           border-radius: 8px;
//         }

//         .sc-cat-body { padding: 18px; }

//         .sc-cat-body h3 {
//           font-weight: 700;
//           color: var(--navy);
//           font-size: 1.05rem;
//           margin-bottom: 6px;
//         }

//         .sc-cat-body p { color: #666; font-size: 0.85rem; line-height: 1.5; margin-bottom: 10px; }

//         .sc-cat-duration {
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           background: var(--yellow);
//           color: var(--navy);
//           font-size: 0.78rem;
//           font-weight: 700;
//           padding: 4px 12px;
//           border-radius: 50px;
//           font-family: 'Baloo 2', cursive;
//         }

//         /* Routine timeline */
//         .sc-timeline {
//           max-width: 680px;
//           margin: 0 auto;
//           position: relative;
//         }

//         .sc-timeline::before {
//           content: '';
//           position: absolute;
//           left: 30px; top: 0; bottom: 0;
//           width: 3px;
//           background: linear-gradient(to bottom, var(--yellow), var(--navy));
//           border-radius: 2px;
//         }

//         .sc-routine-row {
//           display: flex;
//           align-items: center;
//           gap: 18px;
//           margin-bottom: 18px;
//           position: relative;
//           z-index: 1;
//           padding: 12px 14px;
//           border-radius: 12px;
//           transition: background 0.25s, transform 0.3s;
//           cursor: pointer;
//         }

//         .sc-routine-row:hover {
//           background: #fffbe6;
//           transform: translateX(8px);
//         }

//         .sc-routine-img {
//           width: 56px; height: 56px;
//           border-radius: 50%;
//           object-fit: cover;
//           border: 3px solid var(--yellow);
//           flex-shrink: 0;
//           transition: transform 0.3s;
//           background: white;
//         }

//         .sc-routine-row:hover .sc-routine-img { transform: rotate(6deg) scale(1.08); }

//         .sc-routine-time {
//           font-family: 'Baloo 2', cursive;
//           font-weight: 700;
//           font-size: 0.85rem;
//           color: var(--navy);
//           background: var(--yellow);
//           padding: 3px 10px;
//           border-radius: 6px;
//           white-space: nowrap;
//           min-width: 72px;
//           text-align: center;
//         }

//         .sc-routine-act {
//           color: #444;
//           font-size: 0.92rem;
//           line-height: 1.4;
//         }

//         /* ── Process ── */
//         .sc-process-section {
//           padding: 80px 0;
//           background: white;
//         }

//         .sc-process-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
//           gap: 16px;
//           margin-top: 48px;
//           position: relative;
//         }

//         .sc-process-card {
//           background: #f8f9ff;
//           border-radius: 16px;
//           overflow: hidden;
//           text-align: center;
//           transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s, background 0.3s;
//           border: 2px solid transparent;
//           cursor: pointer;
//         }

//         .sc-process-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 16px 40px rgba(0,43,92,0.14);
//           background: white;
//           border-color: var(--yellow);
//         }

//         .sc-process-img-wrap { overflow: hidden; height: 120px; }

//         .sc-process-img {
//           width: 100%; height: 100%;
//           object-fit: cover;
//           transition: transform 0.5s;
//         }

//         .sc-process-card:hover .sc-process-img { transform: scale(1.1); }

//         .sc-process-body { padding: 16px; }

//         .sc-process-num {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           width: 34px; height: 34px;
//           background: var(--navy);
//           color: var(--yellow);
//           border-radius: 50%;
//           font-family: 'Baloo 2', cursive;
//           font-weight: 800;
//           font-size: 1rem;
//           margin-bottom: 8px;
//         }

//         .sc-process-body h3 {
//           font-weight: 700;
//           color: var(--navy);
//           font-size: 0.95rem;
//           margin-bottom: 4px;
//         }

//         .sc-process-body p { color: #666; font-size: 0.8rem; line-height: 1.4; }

//         /* ── Gallery ── */
//         .sc-gallery-section {
//           padding: 80px 0;
//           background: #f8f9ff;
//         }

//         .sc-gallery-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 16px;
//           margin-top: 48px;
//         }

//         @media (min-width: 768px) {
//           .sc-gallery-grid { grid-template-columns: repeat(3, 1fr); }
//         }

//         .sc-gallery-item {
//           position: relative;
//           border-radius: 14px;
//           overflow: hidden;
//           aspect-ratio: 16/10;
//           cursor: pointer;
//         }

//         .sc-gallery-item img {
//           width: 100%; height: 100%;
//           object-fit: cover;
//           transition: transform 0.5s;
//         }

//         .sc-gallery-item:hover img { transform: scale(1.1); }

//         .sc-gallery-overlay {
//           position: absolute; inset: 0;
//           background: linear-gradient(to top, rgba(0,43,92,0.8) 0%, transparent 55%);
//           opacity: 0.7;
//           transition: opacity 0.3s;
//         }

//         .sc-gallery-item:hover .sc-gallery-overlay { opacity: 1; }

//         .sc-gallery-info {
//           position: absolute;
//           bottom: 14px; left: 14px;
//           color: white;
//         }

//         .sc-gallery-info .cat {
//           font-size: 11px;
//           color: var(--yellow);
//           font-weight: 700;
//           letter-spacing: 1px;
//           text-transform: uppercase;
//         }

//         .sc-gallery-info .title {
//           font-family: 'Baloo 2', cursive;
//           font-weight: 700;
//           font-size: 1rem;
//         }

//         /* ── Support ── */
//         .sc-support-section {
//           padding: 80px 0;
//           background: var(--navy);
//           color: white;
//         }

//         .sc-support-grid {
//           display: grid;
//           gap: 48px;
//           align-items: start;
//         }

//         @media (min-width: 1024px) {
//           .sc-support-grid { grid-template-columns: 1fr 1fr; }
//         }

//         .sc-support-section .sc-section-title { color: var(--yellow); }
//         .sc-support-section .sc-section-desc { color: rgba(255,255,255,0.75); }

//         .sc-donation-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 14px;
//           margin: 24px 0 32px;
//         }

//         .sc-donation-card {
//           background: rgba(255,255,255,0.08);
//           border: 1px solid rgba(255,209,0,0.2);
//           border-radius: 12px;
//           padding: 16px;
//           transition: background 0.3s, border-color 0.3s, transform 0.3s;
//           cursor: pointer;
//         }

//         .sc-donation-card:hover {
//           background: rgba(255,209,0,0.12);
//           border-color: var(--yellow);
//           transform: translateY(-4px);
//         }

//         .sc-donation-card .amt {
//           font-family: 'Baloo 2', cursive;
//           font-size: 1.6rem;
//           font-weight: 800;
//           color: var(--yellow);
//         }

//         .sc-donation-card .desc { color: rgba(255,255,255,0.7); font-size: 0.82rem; }

//         .sc-donate-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           padding: 14px 32px;
//           background: var(--yellow);
//           color: var(--navy);
//           font-family: 'Baloo 2', cursive;
//           font-weight: 700;
//           font-size: 1.05rem;
//           border-radius: 50px;
//           text-decoration: none;
//           transition: background 0.25s, transform 0.3s;
//         }

//         .sc-donate-btn:hover { background: var(--yellow-dark); transform: translateY(-4px); }

//         .sc-donate-btn img {
//           width: 26px; height: 26px;
//           border-radius: 50%; object-fit: cover;
//         }

//         .sc-other-help {
//           background: rgba(255,255,255,0.06);
//           border: 1px solid rgba(255,209,0,0.2);
//           border-radius: 20px;
//           padding: 30px;
//         }

//         .sc-other-help h3 {
//           color: white;
//           font-size: 1.2rem;
//           margin-bottom: 20px;
//         }

//         .sc-help-row {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           padding: 12px;
//           border-radius: 10px;
//           margin-bottom: 12px;
//           border-left: 3px solid transparent;
//           transition: background 0.25s, border-color 0.25s, transform 0.25s;
//           cursor: pointer;
//         }

//         .sc-help-row:hover {
//           background: rgba(255,209,0,0.1);
//           border-left-color: var(--yellow);
//           transform: translateX(6px);
//         }

//         .sc-help-row img {
//           width: 46px; height: 46px;
//           border-radius: 50%;
//           object-fit: cover;
//           border: 2px solid var(--yellow);
//           flex-shrink: 0;
//           transition: transform 0.3s;
//         }

//         .sc-help-row:hover img { transform: scale(1.1) rotate(-5deg); }

//         .sc-help-row h4 { color: var(--yellow); font-size: 0.92rem; font-weight: 700; margin-bottom: 2px; }
//         .sc-help-row p { color: rgba(255,255,255,0.65); font-size: 0.82rem; }

//         /* ── Visit ── */
//         .sc-visit-section {
//           padding: 80px 0;
//           background: white;
//         }

//         .sc-visit-card {
//           background: #f8f9ff;
//           border-radius: 24px;
//           padding: 40px;
//           max-width: 960px;
//           margin: 0 auto;
//         }

//         .sc-visit-inner {
//           display: grid;
//           gap: 40px;
//           align-items: start;
//         }

//         @media (min-width: 1024px) {
//           .sc-visit-inner { grid-template-columns: 1fr 1fr; }
//         }

//         .sc-visit-row {
//           display: flex;
//           align-items: flex-start;
//           gap: 14px;
//           padding: 12px;
//           border-radius: 10px;
//           margin-bottom: 14px;
//           transition: background 0.25s, transform 0.25s;
//           cursor: pointer;
//         }

//         .sc-visit-row:hover {
//           background: #fffbe6;
//           transform: translateX(6px);
//         }

//         .sc-visit-row img {
//           width: 44px; height: 44px;
//           border-radius: 50%;
//           object-fit: cover;
//           border: 2px solid var(--yellow);
//           flex-shrink: 0;
//           transition: transform 0.3s;
//         }

//         .sc-visit-row:hover img { transform: scale(1.1) rotate(5deg); }

//         .sc-visit-row h4 { font-weight: 700; color: var(--navy); font-size: 0.92rem; margin-bottom: 3px; }
//         .sc-visit-row p { color: #666; font-size: 0.85rem; line-height: 1.5; }

//         .sc-visit-img-wrap {
//           border-radius: 16px;
//           overflow: hidden;
//           height: 300px;
//         }

//         .sc-visit-img-wrap img {
//           width: 100%; height: 100%;
//           object-fit: cover;
//           transition: transform 0.5s;
//         }

//         .sc-visit-img-wrap:hover img { transform: scale(1.05); }

//         /* ── FAQ ── */
//         .sc-faq-section {
//           padding: 80px 0;
//           background: #f8f9ff;
//         }

//         .sc-faq-list {
//           max-width: 760px;
//           margin: 48px auto 0;
//         }

//         .sc-faq-item {
//           background: white;
//           border-radius: 14px;
//           margin-bottom: 14px;
//           overflow: hidden;
//           box-shadow: 0 2px 12px rgba(0,43,92,0.07);
//           border-left: 4px solid transparent;
//           transition: border-color 0.3s;
//         }

//         .sc-faq-item.open { border-left-color: var(--yellow); }

//         .sc-faq-q {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 18px 20px;
//           cursor: pointer;
//           gap: 12px;
//         }

//         .sc-faq-q h3 {
//           font-weight: 700;
//           color: var(--navy);
//           font-size: 0.95rem;
//           line-height: 1.4;
//           margin: 0;
//         }

//         .sc-faq-arrow {
//           width: 30px; height: 30px;
//           min-width: 30px;
//           background: var(--yellow);
//           color: var(--navy);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-weight: 800;
//           font-size: 1.1rem;
//           transition: transform 0.3s;
//         }

//         .sc-faq-item.open .sc-faq-arrow { transform: rotate(45deg); }

//         .sc-faq-a {
//           padding: 0 20px;
//           max-height: 0;
//           overflow: hidden;
//           transition: max-height 0.4s ease, padding 0.3s;
//           color: #555;
//           font-size: 0.9rem;
//           line-height: 1.6;
//         }

//         .sc-faq-item.open .sc-faq-a {
//           max-height: 200px;
//           padding: 0 20px 18px;
//         }

//         /* ── CTA ── */
//         .sc-cta-section {
//           padding: 80px 0;
//           background: var(--yellow);
//           text-align: center;
//         }

//         .sc-cta-img {
//           width: 80px; height: 80px;
//           border-radius: 50%;
//           object-fit: cover;
//           margin: 0 auto 24px;
//           border: 4px solid var(--navy);
//           display: block;
//           animation: sc-pulse 2s infinite;
//         }

//         @keyframes sc-pulse {
//           0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,43,92,0.3); }
//           50% { transform: scale(1.08); box-shadow: 0 0 0 12px rgba(0,43,92,0); }
//         }

//         .sc-cta-section h2 {
//           font-size: clamp(1.8rem, 4vw, 2.8rem);
//           font-weight: 800;
//           color: var(--navy);
//           margin-bottom: 14px;
//         }

//         .sc-cta-section p {
//           color: rgba(0,43,92,0.75);
//           font-size: 1.05rem;
//           max-width: 560px;
//           margin: 0 auto 36px;
//           line-height: 1.7;
//         }

//         .sc-cta-btns {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 16px;
//           justify-content: center;
//         }

//         .sc-cta-btn-dark {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           padding: 16px 36px;
//           background: var(--navy);
//           color: white;
//           font-family: 'Baloo 2', cursive;
//           font-size: 1.1rem;
//           font-weight: 700;
//           border-radius: 50px;
//           text-decoration: none;
//           transition: background 0.25s, transform 0.3s;
//         }

//         .sc-cta-btn-dark:hover { background: var(--navy-light); transform: translateY(-4px); }

//         .sc-cta-btn-white {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           padding: 16px 36px;
//           background: white;
//           color: var(--navy);
//           font-family: 'Baloo 2', cursive;
//           font-size: 1.1rem;
//           font-weight: 700;
//           border-radius: 50px;
//           text-decoration: none;
//           border: 2px solid var(--navy);
//           transition: background 0.25s, transform 0.3s;
//         }

//         .sc-cta-btn-white:hover { background: var(--navy); color: white; transform: translateY(-4px); }
//       `}</style>

//       <div className="sc-page">

//         {/* ── Hero ── */}
//         <section className="sc-hero">
//           <div className="sc-container">
//             <div className="sc-hero-inner">
//               <div>
//                 <div className="sc-badge">
//                   <img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=60&h=60&fit=crop" alt="" />
//                   Temporary Care &amp; Recovery
//                 </div>
//                 <h1 className="sc-hero-title">Shelter &amp; <span>Safe Care</span></h1>
//                 <p className="sc-hero-desc">
//                   We provide temporary shelter for injured, sick, and recovering dogs. Our facility
//                   offers a safe, clean, and caring environment where dogs can heal and regain strength
//                   before returning to their community.
//                 </p>
//                 <div className="sc-hero-btns">
//                   <a href="tel:+919876543210" className="sc-btn-primary">
//                     <img src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=60&h=60&fit=crop" alt="" />
//                     Report a Dog in Need
//                   </a>
//                   <a href="#visit" className="sc-btn-secondary">
//                     <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=60&h=60&fit=crop" alt="" />
//                     Virtual Tour
//                   </a>
//                 </div>
//               </div>
//               <div className="sc-hero-visual">
//                 <div className="sc-hero-img-grid">
//                   <img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=700&h=400&fit=crop" alt="Shelter dogs" />
//                   <img src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=350&h=320&fit=crop" alt="Vet care" />
//                   <img src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=350&h=320&fit=crop" alt="Feeding" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── Stats ── */}
//         <section className="sc-stats">
//           <div className="sc-container">
//             <div className="sc-stats-grid">
//               {shelterStats.map((s, i) => (
//                 <div key={i} className="sc-stat">
//                   <img src={s.img} alt={s.label} />
//                   <div className="num">{s.number}</div>
//                   <div className="lbl">{s.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ── Notice ── */}
//         <section className="sc-notice">
//           <div className="sc-container">
//             <div className="sc-notice-inner">
//               <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=80&h=80&fit=crop" alt="" />
//               <div>
//                 <h3>Important: Our Shelter is for Recovery Only</h3>
//                 <p>We provide temporary shelter for medical care and recovery. Once dogs are healthy, they return to their community. We do not offer permanent boarding or adoption services.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── Tabs ── */}
//         <section className="sc-tabs-section">
//           <div className="sc-container">
//             <div className="sc-tab-nav">
//               {[
//                 { key: 'features', label: 'Our Facilities', img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=60&h=60&fit=crop' },
//                 { key: 'categories', label: 'Dogs We Shelter', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=60&h=60&fit=crop' },
//                 { key: 'routine', label: 'Daily Routine', img: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=60&h=60&fit=crop' },
//               ].map((t) => (
//                 <button
//                   key={t.key}
//                   onClick={() => setActiveTab(t.key as typeof activeTab)}
//                   className={`sc-tab-btn ${activeTab === t.key ? 'active' : ''}`}
//                 >
//                   <img src={t.img} alt="" />
//                   {t.label}
//                 </button>
//               ))}
//             </div>

//             {activeTab === 'features' && (
//               <div>
//                 <div style={{ textAlign: 'center', marginBottom: 40 }}>
//                   <span className="sc-label">Facilities</span>
//                   <h2 className="sc-section-title">Our Shelter Facilities</h2>
//                   <p className="sc-section-desc">Our shelter is designed to provide the best possible care environment for recovering dogs.</p>
//                 </div>
//                 <div className="sc-feat-grid">
//                   {shelterFeatures.map((f, i) => (
//                     <div key={i} className="sc-feat-card">
//                       <div className="sc-feat-img-wrap">
//                         <img src={f.img} alt={f.title} className="sc-feat-img" />
//                         <div className="sc-feat-overlay" />
//                       </div>
//                       <div className="sc-feat-body">
//                         <h3>{f.title}</h3>
//                         <p>{f.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeTab === 'categories' && (
//               <div>
//                 <div style={{ textAlign: 'center', marginBottom: 40 }}>
//                   <span className="sc-label">Who We Help</span>
//                   <h2 className="sc-section-title">Dogs We Provide Shelter For</h2>
//                   <p className="sc-section-desc">We offer temporary shelter and care for various categories of dogs in need.</p>
//                 </div>
//                 <div className="sc-cat-grid">
//                   {shelterCategories.map((c, i) => (
//                     <div key={i} className="sc-cat-card">
//                       <div className="sc-cat-img-wrap">
//                         <img src={c.img} alt={c.title} className="sc-cat-img" />
//                         <span className="sc-cat-emoji">{c.emoji}</span>
//                       </div>
//                       <div className="sc-cat-body">
//                         <h3>{c.title}</h3>
//                         <p>{c.description}</p>
//                         <span className="sc-cat-duration">⏱ Typical stay: {c.duration}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeTab === 'routine' && (
//               <div>
//                 <div style={{ textAlign: 'center', marginBottom: 40 }}>
//                   <span className="sc-label">Daily Care</span>
//                   <h2 className="sc-section-title">A Day at Our Shelter</h2>
//                   <p className="sc-section-desc">Every dog in our care receives consistent, loving attention throughout the day.</p>
//                 </div>
//                 <div className="sc-timeline">
//                   {dailyRoutine.map((row, i) => (
//                     <div key={i} className="sc-routine-row">
//                       <img src={row.img} alt="" className="sc-routine-img" />
//                       <span className="sc-routine-time">{row.time}</span>
//                       <span className="sc-routine-act">{row.activity}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* ── Process ── */}
//         <section className="sc-process-section">
//           <div className="sc-container">
//             <div style={{ textAlign: 'center' }}>
//               <span className="sc-label">How It Works</span>
//               <h2 className="sc-section-title">How Our Shelter Process Works</h2>
//               <p className="sc-section-desc">From rescue to recovery — every step is designed for the dog's wellbeing.</p>
//             </div>
//             <div className="sc-process-grid">
//               {processSteps.map((item, i) => (
//                 <div key={i} className="sc-process-card">
//                   <div className="sc-process-img-wrap">
//                     <img src={item.img} alt={item.title} className="sc-process-img" />
//                   </div>
//                   <div className="sc-process-body">
//                     <div className="sc-process-num">{item.step}</div>
//                     <h3>{item.title}</h3>
//                     <p>{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ── Gallery ── */}
//         <section className="sc-gallery-section">
//           <div className="sc-container">
//             <div style={{ textAlign: 'center' }}>
//               <span className="sc-label">Inside Our Shelter</span>
//               <h2 className="sc-section-title">Take a Look Around</h2>
//               <p className="sc-section-desc">A glimpse at our facilities and the care we provide every day.</p>
//             </div>
//             <div className="sc-gallery-grid">
//               {galleryImages.map((img) => (
//                 <div key={img.id} className="sc-gallery-item">
//                   <img src={img.img} alt={img.title} />
//                   <div className="sc-gallery-overlay" />
//                   <div className="sc-gallery-info">
//                     <div className="cat">{img.category}</div>
//                     <div className="title">{img.title}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ── Support ── */}
//         <section className="sc-support-section">
//           <div className="sc-container">
//             <div className="sc-support-grid">
//               <div>
//                 <span className="sc-label">Support Us</span>
//                 <h2 className="sc-section-title">Support Our Shelter</h2>
//                 <p className="sc-section-desc">Running a shelter requires significant resources. Your support helps us provide food, medicine, and care for hundreds of dogs every month.</p>
//                 <div className="sc-donation-grid">
//                   {[{ amt: '₹500', desc: 'Feeds a dog for 1 week' }, { amt: '₹1,000', desc: 'Medicine for 1 dog' }, { amt: '₹2,500', desc: 'Full recovery care' }, { amt: '₹5,000', desc: 'Sponsor a kennel' }].map((d, i) => (
//                     <div key={i} className="sc-donation-card">
//                       <div className="amt">{d.amt}</div>
//                       <div className="desc">{d.desc}</div>
//                     </div>
//                   ))}
//                 </div>
//                 <a href="/donate" className="sc-donate-btn">
//                   <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=60&h=60&fit=crop" alt="" />
//                   Donate Now
//                 </a>
//               </div>

//               <div className="sc-other-help">
//                 <h3>Other Ways to Help</h3>
//                 {otherHelp.map((h, i) => (
//                   <div key={i} className="sc-help-row">
//                     <img src={h.img} alt={h.title} />
//                     <div>
//                       <h4>{h.title}</h4>
//                       <p>{h.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── Visit ── */}
//         <section id="visit" className="sc-visit-section">
//           <div className="sc-container">
//             <div className="sc-visit-card">
//               <div style={{ textAlign: 'center', marginBottom: 36 }}>
//                 <span className="sc-label">Come See Us</span>
//                 <h2 className="sc-section-title">Visit Our Shelter</h2>
//                 <p className="sc-section-desc">We welcome visitors who want to see our work firsthand. Please schedule a visit in advance.</p>
//               </div>
//               <div className="sc-visit-inner">
//                 <div>
//                   {[
//                     { label: 'Main Shelter', info: '123 Dog Welfare Street, Surana Nagar, Rajasthan - 302001', img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=80&h=80&fit=crop' },
//                     { label: 'Visiting Hours', info: 'Monday - Saturday: 10 AM - 4 PM\nSunday: By appointment only', img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=80&h=80&fit=crop' },
//                     { label: 'Schedule a Visit', info: 'Call: +919999999999\nEmail: shelter@suranaNGO.org', img: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=80&h=80&fit=crop' },
//                   ].map((row, i) => (
//                     <div key={i} className="sc-visit-row">
//                       <img src={row.img} alt={row.label} />
//                       <div>
//                         <h4>{row.label}</h4>
//                         <p style={{ whiteSpace: 'pre-line' }}>{row.info}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="sc-visit-img-wrap">
//                   <img src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=600&h=400&fit=crop" alt="Shelter visit" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ── FAQ ── */}
//         <section className="sc-faq-section">
//           <div className="sc-container">
//             <div style={{ textAlign: 'center' }}>
//               <span className="sc-label">FAQ</span>
//               <h2 className="sc-section-title">Frequently Asked Questions</h2>
//             </div>
//             <div className="sc-faq-list">
//               {faqs.map((faq, i) => (
//                 <div key={i} className={`sc-faq-item ${openFaq === i ? 'open' : ''}`}>
//                   <div className="sc-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
//                     <h3>{faq.q}</h3>
//                     <span className="sc-faq-arrow">+</span>
//                   </div>
//                   <div className="sc-faq-a">{faq.a}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ── CTA ── */}
//         <section className="sc-cta-section">
//           <div className="sc-container">
//             <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=160&h=160&fit=crop" alt="Dog in need" className="sc-cta-img" />
//             <h2>Report a Dog in Need</h2>
//             <p>If you see an injured, sick, or distressed dog, please contact us immediately. Your call could save a life.</p>
//             <div className="sc-cta-btns">
//               <a href="tel:+919876543210" className="sc-cta-btn-dark">📞 Call: +919999999999</a>
//               <a href="/emergency-contact" className="sc-cta-btn-white">⭐ Report Online</a>
//             </div>
//           </div>
//         </section>

//       </div>
//     </>
//   );
// };

// export default ShelterSafeCarePage;



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