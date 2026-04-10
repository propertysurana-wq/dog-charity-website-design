// /**
//  * Our Mission & Vision Page
//  * Explains the organization's mission, vision, values, and guiding principles
//  */

// import React from 'react';
// import { Heart, Target, Eye, Shield, Users, Scale, Lightbulb, HandHeart, Globe, CheckCircle, Star, Award, Compass } from 'lucide-react';

// // Core values
// const coreValues = [
//   {
//     icon: Heart,
//     title: 'Compassion',
//     description: 'We treat every animal with kindness, empathy, and respect. Every dog deserves care and protection regardless of their condition.',
//     color: 'bg-red-500',
//   },
//   {
//     icon: Shield,
//     title: 'Integrity',
//     description: 'We operate with complete transparency and honesty. Our actions always align with our stated mission and ethical standards.',
//     color: 'bg-blue-500',
//   },
//   {
//     icon: Scale,
//     title: 'Justice',
//     description: 'We advocate for the legal rights of animals and work within the framework of law to protect community dogs.',
//     color: 'bg-purple-500',
//   },
//   {
//     icon: Users,
//     title: 'Community',
//     description: 'We believe in working together with communities to create peaceful coexistence between humans and dogs.',
//     color: 'bg-green-500',
//   },
//   {
//     icon: Lightbulb,
//     title: 'Education',
//     description: 'We empower communities through knowledge about animal welfare, responsible behavior, and legal awareness.',
//     color: 'bg-yellow-500',
//   },
//   {
//     icon: HandHeart,
//     title: 'Service',
//     description: 'We are dedicated to serving both animals and people, creating safer and more compassionate communities.',
//     color: 'bg-teal-500',
//   },
// ];

// // Guiding principles
// const principles = [
//   {
//     title: 'Humane Solutions Only',
//     description: 'We never support or engage in any cruel, inhumane, or illegal methods. All our interventions prioritize the welfare of animals.',
//   },
//   {
//     title: 'No Forced Relocation',
//     description: 'We do not forcibly relocate dogs from their territory. Instead, we work to resolve conflicts through education and proper management.',
//   },
//   {
//     title: 'Community Partnership',
//     description: 'We work with communities, not against them. Sustainable change comes through cooperation and mutual understanding.',
//   },
//   {
//     title: 'Legal Compliance',
//     description: 'All our activities comply with Indian animal welfare laws including the Prevention of Cruelty to Animals Act and Animal Birth Control Rules.',
//   },
//   {
//     title: 'Transparency',
//     description: 'We maintain open records and regularly report our activities, finances, and impact to stakeholders and the public.',
//   },
//   {
//     title: 'Continuous Improvement',
//     description: 'We constantly learn, adapt, and improve our methods based on experience, research, and best practices.',
//   },
// ];

// // Strategic goals
// const strategicGoals = [
//   {
//     year: '2024',
//     goals: [
//       'Vaccinate 60,000 dogs across Rajasthan',
//       'Establish 2 new rescue response units',
//       'Train 100 community volunteers',
//       'Launch school awareness program in 50 schools',
//     ],
//   },
//   {
//     year: '2025',
//     goals: [
//       'Achieve 80% vaccination coverage in service areas',
//       'Expand operations to 3 new districts',
//       'Build dedicated veterinary hospital',
//       'Create mobile sterilization clinic',
//     ],
//   },
//   {
//     year: '2030',
//     goals: [
//       'Eliminate rabies deaths in our service areas',
//       'Establish model animal welfare district',
//       'Train 1000+ community caregivers',
//       'Become state-level resource organization',
//     ],
//   },
// ];

// const MissionVisionPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 py-16 md:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium text-white mb-6">
//             <Compass className="w-4 h-4" />
//             Our Guiding Light
//           </div>
//           <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
//             Our Mission & Vision
//           </h1>
//           <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto">
//             We are guided by a clear mission and vision that drives every action we take. 
//             Our work is rooted in compassion, integrity, and a deep commitment to creating 
//             a world where dogs and humans coexist peacefully.
//           </p>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="order-2 lg:order-1">
//               <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 md:p-12">
//                 <div className="bg-white rounded-2xl p-8 shadow-xl">
//                   <Target className="w-16 h-16 text-yellow-500 mb-6" />
//                   <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
//                   <p className="text-lg text-gray-700 leading-relaxed">
//                     To provide compassionate care, medical treatment, and protection to community dogs 
//                     while promoting peaceful coexistence between humans and animals through education, 
//                     advocacy, and community engagement.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="order-1 lg:order-2">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">What This Means</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-4">
//                   <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
//                   <div>
//                     <p className="font-semibold text-gray-900">Compassionate Care</p>
//                     <p className="text-gray-600">Every dog we encounter receives kind, professional care based on their individual needs</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
//                   <div>
//                     <p className="font-semibold text-gray-900">Medical Treatment</p>
//                     <p className="text-gray-600">We provide emergency rescue, veterinary care, vaccination, and rehabilitation</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
//                   <div>
//                     <p className="font-semibold text-gray-900">Protection</p>
//                     <p className="text-gray-600">We advocate for dogs&apos; legal rights and protect them from cruelty and harm</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
//                   <div>
//                     <p className="font-semibold text-gray-900">Community Engagement</p>
//                     <p className="text-gray-600">We work with people to resolve conflicts and build understanding</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Vision Section */}
//       <section className="py-16 bg-gray-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h3 className="text-2xl font-bold mb-6">Our Dream for the Future</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-4">
//                   <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
//                   <div>
//                     <p className="font-semibold">Rabies-Free Communities</p>
//                     <p className="text-gray-400">Zero rabies deaths in our service areas through comprehensive vaccination</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
//                   <div>
//                     <p className="font-semibold">Compassionate Society</p>
//                     <p className="text-gray-400">A society where animals are treated with respect and kindness by all</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
//                   <div>
//                     <p className="font-semibold">Zero Cruelty</p>
//                     <p className="text-gray-400">End to animal abuse through education, awareness, and enforcement</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <Star className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
//                   <div>
//                     <p className="font-semibold">Peaceful Coexistence</p>
//                     <p className="text-gray-400">Harmonious living between humans and community dogs</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 md:p-12">
//                 <div className="bg-white rounded-2xl p-8 shadow-xl text-gray-900">
//                   <Eye className="w-16 h-16 text-indigo-500 mb-6" />
//                   <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
//                   <p className="text-lg text-gray-700 leading-relaxed">
//                     A world where every community dog lives a healthy, safe, and dignified life, 
//                     and where humans and animals share spaces with mutual respect, understanding, 
//                     and compassion.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Our Core Values
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               These values guide every decision we make and every action we take
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {coreValues.map((value, index) => {
//               const IconComponent = value.icon;
//               return (
//                 <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
//                   <div className={`w-14 h-14 ${value.color} rounded-xl flex items-center justify-center mb-4`}>
//                     <IconComponent className="w-7 h-7 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
//                   <p className="text-gray-600">{value.description}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Guiding Principles */}
//       <section className="py-16 bg-yellow-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Our Guiding Principles
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Non-negotiable standards that define how we work
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {principles.map((principle, index) => (
//               <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
//                 <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mb-4 text-lg font-bold text-gray-900">
//                   {index + 1}
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">{principle.title}</h3>
//                 <p className="text-gray-600 text-sm">{principle.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why We Focus on Dogs */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                 Why We Focus Exclusively on Dogs
//               </h2>
//               <p className="text-lg text-gray-600 mb-6">
//                 While all animals deserve care and protection, we have chosen to focus exclusively 
//                 on community dogs. This specialization allows us to:
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-4">
//                   <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
//                     <CheckCircle className="w-5 h-5 text-indigo-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Build Deep Expertise</p>
//                     <p className="text-gray-600">Our team has specialized knowledge in canine behavior, health, and welfare</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
//                     <CheckCircle className="w-5 h-5 text-indigo-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Address Critical Need</p>
//                     <p className="text-gray-600">India has 35+ million street dogs - a massive population needing focused attention</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
//                     <CheckCircle className="w-5 h-5 text-indigo-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Public Health Impact</p>
//                     <p className="text-gray-600">Dogs are the primary source of rabies - our work directly saves human lives</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
//                     <CheckCircle className="w-5 h-5 text-indigo-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">Maximize Impact</p>
//                     <p className="text-gray-600">By focusing our resources, we can help more dogs more effectively</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-indigo-50 rounded-3xl p-8">
//               <div className="text-center">
//                 <Globe className="w-20 h-20 text-indigo-500 mx-auto mb-6" />
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">India&apos;s Street Dog Population</h3>
//                 <p className="text-5xl font-bold text-indigo-600 mb-2">35+ Million</p>
//                 <p className="text-gray-600 mb-6">community dogs need care and protection</p>
//                 <div className="grid grid-cols-2 gap-4 text-left">
//                   <div className="bg-white rounded-xl p-4">
//                     <p className="text-2xl font-bold text-red-500">20,000</p>
//                     <p className="text-sm text-gray-600">Rabies deaths per year</p>
//                   </div>
//                   <div className="bg-white rounded-xl p-4">
//                     <p className="text-2xl font-bold text-green-500">100%</p>
//                     <p className="text-sm text-gray-600">Preventable with action</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Strategic Goals */}
//       <section className="py-16 bg-gray-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Our Strategic Goals
//             </h2>
//             <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//               Clear targets that guide our growth and measure our success
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {strategicGoals.map((yearGoal, index) => (
//               <div key={index} className="bg-gray-800 rounded-2xl p-6">
//                 <div className="flex items-center gap-3 mb-6">
//                   <Award className="w-8 h-8 text-yellow-400" />
//                   <h3 className="text-2xl font-bold">{yearGoal.year}</h3>
//                 </div>
//                 <ul className="space-y-3">
//                   {yearGoal.goals.map((goal, i) => (
//                     <li key={i} className="flex items-start gap-3">
//                       <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
//                       <span className="text-gray-300">{goal}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Commitment */}
//       <section className="py-16 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 md:p-12 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//               Our Commitment to You
//             </h2>
//             <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
//               We promise to remain true to our mission, transparent in our operations, 
//               and accountable for every rupee donated and every action taken. 
//               Your trust is our most valuable asset.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
//               <div className="bg-white rounded-xl p-6">
//                 <Shield className="w-10 h-10 text-yellow-500 mb-4" />
//                 <h3 className="font-bold text-gray-900 mb-2">100% Ethical</h3>
//                 <p className="text-gray-600 text-sm">All our methods are humane, legal, and ethical</p>
//               </div>
//               <div className="bg-white rounded-xl p-6">
//                 <Eye className="w-10 h-10 text-yellow-500 mb-4" />
//                 <h3 className="font-bold text-gray-900 mb-2">Full Transparency</h3>
//                 <p className="text-gray-600 text-sm">Open books, regular reports, and clear communication</p>
//               </div>
//               <div className="bg-white rounded-xl p-6">
//                 <Heart className="w-10 h-10 text-yellow-500 mb-4" />
//                 <h3 className="font-bold text-gray-900 mb-2">Animal First</h3>
//                 <p className="text-gray-600 text-sm">Every decision prioritizes animal welfare</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-indigo-600 text-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Join Our Mission
//           </h2>
//           <p className="text-lg text-indigo-100 mb-8">
//             Help us create a world where every community dog lives a healthy, safe, and dignified life. 
//             Together, we can make a difference.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="/donate"
//               className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors"
//             >
//               <Heart className="w-6 h-6" />
//               Support Our Work
//             </a>
//             <a
//               href="/contact-us"
//               className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors"
//             >
//               <Users className="w-6 h-6" />
//               Get Involved
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MissionVisionPage;









import React, { useEffect, useRef, useState } from 'react';
import {
  Heart, Target, Eye, Shield, Users, Scale,
  Lightbulb, HandHeart, Globe, CheckCircle,
  Star, Award, Compass, ArrowRight, ChevronRight
} from 'lucide-react';

// ─── useReveal hook ────────────────────────────────────────────────────────────
function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ─── useCountUp hook ───────────────────────────────────────────────────────────
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let st = null;
    const step = ts => {
      if (!st) st = ts;
      const p = Math.min((ts - st) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ─── DATA ──────────────────────────────────────────────────────────────────────
const coreValues = [
  { icon: Heart,     title: 'Compassion', description: 'We treat every animal with kindness, empathy, and respect. Every dog deserves care and protection regardless of their condition.', accent: '#f43f5e' },
  { icon: Shield,    title: 'Integrity',  description: 'We operate with complete transparency and honesty. Our actions always align with our stated mission and ethical standards.', accent: '#3b82f6' },
  { icon: Scale,     title: 'Justice',    description: 'We advocate for the legal rights of animals and work within the framework of law to protect community dogs.', accent: '#8b5cf6' },
  { icon: Users,     title: 'Community',  description: 'We believe in working together with communities to create peaceful coexistence between humans and dogs.', accent: '#10b981' },
  { icon: Lightbulb, title: 'Education',  description: 'We empower communities through knowledge about animal welfare, responsible behavior, and legal awareness.', accent: '#ffd100' },
  { icon: HandHeart, title: 'Service',    description: 'We are dedicated to serving both animals and people, creating safer and more compassionate communities.', accent: '#0891b2' },
];

const principles = [
  { title: 'Humane Solutions Only',    description: 'We never support or engage in any cruel, inhumane, or illegal methods. All our interventions prioritize the welfare of animals.' },
  { title: 'No Forced Relocation',     description: 'We do not forcibly relocate dogs from their territory. Instead, we work to resolve conflicts through education and proper management.' },
  { title: 'Community Partnership',    description: 'We work with communities, not against them. Sustainable change comes through cooperation and mutual understanding.' },
  { title: 'Legal Compliance',         description: 'All our activities comply with Indian animal welfare laws including the Prevention of Cruelty to Animals Act and Animal Birth Control Rules.' },
  { title: 'Transparency',             description: 'We maintain open records and regularly report our activities, finances, and impact to stakeholders and the public.' },
  { title: 'Continuous Improvement',   description: 'We constantly learn, adapt, and improve our methods based on experience, research, and best practices.' },
];

const strategicGoals = [
  { year: '2026', color: '#ffd100', textColor: '#002b5c', goals: ['Establish a reliable on-ground response system for injured and distressed community dogs', 'Support anti-rabies vaccination and basic medical care in selected local areas', 'Build a trained volunteer and rescue network', 'Create awareness in societies about humane dog–human coexistence'] },
  { year: '2027 ', color: '#002b5c', textColor: '#ffd100', goals: ['Expand vaccination and sterilization support in more neighborhoods', 'Improve emergency response time for injured dogs', 'Partner with local veterinarians and authorities', 'Develop temporary shelter support for critical cases'] },
  { year: 'Long-Term Vision', color: '#f97316', textColor: '#ffffff', goals: ['Reduce dog-related conflicts through humane, lawful solutions', 'Promote responsible community care for dogs', 'Create safer environments for both dogs and societies', 'Build a sustainable, transparent dog welfare organization'] },
];

const missionPoints = [
  { title: 'Compassionate Care', desc: 'Every dog we assist is treated with care, patience, and respect, regardless of age, condition, or location.' },
  { title: 'Medical & Veterinary Support',  desc: 'We provide emergency aid, surgery assistance, vaccination, and recovery care through qualified veterinary support' },
  { title: 'Protection from Harm',         desc: 'We actively intervene in cases of cruelty, injury, abandonment, or illegal relocation to protect dogs from harm.' },
  { title: 'On-Ground Action', desc: 'Our team responds directly to reported cases, conducts vaccination drives, and monitors dogs during recovery.' },
];

const visionPoints = [
  { title: 'Action-Focused', desc: 'It clearly explains how we work, including humane solutions, no forced relocation, and strict legal compliance.' },
  { title: 'More Relevant for Dog-Problem Resolution NGOs',  desc: 'Societies, RWAs, and authorities can clearly understand our rules, process, and working method' },
  { title: 'Provides Legal & Safety Clarity',           desc: 'Principles such as “No Forced Relocation” and “Legal Compliance” help build trust and transparency.' },
  { title: 'Reduces Misunderstanding',   desc: 'It clearly communicates that we do not promote adoption or selling of dogs, only welfare and problem resolution.' },
];

const commitmentCards = [
  { icon: Shield,  title: '100% Ethical',       desc: 'All our methods are humane, legal, and ethical' },
  { icon: Eye,     title: 'Full Transparency',   desc: 'Open books, regular reports, and clear communication' },
  { icon: Heart,   title: 'Animal First',        desc: 'Every decision prioritizes animal welfare' },
];

const whyDogs = [
  { title: 'Build Deep Expertise',  desc: 'By working only with dogs, we develop a deeper understanding of dog behavior, health needs, injuries, and welfare challenges' },
  { title: 'Address Critical Need', desc: 'Community dogs face daily risks such as accidents, disease, cruelty, and neglect. Our focused approach allows us to respond where help is most urgently needed.' },
  { title: 'Protect Dog Welfare',  desc: 'Vaccination, medical care, and shelter support help prevent suffering and improve the overall health of community dogs' },
  { title: 'Maximize Impact',       desc: 'A focused mission allows us to deliver consistent, measurable, and meaningful outcomes for dog welfare' },
];

// ─── SUB-COMPONENTS ────────────────────────────────────────────────────────────

const ValueCard = ({ icon: Icon, title, description, accent, index }) => (
  <div
    className="value-card group relative rounded-3xl p-8 bg-white border-2 border-slate-100 overflow-hidden cursor-default"
    style={{ '--ac': accent }}
  >
    <div className="vc-bg" style={{ background: accent }} />
    <div className="vc-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-all duration-500"
      style={{ background: `${accent}18`, border: `2px solid ${accent}35` }}>
      <Icon size={28} style={{ color: accent }} />
    </div>
    <h3 className="text-xl font-black text-[#002b5c] mb-3 relative z-10 transition-colors duration-400"
      style={{ fontFamily: "'Playfair Display',serif" }}>{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed font-light relative z-10 transition-colors duration-400">{description}</p>
    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-x-2 group-hover:translate-x-0 z-10">
      <ChevronRight size={18} style={{ color: accent }} />
    </div>
  </div>
);

const PrincipleCard = ({ title, description, index }) => (
  <div className="principle-card group bg-white rounded-3xl p-7 shadow-md border-2 border-slate-100 relative overflow-hidden">
    <div className="pc-bar" />
    <div className="w-11 h-11 bg-[#ffd100] rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-400">
      <span className="font-black text-[#002b5c] text-base" style={{ fontFamily: "'Playfair Display',serif" }}>{index + 1}</span>
    </div>
    <h3 className="text-lg font-black text-[#002b5c] mb-2" style={{ fontFamily: "'Playfair Display',serif" }}>{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed font-light">{description}</p>
  </div>
);

const GoalCard = ({ year, color, textColor, goals, index }) => (
  <div className="goal-card group relative rounded-3xl overflow-hidden shadow-xl" style={{ animationDelay: `${index * 120}ms` }}>
    {/* Header */}
    <div className="flex items-center gap-3 px-8 pt-8 pb-6" style={{ background: color }}>
      <Award size={26} style={{ color: textColor }} className="flex-shrink-0" />
      <span className="font-black text-3xl" style={{ color: textColor, fontFamily: "'Playfair Display',serif" }}>{year}</span>
    </div>
    {/* Body */}
    <div className="p-8 bg-[#002b5c] flex-1">
      <ul className="space-y-4">
        {goals.map((g, i) => (
          <li key={i} className="flex items-start gap-3 group/item">
            <CheckCircle size={16} className="text-[#ffd100] flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
            <span className="text-blue-200 text-sm font-light leading-relaxed">{g}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// ─── STAT COUNTER ─────────────────────────────────────────────────────────────
const CountStat = ({ num, suffix, label, started }) => {
  const c = useCountUp(num, 1800, started);
  return (
    <div className="text-center">
      <div className="text-5xl font-black text-[#ffd100] leading-none" style={{ fontFamily: "'Playfair Display',serif" }}>
        {c.toLocaleString()}{suffix}
      </div>
      <div className="text-blue-300 text-xs uppercase tracking-widest font-medium mt-2">{label}</div>
    </div>
  );
};

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
const MissionVisionPage = () => {
  const heroRef    = useReveal(0.05);
  const mvRef      = useReveal();
  const visionRef  = useReveal();
  const valuesRef  = useReveal();
  const prinRef    = useReveal();
  const whyRef     = useReveal();
  const goalsRef   = useReveal();
  const commitRef  = useReveal();
  const ctaRef     = useReveal();

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── GLOBAL STYLES ─────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        /* ── Reveal ── */
        .rev     { opacity:0; transform:translateY(36px); transition:opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1); }
        .rev.in  { opacity:1; transform:translateY(0); }
        .rev-l   { opacity:0; transform:translateX(-44px); transition:opacity 0.85s ease, transform 0.85s ease; }
        .rev-l.in{ opacity:1; transform:translateX(0); }
        .rev-r   { opacity:0; transform:translateX(44px);  transition:opacity 0.85s ease, transform 0.85s ease; }
        .rev-r.in{ opacity:1; transform:translateX(0); }

        /* stagger children */
        .stag > * { opacity:0; transform:translateY(20px); transition:opacity 0.55s ease, transform 0.55s ease; }
        .stag.in > *:nth-child(1){opacity:1;transform:none;transition-delay:0ms}
        .stag.in > *:nth-child(2){opacity:1;transform:none;transition-delay:80ms}
        .stag.in > *:nth-child(3){opacity:1;transform:none;transition-delay:160ms}
        .stag.in > *:nth-child(4){opacity:1;transform:none;transition-delay:240ms}
        .stag.in > *:nth-child(5){opacity:1;transform:none;transition-delay:320ms}
        .stag.in > *:nth-child(6){opacity:1;transform:none;transition-delay:400ms}

        /* ── Hero paws ── */
        @keyframes floatpaw{0%,100%{transform:translateY(0) rotate(-8deg)}50%{transform:translateY(-16px) rotate(8deg)}}
        .paw-float{animation:floatpaw 5s ease-in-out infinite;}

        /* ── Dot bg ── */
        .dot-bg{background-image:radial-gradient(circle,rgba(0,43,92,0.07) 1px,transparent 1px);background-size:26px 26px;}

        /* ── Value cards ── */
        .value-card{transition:transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.45s ease, border-color 0.3s ease;}
        .value-card:hover{transform:translateY(-10px);box-shadow:0 28px 56px rgba(0,43,92,0.13);border-color:var(--ac,#ffd100);}
        .vc-bg{position:absolute;inset:0;opacity:0;transition:opacity 0.4s ease;border-radius:inherit;}
        .value-card:hover .vc-bg{opacity:0.055;}
        .vc-icon{transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1);}
        .value-card:hover .vc-icon{transform:scale(1.12) rotate(-6deg);}

        /* ── Principle cards ── */
        .principle-card{transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease, border-color 0.3s ease;}
        .principle-card:hover{transform:translateY(-8px);box-shadow:0 24px 50px rgba(0,43,92,0.12);border-color:#ffd100;}
        .pc-bar{position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#ffd100,#f97316);transform:scaleX(0);transform-origin:left;transition:transform 0.5s ease;border-radius:3px 3px 0 0;}
        .principle-card:hover .pc-bar{transform:scaleX(1);}

        /* ── Goal cards ── */
        .goal-card{transition:transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.45s ease;}
        .goal-card:hover{transform:translateY(-10px);box-shadow:0 32px 64px rgba(0,43,92,0.25);}

        /* ── Mission / Vision boxes ── */
        .mv-box{transition:transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.45s ease;}
        .mv-box:hover{transform:translateY(-8px) scale(1.01);box-shadow:0 30px 60px rgba(0,0,0,0.14);}

        /* ── Check list rows ── */
        .check-row{display:flex;align-items:flex-start;gap:16px;padding:14px 16px;border-radius:16px;transition:background 0.3s ease, transform 0.3s ease;}
        .check-row:hover{background:rgba(0,43,92,0.04);transform:translateX(6px);}

        /* ── Commitment cards ── */
        .commit-card{transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease;}
        .commit-card:hover{transform:translateY(-8px);box-shadow:0 24px 50px rgba(0,43,92,0.14);}
        .commit-icon{transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease;}
        .commit-card:hover .commit-icon{transform:scale(1.15) rotate(-6deg);}

        /* ── Stat box ── */
        .stat-box{background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);backdrop-filter:blur(10px);border-radius:24px;padding:28px;transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease, border-color 0.3s ease;position:relative;overflow:hidden;}
        .stat-box:hover{transform:translateY(-8px) scale(1.03);box-shadow:0 24px 50px rgba(255,209,0,0.2);border-color:rgba(255,209,0,0.45);}
        .stat-shine{position:absolute;top:-50%;left:-60%;width:40%;height:200%;background:linear-gradient(105deg,transparent,rgba(255,255,255,0.09),transparent);transform:skewX(-15deg);transition:left 0.8s ease;pointer-events:none;}
        .stat-box:hover .stat-shine{left:130%;}

        /* ── CTA buttons ── */
        .btn-gold{position:relative;overflow:hidden;background:#ffd100;color:#002b5c;transition:transform 0.25s ease, box-shadow 0.25s ease;}
        .btn-gold::after{content:'';position:absolute;inset:0;background:linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.25) 50%,transparent 60%);background-size:200% 100%;background-position:200% 0;transition:background-position 0.5s ease;}
        .btn-gold:hover{transform:translateY(-3px);box-shadow:0 14px 36px rgba(255,209,0,0.4);}
        .btn-gold:hover::after{background-position:-200% 0;}
        .btn-white{transition:all 0.3s ease;}
        .btn-white:hover{background:#002b5c;color:white;transform:translateY(-3px);box-shadow:0 14px 36px rgba(0,43,92,0.3);}

        /* ── Globe card ── */
        .globe-card{transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1);}
        .globe-card:hover{transform:translateY(-8px);}

        /* ── Section label pill ── */
        .pill-orange{display:inline-block;color:#f97316;font-weight:900;font-size:0.7rem;text-transform:uppercase;letter-spacing:.12em;padding:4px 12px;background:#fff7ed;border-radius:999px;border:1px solid #fed7aa;margin-bottom:12px;}
        .pill-gold{display:inline-block;color:#ffd100;font-weight:900;font-size:0.7rem;text-transform:uppercase;letter-spacing:.12em;padding:4px 12px;background:rgba(255,209,0,0.12);border-radius:999px;border:1px solid rgba(255,209,0,0.25);margin-bottom:12px;}
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
     <section
  ref={heroRef.ref}
  className="relative overflow-hidden"
  style={{ background: 'linear-gradient(140deg, #001628 0%, #002b5c 60%, #003875 100%)', minHeight: '400px' }}
>
  {/* Orbs */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute top-0 right-0 w-72 h-72 sm:w-[600px] sm:h-[600px] rounded-full opacity-15"
      style={{ background: 'radial-gradient(circle, #ffd100, transparent)', filter: 'blur(90px)' }} />
    <div className="absolute bottom-0 left-0 w-56 h-56 sm:w-80 sm:h-80 rounded-full opacity-10"
      style={{ background: 'radial-gradient(circle, #3b82f6, transparent)', filter: 'blur(60px)' }} />
    <div className="absolute inset-0 opacity-[0.025]"
      style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '55px 55px' }} />
    {['8%','72%','45%','88%','25%','60%'].map((left, i) => (
      <div key={i} className="paw-float absolute select-none text-4xl text-white/[0.04]"
        style={{ top: `${8+i*15}%`, left, animationDelay: `${i*0.8}s` }}>🐾</div>
    ))}
  </div>

  {/* Content */}
  <div
    className={`relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-14 py-12 sm:py-16 md:py-20 flex flex-col items-center justify-center text-center rev ${heroRef.visible ? 'in' : ''}`}
    style={{ minHeight: '400px' }}
  >
    {/* Badge */}
    <div className="inline-flex items-center gap-2 text-[#ffd100] font-black text-xs uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full border border-[#ffd100]/25 bg-[#ffd100]/10">
      <Compass size={12} /> Our Guiding Light
    </div>

    {/* Heading */}
    <h1
      className="font-black text-white leading-tight mb-4 max-w-2xl"
      style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem, 5.5vw, 4rem)', lineHeight: 1.08 }}
    >
      Our Mission &<br />
      <span style={{ color: '#ffd100', fontStyle: 'italic' }}>Vision</span>
    </h1>

    {/* Subtext */}
    <p className="text-blue-200 text-sm sm:text-base leading-relaxed font-light max-w-xl mb-8 px-2">
      Since 2010, Surana Dog NGO has worked exclusively for community dogs, providing medical care,
      vaccination, injury treatment, shelter support, and humane problem resolution.
    </p>

    {/* Stats */}
    {/* <div
      className={`w-full max-w-xl sm:max-w-2xl grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 stag ${heroRef.visible ? 'in' : ''}`}
      style={{ transitionDelay: '300ms' }}
    >
      {[
        { num: 5000, suffix: '+', label: 'Dogs Helped' },
        { num: 1000, suffix: '+', label: 'Vaccinations' },
        { num: 1,    suffix: '',  label: 'Centres' },
        { num: 6,    suffix: '+', label: 'Volunteers' },
      ].map((s, i) => (
        <div key={i} className="bg-white/5 backdrop-blur-sm px-4 py-3 flex flex-col items-center justify-center">
          <CountStat {...s} started={heroRef.visible} />
        </div>
      ))}
    </div> */}
  </div>

  {/* Wave */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg viewBox="0 0 1440 55" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
      style={{ display: 'block', width: '100%', height: '45px' }}>
      <path d="M0,28 C480,55 960,0 1440,28 L1440,55 L0,55 Z" fill="#ffffff" />
    </svg>
  </div>
</section>

      {/* ── MISSION ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative" ref={mvRef.ref}>
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Card */}
            <div className={`rev-l ${mvRef.visible ? 'in' : ''}`}>
              <div className="mv-box rounded-3xl overflow-hidden shadow-2xl">
                {/* Gold top */}
                <div className="px-10 pt-10 pb-8" style={{ background: 'linear-gradient(135deg,#ffd100,#ffec6e)' }}>
                  <div className="w-16 h-16 bg-[#002b5c] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Target size={30} className="text-[#ffd100]" />
                  </div>
                  <h2 className="font-black text-[#002b5c] mb-4" style={{ fontFamily: "'Playfair Display',serif", fontSize: '2rem' }}>Our Mission</h2>
                  <p className="text-[#002b5c]/75 text-base leading-relaxed font-light">
                    Our mission is to safeguard community dogs by providing timely medical treatment, vaccination, injury care, and shelter support. We work to prevent cruelty, neglect, and illegal displacement while ensuring dogs live healthy lives in their natural territories.
                  </p>
                </div>
                {/* Navy bottom accent */}
                <div className="h-2" style={{ background: 'linear-gradient(90deg,#002b5c,#003875)' }} />
              </div>
            </div>
            {/* Checklist */}
            <div className={`rev-r ${mvRef.visible ? 'in' : ''}`}>
              <div className="pill-orange">What This Means</div>
              <h3 className="font-black text-[#002b5c] mb-8 mt-1" style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.9rem' }}>
                How We <span style={{ fontStyle: 'italic', color: '#f97316' }}>Live It Daily</span>
              </h3>
              <div className="space-y-2">
                {missionPoints.map((p, i) => (
                  <div key={i} className="check-row">
                    <div className="w-9 h-9 rounded-xl bg-[#002b5c] flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={18} className="text-[#ffd100]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#002b5c] text-sm">{p.title}</p>
                      <p className="text-gray-400 text-sm font-light mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION ───────────────────────────────────────────────────────── */}
      <section className="py-24 dot-bg bg-slate-50 relative" ref={visionRef.ref}>
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Checklist */}
            <div className={`rev-l ${visionRef.visible ? 'in' : ''}`}>
              <div className="pill-orange">Our Dream</div>
              <h3 className="font-black text-[#002b5c] mb-8 mt-1" style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.9rem' }}>
                The Future We're <span style={{ fontStyle: 'italic', color: '#f97316' }}>Building</span>
              </h3>
              <div className="space-y-2">
                {visionPoints.map((p, i) => (
                  <div key={i} className="check-row">
                    <div className="w-9 h-9 rounded-xl bg-[#ffd100] flex items-center justify-center flex-shrink-0">
                      <Star size={16} fill="#002b5c" className="text-[#002b5c]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#002b5c] text-sm">{p.title}</p>
                      <p className="text-gray-400 text-sm font-light mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Card */}
            <div className={`rev-r ${visionRef.visible ? 'in' : ''}`}>
              <div className="mv-box rounded-3xl overflow-hidden shadow-2xl">
                <div className="px-10 pt-10 pb-8" style={{ background: 'linear-gradient(135deg,#002b5c,#001628)' }}>
                  <div className="w-16 h-16 bg-[#ffd100] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#ffd100]/30">
                    <Eye size={30} className="text-[#002b5c]" />
                  </div>
                  <h2 className="font-black text-white mb-4" style={{ fontFamily: "'Playfair Display',serif", fontSize: '2rem' }}>Our Guiding Principles</h2>
                  <p className="text-blue-200 text-base leading-relaxed font-light">
                    Our vision is a world where every community dog is healthy, protected, and treated with compassion. We strive for a future where dogs live free from injury, disease, cruelty, and neglect through consistent care and responsible action.
                  </p>
                </div>
                <div className="h-2" style={{ background: 'linear-gradient(90deg,#ffd100,#f97316)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────────────────────────── */}
      {/* <section className="py-24 bg-white relative" ref={valuesRef.ref}>
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className={`text-center mb-16 rev ${valuesRef.visible ? 'in' : ''}`}>
            <div className="pill-orange">Our Values</div>
            <h2 className="font-black text-[#002b5c] mt-1" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4vw,3rem)' }}>
              Our Core <span style={{ fontStyle: 'italic', color: '#f97316' }}>Values</span>
            </h2>
            <p className="text-gray-400 mt-3 font-light max-w-xl mx-auto text-sm">These values guide every decision we make and every action we take</p>
          </div>
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 stag ${valuesRef.visible ? 'in' : ''}`}>
            {coreValues.map((v, i) => <ValueCard key={i} index={i} {...v} />)}
          </div>
        </div>
      </section> */}

      {/* ── GUIDING PRINCIPLES ───────────────────────────────────────────── */}
      <section className="py-24 dot-bg  relative" ref={prinRef.ref}>
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className={`text-center mb-16 rev ${prinRef.visible ? 'in' : ''}`}>
            <div className="pill-orange">Non-Negotiables</div>
            <h2 className="font-black text-[#002b5c] mt-1" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4vw,3rem)' }}>
              Our Guiding <span style={{ fontStyle: 'italic', color: '#f97316' }}>Principles</span>
            </h2>
            <p className="text-gray-400 mt-3 font-light max-w-xl mx-auto text-sm">Non-negotiable standards that define how we work</p>
          </div>
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 stag ${prinRef.visible ? 'in' : ''}`}>
            {principles.map((p, i) => <PrincipleCard key={i} index={i} {...p} />)}
          </div>
        </div>
      </section>

      {/* ── WHY DOGS ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative" ref={whyRef.ref}>
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`rev-l ${whyRef.visible ? 'in' : ''}`}>
              <div className="pill-orange">Our Focus</div>
              <h2 className="font-black text-[#002b5c] mb-5 mt-1 leading-tight" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.9rem,3.5vw,2.8rem)' }}>
                Why We Focus<br />
                <span style={{ fontStyle: 'italic', color: '#f97316' }}>Exclusively on Dogs</span>
              </h2>
              <p className="text-gray-500 text-base font-light mb-8 leading-relaxed">Surana Dog NGO works exclusively for community dogs, ensuring focused care, quick response, and effective, humane solutions with long-term impact</p>
              <div className="space-y-2">
                {whyDogs.map((w, i) => (
                  <div key={i} className="check-row">
                    <div className="w-9 h-9 rounded-xl bg-[#002b5c]/8 border-2 border-[#002b5c]/15 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={17} className="text-[#002b5c]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#002b5c] text-sm">{w.title}</p>
                      <p className="text-gray-400 text-sm font-light mt-0.5">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`rev-r ${whyRef.visible ? 'in' : ''}`}>
              <div className="globe-card rounded-3xl overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(135deg, #002b5c, #001628)', border: '1px solid rgba(255,209,0,0.2)' }}>
                <div className="p-10 text-center">
                  <div className="w-20 h-20 bg-[#ffd100] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[#ffd100]/30">
                    <Globe size={38} className="text-[#002b5c]" />
                  </div>
                  <h3 className="font-black text-white mb-3" style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.5rem' }}>India's Street Dog Population</h3>
                  <div className="text-6xl font-black text-[#ffd100] mb-2" style={{ fontFamily: "'Playfair Display',serif" }}>35M+</div>
                  <p className="text-blue-300 text-sm font-light mb-8">community dogs need care and protection</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                      <div className="text-3xl font-black text-rose-400 mb-1" style={{ fontFamily: "'Playfair Display',serif" }}>20K</div>
                      <p className="text-blue-300 text-xs font-light">Rabies deaths per year</p>
                    </div>
                    <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                      <div className="text-3xl font-black text-emerald-400 mb-1" style={{ fontFamily: "'Playfair Display',serif" }}>100%</div>
                      <p className="text-blue-300 text-xs font-light">Preventable with action</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC GOALS ──────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" ref={goalsRef.ref} style={{ background: 'linear-gradient(140deg,#001628 0%,#002b5c 100%)' }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full opacity-12" style={{ background: 'radial-gradient(circle,#ffd100,transparent)', filter: 'blur(100px)' }} />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '55px 55px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-14 relative z-10">
          <div className={`text-center mb-16 rev ${goalsRef.visible ? 'in' : ''}`}>
            <div className="pill-gold">Roadmap</div>
            <h2 className="font-black text-white mt-1" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4vw,3rem)' }}>
              Our Strategic <span style={{ color: '#ffd100', fontStyle: 'italic' }}>Goals</span>
            </h2>
            <p className="text-blue-300 mt-3 font-light max-w-xl mx-auto text-sm">Clear targets that guide our growth and measure our success</p>
          </div>
          <div className={`grid md:grid-cols-3 gap-6 stag ${goalsRef.visible ? 'in' : ''}`}>
            {strategicGoals.map((g, i) => <GoalCard key={i} index={i} {...g} />)}
          </div>
        </div>
      </section>

      {/* ── OUR COMMITMENT ───────────────────────────────────────────────── */}
      {/* <section className="py-24 relative overflow-hidden" ref={commitRef.ref} style={{ background: 'linear-gradient(135deg,#ffd100 0%,#ffec6e 50%,#ffd100 100%)' }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle,#002b5c 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-20" style={{ background: 'radial-gradient(circle,#002b5c,transparent)', filter: 'blur(60px)' }} />
        </div>
        <div className="max-w-5xl mx-auto px-6 md:px-14 relative z-10">
          <div className={`text-center mb-14 rev ${commitRef.visible ? 'in' : ''}`}>
            <h2 className="font-black text-[#002b5c]" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2.2rem,4.5vw,3.3rem)', lineHeight: 1.1 }}>
              Our Commitment <span style={{ fontStyle: 'italic' }}>to You</span>
            </h2>
            <p className="text-[#002b5c]/70 text-base font-light mt-4 max-w-xl mx-auto leading-relaxed">
              We promise to remain true to our mission, transparent in our operations, and accountable for every rupee donated and every action taken.
            </p>
          </div>
          <div className={`grid md:grid-cols-3 gap-6 stag ${commitRef.visible ? 'in' : ''}`}>
            {commitmentCards.map((c, i) => (
              <div key={i} className="commit-card bg-white rounded-3xl p-8 shadow-xl">
                <div className="commit-icon w-14 h-14 bg-[#002b5c] rounded-2xl flex items-center justify-center mb-5 shadow-lg">
                  <c.icon size={26} className="text-[#ffd100]" />
                </div>
                <h3 className="font-black text-[#002b5c] text-lg mb-2" style={{ fontFamily: "'Playfair Display',serif" }}>{c.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" ref={ctaRef.ref} style={{ background: 'linear-gradient(135deg,#ffd100 0%,#ffec6e 50%,#ffd100 100%)' }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle,#ffd100,transparent)', filter: 'blur(100px)' }} />
        </div>
        <div className={`max-w-3xl mx-auto px-6 text-center relative z-10 rev ${ctaRef.visible ? 'in' : ''}`}>
          <h2 className="font-black text-white mb-5" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2.3rem,5vw,3.6rem)', lineHeight: 1.1 }}>
            Join Our <span style={{ color: '#002b5c', fontStyle: 'italic' }}>Mission</span>
          </h2>
          <p className="text-blue-200 text-lg font-light mb-10 max-w-xl mx-auto leading-relaxed">
            Help us create a world where every community dog lives a healthy, safe, and dignified life. Together, we can make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate" className="btn-gold inline-flex items-center justify-center gap-2 px-9 py-5 rounded-2xl font-bold text-base shadow-2xl shadow-[#ffd100]/30">
              <Heart size={18} fill="#002b5c" /> Support Our Work
            </a>
            <a href="/contact-us" className="btn-white inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white px-9 py-5 rounded-2xl font-bold text-base">
              <Users size={18} /> Get Involved
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MissionVisionPage;