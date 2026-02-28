/**
 * Shelter Support Page - Suranango for Dogs
 * Temporary shelter for injured, sick, or recovering dogs
 */

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   Home, 
//   Phone,
//   CheckCircle,
//   ArrowLeft,
//   Heart,
//   Shield,
//   Utensils,
//   Eye,
//   Clock,
//   Stethoscope,
//   Sun,
//   MapPin
// } from 'lucide-react';

// const ShelterSupportPage: React.FC = () => {
//   // What we provide at the shelter
//   const shelterServices = [
//     {
//       icon: Home,
//       title: 'Safe Environment',
//       description: 'Clean, secure kennels with proper ventilation, protection from weather, and comfortable bedding.'
//     },
//     {
//       icon: Utensils,
//       title: 'Proper Nutrition',
//       description: 'Balanced, nutritious meals served twice daily, along with fresh, clean water at all times.'
//     },
//     {
//       icon: Stethoscope,
//       title: 'Medical Monitoring',
//       description: 'Regular health checkups, medication administration, and wound care by trained staff.'
//     },
//     {
//       icon: Heart,
//       title: 'Loving Care',
//       description: 'Gentle handling, attention, and comfort from our compassionate caregivers.'
//     },
//     {
//       icon: Eye,
//       title: '24/7 Supervision',
//       description: 'Round-the-clock monitoring to ensure each dog is safe, comfortable, and recovering well.'
//     },
//     {
//       icon: Sun,
//       title: 'Exercise & Rest',
//       description: 'Appropriate exercise and rest periods based on each dog recovery needs.'
//     }
//   ];

//   // Types of dogs we shelter
//   const shelterCases = [
//     {
//       title: 'Injured Dogs',
//       description: 'Dogs recovering from accidents, injuries, or wounds that need time and care to heal.',
//       duration: '1-4 weeks'
//     },
//     {
//       title: 'Post-Surgery Cases',
//       description: 'Dogs recovering from sterilization or other medical procedures requiring monitoring.',
//       duration: '3-7 days'
//     },
//     {
//       title: 'Sick Dogs',
//       description: 'Dogs undergoing treatment for illness and needing a clean environment for recovery.',
//       duration: 'Until recovery'
//     },
//     {
//       title: 'Malnourished Dogs',
//       description: 'Severely weak or undernourished dogs needing proper nutrition and care.',
//       duration: '2-6 weeks'
//     },
//     {
//       title: 'Abandoned Puppies',
//       description: 'Orphaned or abandoned puppies that need intensive care until they can survive independently.',
//       duration: '4-8 weeks'
//     },
//     {
//       title: 'Dogs Needing Observation',
//       description: 'Dogs requiring observation for suspected illness or to monitor behavior.',
//       duration: 'As needed'
//     }
//   ];

//   // Our shelter philosophy
//   const philosophy = [
//     'Our shelter is for care and recovery only—not permanent housing',
//     'Dogs are returned to their original territory once fully recovered',
//     'We do not sell, trade, or permanently relocate community dogs',
//     'Every dog receives individual attention based on their needs',
//     'We maintain detailed records of each dog care and progress',
//     'Our goal is to get dogs healthy and back to their community'
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 text-white py-16 lg:py-24">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1920')] bg-cover bg-center opacity-10"></div>
        
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
//                 <Home className="w-8 h-8 text-blue-600" />
//               </div>
//               <span className="bg-white/20 px-4 py-1 rounded-full text-sm font-semibold">
//                 Our Work
//               </span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//               Shelter Support
//             </h1>
//             <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
//               We provide temporary shelter for injured, sick, and recovering community dogs. 
//               A safe space with food, rest, and medical care until they are ready to return home.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Key Message */}
//       <section className="py-8 bg-yellow-400">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
//             <Shield className="w-10 h-10 text-navy-900 flex-shrink-0" />
//             <p className="text-lg font-medium text-navy-900">
//               <span className="font-bold">Important:</span> Our shelter is for temporary care and recovery only. 
//               Once dogs are healthy, they are returned to their original community territory.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* What We Provide Section */}
//       <section className="py-16 lg:py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Facilities</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
//               What We Provide
//             </h2>
//             <p className="text-gray-600 text-lg">
//               Our shelter is equipped to provide complete care for recovering dogs.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
//             {shelterServices.map((service, index) => (
//               <div 
//                 key={index}
//                 className="bg-blue-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-shadow text-center"
//               >
//                 <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <service.icon className="w-7 h-7 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-navy-900 mb-2">{service.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Types of Cases Section */}
//       <section className="py-16 lg:py-24 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Who We Help</span>
//             <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
//               Dogs We Shelter
//             </h2>
//             <p className="text-gray-600 text-lg">
//               We provide temporary shelter for dogs that need time and care to recover.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
//             {shelterCases.map((caseType, index) => (
//               <div 
//                 key={index}
//                 className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <h3 className="text-xl font-bold text-navy-900 mb-2">{caseType.title}</h3>
//                 <p className="text-gray-600 leading-relaxed mb-4">{caseType.description}</p>
//                 <div className="flex items-center gap-2 text-blue-600">
//                   <Clock className="w-5 h-5" />
//                   <span className="font-medium text-sm">Typical stay: {caseType.duration}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Philosophy Section */}
//       <section className="py-16 lg:py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Philosophy</span>
//               <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6">
//                 Shelter for Recovery, Not Captivity
//               </h2>
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 We believe that community dogs belong in their community. Our shelter exists 
//                 solely to provide a safe space for dogs to recover from illness or injury. 
//                 Once they are healthy, they return to their territory where they belong.
//               </p>
              
//               <div className="space-y-3">
//                 {philosophy.map((item, index) => (
//                   <div key={index} className="flex items-start gap-3">
//                     <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
//                     <p className="text-gray-700">{item}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative">
//               <img 
//                 src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=500&fit=crop" 
//                 alt="Dogs in safe shelter environment"
//                 className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
//               />
//               <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white rounded-xl p-6 shadow-lg">
//                 <p className="font-bold text-3xl">100+</p>
//                 <p className="font-medium">Dogs Sheltered/Month</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Day at Shelter Section */}
//       <section className="py-16 lg:py-24 bg-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-12">
//               <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Daily Care</span>
//               <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
//                 A Day at Our Shelter
//               </h2>
//             </div>

//             <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
//               <div className="space-y-6">
//                 <div className="flex items-start gap-4 pb-6 border-b border-gray-100">
//                   <div className="w-20 flex-shrink-0">
//                     <span className="text-blue-600 font-bold">6:00 AM</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-navy-900">Morning Check</h4>
//                     <p className="text-gray-600 text-sm">Staff arrives, checks all dogs, notes any overnight changes</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4 pb-6 border-b border-gray-100">
//                   <div className="w-20 flex-shrink-0">
//                     <span className="text-blue-600 font-bold">7:00 AM</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-navy-900">Breakfast & Medication</h4>
//                     <p className="text-gray-600 text-sm">First meal served, medications administered as prescribed</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4 pb-6 border-b border-gray-100">
//                   <div className="w-20 flex-shrink-0">
//                     <span className="text-blue-600 font-bold">9:00 AM</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-navy-900">Cleaning & Wound Care</h4>
//                     <p className="text-gray-600 text-sm">Kennels cleaned, wound dressings changed, dogs groomed if needed</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4 pb-6 border-b border-gray-100">
//                   <div className="w-20 flex-shrink-0">
//                     <span className="text-blue-600 font-bold">11:00 AM</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-navy-900">Veterinary Rounds</h4>
//                     <p className="text-gray-600 text-sm">Vet checks all dogs, updates treatment plans, performs procedures</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4 pb-6 border-b border-gray-100">
//                   <div className="w-20 flex-shrink-0">
//                     <span className="text-blue-600 font-bold">1:00 PM</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-navy-900">Rest Period</h4>
//                     <p className="text-gray-600 text-sm">Quiet time for dogs to rest and recover</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4 pb-6 border-b border-gray-100">
//                   <div className="w-20 flex-shrink-0">
//                     <span className="text-blue-600 font-bold">4:00 PM</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-navy-900">Dinner & Evening Medication</h4>
//                     <p className="text-gray-600 text-sm">Second meal, evening medications, final health checks</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="w-20 flex-shrink-0">
//                     <span className="text-blue-600 font-bold">Night</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-navy-900">Night Monitoring</h4>
//                     <p className="text-gray-600 text-sm">Security staff on duty, regular checks throughout the night</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Visit Our Shelter Section */}
//       <section className="py-16 lg:py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div className="bg-blue-100 rounded-2xl p-8">
//                 <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center gap-2">
//                   <MapPin className="w-6 h-6 text-blue-600" />
//                   Visit Our Shelter
//                 </h3>
//                 <div className="space-y-4">
//                   <div>
//                     <p className="font-semibold text-navy-900">Address</p>
//                     <p className="text-gray-600">123 Dog Welfare Street, Surana Nagar, Rajasthan - 302001</p>
//                   </div>
//                   <div>
//                     <p className="font-semibold text-navy-900">Visiting Hours</p>
//                     <p className="text-gray-600">Monday - Saturday: 10:00 AM - 5:00 PM</p>
//                     <p className="text-gray-600">Sunday: Closed for visitors</p>
//                   </div>
//                   <div>
//                     <p className="font-semibold text-navy-900">Contact</p>
//                     <p className="text-gray-600">Phone: +919999999999</p>
//                     <p className="text-gray-600">Email: shelter@suranaNGO.org</p>
//                   </div>
//                 </div>
//                 <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
//                   <p className="text-navy-900 text-sm">
//                     <strong>Note:</strong> Please call ahead before visiting to ensure staff availability 
//                     and to minimize disruption to recovering dogs.
//                   </p>
//                 </div>
//               </div>

//               <div>
//                 <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Get Involved</span>
//                 <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-6">
//                   How You Can Help
//                 </h2>
//                 <div className="space-y-4">
//                   <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
//                     <Heart className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
//                     <div>
//                       <h4 className="font-semibold text-navy-900">Donate Supplies</h4>
//                       <p className="text-gray-600 text-sm">Dog food, blankets, medicines, cleaning supplies</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
//                     <Clock className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
//                     <div>
//                       <h4 className="font-semibold text-navy-900">Volunteer Time</h4>
//                       <p className="text-gray-600 text-sm">Help with feeding, cleaning, and caring for dogs</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
//                     <Shield className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
//                     <div>
//                       <h4 className="font-semibold text-navy-900">Sponsor Recovery</h4>
//                       <p className="text-gray-600 text-sm">Cover medical and care costs for recovering dogs</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 lg:py-20 bg-navy-900 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <div className="max-w-3xl mx-auto">
//             <Home className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Know a Dog That Needs Shelter?
//             </h2>
//             <p className="text-gray-300 text-lg mb-8">
//               If you know of an injured, sick, or distressed community dog that needs temporary 
//               shelter and care, contact us. We are here to help.
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
//                 className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/30"
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ShelterSupportPage;





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
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-2xl"
                style={{ animation: 'bounce 2s ease-in-out infinite' }}>
                <Home className="w-12 h-12 text-blue-900" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </div>
            </div>
          </div>

          {/* Coming Soon Tag */}
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 px-5 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block" style={{ animation: 'ping 1.5s ease-in-out infinite' }}></span>
            Shelter Support
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight tracking-tight">
            Coming
            <span className="text-yellow-400"> Soon</span>
            <span className="text-yellow-400">{dots}</span>
          </h1>

          {/* Subheading */}
          <p className="text-blue-200 text-lg md:text-xl mb-10 leading-relaxed max-w-lg mx-auto">
            Hum <span className="text-yellow-300 font-semibold">Shelter Support</span> page par kaam kar rahe hain.
            Jald hi yahan injured aur beemar dogs ke liye humari services uplabdh hongi. 🐶
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px bg-white/20 flex-1 max-w-20"></div>
            <span className="text-2xl">🐾</span>
            <div className="h-px bg-white/20 flex-1 max-w-20"></div>
          </div>

          {/* Feature Preview Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Safe Environment', 'Medical Care', 'Proper Nutrition', '24/7 Supervision', 'Loving Care'].map(item => (
              <span
                key={item}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>

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