// /**
//  * Our Work Page - Suranango for Dogs
//  * Main page showcasing all the work areas with links to sub-pages
//  */

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   AlertTriangle, 
//   Stethoscope, 
//   Syringe, 
//   Home, 
//   ArrowRight, 
//   Phone, 
//   CheckCircle,
//   Heart,
//   Users,
//   Shield
// } from 'lucide-react';

// const OurWorkPage: React.FC = () => {
//   // Main work areas
//   const workAreas = [
//     {
//       id: 'dog-problem-resolution',
//       icon: AlertTriangle,
//       title: 'Dog Problem Resolution',
//       description: 'We handle complaints related to community dogs including fear, aggression, barking, and puppies in danger. Our team provides humane, on-site assessment and peaceful solutions without forced relocation.',
//       features: [
//         'On-site assessment by trained professionals',
//         'Peaceful conflict resolution',
//         'Behavior management guidance',
//         'No forced relocation of dogs'
//       ],
//       link: '/our-work/dog-problem-resolution',
//       color: 'bg-orange-500',
//       lightColor: 'bg-orange-50'
//     },
//     {
//       id: 'injury-medical-care',
//       icon: Stethoscope,
//       title: 'Injury & Medical Care',
//       description: 'Emergency rescue and medical treatment for injured or sick community dogs. We respond to road accidents, provide medical evaluation, treatment, and temporary shelter during recovery.',
//       features: [
//         '24/7 emergency rescue response',
//         'Professional veterinary care',
//         'Road accident case handling',
//         'Recovery shelter support'
//       ],
//       link: '/our-work/injury-medical-care',
//       color: 'bg-red-500',
//       lightColor: 'bg-red-50'
//     },
//     {
//       id: 'vaccination-programs',
//       icon: Syringe,
//       title: 'Vaccination Programs',
//       description: 'Regular anti-rabies vaccination drives and disease prevention programs for community dogs. We protect both dogs and humans through comprehensive vaccination coverage.',
//       features: [
//         'Anti-rabies vaccination',
//         'Disease prevention programs',
//         'Community vaccination drives',
//         'Public safety education'
//       ],
//       link: '/our-work/vaccination-programs',
//       color: 'bg-green-500',
//       lightColor: 'bg-green-50'
//     },
//     {
//       id: 'shelter-support',
//       icon: Home,
//       title: 'Shelter Support',
//       description: 'Temporary shelter for injured, sick, or recovering dogs. We provide a safe environment with food, rest, medical monitoring, and care until dogs are ready to return to their community.',
//       features: [
//         'Safe recovery environment',
//         'Proper nutrition & hydration',
//         'Medical monitoring',
//         'Care until full recovery'
//       ],
//       link: '/our-work/shelter-support',
//       color: 'bg-blue-500',
//       lightColor: 'bg-blue-50'
//     }
//   ];

//   // Statistics
//   const stats = [
//     { number: '3,500+', label: 'Dogs Rescued', icon: Heart },
//     { number: '15,000+', label: 'Vaccinations Given', icon: Syringe },
//     { number: '2,000+', label: 'Conflicts Resolved', icon: Shield },
//     { number: '50+', label: 'Communities Served', icon: Users }
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20 lg:py-28">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920')] bg-cover bg-center opacity-15"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 to-navy-800/90"></div>
        
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <span className="inline-block bg-yellow-500 text-navy-900 px-4 py-1 rounded-full text-sm font-semibold mb-6">
//               What We Do
//             </span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//               Our Work for 
//               <span className="text-yellow-400"> Community Dogs</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
//               From emergency rescue to vaccination drives, we provide comprehensive care and 
//               support for community dogs while helping humans and dogs live together peacefully.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-12 bg-yellow-400">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="flex justify-center mb-2">
//                   <stat.icon className="w-8 h-8 text-navy-900" />
//                 </div>
//                 <p className="text-3xl md:text-4xl font-bold text-navy-900">{stat.number}</p>
//                 <p className="text-navy-800 font-medium">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Work Areas Section */}
//       <section className="py-16 lg:py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
//               How We Help Dogs & Communities
//             </h2>
//             <p className="text-gray-600 text-lg">
//               We provide four core services to ensure the welfare of community dogs and 
//               peaceful coexistence with humans.
//             </p>
//           </div>

//           <div className="space-y-8">
//             {workAreas.map((area) => (
//               <div 
//                 key={area.id}
//                 className={`${area.lightColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow`}
//               >
//                 <div className="grid lg:grid-cols-5 gap-0">
//                   <div className={`${area.color} p-8 lg:col-span-1 flex items-center justify-center`}>
//                     <area.icon className="w-16 h-16 text-white" />
//                   </div>
//                   <div className="p-8 lg:col-span-4">
//                     <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
//                       <div className="flex-1">
//                         <h3 className="text-2xl font-bold text-navy-900 mb-3">{area.title}</h3>
//                         <p className="text-gray-700 mb-4 leading-relaxed">{area.description}</p>
//                         <div className="grid sm:grid-cols-2 gap-2">
//                           {area.features.map((feature, idx) => (
//                             <div key={idx} className="flex items-center gap-2">
//                               <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
//                               <span className="text-gray-700 text-sm">{feature}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                       <div className="flex-shrink-0">
//                         <Link 
//                           to={area.link}
//                           className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
//                         >
//                           Learn More
//                           <ArrowRight className="w-5 h-5" />
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Approach Section */}
//       <section className="py-16 lg:py-24 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-12">
//               <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">Our Approach</span>
//               <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
//                 Humane & Compassionate Solutions
//               </h2>
//             </div>

//             <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
//               <div className="grid md:grid-cols-2 gap-8">
//                 <div>
//                   <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
//                     <CheckCircle className="w-6 h-6 text-green-600" />
//                     What We Do
//                   </h3>
//                   <ul className="space-y-3 text-gray-700">
//                     <li className="flex items-start gap-2">
//                       <span className="text-green-600 mt-1">✓</span>
//                       Respond to emergency calls for injured dogs
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <span className="text-green-600 mt-1">✓</span>
//                       Provide on-site assessment for dog-related complaints
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <span className="text-green-600 mt-1">✓</span>
//                       Conduct vaccination and sterilization programs
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <span className="text-green-600 mt-1">✓</span>
//                       Offer temporary shelter for recovering dogs
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <span className="text-green-600 mt-1">✓</span>
//                       Educate communities about dog behavior
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <span className="text-green-600 mt-1">✓</span>
//                       Resolve conflicts through peaceful dialogue
//                     </li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
//                     <AlertTriangle className="w-6 h-6 text-red-600" />
//                     What We Never Do
//                   </h3>
//                   <ul className="space-y-3 text-gray-700">
//                     <li className="flex items-start gap-2">
//                       <span className="text-red-600 mt-1">✗</span>
//                       Forcibly relocate or remove dogs
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <span className="text-red-600 mt-1">✗</span>
//                       Use cruel or inhumane methods
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <span className="text-red-600 mt-1">✗</span>
//                       Ignore legal guidelines and animal welfare laws
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <span className="text-red-600 mt-1">✗</span>
//                       Sell or trade animals
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <span className="text-red-600 mt-1">✗</span>
//                       Discriminate based on dog breed or appearance
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <span className="text-red-600 mt-1">✗</span>
//                       Abandon dogs after treatment
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Emergency Contact Section */}
//       <section className="py-16 lg:py-20 bg-red-600 text-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
//               <Phone className="w-10 h-10 text-red-600" />
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Found an Injured Dog?
//             </h2>
//             <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
//               Do not hesitate—call us immediately. Our emergency rescue team is available 
//               24/7 to help injured, sick, or distressed community dogs.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a 
//                 href="tel:+919876543210"
//                 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-xl"
//               >
//                 <Phone className="w-6 h-6" />
//                 +919999999999
//               </a>
//               <a 
//                 href="https://wa.me/919876543210"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors text-xl"
//               >
//                 WhatsApp Us
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 lg:py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
//             Support Our Mission
//           </h2>
//           <p className="text-navy-800 text-lg mb-8 max-w-2xl mx-auto">
//             Your support helps us continue our life-saving work for community dogs. 
//             Every contribution makes a difference.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link 
//               to="/donate"
//               className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
//             >
//               Donate Now
//             </Link>
//             <Link 
//               to="/community-support"
//               className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
//             >
//               Get Community Support
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default OurWorkPage;









import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';

// ─── Styles ──────────────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Playfair+Display:wght@700;800;900&display=swap');

  .ourwork-root * { font-family: 'Nunito', sans-serif; }
  .ourwork-root h1,
  .ourwork-root h2,
  .ourwork-root h3 { font-family: 'Playfair Display', serif; }

  /* Work area cards */
  .work-card {
    transition: transform 0.35s cubic-bezier(.34,1.56,.64,1), box-shadow 0.35s ease;
  }
  .work-card:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 28px 56px rgba(0,43,92,0.16);
  }
  .work-card .card-side-img {
    transition: transform 0.5s ease;
    overflow: hidden;
  }
  .work-card:hover .card-side-img img {
    transform: scale(1.1);
  }
  .work-card .card-side-img img {
    transition: transform 0.5s ease;
  }
  .learn-btn {
    transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease;
  }
  .learn-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0,43,92,0.25);
    background: #FFD100;
    color: #002B5C;
  }

  /* Stat cards */
  .stat-card {
    transition: transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease;
  }
  .stat-card:hover {
    transform: translateY(-6px) scale(1.05);
    box-shadow: 0 12px 30px rgba(0,43,92,0.15);
  }
  .stat-card .stat-img {
    transition: transform 0.4s ease;
  }
  .stat-card:hover .stat-img {
    transform: scale(1.12) rotate(-3deg);
  }

  /* Approach section */
  .approach-item {
    transition: background 0.2s ease, transform 0.2s ease;
    border-radius: 8px;
    padding: 6px 8px;
  }
  .approach-item:hover {
    background: #fffbea;
    transform: translateX(4px);
  }
  .approach-item-red:hover {
    background: #fff1f1;
    transform: translateX(4px);
  }

  /* Emergency section */
  .emergency-btn {
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .emergency-btn:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 10px 24px rgba(0,0,0,0.2);
  }

  /* CTA buttons */
  .cta-link {
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  }
  .cta-link:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }

  /* Fade-up animation */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.7s ease both; }
  .d1 { animation-delay: 0.1s; }
  .d2 { animation-delay: 0.2s; }
  .d3 { animation-delay: 0.3s; }

  /* Phone pulse */
  @keyframes pulse-ring {
    0%   { box-shadow: 0 0 0 0 rgba(255,255,255,0.5); }
    70%  { box-shadow: 0 0 0 16px rgba(255,255,255,0); }
    100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
  }
  .pulse-btn { animation: pulse-ring 2s infinite; }
`;

const OurWorkPage: React.FC = () => {

const workAreas = [
  {
    id: 'dog-problem-resolution',
    img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop',
    title: 'Dog Issue Resolution',
    description:
      'Humane and lawful resolution of dog-related complaints while ensuring safety for both residents and community dogs.',
    features: [
      'On-site complaint assessment',
      'Behavioral observation & guidance',
      'Peaceful conflict resolution',
      'Community awareness support',
    ],
    link: '/our-work/dog-problem-resolution',
    accent: '#F58220',
    lightBg: '#fff7f0',
  },
  {
    id: 'injury-medical-care',
    img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&h=300&fit=crop',
    title: 'Injury & Emergency Care',
    description:
      'Immediate rescue and medical treatment for injured or sick community dogs including road accident cases.',
    features: [
      'Emergency rescue response',
      'Veterinary treatment support',
      'Accident case handling',
      'Temporary recovery shelter',
    ],
    link: '/our-work/injury-medical-care',
    accent: '#e53e3e',
    lightBg: '#fff5f5',
  },
  {
    id: 'vaccination-programs',
    img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop',
    title: 'Vaccination Programs',
    description:
      'Regular anti-rabies and preventive vaccination drives to protect community dogs and ensure public safety.',
    features: [
      'Anti-rabies vaccination',
      'Preventive health programs',
      'Community vaccination drives',
      'Public safety awareness',
    ],
    link: '/our-work/vaccination-programs',
    accent: '#00A19A',
    lightBg: '#f0fffe',
  },
  {
    id: 'shelter-support',
    img: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=400&h=300&fit=crop',
    title: 'Shelter & Recovery Support',
    description:
      'Safe temporary shelter for injured, sick, or recovering dogs with proper care and monitoring.',
    features: [
      'Safe recovery environment',
      'Nutrition & hydration support',
      'Medical monitoring',
      'Care until full recovery',
    ],
    link: '/our-work/shelter-support',
    accent: '#002B5C',
    lightBg: '#f0f4ff',
  },
];
  const stats = [
    {
      number: '3,500+',
      label: 'Dogs Rescued',
      img: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=80&h=80&fit=crop',
    },
    {
      number: '15,000+',
      label: 'Vaccinations Given',
      img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=80&h=80&fit=crop',
    },
    {
      number: '2,000+',
      label: 'Conflicts Resolved',
      img: 'https://images.unsplash.com/photo-1581888227599-779811939961?w=80&h=80&fit=crop',
    },
    {
      number: '50+',
      label: 'Communities Served',
      img: 'https://images.unsplash.com/photo-1488778578932-0d8ce5f40dba?w=80&h=80&fit=crop',
    },
  ];

  return (
    <div className="ourwork-root min-h-screen">
      <style>{styles}</style>

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-[#002B5C] via-[#003D82] to-[#002B5C] text-white py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002B5C]/95 to-[#002B5C]/80" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-[#FFD100] text-[#002B5C] px-5 py-1.5 rounded-full text-sm font-bold mb-6 fade-up">
              What We Do
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight fade-up d1">
              Our Work for
              <span className="text-[#FFD100]"> Community Dogs</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto fade-up d2">
              From emergency rescue to vaccination drives, we provide comprehensive care and
              support for community dogs while helping humans and dogs live together peacefully.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      {/* <section className="py-12 bg-[#FFD100]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card bg-white rounded-2xl p-6 text-center shadow-md cursor-default">
                <div className="stat-img w-14 h-14 rounded-full overflow-hidden mx-auto mb-3 ring-4 ring-[#FFD100]">
                  <img src={stat.img} alt={stat.label} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <p className="text-3xl md:text-4xl font-black text-[#002B5C]">{stat.number}</p>
                <p className="text-[#002B5C] font-semibold text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Work Areas ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-[#F58220] font-bold text-sm uppercase tracking-widest">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mt-2 mb-4">
              How We Help Dogs & Communities
            </h2>
            <p className="text-gray-600 text-lg">
              We provide four core services to ensure the welfare of community dogs and
              peaceful coexistence with humans.
            </p>
          </div>

          <div className="space-y-8">
            {workAreas.map((area) => (
              <div
                key={area.id}
                className="work-card rounded-2xl overflow-hidden shadow-lg"
                style={{ background: area.lightBg }}
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Image side */}
                  <div className="card-side-img lg:col-span-1 h-48 lg:h-auto overflow-hidden">
                    <img
                      src={area.img}
                      alt={area.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:col-span-4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <h3
                          className="text-2xl font-bold mb-3"
                          style={{ color: area.accent }}
                        >
                          {area.title}
                        </h3>
                        <p className="text-gray-700 mb-5 leading-relaxed">{area.description}</p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {area.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                              <span className="text-gray-700 text-sm font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* <div className="flex-shrink-0">
                        <Link
                          to={area.link}
                          className="learn-btn inline-flex items-center gap-2 px-6 py-3 bg-[#002B5C] text-white font-bold rounded-xl"
                        >
                          Learn More
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
     <section className="py-16 lg:py-24 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-[#F58220] font-bold text-sm uppercase tracking-widest">
          Our Commitment
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mt-2 mb-4">
          Humane & Responsible Dog Care
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are dedicated exclusively to the welfare of community dogs, 
          ensuring safety, medical care, and peaceful coexistence in society.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-10">

          {/* What we do */}
          <div>
            <h3 className="text-xl font-bold text-[#002B5C] mb-5 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              What We Do
            </h3>
            <ul className="space-y-3 text-gray-700">
              {[
                'Rescue and treat injured or sick community dogs',
                'Respond to dog-related complaints with on-site assessment',
                'Conduct anti-rabies vaccination programs',
                'Provide temporary shelter during recovery',
                'Promote awareness about safe dog-human coexistence',
                'Ensure humane and lawful resolution of conflicts',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What we never do */}
          <div>
            <h3 className="text-xl font-bold text-[#002B5C] mb-5 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              What We Never Do
            </h3>
            <ul className="space-y-3 text-gray-700">
              {[
                'Forcibly remove or illegally relocate dogs',
                'Use poison, violence, or cruel methods',
                'Encourage harm against community dogs',
                'Sell, trade, or exploit animals',
                'Ignore society concerns or legal guidelines',
                'Abandon dogs after treatment or rescue',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5">✗</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

      {/* ── Emergency Contact ── */}
      <section className="py-16 lg:py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Phone image instead of icon */}
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-white pulse-btn">
              <img
                src="https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?w=120&h=120&fit=crop"
                alt="Emergency rescue"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Found an Injured Dog?</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Do not hesitate — call us immediately. Our emergency rescue team is available
              24/7 to help injured, sick, or distressed community dogs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="emergency-btn inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-red-600 font-black rounded-xl text-xl"
              >
                📞 +919999999999
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="emergency-btn inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-black rounded-xl text-xl"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-[#FFD100] to-[#F58220]">
        <div className="container mx-auto px-4 text-center">
          {/* Dog image */}
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=80&h=80&fit=crop"
              alt="Support our mission"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">Support Our Mission</h2>
          <p className="text-[#002B5C]/80 text-lg mb-8 max-w-2xl mx-auto font-semibold">
            Your support helps us continue our life-saving work for community dogs.
            Every contribution makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="cta-link inline-flex items-center justify-center px-8 py-4 bg-[#002B5C] text-white font-bold rounded-xl text-lg"
            >
              ❤️ Donate Now
            </Link>
            <Link
              to="/community-support"
              className="cta-link inline-flex items-center justify-center px-8 py-4 bg-white text-[#002B5C] font-bold rounded-xl text-lg"
            >
              Get Community Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWorkPage;
