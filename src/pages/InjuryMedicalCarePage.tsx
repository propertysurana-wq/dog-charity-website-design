// /**
//  * Injury & Medical Care Page - Suranango for Dogs
//  * Emergency rescue and medical treatment for injured community dogs
//  */

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   Stethoscope, 
//   Phone, 
//   Clock, 
//   Ambulance,
//   Heart,
//   CheckCircle,
//   ArrowLeft,
//   AlertTriangle,
//   Thermometer,
//   Pill,
//   Home,
//   Shield
// } from 'lucide-react';

// const InjuryMedicalCarePage: React.FC = () => {
//   // Types of cases we handle
//   const caseTypes = [
//     {
//       title: 'Road Accidents',
//       description: 'Immediate response for dogs hit by vehicles. We provide on-site first aid, transport to our clinic, and complete medical care.',
//       icon: Ambulance
//     },
//     {
//       title: 'Injuries & Wounds',
//       description: 'Treatment for cuts, bites, fractures, and other injuries. We clean, stitch, and care for wounds until fully healed.',
//       icon: Heart
//     },
//     {
//       title: 'Sick Dogs',
//       description: 'Medical evaluation and treatment for dogs showing signs of illness—fever, weakness, skin diseases, or infections.',
//       icon: Thermometer
//     },
//     {
//       title: 'Poisoning Cases',
//       description: 'Emergency treatment for dogs that have ingested poison. Time is critical—call us immediately if you suspect poisoning.',
//       icon: AlertTriangle
//     },
//     {
//       title: 'Post-Surgery Care',
//       description: 'Proper care and monitoring after sterilization or other surgeries until the dog is fully recovered.',
//       icon: Pill
//     },
//     {
//       title: 'Severe Malnutrition',
//       description: 'Specialized care for extremely weak or malnourished dogs, including proper nutrition and medical support.',
//       icon: Shield
//     }
//   ];

//   // Our rescue process
//   const rescueProcess = [
//     {
//       step: 1,
//       title: 'Receive Emergency Call',
//       description: 'You call our emergency helpline with details about the injured dog and location.',
//       time: 'Immediately'
//     },
//     {
//       step: 2,
//       title: 'Dispatch Rescue Team',
//       description: 'Our ambulance and trained rescue team are dispatched to the location.',
//       time: 'Within 15-30 mins'
//     },
//     {
//       step: 3,
//       title: 'On-Site First Aid',
//       description: 'We provide immediate first aid at the scene to stabilize the dog.',
//       time: 'On arrival'
//     },
//     {
//       step: 4,
//       title: 'Transport to Clinic',
//       description: 'The dog is carefully transported to our clinic or partner veterinary hospital.',
//       time: 'Safe transport'
//     },
//     {
//       step: 5,
//       title: 'Medical Evaluation',
//       description: 'Complete examination by our veterinarian to assess all injuries and plan treatment.',
//       time: 'Thorough check'
//     },
//     {
//       step: 6,
//       title: 'Treatment & Care',
//       description: 'Full medical treatment including surgery if needed, medication, and wound care.',
//       time: 'As needed'
//     },
//     {
//       step: 7,
//       title: 'Recovery & Monitoring',
//       description: 'The dog stays in our shelter for recovery with proper food, rest, and medical monitoring.',
//       time: 'Until healthy'
//     },
//     {
//       step: 8,
//       title: 'Return to Community',
//       description: 'Once fully recovered, the dog is returned to its original territory.',
//       time: 'When ready'
//     }
//   ];

//   // What to do when you find an injured dog
//   const firstAidTips = [
//     {
//       title: 'Call Us First',
//       description: 'Call our emergency number immediately. Provide location, condition of the dog, and any visible injuries.'
//     },
//     {
//       title: 'Stay Calm',
//       description: 'Injured dogs may be scared and could bite. Approach slowly, speak softly, and avoid sudden movements.'
//     },
//     {
//       title: 'Keep the Dog Warm',
//       description: 'If possible, cover the dog with a cloth or blanket to prevent shock. Do not move the dog unless necessary.'
//     },
//     {
//       title: 'Do Not Feed',
//       description: 'Do not give food or water to an injured dog—it could cause choking or complications during treatment.'
//     },
//     {
//       title: 'Control Bleeding',
//       description: 'If there is severe bleeding, gently press a clean cloth against the wound until help arrives.'
//     },
//     {
//       title: 'Stay with the Dog',
//       description: 'If safe, stay with the dog until our rescue team arrives. Your presence can keep the dog calm.'
//     }
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-red-600 via-red-500 to-red-600 text-white py-16 lg:py-24">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920')] bg-cover bg-center opacity-10"></div>
        
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
//                 <Stethoscope className="w-8 h-8 text-red-600" />
//               </div>
//               <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold">
//                 Our Work
//               </span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//               Injury & Medical Care
//             </h1>
//             <p className="text-xl text-red-100 leading-relaxed max-w-3xl">
//               We provide emergency rescue and complete medical care for injured, sick, and 
//               distressed community dogs. Our team responds 24/7 to save lives.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Emergency Contact Banner */}
//       <section className="py-6 bg-yellow-400">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
//             <div className="flex items-center gap-2">
//               <Phone className="w-8 h-8 text-navy-900 animate-pulse" />
//               <span className="text-navy-900 text-lg font-bold">Emergency Rescue Helpline:</span>
//             </div>
//             <a 
//               href="tel:+919876543210"
//               className="text-2xl md:text-3xl font-bold text-navy-900 hover:text-navy-700"
//             >
//               +919999999999
//             </a>
//             <span className="flex items-center gap-2 text-navy-800">
//               <Clock className="w-5 h-5" />
//               Available 24/7
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* Case Types Section */}
//       <section className="py-16 lg:py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Cases We Handle</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
//               Types of Medical Emergencies
//             </h2>
//             <p className="text-gray-600 text-lg">
//               We respond to all types of medical emergencies affecting community dogs.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
//             {caseTypes.map((caseType, index) => (
//               <div 
//                 key={index}
//                 className="bg-red-50 rounded-xl p-6 border border-red-100 hover:shadow-lg transition-shadow"
//               >
//                 <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
//                   <caseType.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-navy-900 mb-2">{caseType.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{caseType.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Rescue Process Section */}
//       <section className="py-16 lg:py-24 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
//               From Rescue to Recovery
//             </h2>
//             <p className="text-gray-600 text-lg">
//               Our complete process ensures every injured dog receives the care it needs.
//             </p>
//           </div>

//           <div className="max-w-5xl mx-auto">
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
//               {rescueProcess.map((item) => (
//                 <div 
//                   key={item.step}
//                   className="bg-white rounded-xl p-5 shadow-md relative"
//                 >
//                   <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-3">
//                     {item.step}
//                   </div>
//                   <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed mb-2">{item.description}</p>
//                   <span className="text-red-600 text-xs font-semibold">{item.time}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* What To Do Section */}
//       <section className="py-16 lg:py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Quick Guide</span>
//               <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6">
//                 Found an Injured Dog? Here is What to Do
//               </h2>
//               <p className="text-gray-600 mb-8 leading-relaxed">
//                 If you find an injured community dog, follow these steps while waiting for 
//                 our rescue team to arrive. Your quick action can save a life.
//               </p>
              
//               <div className="space-y-4">
//                 {firstAidTips.map((tip, index) => (
//                   <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
//                     <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
//                       {index + 1}
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-navy-900">{tip.title}</h4>
//                       <p className="text-gray-600 text-sm">{tip.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative">
//               <img 
//                 src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=700&fit=crop" 
//                 alt="Caring for injured dog"
//                 className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
//               />
//               <div className="absolute -bottom-6 -right-6 bg-red-500 text-white rounded-xl p-6 shadow-lg">
//                 <p className="font-bold text-3xl">500+</p>
//                 <p className="font-medium">Rescues/Year</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Facilities Section */}
//       <section className="py-16 lg:py-24 bg-red-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Our Resources</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
//               Equipped to Save Lives
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
//             <div className="bg-white rounded-xl p-6 text-center shadow-md">
//               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Ambulance className="w-8 h-8 text-red-600" />
//               </div>
//               <h3 className="font-bold text-navy-900 mb-2">Rescue Ambulance</h3>
//               <p className="text-gray-600 text-sm">Fully equipped ambulance for emergency rescue and transport</p>
//             </div>
//             <div className="bg-white rounded-xl p-6 text-center shadow-md">
//               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Stethoscope className="w-8 h-8 text-red-600" />
//               </div>
//               <h3 className="font-bold text-navy-900 mb-2">Veterinary Clinic</h3>
//               <p className="text-gray-600 text-sm">In-house clinic with surgery facilities and diagnostic equipment</p>
//             </div>
//             <div className="bg-white rounded-xl p-6 text-center shadow-md">
//               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Home className="w-8 h-8 text-red-600" />
//               </div>
//               <h3 className="font-bold text-navy-900 mb-2">Recovery Shelter</h3>
//               <p className="text-gray-600 text-sm">Clean, safe shelter for dogs to recover after treatment</p>
//             </div>
//             <div className="bg-white rounded-xl p-6 text-center shadow-md">
//               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Heart className="w-8 h-8 text-red-600" />
//               </div>
//               <h3 className="font-bold text-navy-900 mb-2">Trained Team</h3>
//               <p className="text-gray-600 text-sm">Experienced rescue workers, vets, and caregivers</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Commitment Section */}
//       <section className="py-16 lg:py-24 bg-navy-900 text-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commitment</h2>
//               <p className="text-gray-300 text-lg">
//                 Every dog that comes to us receives complete care until they are healthy.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-6">
//               <div className="bg-white/10 rounded-xl p-6 text-center">
//                 <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
//                 <h3 className="font-bold text-lg mb-2">Complete Treatment</h3>
//                 <p className="text-gray-300 text-sm">Full medical care including surgery, medication, and wound care</p>
//               </div>
//               <div className="bg-white/10 rounded-xl p-6 text-center">
//                 <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
//                 <h3 className="font-bold text-lg mb-2">Recovery Support</h3>
//                 <p className="text-gray-300 text-sm">Safe shelter with proper food and monitoring during recovery</p>
//               </div>
//               <div className="bg-white/10 rounded-xl p-6 text-center">
//                 <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
//                 <h3 className="font-bold text-lg mb-2">Return to Territory</h3>
//                 <p className="text-gray-300 text-sm">Dogs are returned to their community once fully recovered</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Emergency CTA */}
//       <section className="py-16 lg:py-20 bg-red-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <div className="max-w-3xl mx-auto">
//             <Phone className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Emergency? Call Now!
//             </h2>
//             <p className="text-red-100 text-lg mb-8">
//               Do not wait—every minute counts for an injured dog. Call our emergency 
//               helpline and our rescue team will be on the way.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a 
//                 href="tel:+919876543210"
//                 className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-xl"
//               >
//                 <Phone className="w-6 h-6" />
//                 +919999999999
//               </a>
//               <a 
//                 href="https://wa.me/919876543210"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors text-xl"
//               >
//                 WhatsApp
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default InjuryMedicalCarePage;




// import React from 'react';
// import { Link } from 'react-router-dom';

// const InjuryMedicalCarePage: React.FC = () => {
//   const caseTypes = [
//     {
//       title: 'Road Accidents',
//       description: 'Immediate response for dogs hit by vehicles. We provide on-site first aid, transport to our clinic, and complete medical care.',
//       img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop'
//     },
//     {
//       title: 'Injuries & Wounds',
//       description: 'Treatment for cuts, bites, fractures, and other injuries. We clean, stitch, and care for wounds until fully healed.',
//       img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop'
//     },
//     {
//       title: 'Sick Dogs',
//       description: 'Medical evaluation and treatment for dogs showing signs of illness—fever, weakness, skin diseases, or infections.',
//       img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop'
//     },
//     {
//       title: 'Poisoning Cases',
//       description: 'Emergency treatment for dogs that have ingested poison. Time is critical—call us immediately if you suspect poisoning.',
//       img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop&sat=-100'
//     },
//     {
//       title: 'Post-Surgery Care',
//       description: 'Proper care and monitoring after sterilization or other surgeries until the dog is fully recovered.',
//       img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=300&fit=crop'
//     },
//     {
//       title: 'Severe Malnutrition',
//       description: 'Specialized care for extremely weak or malnourished dogs, including proper nutrition and medical support.',
//       img: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=400&h=300&fit=crop'
//     }
//   ];

//   const rescueProcess = [
//     { step: 1, title: 'Receive Emergency Call', description: 'You call our emergency helpline with details about the injured dog and location.', time: 'Immediately', img: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=200&h=200&fit=crop' },
//     { step: 2, title: 'Dispatch Rescue Team', description: 'Our ambulance and trained rescue team are dispatched to the location.', time: 'Within 15-30 mins', img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=200&fit=crop' },
//     { step: 3, title: 'On-Site First Aid', description: 'We provide immediate first aid at the scene to stabilize the dog.', time: 'On arrival', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=200&h=200&fit=crop' },
//     { step: 4, title: 'Transport to Clinic', description: 'The dog is carefully transported to our clinic or partner veterinary hospital.', time: 'Safe transport', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop' },
//     { step: 5, title: 'Medical Evaluation', description: 'Complete examination by our veterinarian to assess all injuries and plan treatment.', time: 'Thorough check', img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=200&h=200&fit=crop' },
//     { step: 6, title: 'Treatment & Care', description: 'Full medical treatment including surgery if needed, medication, and wound care.', time: 'As needed', img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=200&h=200&fit=crop' },
//     { step: 7, title: 'Recovery & Monitoring', description: 'The dog stays in our shelter for recovery with proper food, rest, and medical monitoring.', time: 'Until healthy', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop' },
//     { step: 8, title: 'Return to Community', description: 'Once fully recovered, the dog is returned to its original territory.', time: 'When ready', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=200&h=200&fit=crop' }
//   ];

//   const firstAidTips = [
//     { title: 'Call Us First', description: 'Call our emergency number immediately. Provide location, condition of the dog, and any visible injuries.', img: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=60&h=60&fit=crop' },
//     { title: 'Stay Calm', description: 'Injured dogs may be scared and could bite. Approach slowly, speak softly, and avoid sudden movements.', img: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=60&h=60&fit=crop' },
//     { title: 'Keep the Dog Warm', description: 'If possible, cover the dog with a cloth or blanket to prevent shock. Do not move the dog unless necessary.', img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=60&h=60&fit=crop' },
//     { title: 'Do Not Feed', description: 'Do not give food or water to an injured dog—it could cause choking or complications during treatment.', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=60&h=60&fit=crop' },
//     { title: 'Control Bleeding', description: 'If there is severe bleeding, gently press a clean cloth against the wound until help arrives.', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=60&h=60&fit=crop' },
//     { title: 'Stay with the Dog', description: 'If safe, stay with the dog until our rescue team arrives. Your presence can keep the dog calm.', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=60&h=60&fit=crop' }
//   ];

//   const facilities = [
//     { title: 'Rescue Ambulance', desc: 'Fully equipped ambulance for emergency rescue and transport', img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop' },
//     { title: 'Veterinary Clinic', desc: 'In-house clinic with surgery facilities and diagnostic equipment', img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=300&h=200&fit=crop' },
//     { title: 'Recovery Shelter', desc: 'Clean, safe shelter for dogs to recover after treatment', img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=300&h=200&fit=crop' },
//     { title: 'Trained Team', desc: 'Experienced rescue workers, vets, and caregivers', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=300&h=200&fit=crop' }
//   ];

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

//         * { box-sizing: border-box; }

//         .aachi-page {
//           font-family: 'Hind', sans-serif;
//           min-height: 100vh;
//           color: #333;
//         }

//         .aachi-page h1, .aachi-page h2, .aachi-page h3, .aachi-page h4 {
//           font-family: 'Baloo 2', cursive;
//         }

//         /* Hero */
//         .hero-section {
//           background: var(--navy);
//           color: white;
//           padding: 80px 0 60px;
//           position: relative;
//           overflow: hidden;
//         }

//         .hero-section::before {
//           content: '';
//           position: absolute;
//           top: -60px; right: -60px;
//           width: 350px; height: 350px;
//           background: var(--yellow);
//           border-radius: 50%;
//           opacity: 0.08;
//         }

//         .hero-section::after {
//           content: '';
//           position: absolute;
//           bottom: -80px; left: -80px;
//           width: 280px; height: 280px;
//           background: var(--yellow);
//           border-radius: 50%;
//           opacity: 0.06;
//         }

//         .hero-badge {
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

//         .hero-badge img {
//           width: 28px; height: 28px;
//           border-radius: 50%;
//           object-fit: cover;
//         }

//         .hero-title {
//           font-size: clamp(2.2rem, 5vw, 3.8rem);
//           font-weight: 800;
//           line-height: 1.1;
//           margin-bottom: 20px;
//           color: white;
//         }

//         .hero-title span {
//           color: var(--yellow);
//         }

//         .hero-desc {
//           font-size: 1.1rem;
//           color: rgba(255,255,255,0.8);
//           max-width: 600px;
//           line-height: 1.7;
//         }

//         .back-link {
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           color: var(--yellow);
//           text-decoration: none;
//           font-weight: 600;
//           margin-bottom: 30px;
//           font-size: 15px;
//           transition: gap 0.3s;
//         }

//         .back-link:hover { gap: 10px; }

//         /* Emergency Banner */
//         .emergency-banner {
//           background: var(--yellow);
//           padding: 18px 0;
//         }

//         .emergency-banner .content {
//           display: flex;
//           flex-wrap: wrap;
//           align-items: center;
//           justify-content: center;
//           gap: 16px;
//           text-align: center;
//         }

//         .emergency-banner img {
//           width: 36px; height: 36px;
//           animation: pulse 1.5s infinite;
//         }

//         @keyframes pulse {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.15); }
//         }

//         .emergency-banner .label {
//           font-family: 'Baloo 2', cursive;
//           font-weight: 700;
//           color: var(--navy);
//           font-size: 1rem;
//         }

//         .emergency-banner a {
//           font-family: 'Baloo 2', cursive;
//           font-size: 1.8rem;
//           font-weight: 800;
//           color: var(--navy);
//           text-decoration: none;
//           transition: color 0.2s;
//         }

//         .emergency-banner a:hover { color: var(--navy-light); }

//         .emergency-banner .timing {
//           color: var(--navy);
//           font-weight: 600;
//           font-size: 0.95rem;
//         }

//         /* Container */
//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 20px;
//         }

//         /* Section common */
//         .section-label {
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

//         .section-title {
//           font-size: clamp(1.8rem, 3.5vw, 2.8rem);
//           font-weight: 800;
//           color: var(--navy);
//           margin-bottom: 12px;
//         }

//         .section-desc {
//           color: #666;
//           font-size: 1.05rem;
//           line-height: 1.7;
//         }

//         /* Case Cards */
//         .cases-section {
//           padding: 80px 0;
//           background: #f8f9ff;
//         }

//         .cases-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 24px;
//           margin-top: 48px;
//         }

//         .case-card {
//           background: white;
//           border-radius: 16px;
//           overflow: hidden;
//           box-shadow: 0 4px 20px rgba(0,43,92,0.08);
//           transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease;
//           cursor: pointer;
//           border-bottom: 4px solid transparent;
//         }

//         .case-card:hover {
//           transform: translateY(-10px) scale(1.02);
//           box-shadow: 0 20px 50px rgba(0,43,92,0.18);
//           border-bottom-color: var(--yellow);
//         }

//         .case-card-img {
//           width: 100%;
//           height: 180px;
//           object-fit: cover;
//           transition: transform 0.5s ease;
//         }

//         .case-card:hover .case-card-img {
//           transform: scale(1.08);
//         }

//         .case-card-img-wrap {
//           overflow: hidden;
//           position: relative;
//         }

//         .case-card-img-wrap::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(to bottom, transparent 50%, rgba(0,43,92,0.6));
//           opacity: 0;
//           transition: opacity 0.3s;
//         }

//         .case-card:hover .case-card-img-wrap::after {
//           opacity: 1;
//         }

//         .case-card-body {
//           padding: 20px;
//         }

//         .case-card-body h3 {
//           font-size: 1.2rem;
//           font-weight: 700;
//           color: var(--navy);
//           margin-bottom: 8px;
//         }

//         .case-card-body p {
//           color: #666;
//           font-size: 0.9rem;
//           line-height: 1.6;
//         }

//         .case-card-tag {
//           display: inline-block;
//           background: var(--yellow);
//           color: var(--navy);
//           font-size: 11px;
//           font-weight: 700;
//           padding: 3px 10px;
//           border-radius: 50px;
//           margin-bottom: 10px;
//         }

//         /* Process Section */
//         .process-section {
//           padding: 80px 0;
//           background: var(--navy);
//         }

//         .process-section .section-title { color: white; }
//         .process-section .section-desc { color: rgba(255,255,255,0.7); }

//         .process-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//           gap: 20px;
//           margin-top: 48px;
//         }

//         .process-card {
//           background: rgba(255,255,255,0.07);
//           border: 1px solid rgba(255,213,0,0.2);
//           border-radius: 16px;
//           padding: 20px;
//           text-align: center;
//           transition: background 0.3s, transform 0.3s, border-color 0.3s;
//           cursor: pointer;
//         }

//         .process-card:hover {
//           background: rgba(255,213,0,0.12);
//           border-color: var(--yellow);
//           transform: translateY(-6px);
//         }

//         .process-img-wrap {
//           width: 70px; height: 70px;
//           border-radius: 50%;
//           overflow: hidden;
//           margin: 0 auto 14px;
//           border: 3px solid var(--yellow);
//           transition: border-width 0.3s;
//         }

//         .process-card:hover .process-img-wrap {
//           border-width: 5px;
//         }

//         .process-img-wrap img {
//           width: 100%; height: 100%;
//           object-fit: cover;
//         }

//         .process-step-num {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           width: 32px; height: 32px;
//           background: var(--yellow);
//           color: var(--navy);
//           border-radius: 50%;
//           font-weight: 800;
//           font-size: 1rem;
//           font-family: 'Baloo 2', cursive;
//           margin-bottom: 10px;
//         }

//         .process-card h3 {
//           font-size: 1rem;
//           font-weight: 700;
//           color: white;
//           margin-bottom: 6px;
//         }

//         .process-card p {
//           color: rgba(255,255,255,0.65);
//           font-size: 0.82rem;
//           line-height: 1.5;
//           margin-bottom: 8px;
//         }

//         .process-time {
//           color: var(--yellow);
//           font-size: 0.78rem;
//           font-weight: 700;
//         }

//         /* First Aid Section */
//         .firstaid-section {
//           padding: 80px 0;
//           background: white;
//         }

//         .firstaid-grid {
//           display: grid;
//           lg-grid-cols: 2;
//           gap: 48px;
//           align-items: center;
//         }

//         @media (min-width: 1024px) {
//           .firstaid-grid { grid-template-columns: 1fr 1fr; }
//         }

//         .firstaid-tips {
//           display: flex;
//           flex-direction: column;
//           gap: 14px;
//           margin-top: 24px;
//         }

//         .tip-card {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           padding: 14px 16px;
//           background: #f8f9ff;
//           border-radius: 12px;
//           border-left: 4px solid transparent;
//           transition: border-color 0.3s, background 0.3s, transform 0.3s;
//           cursor: pointer;
//         }

//         .tip-card:hover {
//           border-left-color: var(--yellow);
//           background: #fffbe6;
//           transform: translateX(6px);
//         }

//         .tip-num {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           min-width: 36px; height: 36px;
//           background: var(--navy);
//           color: var(--yellow);
//           border-radius: 50%;
//           font-weight: 800;
//           font-family: 'Baloo 2', cursive;
//           font-size: 1rem;
//         }

//         .tip-img {
//           width: 48px; height: 48px;
//           border-radius: 50%;
//           object-fit: cover;
//           border: 2px solid var(--yellow);
//           flex-shrink: 0;
//         }

//         .tip-text h4 {
//           font-weight: 700;
//           color: var(--navy);
//           font-size: 0.95rem;
//           margin-bottom: 2px;
//         }

//         .tip-text p {
//           color: #666;
//           font-size: 0.82rem;
//           line-height: 1.5;
//         }

//         .firstaid-img-wrap {
//           position: relative;
//           margin-top: 30px;
//         }

//         @media (min-width: 1024px) {
//           .firstaid-img-wrap { margin-top: 0; }
//         }

//         .firstaid-main-img {
//           width: 100%;
//           height: 480px;
//           object-fit: cover;
//           border-radius: 20px;
//           box-shadow: 0 20px 60px rgba(0,43,92,0.2);
//           transition: transform 0.4s;
//         }

//         .firstaid-main-img:hover {
//           transform: scale(1.02);
//         }

//         .stat-badge {
//           position: absolute;
//           bottom: -24px; right: -12px;
//           background: var(--yellow);
//           color: var(--navy);
//           border-radius: 14px;
//           padding: 16px 24px;
//           box-shadow: 0 8px 30px rgba(255,209,0,0.4);
//         }

//         .stat-badge p:first-child {
//           font-family: 'Baloo 2', cursive;
//           font-size: 2rem;
//           font-weight: 800;
//           line-height: 1;
//         }

//         .stat-badge p:last-child {
//           font-weight: 600;
//           font-size: 0.85rem;
//         }

//         /* Facilities */
//         .facilities-section {
//           padding: 80px 0;
//           background: #f0f4ff;
//           margin-top: 30px;
//         }

//         .facilities-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
//           gap: 20px;
//           margin-top: 48px;
//         }

//         .facility-card {
//           background: white;
//           border-radius: 16px;
//           overflow: hidden;
//           box-shadow: 0 4px 20px rgba(0,43,92,0.08);
//           transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s;
//         }

//         .facility-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 16px 40px rgba(0,43,92,0.15);
//         }

//         .facility-img-wrap {
//           position: relative;
//           overflow: hidden;
//         }

//         .facility-img {
//           width: 100%;
//           height: 160px;
//           object-fit: cover;
//           transition: transform 0.5s;
//         }

//         .facility-card:hover .facility-img {
//           transform: scale(1.1);
//         }

//         .facility-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(to top, var(--navy) 0%, transparent 60%);
//           opacity: 0.7;
//         }

//         .facility-body {
//           padding: 18px;
//           border-top: 3px solid var(--yellow);
//         }

//         .facility-body h3 {
//           font-weight: 700;
//           color: var(--navy);
//           font-size: 1.05rem;
//           margin-bottom: 6px;
//         }

//         .facility-body p {
//           color: #666;
//           font-size: 0.85rem;
//           line-height: 1.5;
//         }

//         /* Commitment */
//         .commitment-section {
//           padding: 80px 0;
//           background: var(--navy);
//           color: white;
//         }

//         .commitment-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
//           gap: 24px;
//           margin-top: 48px;
//         }

//         .commit-card {
//           background: rgba(255,255,255,0.06);
//           border: 1px solid rgba(255,209,0,0.2);
//           border-radius: 16px;
//           padding: 30px 24px;
//           text-align: center;
//           transition: background 0.3s, border-color 0.3s, transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
//           cursor: pointer;
//         }

//         .commit-card:hover {
//           background: rgba(255,209,0,0.1);
//           border-color: var(--yellow);
//           transform: translateY(-8px);
//         }

//         .commit-img {
//           width: 64px; height: 64px;
//           border-radius: 50%;
//           object-fit: cover;
//           margin: 0 auto 16px;
//           border: 3px solid var(--yellow);
//           transition: transform 0.3s;
//         }

//         .commit-card:hover .commit-img {
//           transform: rotate(5deg) scale(1.1);
//         }

//         .commit-card h3 {
//           font-weight: 700;
//           font-size: 1.1rem;
//           margin-bottom: 8px;
//           color: var(--yellow);
//         }

//         .commit-card p {
//           color: rgba(255,255,255,0.7);
//           font-size: 0.88rem;
//           line-height: 1.6;
//         }

//         /* Emergency CTA */
//         .cta-section {
//           padding: 80px 0;
//           background: var(--yellow);
//           text-align: center;
//         }

//         .cta-section h2 {
//           color: var(--navy);
//           font-size: clamp(2rem, 4vw, 3rem);
//           font-weight: 800;
//           margin-bottom: 12px;
//         }

//         .cta-section p {
//           color: rgba(0,43,92,0.75);
//           font-size: 1.05rem;
//           max-width: 560px;
//           margin: 0 auto 36px;
//           line-height: 1.7;
//         }

//         .cta-img {
//           width: 80px; height: 80px;
//           border-radius: 50%;
//           object-fit: cover;
//           margin: 0 auto 24px;
//           border: 4px solid var(--navy);
//           animation: pulse 2s infinite;
//         }

//         .cta-btns {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 16px;
//           justify-content: center;
//         }

//         .btn-call {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           padding: 16px 36px;
//           background: var(--navy);
//           color: white;
//           font-family: 'Baloo 2', cursive;
//           font-size: 1.2rem;
//           font-weight: 700;
//           border-radius: 10px;
//           text-decoration: none;
//           transition: background 0.25s, transform 0.25s;
//         }

//         .btn-call:hover {
//           background: var(--navy-light);
//           transform: translateY(-3px);
//         }

//         .btn-call img {
//           width: 26px; height: 26px;
//           border-radius: 50%;
//           object-fit: cover;
//         }

//         .btn-wa {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           padding: 16px 36px;
//           background: #25d366;
//           color: white;
//           font-family: 'Baloo 2', cursive;
//           font-size: 1.2rem;
//           font-weight: 700;
//           border-radius: 10px;
//           text-decoration: none;
//           transition: background 0.25s, transform 0.25s;
//         }

//         .btn-wa:hover {
//           background: #1da851;
//           transform: translateY(-3px);
//         }

//         /* Divider wave */
//         .wave-divider {
//           overflow: hidden;
//           line-height: 0;
//         }

//         .wave-divider svg {
//           display: block;
//           width: 100%;
//         }
//       `}</style>

//       <div className="aachi-page">

//         {/* Hero */}
//         <section className="hero-section">
//           <div className="container" style={{ position: 'relative', zIndex: 1 }}>
//             <Link to="/our-work" className="back-link">
//               ← Back to Our Work
//             </Link>

//             <div className="hero-badge">
//               <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=60&h=60&fit=crop" alt="Dog" />
//               Emergency Medical Care
//             </div>

//             <h1 className="hero-title">
//               Injury &amp; <span>Medical Care</span><br />for Community Dogs
//             </h1>

//             <p className="hero-desc">
//               We provide emergency rescue and complete medical care for injured, sick, and
//               distressed community dogs. Our team responds 24/7 to save lives.
//             </p>
//           </div>
//         </section>

//         {/* Emergency Banner */}
//         <section className="emergency-banner">
//           <div className="container">
//             <div className="content">
//               <img src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=80&h=80&fit=crop" alt="Phone" />
//               <span className="label">Emergency Rescue Helpline:</span>
//               <a href="tel:+919876543210">+919999999999</a>
//               <span className="timing">⏰ Available 24/7</span>
//             </div>
//           </div>
//         </section>

//         {/* Case Types */}
//         <section className="cases-section">
//           <div className="container">
//             <div style={{ textAlign: 'center' }}>
//               <span className="section-label">Cases We Handle</span>
//               <h2 className="section-title">Types of Medical Emergencies</h2>
//               <p className="section-desc">We respond to all types of medical emergencies affecting community dogs.</p>
//             </div>

//             <div className="cases-grid">
//               {caseTypes.map((item, i) => (
//                 <div key={i} className="case-card">
//                   <div className="case-card-img-wrap">
//                     <img src={item.img} alt={item.title} className="case-card-img" />
//                   </div>
//                   <div className="case-card-body">
//                     <span className="case-card-tag">Emergency</span>
//                     <h3>{item.title}</h3>
//                     <p>{item.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Rescue Process */}
//         <section className="process-section">
//           <div className="container">
//             <div style={{ textAlign: 'center' }}>
//               <span className="section-label">Our Process</span>
//               <h2 className="section-title">From Rescue to Recovery</h2>
//               <p className="section-desc">Our complete process ensures every injured dog receives the care it needs.</p>
//             </div>

//             <div className="process-grid">
//               {rescueProcess.map((item) => (
//                 <div key={item.step} className="process-card">
//                   <div className="process-img-wrap">
//                     <img src={item.img} alt={item.title} />
//                   </div>
//                   <div className="process-step-num">{item.step}</div>
//                   <h3>{item.title}</h3>
//                   <p>{item.description}</p>
//                   <span className="process-time">{item.time}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* First Aid / What To Do */}
//         <section className="firstaid-section">
//           <div className="container">
//             <div className="firstaid-grid">
//               <div>
//                 <span className="section-label">Quick Guide</span>
//                 <h2 className="section-title">Found an Injured Dog?<br />Here is What to Do</h2>
//                 <p className="section-desc">
//                   If you find an injured community dog, follow these steps while waiting for
//                   our rescue team to arrive. Your quick action can save a life.
//                 </p>

//                 <div className="firstaid-tips">
//                   {firstAidTips.map((tip, i) => (
//                     <div key={i} className="tip-card">
//                       <span className="tip-num">{i + 1}</span>
//                       <img src={tip.img} alt={tip.title} className="tip-img" />
//                       <div className="tip-text">
//                         <h4>{tip.title}</h4>
//                         <p>{tip.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="firstaid-img-wrap">
//                 <img
//                   src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=700&fit=crop"
//                   alt="Caring for injured dog"
//                   className="firstaid-main-img"
//                 />
//                 <div className="stat-badge">
//                   <p>500+</p>
//                   <p>Rescues/Year</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Facilities */}
//         <section className="facilities-section">
//           <div className="container">
//             <div style={{ textAlign: 'center' }}>
//               <span className="section-label">Our Resources</span>
//               <h2 className="section-title">Equipped to Save Lives</h2>
//             </div>

//             <div className="facilities-grid">
//               {facilities.map((f, i) => (
//                 <div key={i} className="facility-card">
//                   <div className="facility-img-wrap">
//                     <img src={f.img} alt={f.title} className="facility-img" />
//                     <div className="facility-overlay" />
//                   </div>
//                   <div className="facility-body">
//                     <h3>{f.title}</h3>
//                     <p>{f.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Commitment */}
//         <section className="commitment-section">
//           <div className="container">
//             <div style={{ textAlign: 'center' }}>
//               <span className="section-label" style={{ background: 'var(--yellow)' }}>Our Promise</span>
//               <h2 className="section-title" style={{ color: 'white' }}>Our Commitment</h2>
//               <p className="section-desc" style={{ color: 'rgba(255,255,255,0.7)' }}>Every dog that comes to us receives complete care until they are healthy.</p>
//             </div>

//             <div className="commitment-grid">
//               <div className="commit-card">
//                 <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=120&h=120&fit=crop" alt="Treatment" className="commit-img" />
//                 <h3>Complete Treatment</h3>
//                 <p>Full medical care including surgery, medication, and wound care</p>
//               </div>
//               <div className="commit-card">
//                 <img src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=120&h=120&fit=crop" alt="Recovery" className="commit-img" />
//                 <h3>Recovery Support</h3>
//                 <p>Safe shelter with proper food and monitoring during recovery</p>
//               </div>
//               <div className="commit-card">
//                 <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=120&h=120&fit=crop" alt="Return" className="commit-img" />
//                 <h3>Return to Territory</h3>
//                 <p>Dogs are returned to their community once fully recovered</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Emergency CTA */}
//         <section className="cta-section">
//           <div className="container">
//             <img
//               src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=160&h=160&fit=crop"
//               alt="Emergency Call"
//               className="cta-img"
//             />
//             <h2>Emergency? Call Now!</h2>
//             <p>
//               Do not wait—every minute counts for an injured dog. Call our emergency
//               helpline and our rescue team will be on the way.
//             </p>
//             <div className="cta-btns">
//               <a href="tel:+919876543210" className="btn-call">
//                 📞 +919999999999
//               </a>
//               <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn-wa">
//                 💬 WhatsApp
//               </a>
//             </div>
//           </div>
//         </section>

//       </div>
//     </>
//   );
// };

// export default InjuryMedicalCarePage;




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





