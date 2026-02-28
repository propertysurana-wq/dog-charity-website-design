// import React, { useState } from 'react';
// import { 
//   Heart, Gift, Calendar, CreditCard, Check, Shield, 
//   Phone, Mail, Users, Home, Stethoscope, Utensils, ArrowRight 
// } from 'lucide-react';
// import { Button } from '@/components/ui/Button';
// import { cn } from '@/utils/cn';
// import { orgInfo } from '@/constants/theme';

// /**
//  * DonatePage Component
//  * Comprehensive donation page with multiple giving options
//  */

// export const DonatePage: React.FC = () => {
//   const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
//   const [selectedAmount, setSelectedAmount] = useState<number>(1000);
//   const [customAmount, setCustomAmount] = useState<string>('');

//   const amounts = [500, 1000, 2500, 5000, 10000];

//   const handleAmountSelect = (amount: number) => {
//     setSelectedAmount(amount);
//     setCustomAmount('');
//   };

//   const handleCustomAmount = (value: string) => {
//     setCustomAmount(value);
//     setSelectedAmount(0);
//   };

//   // Impact items showing what donations can do
//   const impactItems = [
//     {
//       amount: '₹500',
//       icon: <Utensils className="w-6 h-6" />,
//       title: 'Feed a Dog for a Week',
//       description: 'Provides nutritious meals and fresh water for one rescue dog for 7 days.',
//     },
//     {
//       amount: '₹1,000',
//       icon: <Stethoscope className="w-6 h-6" />,
//       title: 'Vaccinations & Deworming',
//       description: 'Covers essential vaccinations and deworming treatment for one dog.',
//     },
//     {
//       amount: '₹2,500',
//       icon: <Heart className="w-6 h-6" />,
//       title: 'Medical Treatment',
//       description: 'Funds emergency medical care or minor surgery for an injured dog.',
//     },
//     {
//       amount: '₹5,000',
//       icon: <Home className="w-6 h-6" />,
//       title: 'One Week of Care',
//       description: 'Provides complete care including food, shelter, medical attention, and love.',
//     },
//     {
//       amount: '₹10,000',
//       icon: <Users className="w-6 h-6" />,
//       title: 'Rescue & Rehabilitation',
//       description: 'Covers the full cost of rescuing, treating, and rehabilitating one dog.',
//     },
//     {
//       amount: '₹25,000',
//       icon: <Shield className="w-6 h-6" />,
//       title: 'Sponsor a Shelter Dog',
//       description: 'Sponsor a dog for 3 months, covering all their needs until adoption.',
//     },
//   ];

//   // Ways to donate
//   const donationMethods = [
//     {
//       title: 'Online Donation',
//       description: 'Secure online payment via credit/debit card or UPI.',
//       icon: '💳',
//     },
//     {
//       title: 'Bank Transfer',
//       description: 'Direct transfer to our bank account. Details provided below.',
//       icon: '🏦',
//     },
//     {
//       title: 'UPI Payment',
//       description: 'Quick payment via any UPI app to our registered ID.',
//       icon: '📱',
//     },
//     {
//       title: 'Cheque/DD',
//       description: 'Mail us a cheque or demand draft payable to Suranango for Dogs.',
//       icon: '📝',
//     },
//   ];

//   // Bank details
//   const bankDetails = {
//     accountName: 'Suranango for Dogs',
//     accountNumber: '1234567890123',
//     bankName: 'State Bank of India',
//     branch: 'Surana Nagar, Jaipur',
//     ifscCode: 'SBIN0012345',
//     upiId: 'suranango@sbi',
//   };

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-[#002B5C] to-[#003D82] py-24 overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 relative">
//           <div className="max-w-3xl mx-auto text-center">
//             <Heart className="w-20 h-20 text-[#FFD100] mx-auto mb-6 animate-pulse" />
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
//               Help Us Save More Lives
//             </h1>
//             <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
//               Your generous donation helps us rescue injured street dogs, provide medical care, 
//               and find loving homes for thousands of animals every year. Every rupee counts.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Donation Form */}
//       <section className="py-16 -mt-12 relative z-10">
//         <div className="max-w-4xl mx-auto px-4">
//           <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
//             {/* Form Header */}
//             <div className="bg-[#FFD100] p-6 text-center">
//               <h2 className="text-2xl font-bold text-[#002B5C]">Make a Donation</h2>
//               <p className="text-[#002B5C]/80">Your support changes lives</p>
//             </div>

//             <div className="p-8">
//               {/* Donation Type Toggle */}
//               <div className="flex justify-center mb-8">
//                 <div className="inline-flex bg-gray-100 rounded-xl p-1.5">
//                   <button
//                     onClick={() => setDonationType('one-time')}
//                     className={cn(
//                       'px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2',
//                       donationType === 'one-time'
//                         ? 'bg-[#002B5C] text-white shadow-lg'
//                         : 'text-gray-600 hover:text-[#002B5C]'
//                     )}
//                   >
//                     <Gift className="w-5 h-5" />
//                     One-Time
//                   </button>
//                   <button
//                     onClick={() => setDonationType('monthly')}
//                     className={cn(
//                       'px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2',
//                       donationType === 'monthly'
//                         ? 'bg-[#002B5C] text-white shadow-lg'
//                         : 'text-gray-600 hover:text-[#002B5C]'
//                     )}
//                   >
//                     <Calendar className="w-5 h-5" />
//                     Monthly
//                   </button>
//                 </div>
//               </div>

//               {/* Monthly Benefits */}
//               {donationType === 'monthly' && (
//                 <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8 text-center">
//                   <p className="text-green-800 font-medium">
//                     ✨ Monthly donors get exclusive updates about the dogs they're helping!
//                   </p>
//                 </div>
//               )}

//               {/* Amount Selection */}
//               <div className="mb-8">
//                 <label className="block text-[#002B5C] font-bold text-lg mb-4 text-center">
//                   Select Donation Amount
//                 </label>
//                 <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
//                   {amounts.map((amount) => (
//                     <button
//                       key={amount}
//                       onClick={() => handleAmountSelect(amount)}
//                       className={cn(
//                         'py-4 rounded-xl font-bold text-lg transition-all border-2',
//                         selectedAmount === amount
//                           ? 'bg-[#FFD100] border-[#FFD100] text-[#002B5C] scale-105 shadow-lg'
//                           : 'bg-white border-gray-200 text-gray-700 hover:border-[#FFD100] hover:shadow'
//                       )}
//                     >
//                       ₹{amount.toLocaleString('en-IN')}
//                     </button>
//                   ))}
//                 </div>
//                 <div className="relative">
//                   <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xl">
//                     ₹
//                   </span>
//                   <input
//                     type="number"
//                     placeholder="Enter custom amount"
//                     value={customAmount}
//                     onChange={(e) => handleCustomAmount(e.target.value)}
//                     className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-xl text-lg focus:outline-none focus:border-[#FFD100] focus:ring-4 focus:ring-[#FFD100]/20"
//                   />
//                 </div>
//               </div>

//               {/* Personal Details */}
//               <div className="mb-8">
//                 <h3 className="text-[#002B5C] font-bold text-lg mb-4">Your Details</h3>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     placeholder="Full Name *"
//                     className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FFD100] focus:ring-4 focus:ring-[#FFD100]/20"
//                     required
//                   />
//                   <input
//                     type="tel"
//                     placeholder="Phone Number *"
//                     className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FFD100] focus:ring-4 focus:ring-[#FFD100]/20"
//                     required
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email Address *"
//                     className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FFD100] focus:ring-4 focus:ring-[#FFD100]/20 md:col-span-2"
//                     required
//                   />
//                   <input
//                     type="text"
//                     placeholder="PAN Number (for 80G certificate)"
//                     className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#FFD100] focus:ring-4 focus:ring-[#FFD100]/20 md:col-span-2"
//                   />
//                 </div>
//               </div>

//               {/* Tax Benefits */}
//               <div className="bg-[#002B5C]/5 border-2 border-[#002B5C]/20 rounded-xl p-6 mb-8">
//                 <label className="flex items-start gap-4 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     className="w-6 h-6 mt-0.5 accent-[#002B5C] rounded"
//                     defaultChecked
//                   />
//                   <div>
//                     <span className="font-bold text-[#002B5C] text-lg">
//                       Yes, I want an 80G Tax Exemption Certificate
//                     </span>
//                     <p className="text-gray-600 mt-1">
//                       Donations to {orgInfo.name} are eligible for 50% tax deduction under 
//                       Section 80G of the Income Tax Act. You'll receive your certificate via email.
//                     </p>
//                   </div>
//                 </label>
//               </div>

//               {/* Dedication (optional) */}
//               <div className="mb-8">
//                 <label className="flex items-start gap-4 cursor-pointer mb-4">
//                   <input
//                     type="checkbox"
//                     className="w-5 h-5 mt-0.5 accent-[#002B5C] rounded"
//                   />
//                   <span className="text-gray-700">
//                     I'd like to dedicate this donation in honor or memory of someone
//                   </span>
//                 </label>
//               </div>

//               {/* Submit Button */}
//               <Button
//                 variant="primary"
//                 size="lg"
//                 fullWidth
//                 leftIcon={<CreditCard className="w-5 h-5" />}
//                 className="py-5 text-lg"
//               >
//                 Donate ₹{(customAmount ? parseInt(customAmount) : selectedAmount).toLocaleString('en-IN')}{' '}
//                 {donationType === 'monthly' ? 'Monthly' : 'Now'}
//               </Button>

//               {/* Security Note */}
//               <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-500">
//                 <span className="flex items-center gap-1">
//                   🔒 Secure Payment
//                 </span>
//                 <span className="flex items-center gap-1">
//                   ✓ 80G Tax Benefit
//                 </span>
//                 <span className="flex items-center gap-1">
//                   📧 Instant Receipt
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Impact Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <span className="inline-block text-[#F58220] font-semibold text-sm uppercase tracking-wider mb-2">
//               Your Impact
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">
//               How Your Donation Helps
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Every rupee you donate goes directly to helping dogs in need. 
//               Here's what your generosity can provide:
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {impactItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow border-t-4 border-[#FFD100]"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="w-14 h-14 bg-[#FFD100] rounded-full flex items-center justify-center text-[#002B5C]">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <span className="text-2xl font-bold text-[#002B5C]">{item.amount}</span>
//                   </div>
//                 </div>
//                 <h3 className="text-lg font-bold text-[#002B5C] mb-2">{item.title}</h3>
//                 <p className="text-gray-600 text-sm">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Other Ways to Donate */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">
//               Other Ways to Donate
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-4 gap-6 mb-12">
//             {donationMethods.map((method, index) => (
//               <div
//                 key={index}
//                 className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-[#FFD100] hover:shadow-lg transition-all"
//               >
//                 <span className="text-4xl mb-4 block">{method.icon}</span>
//                 <h3 className="text-lg font-bold text-[#002B5C] mb-2">{method.title}</h3>
//                 <p className="text-gray-600 text-sm">{method.description}</p>
//               </div>
//             ))}
//           </div>

//           {/* Bank Details */}
//           <div className="bg-[#002B5C] rounded-2xl p-8 md:p-12">
//             <h3 className="text-2xl font-bold text-white mb-6 text-center">
//               Bank Transfer Details
//             </h3>
//             <div className="grid md:grid-cols-2 gap-8">
//               <div className="space-y-4">
//                 {[
//                   { label: 'Account Name', value: bankDetails.accountName },
//                   { label: 'Account Number', value: bankDetails.accountNumber },
//                   { label: 'Bank Name', value: bankDetails.bankName },
//                 ].map((item, index) => (
//                   <div key={index} className="flex justify-between border-b border-white/20 pb-2">
//                     <span className="text-gray-400">{item.label}</span>
//                     <span className="text-white font-medium">{item.value}</span>
//                   </div>
//                 ))}
//               </div>
//               <div className="space-y-4">
//                 {[
//                   { label: 'Branch', value: bankDetails.branch },
//                   { label: 'IFSC Code', value: bankDetails.ifscCode },
//                   { label: 'UPI ID', value: bankDetails.upiId },
//                 ].map((item, index) => (
//                   <div key={index} className="flex justify-between border-b border-white/20 pb-2">
//                     <span className="text-gray-400">{item.label}</span>
//                     <span className="text-white font-medium">{item.value}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <p className="text-gray-400 text-center mt-6 text-sm">
//               Please email us at {orgInfo.email} after making a bank transfer so we can send your receipt.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Other Giving Options */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-[#002B5C] text-center mb-12">
//             More Ways to Give
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: 'Sponsor a Dog',
//                 description: 'Provide ongoing support for a specific dog in our care. Receive regular updates and photos.',
//                 icon: '🐕',
//                 cta: 'Sponsor Now',
//               },
//               {
//                 title: 'In-Kind Donations',
//                 description: 'Donate dog food, medicines, blankets, or other supplies our shelters need.',
//                 icon: '📦',
//                 cta: 'See Wishlist',
//               },
//               {
//                 title: 'Corporate Partnerships',
//                 description: 'Partner with us for CSR initiatives, employee giving programs, or events.',
//                 icon: '🏢',
//                 cta: 'Partner With Us',
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
//               >
//                 <span className="text-5xl mb-4 block">{item.icon}</span>
//                 <h3 className="text-xl font-bold text-[#002B5C] mb-3">{item.title}</h3>
//                 <p className="text-gray-600 mb-6">{item.description}</p>
//                 <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
//                   {item.cta}
//                 </Button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Trust & Transparency */}
//       <section className="py-12 bg-[#002B5C]">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
//             {[
//               { icon: <Shield className="w-6 h-6" />, text: 'Registered NGO' },
//               { icon: <Check className="w-6 h-6" />, text: '80G Tax Exemption' },
//               { icon: <Check className="w-6 h-6" />, text: 'FCRA Compliant' },
//               { icon: <Check className="w-6 h-6" />, text: '100% Transparency' },
//               { icon: <Check className="w-6 h-6" />, text: 'Secure Payments' },
//             ].map((badge, index) => (
//               <div key={index} className="flex items-center gap-2 text-white">
//                 <span className="text-[#FFD100]">{badge.icon}</span>
//                 <span className="font-medium">{badge.text}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-16">
//         <div className="max-w-3xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-[#002B5C] text-center mb-12">
//             Frequently Asked Questions
//           </h2>

//           <div className="space-y-4">
//             {[
//               {
//                 q: 'Is my donation tax-deductible?',
//                 a: 'Yes! Suranango for Dogs is registered under Section 80G of the Income Tax Act. You can claim 50% of your donation as tax deduction. We will email your 80G certificate within 7 days.',
//               },
//               {
//                 q: 'How will my donation be used?',
//                 a: 'Your donation directly supports our rescue operations, veterinary care, shelter maintenance, food supplies, and adoption programs. We maintain complete transparency about fund utilization.',
//               },
//               {
//                 q: 'Can I cancel my monthly donation?',
//                 a: `Yes, you can cancel your monthly donation at any time by contacting us at ${orgInfo.email} or calling ${orgInfo.phone}.`,
//               },
//               {
//                 q: 'Will I receive updates on how my donation helped?',
//                 a: 'Yes! All donors receive our quarterly newsletter with updates on our work. Monthly donors also get exclusive stories and photos of dogs they are helping.',
//               },
//               {
//                 q: 'Can I donate in memory of someone?',
//                 a: 'Absolutely. You can make a donation in honor or memory of a loved one. We can send a tribute card to the family if you provide their details.',
//               },
//             ].map((faq, index) => (
//               <details key={index} className="bg-gray-50 rounded-xl group">
//                 <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-[#002B5C] hover:bg-gray-100 rounded-xl">
//                   {faq.q}
//                   <span className="text-[#FFD100] group-open:rotate-180 transition-transform">▼</span>
//                 </summary>
//                 <p className="px-5 pb-5 text-gray-600">{faq.a}</p>
//               </details>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact CTA */}
//       <section className="py-16 bg-[#FFD100]">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold text-[#002B5C] mb-4">
//             Have Questions About Donating?
//           </h2>
//           <p className="text-[#002B5C]/80 mb-8">
//             Our team is happy to help with any questions about donations, tax benefits, or how your money helps.
//           </p>
//           <div className="flex flex-wrap justify-center gap-6">
//             <a
//               href={`tel:${orgInfo.phone}`}
//               className="flex items-center gap-2 px-6 py-3 bg-[#002B5C] text-white rounded-lg font-semibold hover:bg-[#003D82] transition-colors"
//             >
//               <Phone className="w-5 h-5" />
//               {orgInfo.phone}
//             </a>
//             <a
//               href={`mailto:${orgInfo.email}`}
//               className="flex items-center gap-2 px-6 py-3 bg-white text-[#002B5C] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
//             >
//               <Mail className="w-5 h-5" />
//               {orgInfo.email}
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DonatePage;





import React, { useState, useEffect, useRef } from 'react';
import {
  Heart, Gift, Calendar, CreditCard, Check, Shield,
  Phone, Mail, Users, Home, Stethoscope, Utensils, ArrowRight,
  Copy, CheckCircle, QrCode, Building2, User, Briefcase, MapPin,
  ChevronDown, Sparkles, Send, Clock
} from 'lucide-react';

/* ─── Google Fonts ─── */
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap';
document.head.appendChild(fontLink);

const orgInfo = {
  name: 'Surana Dog Welfare Foundation',
  email: 'donate@suranadogngo.org',
  phone: '+919999999999',
};

const bankDetails = {
  accountName: 'Surana Dog Welfare Foundation',
  accountNumber: '50100456789012',
  bankName: 'HDFC Bank Ltd',
  branch: 'Jaipur, Rajasthan, India',
  ifscCode: 'HDFC0001234',
  upiId: 'surana@hdfcbank',
};

// ── Utility ──────────────────────────────────────────────────────
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

// ── Copy Button ──────────────────────────────────────────────────
function CopyBtn({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy} style={{
      background: copied ? '#e8f5e9' : '#f0f4ff',
      border: 'none', borderRadius: 6, padding: '4px 8px',
      cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4,
      transition: 'all .2s', color: copied ? '#2e7d32' : '#002B5C',
      fontSize: 12, fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
    }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {copied ? <CheckCircle size={13} /> : <Copy size={13} />}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

// ── Animated Counter ─────────────────────────────────────────────
function AnimCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(timer); }
      else setVal(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target]);
  return <span ref={ref}>{val.toLocaleString('en-IN')}{suffix}</span>;
}

// ── Main Component ───────────────────────────────────────────────
export const DonatePage: React.FC = () => {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [payForm, setPayForm] = useState({ name: '', phone: '', email: '', pan: '', taxCert: true, dedication: false });
  const [volunteerForm, setVolunteerForm] = useState({ name: '', phone: '', email: '', city: '', occupation: '', availability: '', skills: '', message: '' });
  const [paySubmitted, setPaySubmitted] = useState(false);
  const [volSubmitted, setVolSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'donate' | 'volunteer'>('donate');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const amounts = [500, 1000, 2500, 5000, 10000];

  const styles: Record<string, React.CSSProperties> = {
    page: { fontFamily: 'DM Sans, sans-serif', background: '#fafafa', color: '#1a1a2e' },
    hero: {
      background: 'linear-gradient(135deg, #001f4d 0%, #003080 50%, #004db3 100%)',
      padding: '100px 20px 140px', textAlign: 'center', position: 'relative', overflow: 'hidden',
    },
    heroTitle: {
      fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)',
      fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.15,
    },
    heroSub: { color: 'rgba(255,255,255,.75)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto 32px', lineHeight: 1.8 },
    statsRow: {
      display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' as const,
      padding: '20px 0',
    },
    statItem: { textAlign: 'center' as const },
    statNum: { fontFamily: 'Playfair Display, serif', fontSize: '2.4rem', fontWeight: 700, color: '#FFD100' },
    statLabel: { color: 'rgba(255,255,255,.65)', fontSize: '.85rem', marginTop: 2 },

    // Card section
    cardSection: { maxWidth: 960, margin: '-60px auto 0', padding: '0 20px 60px', position: 'relative', zIndex: 10 },
    tabBar: {
      display: 'flex', background: '#fff', borderRadius: 16, padding: 6, gap: 4,
      boxShadow: '0 4px 24px rgba(0,43,92,.12)', marginBottom: 32,
    },
    tabBtn: (active: boolean): React.CSSProperties => ({
      flex: 1, padding: '14px 20px', borderRadius: 12, border: 'none', cursor: 'pointer',
      fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1rem',
      transition: 'all .3s',
      background: active ? '#002B5C' : 'transparent',
      color: active ? '#FFD100' : '#666',
      transform: active ? 'scale(1.01)' : 'scale(1)',
    }),
    card: {
      background: '#fff', borderRadius: 24, boxShadow: '0 8px 48px rgba(0,43,92,.10)',
      overflow: 'hidden',
    },
    cardHeader: {
      background: 'linear-gradient(90deg, #FFD100, #FFB800)',
      padding: '24px 32px', textAlign: 'center' as const,
    },
    cardHeaderTitle: {
      fontFamily: 'Playfair Display, serif', fontSize: '1.8rem',
      color: '#002B5C', fontWeight: 700, margin: 0,
    },
    cardBody: { padding: '36px 32px' },

    // Toggle
    toggle: {
      display: 'flex', background: '#f3f4f6', borderRadius: 14, padding: 5,
      marginBottom: 28, width: 'fit-content', margin: '0 auto 28px',
    },
    toggleBtn: (active: boolean): React.CSSProperties => ({
      padding: '12px 28px', borderRadius: 11, border: 'none', cursor: 'pointer',
      fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '.95rem',
      display: 'flex', alignItems: 'center', gap: 8, transition: 'all .3s',
      background: active ? '#002B5C' : 'transparent',
      color: active ? '#fff' : '#666',
      boxShadow: active ? '0 4px 16px rgba(0,43,92,.25)' : 'none',
    }),

    // Amount buttons
    amountGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 12, marginBottom: 16 },
    amountBtn: (active: boolean): React.CSSProperties => ({
      padding: '16px 8px', borderRadius: 14, border: `2px solid ${active ? '#FFD100' : '#e5e7eb'}`,
      cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', fontWeight: 800, fontSize: '1.1rem',
      transition: 'all .25s', background: active ? '#FFD100' : '#fff',
      color: active ? '#002B5C' : '#374151',
      transform: active ? 'scale(1.06)' : 'scale(1)',
      boxShadow: active ? '0 6px 20px rgba(255,209,0,.35)' : '0 2px 8px rgba(0,0,0,.05)',
    }),

    // Input
    input: {
      width: '100%', padding: '14px 16px', borderRadius: 12,
      border: '2px solid #e5e7eb', fontFamily: 'DM Sans, sans-serif',
      fontSize: '1rem', outline: 'none', boxSizing: 'border-box' as const,
      transition: 'border .2s',
    },
    label: { fontFamily: 'DM Sans, sans-serif', fontWeight: 700, color: '#002B5C', fontSize: '.85rem', display: 'block', marginBottom: 6, letterSpacing: .5, textTransform: 'uppercase' as const },

    // Primary button
    primaryBtn: {
      background: 'linear-gradient(135deg, #002B5C, #004db3)',
      color: '#FFD100', border: 'none', borderRadius: 14, padding: '18px 32px',
      fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1.1rem',
      cursor: 'pointer', width: '100%', display: 'flex', alignItems: 'center',
      justifyContent: 'center', gap: 10, transition: 'all .3s', letterSpacing: .3,
    },

    // Bank section
    bankSection: { maxWidth: 960, margin: '0 auto', padding: '0 20px 80px' },
    bankGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 },
    bankCard: {
      background: '#fff', borderRadius: 20, boxShadow: '0 4px 24px rgba(0,43,92,.08)',
      overflow: 'hidden', border: '1px solid #e8ecf5',
    },
    bankCardHeader: { padding: '20px 24px', borderBottom: '1px solid #f0f4ff', display: 'flex', alignItems: 'center', gap: 10 },
    bankCardTitle: { fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.2rem', color: '#002B5C' },
    bankRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 24px', borderBottom: '1px solid #f8f9fb' },
    bankRowLabel: { fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '.75rem', color: '#7b8ab8', textTransform: 'uppercase' as const, letterSpacing: 1 },
    bankRowValue: { fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, fontSize: '.9rem', color: '#002B5C' },
    bankNote: { padding: '14px 24px', background: '#fffbea', display: 'flex', alignItems: 'flex-start', gap: 10 },

    // QR card
    qrCard: {
      background: '#fff', borderRadius: 20, boxShadow: '0 4px 24px rgba(0,43,92,.08)',
      border: '1px solid #e8ecf5', display: 'flex', flexDirection: 'column' as const,
      alignItems: 'center', padding: 32, gap: 16,
    },
    qrBox: {
      width: 180, height: 180, background: '#f0f4ff', borderRadius: 16,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      border: '3px dashed #c7d4f0', fontSize: 64,
    },
    upiId: { fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, color: '#002B5C', fontSize: '1.1rem', letterSpacing: .5 },
    upiSub: { color: '#7b8ab8', fontSize: '.85rem', textAlign: 'center' as const, lineHeight: 1.6 },
    alreadyBox: {
      background: '#f0f4ff', borderRadius: 12, padding: '14px 20px',
      textAlign: 'center' as const, width: '100%',
    },

    // Impact section
    impactSection: { background: '#f6f8ff', padding: '80px 20px' },
    sectionLabel: { fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '.8rem', letterSpacing: 2, textTransform: 'uppercase' as const, color: '#F58220', display: 'block', textAlign: 'center' as const, marginBottom: 8 },
    sectionTitle: { fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 700, color: '#002B5C', textAlign: 'center' as const, marginBottom: 12 },
    sectionSub: { color: '#6b7280', textAlign: 'center' as const, maxWidth: 540, margin: '0 auto 48px', lineHeight: 1.8 },
    impactGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20, maxWidth: 960, margin: '0 auto' },
    impactCard: {
      background: '#fff', borderRadius: 20, padding: '28px 24px',
      borderTop: '4px solid #FFD100', boxShadow: '0 4px 16px rgba(0,43,92,.06)',
      transition: 'all .3s', cursor: 'default',
    },

    // Ways to give
    waysSection: { padding: '80px 20px' },
    waysGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 20, maxWidth: 960, margin: '0 auto 48px' },
    wayCard: {
      background: '#fff', border: '1.5px solid #e8ecf5', borderRadius: 16,
      padding: '28px 20px', textAlign: 'center' as const,
      transition: 'all .3s', cursor: 'default',
    },

    // Volunteer form
    volSection: { background: 'linear-gradient(135deg, #001f4d, #003080)', padding: '80px 20px' },
    volCard: {
      background: '#fff', borderRadius: 24, boxShadow: '0 16px 64px rgba(0,0,0,.2)',
      overflow: 'hidden', maxWidth: 800, margin: '0 auto',
    },
    volHeader: { background: 'linear-gradient(90deg, #FFD100, #FFB800)', padding: '28px 32px', textAlign: 'center' as const },
    volGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },

    // Trust bar
    trustBar: { background: '#002B5C', padding: '28px 20px' },
    trustRow: { display: 'flex', justifyContent: 'center', flexWrap: 'wrap' as const, gap: '12px 40px', maxWidth: 960, margin: '0 auto' },
    trustBadge: { display: 'flex', alignItems: 'center', gap: 8, color: '#fff', fontFamily: 'DM Sans', fontWeight: 600, fontSize: '.9rem' },

    // FAQ
    faqSection: { padding: '80px 20px', maxWidth: 720, margin: '0 auto' },
    faqItem: { background: '#fff', borderRadius: 14, marginBottom: 10, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,43,92,.06)' },
    faqQ: { padding: '18px 24px', cursor: 'pointer', fontFamily: 'DM Sans', fontWeight: 700, color: '#002B5C', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1rem' },
    faqA: { padding: '0 24px 18px', color: '#6b7280', lineHeight: 1.8, fontFamily: 'DM Sans', fontSize: '.95rem' },

    // CTA
    ctaSection: { background: '#FFD100', padding: '64px 20px', textAlign: 'center' as const },
  };

  // Impact items
  const impactItems = [
    { amount: '₹500', icon: '🍖', title: 'Feed a Dog for a Week', desc: 'Nutritious meals & fresh water for 7 days.' },
    { amount: '₹1,000', icon: '💉', title: 'Vaccinations & Deworming', desc: 'Essential vaccinations + deworming for one dog.' },
    { amount: '₹2,500', icon: '🏥', title: 'Medical Treatment', desc: 'Emergency care or minor surgery for an injured dog.' },
    { amount: '₹5,000', icon: '🏠', title: 'One Week of Full Care', desc: 'Food, shelter, medical attention, and love.' },
    { amount: '₹10,000', icon: '🐾', title: 'Rescue & Rehabilitation', desc: 'Full cost of rescuing & rehabilitating one dog.' },
    { amount: '₹25,000', icon: '🛡️', title: 'Sponsor a Shelter Dog', desc: 'Sponsor for 3 months until adoption.' },
  ];

  const faqs = [
    { q: 'Is my donation tax-deductible?', a: 'Yes! We are registered under Section 80G. You can claim 50% as tax deduction. Certificate emailed within 7 days.' },
    { q: 'How will my donation be used?', a: 'Directly for rescue, veterinary care, shelter, food, and adoption. We publish quarterly reports for full transparency.' },
    { q: 'Can I cancel my monthly donation?', a: `Yes, cancel anytime by emailing ${orgInfo.email} or calling ${orgInfo.phone}.` },
    { q: 'Will I receive updates?', a: 'Yes — quarterly newsletter for all donors. Monthly donors get exclusive dog stories and photos.' },
    { q: 'Can I donate in memory of someone?', a: 'Absolutely! Make a tribute donation and we can send a memorial card to the family.' },
  ];

  const handlePaySubmit = (e: React.FormEvent) => { e.preventDefault(); setPaySubmitted(true); };
  const handleVolSubmit = (e: React.FormEvent) => { e.preventDefault(); setVolSubmitted(true); };

  const finalAmount = customAmount ? parseInt(customAmount) || 0 : selectedAmount;

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap');
        * { box-sizing: border-box; }
        .hover-lift:hover { transform: translateY(-6px) !important; box-shadow: 0 12px 32px rgba(0,43,92,.15) !important; }
        .hover-glow:hover { border-color: #FFD100 !important; box-shadow: 0 0 0 4px rgba(255,209,0,.18) !important; }
        .btn-hover:hover { transform: translateY(-2px) !important; box-shadow: 0 8px 28px rgba(0,43,92,.35) !important; }
        .input-focus:focus { border-color: #FFD100 !important; box-shadow: 0 0 0 4px rgba(255,209,0,.18) !important; }
        .fade-in { animation: fadeUp .6s ease both; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .pulse-icon { animation: pulse 2.5s ease-in-out infinite; }
        @keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.12); } }
        .shimmer { position: relative; overflow: hidden; }
        .shimmer::after { content:''; position:absolute; inset:0; background: linear-gradient(90deg, transparent 20%, rgba(255,255,255,.4) 50%, transparent 80%); transform: translateX(-100%); animation: shimmer 2.4s infinite; }
        @keyframes shimmer { to { transform: translateX(100%); } }
        textarea { resize: vertical; }
        select { appearance: none; }
      `}</style>

      {/* ── HERO ── */}
     <section
  style={{
    ...styles.hero,
    minHeight: '320px',        // ✅ height kam
    padding: '40px 20px 60px', // ✅ padding reduce
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
  }}
>
  {/* Background pattern */}
  <div style={{
    position: 'absolute', inset: 0,
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")",
  }} />

  <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto' }}>

    {/* Paw icon */}
    <div
      className="pulse-icon"
      style={{ fontSize: 'clamp(36px, 8vw, 56px)', marginBottom: 10 }}
    >🐾</div>

    {/* Title */}
    <h1
      className="fade-in"
      style={{
        ...styles.heroTitle,
        fontSize: 'clamp(1.6rem, 5vw, 3rem)',
        lineHeight: 1.1,
        marginBottom: 12,
        padding: '0 8px',
      }}
    >
      Help Us Save More Lives
    </h1>

    {/* Subtitle */}
    <p
      className="fade-in"
      style={{
        ...styles.heroSub,
        fontSize: 'clamp(0.85rem, 2.5vw, 1.05rem)',
        lineHeight: 1.6,
        marginBottom: 28,
        padding: '0 8px',
        maxWidth: '560px',
        margin: '0 auto 24px',
      }}
    >
      Your donation rescues injured street dogs, funds medical care, and finds loving homes.
      Every rupee makes a difference.
    </p>

    {/* Stats — 2 cols on mobile, 4 on desktop */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '10px',
      maxWidth: '500px',
      margin: '0 auto',
    }}
      className="sm:grid-cols-4"
    >
      {[
        { n: 4800,  s: '+', l: 'Dogs Rescued'   },
        { n: 12000, s: '+', l: 'Treatments'      },
        { n: 3200,  s: '+', l: 'Adoptions'       },
        { n: 98,    s: '%', l: 'Survival Rate'   },
      ].map((st, i) => (
        <div key={i} style={{
          ...styles.statItem,
          padding: '10px 8px',
          borderRadius: '10px',
          background: 'rgba(255,255,255,0.07)',
        }}>
          <div style={{ ...styles.statNum, fontSize: 'clamp(1.3rem, 4vw, 1.8rem)' }}>
            <AnimCounter target={st.n} suffix={st.s} />
          </div>
          <div style={{ ...styles.statLabel, fontSize: 'clamp(0.68rem, 2vw, 0.8rem)' }}>
            {st.l}
          </div>
        </div>
      ))}
    </div>

  </div>
</section>
      {/* ── DONATE / VOLUNTEER TAB CARD ── */}
     

      {/* ── BANK DETAILS (Screenshot Style) ── */}
      <section style={{ padding: '0 20px 80px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ ...styles.sectionTitle, marginBottom: 8 }}>Bank Transfer & UPI</h2>
          <p style={styles.sectionSub}>Transfer directly using bank details or scan QR to pay instantly</p>
          <div style={styles.bankGrid}>
            {/* Bank Card */}
            <div style={styles.bankCard}>
              <div style={styles.bankCardHeader}>
                <Building2 size={22} style={{ color: '#b8862a' }} />
                <span style={styles.bankCardTitle}>Direct Bank Transfer</span>
              </div>
              <p style={{ padding: '12px 24px 16px', fontFamily: 'DM Sans', color: '#6b7280', fontSize: '.9rem', lineHeight: 1.6, borderBottom: '1px solid #f0f4ff' }}>
                Make a direct donation via your mobile banking app or at any branch using the details below.
              </p>
              {[
                { label: 'Account Name', value: bankDetails.accountName },
                { label: 'Bank Name', value: bankDetails.bankName },
                { label: 'Account Number', value: bankDetails.accountNumber },
                { label: 'IFSC Code', value: bankDetails.ifscCode },
                { label: 'Branch', value: bankDetails.branch },
              ].map((row, i) => (
                <div key={i} style={styles.bankRow} className="hover-glow" onMouseEnter={e => (e.currentTarget.style.background = '#f8f9ff')} onMouseLeave={e => (e.currentTarget.style.background = '')}>
                  <div>
                    <div style={styles.bankRowLabel}>{row.label}</div>
                    <div style={styles.bankRowValue}>{row.value}</div>
                  </div>
                  <CopyBtn value={row.value} />
                </div>
              ))}
              <div style={styles.bankNote}>
                <Shield size={16} style={{ color: '#b8862a', flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontFamily: 'DM Sans', fontSize: '.82rem', color: '#92720a', lineHeight: 1.6 }}>
                  All donations are tax-exempt under Section 80G of the Income Tax Act.
                </span>
              </div>
            </div>

            {/* QR / UPI Card */}
            <div style={styles.qrCard}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, alignSelf: 'flex-start' }}>
                <QrCode size={22} style={{ color: '#002B5C' }} />
                <span style={{ ...styles.bankCardTitle, fontFamily: 'Playfair Display, serif' }}>Scan to Pay</span>
              </div>
              <div style={styles.qrBox}>📱</div>
              <div>
                <div style={{ ...styles.upiId, textAlign: 'center' }}>UPI ID: {bankDetails.upiId}</div>
                <div style={styles.upiSub}>Supports GPay, PhonePe, Paytm & all UPI Apps</div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <CopyBtn value={bankDetails.upiId} />
              </div>
              <div style={styles.alreadyBox}>
                <div style={{ fontFamily: 'DM Sans', fontWeight: 700, color: '#002B5C', marginBottom: 4 }}>Already Donated?</div>
                <div style={{ fontFamily: 'DM Sans', color: '#6b7280', fontSize: '.85rem', marginBottom: 10 }}>Please email us your screenshot for the 80G receipt.</div>
                <a href={`mailto:${orgInfo.email}`} style={{ color: '#002B5C', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '.9rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center' }}>
                  <Mail size={14} /> {orgInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT ── */}
      {/* <section style={styles.impactSection}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <span style={styles.sectionLabel}>Your Impact</span>
          <h2 style={styles.sectionTitle}>How Your Donation Helps</h2>
          <p style={styles.sectionSub}>Every rupee goes directly to helping dogs in need.</p>
          <div style={styles.impactGrid}>
            {impactItems.map((item, i) => (
              <div key={i} className="hover-lift" style={styles.impactCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
                  <div style={{ width: 56, height: 56, background: '#FFD100', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, flexShrink: 0 }}>{item.icon}</div>
                  <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '1.5rem', color: '#002B5C' }}>{item.amount}</span>
                </div>
                <h3 style={{ fontFamily: 'DM Sans', fontWeight: 700, color: '#002B5C', fontSize: '1rem', marginBottom: 6 }}>{item.title}</h3>
                <p style={{ fontFamily: 'DM Sans', color: '#6b7280', fontSize: '.88rem', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── WAYS TO GIVE ── */}
      {/* <section style={styles.waysSection}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ ...styles.sectionTitle, marginBottom: 8 }}>More Ways to Give</h2>
          <p style={{ ...styles.sectionSub, marginBottom: 40 }}>Support us however works best for you.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { icon: '🐕', title: 'Sponsor a Dog', desc: 'Ongoing support for a specific dog. Regular updates + photos.', cta: 'Sponsor Now' },
              { icon: '📦', title: 'In-Kind Donations', desc: 'Dog food, medicines, blankets, or other supplies.', cta: 'See Wishlist' },
              { icon: '🏢', title: 'Corporate CSR', desc: 'Partner for CSR initiatives, employee giving, or events.', cta: 'Partner With Us' },
            ].map((item, i) => (
              <div key={i} className="hover-lift" style={styles.wayCard}>
                <span style={{ fontSize: 48, display: 'block', marginBottom: 14 }}>{item.icon}</span>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#002B5C', fontSize: '1.2rem', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontFamily: 'DM Sans', color: '#6b7280', fontSize: '.9rem', marginBottom: 20, lineHeight: 1.7 }}>{item.desc}</p>
                <button className="btn-hover" style={{ background: 'transparent', border: '2px solid #002B5C', color: '#002B5C', borderRadius: 10, padding: '10px 20px', fontFamily: 'DM Sans', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: '.9rem' }}>
                  {item.cta} <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── TRUST BAR ── */}
      {/* <div style={styles.trustBar}>
        <div style={styles.trustRow}>
          {[{ i: '🏛️', t: 'Registered NGO' }, { i: '📋', t: '80G Tax Exemption' }, { i: '✅', t: 'FCRA Compliant' }, { i: '🔍', t: '100% Transparency' }, { i: '🔒', t: 'Secure Payments' }].map((b, i) => (
            <div key={i} style={styles.trustBadge}>
              <span style={{ color: '#FFD100', fontSize: '1.1rem' }}>{b.i}</span> {b.t}
            </div>
          ))}
        </div>
      </div> */}

      {/* ── FAQ ── */}
      {/* <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ ...styles.sectionTitle, marginBottom: 40 }}>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} style={styles.faqItem} className="hover-lift">
              <div style={styles.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {faq.q}
                <ChevronDown size={18} style={{ color: '#FFD100', transition: 'transform .3s', transform: openFaq === i ? 'rotate(180deg)' : 'none', flexShrink: 0 }} />
              </div>
              {openFaq === i && <p style={styles.faqA}>{faq.a}</p>}
            </div>
          ))}
        </div>
      </section> */}

      {/* ── CTA ── */}
      <section style={styles.ctaSection}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#002B5C', marginBottom: 8 }}>Have Questions?</h2>
        <p style={{ fontFamily: 'DM Sans', color: 'rgba(0,43,92,.75)', marginBottom: 32, fontSize: '1rem' }}>Our team is happy to help with donations, tax benefits, or how your money helps.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <a href={`tel:${orgInfo.phone}`} className="btn-hover" style={{ background: '#002B5C', color: '#FFD100', padding: '14px 28px', borderRadius: 12, fontFamily: 'DM Sans', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Phone size={16} /> {orgInfo.phone}
          </a>
          <a href={`mailto:${orgInfo.email}`} className="btn-hover" style={{ background: '#fff', color: '#002B5C', padding: '14px 28px', borderRadius: 12, fontFamily: 'DM Sans', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Mail size={16} /> {orgInfo.email}
          </a>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;