// /**
//  * Dog Problem Resolution Page - Suranango for Dogs
//  * Handles complaints related to community dogs with humane solutions
//  */

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   AlertTriangle, 
//   Phone, 
//   CheckCircle, 
//   XCircle,
//   Shield,
//   MessageCircle,
//   Eye,
//   Heart,
//   ArrowLeft,
//   FileText
// } from 'lucide-react';

// const DogProblemResolutionPage: React.FC = () => {
//   // Common problems we address
//   const commonProblems = [
//     {
//       title: 'Fear of Dogs',
//       description: 'Many people feel scared of community dogs. We help by assessing dog behavior and educating residents about how to safely interact with dogs.',
//       icon: '😨'
//     },
//     {
//       title: 'Aggressive Behavior',
//       description: 'If a dog shows aggression, we investigate the cause (territorial, fear-based, or illness) and implement appropriate behavioral interventions.',
//       icon: '🐕'
//     },
//     {
//       title: 'Excessive Barking',
//       description: 'Barking often has a reason—hunger, territorial behavior, or distress. We identify the cause and work with the community to address it.',
//       icon: '🔊'
//     },
//     {
//       title: 'Puppies in Danger',
//       description: 'Newborn puppies are vulnerable. We ensure they are safe, healthy, and protected while educating communities about caring for them.',
//       icon: '🐶'
//     },
//     {
//       title: 'Dog Packs',
//       description: 'Groups of dogs can be concerning for residents. We manage pack dynamics through sterilization programs and behavioral assessment.',
//       icon: '🐕‍🦺'
//     },
//     {
//       title: 'Dogs Near Schools/Markets',
//       description: 'We work with local authorities and communities to ensure dogs and humans can coexist safely in public spaces.',
//       icon: '🏫'
//     }
//   ];

//   // Our resolution process
//   const resolutionProcess = [
//     {
//       step: 1,
//       title: 'Receive Complaint',
//       description: 'We receive calls or messages about dog-related concerns from residents, societies, or local authorities.'
//     },
//     {
//       step: 2,
//       title: 'On-Site Assessment',
//       description: 'Our trained team visits the location to assess the situation, observe dog behavior, and understand the concern.'
//     },
//     {
//       step: 3,
//       title: 'Identify Root Cause',
//       description: 'We determine why the behavior is occurring—whether it is due to hunger, territory, illness, or other factors.'
//     },
//     {
//       step: 4,
//       title: 'Develop Solution',
//       description: 'Based on assessment, we create a humane solution that addresses the concern without harming the dog.'
//     },
//     {
//       step: 5,
//       title: 'Implement & Educate',
//       description: 'We implement the solution and educate the community about dog behavior and how to prevent future issues.'
//     },
//     {
//       step: 6,
//       title: 'Follow-Up',
//       description: 'We follow up to ensure the solution is working and make adjustments if needed.'
//     }
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 text-white py-16 lg:py-24">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920')] bg-cover bg-center opacity-10"></div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <Link 
//             to="/our-work" 
//             className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             Back to Our Work
//           </Link>
          
//           <div className="max-w-4xl">
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
//                 <AlertTriangle className="w-8 h-8 text-orange-600" />
//               </div>
//               <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold">
//                 Our Work
//               </span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//               Dog Problem Resolution
//             </h1>
//             <p className="text-xl text-orange-100 leading-relaxed max-w-3xl">
//               We handle complaints related to community dogs with humane, on-site assessment 
//               and peaceful solutions. Our goal is to resolve conflicts between dogs and humans 
//               without causing harm to either.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Key Message */}
//       <section className="py-8 bg-navy-900 text-white">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
//             <Shield className="w-10 h-10 text-yellow-400 flex-shrink-0" />
//             <p className="text-lg font-medium">
//               <span className="text-yellow-400">Important:</span> We never forcibly relocate dogs. 
//               Community dogs have a legal right to live in their territory. Our solutions are always 
//               humane and lawful.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Common Problems Section */}
//       <section className="py-16 lg:py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Problems We Address</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
//               Common Dog-Related Concerns
//             </h2>
//             <p className="text-gray-600 text-lg">
//               We understand that living with community dogs can sometimes be challenging. 
//               Here are the common concerns we help resolve.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
//             {commonProblems.map((problem, index) => (
//               <div 
//                 key={index}
//                 className="bg-orange-50 rounded-xl p-6 border border-orange-100 hover:shadow-lg transition-shadow"
//               >
//                 <span className="text-4xl mb-4 block">{problem.icon}</span>
//                 <h3 className="text-xl font-bold text-navy-900 mb-2">{problem.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{problem.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Approach Section */}
//       <section className="py-16 lg:py-24 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Our Approach</span>
//               <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6">
//                 Humane & Peaceful Solutions
//               </h2>
//               <div className="space-y-4 text-gray-600 leading-relaxed">
//                 <p>
//                   When we receive a complaint about a community dog, we do not simply remove 
//                   the dog. That would be both illegal and ineffective—new dogs would quickly 
//                   take over the territory.
//                 </p>
//                 <p>
//                   Instead, we take a thoughtful, humane approach that addresses the root cause 
//                   of the problem while respecting the rights of both the community and the dogs.
//                 </p>
//                 <p>
//                   Our trained team visits the location, observes the dog's behavior, talks to 
//                   residents, and develops a solution that works for everyone.
//                 </p>
//               </div>

//               <div className="mt-8 space-y-4">
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
//                   <div>
//                     <h4 className="font-semibold text-navy-900">On-Site Professional Assessment</h4>
//                     <p className="text-gray-600 text-sm">Our trained team evaluates the situation in person</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
//                   <div>
//                     <h4 className="font-semibold text-navy-900">Root Cause Analysis</h4>
//                     <p className="text-gray-600 text-sm">We identify why the problem is occurring</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
//                   <div>
//                     <h4 className="font-semibold text-navy-900">Community Education</h4>
//                     <p className="text-gray-600 text-sm">We teach residents how to coexist safely with dogs</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
//                   <div>
//                     <h4 className="font-semibold text-navy-900">Follow-Up Support</h4>
//                     <p className="text-gray-600 text-sm">We ensure the solution continues to work</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl shadow-xl p-8">
//               <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center gap-2">
//                 <XCircle className="w-6 h-6 text-red-500" />
//                 What We Do NOT Do
//               </h3>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
//                   <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
//                   <p className="text-gray-700">
//                     <strong>Forcibly relocate dogs:</strong> Moving dogs to another area is illegal 
//                     and does not solve the problem.
//                   </p>
//                 </div>
//                 <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
//                   <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
//                   <p className="text-gray-700">
//                     <strong>Use cruel methods:</strong> We never use poison, traps, or any form 
//                     of cruelty.
//                   </p>
//                 </div>
//                 <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
//                   <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
//                   <p className="text-gray-700">
//                     <strong>Ignore resident concerns:</strong> We take every complaint seriously 
//                     and work to find a solution.
//                   </p>
//                 </div>
//                 <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
//                   <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
//                   <p className="text-gray-700">
//                     <strong>Abandon dogs after assessment:</strong> We follow through until the 
//                     problem is resolved.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Resolution Process */}
//       <section className="py-16 lg:py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
//               How We Resolve Dog Problems
//             </h2>
//             <p className="text-gray-600 text-lg">
//               Our systematic approach ensures every concern is addressed thoroughly and humanely.
//             </p>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {resolutionProcess.map((item) => (
//                 <div 
//                   key={item.step}
//                   className="bg-gray-50 rounded-xl p-6 relative"
//                 >
//                   <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
//                     {item.step}
//                   </div>
//                   <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Tips Section */}
//       <section className="py-16 lg:py-24 bg-orange-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-12">
//               <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Helpful Tips</span>
//               <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
//                 Living Safely with Community Dogs
//               </h2>
//             </div>

//             <div className="grid md:grid-cols-2 gap-8">
//               <div className="bg-white rounded-xl p-6 shadow-md">
//                 <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
//                   <Eye className="w-6 h-6 text-orange-500" />
//                   Understanding Dog Behavior
//                 </h3>
//                 <ul className="space-y-3 text-gray-700">
//                   <li className="flex items-start gap-2">
//                     <span className="text-orange-500">•</span>
//                     Dogs bark to communicate—not always as aggression
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="text-orange-500">•</span>
//                     Running away triggers chase instinct—stay calm instead
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="text-orange-500">•</span>
//                     Most dogs are territorial, not aggressive
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="text-orange-500">•</span>
//                     Dogs can sense fear—stay relaxed and confident
//                   </li>
//                 </ul>
//               </div>

//               <div className="bg-white rounded-xl p-6 shadow-md">
//                 <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
//                   <Heart className="w-6 h-6 text-orange-500" />
//                   How You Can Help
//                 </h3>
//                 <ul className="space-y-3 text-gray-700">
//                   <li className="flex items-start gap-2">
//                     <span className="text-orange-500">•</span>
//                     Provide water and food if possible
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="text-orange-500">•</span>
//                     Report injured dogs to us immediately
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="text-orange-500">•</span>
//                     Never throw stones or chase dogs away
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span className="text-orange-500">•</span>
//                     Educate children about safe behavior around dogs
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-16 lg:py-20 bg-navy-900 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <div className="max-w-3xl mx-auto">
//             <MessageCircle className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Having a Dog-Related Issue?
//             </h2>
//             <p className="text-gray-300 text-lg mb-8">
//               Contact us and our team will visit your location to assess the situation 
//               and provide a humane solution.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a 
//                 href="tel:+919876543210"
//                 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 text-navy-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors"
//               >
//                 <Phone className="w-5 h-5" />
//                 +919999999999
//               </a>
//               <Link 
//                 to="/contact"
//                 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/30"
//               >
//                 <FileText className="w-5 h-5" />
//                 Submit a Complaint
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DogProblemResolutionPage;








import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, CheckCircle, XCircle, Shield,
  MessageCircle, ArrowRight, ArrowLeft, FileText, ChevronRight
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

// ─── DATA ──────────────────────────────────────────────────────────────────────






const commonProblems = [
  {
    title: "Injured Street Dogs",
    description: "We rescue injured or sick community dogs and provide immediate medical treatment and recovery support.",
     img: '/image/Rescueefforts.png',
  },
  {
    title: "Vaccination Support",
    description: "We conduct anti-rabies and health vaccination drives to prevent disease and ensure public safety.",
     img: '/image/Vaccination.jpeg',
  },
  {
    title: "Excessive Barking Complaints",
    description: "Our team assesses the cause of barking and works on humane behavioral and environmental solutions.",
     img: '/image/bonkdog.png',
  },
  {
    title: "Aggressive Behavior",
    description: "We investigate aggression issues and take necessary steps like medical checkups or supervision.",
     img: '/image/dogsandneighborhood.png',
  },
  {
    title: "Abandonment of Pet Dogs",
   description: "Rising cases of pets being left on the streets.",
     img: '/image/Straydogs.png',
  },
  {
    title: "Community Safety Concerns",
    description: "If residents feel unsafe, we visit the area and provide responsible and legal solutions.",
     img: '/image/Volunteering.jpeg',
  }
];

const resolutionProcess = [
  { step: 1, title: 'Receive Complaint',   description: 'We receive calls or messages about dog-related concerns from residents, societies, or local authorities.',    img: 'https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?w=300&h=200&fit=crop' },
  { step: 2, title: 'On-Site Assessment',  description: 'Our trained team visits the location to assess the situation, observe dog behavior, and understand the concern.', img: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=300&h=200&fit=crop' },
  { step: 3, title: 'Identify Root Cause', description: 'We determine why the behavior is occurring—whether it is due to hunger, territory, illness, or other factors.',   img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=300&h=200&fit=crop' },
  { step: 4, title: 'Develop Solution',    description: 'Based on assessment, we create a humane solution that addresses the concern without harming the dog.',           img: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=300&h=200&fit=crop' },
  { step: 5, title: 'Implement & Educate', description: 'We implement the solution and educate the community about dog behavior and how to prevent future issues.',       img: 'https://images.unsplash.com/photo-1516374954344-23b4f4fad6b3?w=300&h=200&fit=crop' },
  { step: 6, title: 'Follow-Up',           description: 'We follow up to ensure the solution is working and make adjustments if needed.',                                 img: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?w=300&h=200&fit=crop' },
];

const approachChecks = [
  {
    title: "On-Site Assessment",
    desc: "Our team visits the location to understand the issue before taking action."
  },
  {
    title: "Vaccination & Health Check",
    desc: "We conduct anti-rabies vaccination and basic health support for community dogs."
  },
  {
    title: "Injury & Emergency Care",
    desc: "Injured or sick dogs are rescued and provided immediate medical treatment."
  },
  {
    title: "Shelter & Recovery Support",
    desc: "We provide temporary shelter and follow-up care until full recovery."
  }
];

const doNotDo = [
 {
    title: "Illegal Relocation",
    desc: "Community dogs are protected by law and cannot be forcibly removed from their territory."
  },
  {
    title: "Cruel Methods",
    desc: "We strictly avoid poison, harmful traps, or any form of cruelty."
  },
  {
    title: "Ignoring Complaints",
    desc: "Every society concern is assessed and addressed responsibly."
  },
  {
    title: "Abandoning Cases",
    desc: "We follow through until the issue is properly resolved."
  }
];

const behaviorTips = [
  'Dogs bark as a form of communication and territory protection',
  'Sudden running or shouting may trigger defensive reactions',
  'Vaccinated and monitored dogs are generally safe in their area',
  'Most aggression is caused by fear, injury, or disturbance',
];

const helpTips = [
  'Contact Surana Dog NGO for vaccination or emergency support',
  'Allow our team to assess before taking any action',
  'Encourage peaceful coexistence in your society',
  'Help spread awareness about humane animal care',
];

// ─── SUB-COMPONENTS ────────────────────────────────────────────────────────────

const ProblemCard = ({
  title,
  description,
  img,
  index,
}: {
  title: string;
  description: string;
  img: string;
  index: number;
}) => (
  <div className="problem-card group rounded-3xl overflow-hidden shadow-md border-2 border-slate-100 bg-white" style={{ animationDelay: `${index * 80}ms` }}>
    {/* Image top */}
    <div className="relative overflow-hidden" style={{ height: '200px' }}>
      <img src={img} alt={title} className="w-full h-full object-cover prob-img transition-transform duration-700" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#002b5c]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      {/* Number badge */}
      <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#ffd100] flex items-center justify-center shadow-lg">
        <span className="text-[#002b5c] font-black text-sm">{index + 1}</span>
      </div>
    </div>
    {/* Content */}
    <div className="p-7 relative">
      <div className="pc-bar" />
      <h3 className="text-lg font-black text-[#002b5c] mb-3" style={{ fontFamily: "'Playfair Display',serif" }}>{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed font-light">{description}</p>
      <div className="mt-4 flex items-center gap-1 text-[#f97316] font-bold text-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
        Learn more <ChevronRight size={13} />
      </div>
    </div>
  </div>
);

const ProcessCard = ({
  step,
  title,
  description,
  img,
}: {
  step: string | number;
  title: string;
  description: string;
  img: string;
}) => (
  <div className="process-card group rounded-3xl overflow-hidden shadow-md border-2 border-slate-100 bg-white">
    {/* Image */}
    <div className="relative overflow-hidden" style={{ height: '160px' }}>
      <img src={img} alt={title} className="w-full h-full object-cover proc-img transition-transform duration-700" loading="lazy" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,43,92,0.7) 0%, transparent 60%)' }} />
      {/* Step number */}
      <div className="absolute bottom-4 left-5 flex items-center gap-2">
        <div className="w-9 h-9 rounded-xl bg-[#ffd100] flex items-center justify-center shadow-lg">
          <span className="text-[#002b5c] font-black">{step}</span>
        </div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-base font-black text-[#002b5c] mb-2" style={{ fontFamily: "'Playfair Display',serif" }}>{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed font-light">{description}</p>
    </div>
  </div>
);

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────────
const DogProblemResolutionPage = () => {
  const heroRef    = useReveal(0.05);
  const problemsRef = useReveal();
  const approachRef = useReveal();
  const processRef  = useReveal();
  const tipsRef     = useReveal();
  const contactRef  = useReveal();

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        /* ── Reveal ── */
        .rev      { opacity:0; transform:translateY(36px); transition:opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1); }
        .rev.in   { opacity:1; transform:translateY(0); }
        .rev-l    { opacity:0; transform:translateX(-44px); transition:opacity 0.85s ease, transform 0.85s ease; }
        .rev-l.in { opacity:1; transform:translateX(0); }
        .rev-r    { opacity:0; transform:translateX(44px);  transition:opacity 0.85s ease, transform 0.85s ease; }
        .rev-r.in { opacity:1; transform:translateX(0); }

        /* stagger */
        .stag > * { opacity:0; transform:translateY(20px); transition:opacity 0.55s ease, transform 0.55s ease; }
        .stag.in > *:nth-child(1){opacity:1;transform:none;transition-delay:0ms}
        .stag.in > *:nth-child(2){opacity:1;transform:none;transition-delay:80ms}
        .stag.in > *:nth-child(3){opacity:1;transform:none;transition-delay:160ms}
        .stag.in > *:nth-child(4){opacity:1;transform:none;transition-delay:240ms}
        .stag.in > *:nth-child(5){opacity:1;transform:none;transition-delay:320ms}
        .stag.in > *:nth-child(6){opacity:1;transform:none;transition-delay:400ms}

        /* ── Hero paws ── */
        @keyframes floatpaw { 0%,100%{transform:translateY(0) rotate(-8deg)} 50%{transform:translateY(-16px) rotate(8deg)} }
        .paw-float { animation:floatpaw 5s ease-in-out infinite; }

        /* ── Problem cards ── */
        .problem-card { transition:transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.45s ease, border-color 0.3s ease; }
        .problem-card:hover { transform:translateY(-10px); box-shadow:0 28px 56px rgba(0,43,92,0.13); border-color:#ffd100; }
        .problem-card:hover .prob-img { transform:scale(1.08); }
        .pc-bar { position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,#ffd100,#f97316); transform:scaleX(0); transform-origin:left; transition:transform 0.5s ease; border-radius:3px 3px 0 0; }
        .problem-card:hover .pc-bar { transform:scaleX(1); }

        /* ── Process cards ── */
        .process-card { transition:transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.45s ease, border-color 0.3s ease; }
        .process-card:hover { transform:translateY(-10px); box-shadow:0 28px 56px rgba(0,43,92,0.14); border-color:#ffd100; }
        .process-card:hover .proc-img { transform:scale(1.08); }

        /* ── Approach check rows ── */
        .check-row { display:flex; align-items:flex-start; gap:14px; padding:14px 16px; border-radius:16px; transition:background 0.3s ease, transform 0.3s ease; cursor:default; }
        .check-row:hover { background:rgba(0,43,92,0.04); transform:translateX(6px); }

        /* ── Do-not cards ── */
        .dont-row { display:flex; align-items:flex-start; gap:14px; padding:14px 16px; border-radius:16px; transition:background 0.3s ease, transform 0.3s ease; cursor:default; }
        .dont-row:hover { background:#fef2f2; transform:translateX(4px); }

        /* ── Tip cards ── */
        .tip-card { transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease, border-color 0.3s ease; }
        .tip-card:hover { transform:translateY(-8px); box-shadow:0 24px 50px rgba(0,43,92,0.12); border-color:#ffd100; }

        /* ── Tip image header ── */
        .tip-img-wrap { overflow:hidden; border-radius:20px 20px 0 0; }
        .tip-img { transition:transform 0.6s ease; }
        .tip-card:hover .tip-img { transform:scale(1.06); }

        /* ── Approach image ── */
        .approach-img-wrap { transition:transform 0.5s ease, box-shadow 0.5s ease; }
        .approach-img-wrap:hover { transform:translateY(-6px) rotate(-1deg); box-shadow:0 30px 65px rgba(0,43,92,0.18); }

        /* ── CTA buttons ── */
        .btn-gold { position:relative; overflow:hidden; background:#ffd100; color:#002b5c; transition:transform 0.25s ease, box-shadow 0.25s ease; }
        .btn-gold::after { content:''; position:absolute; inset:0; background:linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.25) 50%,transparent 60%); background-size:200% 100%; background-position:200% 0; transition:background-position 0.5s ease; }
        .btn-gold:hover { transform:translateY(-3px); box-shadow:0 14px 36px rgba(255,209,0,0.4); }
        .btn-gold:hover::after { background-position:-200% 0; }
        .btn-outline-w { transition:all 0.3s ease; }
        .btn-outline-w:hover { background:rgba(255,255,255,0.15); transform:translateY(-3px); }

        /* ── Key message bar ── */
        .key-msg { transition:transform 0.3s ease; }
        .key-msg:hover { transform:scale(1.01); }

        /* ── dot bg ── */
        .dot-bg { background-image:radial-gradient(circle, rgba(0,43,92,0.07) 1px, transparent 1px); background-size:26px 26px; }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
     <section
  ref={heroRef.ref}
  className="relative overflow-hidden"
  style={{ background: 'linear-gradient(140deg,#001628 0%,#002b5c 55%,#003875 100%)', minHeight: '360px' }}
>
  {/* bg dog image overlay */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&h=700&fit=crop"
      alt="" className="w-full h-full object-cover opacity-15"
    />
    <div className="absolute inset-0"
      style={{ background: 'linear-gradient(180deg, rgba(0,22,40,0.95) 0%, rgba(0,43,92,0.8) 60%, rgba(0,43,92,0.7) 100%)' }} />
    <div className="absolute inset-0 hidden md:block"
      style={{ background: 'linear-gradient(90deg, rgba(0,22,40,0.95) 0%, rgba(0,43,92,0.8) 55%, transparent 100%)' }} />
  </div>

  {/* Orbs */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute top-0 right-0 w-64 h-64 sm:w-[500px] sm:h-[500px] rounded-full opacity-10"
      style={{ background: 'radial-gradient(circle,#ffd100,transparent)', filter: 'blur(80px)' }} />
    {['8%','74%','50%','86%','28%'].map((left, i) => (
      <div key={i} className="paw-float absolute select-none text-4xl"
        style={{ top: `${10+i*16}%`, left, color: 'rgba(255,255,255,0.03)', animationDelay: `${i*0.9}s` }}>🐾</div>
    ))}
  </div>

  {/* Content */}
  <div
    className={`relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-14 py-9 sm:py-14 md:py-20 flex flex-col justify-center rev ${heroRef.visible ? 'in' : ''}`}
    style={{ minHeight: '360px' }}
  >
    {/* Back link */}
    <Link to="/our-work"
      className="inline-flex items-center gap-2 text-white/60 hover:text-[#ffd100] mb-5 text-sm font-medium transition-colors duration-300 self-start">
      <ArrowLeft size={15} /> Back to Our Work
    </Link>

    <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 text-[#ffd100] font-black text-xs uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full border border-[#ffd100]/25 bg-[#ffd100]/10">
        🐾 Dog Problem
      </div>

      {/* Heading */}
      <h1
        className="font-black text-white leading-tight mb-4"
        style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.9rem, 5vw, 4rem)', lineHeight: 1.08 }}
      >
        Dog Problem<br />
        <span style={{ color: '#ffd100', fontStyle: 'italic' }}>Resolution & Care Support</span>
      </h1>

      {/* Subtext */}
      <p className="text-blue-200 text-sm sm:text-base leading-relaxed font-light mb-7 max-w-xl mx-auto md:mx-0">
        We work for the safety, health, and peaceful coexistence of community dogs and society members.
        From vaccination and injury care to resolving complaints.
      </p>

      {/* Buttons */}
      <div className="flex flex-row flex-wrap gap-3 justify-center md:justify-start">
        <a href="tel:+919876543210"
          className="btn-gold inline-flex items-center gap-2 px-5 sm:px-7 py-3 rounded-2xl font-bold shadow-xl text-sm sm:text-base whitespace-nowrap">
          <Phone size={15} /> Call Us Now
        </a>
        <Link to="/contact"
          className="btn-outline-w inline-flex items-center gap-2 px-5 sm:px-7 py-3 rounded-2xl font-bold border-2 border-white/30 text-white text-sm sm:text-base whitespace-nowrap">
          Submit Complaint <ArrowRight size={15} />
        </Link>
      </div>

    </div>
  </div>

  {/* Wave */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg viewBox="0 0 1440 55" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
      style={{ display: 'block', width: '100%', height: '45px' }}>
      <path d="M0,28 C480,55 960,0 1440,28 L1440,55 L0,55 Z" fill="#ffffff" />
    </svg>
  </div>
</section>

      {/* ── KEY MESSAGE BANNER ───────────────────────────────────────────── */}
    
      {/* ── COMMON PROBLEMS ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative" ref={problemsRef.ref}>
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className={`text-center mb-16 rev ${problemsRef.visible ? 'in' : ''}`}>
            <span className="inline-block text-[#f97316] font-black text-xs uppercase tracking-widest mb-3 px-3 py-1 bg-orange-50 rounded-full border border-orange-100">Problems We Address</span>
            <h2 className="font-black text-[#002b5c] mt-1" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4vw,3rem)' }}>
              Common Dog-Related <span style={{ fontStyle: 'italic', color: '#f97316' }}>Concerns</span>
            </h2>
            <p className="text-gray-400 font-light mt-3 max-w-xl mx-auto text-sm leading-relaxed">We understand that living with community dogs can sometimes be challenging. Here are the common concerns we help resolve.</p>
          </div>
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 stag ${problemsRef.visible ? 'in' : ''}`}>
            {commonProblems.map((p:any, i) => <ProblemCard key={i} index={i} {...p} />)}
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ─────────────────────────────────────────────────── */}
      <section className="py-24 dot-bg bg-slate-50 relative" ref={approachRef.ref}>
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left — text + checklist */}
            <div className={`rev-l ${approachRef.visible ? 'in' : ''}`}>
              <span className="inline-block text-[#f97316] font-black text-xs uppercase tracking-widest mb-3 px-3 py-1 bg-orange-50 rounded-full border border-orange-100">Our Approach</span>
              <h2 className="font-black text-[#002b5c] mb-6 mt-1 leading-tight" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.9rem,3.5vw,2.8rem)' }}>
                Humane &<br />
                <span style={{ fontStyle: 'italic', color: '#f97316' }}>Peaceful Solutions</span>
              </h2>
              <div className="space-y-4 text-gray-500 font-light leading-relaxed text-sm mb-8">
                <p>We work towards creating a safe and balanced environment for both community dogs and society residents.Our approach focuses on vaccination, medical care, shelter support, and peaceful conflict resolution — without harming or illegally relocating any dog</p>
                <p>We believe that long-term solutions come through awareness, medical support, and responsible community coordination.</p>
                {/* <p>Our trained team visits the location, observes the dog's behavior, talks to residents, and develops a solution that works for everyone.</p> */}
              </div>
              <div className="space-y-1">
                {approachChecks.map((c, i) => (
                  <div key={i} className="check-row">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={17} className="text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-[#002b5c] text-sm">{c.title}</p>
                      <p className="text-gray-400 text-xs font-light mt-0.5">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — What We Do NOT Do */}
            <div className={`rev-r ${approachRef.visible ? 'in' : ''}`}>
              {/* Approach photo */}
              <div className="approach-img-wrap relative rounded-3xl overflow-hidden shadow-2xl mb-8 border-4 border-white" style={{ height: '540px' }}>
                <img src="/image/Humanesolutions.png" alt="Team assessing dog" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,43,92,0.5) 0%, transparent 60%)' }} />
                <div className="absolute bottom-5 left-6">
                  {/* <p className="text-white font-black text-lg" style={{ fontFamily: "'Playfair Display',serif" }}>Professional On-Site Team</p>
                  <p className="text-blue-200 text-xs font-light">Trained & Certified Handlers</p> */}
                </div>
              </div>

              {/* Don't do box */}
              {/* <div className="bg-white rounded-3xl shadow-xl p-7 border-2 border-rose-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                    <XCircle size={22} className="text-rose-500" />
                  </div>
                  <h3 className="text-lg font-black text-[#002b5c]" style={{ fontFamily: "'Playfair Display',serif" }}>What We Do NOT Do</h3>
                </div>
                <div className="space-y-1">
                  {doNotDo.map((d, i) => (
                    <div key={i} className="dont-row">
                      <XCircle size={16} className="text-rose-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 text-sm font-light leading-relaxed">
                        <span className="font-bold text-gray-700">{d.title}: </span>{d.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESOLUTION PROCESS ───────────────────────────────────────────── */}
      {/* <section className="py-24 bg-white relative" ref={processRef.ref}>
        <div className="max-w-7xl mx-auto px-6 md:px-14">
          <div className={`text-center mb-16 rev ${processRef.visible ? 'in' : ''}`}>
            <span className="inline-block text-[#f97316] font-black text-xs uppercase tracking-widest mb-3 px-3 py-1 bg-orange-50 rounded-full border border-orange-100">Our Process</span>
            <h2 className="font-black text-[#002b5c] mt-1" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4vw,3rem)' }}>
              How We <span style={{ fontStyle: 'italic', color: '#f97316' }}>Resolve Dog Problems</span>
            </h2>
            <p className="text-gray-400 font-light mt-3 max-w-xl mx-auto text-sm">Our systematic approach ensures every concern is addressed thoroughly and humanely.</p>
          </div>
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 stag ${processRef.visible ? 'in' : ''}`}>
            {resolutionProcess.map((item) => <ProcessCard key={item.step} {...item} />)}
          </div>
        </div>
      </section> */}

      {/* ── TIPS SECTION ─────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" ref={tipsRef.ref} style={{ background: 'linear-gradient(140deg,#001628 0%,#002b5c 100%)' }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle,#ffd100,transparent)', filter: 'blur(90px)' }} />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '55px 55px' }} />
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-14 relative z-10">
          <div className={`text-center mb-14 rev ${tipsRef.visible ? 'in' : ''}`}>
            <span className="inline-block text-[#ffd100] font-black text-xs uppercase tracking-widest mb-3 px-3 py-1 bg-[#ffd100]/10 rounded-full border border-[#ffd100]/25">Helpful Tips</span>
            <h2 className="font-black text-white mt-1" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4vw,3rem)' }}>
              Living Safely with <span style={{ color: '#ffd100', fontStyle: 'italic' }}>Community Dogs</span>
            </h2>
          </div>

          <div className={`grid md:grid-cols-2 gap-6 stag ${tipsRef.visible ? 'in' : ''}`}>
            {/* Behavior tip card */}
            <div className="tip-card rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="tip-img-wrap" style={{ height: '180px' }}>
                <img src="/image/Sleepingdog.png" alt="Understanding dog behavior" className="tip-img w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-7">
                <h3 className="font-black text-white mb-5 text-lg" style={{ fontFamily: "'Playfair Display',serif" }}>
                  👁️ Understanding Dog Behavior
                </h3>
                <ul className="space-y-3">
                  {behaviorTips.map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#ffd100] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#002b5c] text-xs font-black">✓</span>
                      </div>
                      <span className="text-blue-200 text-sm font-light leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* How you can help card */}
            <div className="tip-card rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="tip-img-wrap" style={{ height: '180px' }}>
                <img src="/image/Soulfulstare.png" alt="How you can help dogs" className="tip-img w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-7">
                <h3 className="font-black text-white mb-5 text-lg" style={{ fontFamily: "'Playfair Display',serif" }}>
                  ❤️ How You Can Help
                </h3>
                <ul className="space-y-3">
                  {helpTips.map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#ffd100] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#002b5c] text-xs font-black">✓</span>
                      </div>
                      <span className="text-blue-200 text-sm font-light leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" ref={contactRef.ref} style={{ background: 'linear-gradient(135deg,#ffd100 0%,#ffec6e 50%,#ffd100 100%)' }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle,#002b5c 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-20" style={{ background: 'radial-gradient(circle,#002b5c,transparent)', filter: 'blur(60px)' }} />
        </div>

        <div className={`max-w-4xl mx-auto px-6 relative z-10 rev ${contactRef.visible ? 'in' : ''}`}>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
              <span className="inline-block text-[#002b5c] font-black text-xs uppercase tracking-widest mb-4 px-3 py-1 bg-[#002b5c]/10 rounded-full border border-[#002b5c]/15">Contact Us</span>
              <h2 className="font-black text-[#002b5c] mb-4" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4vw,2.9rem)', lineHeight: 1.1 }}>
                Having a<br />
                <span style={{ fontStyle: 'italic' }}>Dog-Related Issue?</span>
              </h2>
              <p className="text-[#002b5c]/70 text-base font-light leading-relaxed mb-8">
                Contact us and our team will visit your location to assess the situation and provide a humane solution — usually within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-2 bg-[#002b5c] text-white px-7 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <Phone size={17} className="text-[#ffd100]" /> +919999999999
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white/50 border-2 border-[#002b5c] text-[#002b5c] px-7 py-4 rounded-2xl font-bold hover:bg-[#002b5c] hover:text-white transition-all duration-300">
                  <FileText size={17} /> Submit Complaint
                </Link>
              </div>
            </div>
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white" style={{ height: '450px' }}>
              <img src="/image/Dogenjoying.png" alt="Helping a dog" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,43,92,0.5) 0%, transparent 50%)' }} />
              <div className="absolute bottom-5 left-6">
                {/* <p className="text-white font-black" style={{ fontFamily: "'Playfair Display',serif" }}>24-Hour Response</p> */}
                {/* <p className="text-blue-200 text-xs font-light">We visit your location fast</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DogProblemResolutionPage;