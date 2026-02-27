// import React from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   Heart, Users, Target, Eye, Award, MapPin, 
//   Calendar, Mail, Phone, ArrowRight, Star 
// } from 'lucide-react';
// import { Button } from '@/components/ui/Button';
// import { StatsSection } from '@/components/sections/StatsSection';
// import { CTABanner } from '@/components/sections/CTABanner';
// import { orgInfo } from '@/constants/theme';

// /**
//  * WhoWeArePage Component
//  * About the organization - history, team, values, mission, vision
//  */

// const WhoWeArePage: React.FC = () => {
//   // Core values
//   const values = [
//     {
//       icon: <Heart className="w-8 h-8" />,
//       title: 'Compassion',
//       description: 'We treat every animal with love, kindness, and respect, recognizing their right to a life free from suffering.',
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: 'Community',
//       description: 'We believe in building strong relationships with local communities to create lasting change for animals.',
//     },
//     {
//       icon: <Target className="w-8 h-8" />,
//       title: 'Commitment',
//       description: 'We never give up on any animal. Every dog deserves a chance at happiness, no matter their circumstances.',
//     },
//     {
//       icon: <Award className="w-8 h-8" />,
//       title: 'Excellence',
//       description: 'We maintain the highest standards in animal care, welfare practices, and organizational transparency.',
//     },
//     {
//       icon: <Eye className="w-8 h-8" />,
//       title: 'Transparency',
//       description: 'We operate with complete openness, ensuring donors and supporters know exactly how their contributions help.',
//     },
//     {
//       icon: <Star className="w-8 h-8" />,
//       title: 'Integrity',
//       description: 'We uphold ethical practices in everything we do, from rescue operations to adoption processes.',
//     },
//   ];

//   // Leadership team
//   const leadershipTeam = [
//     {
//       name: 'Dr. Meera Sharma',
//       role: 'Founder & Director',
//       bio: 'Dr. Meera founded Suranango for Dogs in 2010 with a vision to end street dog suffering in Rajasthan. A veterinarian by training, she has dedicated 20+ years to animal welfare.',
//       image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop',
//     },
//     {
//       name: 'Rajesh Kumar Jain',
//       role: 'Chief Operations Officer',
//       bio: 'Rajesh oversees all shelter operations and rescue activities. His background in management has helped scale our operations to serve thousands of dogs annually.',
//       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
//     },
//     {
//       name: 'Dr. Priya Agarwal',
//       role: 'Head Veterinarian',
//       bio: 'Dr. Priya leads our medical team with expertise in emergency care and complex surgeries. She has treated over 10,000 animals in her career.',
//       image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop',
//     },
//     {
//       name: 'Amit Singh Rathore',
//       role: 'Adoption Coordinator',
//       bio: 'Amit manages our rehoming program, carefully matching dogs with families. He has helped over 3,000 dogs find their forever homes.',
//       image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
//     },
//     {
//       name: 'Sunita Devi',
//       role: 'Volunteer Manager',
//       bio: 'Sunita coordinates our 100+ volunteers across all centres. Her passion for community building has grown our volunteer base by 300%.',
//       image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop',
//     },
//     {
//       name: 'Vikram Mehta',
//       role: 'Outreach & Education',
//       bio: 'Vikram leads our community education programs, conducting awareness sessions in schools and neighborhoods across Rajasthan.',
//       image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop',
//     },
//   ];

//   // Rescue centres
//   const centres = [
//     { name: 'Jaipur Main Centre', location: 'Surana Nagar, Jaipur', dogs: 55, established: 2010 },
//     { name: 'Jodhpur Shelter', location: 'Ratanada, Jodhpur', dogs: 42, established: 2013 },
//     { name: 'Udaipur Rescue Home', location: 'Hiran Magri, Udaipur', dogs: 38, established: 2015 },
//     { name: 'Ajmer Care Centre', location: 'Civil Lines, Ajmer', dogs: 30, established: 2017 },
//     { name: 'Bikaner Shelter', location: 'Lalgarh, Bikaner', dogs: 28, established: 2019 },
//     { name: 'Kota Rescue Centre', location: 'Talwandi, Kota', dogs: 22, established: 2021 },
//   ];

//   // Timeline milestones
//   const timeline = [
//     { year: '2010', title: 'Foundation', description: 'Suranango for Dogs founded in Jaipur by Dr. Meera Sharma' },
//     { year: '2012', title: 'First 500 Rescues', description: 'Reached milestone of 500 dogs rescued and rehomed' },
//     { year: '2013', title: 'Jodhpur Expansion', description: 'Opened second shelter in Jodhpur' },
//     { year: '2015', title: 'Sterilization Program', description: 'Launched large-scale ABC program across Rajasthan' },
//     { year: '2017', title: '5 Centres', description: 'Expanded to 5 rescue centres across the state' },
//     { year: '2020', title: '10 Year Anniversary', description: 'Celebrated 10 years with 15,000+ dogs helped' },
//     { year: '2023', title: '6th Centre', description: 'Opened Kota Rescue Centre, our newest facility' },
//     { year: '2024', title: 'Today', description: 'Continuing our mission with 200+ dogs in care' },
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative min-h-[60vh] flex items-center bg-[#002B5C] overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&h=800&fit=crop"
//             alt="Happy dogs running"
//             className="w-full h-full object-cover opacity-20"
//           />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
//           <div className="max-w-3xl">
//             <span className="inline-flex items-center gap-2 text-[#FFD100] font-semibold text-sm uppercase tracking-wider mb-4">
//               <Users className="w-4 h-4" />
//               About Us
//             </span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
//               Who We Are
//             </h1>
//             <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
//               {orgInfo.name} is Rajasthan's leading dog rescue organization. Since {orgInfo.foundedYear}, 
//               we've been dedicated to rescuing street dogs, providing medical care, and finding them 
//               loving forever homes.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <Link to="/what-we-do">
//                 <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
//                   See What We Do
//                 </Button>
//               </Link>
//               <Link to="/get-involved">
//                 <Button 
//                   variant="outline" 
//                   size="lg" 
//                   className="border-white text-white hover:bg-white hover:text-[#002B5C]"
//                 >
//                   Join Our Team
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Mission */}
//             <div className="bg-[#FFD100] rounded-2xl p-8 md:p-10">
//               <div className="w-16 h-16 bg-[#002B5C] rounded-full flex items-center justify-center mb-6">
//                 <Target className="w-8 h-8 text-[#FFD100]" />
//               </div>
//               <h2 className="text-3xl font-bold text-[#002B5C] mb-4">Our Mission</h2>
//               <p className="text-[#002B5C]/80 text-lg leading-relaxed">
//                 To rescue, rehabilitate, and rehome abandoned and injured street dogs while 
//                 promoting responsible pet ownership and compassionate coexistence between 
//                 humans and animals throughout Rajasthan.
//               </p>
//             </div>

//             {/* Vision */}
//             <div className="bg-[#002B5C] rounded-2xl p-8 md:p-10">
//               <div className="w-16 h-16 bg-[#FFD100] rounded-full flex items-center justify-center mb-6">
//                 <Eye className="w-8 h-8 text-[#002B5C]" />
//               </div>
//               <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
//               <p className="text-gray-300 text-lg leading-relaxed">
//                 A world where every dog is valued, protected, and loved — where no dog 
//                 suffers on the streets, and every community embraces compassion towards 
//                 all animals.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Story */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="relative">
//               <img
//                 src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=500&fit=crop"
//                 alt="Dog being cared for at shelter"
//                 className="rounded-2xl shadow-xl"
//                 loading="lazy"
//               />
//               <div className="absolute -bottom-8 -right-8 bg-[#FFD100] p-6 rounded-2xl shadow-lg hidden md:block">
//                 <p className="text-5xl font-bold text-[#002B5C]">14+</p>
//                 <p className="text-[#002B5C] font-medium">Years of Service</p>
//               </div>
//             </div>
//             <div>
//               <span className="inline-block text-[#F58220] font-semibold text-sm uppercase tracking-wider mb-2">
//                 Our Story
//               </span>
//               <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-6">
//                 From Small Beginnings to Big Impact
//               </h2>
//               <div className="space-y-4 text-gray-600">
//                 <p>
//                   {orgInfo.name} was born from a simple act of compassion. In 2010, 
//                   Dr. Meera Sharma, a young veterinarian in Jaipur, began rescuing injured 
//                   street dogs from her neighborhood. What started as caring for a few dogs 
//                   in her backyard soon grew into something much bigger.
//                 </p>
//                 <p>
//                   Moved by the suffering she witnessed daily and inspired by the resilience 
//                   of these animals, Dr. Meera established {orgInfo.name} with a small team 
//                   of volunteers and a rented space that could house just 20 dogs.
//                 </p>
//                 <p>
//                   Today, we operate 6 rescue centres across Rajasthan, employ a team of 
//                   dedicated professionals and veterinarians, and have helped over 25,000 
//                   dogs find safety, healing, and love. Our journey continues, driven by 
//                   the same passion that started it all.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Timeline */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <span className="inline-block text-[#F58220] font-semibold text-sm uppercase tracking-wider mb-2">
//               Our Journey
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C]">
//               Key Milestones
//             </h2>
//           </div>

//           <div className="relative">
//             {/* Timeline line */}
//             <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#FFD100]" />
            
//             <div className="space-y-8">
//               {timeline.map((item, index) => (
//                 <div 
//                   key={index}
//                   className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
//                 >
//                   <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
//                     <div className="bg-white p-6 rounded-xl shadow-md inline-block">
//                       <span className="text-[#F58220] font-bold text-lg">{item.year}</span>
//                       <h3 className="text-xl font-bold text-[#002B5C] mt-1">{item.title}</h3>
//                       <p className="text-gray-600 text-sm mt-2">{item.description}</p>
//                     </div>
//                   </div>
//                   <div className="hidden md:flex w-12 h-12 bg-[#002B5C] rounded-full items-center justify-center flex-shrink-0 z-10">
//                     <Calendar className="w-6 h-6 text-[#FFD100]" />
//                   </div>
//                   <div className="flex-1 hidden md:block" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-20 bg-[#002B5C]">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <span className="inline-block text-[#FFD100] font-semibold text-sm uppercase tracking-wider mb-2">
//               What We Stand For
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-white">
//               Our Core Values
//             </h2>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {values.map((value, index) => (
//               <div
//                 key={index}
//                 className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
//               >
//                 <div className="w-14 h-14 bg-[#FFD100] rounded-full flex items-center justify-center mb-4 text-[#002B5C]">
//                   {value.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
//                 <p className="text-gray-300 text-sm">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Statistics */}
//       <StatsSection />

//       {/* Leadership Team */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <span className="inline-block text-[#F58220] font-semibold text-sm uppercase tracking-wider mb-2">
//               Leadership
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C]">
//               Meet Our Team
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto mt-4">
//               Our dedicated team brings together expertise in veterinary care, animal welfare, 
//               operations, and community outreach to fulfill our mission every day.
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {leadershipTeam.map((member, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
//               >
//                 <div className="aspect-square overflow-hidden">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-[#002B5C]">{member.name}</h3>
//                   <p className="text-[#F58220] font-medium text-sm mb-3">{member.role}</p>
//                   <p className="text-gray-600 text-sm">{member.bio}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Rescue Centres */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <span className="inline-block text-[#F58220] font-semibold text-sm uppercase tracking-wider mb-2">
//               Our Locations
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C]">
//               Rescue Centres Across Rajasthan
//             </h2>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {centres.map((centre, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-[#FFD100]"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 bg-[#002B5C] rounded-full flex items-center justify-center flex-shrink-0">
//                     <MapPin className="w-6 h-6 text-[#FFD100]" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-lg font-bold text-[#002B5C]">{centre.name}</h3>
//                     <p className="text-gray-600 text-sm mb-2">{centre.location}</p>
//                     <div className="flex items-center gap-4 text-sm">
//                       <span className="text-[#F58220] font-semibold">
//                         🐕 {centre.dogs} dogs
//                       </span>
//                       <span className="text-gray-500">
//                         Est. {centre.established}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Link to="/contact">
//               <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
//                 Visit a Centre
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Contact Info */}
//       <section className="py-16 bg-[#FFD100]">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid md:grid-cols-3 gap-8 text-center">
//             <div>
//               <div className="w-14 h-14 bg-[#002B5C] rounded-full flex items-center justify-center mx-auto mb-4">
//                 <MapPin className="w-7 h-7 text-[#FFD100]" />
//               </div>
//               <h3 className="font-bold text-[#002B5C] mb-2">Visit Us</h3>
//               <p className="text-[#002B5C]/80">{orgInfo.address}</p>
//             </div>
//             <div>
//               <div className="w-14 h-14 bg-[#002B5C] rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Phone className="w-7 h-7 text-[#FFD100]" />
//               </div>
//               <h3 className="font-bold text-[#002B5C] mb-2">Call Us</h3>
//               <p className="text-[#002B5C]/80">{orgInfo.phone}</p>
//             </div>
//             <div>
//               <div className="w-14 h-14 bg-[#002B5C] rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Mail className="w-7 h-7 text-[#FFD100]" />
//               </div>
//               <h3 className="font-bold text-[#002B5C] mb-2">Email Us</h3>
//               <p className="text-[#002B5C]/80">{orgInfo.email}</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <CTABanner
//         title="Be Part of Our Story"
//         description="Join thousands of supporters who are helping us give every dog a loving home."
//         primaryButtonText="Donate Now"
//         primaryButtonLink="/donate"
//         secondaryButtonText="Volunteer With Us"
//         secondaryButtonLink="/get-involved"
//       />
//     </div>
//   );
// };

// export default WhoWeArePage;






import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Heart, Users, Target, Eye, Award, MapPin,
  Calendar, Mail, Phone, ArrowRight, Star, ChevronRight
} from 'lucide-react';

// ─── orgInfo mock ──────────────────────────────────────────────────────────────
const orgInfo = {
  name: 'Suranango for Dogs',
  tagline: 'Every Dog Deserves a Loving Home',
  foundedYear: 2010,
  address: 'Surana Nagar, Jaipur, Rajasthan 302001',
  phone: '+91 98765 43210',
  email: 'hello@suranango.org',
};

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
function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let st = null;
    const step = (ts) => {
      if (!st) st = ts;
      const p = Math.min((ts - st) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ─── StatBadge (inline in hero) ───────────────────────────────────────────────
const StatBadge = ({ num, suffix, label, started }) => {
  const c = useCountUp(num, 1600, started);
  return (
    <div className="text-center px-6 border-r border-white/15 last:border-0">
      <div className="text-3xl font-black text-[#ffd100]" style={{ fontFamily: "'Playfair Display',serif" }}>
        {c.toLocaleString()}{suffix}
      </div>
      <div className="text-blue-300 text-xs uppercase tracking-widest font-medium mt-1">{label}</div>
    </div>
  );
};

// ─── TimelineItem ─────────────────────────────────────────────────────────────
const TimelineItem = ({ year, title, description, index, visible }) => {
  const isLeft = index % 2 === 0;
  return (
    <div className={`timeline-item flex items-center gap-0 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} ${visible ? 'in' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}>
      {/* Card */}
      <div className={`flex-1 flex ${isLeft ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
        <div className="timeline-card group bg-white rounded-3xl p-7 shadow-md border-2 border-slate-100 max-w-sm w-full relative overflow-hidden">
          <div className="tl-bar" />
          <span className="text-[#f97316] font-black text-xl" style={{ fontFamily: "'Playfair Display',serif" }}>{year}</span>
          <h3 className="text-lg font-black text-[#002b5c] mt-1 mb-2" style={{ fontFamily: "'Playfair Display',serif" }}>{title}</h3>
          <p className="text-gray-500 text-sm font-light leading-relaxed">{description}</p>
        </div>
      </div>
      {/* Dot */}
      <div className="hidden md:flex w-14 h-14 bg-[#002b5c] rounded-full items-center justify-center flex-shrink-0 z-10 shadow-xl border-4 border-white group-hover:bg-[#ffd100] transition-colors duration-300 timeline-dot">
        <Calendar size={20} className="text-[#ffd100] tl-icon" />
      </div>
      <div className="flex-1 hidden md:block" />
    </div>
  );
};

// ─── ValueCard ────────────────────────────────────────────────────────────────
const accentColors = ['#ffd100','#f97316','#0891b2','#10b981','#8b5cf6','#f43f5e'];

const ValueCard = ({ icon, title, description, index }) => {
  const ac = accentColors[index % accentColors.length];
  return (
    <div className="value-card group relative rounded-3xl p-8 overflow-hidden cursor-default" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
      <div className="value-glow" style={{ background: ac }} />
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10 value-icon transition-all duration-500" style={{ background: `${ac}25`, border: `2px solid ${ac}40` }}>
        <span style={{ color: ac }}>{icon}</span>
      </div>
      <h3 className="text-xl font-black text-white mb-3 relative z-10" style={{ fontFamily: "'Playfair Display',serif" }}>{title}</h3>
      <p className="text-blue-200 text-sm leading-relaxed font-light relative z-10">{description}</p>
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-x-2 group-hover:translate-x-0 z-10">
        <ChevronRight size={20} style={{ color: ac }} />
      </div>
    </div>
  );
};

// ─── TeamCard ─────────────────────────────────────────────────────────────────
const TeamCard = ({ name, role, bio, image }) => (
  <div className="team-card group bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100">
    <div className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
      <img src={image} alt={name} className="w-full h-full object-cover team-img transition-transform duration-700" loading="lazy" />
      {/* Hover overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: 'linear-gradient(to top, rgba(0,43,92,0.93) 0%, rgba(0,43,92,0.4) 60%, transparent 100%)' }}>
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
          <p className="text-white text-xs font-light leading-relaxed">{bio}</p>
        </div>
      </div>
      {/* Gold bar top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#ffd100] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
    <div className="p-6">
      <h3 className="text-lg font-black text-[#002b5c]" style={{ fontFamily: "'Playfair Display',serif" }}>{name}</h3>
      <p className="text-[#f97316] font-semibold text-sm mt-1">{role}</p>
      <div className="mt-3 flex gap-0.5">
        {[...Array(5)].map((_, i) => <Star key={i} size={11} className="text-amber-400 fill-amber-400" />)}
      </div>
    </div>
  </div>
);

// ─── CentreCard ───────────────────────────────────────────────────────────────
const CentreCard = ({ name, location, dogs, established, index }) => (
  <div className="centre-card group bg-white rounded-3xl p-7 border-2 border-slate-100 relative overflow-hidden" style={{ animationDelay: `${index * 80}ms` }}>
    <div className="centre-fill" />
    <div className="flex items-start gap-5 relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-[#002b5c] flex items-center justify-center flex-shrink-0 group-hover:bg-[#ffd100] transition-colors duration-400 shadow-lg">
        <MapPin size={22} className="text-[#ffd100] group-hover:text-[#002b5c] transition-colors duration-400" />
      </div>
      <div className="flex-1">
        <h3 className="text-base font-black text-[#002b5c] mb-1" style={{ fontFamily: "'Playfair Display',serif" }}>{name}</h3>
        <p className="text-gray-400 text-xs mb-3 flex items-center gap-1"><MapPin size={10} className="text-gray-300" />{location}</p>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#ffd100] rounded-full transition-all duration-1000" style={{ width: `${Math.min(dogs * 1.2, 100)}%` }} />
          </div>
          <span className="text-[#002b5c] font-black text-sm">{dogs}</span>
          <span className="text-gray-400 text-xs">dogs</span>
        </div>
        <span className="text-gray-400 text-xs">Est. {established}</span>
      </div>
    </div>
    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
      <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">✓ Open for Adoption</span>
      <ChevronRight size={15} className="text-gray-300 group-hover:text-[#002b5c] group-hover:translate-x-1 transition-all duration-300" />
    </div>
  </div>
);

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
const WhoWeArePage = () => {
  const hero = useReveal(0.05);
  const missionVision = useReveal();
  const story = useReveal();
  const timeline = useReveal();
  const valuesRef = useReveal();
  const statsRef = useReveal();
  const teamRef = useReveal();
  const centresRef = useReveal();
  const contactRef = useReveal();

  const values = [
    { icon: <Heart size={28} />, title: 'Compassion', description: 'We treat every animal with love, kindness, and respect, recognizing their right to a life free from suffering.' },
    { icon: <Users size={28} />, title: 'Community', description: 'We believe in building strong relationships with local communities to create lasting change for animals.' },
    { icon: <Target size={28} />, title: 'Commitment', description: 'We never give up on any animal. Every dog deserves a chance at happiness, no matter their circumstances.' },
    { icon: <Award size={28} />, title: 'Excellence', description: 'We maintain the highest standards in animal care, welfare practices, and organizational transparency.' },
    { icon: <Eye size={28} />, title: 'Transparency', description: 'We operate with complete openness, ensuring donors and supporters know exactly how their contributions help.' },
    { icon: <Star size={28} />, title: 'Integrity', description: 'We uphold ethical practices in everything we do, from rescue operations to adoption processes.' },
  ];

  const leadershipTeam = [
    { name: 'Dr. Meera Sharma', role: 'Founder & Director', bio: 'Dr. Meera founded Suranango for Dogs in 2010. A veterinarian with 20+ years of animal welfare experience driving every rescue.', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop' },
    { name: 'Rajesh Kumar Jain', role: 'Chief Operations Officer', bio: 'Rajesh oversees all shelter operations and rescue activities, scaling operations to serve thousands of dogs annually.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
    { name: 'Dr. Priya Agarwal', role: 'Head Veterinarian', bio: 'Dr. Priya leads our medical team with expertise in emergency care and complex surgeries — 10,000+ animals treated.', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop' },
    { name: 'Amit Singh Rathore', role: 'Adoption Coordinator', bio: 'Amit manages our rehoming program, carefully matching dogs with families. Over 3,000 dogs rehomed under his watch.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop' },
    { name: 'Sunita Devi', role: 'Volunteer Manager', bio: 'Sunita coordinates 100+ volunteers across all centres, growing our volunteer base by 300% in 4 years.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop' },
    { name: 'Vikram Mehta', role: 'Outreach & Education', bio: 'Vikram leads community education programs in schools and neighborhoods across Rajasthan.', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop' },
  ];

  const centres = [
    { name: 'Jaipur Main Centre', location: 'Surana Nagar, Jaipur', dogs: 55, established: 2010 },
    { name: 'Jodhpur Shelter', location: 'Ratanada, Jodhpur', dogs: 42, established: 2013 },
    { name: 'Udaipur Rescue Home', location: 'Hiran Magri, Udaipur', dogs: 38, established: 2015 },
    { name: 'Ajmer Care Centre', location: 'Civil Lines, Ajmer', dogs: 30, established: 2017 },
    { name: 'Bikaner Shelter', location: 'Lalgarh, Bikaner', dogs: 28, established: 2019 },
    { name: 'Kota Rescue Centre', location: 'Talwandi, Kota', dogs: 22, established: 2021 },
  ];

  const timelineData = [
    { year: '2010', title: 'Foundation', description: 'Suranango for Dogs founded in Jaipur by Dr. Meera Sharma with 20 dogs in a backyard.' },
    { year: '2012', title: 'First 500 Rescues', description: 'Reached the milestone of 500 dogs rescued and successfully rehomed.' },
    { year: '2013', title: 'Jodhpur Expansion', description: 'Opened our second shelter in Jodhpur, doubling capacity.' },
    { year: '2015', title: 'Sterilization Program', description: 'Launched large-scale ABC sterilization program across Rajasthan.' },
    { year: '2017', title: '5 Centres', description: 'Expanded to 5 rescue centres — serving all major Rajasthan cities.' },
    { year: '2020', title: '10 Year Anniversary', description: 'Celebrated 10 years with 15,000+ dogs helped across the state.' },
    { year: '2023', title: '6th Centre', description: 'Opened Kota Rescue Centre, our newest and most modern facility.' },
    { year: '2024', title: 'Today', description: 'Continuing our mission with 200+ dogs in care daily.' },
  ];

  const statsData = [
    { num: 25000, suffix: '+', label: 'Dogs Rescued' },
    { num: 8000, suffix: '+', label: 'Adoptions' },
    { num: 50000, suffix: '+', label: 'Vaccinations' },
    { num: 100, suffix: '+', label: 'Volunteers' },
  ];

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

        /* stagger grid children */
        .stagger > * { opacity:0; transform:translateY(22px); transition:opacity 0.6s ease, transform 0.6s ease; }
        .stagger.in > *:nth-child(1){opacity:1;transform:none;transition-delay:0ms}
        .stagger.in > *:nth-child(2){opacity:1;transform:none;transition-delay:80ms}
        .stagger.in > *:nth-child(3){opacity:1;transform:none;transition-delay:160ms}
        .stagger.in > *:nth-child(4){opacity:1;transform:none;transition-delay:240ms}
        .stagger.in > *:nth-child(5){opacity:1;transform:none;transition-delay:320ms}
        .stagger.in > *:nth-child(6){opacity:1;transform:none;transition-delay:400ms}

        /* ── Hero floating paws ── */
        @keyframes floatpaw { 0%,100%{transform:translateY(0) rotate(-8deg)} 50%{transform:translateY(-16px) rotate(8deg)} }
        .paw-float { animation:floatpaw 5s ease-in-out infinite; }

        /* ── Mission/Vision cards ── */
        .mv-card { transition:transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.45s ease; }
        .mv-card:hover { transform:translateY(-10px); box-shadow:0 30px 60px rgba(0,0,0,0.15); }

        /* ── Timeline ── */
        .timeline-item { opacity:0; transform:translateY(24px); transition:opacity 0.7s ease, transform 0.7s ease; }
        .timeline-item.in { opacity:1; transform:translateY(0); }
        .timeline-card { transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease, border-color 0.3s ease; }
        .timeline-card:hover { transform:translateY(-6px); box-shadow:0 20px 45px rgba(0,43,92,0.12); border-color:#ffd100; }
        .tl-bar { position:absolute; top:0; left:0; width:100%; height:3px; background:linear-gradient(90deg,#ffd100,#f97316); transform:scaleX(0); transform-origin:left; transition:transform 0.5s ease; border-radius:3px 3px 0 0; }
        .timeline-card:hover .tl-bar { transform:scaleX(1); }
        .timeline-dot { transition:background 0.3s ease, transform 0.3s ease; }
        .timeline-dot:hover { background:#ffd100 !important; transform:scale(1.15); }
        .tl-icon { transition:color 0.3s ease; }
        .timeline-dot:hover .tl-icon { color:#002b5c !important; }

        /* ── Value cards ── */
        .value-card { transition:transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease, border-color 0.3s ease; }
        .value-card:hover { transform:translateY(-10px); box-shadow:0 28px 56px rgba(0,0,0,0.2); border-color:rgba(255,209,0,0.4) !important; }
        .value-glow { position:absolute; inset:0; opacity:0; transition:opacity 0.4s ease; border-radius:inherit; }
        .value-card:hover .value-glow { opacity:0.08; }
        .value-icon { transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1); }
        .value-card:hover .value-icon { transform:scale(1.12) rotate(-6deg); }

        /* ── Stats ── */
        .stat-box { background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.12); backdrop-filter:blur(10px); border-radius:24px; transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease, border-color 0.3s ease; position:relative; overflow:hidden; }
        .stat-box:hover { transform:translateY(-8px) scale(1.03); box-shadow:0 24px 50px rgba(255,209,0,0.2); border-color:rgba(255,209,0,0.45); }
        .stat-shine { position:absolute; top:-50%; left:-60%; width:40%; height:200%; background:linear-gradient(105deg,transparent,rgba(255,255,255,0.09),transparent); transform:skewX(-15deg); transition:left 0.8s ease; pointer-events:none; }
        .stat-box:hover .stat-shine { left:130%; }

        /* ── Team cards ── */
        .team-card { transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease; }
        .team-card:hover { transform:translateY(-10px); box-shadow:0 28px 60px rgba(0,43,92,0.16); }
        .team-card:hover .team-img { transform:scale(1.07); }

        /* ── Centre cards ── */
        .centre-card { transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease, border-color 0.3s ease; }
        .centre-card:hover { transform:translateY(-8px); box-shadow:0 24px 50px rgba(0,43,92,0.12); border-color:#ffd100; }
        .centre-fill { position:absolute; inset:0; background:linear-gradient(135deg,#ffd10008,transparent); opacity:0; transition:opacity 0.4s ease; border-radius:inherit; }
        .centre-card:hover .centre-fill { opacity:1; }

        /* ── Contact cards ── */
        .contact-card { transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease; }
        .contact-card:hover { transform:translateY(-8px); box-shadow:0 20px 40px rgba(0,43,92,0.15); }
        .contact-icon { transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease; }
        .contact-card:hover .contact-icon { transform:scale(1.12) rotate(-5deg); background:#002b5c !important; }

        /* ── Buttons ── */
        .btn-navy { position:relative; overflow:hidden; background:#002b5c; color:white; transition:transform 0.25s ease, box-shadow 0.25s ease; }
        .btn-navy::after { content:''; position:absolute; inset:0; background:linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.15) 50%,transparent 60%); background-size:200% 100%; background-position:200% 0; transition:background-position 0.5s ease; }
        .btn-navy:hover { transform:translateY(-3px); box-shadow:0 14px 36px rgba(0,43,92,0.35); }
        .btn-navy:hover::after { background-position:-200% 0; }
        .btn-outline { transition:all 0.3s ease; }
        .btn-outline:hover { background:#ffffff; color:#002b5c; transform:translateY(-3px); }

        /* ── Dot bg ── */
        .dot-bg { background-image:radial-gradient(circle, rgba(0,43,92,0.07) 1px, transparent 1px); background-size:26px 26px; }

        /* ── Story image ── */
        .story-wrap { transition:transform 0.5s ease, box-shadow 0.5s ease; }
        .story-wrap:hover { transform:translateY(-6px) rotate(-1deg); box-shadow:0 32px 70px rgba(0,43,92,0.18); }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        ref={hero.ref}
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(140deg, #001628 0%, #002b5c 60%, #003875 100%)', minHeight: '580px' }}
      >
        {/* Orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #ffd100, transparent)', filter: 'blur(100px)' }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #3b82f6, transparent)', filter: 'blur(70px)' }} />
          {/* grid lines */}
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '55px 55px' }} />
          {/* floating paws */}
          {['10%','70%','45%','85%','25%','60%'].map((left, i) => (
            <div key={i} className="paw-float absolute text-white/[0.04] select-none text-5xl" style={{ top: `${8 + i * 14}%`, left, animationDelay: `${i * 0.8}s` }}>🐾</div>
          ))}
        </div>

        {/* bg image */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&h=800&fit=crop" alt="" className="w-full h-full object-cover opacity-10" />
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-28 flex flex-col justify-center rev ${hero.visible ? 'in' : ''}`} style={{ minHeight: '580px' }}>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[#ffd100] font-black text-xs uppercase tracking-widest mb-6 px-4 py-2 rounded-full border border-[#ffd100]/25 bg-[#ffd100]/10">
              <Users size={12} /> About Us
            </span>
            <h1 className="font-black text-white leading-tight mb-6" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2.6rem,5vw,4.2rem)', lineHeight: 1.05 }}>
              Who We <span style={{ color: '#ffd100', fontStyle: 'italic' }}>Are</span>
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed font-light mb-10 max-w-xl">
              {orgInfo.name} is Rajasthan's leading dog rescue organization. Since {orgInfo.foundedYear}, we've been dedicated to rescuing street dogs, providing medical care, and finding them loving forever homes.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/what-we-do" className="btn-navy inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold shadow-xl">
                See What We Do <ArrowRight size={16} className="text-[#ffd100]" />
              </a>
              <a href="/get-involved" className="btn-outline inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold border-2 border-white/40 text-white">
                Join Our Team <Heart size={16} />
              </a>
            </div>
          </div>

          {/* Stats strip */}
          <div className={`mt-16 inline-flex flex-wrap gap-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-2 py-4 rev ${hero.visible ? 'in' : ''}`} style={{ transitionDelay: '300ms' }}>
            {statsData.map((s, i) => (
              <StatBadge key={i} {...s} started={hero.visible} />
            ))}
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '60px' }}>
            <path d="M0,35 C480,70 960,0 1440,35 L1440,70 L0,70 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative" ref={missionVision.ref}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className={`text-center mb-14 rev ${missionVision.visible ? 'in' : ''}`}>
            <span className="inline-block text-[#f97316] font-black text-xs uppercase tracking-widest mb-3 px-3 py-1 bg-orange-50 rounded-full border border-orange-100">Our Purpose</span>
            <h2 className="font-black text-[#002b5c] mt-2" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4vw,3rem)' }}>
              Mission & <span style={{ fontStyle: 'italic', color: '#f97316' }}>Vision</span>
            </h2>
          </div>
          <div className={`grid lg:grid-cols-2 gap-8 stagger ${missionVision.visible ? 'in' : ''}`}>
            {/* Mission */}
            <div className="mv-card rounded-3xl p-10 md:p-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #ffd100 0%, #ffec6e 100%)' }}>
              <div className="pointer-events-none absolute top-0 right-0 w-48 h-48 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #002b5c, transparent)', filter: 'blur(40px)' }} />
              <div className="w-16 h-16 bg-[#002b5c] rounded-2xl flex items-center justify-center mb-7 shadow-lg">
                <Target size={30} className="text-[#ffd100]" />
              </div>
              <h2 className="font-black text-[#002b5c] mb-5" style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.9rem' }}>Our Mission</h2>
              <p className="text-[#002b5c]/75 text-lg leading-relaxed font-light">
                To rescue, rehabilitate, and rehome abandoned and injured street dogs while promoting responsible pet ownership and compassionate coexistence throughout Rajasthan.
              </p>
            </div>
            {/* Vision */}
            <div className="mv-card rounded-3xl p-10 md:p-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #002b5c 0%, #001a3d 100%)', border: '1px solid rgba(255,209,0,0.2)' }}>
              <div className="pointer-events-none absolute top-0 right-0 w-48 h-48 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #ffd100, transparent)', filter: 'blur(40px)' }} />
              <div className="w-16 h-16 bg-[#ffd100] rounded-2xl flex items-center justify-center mb-7 shadow-lg shadow-[#ffd100]/30">
                <Eye size={30} className="text-[#002b5c]" />
              </div>
              <h2 className="font-black text-white mb-5" style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.9rem' }}>Our Vision</h2>
              <p className="text-blue-200 text-lg leading-relaxed font-light">
                A world where every dog is valued, protected, and loved — where no dog suffers on the streets, and every community embraces compassion towards all animals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ─────────────────────────────────────────────────────── */}
      <section className="py-24 dot-bg bg-slate-50 relative" ref={story.ref}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className={`relative rev-l ${story.visible ? 'in' : ''}`}>
              <div className="absolute inset-0 rounded-3xl bg-[#ffd100] translate-x-4 translate-y-4 opacity-80" />
              <div className="story-wrap relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white" style={{ aspectRatio: '5/4' }}>
                <img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=700&h=560&fit=crop" alt="Dog being cared for" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[#002b5c] px-7 py-5 rounded-2xl shadow-2xl border-4 border-white z-10">
                <p className="text-[#ffd100] font-black text-3xl leading-none" style={{ fontFamily: "'Playfair Display',serif" }}>14+</p>
                <p className="text-blue-200 text-xs font-medium uppercase tracking-wider mt-1">Years of Service</p>
              </div>
            </div>
            {/* Text */}
            <div className={`rev-r ${story.visible ? 'in' : ''}`}>
              <span className="inline-block text-[#f97316] font-black text-xs uppercase tracking-widest mb-4 px-3 py-1 bg-orange-50 rounded-full border border-orange-100">Our Story</span>
              <h2 className="font-black text-[#002b5c] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.9rem,3.5vw,2.8rem)' }}>
                From Small Beginnings<br />
                <span style={{ fontStyle: 'italic', color: '#f97316' }}>to Big Impact</span>
              </h2>
              <div className="space-y-5 text-gray-500 font-light leading-relaxed">
                <p>{orgInfo.name} was born from a simple act of compassion. In 2010, Dr. Meera Sharma, a young veterinarian in Jaipur, began rescuing injured street dogs from her neighborhood. What started as caring for a few dogs in her backyard soon grew into something much bigger.</p>
                <p>Moved by the suffering she witnessed daily and inspired by the resilience of these animals, Dr. Meera established {orgInfo.name} with a small team of volunteers and a rented space that could house just 20 dogs.</p>
                <p>Today, we operate 6 rescue centres across Rajasthan, employ a team of dedicated professionals and veterinarians, and have helped over 25,000 dogs find safety, healing, and love.</p>
              </div>
              <a href="/get-involved" className="btn-navy mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-bold shadow-xl">
                Be Part of Our Story <ArrowRight size={16} className="text-[#ffd100]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative" ref={timeline.ref}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className={`text-center mb-16 rev ${timeline.visible ? 'in' : ''}`}>
            <span className="inline-block text-[#f97316] font-black text-xs uppercase tracking-widest mb-3 px-3 py-1 bg-orange-50 rounded-full border border-orange-100">Our Journey</span>
            <h2 className="font-black text-[#002b5c] mt-2" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4vw,3rem)' }}>
              Key <span style={{ fontStyle: 'italic', color: '#f97316' }}>Milestones</span>
            </h2>
          </div>

          <div className="relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(to bottom, #ffd100, #f97316, #ffd100)' }} />

            <div className="space-y-10">
              {timelineData.map((item, i) => (
                <TimelineItem key={i} index={i} visible={timeline.visible} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ───────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" ref={valuesRef.ref} style={{ background: 'linear-gradient(140deg, #001628 0%, #002b5c 100%)' }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #ffd100, transparent)', filter: 'blur(100px)' }} />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #3b82f6, transparent)', filter: 'blur(80px)' }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '55px 55px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className={`text-center mb-16 rev ${valuesRef.visible ? 'in' : ''}`}>
            <span className="inline-block text-[#ffd100] font-black text-xs uppercase tracking-widest mb-3 px-3 py-1 bg-[#ffd100]/10 rounded-full border border-[#ffd100]/25">What We Stand For</span>
            <h2 className="font-black text-white mt-2" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4vw,3rem)' }}>
              Our Core <span style={{ fontStyle: 'italic', color: '#ffd100' }}>Values</span>
            </h2>
          </div>
          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger ${valuesRef.visible ? 'in' : ''}`}>
            {values.map((v, i) => <ValueCard key={i} index={i} {...v} />)}
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative dot-bg" ref={statsRef.ref}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className={`mb-14 rev ${statsRef.visible ? 'in' : ''}`}>
            <span className="inline-block text-[#f97316] font-black text-xs uppercase tracking-widest mb-3 px-3 py-1 bg-orange-50 rounded-full border border-orange-100">Our Impact</span>
            <h2 className="font-black text-[#002b5c] mt-2" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4vw,3rem)' }}>
              Numbers That <span style={{ fontStyle: 'italic', color: '#f97316' }}>Matter</span>
            </h2>
          </div>
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-5 stagger ${statsRef.visible ? 'in' : ''}`}>
            {statsData.map((s, i) => (
              <div key={i} className="stat-box p-8" style={{ background: '#002b5c' }}>
                <div className="stat-shine" />
                <div className="text-5xl font-black text-[#ffd100] mb-2" style={{ fontFamily: "'Playfair Display',serif" }}>
                  {useCountUp(s.num, 1800, statsRef.visible).toLocaleString()}{s.suffix}
                </div>
                <div className="text-blue-300 text-xs uppercase tracking-widest font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP TEAM ───────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative" ref={teamRef.ref} id="team">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className={`text-center mb-16 rev ${teamRef.visible ? 'in' : ''}`}>
            <span className="inline-block text-[#f97316] font-black text-xs uppercase tracking-widest mb-3 px-3 py-1 bg-orange-50 rounded-full border border-orange-100">Leadership</span>
            <h2 className="font-black text-[#002b5c] mt-2" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4vw,3rem)' }}>
              Meet Our <span style={{ fontStyle: 'italic', color: '#002b5c' }}>Team</span>
            </h2>
            <p className="text-gray-400 font-light mt-3 max-w-xl mx-auto text-sm leading-relaxed">Our dedicated team brings together expertise in veterinary care, animal welfare, operations, and community outreach.</p>
          </div>
          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger ${teamRef.visible ? 'in' : ''}`}>
            {leadershipTeam.map((m, i) => <TeamCard key={i} {...m} />)}
          </div>
        </div>
      </section>

      {/* ── RESCUE CENTRES ────────────────────────────────────────────────── */}
      <section className="py-24 dot-bg bg-slate-50 relative" ref={centresRef.ref} id="centres">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className={`text-center mb-16 rev ${centresRef.visible ? 'in' : ''}`}>
            <span className="inline-block text-[#f97316] font-black text-xs uppercase tracking-widest mb-3 px-3 py-1 bg-orange-50 rounded-full border border-orange-100">Our Locations</span>
            <h2 className="font-black text-[#002b5c] mt-2" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4vw,3rem)' }}>
              Rescue Centres Across <span style={{ fontStyle: 'italic', color: '#f97316' }}>Rajasthan</span>
            </h2>
          </div>
          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger ${centresRef.visible ? 'in' : ''}`}>
            {centres.map((c, i) => <CentreCard key={i} index={i} {...c} />)}
          </div>
          <div className={`text-center mt-12 rev ${centresRef.visible ? 'in' : ''}`} style={{ transitionDelay: '500ms' }}>
            <a href="/contact" className="btn-navy inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold shadow-xl">
              Visit a Centre <ArrowRight size={16} className="text-[#ffd100]" />
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP ─────────────────────────────────────────────────── */}
      <section ref={contactRef.ref} className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #ffd100 0%, #ffec6e 50%, #ffd100 100%)' }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, #002b5c 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #002b5c, transparent)', filter: 'blur(50px)' }} />
        </div>
        <div className={`max-w-6xl mx-auto px-6 stagger ${contactRef.visible ? 'in' : ''}`}>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { icon: <MapPin size={26} />, label: 'Visit Us', value: orgInfo.address },
              { icon: <Phone size={26} />, label: 'Call Us', value: orgInfo.phone },
              { icon: <Mail size={26} />, label: 'Email Us', value: orgInfo.email },
            ].map((item, i) => (
              <div key={i} className="contact-card bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/60">
                <div className="contact-icon w-14 h-14 bg-[#002b5c] rounded-2xl flex items-center justify-center mx-auto mb-5 text-[#ffd100] shadow-lg">
                  {item.icon}
                </div>
                <h3 className="font-black text-[#002b5c] mb-2" style={{ fontFamily: "'Playfair Display',serif" }}>{item.label}</h3>
                <p className="text-[#002b5c]/70 text-sm font-light">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(140deg, #001628 0%, #002b5c 100%)' }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #ffd100, transparent)', filter: 'blur(100px)' }} />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-black text-white mb-5" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2.2rem,5vw,3.5rem)', lineHeight: 1.1 }}>
            Be Part of Our <span style={{ color: '#ffd100', fontStyle: 'italic' }}>Story</span>
          </h2>
          <p className="text-blue-200 text-lg font-light mb-10 max-w-xl mx-auto leading-relaxed">
            Join thousands of supporters who are helping us give every dog a loving home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate" className="btn-navy inline-flex items-center justify-center gap-2 bg-[#ffd100] text-[#002b5c] px-9 py-5 rounded-2xl font-bold text-base shadow-2xl">
              Donate Now <Heart size={18} fill="#002b5c" />
            </a>
            <a href="/get-involved" className="btn-outline inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-9 py-5 rounded-2xl font-bold text-base">
              Volunteer With Us <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WhoWeArePage;