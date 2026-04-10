// import React from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   Heart, Home, Stethoscope, GraduationCap, Users, Shield, 
//   Syringe, Scissors, Truck, Phone, ArrowRight, CheckCircle 
// } from 'lucide-react';
// import { Button } from '@/components/ui/Button';
// import { StatsSection } from '@/components/sections/StatsSection';
// import { CTABanner } from '@/components/sections/CTABanner';
// import { orgInfo } from '@/constants/theme';

// /**
//  * WhatWeDoPage Component
//  * Comprehensive page about the organization's activities and programs
//  */

// const WhatWeDoPage: React.FC = () => {
//   // Core services/programs
//   const corePrograms = [
//     {
//       icon: <Home className="w-10 h-10" />,
//       title: 'Dog Rescue & Shelter',
//       description: 'We rescue abandoned, injured, and stray dogs from streets across Rajasthan. Our shelters provide safe haven, nutritious food, clean water, and comfortable bedding for all rescued dogs.',
//       highlights: ['24/7 rescue operations', '6 shelters across Rajasthan', 'Capacity for 200+ dogs'],
//       color: 'bg-[#FFD100]',
//     },
//     {
//       icon: <Stethoscope className="w-10 h-10" />,
//       title: 'Veterinary Care',
//       description: 'Our in-house veterinary team provides comprehensive medical care including surgeries, treatments for injuries and illnesses, and ongoing health monitoring for all dogs in our care.',
//       highlights: ['Full-time veterinarians', 'On-site surgical facilities', 'Emergency medical care'],
//       color: 'bg-[#00A19A]',
//     },
//     {
//       icon: <Syringe className="w-10 h-10" />,
//       title: 'Vaccination & Sterilization',
//       description: 'We run extensive vaccination drives and ABC (Animal Birth Control) programs to protect street dogs from diseases and humanely manage the population.',
//       highlights: ['5000+ vaccinations yearly', 'Free sterilization camps', 'Anti-rabies campaigns'],
//       color: 'bg-[#6B3FA0]',
//     },
//     {
//       icon: <Heart className="w-10 h-10" />,
//       title: 'Adoption & Rehoming',
//       description: 'Our dedicated rehoming team matches rescued dogs with loving families. We conduct thorough screening, home visits, and provide post-adoption support.',
//       highlights: ['Careful family matching', 'Home inspection process', 'Lifetime support'],
//       color: 'bg-[#F58220]',
//     },
//     {
//       icon: <GraduationCap className="w-10 h-10" />,
//       title: 'Training & Rehabilitation',
//       description: 'Traumatized and behaviorally challenged dogs receive specialized care and training to help them recover and become adoptable companions.',
//       highlights: ['Behavior assessment', 'Positive training methods', 'Socialization programs'],
//       color: 'bg-[#78BE20]',
//     },
//     {
//       icon: <Users className="w-10 h-10" />,
//       title: 'Community Education',
//       description: 'We conduct awareness programs in schools, colleges, and communities about responsible pet ownership, animal welfare, and coexistence with street animals.',
//       highlights: ['School outreach programs', 'Community workshops', 'Social media campaigns'],
//       color: 'bg-[#002B5C]',
//     },
//   ];

//   // Additional services
//   const additionalServices = [
//     {
//       icon: <Truck className="w-6 h-6" />,
//       title: 'Rescue Ambulance',
//       description: 'Our rescue vehicles operate 24/7 to respond to emergency calls and transport injured dogs.',
//     },
//     {
//       icon: <Scissors className="w-6 h-6" />,
//       title: 'Grooming Services',
//       description: 'Regular grooming keeps our shelter dogs healthy and improves their chances of adoption.',
//     },
//     {
//       icon: <Phone className="w-6 h-6" />,
//       title: 'Helpline Support',
//       description: 'Our helpline provides guidance on dog care, rescue requests, and adoption inquiries.',
//     },
//     {
//       icon: <Shield className="w-6 h-6" />,
//       title: 'Legal Advocacy',
//       description: 'We work with authorities to enforce animal protection laws and report animal cruelty cases.',
//     },
//   ];

//   // Impact numbers specific to programs
//   const programImpact = [
//     { number: '3,500+', label: 'Dogs rescued annually' },
//     { number: '2,500+', label: 'Successful adoptions' },
//     { number: '5,000+', label: 'Vaccinations per year' },
//     { number: '3,000+', label: 'Sterilizations performed' },
//     { number: '50+', label: 'Schools reached' },
//     { number: '200+', label: 'Dogs currently in care' },
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-[#002B5C] to-[#003D82] py-20 overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 relative">
//           <div className="max-w-3xl">
//             <span className="inline-flex items-center gap-2 text-[#FFD100] font-semibold text-sm uppercase tracking-wider mb-4">
//               <Heart className="w-4 h-4 fill-current" />
//               Our Work
//             </span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
//               What We Do
//             </h1>
//             <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
//               At {orgInfo.name}, we're dedicated to rescuing, rehabilitating, and rehoming 
//               street dogs across Rajasthan. Our comprehensive programs address every aspect 
//               of dog welfare—from emergency rescue to finding forever homes.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Mission Statement */}
//       <section className="py-16 bg-[#FFD100]">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-6">
//               Our Mission
//             </h2>
//             <p className="text-xl text-[#002B5C]/80 leading-relaxed">
//               "{orgInfo.tagline}" — We believe every dog deserves compassion, care, and 
//               a chance at happiness. Through rescue, rehabilitation, and community education, 
//               we work tirelessly to create a world where no dog is left behind.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Core Programs */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <span className="inline-block text-[#F58220] font-semibold text-sm uppercase tracking-wider mb-2">
//               Our Programs
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">
//               Core Services & Programs
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Our integrated approach to dog welfare covers rescue, medical care, rehabilitation, 
//               and finding loving homes for every dog we save.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {corePrograms.map((program, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
//               >
//                 <div className={`${program.color} p-6 text-white`}>
//                   <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                     {program.icon}
//                   </div>
//                   <h3 className="text-2xl font-bold">{program.title}</h3>
//                 </div>
//                 <div className="p-6">
//                   <p className="text-gray-600 mb-4">{program.description}</p>
//                   <ul className="space-y-2">
//                     {program.highlights.map((highlight, hIndex) => (
//                       <li key={hIndex} className="flex items-center gap-2 text-sm text-gray-700">
//                         <CheckCircle className="w-4 h-4 text-[#78BE20] flex-shrink-0" />
//                         {highlight}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Program Impact Numbers */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C]">
//               Our Annual Impact
//             </h2>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//             {programImpact.map((stat, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md">
//                 <div className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600 text-sm">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Additional Services */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <span className="inline-block text-[#F58220] font-semibold text-sm uppercase tracking-wider mb-2">
//               Additional Support
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C]">
//               Supporting Services
//             </h2>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {additionalServices.map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#FFD100] hover:shadow-lg transition-all"
//               >
//                 <div className="w-12 h-12 bg-[#FFD100] rounded-full flex items-center justify-center mb-4 text-[#002B5C]">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-[#002B5C] mb-2">{service.title}</h3>
//                 <p className="text-gray-600 text-sm">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How Rescue Works */}
//       <section className="py-20 bg-[#002B5C]">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <span className="inline-block text-[#FFD100] font-semibold text-sm uppercase tracking-wider mb-2">
//               Our Process
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-white">
//               How Our Rescue Process Works
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-5 gap-8">
//             {[
//               { step: '1', title: 'Report', desc: 'A stray or injured dog is reported to our helpline' },
//               { step: '2', title: 'Rescue', desc: 'Our team responds immediately to rescue the dog' },
//               { step: '3', title: 'Treatment', desc: 'Veterinary care, treatment, and rehabilitation' },
//               { step: '4', title: 'Recovery', desc: 'The dog recovers and receives training' },
//               { step: '5', title: 'Adoption', desc: 'We find a loving forever home' },
//             ].map((item, index) => (
//               <div key={index} className="text-center relative">
//                 <div className="w-16 h-16 bg-[#FFD100] rounded-full flex items-center justify-center mx-auto mb-4 text-[#002B5C] font-bold text-2xl">
//                   {item.step}
//                 </div>
//                 <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
//                 <p className="text-gray-400 text-sm">{item.desc}</p>
//                 {index < 4 && (
//                   <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-[#FFD100]" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Statistics */}
//       <StatsSection />

//       {/* Get Involved CTA */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
//             <div className="grid lg:grid-cols-2 gap-8 items-center">
//               <div>
//                 <h2 className="text-3xl font-bold text-[#002B5C] mb-4">
//                   Want to Support Our Work?
//                 </h2>
//                 <p className="text-gray-600 mb-6">
//                   There are many ways you can help us rescue and care for more dogs. 
//                   Whether through donations, volunteering, or adoption, your support 
//                   makes a real difference in the lives of street dogs.
//                 </p>
//                 <div className="flex flex-wrap gap-4">
//                   <Link to="/donate">
//                     <Button variant="primary" size="lg" leftIcon={<Heart className="w-5 h-5" />}>
//                       Donate Now
//                     </Button>
//                   </Link>
//                   <Link to="/get-involved">
//                     <Button variant="outline" size="lg">
//                       Get Involved
//                     </Button>
//                   </Link>
//                   <Link to="/rehoming">
//                     <Button variant="secondary" size="lg">
//                       Adopt a Dog
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//               <div className="relative">
//                 <img
//                   src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop"
//                   alt="Happy rescue dog"
//                   className="rounded-xl shadow-lg"
//                   loading="lazy"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Banner */}
//       <CTABanner
//         title="Help Us Save More Lives"
//         description="Every donation helps us rescue, treat, and find homes for dogs in need. Join our mission today."
//         primaryButtonText="Donate Now"
//         primaryButtonLink="/donate"
//         secondaryButtonText="Learn About Adoption"
//         secondaryButtonLink="/rehoming"
//       />
//     </div>
//   );
// };

// export default WhatWeDoPage;




import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { StatsSection } from '@/components/sections/StatsSection';
import { CTABanner } from '@/components/sections/CTABanner';
import { orgInfo } from '@/constants/theme';

// ─── Font injection ──────────────────────────────────────────────────────────
const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap');
  body, * { font-family: 'Nunito', sans-serif; }
  h1, h2, h3 { font-family: 'Playfair Display', serif; }

  .program-card {
    transition: transform 0.35s cubic-bezier(.34,1.56,.64,1), box-shadow 0.35s ease;
  }
  .program-card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 24px 48px rgba(0,43,92,0.18);
  }
  .program-card .card-img {
    transition: transform 0.5s ease;
    overflow: hidden;
  }
  .program-card:hover .card-img img {
    transform: scale(1.08);
  }
  .program-card .card-img img {
    transition: transform 0.5s ease;
  }

  .service-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }
  .service-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0,43,92,0.12);
    border-color: #FFD100;
  }
  .service-card .svc-img {
    transition: transform 0.4s cubic-bezier(.34,1.56,.64,1);
  }
  .service-card:hover .svc-img {
    transform: scale(1.15) rotate(-3deg);
  }

  .step-circle {
    transition: transform 0.3s cubic-bezier(.34,1.56,.64,1), background 0.3s ease;
  }
  .step-item:hover .step-circle {
    transform: scale(1.15);
    background: #fff;
    color: #002B5C;
  }
  .step-item:hover h3 { color: #FFD100; }

  .stat-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .stat-card:hover {
    transform: translateY(-4px) scale(1.04);
    box-shadow: 0 8px 24px rgba(0,43,92,0.12);
  }

  .cta-btn {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.15);
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.7s ease both; }
  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.2s; }
  .delay-3 { animation-delay: 0.3s; }
`;

/**
 * WhatWeDoPage Component
 * Enhanced with hover animations, Google Fonts, and real images instead of icons
 */
const WhatWeDoPage: React.FC = () => {

  const corePrograms = [
    {
      img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=300&fit=crop',
      title: 'Dog Rescue & Shelter',
      description: 'We rescue abandoned, injured, and stray dogs from streets across Rajasthan. Our shelters provide safe haven, nutritious food, clean water, and comfortable bedding.',
      highlights: ['24/7 rescue operations', '6 shelters across Rajasthan', 'Capacity for 200+ dogs'],
      color: 'bg-[#FFD100]',
      textColor: 'text-[#002B5C]',
    },
    {
      img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&h=300&fit=crop',
      title: 'Veterinary Care',
      description: 'Our in-house veterinary team provides comprehensive medical care including surgeries, treatments for injuries and illnesses, and ongoing health monitoring.',
      highlights: ['Full-time veterinarians', 'On-site surgical facilities', 'Emergency medical care'],
      color: 'bg-[#00A19A]',
      textColor: 'text-white',
    },
    {
      img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=300&fit=crop',
      title: 'Vaccination & Sterilization',
      description: 'We run extensive vaccination drives and ABC programs to protect street dogs from diseases and humanely manage the population.',
      highlights: ['5000+ vaccinations yearly', 'Free sterilization camps', 'Anti-rabies campaigns'],
      color: 'bg-[#6B3FA0]',
      textColor: 'text-white',
    },
    {
      img: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=600&h=300&fit=crop',
      title: 'Adoption & Rehoming',
      description: 'Our dedicated rehoming team matches rescued dogs with loving families through thorough screening, home visits, and post-adoption support.',
      highlights: ['Careful family matching', 'Home inspection process', 'Lifetime support'],
      color: 'bg-[#F58220]',
      textColor: 'text-white',
    },
    {
      img: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=600&h=300&fit=crop',
      title: 'Training & Rehabilitation',
      description: 'Traumatized and behaviorally challenged dogs receive specialized care and training to help them recover and become adoptable companions.',
      highlights: ['Behavior assessment', 'Positive training methods', 'Socialization programs'],
      color: 'bg-[#78BE20]',
      textColor: 'text-white',
    },
    {
      img: 'https://images.unsplash.com/photo-1488778578932-0d8ce5f40dba?w=600&h=300&fit=crop',
      title: 'Community Education',
      description: 'We conduct awareness programs in schools, colleges, and communities about responsible pet ownership, animal welfare, and coexistence.',
      highlights: ['School outreach programs', 'Community workshops', 'Social media campaigns'],
      color: 'bg-[#002B5C]',
      textColor: 'text-white',
    },
  ];

  const additionalServices = [
    {
      img: 'https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?w=120&h=120&fit=crop',
      title: 'Rescue Ambulance',
      description: 'Our rescue vehicles operate 24/7 to respond to emergency calls and transport injured dogs.',
    },
    {
      img: 'https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?w=120&h=120&fit=crop',
      title: 'Grooming Services',
      description: 'Regular grooming keeps our shelter dogs healthy and improves their chances of adoption.',
    },
    {
      img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=120&h=120&fit=crop',
      title: 'Helpline Support',
      description: 'Our helpline provides guidance on dog care, rescue requests, and adoption inquiries.',
    },
    {
      img: 'https://images.unsplash.com/photo-1581888227599-779811939961?w=120&h=120&fit=crop',
      title: 'Legal Advocacy',
      description: 'We work with authorities to enforce animal protection laws and report animal cruelty cases.',
    },
  ];

  const programImpact = [
    { number: '3,500+', label: 'Dogs rescued annually' },
    { number: '2,500+', label: 'Successful adoptions' },
    { number: '5,000+', label: 'Vaccinations per year' },
    { number: '3,000+', label: 'Sterilizations performed' },
    { number: '50+', label: 'Schools reached' },
    { number: '200+', label: 'Dogs currently in care' },
  ];

  const steps = [
    { step: '1', title: 'Report', desc: 'A stray or injured dog is reported to our helpline', img: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=80&h=80&fit=crop' },
    { step: '2', title: 'Rescue', desc: 'Our team responds immediately to rescue the dog', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=80&h=80&fit=crop' },
    { step: '3', title: 'Treatment', desc: 'Veterinary care, treatment, and rehabilitation', img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=80&h=80&fit=crop' },
    { step: '4', title: 'Recovery', desc: 'The dog recovers and receives training', img: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=80&h=80&fit=crop' },
    { step: '5', title: 'Adoption', desc: 'We find a loving forever home', img: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=80&h=80&fit=crop' },
  ];

  return (
    <div>
      <style>{fontStyle}</style>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002B5C] to-[#003D82] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#FFD100] font-bold text-sm uppercase tracking-widest mb-4 fade-up">
              ❤️ Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 fade-up delay-1">
              What We Do
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed fade-up delay-2">
              At {orgInfo.name}, we're dedicated to rescuing, rehabilitating, and rehoming
              street dogs across Rajasthan. Our comprehensive programs address every aspect
              of dog welfare—from emergency rescue to finding forever homes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-[#FFD100]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-6">Our Mission</h2>
            <p className="text-xl text-[#002B5C]/80 leading-relaxed">
              "{orgInfo.tagline}" — We believe every dog deserves compassion, care, and
              a chance at happiness. Through rescue, rehabilitation, and community education,
              we work tirelessly to create a world where no dog is left behind.
            </p>
          </div>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#F58220] font-bold text-sm uppercase tracking-widest mb-2">
              Our Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">
              Core Services & Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our integrated approach covers rescue, medical care, rehabilitation,
              and finding loving homes for every dog we save.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corePrograms.map((program, index) => (
              <div
                key={index}
                className="program-card bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
              >
                {/* Image header */}
                <div className={`${program.color} relative`}>
                  <div className="card-img h-44 overflow-hidden">
                    <img
                      src={program.img}
                      alt={program.title}
                      className="w-full h-full object-cover opacity-80"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className={`text-xl font-bold ${program.textColor} drop-shadow`}>
                      {program.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{program.description}</p>
                  <ul className="space-y-2">
                    {program.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#78BE20] flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Impact Numbers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C]">Our Annual Impact</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {programImpact.map((stat, index) => (
              <div key={index} className="stat-card bg-white rounded-xl p-6 text-center shadow-md cursor-default">
                <div className="text-3xl md:text-4xl font-black text-[#002B5C] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-[#F58220] font-bold text-sm uppercase tracking-widest mb-2">
              Additional Support
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C]">Supporting Services</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="service-card bg-white border border-gray-200 rounded-xl p-6 cursor-pointer"
              >
                <div className="svc-img w-14 h-14 rounded-full overflow-hidden mb-4 ring-4 ring-[#FFD100]">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#002B5C] mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Rescue Works */}
      <section className="py-20 bg-[#002B5C]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#FFD100] font-bold text-sm uppercase tracking-widest mb-2">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              How Our Rescue Process Works
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="step-item text-center relative cursor-default">
                {/* Image circle */}
                <div className="step-circle w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 ring-4 ring-[#FFD100] relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#002B5C]/40 flex items-center justify-center">
                    <span className="text-[#FFD100] font-black text-xl">{item.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
                {index < 4 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-[#FFD100]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <StatsSection />

      {/* Get Involved CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#002B5C] mb-4">
                  Want to Support Our Work?
                </h2>
                <p className="text-gray-600 mb-6">
                  There are many ways you can help us rescue and care for more dogs.
                  Whether through donations, volunteering, or adoption, your support
                  makes a real difference in the lives of street dogs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/donate" className="cta-btn">
                    <Button variant="primary" size="lg">❤️ Donate Now</Button>
                  </Link>
                  <Link to="/get-involved" className="cta-btn">
                    <Button variant="outline" size="lg">Get Involved</Button>
                  </Link>
                  <Link to="/rehoming" className="cta-btn">
                    <Button variant="secondary" size="lg">Adopt a Dog</Button>
                  </Link>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop"
                  alt="Happy rescue dog"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Help Us Save More Lives"
        description="Every donation helps us rescue, treat, and find homes for dogs in need. Join our mission today."
        primaryButtonText="Donate Now"
        primaryButtonLink="/donate"
        secondaryButtonText="Learn About Adoption"
        secondaryButtonLink="/rehoming"
      />
    </div>
  );
};

export default WhatWeDoPage;
