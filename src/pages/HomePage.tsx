// // // import React from 'react';
// // // import { HeroBanner } from '@/components/sections/HeroBanner';
// // // import { InfoCards } from '@/components/sections/InfoCards';
// // // import { FeaturedDogs } from '@/components/sections/FeaturedDogs';
// // // import { StatsSection } from '@/components/sections/StatsSection';
// // // import { Testimonials } from '@/components/sections/Testimonials';
// // // import { CTABanner } from '@/components/sections/CTABanner';
// // // import { orgInfo } from '@/constants/theme';

// // // /**
// // //  * HomePage Component
// // //  * Main landing page with hero, featured dogs, and call-to-actions
// // //  */

// // // const HomePage: React.FC = () => {
// // //   return (
// // //     <>
// // //       {/* Hero Section */}
// // //       <HeroBanner
// // //         subtitle={orgInfo.tagline}
// // //         title="Every Dog Deserves a Loving Home"
// // //         description="Based in Rajasthan, India, we've been rescuing and rehoming street dogs since 2010. Find your perfect companion today and give a rescue dog the second chance they deserve."
// // //         primaryCTA={{
// // //           label: 'Find a Dog',
// // //           path: '/rehoming',
// // //         }}
// // //         secondaryCTA={{
// // //           label: 'Donate Today',
// // //           path: '/donate',
// // //         }}
// // //         backgroundImage="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1920&h=800&fit=crop"
// // //       />

// // //       {/* Quick Action Cards */}
// // //       <InfoCards />

// // //       {/* Featured Dogs */}
// // //       <FeaturedDogs />

// // //       {/* Statistics */}
// // //       <StatsSection />

// // //       {/* Success Stories */}
// // //       <Testimonials />

// // //       {/* CTA Banner */}
// // //       <CTABanner />
// // //     </>
// // //   );
// // // };

// // // export default HomePage;




// // // import React from 'react';
// // // import { HeroBanner } from '@/components/sections/HeroBanner';
// // // import { InfoCards } from '@/components/sections/InfoCards';
// // // import { FeaturedDogs } from '@/components/sections/FeaturedDogs';
// // // import { StatsSection } from '@/components/sections/StatsSection';
// // // import { Testimonials } from '@/components/sections/Testimonials';
// // // import { CTABanner } from '@/components/sections/CTABanner';
// // // import { orgInfo } from '@/constants/theme';

// // // /**
// // //  * HomePage Component
// // //  * Main landing page with hero, featured dogs, and call-to-actions
// // //  */

// // // const HomePage: React.FC = () => {
// // //   return (
// // //     <div className="font-['Achi',sans-serif]">   {/* Aachi Font Applied */}

// // //       {/* Hero Section */}
// // //       <HeroBanner
// // //         subtitle={orgInfo.tagline}
// // //         title="Every Dog Deserves a Loving Home"
// // //         description="Based in Rajasthan, India, we've been rescuing and rehoming street dogs since 2010. Find your perfect companion today and give a rescue dog the second chance they deserve."
// // //         primaryCTA={{
// // //           label: 'Find a Dog',
// // //           path: '/rehoming',
// // //         }}
// // //         secondaryCTA={{
// // //           label: 'Donate Today',
// // //           path: '/donate',
// // //         }}
// // //         backgroundImage="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1920&h=800&fit=crop"
// // //       />

// // //       {/* Quick Action Cards */}
// // //       <InfoCards />

// // //       {/* Featured Dogs */}
// // //       <FeaturedDogs />

// // //       {/* Statistics */}
// // //       <StatsSection />

// // //       {/* ====================== NEW SECTION ====================== */}
// // //       {/* Awareness & Law Section */}
// // //       <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
// // //         <div className="max-w-7xl mx-auto px-6">
// // //           <div className="text-center mb-16">
// // //             <div className="inline-flex items-center gap-3 bg-white px-8 py-3 rounded-full text-orange-600 font-semibold text-lg shadow-sm mb-6">
// // //               📢 AWARENESS & LAW
// // //             </div>
// // //             <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
// // //               Know Your Rights,<br />
// // //               <span className="text-orange-600">Protect Their Lives</span>
// // //             </h2>
// // //             <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
// // //               Understanding animal welfare laws and spreading awareness is the first step towards creating a safer world for street dogs.
// // //             </p>
// // //           </div>

// // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //             {/* Card 1 */}
// // //             <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-transparent hover:border-orange-200">
// // //               <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center text-5xl mb-8 group-hover:scale-110 transition-transform">
// // //                 ⚖️
// // //               </div>
// // //               <h3 className="text-2xl font-bold text-gray-900 mb-4">Important Laws</h3>
// // //               <ul className="space-y-4 text-gray-600">
// // //                 <li className="flex gap-3">
// // //                   <span className="text-orange-500 font-bold">•</span>
// // //                   Prevention of Cruelty to Animals Act, 1960
// // //                 </li>
// // //                 <li className="flex gap-3">
// // //                   <span className="text-orange-500 font-bold">•</span>
// // //                   Animal Birth Control (Dogs) Rules 2023
// // //                 </li>
// // //                 <li className="flex gap-3">
// // //                   <span className="text-orange-500 font-bold">•</span>
// // //                   Prohibition of Dog Meat Trade
// // //                 </li>
// // //               </ul>
// // //             </div>

// // //             {/* Card 2 */}
// // //             <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-transparent hover:border-orange-200">
// // //               <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center text-5xl mb-8 group-hover:scale-110 transition-transform">
// // //                 🚨
// // //               </div>
// // //               <h3 className="text-2xl font-bold text-gray-900 mb-4">Report Cruelty</h3>
// // //               <p className="text-gray-600 mb-6">
// // //                 Witnessed cruelty? Don't stay silent. Report immediately.
// // //               </p>
// // //               <div className="bg-orange-50 p-5 rounded-2xl text-sm">
// // //                 <p className="font-semibold text-orange-700">Helpline:</p>
// // //                 <p className="text-xl font-bold text-orange-600">1800-11-8999 (AWBI)</p>
// // //                 <p className="mt-2 text-gray-500">Or call your local police (100)</p>
// // //               </div>
// // //             </div>

// // //             {/* Card 3 */}
// // //             <div className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-transparent hover:border-orange-200">
// // //               <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center text-5xl mb-8 group-hover:scale-110 transition-transform">
// // //                 🐾
// // //               </div>
// // //               <h3 className="text-2xl font-bold text-gray-900 mb-4">Be An Aware Citizen</h3>
// // //               <ul className="space-y-4 text-gray-600">
// // //                 <li className="flex items-start gap-3">
// // //                   <span className="text-emerald-500 mt-1">✓</span>
// // //                   Support ABC (Sterilization) Programs
// // //                 </li>
// // //                 <li className="flex items-start gap-3">
// // //                   <span className="text-emerald-500 mt-1">✓</span>
// // //                   Feed responsibly - Don't encourage breeding
// // //                 </li>
// // //                 <li className="flex items-start gap-3">
// // //                   <span className="text-emerald-500 mt-1">✓</span>
// // //                   Adopt, Don't Shop
// // //                 </li>
// // //               </ul>
// // //             </div>
// // //           </div>

// // //           {/* Section CTA */}
// // //           <div className="mt-16 text-center">
// // //             <button className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-5 rounded-2xl font-semibold text-lg transition-all active:scale-95 shadow-lg shadow-orange-200">
// // //               Join Awareness Campaign →
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Success Stories */}
// // //       <Testimonials />

// // //       {/* CTA Banner */}
// // //       <CTABanner />
// // //     </div>
// // //   );
// // // };

// // // // export default HomePage;






// // // import React from 'react';
// // // import { HeroBanner } from '@/components/sections/HeroBanner';
// // // import { InfoCards } from '@/components/sections/InfoCards';
// // // import { FeaturedDogs } from '@/components/sections/FeaturedDogs';
// // // import { StatsSection } from '@/components/sections/StatsSection';
// // // import { Testimonials } from '@/components/sections/Testimonials';
// // // import { CTABanner } from '@/components/sections/CTABanner';
// // // import { orgInfo } from '@/constants/theme';

// // // const HomePage: React.FC = () => {
// // //   return (
// // //     <div className="font-['Achi',sans-serif] text-slate-900">
// // //       {/* Top Emergency Strip */}
// // //       <div className="bg-[#002b5c] text-white">
// // //         <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
// // //           <p className="text-sm text-white/85">
// // //             Emergency? Report injured/critical cases immediately.
// // //           </p>
// // //           <div className="flex items-center gap-3 text-sm font-semibold">
// // //             <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15">
// // //               <span className="w-2 h-2 rounded-full bg-[#ffd100]" />
// // //               Helpline: +91-XXXXXXXXXX
// // //             </span>
// // //             <a
// // //               href="/report"
// // //               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffd100] text-[#002b5c] font-extrabold hover:brightness-95 transition"
// // //             >
// // //               Report Now →
// // //             </a>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Hero (NO adoption/sell language) */}
// // //       <HeroBanner
// // //         subtitle={orgInfo.tagline}
// // //         title="Street Dog Care & Community Response Team"
// // //         description="We vaccinate community dogs, rescue injured dogs, support temporary shelter & recovery, and help societies resolve dog-related issues responsibly. Contact us and our team will reach on-ground."
// // //         primaryCTA={{ label: 'Report an Emergency', path: '/report' }}
// // //         secondaryCTA={{ label: 'Request Vaccination Drive', path: '/vaccination' }}
// // //         backgroundImage="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1920&h=800&fit=crop"
// // //       />

// // //       {/* Quick Action Cards (update content later if needed) */}
// // //       <InfoCards />

// // //       {/* Optional section (repurpose as “Recent Rescues / Cases Helped”) */}
// // //       <FeaturedDogs />

// // //       <StatsSection />

// // //       {/* ===================== NEW SECTION 1: How We Help Societies ===================== */}
// // //       <section className="py-20 md:py-24 bg-white">
// // //         <div className="max-w-7xl mx-auto px-6">
// // //           <div className="text-center mb-14">
// // //             <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold bg-[#002b5c] text-white shadow-sm">
// // //               <span className="w-2.5 h-2.5 rounded-full bg-[#ffd100]" />
// // //               Society / RWA Support
// // //             </div>

// // //             <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-[#002b5c]">
// // //               How We Help Societies
// // //             </h2>
// // //             <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
// // //               We solve dog-related problems with a practical + humane approach—so residents feel safe and dogs stay protected.
// // //             </p>
// // //           </div>

// // //           <div className="grid lg:grid-cols-2 gap-8 items-stretch">
// // //             {/* Left: Common Problems */}
// // //             <div className="rounded-3xl border border-slate-200 p-8 md:p-10 bg-white shadow-[0_10px_35px_rgba(2,6,23,0.06)]">
// // //               <h3 className="text-2xl font-extrabold text-[#002b5c]">
// // //                 Common Society Problems We Handle
// // //               </h3>
// // //               <ul className="mt-6 space-y-4 text-slate-700">
// // //                 {[
// // //                   'Fear of dogs / residents feeling unsafe',
// // //                   'Barking complaints & night disturbance',
// // //                   'Unvaccinated dogs / bite-risk concerns',
// // //                   'Feeding conflicts between residents',
// // //                   'Injured or sick dog inside premises',
// // //                   'Puppies found / abandoned cases',
// // //                 ].map((t) => (
// // //                   <li key={t} className="flex gap-3">
// // //                     <span className="mt-1 h-6 w-6 shrink-0 rounded-xl bg-[#ffd100] text-[#002b5c] font-extrabold grid place-items-center">
// // //                       ✓
// // //                     </span>
// // //                     <span className="leading-relaxed">{t}</span>
// // //                   </li>
// // //                 ))}
// // //               </ul>

// // //               <div className="mt-8 rounded-2xl bg-[#fff7cc] border border-[#002b5c]/10 p-5">
// // //                 <p className="text-sm font-semibold text-[#002b5c]">Tip</p>
// // //                 <p className="mt-1 text-slate-700">
// // //                   Most conflicts reduce drastically when dogs are vaccinated, sterilization is coordinated,
// // //                   and feeding is done at a fixed, clean spot.
// // //                 </p>
// // //               </div>
// // //             </div>

// // //             {/* Right: Our On-ground Process */}
// // //             <div className="rounded-3xl bg-gradient-to-br from-[#002b5c] to-[#001a38] text-white p-8 md:p-10 shadow-[0_18px_55px_rgba(0,43,92,0.25)]">
// // //               <h3 className="text-2xl font-extrabold">
// // //                 Our On-ground Resolution Process
// // //               </h3>

// // //               <div className="mt-6 grid gap-4">
// // //                 {[
// // //                   { step: '01', title: 'Request Received', desc: 'Call/WhatsApp + location + issue details.' },
// // //                   { step: '02', title: 'Team Visit', desc: 'On-ground assessment: health, vaccination, behavior, triggers.' },
// // //                   { step: '03', title: 'Action Plan', desc: 'Vaccination / first aid / vet support + society guidelines.' },
// // //                   { step: '04', title: 'Follow-up', desc: 'We check again to ensure stability & safety.' },
// // //                 ].map((s) => (
// // //                   <div key={s.step} className="rounded-2xl bg-white/8 border border-white/12 p-5">
// // //                     <div className="flex items-center justify-between">
// // //                       <span className="text-xs font-extrabold tracking-widest text-white/70">
// // //                         STEP {s.step}
// // //                       </span>
// // //                       <span className="h-9 w-9 rounded-2xl bg-[#ffd100] text-[#002b5c] font-extrabold grid place-items-center">
// // //                         →
// // //                       </span>
// // //                     </div>
// // //                     <div className="mt-3 text-lg font-bold">{s.title}</div>
// // //                     <div className="mt-1 text-white/80">{s.desc}</div>
// // //                   </div>
// // //                 ))}
// // //               </div>

// // //               <div className="mt-8 flex flex-col sm:flex-row gap-4">
// // //                 <a
// // //                   href="/society-support"
// // //                   className="inline-flex justify-center rounded-2xl px-7 py-4 font-extrabold bg-[#ffd100] text-[#002b5c] hover:brightness-95 transition"
// // //                 >
// // //                   Request a Society Visit →
// // //                 </a>
// // //                 <a
// // //                   href="/contact"
// // //                   className="inline-flex justify-center rounded-2xl px-7 py-4 font-bold bg-white/10 border border-white/15 text-white hover:bg-white/15 transition"
// // //                 >
// // //                   Contact Team
// // //                 </a>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===================== NEW SECTION 2: Emergency Support ===================== */}
// // //       <section className="py-20 md:py-24 bg-[#fff7cc]">
// // //         <div className="max-w-7xl mx-auto px-6">
// // //           <div className="text-center mb-14">
// // //             <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold bg-[#ffd100] text-[#002b5c]">
// // //               Emergency Support
// // //             </div>
// // //             <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-[#002b5c]">
// // //               Emergency Rescue & Injury Support
// // //             </h2>
// // //             <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-700">
// // //               If a dog is injured, hit by vehicle, bleeding, or unable to stand—report immediately. Our team prioritizes critical cases.
// // //             </p>
// // //           </div>

// // //           <div className="grid md:grid-cols-3 gap-7">
// // //             {[
// // //               {
// // //                 title: 'Road Accident / Bleeding',
// // //                 points: ['Share exact location', 'Send photo/video if possible', 'Keep crowd away & avoid touching'],
// // //                 cta: '/report',
// // //               },
// // //               {
// // //                 title: 'Severe Illness / Not Moving',
// // //                 points: ['Dog may be dehydrated/feverish', 'Keep water nearby (safe distance)', 'Report quickly for assessment'],
// // //                 cta: '/report',
// // //               },
// // //               {
// // //                 title: 'Bite Risk / Suspected Rabies',
// // //                 points: ['Do not approach', 'Warn people/kids', 'Report for safe handling + guidance'],
// // //                 cta: '/report',
// // //               },
// // //             ].map((card) => (
// // //               <div
// // //                 key={card.title}
// // //                 className="rounded-3xl border border-[#002b5c]/10 bg-white p-8 shadow-[0_10px_35px_rgba(2,6,23,0.08)] hover:shadow-[0_18px_55px_rgba(0,43,92,0.16)] transition-shadow"
// // //               >
// // //                 <div className="h-11 w-11 rounded-2xl bg-[#002b5c] text-white grid place-items-center font-extrabold">
// // //                   !
// // //                 </div>

// // //                 <h3 className="mt-6 text-xl font-extrabold text-[#002b5c]">{card.title}</h3>

// // //                 <ul className="mt-4 space-y-3 text-slate-700">
// // //                   {card.points.map((p) => (
// // //                     <li key={p} className="flex gap-3">
// // //                       <span className="mt-1 h-6 w-6 rounded-xl bg-[#ffd100] text-[#002b5c] font-extrabold grid place-items-center">
// // //                         ✓
// // //                       </span>
// // //                       <span>{p}</span>
// // //                     </li>
// // //                   ))}
// // //                 </ul>

// // //                 <a
// // //                   href={card.cta}
// // //                   className="mt-7 inline-flex w-full justify-center rounded-2xl px-6 py-4 font-extrabold bg-[#002b5c] text-white hover:bg-[#00224a] transition-colors"
// // //                 >
// // //                   Report Emergency →
// // //                 </a>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           <div className="mt-10 rounded-3xl bg-[#002b5c] text-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
// // //             <div>
// // //               <div className="text-sm font-semibold text-white/75">Fast reporting helps us dispatch quicker</div>
// // //               <div className="mt-2 text-2xl md:text-3xl font-extrabold">
// // //                 Share location + short description + photo (optional)
// // //               </div>
// // //             </div>
// // //             <a
// // //               href="/report"
// // //               className="inline-flex justify-center rounded-2xl px-7 py-4 font-extrabold bg-[#ffd100] text-[#002b5c] hover:brightness-95 transition"
// // //             >
// // //               Open Report Form →
// // //             </a>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ===================== NEW SECTION 3: Awareness ===================== */}
// // //       <section className="py-20 md:py-24 bg-white">
// // //         <div className="max-w-7xl mx-auto px-6">
// // //           <div className="text-center mb-14">
// // //             <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold bg-[#002b5c] text-white">
// // //               <span className="w-2.5 h-2.5 rounded-full bg-[#ffd100]" />
// // //               Awareness
// // //             </div>

// // //             <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-[#002b5c]">
// // //               Awareness, Education & Responsible Co-existence
// // //             </h2>
// // //             <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
// // //               Awareness reduces fear, improves safety, and helps communities treat dogs humanely while keeping residents secure.
// // //             </p>
// // //           </div>

// // //           <div className="grid lg:grid-cols-3 gap-7">
// // //             {[
// // //               {
// // //                 title: 'Community Sessions',
// // //                 desc: 'Short sessions for RWAs: safe behavior, kids safety, and how to avoid escalation.',
// // //                 tag: 'Society Friendly',
// // //               },
// // //               {
// // //                 title: 'Vaccination Awareness',
// // //                 desc: 'Why rabies vaccination matters, how drives work, and how societies can coordinate.',
// // //                 tag: 'Health First',
// // //               },
// // //               {
// // //                 title: 'Do’s & Don’ts Posters',
// // //                 desc: 'Simple posters: feeding rules, safe distance, and reporting emergencies responsibly.',
// // //                 tag: 'Easy to Follow',
// // //               },
// // //             ].map((c) => (
// // //               <div
// // //                 key={c.title}
// // //                 className="rounded-3xl border border-slate-200 bg-white p-8 hover:shadow-[0_18px_55px_rgba(0,43,92,0.12)] transition-shadow"
// // //               >
// // //                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fff7cc] text-[#002b5c] text-sm font-extrabold border border-[#002b5c]/10">
// // //                   <span className="w-2 h-2 rounded-full bg-[#ffd100]" />
// // //                   {c.tag}
// // //                 </div>
// // //                 <h3 className="mt-5 text-xl font-extrabold text-[#002b5c]">{c.title}</h3>
// // //                 <p className="mt-3 text-slate-600 leading-relaxed">{c.desc}</p>

// // //                 <div className="mt-7 h-1 w-28 rounded-full bg-slate-100">
// // //                   <div className="h-1 w-12 rounded-full bg-[#ffd100]" />
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           <div className="mt-12 text-center">
// // //             <a
// // //               href="/awareness"
// // //               className="inline-flex items-center justify-center rounded-2xl px-10 py-5 font-extrabold
// // //                          bg-[#ffd100] text-[#002b5c] hover:brightness-95 transition shadow-[0_18px_55px_rgba(0,43,92,0.18)]"
// // //             >
// // //               Join Awareness Program →
// // //             </a>
// // //             <p className="mt-4 text-sm text-slate-500">
// // //               We can also coordinate awareness sessions inside societies and communities.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Testimonials (keep) */}
// // //       <Testimonials />

// // //       {/* CTA Banner (update text inside component later if it’s adoption-focused) */}
// // //       <CTABanner />
// // //     </div>
// // //   );
// // // };

// // // export default HomePage;






















// // import React, { useEffect, useRef, useState } from 'react';
// // import { HeroBanner } from '@/components/sections/HeroBanner';
// // import { InfoCards } from '@/components/sections/InfoCards';
// // import { FeaturedDogs } from '@/components/sections/FeaturedDogs';
// // import { StatsSection } from '@/components/sections/StatsSection';
// // import { Testimonials } from '@/components/sections/Testimonials';
// // import { CTABanner } from '@/components/sections/CTABanner';
// // import { orgInfo } from '@/constants/theme';

// // /**
// //  * HomePage Component
// //  * Main landing page with hero, featured dogs, and call-to-actions
// //  * + Awareness & Law section
// //  * + Aachi font (page-level)
// //  * + Subtle highlight animations
// //  */

// // function useRevealOnScroll<T extends HTMLElement>() {
// //   const ref = useRef<T | null>(null);
// //   const [visible, setVisible] = useState(false);

// //   useEffect(() => {
// //     const el = ref.current;
// //     if (!el) return;

// //     // Respect reduced motion
// //     const prefersReducedMotion =
// //       typeof window !== 'undefined' &&
// //       window.matchMedia &&
// //       window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// //     if (prefersReducedMotion) {
// //       setVisible(true);
// //       return;
// //     }

// //     const io = new IntersectionObserver(
// //       (entries) => {
// //         for (const entry of entries) {
// //           if (entry.isIntersecting) {
// //             setVisible(true);
// //             io.disconnect();
// //             break;
// //           }
// //         }
// //       },
// //       { threshold: 0.15 }
// //     );

// //     io.observe(el);
// //     return () => io.disconnect();
// //   }, []);

// //   return { ref, visible };
// // }

// // const HomePage: React.FC = () => {
// //   const { ref: awarenessRef, visible: awarenessVisible } = useRevealOnScroll<HTMLElement>();

// //   return (
// //     <>
// //       {/* Page-level font + animation styles (one-file requirement) */}
// //       <style jsx global>{`
// //         :root {
// //           --font-aachi: "Aachi", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
// //         }
// //         html, body {
// //           font-family: var(--font-aachi);
// //         }

// //         /* Reveal animation */
// //         @media (prefers-reduced-motion: no-preference) {
// //           .reveal {
// //             opacity: 0;
// //             transform: translateY(14px);
// //             transition: opacity 700ms ease, transform 700ms ease;
// //           }
// //           .reveal.is-visible {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }
// //       `}</style>

// //       {/* Hero Section */}
// //       <HeroBanner
// //         subtitle={orgInfo.tagline}
// //         title="Every Dog Deserves a Loving Home"
// //         description="Based in Rajasthan, India, we've been rescuing and rehoming street dogs since 2010. Find your perfect companion today and give a rescue dog the second chance they deserve."
// //         primaryCTA={{
// //           label: 'Find a Dog',
// //           path: '/rehoming',
// //         }}
// //         secondaryCTA={{
// //           label: 'Donate Today',
// //           path: '/donate',
// //         }}
// //         backgroundImage="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1920&h=800&fit=crop"
// //       />

// //       {/* Quick Action Cards */}
// //       <InfoCards />

// //       {/* Featured Dogs */}
// //       <FeaturedDogs />

// //       {/* Awareness & Law Section (NEW) */}
// //       <section
// //         ref={awarenessRef}
// //         className={[
// //           'relative overflow-hidden py-16 md:py-20',
// //           'reveal',
// //           awarenessVisible ? 'is-visible' : '',
// //         ].join(' ')}
// //       >
// //         {/* Soft background glow (no new colors; uses existing theme tokens with opacity) */}
// //         <div className="pointer-events-none absolute inset-0 opacity-60">
// //           <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl bg-primary/20" />
// //           <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl bg-accent/20" />
// //         </div>

// //         <div className="relative mx-auto max-w-6xl px-4 md:px-6">
// //           <div className="mb-10 flex items-end justify-between gap-6">
// //             <div>
// //               <p className="mb-2 inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm text-foreground/80">
// //                 Awareness • Law • Community
// //               </p>
// //               <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
// //                 Awareness &amp; Law
// //               </h2>
// //               <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/80">
// //                 Rescue ke saath-saath awareness aur basic legal clarity zaroori hai—taaki
// //                 street dogs ke saath long-term, humane coexistence possible ho.
// //               </p>
// //             </div>

// //             <a
// //               href="/awareness"
// //               className="hidden md:inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
// //             >
// //               Learn More
// //             </a>
// //           </div>

// //           <div className="grid gap-4 md:grid-cols-3">
// //             <div className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
// //               <h3 className="text-lg font-semibold">Know the Basics</h3>
// //               <p className="mt-2 text-sm leading-relaxed text-foreground/80">
// //                 Feeding etiquette, sterilization, vaccination schedules, and safe handling—
// //                 simple guides that reduce conflict.
// //               </p>
// //               <div className="mt-4 h-1 w-10 rounded-full bg-primary/60 transition-all duration-300 group-hover:w-16" />
// //             </div>

// //             <div className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
// //               <h3 className="text-lg font-semibold">What the Law Says</h3>
// //               <p className="mt-2 text-sm leading-relaxed text-foreground/80">
// //                 Cruelty reporting, harassment, and relocation myths—basic do’s & don’ts in
// //                 plain language.
// //               </p>
// //               <div className="mt-4 h-1 w-10 rounded-full bg-accent/60 transition-all duration-300 group-hover:w-16" />
// //             </div>

// //             <div className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
// //               <h3 className="text-lg font-semibold">Community Action</h3>
// //               <p className="mt-2 text-sm leading-relaxed text-foreground/80">
// //                 Society/RWA coordination, conflict resolution, and volunteering—how to
// //                 organize help without chaos.
// //               </p>
// //               <div className="mt-4 h-1 w-10 rounded-full bg-primary/60 transition-all duration-300 group-hover:w-16" />
// //             </div>
// //           </div>

// //           {/* Mobile CTA */}
// //           <div className="mt-8 md:hidden">
// //             <a
// //               href="/awareness"
// //               className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-transform duration-300 active:scale-[0.99]"
// //             >
// //               Explore Awareness &amp; Law
// //             </a>
// //             <p className="mt-2 text-center text-xs text-foreground/60">
// //               {orgInfo?.tagline ? orgInfo.tagline : 'Together, we can create safer streets for dogs.'}
// //             </p>
// //           </div>
// //         </div>





// //          <section className="py-24 bg-white">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="text-center mb-16">
// //             <div className="inline-flex items-center gap-2 bg-blue-50 text-[#002b5c] px-4 py-1 rounded-full font-bold text-xs uppercase tracking-wide mb-4">
// //               For RWAs & Societies
// //             </div>
// //             <h2 className="text-4xl md:text-5xl font-bold text-[#002b5c] mb-6">
// //               Is Your Society Facing Dog Issues?
// //             </h2>
// //             <p className="text-gray-600 text-lg max-w-3xl mx-auto">
// //               We understand that conflicts arise. Illegal relocation is not the answer. 
// //               Our team works with societies to implement <strong>scientific, legal, and humane solutions</strong>.
// //             </p>
// //           </div>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {/* Card 1: Aggression Control */}
// //             <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-[#ffd100] transition-all duration-300 hover:shadow-xl group">
// //               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#002b5c] shadow-sm mb-6 group-hover:bg-[#002b5c] group-hover:text-[#ffd100] transition-colors">
// //                 <Users size={32} />
// //               </div>
// //               <h3 className="text-2xl font-bold text-[#002b5c] mb-4">Conflict Mediation</h3>
// //               <p className="text-gray-600 mb-6">
// //                 Residents scared of barking? Our experts visit to assess dog behavior and counsel residents on body language and safety.
// //               </p>
// //               <ul className="space-y-2">
// //                 <li className="flex gap-2 text-sm text-[#002b5c] font-medium"><CheckCircle2 size={18} className="text-[#ffd100]" /> On-site behavioral assessment</li>
// //                 <li className="flex gap-2 text-sm text-[#002b5c] font-medium"><CheckCircle2 size={18} className="text-[#ffd100]" /> Safety workshops for kids</li>
// //               </ul>
// //             </div>

// //             {/* Card 2: Sterilization (ABC) */}
// //             <div className="bg-[#002b5c] rounded-3xl p-8 border border-[#002b5c] shadow-2xl transform md:-translate-y-4 relative overflow-hidden">
// //               <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffd100] rounded-full blur-[60px] opacity-20"></div>
              
// //               <div className="w-16 h-16 bg-[#ffd100] rounded-2xl flex items-center justify-center text-[#002b5c] shadow-sm mb-6">
// //                 <Stethoscope size={32} />
// //               </div>
// //               <h3 className="text-2xl font-bold text-white mb-4">Sterilization (ABC)</h3>
// //               <p className="text-blue-100 mb-6">
// //                 The only permanent solution to reduce population and aggression. We catch, neuter, vaccinate, and release dogs back to the same spot (as per law).
// //               </p>
// //               <ul className="space-y-2">
// //                 <li className="flex gap-2 text-sm text-white font-medium"><CheckCircle2 size={18} className="text-[#ffd100]" /> Stops population growth</li>
// //                 <li className="flex gap-2 text-sm text-white font-medium"><CheckCircle2 size={18} className="text-[#ffd100]" /> Reduces biting & fighting</li>
// //               </ul>
// //             </div>

// //             {/* Card 3: Vaccination */}
// //             <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-[#ffd100] transition-all duration-300 hover:shadow-xl group">
// //               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#002b5c] shadow-sm mb-6 group-hover:bg-[#002b5c] group-hover:text-[#ffd100] transition-colors">
// //                 <Syringe size={32} />
// //               </div>
// //               <h3 className="text-2xl font-bold text-[#002b5c] mb-4">Mass Vaccination</h3>
// //               <p className="text-gray-600 mb-6">
// //                 We conduct Anti-Rabies drives in your society to ensure the dogs are disease-free and safe to be around.
// //               </p>
// //               <ul className="space-y-2">
// //                 <li className="flex gap-2 text-sm text-[#002b5c] font-medium"><CheckCircle2 size={18} className="text-[#ffd100]" /> Annual Rabies shots</li>
// //                 <li className="flex gap-2 text-sm text-[#002b5c] font-medium"><CheckCircle2 size={18} className="text-[#ffd100]" /> 7-in-1 Viral protection</li>
// //               </ul>
// //             </div>
// //           </div>

// //           <div className="mt-12 text-center">
// //             <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ffd100] text-[#002b5c] font-bold rounded-xl hover:bg-[#ffe066] transition-all shadow-lg active:translate-y-1">
// //               Request a Society Visit <PhoneCall size={20} />
// //             </button>
// //             <p className="mt-4 text-sm text-gray-500">
// //               *Our services are free/subsidized, but donations for medicines are appreciated.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= SECTION: EMERGENCY WORKFLOW ================= */}
// //       <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
// //         {/* Background elements */}
// //         <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-96 bg-[#002b5c]/5 -skew-y-3 z-0"></div>

// //         <div className="max-w-7xl mx-auto px-6 relative z-10">
// //           <div className="flex flex-col md:flex-row gap-16 items-center">
            
// //             <div className="md:w-1/2">
// //               <h2 className="text-4xl font-bold text-[#002b5c] mb-6">
// //                 How Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002b5c] to-blue-600">Emergency Response</span> Works
// //               </h2>
// //               <p className="text-gray-600 text-lg mb-8">
// //                 Every minute counts when a life is at stake. Here is what happens when you call our helpline.
// //               </p>

// //               <div className="space-y-8">
// //                 {/* Step 1 */}
// //                 <div className="flex gap-4">
// //                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#002b5c] text-[#ffd100] flex items-center justify-center font-bold text-xl">1</div>
// //                   <div>
// //                     <h4 className="text-xl font-bold text-[#002b5c]">Report the Location</h4>
// //                     <p className="text-gray-600">Send us a photo/video and Google location on WhatsApp.</p>
// //                   </div>
// //                 </div>
// //                 {/* Step 2 */}
// //                 <div className="flex gap-4">
// //                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#002b5c] text-[#ffd100] flex items-center justify-center font-bold text-xl">2</div>
// //                   <div>
// //                     <h4 className="text-xl font-bold text-[#002b5c]">Triage & Dispatch</h4>
// //                     <p className="text-gray-600">Our vet assesses urgency. Ambulance is dispatched for critical cases.</p>
// //                   </div>
// //                 </div>
// //                 {/* Step 3 */}
// //                 <div className="flex gap-4">
// //                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#002b5c] text-[#ffd100] flex items-center justify-center font-bold text-xl">3</div>
// //                   <div>
// //                     <h4 className="text-xl font-bold text-[#002b5c]">Treatment & Recovery</h4>
// //                     <p className="text-gray-600">On-spot treatment for minor issues; shelter admission for surgeries.</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="md:w-1/2 relative">
// //               <div className="absolute inset-0 bg-[#ffd100] rounded-3xl transform rotate-3 translate-x-2 translate-y-2"></div>
// //               <img 
// //                 src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?w=800&q=80" 
// //                 alt="Vet treating dog" 
// //                 className="relative rounded-3xl shadow-2xl w-full object-cover h-[450px] border-4 border-white"
// //               />
// //               {/* Badge */}
// //               <div className="absolute bottom-8 -left-8 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow">
// //                 <HeartPulse className="text-red-500" size={32} />
// //                 <div>
// //                   <p className="text-xs text-gray-500 font-bold uppercase">Lives Saved</p>
// //                   <p className="text-2xl font-black text-[#002b5c]">15,000+</p>
// //                 </div>
// //               </div>
// //             </div>

// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= SECTION: AWARENESS & LAWS ================= */}
// //       <section className="py-20 bg-[#002b5c] text-white">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="grid md:grid-cols-2 gap-12 items-center">
// //             <div>
// //               <div className="inline-block bg-[#ffd100] text-[#002b5c] px-3 py-1 rounded text-xs font-bold mb-4">LEGAL AWARENESS</div>
// //               <h2 className="text-4xl font-bold mb-6">Know Your Rights & Responsibilities</h2>
// //               <p className="text-blue-100 mb-8 text-lg">
// //                 Many conflicts happen due to lack of knowledge about Indian Animal Laws. We educate societies to prevent cruelty.
// //               </p>
              
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                 <div className="bg-white/10 p-4 rounded-xl border border-white/10">
// //                   <Scale className="text-[#ffd100] mb-2" size={24} />
// //                   <h4 className="font-bold mb-1">Relocation is Illegal</h4>
// //                   <p className="text-xs text-blue-200">Supreme Court orders ban displacing stray dogs.</p>
// //                 </div>
// //                 <div className="bg-white/10 p-4 rounded-xl border border-white/10">
// //                   <AlertTriangle className="text-[#ffd100] mb-2" size={24} />
// //                   <h4 className="font-bold mb-1">Cruelty is a Crime</h4>
// //                   <p className="text-xs text-blue-200">PCA Act 1960 protects animals from abuse.</p>
// //                 </div>
// //               </div>
// //             </div>
            
// //             <div className="bg-white text-[#002b5c] p-8 rounded-3xl shadow-2xl">
// //               <h3 className="text-2xl font-bold mb-6">Responsible Community Living</h3>
// //               <ul className="space-y-4">
// //                 <li className="flex items-start gap-3">
// //                   <span className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">✓</span>
// //                   <span className="text-gray-700">Designate specific feeding spots away from high footfall.</span>
// //                 </li>
// //                 <li className="flex items-start gap-3">
// //                   <span className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">✓</span>
// //                   <span className="text-gray-700">Ensure all community dogs are sterilized (ABC).</span>
// //                 </li>
// //                 <li className="flex items-start gap-3">
// //                   <span className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">✓</span>
// //                   <span className="text-gray-700">Participate in annual vaccination drives.</span>
// //                 </li>
// //               </ul>
// //               <button className="w-full mt-8 border-2 border-[#002b5c] text-[#002b5c] font-bold py-3 rounded-xl hover:bg-[#002b5c] hover:text-white transition-colors">
// //                 Download Awareness Poster
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= FINAL CTA: DONATE/VOLUNTEER ================= */}
// //       <section className="py-24 bg-gray-50 text-center">
// //         <div className="max-w-4xl mx-auto px-6">
// //           <h2 className="text-4xl font-bold text-[#002b5c] mb-6">We Run on Compassion & Support</h2>
// //           <p className="text-gray-600 text-lg mb-10">
// //             We do not sell dogs. We do not charge for rescues. Your donation buys bandages, vaccines, and food for the voiceless.
// //           </p>
// //           <div className="flex flex-col sm:flex-row justify-center gap-4">
// //             <button className="bg-[#002b5c] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#001b3d] shadow-xl hover:shadow-2xl transition-all">
// //               Donate Now
// //             </button>
// //             <button className="bg-[#ffd100] text-[#002b5c] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#ffe066] shadow-md hover:shadow-xl transition-all">
// //               Join as Volunteer
// //             </button>
// //           </div>
// //         </div>
// //       </section>
// //       </section>

// //       {/* Statistics */}
// //       <StatsSection />

// //       {/* Success Stories */}
// //       <Testimonials />

// //       {/* CTA Banner */}
// //       <CTABanner />
// //     </>
// //   );
// // };

// // export default HomePage;






// // import React from 'react';
// // import { 
// //   Users, 
// //   Stethoscope, 
// //   Syringe, 
// //   CheckCircle2, 
// //   PhoneCall, 
// //   HeartPulse, 
// //   Scale, 
// //   AlertTriangle 
// // } from 'lucide-react';

// // import { HeroBanner } from '@/components/sections/HeroBanner';
// // import { InfoCards } from '@/components/sections/InfoCards';
// // import { FeaturedDogs } from '@/components/sections/FeaturedDogs';
// // import { StatsSection } from '@/components/sections/StatsSection';
// // import { Testimonials } from '@/components/sections/Testimonials';
// // import { CTABanner } from '@/components/sections/CTABanner';
// // import { orgInfo } from '@/constants/theme';

// // /**
// //  * HomePage Component
// //  * Main landing page with hero, featured dogs, awareness sections, and CTAs
// //  */

// // function useRevealOnScroll<T extends HTMLElement>() {
// //   const ref = React.useRef<T | null>(null);
// //   const [visible, setVisible] = React.useState(false);

// //   React.useEffect(() => {
// //     const el = ref.current;
// //     if (!el) return;

// //     const prefersReducedMotion = 
// //       typeof window !== 'undefined' &&
// //       window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// //     if (prefersReducedMotion) {
// //       setVisible(true);
// //       return;
// //     }

// //     const io = new IntersectionObserver(
// //       (entries) => {
// //         for (const entry of entries) {
// //           if (entry.isIntersecting) {
// //             setVisible(true);
// //             io.disconnect();
// //             break;
// //           }
// //         }
// //       },
// //       { threshold: 0.15 }
// //     );

// //     io.observe(el);
// //     return () => io.disconnect();
// //   }, []);

// //   return { ref, visible };
// // }

// // const HomePage: React.FC = () => {
// //   const { ref: awarenessRef, visible: awarenessVisible } = useRevealOnScroll<HTMLElement>();

// //   return (
// //     <>
// //       {/* Page-level font + animation styles */}
// //       <style jsx global>{`
// //         :root {
// //           --font-aachi: "Aachi", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
// //         }
// //         html, body {
// //           font-family: var(--font-aachi);
// //         }

// //         @media (prefers-reduced-motion: no-preference) {
// //           .reveal {
// //             opacity: 0;
// //             transform: translateY(14px);
// //             transition: opacity 700ms ease, transform 700ms ease;
// //           }
// //           .reveal.is-visible {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }
// //       `}</style>

// //       {/* Hero Section */}
// //       <HeroBanner
// //         subtitle={orgInfo.tagline}
// //         title="Every Dog Deserves a Loving Home"
// //         description="Based in Rajasthan, India, we've been rescuing and rehoming street dogs since 2010. Find your perfect companion today."
// //         primaryCTA={{ label: 'Find a Dog', path: '/rehoming' }}
// //         secondaryCTA={{ label: 'Donate Today', path: '/donate' }}
// //         backgroundImage="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1920&h=800&fit=crop"
// //       />

// //       {/* Quick Action Cards */}
// //       <InfoCards />

// //       {/* Featured Dogs */}
// //       <FeaturedDogs />

// //       {/* Awareness & Law Section */}
// //       <section
// //         ref={awarenessRef}
// //         className={`reveal py-16 md:py-20 relative overflow-hidden ${awarenessVisible ? 'is-visible' : ''}`}
// //       >
// //         <div className="pointer-events-none absolute inset-0 opacity-60">
// //           <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl bg-primary/20" />
// //           <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl bg-accent/20" />
// //         </div>

// //         <div className="relative mx-auto max-w-6xl px-4 md:px-6">
// //           <div className="mb-10 flex items-end justify-between gap-6">
// //             <div>
// //               <p className="mb-2 inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm text-foreground/80">
// //                 Awareness • Law • Community
// //               </p>
// //               <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
// //                 Awareness &amp; Law
// //               </h2>
// //               <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/80">
// //                 Rescue ke saath-saath awareness aur basic legal clarity zaroori hai—taaki
// //                 street dogs ke saath long-term, humane coexistence possible ho.
// //               </p>
// //             </div>

// //             <a
// //               href="/awareness"
// //               className="hidden md:inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
// //             >
// //               Learn More
// //             </a>
// //           </div>

// //           <div className="grid gap-4 md:grid-cols-3">
// //             {[
// //               {
// //                 title: "Know the Basics",
// //                 desc: "Feeding etiquette, sterilization, vaccination schedules, and safe handling—simple guides that reduce conflict."
// //               },
// //               {
// //                 title: "What the Law Says",
// //                 desc: "Cruelty reporting, harassment, and relocation myths—basic do’s & don’ts in plain language."
// //               },
// //               {
// //                 title: "Community Action",
// //                 desc: "Society/RWA coordination, conflict resolution, and volunteering—how to organize help without chaos."
// //               }
// //             ].map((item, i) => (
// //               <div key={i} className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
// //                 <h3 className="text-lg font-semibold">{item.title}</h3>
// //                 <p className="mt-2 text-sm leading-relaxed text-foreground/80">
// //                   {item.desc}
// //                 </p>
// //                 <div className="mt-4 h-1 w-10 rounded-full bg-primary/60 transition-all group-hover:w-16" />
// //               </div>
// //             ))}
// //           </div>

// //           {/* Mobile CTA */}
// //           <div className="mt-8 md:hidden">
// //             <a
// //               href="/awareness"
// //               className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm active:scale-[0.99]"
// //             >
// //               Explore Awareness &amp; Law
// //             </a>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= FOR RWAs & SOCIETIES ================= */}
// //       <section className="py-24 bg-white">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="text-center mb-16">
// //             <div className="inline-flex items-center gap-2 bg-blue-50 text-[#002b5c] px-4 py-1 rounded-full font-bold text-xs uppercase tracking-wide mb-4">
// //               For RWAs & Societies
// //             </div>
// //             <h2 className="text-4xl md:text-5xl font-bold text-[#002b5c] mb-6">
// //               Is Your Society Facing Dog Issues?
// //             </h2>
// //             <p className="text-gray-600 text-lg max-w-3xl mx-auto">
// //               We understand that conflicts arise. Illegal relocation is not the answer. 
// //               Our team works with societies to implement <strong>scientific, legal, and humane solutions</strong>.
// //             </p>
// //           </div>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {/* Card 1 */}
// //             <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-[#ffd100] transition-all hover:shadow-xl group">
// //               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#002b5c] shadow-sm mb-6 group-hover:bg-[#002b5c] group-hover:text-[#ffd100]">
// //                 <Users size={32} />
// //               </div>
// //               <h3 className="text-2xl font-bold text-[#002b5c] mb-4">Conflict Mediation</h3>
// //               <p className="text-gray-600 mb-6">
// //                 Residents scared of barking? Our experts visit to assess dog behavior and counsel residents on body language and safety.
// //               </p>
// //               <ul className="space-y-2">
// //                 <li className="flex gap-2 text-sm text-[#002b5c] font-medium"><CheckCircle2 size={18} className="text-[#ffd100]" /> On-site behavioral assessment</li>
// //                 <li className="flex gap-2 text-sm text-[#002b5c] font-medium"><CheckCircle2 size={18} className="text-[#ffd100]" /> Safety workshops for kids</li>
// //               </ul>
// //             </div>

// //             {/* Card 2 - Highlighted */}
// //             <div className="bg-[#002b5c] rounded-3xl p-8 border border-[#002b5c] shadow-2xl transform md:-translate-y-4 relative overflow-hidden">
// //               <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffd100] rounded-full blur-[60px] opacity-20" />
// //               <div className="w-16 h-16 bg-[#ffd100] rounded-2xl flex items-center justify-center text-[#002b5c] shadow-sm mb-6">
// //                 <Stethoscope size={32} />
// //               </div>
// //               <h3 className="text-2xl font-bold text-white mb-4">Sterilization (ABC)</h3>
// //               <p className="text-blue-100 mb-6">
// //                 The only permanent solution to reduce population and aggression. We catch, neuter, vaccinate, and release dogs back to the same spot.
// //               </p>
// //               <ul className="space-y-2">
// //                 <li className="flex gap-2 text-sm text-white font-medium"><CheckCircle2 size={18} className="text-[#ffd100]" /> Stops population growth</li>
// //                 <li className="flex gap-2 text-sm text-white font-medium"><CheckCircle2 size={18} className="text-[#ffd100]" /> Reduces biting & fighting</li>
// //               </ul>
// //             </div>

// //             {/* Card 3 */}
// //             <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-[#ffd100] transition-all hover:shadow-xl group">
// //               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#002b5c] shadow-sm mb-6 group-hover:bg-[#002b5c] group-hover:text-[#ffd100]">
// //                 <Syringe size={32} />
// //               </div>
// //               <h3 className="text-2xl font-bold text-[#002b5c] mb-4">Mass Vaccination</h3>
// //               <p className="text-gray-600 mb-6">
// //                 We conduct Anti-Rabies drives in your society to ensure the dogs are disease-free and safe.
// //               </p>
// //               <ul className="space-y-2">
// //                 <li className="flex gap-2 text-sm text-[#002b5c] font-medium"><CheckCircle2 size={18} className="text-[#ffd100]" /> Annual Rabies shots</li>
// //                 <li className="flex gap-2 text-sm text-[#002b5c] font-medium"><CheckCircle2 size={18} className="text-[#ffd100]" /> 7-in-1 Viral protection</li>
// //               </ul>
// //             </div>
// //           </div>

// //           <div className="mt-12 text-center">
// //             <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ffd100] text-[#002b5c] font-bold rounded-xl hover:bg-[#ffe066] transition-all shadow-lg active:translate-y-1">
// //               Request a Society Visit <PhoneCall size={20} />
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= EMERGENCY WORKFLOW ================= */}
// //       <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
// //         <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-96 bg-[#002b5c]/5 -skew-y-3 z-0" />
        
// //         <div className="max-w-7xl mx-auto px-6 relative z-10">
// //           <div className="flex flex-col md:flex-row gap-16 items-center">
// //             <div className="md:w-1/2">
// //               <h2 className="text-4xl font-bold text-[#002b5c] mb-6">
// //                 How Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002b5c] to-blue-600">Emergency Response</span> Works
// //               </h2>
// //               <p className="text-gray-600 text-lg mb-8">
// //                 Every minute counts when a life is at stake. Here’s what happens when you call our helpline.
// //               </p>

// //               <div className="space-y-8">
// //                 {[
// //                   { num: "1", title: "Report the Location", desc: "Send us a photo/video and Google location on WhatsApp." },
// //                   { num: "2", title: "Triage & Dispatch", desc: "Our vet assesses urgency. Ambulance is dispatched for critical cases." },
// //                   { num: "3", title: "Treatment & Recovery", desc: "On-spot treatment for minor issues; shelter admission for surgeries." }
// //                 ].map((step) => (
// //                   <div key={step.num} className="flex gap-4">
// //                     <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#002b5c] text-[#ffd100] flex items-center justify-center font-bold text-xl">
// //                       {step.num}
// //                     </div>
// //                     <div>
// //                       <h4 className="text-xl font-bold text-[#002b5c]">{step.title}</h4>
// //                       <p className="text-gray-600">{step.desc}</p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             <div className="md:w-1/2 relative">
// //               <div className="absolute inset-0 bg-[#ffd100] rounded-3xl transform rotate-3 translate-x-2 translate-y-2" />
// //               <img 
// //                 src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?w=800&q=80" 
// //                 alt="Vet treating dog" 
// //                 className="relative rounded-3xl shadow-2xl w-full object-cover h-[450px] border-4 border-white"
// //               />
// //               <div className="absolute bottom-8 -left-8 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3">
// //                 <HeartPulse className="text-red-500" size={32} />
// //                 <div>
// //                   <p className="text-xs text-gray-500 font-bold uppercase">Lives Saved</p>
// //                   <p className="text-2xl font-black text-[#002b5c]">15,000+</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= LEGAL AWARENESS ================= */}
// //       <section className="py-20 bg-[#002b5c] text-white">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="grid md:grid-cols-2 gap-12 items-center">
// //             <div>
// //               <div className="inline-block bg-[#ffd100] text-[#002b5c] px-3 py-1 rounded text-xs font-bold mb-4">LEGAL AWARENESS</div>
// //               <h2 className="text-4xl font-bold mb-6">Know Your Rights & Responsibilities</h2>
// //               <p className="text-blue-100 mb-8 text-lg">
// //                 Many conflicts happen due to lack of knowledge about Indian Animal Laws. We educate societies to prevent cruelty.
// //               </p>
              
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                 <div className="bg-white/10 p-4 rounded-xl border border-white/10">
// //                   <Scale className="text-[#ffd100] mb-2" size={24} />
// //                   <h4 className="font-bold mb-1">Relocation is Illegal</h4>
// //                   <p className="text-xs text-blue-200">Supreme Court orders ban displacing stray dogs.</p>
// //                 </div>
// //                 <div className="bg-white/10 p-4 rounded-xl border border-white/10">
// //                   <AlertTriangle className="text-[#ffd100] mb-2" size={24} />
// //                   <h4 className="font-bold mb-1">Cruelty is a Crime</h4>
// //                   <p className="text-xs text-blue-200">PCA Act 1960 protects animals from abuse.</p>
// //                 </div>
// //               </div>
// //             </div>
            
// //             <div className="bg-white text-[#002b5c] p-8 rounded-3xl shadow-2xl">
// //               <h3 className="text-2xl font-bold mb-6">Responsible Community Living</h3>
// //               <ul className="space-y-4">
// //                 <li className="flex items-start gap-3">
// //                   <span className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">✓</span>
// //                   <span className="text-gray-700">Designate specific feeding spots away from high footfall.</span>
// //                 </li>
// //                 <li className="flex items-start gap-3">
// //                   <span className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">✓</span>
// //                   <span className="text-gray-700">Ensure all community dogs are sterilized (ABC).</span>
// //                 </li>
// //                 <li className="flex items-start gap-3">
// //                   <span className="mt-1 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">✓</span>
// //                   <span className="text-gray-700">Participate in annual vaccination drives.</span>
// //                 </li>
// //               </ul>
// //               <button className="w-full mt-8 border-2 border-[#002b5c] text-[#002b5c] font-bold py-3 rounded-xl hover:bg-[#002b5c] hover:text-white transition-colors">
// //                 Download Awareness Poster
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= FINAL CTA ================= */}
// //       <section className="py-24 bg-gray-50 text-center">
// //         <div className="max-w-4xl mx-auto px-6">
// //           <h2 className="text-4xl font-bold text-[#002b5c] mb-6">We Run on Compassion & Support</h2>
// //           <p className="text-gray-600 text-lg mb-10">
// //             We do not sell dogs. We do not charge for rescues. Your donation buys bandages, vaccines, and food for the voiceless.
// //           </p>
// //           <div className="flex flex-col sm:flex-row justify-center gap-4">
// //             <button className="bg-[#002b5c] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#001b3d] shadow-xl transition-all">
// //               Donate Now
// //             </button>
// //             <button className="bg-[#ffd100] text-[#002b5c] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#ffe066] shadow-md transition-all">
// //               Join as Volunteer
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Statistics */}
// //       <StatsSection />

// //       {/* Success Stories */}
// //       <Testimonials />

// //       {/* Final CTA Banner */}
// //       <CTABanner />
// //     </>
// //   );
// // };

// // export default HomePage;






// // 





// // import React, { useEffect, useRef, useState, useCallback } from 'react';
// // import {
// //   Users,
// //   Stethoscope,
// //   Syringe,
// //   CheckCircle2,
// //   PhoneCall,
// //   HeartPulse,
// //   Scale,
// //   AlertTriangle,
// //   ArrowRight,
// //   Heart,
// //   ShieldCheck,
// //   Star,
// //   Quote,
// //   ChevronLeft,
// //   ChevronRight,
// //   X,
// //   ZoomIn,
// //   Images,
// //   ExternalLink,
// // } from 'lucide-react';

// // import { FeaturedDogs } from '@/components/sections/FeaturedDogs';
// // import { StatsSection } from '@/components/sections/StatsSection';
// // import { CTABanner }    from '@/components/sections/CTABanner';
// // import { orgInfo }      from '@/constants/theme';

// // // ─────────────────────────────────────────────────────────────────────────────
// // // TYPES
// // // ─────────────────────────────────────────────────────────────────────────────

// // interface Testimonial {
// //   id: number;
// //   name: string;
// //   role: string;
// //   location: string;
// //   avatar: string;
// //   rating: number;
// //   text: string;
// //   dogName?: string;
// //   dogImage?: string;
// //   tag: 'Adopter' | 'Volunteer' | 'Donor' | 'Rescuer';
// // }

// // interface GalleryImage {
// //   id: number;
// //   src: string;
// //   thumb: string;
// //   caption: string;
// //   category: string;
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // GALLERY DATA  — 4 preview cards + extra images shown inside lightbox
// // // ─────────────────────────────────────────────────────────────────────────────

// // const galleryImages: GalleryImage[] = [
// //   {
// //     id: 1,
// //     src:   'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=85',
// //     thumb: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=420&fit=crop',
// //     caption: 'Street dogs playing together in Jaipur',
// //     category: 'Rescue',
// //   },
// //   {
// //     id: 2,
// //     src:   'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=85',
// //     thumb: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=420&fit=crop',
// //     caption: 'Bruno — adopted after 3 months in shelter',
// //     category: 'Adoption',
// //   },
// //   {
// //     id: 3,
// //     src:   'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=1200&q=85',
// //     thumb: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=600&h=420&fit=crop',
// //     caption: 'Moti recovering after emergency surgery',
// //     category: 'Medical',
// //   },
// //   {
// //     id: 4,
// //     src:   'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=1200&q=85',
// //     thumb: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600&h=420&fit=crop',
// //     caption: 'Coco in her forever home — Ajmer',
// //     category: 'Adoption',
// //   },
// //   {
// //     id: 5,
// //     src:   'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1200&q=85',
// //     thumb: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=600&h=420&fit=crop',
// //     caption: 'Community feeding drive — Jodhpur',
// //     category: 'Community',
// //   },
// //   {
// //     id: 6,
// //     src:   'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1200&q=85',
// //     thumb: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=420&fit=crop',
// //     caption: 'Vaccination drive at Udaipur society',
// //     category: 'Medical',
// //   },
// //   {
// //     id: 7,
// //     src:   'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&q=85',
// //     thumb: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=420&fit=crop',
// //     caption: 'Rescue team on field — Bikaner',
// //     category: 'Rescue',
// //   },
// //   {
// //     id: 8,
// //     src:   'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=1200&q=85',
// //     thumb: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&h=420&fit=crop',
// //     caption: 'Happy tails — adoption success stories',
// //     category: 'Adoption',
// //   },
// // ];

// // // ─────────────────────────────────────────────────────────────────────────────
// // // TESTIMONIAL DATA
// // // ─────────────────────────────────────────────────────────────────────────────

// // const testimonials: Testimonial[] = [
// //   {
// //     id: 1,
// //     name: 'Priya Sharma',
// //     role: 'Dog Adopter',
// //     location: 'Jaipur, Rajasthan',
// //     avatar: 'https://i.pravatar.cc/150?img=47',
// //     rating: 5,
// //     text: 'Adopting Bruno was the best decision of my life. The team guided me through every step — health check to home adjustment. He was vaccinated, sterilized, and full of love!',
// //     dogName: 'Bruno',
// //     dogImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop',
// //     tag: 'Adopter',
// //   },
// //   {
// //     id: 2,
// //     name: 'Rahul Meena',
// //     role: 'Weekend Volunteer',
// //     location: 'Jodhpur, Rajasthan',
// //     avatar: 'https://i.pravatar.cc/150?img=12',
// //     rating: 5,
// //     text: 'I have been volunteering for 2 years. The community here is incredible. Every feeding drive, every rescue — I leave feeling like I actually made a difference.',
// //     tag: 'Volunteer',
// //   },
// //   {
// //     id: 3,
// //     name: 'Sunita & Vikram Patel',
// //     role: 'Monthly Donors',
// //     location: 'Udaipur, Rajasthan',
// //     avatar: 'https://i.pravatar.cc/150?img=33',
// //     rating: 5,
// //     text: 'We donate every month and the team sends photo updates. The transparency of this organization is unmatched. Our money truly goes to the dogs.',
// //     tag: 'Donor',
// //   },
// //   {
// //     id: 4,
// //     name: 'Amit Joshi',
// //     role: 'Emergency Rescuer',
// //     location: 'Kota, Rajasthan',
// //     avatar: 'https://i.pravatar.cc/150?img=59',
// //     rating: 5,
// //     text: 'I reported an injured dog at 11 PM. Within 45 minutes a volunteer arrived. The dog had surgery next morning and is now recovering. Incredible response time!',
// //     dogName: 'Moti',
// //     dogImage: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=200&h=200&fit=crop',
// //     tag: 'Rescuer',
// //   },
// //   {
// //     id: 5,
// //     name: 'Kavya Rathore',
// //     role: 'Foster Parent',
// //     location: 'Ajmer, Rajasthan',
// //     avatar: 'https://i.pravatar.cc/150?img=25',
// //     rating: 5,
// //     text: 'Fostering Coco for three weeks was emotional — but the support was constant. Medicines, food, vet consultations all arranged. She found her forever home!',
// //     dogName: 'Coco',
// //     dogImage: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=200&h=200&fit=crop',
// //     tag: 'Adopter',
// //   },
// //   {
// //     id: 6,
// //     name: 'Deepak Singh',
// //     role: 'RWA Secretary',
// //     location: 'Bikaner, Rajasthan',
// //     avatar: 'https://i.pravatar.cc/150?img=68',
// //     rating: 4,
// //     text: 'Our society had constant complaints about stray dogs. After the ABC drive and resident workshop, conflicts reduced by 80%. The only humane solution that actually works.',
// //     tag: 'Volunteer',
// //   },
// // ];

// // // ─────────────────────────────────────────────────────────────────────────────
// // // HELPERS
// // // ─────────────────────────────────────────────────────────────────────────────

// // const tagStyles: Record<Testimonial['tag'], string> = {
// //   Adopter:   'bg-emerald-100 text-emerald-700',
// //   Volunteer: 'bg-blue-100   text-blue-700',
// //   Donor:     'bg-purple-100 text-purple-700',
// //   Rescuer:   'bg-rose-100   text-rose-700',
// // };

// // const categoryColor: Record<string, string> = {
// //   Rescue:    'bg-rose-500',
// //   Adoption:  'bg-emerald-500',
// //   Medical:   'bg-blue-500',
// //   Community: 'bg-amber-500',
// // };

// // // ─────────────────────────────────────────────────────────────────────────────
// // // SUB-COMPONENTS
// // // ─────────────────────────────────────────────────────────────────────────────

// // const StarRating: React.FC<{ count: number }> = ({ count }) => (
// //   <div className="flex gap-0.5">
// //     {Array.from({ length: 5 }).map((_, i) => (
// //       <Star
// //         key={i}
// //         size={14}
// //         className={i < count ? 'text-[#ffd100] fill-[#ffd100]' : 'text-gray-300'}
// //       />
// //     ))}
// //   </div>
// // );

// // const TestimonialCard: React.FC<{ t: Testimonial; featured?: boolean }> = ({
// //   t,
// //   featured = false,
// // }) => (
// //   <div
// //     className={[
// //       'group relative flex flex-col rounded-3xl p-7 transition-all duration-500',
// //       'hover:-translate-y-2 hover:shadow-2xl',
// //       featured
// //         ? 'bg-[#002b5c] text-white shadow-2xl md:-translate-y-4'
// //         : 'bg-white border border-slate-100 shadow-md hover:border-[#ffd100]/50',
// //     ].join(' ')}
// //   >
// //     <Quote
// //       size={48}
// //       className={[
// //         'absolute top-5 right-6 opacity-10',
// //         featured ? 'text-[#ffd100]' : 'text-[#002b5c]',
// //       ].join(' ')}
// //     />
// //     <span
// //       className={[
// //         'mb-4 self-start rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-wide',
// //         featured ? 'bg-[#ffd100] text-[#002b5c]' : tagStyles[t.tag],
// //       ].join(' ')}
// //     >
// //       {t.tag}
// //     </span>
// //     <StarRating count={t.rating} />
// //     <p
// //       className={[
// //         'mt-4 mb-6 text-sm leading-relaxed flex-1',
// //         featured ? 'text-blue-100' : 'text-gray-600',
// //       ].join(' ')}
// //     >
// //       "{t.text}"
// //     </p>
// //     {t.dogName && t.dogImage && (
// //       <div
// //         className={[
// //           'mb-5 flex items-center gap-3 rounded-2xl px-4 py-3 w-fit',
// //           featured ? 'bg-white/10' : 'bg-slate-50 border border-slate-100',
// //         ].join(' ')}
// //       >
// //         <img
// //           src={t.dogImage}
// //           alt={t.dogName}
// //           className="w-10 h-10 rounded-full object-cover ring-2 ring-[#ffd100]"
// //         />
// //         <div>
// //           <p className={['text-xs font-bold', featured ? 'text-[#ffd100]' : 'text-[#002b5c]'].join(' ')}>
// //             {t.dogName}
// //           </p>
// //           <p className={['text-[10px]', featured ? 'text-blue-200' : 'text-gray-400'].join(' ')}>
// //             Rescued & Rehomed ✓
// //           </p>
// //         </div>
// //       </div>
// //     )}
// //     <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
// //       <img
// //         src={t.avatar}
// //         alt={t.name}
// //         className="w-11 h-11 rounded-full object-cover ring-2 ring-[#ffd100]"
// //       />
// //       <div>
// //         <p className={['font-bold text-sm', featured ? 'text-white' : 'text-[#002b5c]'].join(' ')}>
// //           {t.name}
// //         </p>
// //         <p className={['text-xs', featured ? 'text-blue-200' : 'text-gray-400'].join(' ')}>
// //           {t.role} · {t.location}
// //         </p>
// //       </div>
// //     </div>
// //   </div>
// // );

// // // ─────────────────────────────────────────────────────────────────────────────
// // // LIGHTBOX COMPONENT
// // // ─────────────────────────────────────────────────────────────────────────────

// // interface LightboxProps {
// //   images: GalleryImage[];
// //   startIndex: number;
// //   onClose: () => void;
// // }

// // const Lightbox: React.FC<LightboxProps> = ({ images, startIndex, onClose }) => {
// //   const [current, setCurrent] = useState(startIndex);
// //   const [loaded,  setLoaded]  = useState(false);

// //   const prev = useCallback(() => {
// //     setLoaded(false);
// //     setCurrent((i) => (i - 1 + images.length) % images.length);
// //   }, [images.length]);

// //   const next = useCallback(() => {
// //     setLoaded(false);
// //     setCurrent((i) => (i + 1) % images.length);
// //   }, [images.length]);

// //   /* keyboard navigation */
// //   useEffect(() => {
// //     const handler = (e: KeyboardEvent) => {
// //       if (e.key === 'ArrowLeft')  prev();
// //       if (e.key === 'ArrowRight') next();
// //       if (e.key === 'Escape')     onClose();
// //     };
// //     window.addEventListener('keydown', handler);
// //     return () => window.removeEventListener('keydown', handler);
// //   }, [prev, next, onClose]);

// //   /* lock body scroll */
// //   useEffect(() => {
// //     document.body.style.overflow = 'hidden';
// //     return () => { document.body.style.overflow = ''; };
// //   }, []);

// //   const img = images[current];

// //   return (
// //     <div
// //       className="fixed inset-0 z-[9999] flex flex-col bg-black/95 backdrop-blur-md"
// //       role="dialog"
// //       aria-modal="true"
// //       aria-label="Image Gallery"
// //     >
// //       {/* ── Top Bar ── */}
// //       <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 flex-shrink-0">
// //         <div className="flex items-center gap-3">
// //           <Images size={20} className="text-[#ffd100]" />
// //           <span className="text-white font-bold tracking-wide">Our Gallery</span>
// //           <span className="text-gray-400 text-sm">
// //             {current + 1} / {images.length}
// //           </span>
// //         </div>

// //         {/* Thumbnail strip */}
// //         <div className="hidden md:flex items-center gap-2 overflow-x-auto max-w-xl">
// //           {images.map((img, i) => (
// //             <button
// //               key={img.id}
// //               onClick={() => { setLoaded(false); setCurrent(i); }}
// //               className={[
// //                 'flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all',
// //                 i === current
// //                   ? 'border-[#ffd100] scale-110 shadow-lg shadow-[#ffd100]/30'
// //                   : 'border-white/10 opacity-50 hover:opacity-100 hover:border-white/40',
// //               ].join(' ')}
// //             >
// //               <img
// //                 src={img.thumb}
// //                 alt={img.caption}
// //                 className="w-full h-full object-cover"
// //               />
// //             </button>
// //           ))}
// //         </div>

// //         <div className="flex items-center gap-3">
// //           <a
// //             href="/gallery"
// //             className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full
// //               border border-white/20 text-white text-sm font-medium
// //               hover:bg-white/10 transition-colors"
// //           >
// //             Full Gallery <ExternalLink size={14} />
// //           </a>
// //           <button
// //             onClick={onClose}
// //             className="w-10 h-10 rounded-full border border-white/20 text-white
// //               flex items-center justify-center hover:bg-white/15 hover:border-white/40
// //               transition-all"
// //             aria-label="Close gallery"
// //           >
// //             <X size={20} />
// //           </button>
// //         </div>
// //       </div>

// //       {/* ── Main Image Area ── */}
// //       <div className="relative flex-1 flex items-center justify-center overflow-hidden px-4 py-4">

// //         {/* Prev Button */}
// //         <button
// //           onClick={prev}
// //           className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10
// //             border border-white/20 text-white flex items-center justify-center
// //             hover:bg-[#002b5c] hover:border-[#ffd100] transition-all
// //             hover:scale-110 backdrop-blur-sm"
// //           aria-label="Previous image"
// //         >
// //           <ChevronLeft size={24} />
// //         </button>

// //         {/* Image */}
// //         <div className="relative max-w-5xl max-h-full w-full flex items-center justify-center">
// //           {/* Blur placeholder */}
// //           {!loaded && (
// //             <div className="absolute inset-0 flex items-center justify-center">
// //               <div className="w-16 h-16 border-4 border-[#ffd100]/30 border-t-[#ffd100]
// //                 rounded-full animate-spin" />
// //             </div>
// //           )}
// //           <img
// //             key={img.id}
// //             src={img.src}
// //             alt={img.caption}
// //             onLoad={() => setLoaded(true)}
// //             className={[
// //               'max-h-[70vh] max-w-full object-contain rounded-2xl shadow-2xl',
// //               'transition-opacity duration-500',
// //               loaded ? 'opacity-100' : 'opacity-0',
// //             ].join(' ')}
// //           />
// //         </div>

// //         {/* Next Button */}
// //         <button
// //           onClick={next}
// //           className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10
// //             border border-white/20 text-white flex items-center justify-center
// //             hover:bg-[#002b5c] hover:border-[#ffd100] transition-all
// //             hover:scale-110 backdrop-blur-sm"
// //           aria-label="Next image"
// //         >
// //           <ChevronRight size={24} />
// //         </button>
// //       </div>

// //       {/* ── Caption & Dots ── */}
// //       <div className="flex-shrink-0 px-6 py-4 border-t border-white/10">
// //         <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

// //           {/* Caption */}
// //           <div className="flex items-center gap-3">
// //             <span
// //               className={[
// //                 'w-2 h-2 rounded-full flex-shrink-0',
// //                 categoryColor[img.category] ?? 'bg-gray-400',
// //               ].join(' ')}
// //             />
// //             <p className="text-white text-sm font-medium">{img.caption}</p>
// //             <span className={[
// //               'px-2 py-0.5 rounded-full text-white text-[10px] font-bold uppercase',
// //               categoryColor[img.category] ?? 'bg-gray-600',
// //             ].join(' ')}>
// //               {img.category}
// //             </span>
// //           </div>

// //           {/* Dot indicators (mobile) */}
// //           <div className="flex gap-1.5 md:hidden">
// //             {images.map((_, i) => (
// //               <button
// //                 key={i}
// //                 onClick={() => { setLoaded(false); setCurrent(i); }}
// //                 className={[
// //                   'h-1.5 rounded-full transition-all duration-300',
// //                   i === current ? 'w-6 bg-[#ffd100]' : 'w-1.5 bg-white/30',
// //                 ].join(' ')}
// //                 aria-label={`Image ${i + 1}`}
// //               />
// //             ))}
// //           </div>

// //           {/* Keyboard hint */}
// //           <p className="hidden sm:block text-gray-500 text-xs">
// //             ← → to navigate · Esc to close
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // ─────────────────────────────────────────────────────────────────────────────
// // // SCROLL HOOK
// // // ─────────────────────────────────────────────────────────────────────────────

// // function useRevealOnScroll<T extends HTMLElement>(threshold = 0.1) {
// //   const ref  = useRef<T | null>(null);
// //   const [visible, setVisible] = useState(false);

// //   useEffect(() => {
// //     const el = ref.current;
// //     if (!el) return;
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
// //       },
// //       { threshold }
// //     );
// //     observer.observe(el);
// //     return () => observer.disconnect();
// //   }, [threshold]);

// //   return { ref, visible };
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // PAGE COMPONENT
// // // ─────────────────────────────────────────────────────────────────────────────

// // const HomePage: React.FC = () => {
// //   const { ref: rwaRef,       visible: rwaVisible       } = useRevealOnScroll<HTMLElement>();
// //   const { ref: emergencyRef, visible: emergencyVisible } = useRevealOnScroll<HTMLElement>();
// //   const { ref: testRef,      visible: testVisible      } = useRevealOnScroll<HTMLElement>();
// //   const { ref: galleryRef,   visible: galleryVisible   } = useRevealOnScroll<HTMLElement>();

// //   // Testimonials mobile carousel
// //   const [activeTestIdx, setActiveTestIdx] = useState(0);
// //   const prevTest = () => setActiveTestIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
// //   const nextTest = () => setActiveTestIdx((i) => (i + 1) % testimonials.length);

// //   // Lightbox state
// //   const [lightboxOpen,  setLightboxOpen]  = useState(false);
// //   const [lightboxStart, setLightboxStart] = useState(0);

// //   const openLightbox = (index: number) => {
// //     setLightboxStart(index);
// //     setLightboxOpen(true);
// //   };

// //   // Only show first 4 images as the preview row
// //   const previewImages = galleryImages.slice(0, 4);

// //   return (
// //     <>
// //       {/* ── Global Styles ─────────────────────────────────────────────────── */}
// //       <style jsx global>{`
// //         @font-face {
// //           font-family: 'Aachi';
// //           src: local('Aachi'), url('/fonts/Aachi.woff2') format('woff2');
// //         }
// //         :root {
// //           --brand-navy:   #002b5c;
// //           --brand-yellow: #ffd100;
// //           --font-main: "Aachi", "Poppins", sans-serif;
// //         }
// //         html, body {
// //           font-family: var(--font-main);
// //           color: var(--brand-navy);
// //           overflow-x: hidden;
// //         }
// //         .reveal-up {
// //           opacity: 0;
// //           transform: translateY(30px);
// //           transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
// //         }
// //         .reveal-up.is-visible {
// //           opacity: 1;
// //           transform: translateY(0);
// //         }
// //         @keyframes bounce-slow {
// //           0%, 100% { transform: translateY(0); }
// //           50%       { transform: translateY(-8px); }
// //         }
// //         .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }

// //         /* Gallery card image zoom */
// //         .gallery-card img {
// //           transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
// //         }
// //         .gallery-card:hover img {
// //           transform: scale(1.08);
// //         }
// //       `}</style>

// //       {/* ── 1. Hero ───────────────────────────────────────────────────────── */}
// //       <div className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
// //         <div className="absolute inset-0 z-0">
// //           <img
// //             src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1920&h=800&fit=crop"
// //             alt="Happy Dog"
// //             className="w-full h-full object-cover"
// //           />
// //           <div className="absolute inset-0 bg-[#002b5c]/80 mix-blend-multiply" />
// //           <div className="absolute inset-0 bg-gradient-to-t from-[#002b5c] via-transparent to-transparent opacity-90" />
// //         </div>
// //         <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
// //           <div className="inline-block px-4 py-1 mb-4 border border-[#ffd100] rounded-full
// //             bg-[#002b5c]/50 backdrop-blur-sm">
// //             <span className="text-[#ffd100] font-bold tracking-wider text-sm uppercase">
// //               Since 2010 • Rajasthan
// //             </span>
// //           </div>
// //           <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
// //             Every Dog Deserves <br />
// //             <span className="text-[#ffd100]">A Loving Home</span>
// //           </h1>
// //           <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
// //             We rescue, rehabilitate, and rehome street dogs. Join us in creating a world
// //             where no tail stops wagging.
// //           </p>
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
// //             <a
// //               href="/rehoming"
// //               className="px-8 py-4 bg-[#ffd100] text-[#002b5c] font-black rounded-full
// //                 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(255,209,0,0.5)]
// //                 hover:scale-105 transition-all"
// //             >
// //               Find a Friend <Heart size={20} fill="#002b5c" />
// //             </a>
// //             <a
// //               href="/donate"
// //               className="px-8 py-4 bg-transparent border-2 border-white text-white
// //                 font-bold rounded-full hover:bg-white hover:text-[#002b5c] transition-all"
// //             >
// //               Donate to Rescue
// //             </a>
// //           </div>
// //         </div>
// //       </div>
      



// //       {/* ── 1.5 Quick Actions (NEW SECTION) ────────────────────────────────── */}
// // <section className="py-16 bg-slate-50 relative -mt-10 z-20">
// //   <div className="max-w-7xl mx-auto px-6">
// //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      
// //       {/* Card 1: Adopt */}
// //       <div className="bg-[#002b5c] p-8 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-all duration-300 group">
// //         <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#ffd100] transition-colors">
// //           <Heart size={28} className="text-[#ffd100] group-hover:text-[#002b5c]" />
// //         </div>
// //         <h3 className="text-2xl font-bold text-white mb-3">Adopt a Dog</h3>
// //         <p className="text-blue-100 text-sm mb-6 leading-relaxed min-h-[60px]">
// //           Give a rescue dog a loving forever home. Browse our dogs waiting for adoption.
// //         </p>
// //         <a href="/adopt" className="inline-flex items-center gap-2 text-[#ffd100] font-bold text-sm uppercase tracking-wide hover:gap-3 transition-all">
// //           Find your match <ArrowRight size={16} />
// //         </a>
// //       </div>

// //       {/* Card 2: Donate */}
// //       <div className="bg-[#002b5c] p-8 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-all duration-300 group">
// //         <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#ffd100] transition-colors">
// //           <HeartPulse size={28} className="text-[#ffd100] group-hover:text-[#002b5c]" />
// //         </div>
// //         <h3 className="text-2xl font-bold text-white mb-3">Donate</h3>
// //         <p className="text-blue-100 text-sm mb-6 leading-relaxed min-h-[60px]">
// //           Your generosity helps us care for dogs and find them loving homes.
// //         </p>
// //         <a href="/donate" className="inline-flex items-center gap-2 text-[#ffd100] font-bold text-sm uppercase tracking-wide hover:gap-3 transition-all">
// //           Make a donation <ArrowRight size={16} />
// //         </a>
// //       </div>

// //       {/* Card 3: Volunteer */}
// //       <div className="bg-[#002b5c] p-8 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-all duration-300 group">
// //         <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#ffd100] transition-colors">
// //           <Users size={28} className="text-[#ffd100] group-hover:text-[#002b5c]" />
// //         </div>
// //         <h3 className="text-2xl font-bold text-white mb-3">Volunteer</h3>
// //         <p className="text-blue-100 text-sm mb-6 leading-relaxed min-h-[60px]">
// //           Join our team of dedicated volunteers and help make a difference.
// //         </p>
// //         <a href="/volunteer" className="inline-flex items-center gap-2 text-[#ffd100] font-bold text-sm uppercase tracking-wide hover:gap-3 transition-all">
// //           Get involved <ArrowRight size={16} />
// //         </a>
// //       </div>

// //       {/* Card 4: Dog Care Tips */}
// //       <div className="bg-[#002b5c] p-8 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-all duration-300 group">
// //         <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#ffd100] transition-colors">
// //           <ShieldCheck size={28} className="text-[#ffd100] group-hover:text-[#002b5c]" />
// //         </div>
// //         <h3 className="text-2xl font-bold text-white mb-3">Dog Care Tips</h3>
// //         <p className="text-blue-100 text-sm mb-6 leading-relaxed min-h-[60px]">
// //           Expert advice on training, health, and caring for your furry friend.
// //         </p>
// //         <a href="/tips" className="inline-flex items-center gap-2 text-[#ffd100] font-bold text-sm uppercase tracking-wide hover:gap-3 transition-all">
// //           Learn more <ArrowRight size={16} />
// //         </a>
// //       </div>

// //     </div>
// //   </div>
// // </section>
// //       {/* ── 2. Featured Dogs ──────────────────────────────────────────────── */}
// //       <section
// //         ref={galleryRef}
// //         className={`py-24 bg-[#002b5c] relative overflow-hidden reveal-up ${
// //           galleryVisible ? 'is-visible' : ''
// //         }`}
// //       >
// //         {/* Decorative glow */}
// //         <div className="pointer-events-none absolute inset-0">
// //           <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ffd100] rounded-full
// //             blur-[120px] opacity-10" />
// //           <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full
// //             blur-[120px] opacity-10" />
// //         </div>

// //         <div className="max-w-7xl mx-auto px-6 relative z-10">

// //           {/* ── Header ── */}
// //           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
// //             <div>
// //               <span className="inline-flex items-center gap-2 bg-[#ffd100]/20 text-[#ffd100]
// //                 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
// //                 <Images size={14} /> Our Gallery
// //               </span>
// //               <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
// //                 Stories in Frames
// //               </h2>
// //               <p className="text-blue-200 text-lg max-w-lg">
// //                 Every photo is a life changed — rescues, recoveries, and reunions from
// //                 across Rajasthan.
// //               </p>
// //             </div>
// //             <a
// //               href="/gallery"
// //               className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full
// //                 border-2 border-[#ffd100] text-[#ffd100] font-bold text-sm
// //                 hover:bg-[#ffd100] hover:text-[#002b5c] transition-all duration-300"
// //             >
// //               View Full Gallery <ExternalLink size={16} />
// //             </a>
// //           </div>

// //           {/* ── 4-Card Row ── */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
// //             {previewImages.map((img, index) => (
// //               <button
// //                 key={img.id}
// //                 onClick={() => openLightbox(index)}
// //                 className="gallery-card group relative rounded-2xl overflow-hidden
// //                   aspect-[4/5] cursor-pointer focus:outline-none
// //                   focus-visible:ring-4 focus-visible:ring-[#ffd100]
// //                   shadow-xl hover:shadow-[0_20px_50px_rgba(255,209,0,0.2)]
// //                   transition-shadow duration-500"
// //                 aria-label={`Open gallery: ${img.caption}`}
// //               >
// //                 {/* Image */}
// //                 <img
// //                   src={img.thumb}
// //                   alt={img.caption}
// //                   className="w-full h-full object-cover"
// //                   loading="lazy"
// //                 />

// //                 {/* Dark gradient overlay (always visible at bottom) */}
// //                 <div className="absolute inset-0 bg-gradient-to-t
// //                   from-black/80 via-black/20 to-transparent" />

// //                 {/* Category badge */}
// //                 <span
// //                   className={[
// //                     'absolute top-3 left-3 px-2.5 py-1 rounded-full text-white',
// //                     'text-[10px] font-black uppercase tracking-wider',
// //                     categoryColor[img.category] ?? 'bg-gray-600',
// //                   ].join(' ')}
// //                 >
// //                   {img.category}
// //                 </span>

// //                 {/* Hover zoom icon */}
// //                 <div className="absolute top-3 right-3 w-9 h-9 rounded-full
// //                   bg-black/40 backdrop-blur-sm border border-white/20
// //                   flex items-center justify-center text-white
// //                   opacity-0 group-hover:opacity-100 transition-all duration-300
// //                   group-hover:bg-[#ffd100] group-hover:text-[#002b5c]
// //                   group-hover:border-[#ffd100] group-hover:scale-110">
// //                   <ZoomIn size={16} />
// //                 </div>

// //                 {/* Caption at bottom */}
// //                 <div className="absolute bottom-0 left-0 right-0 p-4
// //                   translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
// //                   <p className="text-white text-sm font-semibold leading-snug line-clamp-2">
// //                     {img.caption}
// //                   </p>
// //                   <span className="inline-flex items-center gap-1 mt-2
// //                     text-[#ffd100] text-xs font-bold opacity-0
// //                     group-hover:opacity-100 transition-opacity duration-300">
// //                     View in gallery <ArrowRight size={12} />
// //                   </span>
// //                 </div>

// //                 {/* Full-card hover border glow */}
// //                 <div className="absolute inset-0 rounded-2xl border-2 border-transparent
// //                   group-hover:border-[#ffd100]/60 transition-all duration-300 pointer-events-none" />
// //               </button>
// //             ))}
// //           </div>

// //           {/* ── Image count strip ── */}
// //           <div className="mt-8 flex items-center justify-center gap-3">
// //             <div className="h-px flex-1 bg-white/10" />
// //             <span className="text-blue-300 text-sm whitespace-nowrap">
// //               Showing 4 of {galleryImages.length} photos
// //             </span>
// //             <div className="h-px flex-1 bg-white/10" />
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── 3. RWA & Society ──────────────────────────────────────────────── */}
// //       <section
// //         ref={rwaRef}
// //         className={`py-24 bg-white relative overflow-hidden transition-opacity duration-1000 ${
// //           rwaVisible ? 'opacity-100' : 'opacity-0'
// //         }`}
// //       >
// //         <div className="container mx-auto px-6">
// //           <div className="text-center mb-16">
// //             <span className="text-[#ffd100] font-black tracking-widest uppercase text-sm mb-2 block">
// //               Community Harmony
// //             </span>
// //             <h2 className="text-4xl md:text-5xl font-bold text-[#002b5c] mb-6">
// //               Solutions for{' '}
// //               <span className="underline decoration-[#ffd100] decoration-4 underline-offset-4">
// //                 Societies & RWAs
// //               </span>
// //             </h2>
// //             <p className="text-gray-600 text-lg max-w-3xl mx-auto">
// //               Conflict resolution through scientific and legal methods.{' '}
// //               <strong>Sterilization & Vaccination</strong> is the only humane answer.
// //             </p>
// //           </div>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             <div className="group bg-slate-50 rounded-[2rem] p-8 border border-slate-100
// //               hover:border-[#ffd100] transition-all hover:-translate-y-2 hover:shadow-2xl">
// //               <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center
// //                 text-[#002b5c] shadow-sm mb-6 group-hover:bg-[#002b5c]
// //                 group-hover:text-[#ffd100] transition-colors">
// //                 <Users size={28} />
// //               </div>
// //               <h3 className="text-2xl font-bold text-[#002b5c] mb-3">Conflict Mediation</h3>
// //               <p className="text-gray-600 leading-relaxed">
// //                 We send experts to talk to residents, explain dog behavior, and conduct
// //                 safety workshops for children and housekeeping staff.
// //               </p>
// //             </div>

// //             <div className="bg-[#002b5c] rounded-[2rem] p-8 shadow-2xl
// //               transform md:-translate-y-6 relative overflow-hidden">
// //               <div className="absolute top-0 right-0 w-40 h-40 bg-[#ffd100]
// //                 rounded-full blur-[80px] opacity-20" />
// //               <div className="w-14 h-14 bg-[#ffd100] rounded-xl flex items-center
// //                 justify-center text-[#002b5c] shadow-lg mb-6">
// //                 <Stethoscope size={28} />
// //               </div>
// //               <h3 className="text-2xl font-bold text-white mb-3">Sterilization (ABC)</h3>
// //               <p className="text-blue-100 mb-6 leading-relaxed">
// //                 The only permanent solution. We catch, neuter, vaccinate, and release dogs
// //                 back to the same spot (as per law) to stabilize the population.
// //               </p>
// //               <button className="flex items-center gap-2 text-[#ffd100] font-bold
// //                 text-sm uppercase tracking-wide hover:gap-4 transition-all">
// //                 Request Drive <ArrowRight size={16} />
// //               </button>
// //             </div>

// //             <div className="group bg-slate-50 rounded-[2rem] p-8 border border-slate-100
// //               hover:border-[#ffd100] transition-all hover:-translate-y-2 hover:shadow-2xl">
// //               <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center
// //                 text-[#002b5c] shadow-sm mb-6 group-hover:bg-[#002b5c]
// //                 group-hover:text-[#ffd100] transition-colors">
// //                 <Syringe size={28} />
// //               </div>
// //               <h3 className="text-2xl font-bold text-[#002b5c] mb-3">Mass Vaccination</h3>
// //               <p className="text-gray-600 leading-relaxed">
// //                 Protect your society from Rabies. We conduct annual 7-in-1 and
// //                 Anti-Rabies vaccination drives for all community dogs.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── 4. Emergency Workflow ─────────────────────────────────────────── */}
// //       <section
// //         ref={emergencyRef}
// //         className={`py-20 bg-gradient-to-br from-gray-50 to-white relative reveal-up ${
// //           emergencyVisible ? 'is-visible' : ''
// //         }`}
// //       >
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="flex flex-col lg:flex-row gap-16 items-center">
// //             <div className="lg:w-1/2">
// //               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
// //                 bg-red-100 text-red-600 text-xs font-bold mb-4">
// //                 <span className="relative flex h-2 w-2">
// //                   <span className="animate-ping absolute inline-flex h-full w-full
// //                     rounded-full bg-red-400 opacity-75" />
// //                   <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
// //                 </span>
// //                 EMERGENCY RESPONSE
// //               </div>
// //               <h2 className="text-4xl font-bold text-[#002b5c] mb-6">
// //                 Found an Injured Dog?<br />
// //                 <span className="text-[#002b5c]/70">Here is what to do.</span>
// //               </h2>
// //               <div className="space-y-8 mt-8">
// //                 {[
// //                   { num: '01', title: 'Share Location',  desc: 'WhatsApp us a video and Google Location pin.' },
// //                   { num: '02', title: 'Triage',          desc: 'Our vet assesses urgency. Ambulance dispatched for critical cases.' },
// //                   { num: '03', title: 'Treatment',       desc: 'On-spot aid for minor wounds; Admission for surgeries.' },
// //                 ].map((step) => (
// //                   <div key={step.num} className="flex gap-5 group">
// //                     <div className="flex-shrink-0 w-12 h-12 rounded-full border-2
// //                       border-[#002b5c] text-[#002b5c] flex items-center justify-center
// //                       font-bold text-lg group-hover:bg-[#002b5c] group-hover:text-[#ffd100]
// //                       transition-colors">
// //                       {step.num}
// //                     </div>
// //                     <div>
// //                       <h4 className="text-xl font-bold text-[#002b5c]">{step.title}</h4>
// //                       <p className="text-gray-500">{step.desc}</p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //               <div className="mt-10">
// //                 <button className="flex items-center gap-3 px-8 py-4 bg-[#002b5c]
// //                   text-white font-bold rounded-xl shadow-xl hover:bg-[#003875]
// //                   transition-all hover:scale-105">
// //                   <PhoneCall size={20} className="text-[#ffd100]" />
// //                   Call Helpline Now
// //                 </button>
// //               </div>
// //             </div>

// //             <div className="lg:w-1/2 relative">
// //               <div className="absolute inset-0 bg-[#ffd100] rounded-[3rem]
// //                 transform rotate-6 translate-x-4 translate-y-4" />
// //               <div className="relative rounded-[3rem] overflow-hidden shadow-2xl
// //                 border-4 border-white h-[500px]">
// //                 <img
// //                   src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?w=800&q=80"
// //                   alt="Vet treating dog"
// //                   className="w-full h-full object-cover"
// //                 />
// //                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t
// //                   from-[#002b5c] to-transparent p-8 pt-24">
// //                   <div className="flex items-center gap-4 text-white">
// //                     <ShieldCheck size={40} className="text-[#ffd100]" />
// //                     <div>
// //                       <p className="font-bold text-xl">15,000+ Rescues</p>
// //                       <p className="text-sm opacity-80">Serving since 2010</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── 5. Legal Awareness ────────────────────────────────────────────── */}
// //       <section className="py-20 bg-[#002b5c] text-white relative overflow-hidden">
// //         <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffd100] rounded-full
// //           mix-blend-overlay blur-[100px] opacity-10 animate-pulse" />
// //         <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full
// //           mix-blend-overlay blur-[80px] opacity-20" />
// //         <div className="max-w-7xl mx-auto px-6 relative z-10">
// //           <div className="grid md:grid-cols-2 gap-12 items-center">
// //             <div>
// //               <div className="inline-block bg-[#ffd100] text-[#002b5c] px-3 py-1
// //                 rounded text-xs font-bold mb-4 tracking-wider">
// //                 LEGAL FRAMEWORK
// //               </div>
// //               <h2 className="text-4xl font-bold mb-6">
// //                 Know Your Rights &amp;<br />Responsibilities
// //               </h2>
// //               <p className="text-blue-100 mb-8 text-lg leading-relaxed">
// //                 Many conflicts happen due to misinformation. Under Indian Law (PCA Act 1960),
// //                 it is illegal to relocate stray dogs. We educate communities on how to coexist.
// //               </p>
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                 <div className="bg-white/10 p-5 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
// //                   <Scale className="text-[#ffd100] mb-3" size={28} />
// //                   <h4 className="font-bold text-lg mb-1">No Relocation</h4>
// //                   <p className="text-sm text-blue-200">Supreme Court orders strictly ban displacing dogs.</p>
// //                 </div>
// //                 <div className="bg-white/10 p-5 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
// //                   <AlertTriangle className="text-[#ffd100] mb-3" size={28} />
// //                   <h4 className="font-bold text-lg mb-1">Cruelty is Crime</h4>
// //                   <p className="text-sm text-blue-200">Harassing or beating animals is a punishable offense.</p>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="bg-white text-[#002b5c] p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative">
// //               <div className="absolute -top-4 -right-4 bg-[#ffd100] text-[#002b5c]
// //                 font-bold px-4 py-2 rounded-lg shadow-lg rotate-12">
// //                 Download PDF
// //               </div>
// //               <h3 className="text-2xl font-bold mb-6">Responsible Community Living</h3>
// //               <ul className="space-y-5">
// //                 {[
// //                   'Designate feeding spots away from high footfall areas.',
// //                   'Ensure all dogs are sterilized & vaccinated (ABC).',
// //                   'Do not act aggressive; dogs react to fear.',
// //                   'Cooperate with authorized feeders.',
// //                 ].map((item) => (
// //                   <li key={item} className="flex items-start gap-3">
// //                     <span className="mt-1 min-w-[20px] h-5 rounded-full bg-[#002b5c]
// //                       text-white flex items-center justify-center text-xs font-bold">
// //                       ✓
// //                     </span>
// //                     <span className="text-gray-700 font-medium">{item}</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //               <button className="w-full mt-8 border-2 border-[#002b5c] text-[#002b5c]
// //                 font-bold py-4 rounded-xl hover:bg-[#002b5c] hover:text-white
// //                 transition-all duration-300">
// //                 Download Awareness Poster
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── 6. Stats ──────────────────────────────────────────────────────── */}
// //       <StatsSection />

// //       {/* ── 7. Testimonials ───────────────────────────────────────────────── */}
// //       <section
// //         ref={testRef}
// //         className={`py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden
// //           reveal-up ${testVisible ? 'is-visible' : ''}`}
// //       >
// //         <div className="pointer-events-none absolute inset-0 overflow-hidden">
// //           <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full
// //             bg-[#002b5c]/5 blur-3xl" />
// //           <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full
// //             bg-[#ffd100]/10 blur-3xl" />
// //         </div>

// //         <div className="max-w-7xl mx-auto px-6 relative z-10">
// //           <div className="text-center mb-16">
// //             <span className="inline-flex items-center gap-2 bg-[#ffd100]/20 text-[#002b5c]
// //               px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
// //               <Heart size={14} fill="#002b5c" /> Real Stories
// //             </span>
// //             <h2 className="text-4xl md:text-5xl font-extrabold text-[#002b5c] mb-4">
// //               Voices of Our Community
// //             </h2>
// //             <p className="text-gray-500 text-lg max-w-2xl mx-auto">
// //               From adopters and volunteers to donors and rescuers — here is what real
// //               people say about their experience with us.
// //             </p>
// //             <div className="mt-5 inline-flex items-center gap-2 bg-white border
// //               border-slate-100 shadow rounded-full px-5 py-2">
// //               <div className="flex gap-0.5">
// //                 {Array.from({ length: 5 }).map((_, i) => (
// //                   <Star key={i} size={16} className="text-[#ffd100] fill-[#ffd100]" />
// //                 ))}
// //               </div>
// //               <span className="font-black text-[#002b5c]">4.9</span>
// //               <span className="text-gray-400 text-sm">· 200+ Reviews</span>
// //             </div>
// //           </div>

// //           {/* Desktop Grid */}
// //           <div className="hidden md:grid md:grid-cols-3 gap-6 items-start">
// //             {testimonials.map((t, i) => (
// //               <TestimonialCard key={t.id} t={t} featured={i === 1} />
// //             ))}
// //           </div>

// //           {/* Mobile Carousel */}
// //           <div className="md:hidden">
// //             <div className="overflow-hidden">
// //               <div
// //                 className="flex transition-transform duration-500 ease-in-out"
// //                 style={{ transform: `translateX(-${activeTestIdx * 100}%)` }}
// //               >
// //                 {testimonials.map((t) => (
// //                   <div key={t.id} className="min-w-full px-1">
// //                     <TestimonialCard t={t} />
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //             <div className="flex items-center justify-center gap-4 mt-6">
// //               <button
// //                 onClick={prevTest}
// //                 className="w-10 h-10 rounded-full border-2 border-[#002b5c] text-[#002b5c]
// //                   flex items-center justify-center hover:bg-[#002b5c] hover:text-white
// //                   transition-colors"
// //               >
// //                 <ChevronLeft size={20} />
// //               </button>
// //               <div className="flex gap-2">
// //                 {testimonials.map((_, i) => (
// //                   <button
// //                     key={i}
// //                     onClick={() => setActiveTestIdx(i)}
// //                     className={[
// //                       'h-2 rounded-full transition-all duration-300',
// //                       i === activeTestIdx ? 'w-6 bg-[#002b5c]' : 'w-2 bg-gray-300',
// //                     ].join(' ')}
// //                   />
// //                 ))}
// //               </div>
// //               <button
// //                 onClick={nextTest}
// //                 className="w-10 h-10 rounded-full border-2 border-[#002b5c] text-[#002b5c]
// //                   flex items-center justify-center hover:bg-[#002b5c] hover:text-white
// //                   transition-colors"
// //               >
// //                 <ChevronRight size={20} />
// //               </button>
// //             </div>
// //           </div>

// //           <div className="mt-14 text-center">
// //             <p className="text-gray-500 mb-4 text-sm">Have a story to share?</p>
// //             <a
// //               href="/share-story"
// //               className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2
// //                 border-[#002b5c] text-[#002b5c] font-bold text-sm
// //                 hover:bg-[#002b5c] hover:text-white transition-all duration-300"
// //             >
// //               Share Your Story <ArrowRight size={16} />
// //             </a>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ════════════════════════════════════════════════════════════════════
// //           8.  GALLERY SECTION  ← NEW
// //       ════════════════════════════════════════════════════════════════════ */}
     
// //       {/* ════════════════════════════════════════════════════════════════════ */}

// //       {/* ── 9. Donation CTA ───────────────────────────────────────────────── */}
// //       <section className="py-24 bg-[#ffd100] text-[#002b5c] text-center">
// //         <div className="max-w-4xl mx-auto px-6">
// //           <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
// //             We Run on Compassion
// //           </h2>
// //           <p className="text-[#002b5c]/80 text-xl mb-10 font-medium max-w-2xl mx-auto">
// //             We do not sell dogs. We do not charge for rescues. Your donation buys
// //             bandages, vaccines, and food for the voiceless.
// //           </p>
// //           <div className="flex flex-col sm:flex-row justify-center gap-4">
// //             <button className="bg-[#002b5c] text-white px-10 py-5 rounded-full font-bold
// //               text-lg hover:bg-white hover:text-[#002b5c] shadow-2xl
// //               transition-all hover:-translate-y-1">
// //               Donate Now
// //             </button>
// //             <button className="bg-white/20 border-2 border-[#002b5c] text-[#002b5c]
// //               px-10 py-5 rounded-full font-bold text-lg
// //               hover:bg-[#002b5c] hover:text-white transition-all hover:-translate-y-1">
// //               Become a Volunteer
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── Footer CTA ────────────────────────────────────────────────────── */}
// //       <CTABanner />

// //       {/* ── Lightbox Portal ───────────────────────────────────────────────── */}
// //       {lightboxOpen && (
// //         <Lightbox
// //           images={galleryImages}
// //           startIndex={lightboxStart}
// //           onClose={() => setLightboxOpen(false)}
// //         />
// //       )}
// //     </>
// //   );
// // };

// // export default HomePage;






// // import React, { useEffect, useRef, useState, useCallback } from 'react';
// // import {
// //   Users,
// //   Stethoscope,
// //   Syringe,
// //   CheckCircle2,
// //   PhoneCall,
// //   HeartPulse,
// //   Scale,
// //   AlertTriangle,
// //   ArrowRight,
// //   Heart,
// //   ShieldCheck,
// //   Star,
// //   Quote,
// //   ChevronLeft,
// //   ChevronRight,
// //   X,
// //   ZoomIn,
// //   Images,
// //   ExternalLink,
// // } from 'lucide-react';

// // import { FeaturedDogs } from '@/components/sections/FeaturedDogs';
// // import { StatsSection } from '@/components/sections/StatsSection';
// // import { CTABanner } from '@/components/sections/CTABanner';
// // import { orgInfo } from '@/constants/theme';

// // // ─────────────────────────────────────────────────────────────────────────────
// // // TYPES
// // // ─────────────────────────────────────────────────────────────────────────────

// // interface Testimonial {
// //   id: number;
// //   name: string;
// //   role: string;
// //   location: string;
// //   avatar: string;
// //   rating: number;
// //   text: string;
// //   dogName?: string;
// //   dogImage?: string;
// //   tag: 'Adopter' | 'Volunteer' | 'Donor' | 'Rescuer';
// // }

// // interface GalleryImage {
// //   id: number;
// //   src: string;
// //   thumb: string;
// //   caption: string;
// //   category: string;
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // GALLERY DATA
// // // ─────────────────────────────────────────────────────────────────────────────

// // const galleryImages: GalleryImage[] = [
// //   {
// //     id: 1,
// //     src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=85',
// //     thumb: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=420&fit=crop',
// //     caption: 'Street dogs playing together in Jaipur',
// //     category: 'Rescue',
// //   },
// //   {
// //     id: 2,
// //     src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=85',
// //     thumb: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=420&fit=crop',
// //     caption: 'Bruno — adopted after 3 months in shelter',
// //     category: 'Adoption',
// //   },
// //   {
// //     id: 3,
// //     src: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=1200&q=85',
// //     thumb: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=600&h=420&fit=crop',
// //     caption: 'Moti recovering after emergency surgery',
// //     category: 'Medical',
// //   },
// //   {
// //     id: 4,
// //     src: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=1200&q=85',
// //     thumb: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600&h=420&fit=crop',
// //     caption: 'Coco in her forever home — Ajmer',
// //     category: 'Adoption',
// //   },
// //   {
// //     id: 5,
// //     src: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1200&q=85',
// //     thumb: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=600&h=420&fit=crop',
// //     caption: 'Community feeding drive — Jodhpur',
// //     category: 'Community',
// //   },
// //   {
// //     id: 6,
// //     src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1200&q=85',
// //     thumb: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=420&fit=crop',
// //     caption: 'Vaccination drive at Udaipur society',
// //     category: 'Medical',
// //   },
// //   {
// //     id: 7,
// //     src: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&q=85',
// //     thumb: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=420&fit=crop',
// //     caption: 'Rescue team on field — Bikaner',
// //     category: 'Rescue',
// //   },
// //   {
// //     id: 8,
// //     src: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=1200&q=85',
// //     thumb: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&h=420&fit=crop',
// //     caption: 'Happy tails — adoption success stories',
// //     category: 'Adoption',
// //   },
// // ];

// // // ─────────────────────────────────────────────────────────────────────────────
// // // TESTIMONIAL DATA
// // // ─────────────────────────────────────────────────────────────────────────────

// // const testimonials: Testimonial[] = [
// //   {
// //     id: 1,
// //     name: 'Priya Sharma',
// //     role: 'Dog Adopter',
// //     location: 'Jaipur, Rajasthan',
// //     avatar: 'https://i.pravatar.cc/150?img=47',
// //     rating: 5,
// //     text: 'Adopting Bruno was the best decision of my life. The team guided me through every step — health check to home adjustment. He was vaccinated, sterilized, and full of love!',
// //     dogName: 'Bruno',
// //     dogImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop',
// //     tag: 'Adopter',
// //   },
// //   {
// //     id: 2,
// //     name: 'Rahul Meena',
// //     role: 'Weekend Volunteer',
// //     location: 'Jodhpur, Rajasthan',
// //     avatar: 'https://i.pravatar.cc/150?img=12',
// //     rating: 5,
// //     text: 'I have been volunteering for 2 years. The community here is incredible. Every feeding drive, every rescue — I leave feeling like I actually made a difference.',
// //     tag: 'Volunteer',
// //   },
// //   {
// //     id: 3,
// //     name: 'Sunita & Vikram Patel',
// //     role: 'Monthly Donors',
// //     location: 'Udaipur, Rajasthan',
// //     avatar: 'https://i.pravatar.cc/150?img=33',
// //     rating: 5,
// //     text: 'We donate every month and the team sends photo updates. The transparency of this organization is unmatched. Our money truly goes to the dogs.',
// //     tag: 'Donor',
// //   },
// //   {
// //     id: 4,
// //     name: 'Amit Joshi',
// //     role: 'Emergency Rescuer',
// //     location: 'Kota, Rajasthan',
// //     avatar: 'https://i.pravatar.cc/150?img=59',
// //     rating: 5,
// //     text: 'I reported an injured dog at 11 PM. Within 45 minutes a volunteer arrived. The dog had surgery next morning and is now recovering. Incredible response time!',
// //     dogName: 'Moti',
// //     dogImage: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=200&h=200&fit=crop',
// //     tag: 'Rescuer',
// //   },
// //   {
// //     id: 5,
// //     name: 'Kavya Rathore',
// //     role: 'Foster Parent',
// //     location: 'Ajmer, Rajasthan',
// //     avatar: 'https://i.pravatar.cc/150?img=25',
// //     rating: 5,
// //     text: 'Fostering Coco for three weeks was emotional — but the support was constant. Medicines, food, vet consultations all arranged. She found her forever home!',
// //     dogName: 'Coco',
// //     dogImage: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=200&h=200&fit=crop',
// //     tag: 'Adopter',
// //   },
// //   {
// //     id: 6,
// //     name: 'Deepak Singh',
// //     role: 'RWA Secretary',
// //     location: 'Bikaner, Rajasthan',
// //     avatar: 'https://i.pravatar.cc/150?img=68',
// //     rating: 4,
// //     text: 'Our society had constant complaints about stray dogs. After the ABC drive and resident workshop, conflicts reduced by 80%. The only humane solution that actually works.',
// //     tag: 'Volunteer',
// //   },
// // ];

// // // ─────────────────────────────────────────────────────────────────────────────
// // // HELPERS
// // // ─────────────────────────────────────────────────────────────────────────────

// // const tagStyles: Record<Testimonial['tag'], string> = {
// //   Adopter: 'bg-emerald-100 text-emerald-700',
// //   Volunteer: 'bg-blue-100 text-blue-700',
// //   Donor: 'bg-purple-100 text-purple-700',
// //   Rescuer: 'bg-rose-100 text-rose-700',
// // };

// // const categoryColor: Record<string, string> = {
// //   Rescue: 'bg-rose-500',
// //   Adoption: 'bg-emerald-500',
// //   Medical: 'bg-blue-500',
// //   Community: 'bg-amber-500',
// // };

// // // ─────────────────────────────────────────────────────────────────────────────
// // // SUB-COMPONENTS
// // // ─────────────────────────────────────────────────────────────────────────────

// // const StarRating: React.FC<{ count: number }> = ({ count }) => (
// //   <div className="flex gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
// //     {Array.from({ length: 5 }).map((_, i) => (
// //       <Star
// //         key={i}
// //         size={14}
// //         className={i < count ? 'text-[#ffd100] fill-[#ffd100]' : 'text-gray-300'}
// //         aria-hidden="true"
// //       />
// //     ))}
// //   </div>
// // );

// // const TestimonialCard: React.FC<{ t: Testimonial; featured?: boolean }> = ({
// //   t,
// //   featured = false,
// // }) => (
// //   <article
// //     className={[
// //       'group relative flex flex-col rounded-3xl p-7 transition-all duration-500',
// //       'hover:-translate-y-2 hover:shadow-2xl',
// //       featured
// //         ? 'bg-[#002b5c] text-white shadow-2xl md:-translate-y-4'
// //         : 'bg-white border border-slate-100 shadow-md hover:border-[#ffd100]/50',
// //     ].join(' ')}
// //   >
// //     <Quote
// //       size={48}
// //       className={[
// //         'absolute top-5 right-6 opacity-10',
// //         featured ? 'text-[#ffd100]' : 'text-[#002b5c]',
// //       ].join(' ')}
// //       aria-hidden="true"
// //     />
// //     <span
// //       className={[
// //         'mb-4 self-start rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-wide',
// //         featured ? 'bg-[#ffd100] text-[#002b5c]' : tagStyles[t.tag],
// //       ].join(' ')}
// //     >
// //       {t.tag}
// //     </span>
// //     <StarRating count={t.rating} />
// //     <p
// //       className={[
// //         'mt-4 mb-6 text-sm leading-relaxed flex-1',
// //         featured ? 'text-blue-100' : 'text-gray-600',
// //       ].join(' ')}
// //     >
// //       "{t.text}"
// //     </p>
// //     {t.dogName && t.dogImage && (
// //       <div
// //         className={[
// //           'mb-5 flex items-center gap-3 rounded-2xl px-4 py-3 w-fit',
// //           featured ? 'bg-white/10' : 'bg-slate-50 border border-slate-100',
// //         ].join(' ')}
// //       >
// //         <img
// //           src={t.dogImage}
// //           alt={t.dogName}
// //           className="w-10 h-10 rounded-full object-cover ring-2 ring-[#ffd100]"
// //           loading="lazy"
// //         />
// //         <div>
// //           <p
// //             className={[
// //               'text-xs font-bold',
// //               featured ? 'text-[#ffd100]' : 'text-[#002b5c]',
// //             ].join(' ')}
// //           >
// //             {t.dogName}
// //           </p>
// //           <p
// //             className={[
// //               'text-[10px]',
// //               featured ? 'text-blue-200' : 'text-gray-400',
// //             ].join(' ')}
// //           >
// //             Rescued & Rehomed ✓
// //           </p>
// //         </div>
// //       </div>
// //     )}
// //     <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
// //       <img
// //         src={t.avatar}
// //         alt={`${t.name}'s avatar`}
// //         className="w-11 h-11 rounded-full object-cover ring-2 ring-[#ffd100]"
// //         loading="lazy"
// //       />
// //       <div>
// //         <p
// //           className={[
// //             'font-bold text-sm',
// //             featured ? 'text-white' : 'text-[#002b5c]',
// //           ].join(' ')}
// //         >
// //           {t.name}
// //         </p>
// //         <p
// //           className={[
// //             'text-xs',
// //             featured ? 'text-blue-200' : 'text-gray-400',
// //           ].join(' ')}
// //         >
// //           {t.role} · {t.location}
// //         </p>
// //       </div>
// //     </div>
// //   </article>
// // );

// // // ─────────────────────────────────────────────────────────────────────────────
// // // LIGHTBOX COMPONENT
// // // ─────────────────────────────────────────────────────────────────────────────

// // interface LightboxProps {
// //   images: GalleryImage[];
// //   startIndex: number;
// //   onClose: () => void;
// // }

// // const Lightbox: React.FC<LightboxProps> = ({ images, startIndex, onClose }) => {
// //   const [current, setCurrent] = useState(startIndex);
// //   const [loaded, setLoaded] = useState(false);

// //   const prev = useCallback(() => {
// //     setLoaded(false);
// //     setCurrent((i) => (i - 1 + images.length) % images.length);
// //   }, [images.length]);

// //   const next = useCallback(() => {
// //     setLoaded(false);
// //     setCurrent((i) => (i + 1) % images.length);
// //   }, [images.length]);

// //   const goToImage = useCallback((index: number) => {
// //     setLoaded(false);
// //     setCurrent(index);
// //   }, []);

// //   useEffect(() => {
// //     const handler = (e: KeyboardEvent) => {
// //       if (e.key === 'ArrowLeft') prev();
// //       if (e.key === 'ArrowRight') next();
// //       if (e.key === 'Escape') onClose();
// //     };
// //     window.addEventListener('keydown', handler);
// //     return () => window.removeEventListener('keydown', handler);
// //   }, [prev, next, onClose]);

// //   useEffect(() => {
// //     document.body.style.overflow = 'hidden';
// //     return () => {
// //       document.body.style.overflow = '';
// //     };
// //   }, []);

// //   const img = images[current];

// //   return (
// //     <div
// //       className="fixed inset-0 z-[9999] flex flex-col bg-black/95 backdrop-blur-md"
// //       role="dialog"
// //       aria-modal="true"
// //       aria-label="Image Gallery"
// //     >
// //       {/* Top Bar */}
// //       <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 flex-shrink-0">
// //         <div className="flex items-center gap-3">
// //           <Images size={20} className="text-[#ffd100]" aria-hidden="true" />
// //           <span className="text-white font-bold tracking-wide">Our Gallery</span>
// //           <span className="text-gray-400 text-sm">
// //             {current + 1} / {images.length}
// //           </span>
// //         </div>

// //         <div className="hidden md:flex items-center gap-2 overflow-x-auto max-w-xl">
// //           {images.map((img, i) => (
// //             <button
// //               key={img.id}
// //               onClick={() => goToImage(i)}
// //               className={[
// //                 'flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all',
// //                 i === current
// //                   ? 'border-[#ffd100] scale-110 shadow-lg shadow-[#ffd100]/30'
// //                   : 'border-white/10 opacity-50 hover:opacity-100 hover:border-white/40',
// //               ].join(' ')}
// //               aria-label={`View image ${i + 1}`}
// //             >
// //               <img
// //                 src={img.thumb}
// //                 alt=""
// //                 className="w-full h-full object-cover"
// //                 loading="lazy"
// //               />
// //             </button>
// //           ))}
// //         </div>

// //         <div className="flex items-center gap-3">
// //           <a
// //             href="/gallery"
// //             className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full
// //               border border-white/20 text-white text-sm font-medium
// //               hover:bg-white/10 transition-colors"
// //           >
// //             Full Gallery <ExternalLink size={14} />
// //           </a>
// //           <button
// //             onClick={onClose}
// //             className="w-10 h-10 rounded-full border border-white/20 text-white
// //               flex items-center justify-center hover:bg-white/15 hover:border-white/40
// //               transition-all"
// //             aria-label="Close gallery"
// //           >
// //             <X size={20} />
// //           </button>
// //         </div>
// //       </div>

// //       {/* Main Image Area */}
// //       <div className="relative flex-1 flex items-center justify-center overflow-hidden px-4 py-4">
// //         <button
// //           onClick={prev}
// //           className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10
// //             border border-white/20 text-white flex items-center justify-center
// //             hover:bg-[#002b5c] hover:border-[#ffd100] transition-all
// //             hover:scale-110 backdrop-blur-sm"
// //           aria-label="Previous image"
// //         >
// //           <ChevronLeft size={24} />
// //         </button>

// //         <div className="relative max-w-5xl max-h-full w-full flex items-center justify-center">
// //           {!loaded && (
// //             <div className="absolute inset-0 flex items-center justify-center">
// //               <div
// //                 className="w-16 h-16 border-4 border-[#ffd100]/30 border-t-[#ffd100]
// //                 rounded-full animate-spin"
// //                 role="status"
// //                 aria-label="Loading image"
// //               />
// //             </div>
// //           )}
// //           <img
// //             key={img.id}
// //             src={img.src}
// //             alt={img.caption}
// //             onLoad={() => setLoaded(true)}
// //             className={[
// //               'max-h-[70vh] max-w-full object-contain rounded-2xl shadow-2xl',
// //               'transition-opacity duration-500',
// //               loaded ? 'opacity-100' : 'opacity-0',
// //             ].join(' ')}
// //           />
// //         </div>

// //         <button
// //           onClick={next}
// //           className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10
// //             border border-white/20 text-white flex items-center justify-center
// //             hover:bg-[#002b5c] hover:border-[#ffd100] transition-all
// //             hover:scale-110 backdrop-blur-sm"
// //           aria-label="Next image"
// //         >
// //           <ChevronRight size={24} />
// //         </button>
// //       </div>

// //       {/* Caption & Dots */}
// //       <div className="flex-shrink-0 px-6 py-4 border-t border-white/10">
// //         <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
// //           <div className="flex items-center gap-3">
// //             <span
// //               className={[
// //                 'w-2 h-2 rounded-full flex-shrink-0',
// //                 categoryColor[img.category] ?? 'bg-gray-400',
// //               ].join(' ')}
// //               aria-hidden="true"
// //             />
// //             <p className="text-white text-sm font-medium">{img.caption}</p>
// //             <span
// //               className={[
// //                 'px-2 py-0.5 rounded-full text-white text-[10px] font-bold uppercase',
// //                 categoryColor[img.category] ?? 'bg-gray-600',
// //               ].join(' ')}
// //             >
// //               {img.category}
// //             </span>
// //           </div>

// //           <div className="flex gap-1.5 md:hidden">
// //             {images.map((_, i) => (
// //               <button
// //                 key={i}
// //                 onClick={() => goToImage(i)}
// //                 className={[
// //                   'h-1.5 rounded-full transition-all duration-300',
// //                   i === current ? 'w-6 bg-[#ffd100]' : 'w-1.5 bg-white/30',
// //                 ].join(' ')}
// //                 aria-label={`Go to image ${i + 1}`}
// //               />
// //             ))}
// //           </div>

// //           <p className="hidden sm:block text-gray-500 text-xs">
// //             ← → to navigate · Esc to close
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // ─────────────────────────────────────────────────────────────────────────────
// // // SCROLL HOOK
// // // ─────────────────────────────────────────────────────────────────────────────

// // function useRevealOnScroll<T extends HTMLElement>(threshold = 0.1) {
// //   const ref = useRef<T | null>(null);
// //   const [visible, setVisible] = useState(false);

// //   useEffect(() => {
// //     const el = ref.current;
// //     if (!el) return;
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setVisible(true);
// //           observer.disconnect();
// //         }
// //       },
// //       { threshold }
// //     );
// //     observer.observe(el);
// //     return () => observer.disconnect();
// //   }, [threshold]);

// //   return { ref, visible };
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // PAGE COMPONENT
// // // ─────────────────────────────────────────────────────────────────────────────

// // const HomePage: React.FC = () => {
// //   const { ref: rwaRef, visible: rwaVisible } = useRevealOnScroll<HTMLElement>();
// //   const { ref: emergencyRef, visible: emergencyVisible } = useRevealOnScroll<HTMLElement>();
// //   const { ref: testRef, visible: testVisible } = useRevealOnScroll<HTMLElement>();
// //   const { ref: galleryRef, visible: galleryVisible } = useRevealOnScroll<HTMLElement>();

// //   const [activeTestIdx, setActiveTestIdx] = useState(0);
// //   const [lightboxOpen, setLightboxOpen] = useState(false);
// //   const [lightboxStart, setLightboxStart] = useState(0);

// //   const prevTest = useCallback(
// //     () => setActiveTestIdx((i) => (i - 1 + testimonials.length) % testimonials.length),
// //     []
// //   );
  
// //   const nextTest = useCallback(
// //     () => setActiveTestIdx((i) => (i + 1) % testimonials.length),
// //     []
// //   );

// //   const openLightbox = useCallback((index: number) => {
// //     setLightboxStart(index);
// //     setLightboxOpen(true);
// //   }, []);

// //   const closeLightbox = useCallback(() => {
// //     setLightboxOpen(false);
// //   }, []);

// //   const previewImages = galleryImages.slice(0, 4);

// //   return (
// //     <>
// //       <style jsx global>{`
// //         @font-face {
// //           font-family: 'Aachi';
// //           src: local('Aachi'), url('/fonts/Aachi.woff2') format('woff2');
// //         }
// //         :root {
// //           --brand-navy: #002b5c;
// //           --brand-yellow: #ffd100;
// //           --font-main: 'Aachi', 'Poppins', sans-serif;
// //         }
// //         html,
// //         body {
// //           font-family: var(--font-main);
// //           color: var(--brand-navy);
// //           overflow-x: hidden;
// //         }
// //         .reveal-up {
// //           opacity: 0;
// //           transform: translateY(30px);
// //           transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
// //         }
// //         .reveal-up.is-visible {
// //           opacity: 1;
// //           transform: translateY(0);
// //         }
// //         @keyframes bounce-slow {
// //           0%,
// //           100% {
// //             transform: translateY(0);
// //           }
// //           50% {
// //             transform: translateY(-8px);
// //           }
// //         }
// //         .animate-bounce-slow {
// //           animation: bounce-slow 3s ease-in-out infinite;
// //         }
// //         .gallery-card img {
// //           transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
// //         }
// //         .gallery-card:hover img {
// //           transform: scale(1.08);
// //         }
// //       `}</style>

// //       {/* Hero Section */}
// //       <section
// //         className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden"
// //         aria-label="Hero banner"
// //       >
// //         <div className="absolute inset-0 z-0">
// //           <img
// //             src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1920&h=800&fit=crop"
// //             alt="Happy dogs in care"
// //             className="w-full h-full object-cover"
// //           />
// //           <div className="absolute inset-0 bg-[#002b5c]/80 mix-blend-multiply" />
// //           <div className="absolute inset-0 bg-gradient-to-t from-[#002b5c] via-transparent to-transparent opacity-90" />
// //         </div>
// //         <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
// //           <div
// //             className="inline-block px-4 py-1 mb-4 border border-[#ffd100] rounded-full
// //             bg-[#002b5c]/50 backdrop-blur-sm"
// //           >
// //             <span className="text-[#ffd100] font-bold tracking-wider text-sm uppercase">
// //               Since 2010 • Rajasthan
// //             </span>
// //           </div>
// //           <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
// //             Every Dog Deserves <br />
// //             <span className="text-[#ffd100]">A Loving Home</span>
// //           </h1>
// //           <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
// //             We rescue, rehabilitate, and rehome street dogs. Join us in creating a world
// //             where no tail stops wagging.
// //           </p>
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
// //             <a
// //               href="/rehoming"
// //               className="px-8 py-4 bg-[#ffd100] text-[#002b5c] font-black rounded-full
// //                 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(255,209,0,0.5)]
// //                 hover:scale-105 transition-all"
// //             >
// //               Find a Friend <Heart size={20} fill="#002b5c" />
// //             </a>
// //             <a
// //               href="/donate"
// //               className="px-8 py-4 bg-transparent border-2 border-white text-white
// //                 font-bold rounded-full hover:bg-white hover:text-[#002b5c] transition-all"
// //             >
// //               Donate to Rescue
// //             </a>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Quick Actions Section */}
// //       <section className="py-16 bg-slate-50 relative -mt-10 z-20">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {[
// //               {
// //                 icon: Heart,
// //                 title: 'Adopt a Dog',
// //                 desc: 'Give a rescue dog a loving forever home. Browse our dogs waiting for adoption.',
// //                 link: '/adopt',
// //                 cta: 'Find your match',
// //               },
// //               {
// //                 icon: HeartPulse,
// //                 title: 'Donate',
// //                 desc: 'Your generosity helps us care for dogs and find them loving homes.',
// //                 link: '/donate',
// //                 cta: 'Make a donation',
// //               },
// //               {
// //                 icon: Users,
// //                 title: 'Volunteer',
// //                 desc: 'Join our team of dedicated volunteers and help make a difference.',
// //                 link: '/volunteer',
// //                 cta: 'Get involved',
// //               },
// //               {
// //                 icon: ShieldCheck,
// //                 title: 'Dog Care Tips',
// //                 desc: 'Expert advice on training, health, and caring for your furry friend.',
// //                 link: '/tips',
// //                 cta: 'Learn more',
// //               },
// //             ].map((card) => (
// //               <div
// //                 key={card.title}
// //                 className="bg-[#002b5c] p-8 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-all duration-300 group"
// //               >
// //                 <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#ffd100] transition-colors">
// //                   <card.icon
// //                     size={28}
// //                     className="text-[#ffd100] group-hover:text-[#002b5c]"
// //                   />
// //                 </div>
// //                 <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
// //                 <p className="text-blue-100 text-sm mb-6 leading-relaxed min-h-[60px]">
// //                   {card.desc}
// //                 </p>
// //                 <a
// //                   href={card.link}
// //                   className="inline-flex items-center gap-2 text-[#ffd100] font-bold text-sm uppercase tracking-wide hover:gap-3 transition-all"
// //                 >
// //                   {card.cta} <ArrowRight size={16} />
// //                 </a>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Gallery Section */}
// //       <section
// //         ref={galleryRef}
// //         className={`py-24 bg-[#002b5c] relative overflow-hidden reveal-up ${
// //           galleryVisible ? 'is-visible' : ''
// //         }`}
// //       >
// //         <div className="pointer-events-none absolute inset-0">
// //           <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ffd100] rounded-full blur-[120px] opacity-10" />
// //           <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[120px] opacity-10" />
// //         </div>

// //         <div className="max-w-7xl mx-auto px-6 relative z-10">
// //           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
// //             <div>
// //               <span
// //                 className="inline-flex items-center gap-2 bg-[#ffd100]/20 text-[#ffd100]
// //                 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4"
// //               >
// //                 <Images size={14} /> Our Gallery
// //               </span>
// //               <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
// //                 Stories in Frames
// //               </h2>
// //               <p className="text-blue-200 text-lg max-w-lg">
// //                 Every photo is a life changed — rescues, recoveries, and reunions from
// //                 across Rajasthan.
// //               </p>
// //             </div>
// //             <a
// //               href="/gallery"
// //               className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full
// //                 border-2 border-[#ffd100] text-[#ffd100] font-bold text-sm
// //                 hover:bg-[#ffd100] hover:text-[#002b5c] transition-all duration-300"
// //             >
// //               View Full Gallery <ExternalLink size={16} />
// //             </a>
// //           </div>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
// //             {previewImages.map((img, index) => (
// //               <button
// //                 key={img.id}
// //                 onClick={() => openLightbox(index)}
// //                 className="gallery-card group relative rounded-2xl overflow-hidden
// //                   aspect-[4/5] cursor-pointer focus:outline-none
// //                   focus-visible:ring-4 focus-visible:ring-[#ffd100]
// //                   shadow-xl hover:shadow-[0_20px_50px_rgba(255,209,0,0.2)]
// //                   transition-shadow duration-500"
// //                 aria-label={`Open gallery: ${img.caption}`}
// //               >
// //                 <img
// //                   src={img.thumb}
// //                   alt={img.caption}
// //                   className="w-full h-full object-cover"
// //                   loading="lazy"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
// //                 <span
// //                   className={[
// //                     'absolute top-3 left-3 px-2.5 py-1 rounded-full text-white',
// //                     'text-[10px] font-black uppercase tracking-wider',
// //                     categoryColor[img.category] ?? 'bg-gray-600',
// //                   ].join(' ')}
// //                 >
// //                   {img.category}
// //                 </span>
// //                 <div
// //                   className="absolute top-3 right-3 w-9 h-9 rounded-full
// //                   bg-black/40 backdrop-blur-sm border border-white/20
// //                   flex items-center justify-center text-white
// //                   opacity-0 group-hover:opacity-100 transition-all duration-300
// //                   group-hover:bg-[#ffd100] group-hover:text-[#002b5c]
// //                   group-hover:border-[#ffd100] group-hover:scale-110"
// //                 >
// //                   <ZoomIn size={16} />
// //                 </div>
// //                 <div
// //                   className="absolute bottom-0 left-0 right-0 p-4
// //                   translate-y-1 group-hover:translate-y-0 transition-transform duration-300"
// //                 >
// //                   <p className="text-white text-sm font-semibold leading-snug line-clamp-2">
// //                     {img.caption}
// //                   </p>
// //                   <span
// //                     className="inline-flex items-center gap-1 mt-2
// //                     text-[#ffd100] text-xs font-bold opacity-0
// //                     group-hover:opacity-100 transition-opacity duration-300"
// //                   >
// //                     View in gallery <ArrowRight size={12} />
// //                   </span>
// //                 </div>
// //                 <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#ffd100]/60 transition-all duration-300 pointer-events-none" />
// //               </button>
// //             ))}
// //           </div>

// //           <div className="mt-8 flex items-center justify-center gap-3">
// //             <div className="h-px flex-1 bg-white/10" />
// //             <span className="text-blue-300 text-sm whitespace-nowrap">
// //               Showing 4 of {galleryImages.length} photos
// //             </span>
// //             <div className="h-px flex-1 bg-white/10" />
// //           </div>
// //         </div>
// //       </section>

// //       {/* RWA & Society Section */}
// //       <section
// //         ref={rwaRef}
// //         className={`py-24 bg-white relative overflow-hidden transition-opacity duration-1000 ${
// //           rwaVisible ? 'opacity-100' : 'opacity-0'
// //         }`}
// //       >
// //         <div className="container mx-auto px-6">
// //           <div className="text-center mb-16">
// //             <span className="text-[#ffd100] font-black tracking-widest uppercase text-sm mb-2 block">
// //               Community Harmony
// //             </span>
// //             <h2 className="text-4xl md:text-5xl font-bold text-[#002b5c] mb-6">
// //               Solutions for{' '}
// //               <span className="underline decoration-[#ffd100] decoration-4 underline-offset-4">
// //                 Societies & RWAs
// //               </span>
// //             </h2>
// //             <p className="text-gray-600 text-lg max-w-3xl mx-auto">
// //               Conflict resolution through scientific and legal methods.{' '}
// //               <strong>Sterilization & Vaccination</strong> is the only humane answer.
// //             </p>
// //           </div>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             <div
// //               className="group bg-slate-50 rounded-[2rem] p-8 border border-slate-100
// //               hover:border-[#ffd100] transition-all hover:-translate-y-2 hover:shadow-2xl"
// //             >
// //               <div
// //                 className="w-14 h-14 bg-white rounded-xl flex items-center justify-center
// //                 text-[#002b5c] shadow-sm mb-6 group-hover:bg-[#002b5c]
// //                 group-hover:text-[#ffd100] transition-colors"
// //               >
// //                 <Users size={28} />
// //               </div>
// //               <h3 className="text-2xl font-bold text-[#002b5c] mb-3">Conflict Mediation</h3>
// //               <p className="text-gray-600 leading-relaxed">
// //                 We send experts to talk to residents, explain dog behavior, and conduct
// //                 safety workshops for children and housekeeping staff.
// //               </p>
// //             </div>

// //             <div className="bg-[#002b5c] rounded-[2rem] p-8 shadow-2xl transform md:-translate-y-6 relative overflow-hidden">
// //               <div className="absolute top-0 right-0 w-40 h-40 bg-[#ffd100] rounded-full blur-[80px] opacity-20" />
// //               <div className="w-14 h-14 bg-[#ffd100] rounded-xl flex items-center justify-center text-[#002b5c] shadow-lg mb-6">
// //                 <Stethoscope size={28} />
// //               </div>
// //               <h3 className="text-2xl font-bold text-white mb-3">Sterilization (ABC)</h3>
// //               <p className="text-blue-100 mb-6 leading-relaxed">
// //                 The only permanent solution. We catch, neuter, vaccinate, and release dogs
// //                 back to the same spot (as per law) to stabilize the population.
// //               </p>
// //               <a
// //                 href="/abc-drive"
// //                 className="inline-flex items-center gap-2 text-[#ffd100] font-bold
// //                 text-sm uppercase tracking-wide hover:gap-4 transition-all"
// //               >
// //                 Request Drive <ArrowRight size={16} />
// //               </a>
// //             </div>

// //             <div
// //               className="group bg-slate-50 rounded-[2rem] p-8 border border-slate-100
// //               hover:border-[#ffd100] transition-all hover:-translate-y-2 hover:shadow-2xl"
// //             >
// //               <div
// //                 className="w-14 h-14 bg-white rounded-xl flex items-center justify-center
// //                 text-[#002b5c] shadow-sm mb-6 group-hover:bg-[#002b5c]
// //                 group-hover:text-[#ffd100] transition-colors"
// //               >
// //                 <Syringe size={28} />
// //               </div>
// //               <h3 className="text-2xl font-bold text-[#002b5c] mb-3">Mass Vaccination</h3>
// //               <p className="text-gray-600 leading-relaxed">
// //                 Protect your society from Rabies. We conduct annual 7-in-1 and
// //                 Anti-Rabies vaccination drives for all community dogs.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Emergency Workflow Section */}
// //       <section
// //         ref={emergencyRef}
// //         className={`py-20 bg-gradient-to-br from-gray-50 to-white relative reveal-up ${
// //           emergencyVisible ? 'is-visible' : ''
// //         }`}
// //       >
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="flex flex-col lg:flex-row gap-16 items-center">
// //             <div className="lg:w-1/2">
// //               <div
// //                 className="inline-flex items-center gap-2 px-3 py-1 rounded-full
// //                 bg-red-100 text-red-600 text-xs font-bold mb-4"
// //               >
// //                 <span className="relative flex h-2 w-2">
// //                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
// //                   <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
// //                 </span>
// //                 EMERGENCY RESPONSE
// //               </div>
// //               <h2 className="text-4xl font-bold text-[#002b5c] mb-6">
// //                 Found an Injured Dog?
// //                 <br />
// //                 <span className="text-[#002b5c]/70">Here is what to do.</span>
// //               </h2>
// //               <div className="space-y-8 mt-8">
// //                 {[
// //                   {
// //                     num: '01',
// //                     title: 'Share Location',
// //                     desc: 'WhatsApp us a video and Google Location pin.',
// //                   },
// //                   {
// //                     num: '02',
// //                     title: 'Triage',
// //                     desc: 'Our vet assesses urgency. Ambulance dispatched for critical cases.',
// //                   },
// //                   {
// //                     num: '03',
// //                     title: 'Treatment',
// //                     desc: 'On-spot aid for minor wounds; Admission for surgeries.',
// //                   },
// //                 ].map((step) => (
// //                   <div key={step.num} className="flex gap-5 group">
// //                     <div
// //                       className="flex-shrink-0 w-12 h-12 rounded-full border-2
// //                       border-[#002b5c] text-[#002b5c] flex items-center justify-center
// //                       font-bold text-lg group-hover:bg-[#002b5c] group-hover:text-[#ffd100]
// //                       transition-colors"
// //                     >
// //                       {step.num}
// //                     </div>
// //                     <div>
// //                       <h4 className="text-xl font-bold text-[#002b5c]">{step.title}</h4>
// //                       <p className="text-gray-500">{step.desc}</p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //               <div className="mt-10">
// //                 <a
// //                   href={`tel:${orgInfo?.phone || '+911234567890'}`}
// //                   className="inline-flex items-center gap-3 px-8 py-4 bg-[#002b5c]
// //                   text-white font-bold rounded-xl shadow-xl hover:bg-[#003875]
// //                   transition-all hover:scale-105"
// //                 >
// //                   <PhoneCall size={20} className="text-[#ffd100]" />
// //                   Call Helpline Now
// //                 </a>
// //               </div>
// //             </div>

// //             <div className="lg:w-1/2 relative">
// //               <div className="absolute inset-0 bg-[#ffd100] rounded-[3rem] transform rotate-6 translate-x-4 translate-y-4" />
// //               <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white h-[500px]">
// //                 <img
// //                   src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?w=800&q=80"
// //                   alt="Vet treating dog"
// //                   className="w-full h-full object-cover"
// //                   loading="lazy"
// //                 />
// //                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#002b5c] to-transparent p-8 pt-24">
// //                   <div className="flex items-center gap-4 text-white">
// //                     <ShieldCheck size={40} className="text-[#ffd100]" />
// //                     <div>
// //                       <p className="font-bold text-xl">15,000+ Rescues</p>
// //                       <p className="text-sm opacity-80">Serving since 2010</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Legal Awareness Section */}
// //       <section className="py-20 bg-[#002b5c] text-white relative overflow-hidden">
// //         <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffd100] rounded-full mix-blend-overlay blur-[100px] opacity-10 animate-pulse" />
// //         <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-overlay blur-[80px] opacity-20" />
// //         <div className="max-w-7xl mx-auto px-6 relative z-10">
// //           <div className="grid md:grid-cols-2 gap-12 items-center">
// //             <div>
// //               <div className="inline-block bg-[#ffd100] text-[#002b5c] px-3 py-1 rounded text-xs font-bold mb-4 tracking-wider">
// //                 LEGAL FRAMEWORK
// //               </div>
// //               <h2 className="text-4xl font-bold mb-6">
// //                 Know Your Rights &amp;
// //                 <br />
// //                 Responsibilities
// //               </h2>
// //               <p className="text-blue-100 mb-8 text-lg leading-relaxed">
// //                 Many conflicts happen due to misinformation. Under Indian Law (PCA Act 1960),
// //                 it is illegal to relocate stray dogs. We educate communities on how to coexist.
// //               </p>
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                 <div className="bg-white/10 p-5 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
// //                   <Scale className="text-[#ffd100] mb-3" size={28} />
// //                   <h4 className="font-bold text-lg mb-1">No Relocation</h4>
// //                   <p className="text-sm text-blue-200">
// //                     Supreme Court orders strictly ban displacing dogs.
// //                   </p>
// //                 </div>
// //                 <div className="bg-white/10 p-5 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
// //                   <AlertTriangle className="text-[#ffd100] mb-3" size={28} />
// //                   <h4 className="font-bold text-lg mb-1">Cruelty is Crime</h4>
// //                   <p className="text-sm text-blue-200">
// //                     Harassing or beating animals is a punishable offense.
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="bg-white text-[#002b5c] p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative">
// //               <div className="absolute -top-4 -right-4 bg-[#ffd100] text-[#002b5c] font-bold px-4 py-2 rounded-lg shadow-lg rotate-12">
// //                 Download PDF
// //               </div>
// //               <h3 className="text-2xl font-bold mb-6">Responsible Community Living</h3>
// //               <ul className="space-y-5">
// //                 {[
// //                   'Designate feeding spots away from high footfall areas.',
// //                   'Ensure all dogs are sterilized & vaccinated (ABC).',
// //                   'Do not act aggressive; dogs react to fear.',
// //                   'Cooperate with authorized feeders.',
// //                 ].map((item) => (
// //                   <li key={item} className="flex items-start gap-3">
// //                     <span className="mt-1 min-w-[20px] h-5 rounded-full bg-[#002b5c] text-white flex items-center justify-center text-xs font-bold">
// //                       ✓
// //                     </span>
// //                     <span className="text-gray-700 font-medium">{item}</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //               <a
// //                 href="/resources/awareness-poster.pdf"
// //                 download
// //                 className="block w-full mt-8 border-2 border-[#002b5c] text-[#002b5c]
// //                 font-bold py-4 rounded-xl hover:bg-[#002b5c] hover:text-white
// //                 transition-all duration-300 text-center"
// //               >
// //                 Download Awareness Poster
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Stats Section */}
// //       <StatsSection />

// //       {/* Testimonials Section */}
// //       <section
// //         ref={testRef}
// //         className={`py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden reveal-up ${
// //           testVisible ? 'is-visible' : ''
// //         }`}
// //       >
// //         <div className="pointer-events-none absolute inset-0 overflow-hidden">
// //           <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#002b5c]/5 blur-3xl" />
// //           <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#ffd100]/10 blur-3xl" />
// //         </div>

// //         <div className="max-w-7xl mx-auto px-6 relative z-10">
// //           <div className="text-center mb-16">
// //             <span
// //               className="inline-flex items-center gap-2 bg-[#ffd100]/20 text-[#002b5c]
// //               px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4"
// //             >
// //               <Heart size={14} fill="#002b5c" /> Real Stories
// //             </span>
// //             <h2 className="text-4xl md:text-5xl font-extrabold text-[#002b5c] mb-4">
// //               Voices of Our Community
// //             </h2>
// //             <p className="text-gray-500 text-lg max-w-2xl mx-auto">
// //               From adopters and volunteers to donors and rescuers — here is what real
// //               people say about their experience with us.
// //             </p>
// //             <div className="mt-5 inline-flex items-center gap-2 bg-white border border-slate-100 shadow rounded-full px-5 py-2">
// //               <div className="flex gap-0.5">
// //                 {Array.from({ length: 5 }).map((_, i) => (
// //                   <Star key={i} size={16} className="text-[#ffd100] fill-[#ffd100]" />
// //                 ))}
// //               </div>
// //               <span className="font-black text-[#002b5c]">4.9</span>
// //               <span className="text-gray-400 text-sm">· 200+ Reviews</span>
// //             </div>
// //           </div>

// //           {/* Desktop Grid */}
// //           <div className="hidden md:grid md:grid-cols-3 gap-6 items-start">
// //             {testimonials.map((t, i) => (
// //               <TestimonialCard key={t.id} t={t} featured={i === 1} />
// //             ))}
// //           </div>

// //           {/* Mobile Carousel */}
// //           <div className="md:hidden">
// //             <div className="overflow-hidden">
// //               <div
// //                 className="flex transition-transform duration-500 ease-in-out"
// //                 style={{ transform: `translateX(-${activeTestIdx * 100}%)` }}
// //               >
// //                 {testimonials.map((t) => (
// //                   <div key={t.id} className="min-w-full px-1">
// //                     <TestimonialCard t={t} />
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //             <div className="flex items-center justify-center gap-4 mt-6">
// //               <button
// //                 onClick={prevTest}
// //                 className="w-10 h-10 rounded-full border-2 border-[#002b5c] text-[#002b5c]
// //                   flex items-center justify-center hover:bg-[#002b5c] hover:text-white
// //                   transition-colors"
// //                 aria-label="Previous testimonial"
// //               >
// //                 <ChevronLeft size={20} />
// //               </button>
// //               <div className="flex gap-2">
// //                 {testimonials.map((_, i) => (
// //                   <button
// //                     key={i}
// //                     onClick={() => setActiveTestIdx(i)}
// //                     className={[
// //                       'h-2 rounded-full transition-all duration-300',
// //                       i === activeTestIdx ? 'w-6 bg-[#002b5c]' : 'w-2 bg-gray-300',
// //                     ].join(' ')}
// //                     aria-label={`Go to testimonial ${i + 1}`}
// //                   />
// //                 ))}
// //               </div>
// //               <button
// //                 onClick={nextTest}
// //                 className="w-10 h-10 rounded-full border-2 border-[#002b5c] text-[#002b5c]
// //                   flex items-center justify-center hover:bg-[#002b5c] hover:text-white
// //                   transition-colors"
// //                 aria-label="Next testimonial"
// //               >
// //                 <ChevronRight size={20} />
// //               </button>
// //             </div>
// //           </div>

// //           <div className="mt-14 text-center">
// //             <p className="text-gray-500 mb-4 text-sm">Have a story to share?</p>
// //             <a
// //               href="/share-story"
// //               className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2
// //                 border-[#002b5c] text-[#002b5c] font-bold text-sm
// //                 hover:bg-[#002b5c] hover:text-white transition-all duration-300"
// //             >
// //               Share Your Story <ArrowRight size={16} />
// //             </a>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Donation CTA Section */}
// //       <section className="py-24 bg-[#ffd100] text-[#002b5c] text-center">
// //         <div className="max-w-4xl mx-auto px-6">
// //           <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
// //             We Run on Compassion
// //           </h2>
// //           <p className="text-[#002b5c]/80 text-xl mb-10 font-medium max-w-2xl mx-auto">
// //             We do not sell dogs. We do not charge for rescues. Your donation buys
// //             bandages, vaccines, and food for the voiceless.
// //           </p>
// //           <div className="flex flex-col sm:flex-row justify-center gap-4">
// //             <a
// //               href="/donate"
// //               className="bg-[#002b5c] text-white px-10 py-5 rounded-full font-bold
// //               text-lg hover:bg-white hover:text-[#002b5c] shadow-2xl
// //               transition-all hover:-translate-y-1"
// //             >
// //               Donate Now
// //             </a>
// //             <a
// //               href="/volunteer"
// //               className="bg-white/20 border-2 border-[#002b5c] text-[#002b5c]
// //               px-10 py-5 rounded-full font-bold text-lg
// //               hover:bg-[#002b5c] hover:text-white transition-all hover:-translate-y-1"
// //             >
// //               Become a Volunteer
// //             </a>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer CTA */}
     
// //       {/* Lightbox */}
   
// //     </>
// //   );
// // };

// // export default HomePage;








// // import React, { useEffect, useRef, useState, useCallback } from 'react';
// // import {
// //   Users, Stethoscope, Syringe, CheckCircle2, PhoneCall, HeartPulse,
// //   Scale, AlertTriangle, ArrowRight, Heart, ShieldCheck, Star, Quote,
// //   ChevronLeft, ChevronRight, X, ZoomIn, Images, ExternalLink,
// // } from 'lucide-react';

// // // ─────────────────────────────────────────────────────────────────────────────
// // // TYPES & DATA (same as original)
// // // ─────────────────────────────────────────────────────────────────────────────

// // const galleryImages = [
// //   { id: 1, src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=420&fit=crop', caption: 'Street dogs playing together in Jaipur', category: 'Rescue' },
// //   { id: 2, src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=420&fit=crop', caption: 'Bruno — adopted after 3 months in shelter', category: 'Adoption' },
// //   { id: 3, src: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=600&h=420&fit=crop', caption: 'Moti recovering after emergency surgery', category: 'Medical' },
// //   { id: 4, src: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600&h=420&fit=crop', caption: 'Coco in her forever home — Ajmer', category: 'Adoption' },
// //   { id: 5, src: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=600&h=420&fit=crop', caption: 'Community feeding drive — Jodhpur', category: 'Community' },
// //   { id: 6, src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=420&fit=crop', caption: 'Vaccination drive at Udaipur society', category: 'Medical' },
// //   { id: 7, src: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=420&fit=crop', caption: 'Rescue team on field — Bikaner', category: 'Rescue' },
// //   { id: 8, src: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&h=420&fit=crop', caption: 'Happy tails — adoption success stories', category: 'Adoption' },
// // ];

// // const testimonials = [
// //   { id: 1, name: 'Priya Sharma', role: 'Dog Adopter', location: 'Jaipur', avatar: 'https://i.pravatar.cc/150?img=47', rating: 5, text: 'Adopting Bruno was the best decision of my life. The team guided me through every step — health check to home adjustment. He was vaccinated, sterilized, and full of love!', dogName: 'Bruno', dogImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop', tag: 'Adopter' },
// //   { id: 2, name: 'Rahul Meena', role: 'Weekend Volunteer', location: 'Jodhpur', avatar: 'https://i.pravatar.cc/150?img=12', rating: 5, text: 'I have been volunteering for 2 years. The community here is incredible. Every feeding drive, every rescue — I leave feeling like I actually made a difference.', tag: 'Volunteer' },
// //   { id: 3, name: 'Sunita & Vikram Patel', role: 'Monthly Donors', location: 'Udaipur', avatar: 'https://i.pravatar.cc/150?img=33', rating: 5, text: 'We donate every month and the team sends photo updates. The transparency of this organization is unmatched. Our money truly goes to the dogs.', tag: 'Donor' },
// //   { id: 4, name: 'Amit Joshi', role: 'Emergency Rescuer', location: 'Kota', avatar: 'https://i.pravatar.cc/150?img=59', rating: 5, text: 'I reported an injured dog at 11 PM. Within 45 minutes a volunteer arrived. The dog had surgery next morning and is now recovering. Incredible response time!', dogName: 'Moti', dogImage: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=200&h=200&fit=crop', tag: 'Rescuer' },
// //   { id: 5, name: 'Kavya Rathore', role: 'Foster Parent', location: 'Ajmer', avatar: 'https://i.pravatar.cc/150?img=25', rating: 5, text: 'Fostering Coco for three weeks was emotional — but the support was constant. Medicines, food, vet consultations all arranged. She found her forever home!', dogName: 'Coco', dogImage: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=200&h=200&fit=crop', tag: 'Adopter' },
// //   { id: 6, name: 'Deepak Singh', role: 'RWA Secretary', location: 'Bikaner', avatar: 'https://i.pravatar.cc/150?img=68', rating: 4, text: 'Our society had constant complaints about stray dogs. After the ABC drive and resident workshop, conflicts reduced by 80%. The only humane solution that actually works.', tag: 'Volunteer' },
// // ];

// // const tagStyles = { Adopter: 'bg-emerald-100 text-emerald-700', Volunteer: 'bg-sky-100 text-sky-700', Donor: 'bg-violet-100 text-violet-700', Rescuer: 'bg-rose-100 text-rose-700' };
// // const categoryColor = { Rescue: 'bg-rose-500', Adoption: 'bg-emerald-500', Medical: 'bg-sky-500', Community: 'bg-amber-500' };

// // // ─────────────────────────────────────────────────────────────────────────────
// // // STAR RATING
// // // ─────────────────────────────────────────────────────────────────────────────
// // const StarRating = ({ count }) => (
// //   <div className="flex gap-0.5">
// //     {Array.from({ length: 5 }).map((_, i) => (
// //       <Star key={i} size={13} className={i < count ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'} />
// //     ))}
// //   </div>
// // );

// // // ─────────────────────────────────────────────────────────────────────────────
// // // TESTIMONIAL CARD
// // // ─────────────────────────────────────────────────────────────────────────────
// // const TestimonialCard = ({ t, featured = false }) => (
// //   <article className={`group relative flex flex-col rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 ${featured ? 'bg-[#002b5c] text-white shadow-2xl shadow-[#002b5c]/30 md:-translate-y-5 border border-[#ffd100]/30' : 'bg-white border border-slate-100 shadow-lg hover:shadow-2xl hover:border-[#ffd100]/40'}`}>
// //     <Quote size={52} className={`absolute top-5 right-5 opacity-[0.07] ${featured ? 'text-[#ffd100]' : 'text-[#002b5c]'}`} />
// //     <span className={`mb-4 self-start rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest ${featured ? 'bg-[#ffd100] text-[#002b5c]' : tagStyles[t.tag]}`}>{t.tag}</span>
// //     <StarRating count={t.rating} />
// //     <p className={`mt-4 mb-6 text-sm leading-relaxed flex-1 font-light ${featured ? 'text-blue-100' : 'text-gray-500'}`}>"{t.text}"</p>
// //     {t.dogName && t.dogImage && (
// //       <div className={`mb-5 flex items-center gap-3 rounded-2xl px-4 py-3 w-fit ${featured ? 'bg-white/10 border border-white/10' : 'bg-slate-50 border border-slate-100'}`}>
// //         <img src={t.dogImage} alt={t.dogName} className="w-10 h-10 rounded-full object-cover ring-2 ring-[#ffd100]" loading="lazy" />
// //         <div>
// //           <p className={`text-xs font-bold ${featured ? 'text-[#ffd100]' : 'text-[#002b5c]'}`}>{t.dogName}</p>
// //           <p className={`text-[10px] ${featured ? 'text-blue-300' : 'text-gray-400'}`}>Rescued & Rehomed ✓</p>
// //         </div>
// //       </div>
// //     )}
// //     <div className={`flex items-center gap-3 mt-auto pt-5 border-t ${featured ? 'border-white/10' : 'border-slate-100'}`}>
// //       <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-[#ffd100]" loading="lazy" />
// //       <div>
// //         <p className={`font-bold text-sm ${featured ? 'text-white' : 'text-[#002b5c]'}`}>{t.name}</p>
// //         <p className={`text-xs ${featured ? 'text-blue-300' : 'text-gray-400'}`}>{t.role} · {t.location}</p>
// //       </div>
// //     </div>
// //   </article>
// // );

// // // ─────────────────────────────────────────────────────────────────────────────
// // // LIGHTBOX
// // // ─────────────────────────────────────────────────────────────────────────────
// // const Lightbox = ({ images, startIndex, onClose }) => {
// //   const [current, setCurrent] = useState(startIndex);
// //   const [loaded, setLoaded] = useState(false);
// //   const prev = useCallback(() => { setLoaded(false); setCurrent(i => (i - 1 + images.length) % images.length); }, [images.length]);
// //   const next = useCallback(() => { setLoaded(false); setCurrent(i => (i + 1) % images.length); }, [images.length]);
// //   useEffect(() => {
// //     const h = e => { if (e.key === 'ArrowLeft') prev(); if (e.key === 'ArrowRight') next(); if (e.key === 'Escape') onClose(); };
// //     window.addEventListener('keydown', h);
// //     document.body.style.overflow = 'hidden';
// //     return () => { window.removeEventListener('keydown', h); document.body.style.overflow = ''; };
// //   }, [prev, next, onClose]);
// //   const img = images[current];
// //   return (
// //     <div className="fixed inset-0 z-[9999] flex flex-col bg-black/95 backdrop-blur-md" role="dialog" aria-modal="true">
// //       <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 flex-shrink-0">
// //         <div className="flex items-center gap-3">
// //           <Images size={18} className="text-[#ffd100]" />
// //           <span className="text-white font-bold">Our Gallery</span>
// //           <span className="text-gray-500 text-sm">{current + 1} / {images.length}</span>
// //         </div>
// //         <div className="hidden md:flex items-center gap-2 overflow-x-auto max-w-xl">
// //           {images.map((im, i) => (
// //             <button key={im.id} onClick={() => { setLoaded(false); setCurrent(i); }} className={`flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${i === current ? 'border-[#ffd100] scale-110' : 'border-white/10 opacity-40 hover:opacity-80'}`}>
// //               <img src={im.thumb} alt="" className="w-full h-full object-cover" loading="lazy" />
// //             </button>
// //           ))}
// //         </div>
// //         <button onClick={onClose} className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/15 transition-all"><X size={18} /></button>
// //       </div>
// //       <div className="relative flex-1 flex items-center justify-center overflow-hidden px-16">
// //         <button onClick={prev} className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#ffd100] hover:text-[#002b5c] hover:border-[#ffd100] transition-all"><ChevronLeft size={22} /></button>
// //         <div className="relative max-w-5xl w-full flex items-center justify-center">
// //           {!loaded && <div className="absolute inset-0 flex items-center justify-center"><div className="w-12 h-12 border-3 border-[#ffd100]/30 border-t-[#ffd100] rounded-full animate-spin" /></div>}
// //           <img key={img.id} src={img.src} alt={img.caption} onLoad={() => setLoaded(true)} className={`max-h-[68vh] max-w-full object-contain rounded-2xl shadow-2xl transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
// //         </div>
// //         <button onClick={next} className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#ffd100] hover:text-[#002b5c] hover:border-[#ffd100] transition-all"><ChevronRight size={22} /></button>
// //       </div>
// //       <div className="flex-shrink-0 px-6 py-4 border-t border-white/10">
// //         <div className="flex items-center justify-between">
// //           <div className="flex items-center gap-3">
// //             <span className={`w-2 h-2 rounded-full flex-shrink-0 ${categoryColor[img.category] ?? 'bg-gray-400'}`} />
// //             <p className="text-white text-sm font-medium">{img.caption}</p>
// //             <span className={`px-2 py-0.5 rounded-full text-white text-[10px] font-bold uppercase ${categoryColor[img.category] ?? 'bg-gray-600'}`}>{img.category}</span>
// //           </div>
// //           <p className="hidden sm:block text-gray-600 text-xs">← → to navigate · Esc to close</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // ─────────────────────────────────────────────────────────────────────────────
// // // SCROLL REVEAL HOOK
// // // ─────────────────────────────────────────────────────────────────────────────
// // function useReveal(threshold = 0.1) {
// //   const ref = useRef(null);
// //   const [visible, setVisible] = useState(false);
// //   useEffect(() => {
// //     const el = ref.current; if (!el) return;
// //     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
// //     obs.observe(el);
// //     return () => obs.disconnect();
// //   }, [threshold]);
// //   return { ref, visible };
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // MAIN PAGE
// // // ─────────────────────────────────────────────────────────────────────────────
// // const HomePage = () => {
// //   const rwa = useReveal();
// //   const emergency = useReveal();
// //   const test = useReveal();
// //   const gallery = useReveal();
// //   const [activeTestIdx, setActiveTestIdx] = useState(0);
// //   const [lightboxOpen, setLightboxOpen] = useState(false);
// //   const [lightboxStart, setLightboxStart] = useState(0);
// //   const prevTest = useCallback(() => setActiveTestIdx(i => (i - 1 + testimonials.length) % testimonials.length), []);
// //   const nextTest = useCallback(() => setActiveTestIdx(i => (i + 1) % testimonials.length), []);

// //   return (
// //     <>
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
// //         :root { --navy:#002b5c; --gold:#ffd100; --gold-light:#fff3b0; }
// //         *, *::before, *::after { box-sizing: border-box; }
// //         html, body { font-family:'DM Sans', sans-serif; color:var(--navy); overflow-x:hidden; margin:0; }
// //         .display { font-family:'Playfair Display', Georgia, serif; }
        
// //         /* Reveal Animations */
// //         .reveal { opacity:0; transform:translateY(40px); transition:opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1); }
// //         .reveal.in { opacity:1; transform:translateY(0); }
// //         .reveal-scale { opacity:0; transform:scale(0.94); transition:opacity 0.8s ease, transform 0.8s ease; }
// //         .reveal-scale.in { opacity:1; transform:scale(1); }

// //         /* Hero particles */
// //         @keyframes float { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-20px) rotate(180deg)} }
// //         @keyframes drift { 0%{transform:translateX(0)} 100%{transform:translateX(100vw)} }
// //         @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(1.8);opacity:0} }
// //         @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
// //         @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        
// //         .marquee-track { animation: marquee 20s linear infinite; }
// //         .marquee-track:hover { animation-play-state: paused; }

// //         /* Gold shimmer button */
// //         .btn-gold {
// //           position:relative; overflow:hidden;
// //           background:var(--gold); color:var(--navy);
// //           background-image: linear-gradient(105deg, var(--gold) 40%, #fffacc 50%, var(--gold) 60%);
// //           background-size:200% 100%;
// //           transition: background-position 0.4s ease, transform 0.2s, box-shadow 0.2s;
// //         }
// //         .btn-gold:hover { background-position:100% 0; transform:translateY(-2px); box-shadow:0 12px 32px rgba(255,209,0,0.4); }

// //         /* Card hover lift */
// //         .card-lift { transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease; }
// //         .card-lift:hover { transform:translateY(-8px); box-shadow:0 24px 50px rgba(0,43,92,0.12); }

// //         /* Gallery image zoom */
// //         .gallery-img { transition:transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); }
// //         .gallery-card:hover .gallery-img { transform:scale(1.1); }

// //         /* Dotted background */
// //         .dotted-bg { background-image:radial-gradient(circle, rgba(0,43,92,0.08) 1px, transparent 1px); background-size:28px 28px; }

// //         /* Noise texture overlay */
// //         .noise::after { content:''; position:absolute; inset:0; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E"); pointer-events:none; }

// //         /* Pulsing dot */
// //         .live-dot::before { content:''; position:absolute; inset:0; border-radius:50%; background:currentColor; animation:pulse-ring 1.5s ease-out infinite; }

// //         /* Step connector line */
// //         .step-line { position:relative; }
// //         .step-line:not(:last-child)::after { content:''; position:absolute; left:22px; top:52px; bottom:-30px; width:2px; background:linear-gradient(to bottom, #002b5c30, transparent); }
// //       `}</style>

// //       {/* ── HERO ─────────────────────────────────────────────────────────── */}
// //       <section className="relative w-full flex flex-col items-center justify-center overflow-hidden noise" style={{background:'linear-gradient(160deg, #001a3d 0%, #002b5c 50%, #00407a 100%)', minHeight:'100vh', marginTop:0, paddingTop:'80px', paddingBottom:'60px'}}>
// //         {/* Decorative orbs */}
// //         <div className="pointer-events-none absolute inset-0">
// //           <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20" style={{background:'radial-gradient(circle, #ffd100, transparent)', filter:'blur(80px)'}} />
// //           <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10" style={{background:'radial-gradient(circle, #60a5fa, transparent)', filter:'blur(80px)'}} />
// //           <div className="absolute top-10 right-10 w-40 h-40 rounded-full border border-white/5" />
// //           <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full border border-[#ffd100]/10" />
// //           {/* Floating paw prints */}
// //           {[...Array(6)].map((_, i) => (
// //             <div key={i} className="absolute text-white/5 text-5xl select-none" style={{top:`${10+i*15}%`, left:`${5+i*17}%`, animation:`float ${4+i}s ease-in-out infinite`, animationDelay:`${i*0.8}s`}}>🐾</div>
// //           ))}
// //         </div>

// //         {/* Background image with overlay */}
// //         <div className="absolute inset-0 z-0">
// //           <img src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1920&h=1080&fit=crop&q=80" alt="" className="w-full h-full object-cover opacity-20" />
// //           <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, transparent 40%, #001a3d 100%)'}} />
// //         </div>

// //         <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
// //           {/* Pill badge */}
// //           <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-[#ffd100]/30 bg-[#ffd100]/10 backdrop-blur-sm">
// //             <span className="relative w-2 h-2 flex-shrink-0">
// //               <span className="live-dot relative inline-flex w-2 h-2 rounded-full bg-[#ffd100]" />
// //             </span>
// //             <span className="text-[#ffd100] font-semibold tracking-widest text-xs uppercase">Since 2010 · Rajasthan</span>
// //           </div>

// //           <h1 className="display text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-6">
// //             Every Dog<br />
// //             <span style={{background:'linear-gradient(90deg, #ffd100, #ffec6e, #ffd100)', backgroundClip:'text', WebkitBackgroundClip:'text', color:'transparent'}}>
// //               Deserves Love
// //             </span>
// //           </h1>

// //           <p className="text-blue-200 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
// //             We rescue, rehabilitate, and rehome street dogs. Join us in creating a world where no tail stops wagging.
// //           </p>

// //           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
// //             <a href="/rehoming" className="btn-gold px-9 py-4 rounded-full font-bold text-base flex items-center gap-2 shadow-lg">
// //               Find a Friend <Heart size={18} fill="#002b5c" />
// //             </a>
// //             <a href="/donate" className="px-9 py-4 rounded-full font-semibold text-base text-white border border-white/30 backdrop-blur-sm hover:bg-white hover:text-[#002b5c] transition-all duration-300">
// //               Donate to Rescue
// //             </a>
// //           </div>

// //           {/* Stats strip */}
// //           <div className="mt-16 grid grid-cols-3 gap-0 max-w-lg mx-auto">
// //             {[['15K+','Rescues'],['8K+','Adoptions'],['50K+','Vaccinations']].map(([num, lbl], i) => (
// //               <div key={lbl} className={`text-center px-4 py-3 ${i < 2 ? 'border-r border-white/10' : ''}`}>
// //                 <div className="display text-3xl font-black text-[#ffd100]">{num}</div>
// //                 <div className="text-blue-300 text-xs font-medium uppercase tracking-wider mt-1">{lbl}</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Scroll indicator */}
// //         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
// //           <span className="text-white text-xs uppercase tracking-widest">Scroll</span>
// //           <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
// //         </div>
// //       </section>

// //       {/* ── MARQUEE TRUST BAR ───────────────────────────────────────────── */}
// //       <div className="bg-[#ffd100] py-3 overflow-hidden">
// //         <div className="flex marquee-track whitespace-nowrap gap-0">
// //           {[...Array(2)].map((_, r) => (
// //             <div key={r} className="flex gap-0">
// //               {['🐾 Rescuing Since 2010','❤️ 15,000+ Lives Saved','🏥 24/7 Emergency Response','💉 ABC Drives Across Rajasthan','🏠 8,000+ Successful Adoptions','🤝 Trusted by 200+ Societies'].map(item => (
// //                 <span key={item} className="text-[#002b5c] font-black text-sm px-10 uppercase tracking-wider border-r border-[#002b5c]/20 last:border-0">{item}</span>
// //               ))}
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* ── QUICK ACTIONS ───────────────────────────────────────────────── */}
// //       <section className="py-24 bg-white dotted-bg relative">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="text-center mb-14">
// //             <p className="text-[#ffd100] font-black uppercase tracking-widest text-xs mb-2">How You Can Help</p>
// //             <h2 className="display text-4xl md:text-5xl font-black text-[#002b5c]">Make a Difference<br /><span className="font-light italic">Today</span></h2>
// //           </div>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {[
// //               { icon: Heart, title: 'Adopt a Dog', desc: 'Give a rescue dog a loving forever home. Browse our dogs waiting for adoption.', link: '/adopt', cta: 'Find your match', accent: '#ffd100' },
// //               { icon: HeartPulse, title: 'Donate', desc: 'Your generosity helps us care for dogs and find them loving homes.', link: '/donate', cta: 'Make a donation', accent: '#f43f5e' },
// //               { icon: Users, title: 'Volunteer', desc: 'Join our team of dedicated volunteers and help make a real difference.', link: '/volunteer', cta: 'Get involved', accent: '#3b82f6' },
// //               { icon: ShieldCheck, title: 'Dog Care Tips', desc: 'Expert advice on training, health, and caring for your furry friend.', link: '/tips', cta: 'Learn more', accent: '#10b981' },
// //             ].map((card) => (
// //               <a key={card.title} href={card.link} className="card-lift group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-lg overflow-hidden block no-underline">
// //                 {/* Top accent line */}
// //                 <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{background:card.accent}} />
// //                 <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110" style={{background:`${card.accent}18`}}>
// //                   <card.icon size={26} style={{color:card.accent}} />
// //                 </div>
// //                 <h3 className="text-xl font-bold text-[#002b5c] mb-3">{card.title}</h3>
// //                 <p className="text-gray-500 text-sm mb-6 leading-relaxed min-h-[60px]">{card.desc}</p>
// //                 <div className="inline-flex items-center gap-2 font-bold text-sm transition-all duration-300 group-hover:gap-3" style={{color:card.accent}}>
// //                   {card.cta} <ArrowRight size={14} />
// //                 </div>
// //               </a>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── GALLERY ─────────────────────────────────────────────────────── */}
// //       <section ref={gallery.ref} className={`py-28 relative overflow-hidden reveal ${gallery.visible ? 'in' : ''}`} style={{background:'linear-gradient(160deg, #001628 0%, #002b5c 100%)'}}>
// //         <div className="pointer-events-none absolute inset-0">
// //           <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-10" style={{background:'radial-gradient(circle, #ffd100, transparent)', filter:'blur(100px)'}} />
// //           <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10" style={{background:'radial-gradient(circle, #60a5fa, transparent)', filter:'blur(80px)'}} />
// //         </div>

// //         <div className="max-w-7xl mx-auto px-6 relative z-10">
// //           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
// //             <div>
// //               <span className="inline-flex items-center gap-2 bg-[#ffd100]/15 text-[#ffd100] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-5 border border-[#ffd100]/20">
// //                 <Images size={13} /> Photo Stories
// //               </span>
// //               <h2 className="display text-4xl md:text-5xl font-black text-white mb-3">Stories in Frames</h2>
// //               <p className="text-blue-300 text-base max-w-md font-light">Every photo is a life changed — rescues, recoveries, and reunions from across Rajasthan.</p>
// //             </div>
// //             <a href="/gallery" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#ffd100]/50 text-[#ffd100] font-semibold text-sm hover:bg-[#ffd100] hover:text-[#002b5c] transition-all duration-300 backdrop-blur-sm">
// //               Full Gallery <ExternalLink size={15} />
// //             </a>
// //           </div>

// //           {/* Uniform gallery grid - all same height */}
// //           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
// //             {galleryImages.slice(0, 4).map((img, index) => (
// //               <button key={img.id} onClick={() => { setLightboxStart(index); setLightboxOpen(true); }}
// //                 className="gallery-card group relative rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd100] shadow-2xl"
// //                 style={{aspectRatio:'1/1', height:'260px', width:'100%'}}
// //                 aria-label={`Open: ${img.caption}`}>
// //                 <img src={img.thumb} alt={img.caption} className="gallery-img w-full h-full object-cover" loading="lazy" />
// //                 <div className="absolute inset-0" style={{background:'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)'}} />
// //                 {/* Category badge */}
// //                 <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-wider ${categoryColor[img.category]}`}>{img.category}</span>
// //                 {/* Hover zoom icon */}
// //                 <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-[#ffd100] group-hover:text-[#002b5c] transition-all duration-300 border border-white/20 group-hover:border-[#ffd100]">
// //                   <ZoomIn size={15} />
// //                 </div>
// //                 {/* Caption */}
// //                 <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
// //                   <p className="text-white text-sm font-semibold leading-snug">{img.caption}</p>
// //                   <span className="inline-flex items-center gap-1 mt-1.5 text-[#ffd100] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">View <ArrowRight size={11} /></span>
// //                 </div>
// //                 {/* Gold border on hover */}
// //                 <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#ffd100]/50 transition-all duration-300 pointer-events-none" />
// //               </button>
// //             ))}
// //           </div>

// //           <div className="mt-8 flex items-center justify-center gap-4">
// //             <div className="h-px flex-1 bg-white/10" />
// //             <span className="text-blue-400 text-xs font-medium">Showing 4 of {galleryImages.length} photos</span>
// //             <div className="h-px flex-1 bg-white/10" />
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── RWA SECTION ─────────────────────────────────────────────────── */}
// //       <section ref={rwa.ref} className={`py-28 bg-white relative overflow-hidden transition-all duration-1000 ${rwa.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
// //         {/* Decorative */}
// //         <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{background:'radial-gradient(circle, #ffd100, transparent)', filter:'blur(60px)'}} />

// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="text-center mb-16">
// //             <p className="text-[#ffd100] font-black uppercase tracking-widest text-xs mb-3">Community Harmony</p>
// //             <h2 className="display text-4xl md:text-5xl font-black text-[#002b5c] mb-5">
// //               Solutions for<br />
// //               <span className="italic font-light">Societies & RWAs</span>
// //             </h2>
// //             <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">Conflict resolution through scientific and legal methods. <strong className="text-[#002b5c] font-bold">Sterilization & Vaccination</strong> is the only humane answer.</p>
// //           </div>

// //           <div className="grid md:grid-cols-3 gap-6 items-stretch">
// //             {[
// //               { icon: Users, title: 'Conflict Mediation', desc: 'We send experts to talk to residents, explain dog behavior, and conduct safety workshops for children and housekeeping staff.', featured: false },
// //               { icon: Stethoscope, title: 'Sterilization (ABC)', desc: 'The only permanent solution. We catch, neuter, vaccinate, and release dogs back to the same spot (as per law) to stabilize the population.', featured: true, link: '/abc-drive' },
// //               { icon: Syringe, title: 'Mass Vaccination', desc: 'Protect your society from Rabies. We conduct annual 7-in-1 and Anti-Rabies vaccination drives for all community dogs.', featured: false },
// //             ].map((item) => item.featured ? (
// //               <div key={item.title} className="relative bg-[#002b5c] rounded-3xl p-10 shadow-2xl shadow-[#002b5c]/30 overflow-hidden border border-[#ffd100]/20 flex flex-col">
// //                 <div className="pointer-events-none absolute top-0 right-0 w-40 h-40 rounded-full opacity-20" style={{background:'radial-gradient(circle, #ffd100, transparent)', filter:'blur(40px)'}} />
// //                 <div className="w-16 h-16 bg-[#ffd100] rounded-2xl flex items-center justify-center text-[#002b5c] mb-7 shadow-lg shadow-[#ffd100]/30 flex-shrink-0">
// //                   <item.icon size={30} />
// //                 </div>
// //                 <h3 className="display text-2xl font-black text-white mb-4">{item.title}</h3>
// //                 <p className="text-blue-200 font-light leading-relaxed mb-8 flex-1">{item.desc}</p>
// //                 <a href={item.link} className="inline-flex items-center gap-2 text-[#ffd100] font-bold text-sm uppercase tracking-wide hover:gap-4 transition-all mt-auto">Request Drive <ArrowRight size={14} /></a>
// //               </div>
// //             ) : (
// //               <div key={item.title} className="bg-slate-50 rounded-3xl p-8 border-2 border-[#ffd100] shadow-lg flex flex-col">
// //                 <div className="w-14 h-14 bg-[#002b5c] rounded-2xl flex items-center justify-center text-[#ffd100] mb-6 flex-shrink-0">
// //                   <item.icon size={26} />
// //                 </div>
// //                 <h3 className="text-xl font-bold text-[#002b5c] mb-3">{item.title}</h3>
// //                 <p className="text-gray-500 font-light leading-relaxed flex-1">{item.desc}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── EMERGENCY SECTION ───────────────────────────────────────────── */}
// //       <section ref={emergency.ref} className={`py-28 bg-slate-50 relative overflow-hidden reveal ${emergency.visible ? 'in' : ''}`}>
// //         <div className="pointer-events-none absolute inset-0 dotted-bg opacity-50" />
// //         <div className="max-w-7xl mx-auto px-6 relative z-10">
// //           <div className="flex flex-col lg:flex-row gap-20 items-center">
// //             <div className="lg:w-1/2">
// //               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-xs font-bold mb-6 border border-red-100">
// //                 <span className="relative flex h-2 w-2 flex-shrink-0">
// //                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
// //                   <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
// //                 </span>
// //                 EMERGENCY RESPONSE
// //               </div>
// //               <h2 className="display text-4xl md:text-5xl font-black text-[#002b5c] mb-4 leading-tight">
// //                 Found an Injured Dog?
// //               </h2>
// //               <p className="text-gray-500 text-lg font-light mb-10">Here's exactly what to do — we respond within 45 minutes.</p>
// //               <div className="space-y-8">
// //                 {[
// //                   { num: '01', title: 'Share Location', desc: 'WhatsApp us a video and Google Location pin.' },
// //                   { num: '02', title: 'Triage', desc: 'Our vet assesses urgency. Ambulance dispatched for critical cases.' },
// //                   { num: '03', title: 'Treatment', desc: 'On-spot aid for minor wounds; Admission for surgeries.' },
// //                 ].map((step) => (
// //                   <div key={step.num} className="flex gap-5 step-line">
// //                     <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#002b5c] text-[#ffd100] flex items-center justify-center font-black text-sm border-2 border-[#ffd100]">
// //                       {step.num}
// //                     </div>
// //                     <div className="pt-2">
// //                       <h4 className="text-lg font-bold text-[#002b5c] mb-1">{step.title}</h4>
// //                       <p className="text-gray-500 font-light">{step.desc}</p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //               <a href="tel:+911234567890" className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-[#002b5c] text-white font-bold rounded-2xl shadow-xl shadow-[#002b5c]/20 hover:bg-[#001a3d] hover:-translate-y-1 transition-all duration-300">
// //                 <PhoneCall size={20} className="text-[#ffd100]" />
// //                 Call Helpline Now
// //               </a>
// //             </div>

// //             <div className="lg:w-1/2 relative">
// //               <div className="absolute inset-0 rounded-[2.5rem] translate-x-5 translate-y-5" style={{background:'linear-gradient(135deg, #ffd100, #ffec6e)'}} />
// //               <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[520px] border-4 border-white">
// //                 <img src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?w=800&q=80" alt="Vet treating dog" className="w-full h-full object-cover" loading="lazy" />
// //                 <div className="absolute inset-0" style={{background:'linear-gradient(to top, #002b5c 0%, transparent 50%)'}} />
// //                 <div className="absolute bottom-0 left-0 right-0 p-8">
// //                   <div className="flex items-center gap-4 text-white bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
// //                     <div className="w-12 h-12 bg-[#ffd100] rounded-xl flex items-center justify-center flex-shrink-0">
// //                       <ShieldCheck size={24} className="text-[#002b5c]" />
// //                     </div>
// //                     <div>
// //                       <p className="display font-black text-xl">15,000+ Rescues</p>
// //                       <p className="text-sm text-blue-200 font-light">Serving Rajasthan since 2010</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── LEGAL SECTION ───────────────────────────────────────────────── */}
// //       <section className="py-28 relative overflow-hidden noise" style={{background:'linear-gradient(150deg, #002b5c 0%, #001a3d 100%)'}}>
// //         <div className="pointer-events-none absolute inset-0">
// //           <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10" style={{background:'radial-gradient(circle, #ffd100, transparent)', filter:'blur(100px)'}} />
// //           <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15" style={{background:'radial-gradient(circle, #3b82f6, transparent)', filter:'blur(60px)'}} />
// //         </div>
// //         <div className="max-w-7xl mx-auto px-6 relative z-10">
// //           <div className="grid md:grid-cols-2 gap-16 items-center">
// //             <div>
// //               <div className="inline-block bg-[#ffd100] text-[#002b5c] px-3 py-1 rounded-lg text-xs font-black mb-5 tracking-widest uppercase">Legal Framework</div>
// //               <h2 className="display text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
// //                 Know Your Rights &<br /><span className="italic font-light text-blue-200">Responsibilities</span>
// //               </h2>
// //               <p className="text-blue-200 mb-10 text-base leading-relaxed font-light">Many conflicts happen due to misinformation. Under Indian Law (PCA Act 1960), it is illegal to relocate stray dogs. We educate communities on how to coexist peacefully.</p>
// //               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                 {[
// //                   { icon: Scale, title: 'No Relocation', desc: 'Supreme Court orders strictly ban displacing dogs.' },
// //                   { icon: AlertTriangle, title: 'Cruelty is Crime', desc: 'Harassing or beating animals is a punishable offense.' },
// //                 ].map(item => (
// //                   <div key={item.title} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
// //                     <item.icon className="text-[#ffd100] mb-4" size={26} />
// //                     <h4 className="font-bold text-lg text-white mb-2">{item.title}</h4>
// //                     <p className="text-sm text-blue-300 font-light">{item.desc}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             <div className="bg-white text-[#002b5c] p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
// //               <div className="pointer-events-none absolute top-0 right-0 w-40 h-40 opacity-5" style={{background:'radial-gradient(circle, #ffd100, transparent)'}} />
// //               <div className="absolute -top-3 -right-3 bg-[#ffd100] text-[#002b5c] font-black px-4 py-2 rounded-xl shadow-lg text-xs uppercase tracking-wider rotate-6">PDF Guide</div>
// //               <h3 className="display text-2xl font-black mb-8">Responsible Community Living</h3>
// //               <ul className="space-y-5">
// //                 {['Designate feeding spots away from high footfall areas.','Ensure all dogs are sterilized & vaccinated (ABC).','Do not act aggressive; dogs react to fear.','Cooperate with authorized feeders.'].map((item, i) => (
// //                   <li key={i} className="flex items-start gap-4">
// //                     <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#002b5c] text-white flex items-center justify-center text-xs font-black mt-0.5">✓</span>
// //                     <span className="text-gray-600 font-medium leading-relaxed">{item}</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //               <a href="/resources/awareness-poster.pdf" download className="block w-full mt-10 border-2 border-[#002b5c] text-[#002b5c] font-bold py-4 rounded-2xl hover:bg-[#002b5c] hover:text-white transition-all duration-300 text-center text-sm uppercase tracking-wide">
// //                 Download Awareness Poster
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
// //       <section ref={test.ref} className={`py-28 relative overflow-hidden reveal ${test.visible ? 'in' : ''}`} style={{background:'linear-gradient(160deg, #f8f9ff 0%, #eef1f8 100%)'}}>
// //         {/* Decorative blobs */}
// //         <div className="pointer-events-none absolute inset-0">
// //           <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.06]" style={{background:'radial-gradient(circle, #002b5c, transparent)', filter:'blur(80px)'}} />
// //           <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.08]" style={{background:'radial-gradient(circle, #ffd100, transparent)', filter:'blur(80px)'}} />
// //           <div className="absolute inset-0 dotted-bg opacity-40" />
// //         </div>

// //         <div className="max-w-7xl mx-auto px-6 relative z-10">
// //           {/* Header */}
// //           <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
// //             <div>
// //               <span className="inline-flex items-center gap-2 bg-[#002b5c] text-[#ffd100] px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-5">
// //                 <Heart size={13} fill="#ffd100" /> Real Stories
// //               </span>
// //               <h2 className="display text-4xl md:text-5xl font-black text-[#002b5c] leading-tight">
// //                 Voices of Our<br /><span className="italic font-light text-[#002b5c]/60">Community</span>
// //               </h2>
// //             </div>
// //             <div className="flex flex-col items-start md:items-end gap-3">
// //               <div className="inline-flex items-center gap-3 bg-white border border-slate-200 shadow-md rounded-2xl px-5 py-3">
// //                 <div className="flex gap-0.5">{Array.from({length:5}).map((_,i)=><Star key={i} size={16} className="text-amber-400 fill-amber-400"/>)}</div>
// //                 <span className="font-black text-[#002b5c]">4.9</span>
// //                 <span className="text-gray-400 text-sm font-light">/ 200+ Reviews</span>
// //               </div>
// //               <a href="/share-story" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-[#002b5c] text-[#002b5c] font-bold text-sm hover:bg-[#002b5c] hover:text-white transition-all duration-300">
// //                 Share Your Story <ArrowRight size={14} />
// //               </a>
// //             </div>
// //           </div>

// //           {/* Testimonial Cards - New Horizontal Stacked Design */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
// //             {testimonials.map((t, i) => (
// //               <div key={t.id} className={`relative rounded-3xl overflow-hidden flex flex-col shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${i === 0 ? 'md:col-span-2 xl:col-span-1' : ''}`}
// //                 style={{background: i % 3 === 1 ? '#002b5c' : 'white', border: i % 3 === 1 ? '1px solid rgba(255,209,0,0.3)' : '2px solid #f1f5f9'}}>
// //                 {/* Top color strip */}
// //                 <div className="h-1 w-full flex-shrink-0" style={{background:`linear-gradient(90deg, #ffd100, #ffec6e)`}} />
// //                 <div className="p-7 flex flex-col flex-1">
// //                   {/* Top row: tag + rating */}
// //                   <div className="flex items-center justify-between mb-5">
// //                     <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest ${i % 3 === 1 ? 'bg-[#ffd100] text-[#002b5c]' : tagStyles[t.tag]}`}>{t.tag}</span>
// //                     <StarRating count={t.rating} />
// //                   </div>
// //                   {/* Quote mark */}
// //                   <div className={`text-6xl font-black leading-none mb-2 ${i % 3 === 1 ? 'text-[#ffd100]/20' : 'text-[#002b5c]/08'}`} style={{fontFamily:'Georgia, serif', lineHeight:1}}>"</div>
// //                   {/* Text */}
// //                   <p className={`text-sm leading-relaxed flex-1 font-light mb-6 ${i % 3 === 1 ? 'text-blue-100' : 'text-gray-500'}`}>{t.text}</p>
// //                   {/* Dog chip if present */}
// //                   {t.dogName && t.dogImage && (
// //                     <div className={`flex items-center gap-3 rounded-2xl px-4 py-2.5 w-fit mb-5 ${i % 3 === 1 ? 'bg-white/10 border border-white/10' : 'bg-[#ffd100]/10 border border-[#ffd100]/30'}`}>
// //                       <img src={t.dogImage} alt={t.dogName} className="w-8 h-8 rounded-full object-cover ring-2 ring-[#ffd100]" loading="lazy" />
// //                       <div>
// //                         <p className={`text-xs font-bold ${i % 3 === 1 ? 'text-[#ffd100]' : 'text-[#002b5c]'}`}>{t.dogName}</p>
// //                         <p className={`text-[10px] ${i % 3 === 1 ? 'text-blue-300' : 'text-gray-400'}`}>Rescued & Rehomed ✓</p>
// //                       </div>
// //                     </div>
// //                   )}
// //                   {/* Author */}
// //                   <div className={`flex items-center gap-3 pt-5 border-t mt-auto ${i % 3 === 1 ? 'border-white/10' : 'border-slate-100'}`}>
// //                     <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-[#ffd100]" loading="lazy" />
// //                     <div>
// //                       <p className={`font-bold text-sm ${i % 3 === 1 ? 'text-white' : 'text-[#002b5c]'}`}>{t.name}</p>
// //                       <p className={`text-xs font-light ${i % 3 === 1 ? 'text-blue-300' : 'text-gray-400'}`}>{t.role} · {t.location}</p>
// //                     </div>
// //                     {/* Location pin */}
// //                     <span className={`ml-auto text-xs px-2 py-1 rounded-lg font-medium ${i % 3 === 1 ? 'bg-white/10 text-blue-200' : 'bg-slate-100 text-gray-500'}`}>📍 {t.location}</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Mobile nav dots */}
// //           <div className="md:hidden flex items-center justify-center gap-4 mt-6">
// //             <button onClick={prevTest} className="w-10 h-10 rounded-full border-2 border-[#002b5c] text-[#002b5c] flex items-center justify-center hover:bg-[#002b5c] hover:text-white transition-colors" aria-label="Previous"><ChevronLeft size={18}/></button>
// //             <div className="flex gap-2">
// //               {testimonials.map((_,i)=><button key={i} onClick={()=>setActiveTestIdx(i)} className={`h-2 rounded-full transition-all duration-300 ${i===activeTestIdx?'w-7 bg-[#002b5c]':'w-2 bg-gray-300'}`} />)}
// //             </div>
// //             <button onClick={nextTest} className="w-10 h-10 rounded-full border-2 border-[#002b5c] text-[#002b5c] flex items-center justify-center hover:bg-[#002b5c] hover:text-white transition-colors" aria-label="Next"><ChevronRight size={18}/></button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── DONATION CTA ────────────────────────────────────────────────── */}
// //       <section className="relative py-28 overflow-hidden" style={{background:'linear-gradient(135deg, #ffd100 0%, #ffec6e 50%, #ffd100 100%)'}}>
// //         <div className="pointer-events-none absolute inset-0">
// //           <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{backgroundImage:'radial-gradient(circle at 20% 50%, #002b5c 1px, transparent 1px), radial-gradient(circle at 80% 50%, #002b5c 1px, transparent 1px)', backgroundSize:'30px 30px'}} />
// //           <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20" style={{background:'radial-gradient(circle, #002b5c, transparent)', filter:'blur(40px)'}} />
// //         </div>
// //         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
// //           <p className="font-black text-[#002b5c]/50 uppercase tracking-widest text-xs mb-4">Make an Impact</p>
// //           <h2 className="display text-4xl md:text-6xl font-black text-[#002b5c] mb-6 leading-tight">We Run on<br /><span className="italic font-light">Compassion</span></h2>
// //           <p className="text-[#002b5c]/70 text-lg mb-12 font-light max-w-2xl mx-auto leading-relaxed">We do not sell dogs. We do not charge for rescues. Your donation buys bandages, vaccines, and food for the voiceless.</p>
// //           <div className="flex flex-col sm:flex-row justify-center gap-4">
// //             <a href="/donate" className="bg-[#002b5c] text-white px-10 py-5 rounded-2xl font-bold text-base hover:bg-[#001a3d] shadow-2xl shadow-[#002b5c]/30 transition-all hover:-translate-y-1">
// //               Donate Now
// //             </a>
// //             <a href="/volunteer" className="bg-white/40 border-2 border-[#002b5c] text-[#002b5c] px-10 py-5 rounded-2xl font-bold text-base hover:bg-[#002b5c] hover:text-white hover:border-[#002b5c] transition-all hover:-translate-y-1 backdrop-blur-sm">
// //               Become a Volunteer
// //             </a>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ── LIGHTBOX ────────────────────────────────────────────────────── */}
// //       {lightboxOpen && <Lightbox images={galleryImages} startIndex={lightboxStart} onClose={() => setLightboxOpen(false)} />}
// //     </>
// //   );
// // };

// // export default HomePage;







// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import {
//   Users, Stethoscope, Syringe, CheckCircle2, PhoneCall, HeartPulse,
//   Scale, AlertTriangle, ArrowRight, Heart, ShieldCheck, Star, Quote,
//   ChevronLeft, ChevronRight, X, ZoomIn, Images, ExternalLink,
// } from 'lucide-react';

// // ─────────────────────────────────────────────────────────────────────────────
// // TYPES & DATA (same as original)
// // ─────────────────────────────────────────────────────────────────────────────

// const galleryImages = [
//   { id: 1, src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=420&fit=crop', caption: 'Street dogs playing together in Jaipur', category: 'Rescue' },
//   { id: 2, src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=420&fit=crop', caption: 'Bruno — adopted after 3 months in shelter', category: 'Adoption' },
//   { id: 3, src: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=600&h=420&fit=crop', caption: 'Moti recovering after emergency surgery', category: 'Medical' },
//   { id: 4, src: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600&h=420&fit=crop', caption: 'Coco in her forever home — Ajmer', category: 'Adoption' },
//   { id: 5, src: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=600&h=420&fit=crop', caption: 'Community feeding drive — Jodhpur', category: 'Community' },
//   { id: 6, src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=420&fit=crop', caption: 'Vaccination drive at Udaipur society', category: 'Medical' },
//   { id: 7, src: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=420&fit=crop', caption: 'Rescue team on field — Bikaner', category: 'Rescue' },
//   { id: 8, src: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&h=420&fit=crop', caption: 'Happy tails — adoption success stories', category: 'Adoption' },
// ];

// const testimonials = [
//   { id: 1, name: 'Priya Sharma', role: 'Dog Adopter', location: 'Jaipur', avatar: 'https://i.pravatar.cc/150?img=47', rating: 5, text: 'Adopting Bruno was the best decision of my life. The team guided me through every step — health check to home adjustment. He was vaccinated, sterilized, and full of love!', dogName: 'Bruno', dogImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop', tag: 'Adopter' },
//   { id: 2, name: 'Rahul Meena', role: 'Weekend Volunteer', location: 'Jodhpur', avatar: 'https://i.pravatar.cc/150?img=12', rating: 5, text: 'I have been volunteering for 2 years. The community here is incredible. Every feeding drive, every rescue — I leave feeling like I actually made a difference.', tag: 'Volunteer' },
//   { id: 3, name: 'Sunita & Vikram Patel', role: 'Monthly Donors', location: 'Udaipur', avatar: 'https://i.pravatar.cc/150?img=33', rating: 5, text: 'We donate every month and the team sends photo updates. The transparency of this organization is unmatched. Our money truly goes to the dogs.', tag: 'Donor' },
//   { id: 4, name: 'Amit Joshi', role: 'Emergency Rescuer', location: 'Kota', avatar: 'https://i.pravatar.cc/150?img=59', rating: 5, text: 'I reported an injured dog at 11 PM. Within 45 minutes a volunteer arrived. The dog had surgery next morning and is now recovering. Incredible response time!', dogName: 'Moti', dogImage: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=200&h=200&fit=crop', tag: 'Rescuer' },
//   { id: 5, name: 'Kavya Rathore', role: 'Foster Parent', location: 'Ajmer', avatar: 'https://i.pravatar.cc/150?img=25', rating: 5, text: 'Fostering Coco for three weeks was emotional — but the support was constant. Medicines, food, vet consultations all arranged. She found her forever home!', dogName: 'Coco', dogImage: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=200&h=200&fit=crop', tag: 'Adopter' },
//   { id: 6, name: 'Deepak Singh', role: 'RWA Secretary', location: 'Bikaner', avatar: 'https://i.pravatar.cc/150?img=68', rating: 4, text: 'Our society had constant complaints about stray dogs. After the ABC drive and resident workshop, conflicts reduced by 80%. The only humane solution that actually works.', tag: 'Volunteer' },
// ];

// const tagStyles = { Adopter: 'bg-emerald-100 text-emerald-700', Volunteer: 'bg-sky-100 text-sky-700', Donor: 'bg-violet-100 text-violet-700', Rescuer: 'bg-rose-100 text-rose-700' };
// const categoryColor = { Rescue: 'bg-rose-500', Adoption: 'bg-emerald-500', Medical: 'bg-sky-500', Community: 'bg-amber-500' };

// // ─────────────────────────────────────────────────────────────────────────────
// // STAR RATING
// // ─────────────────────────────────────────────────────────────────────────────
// const StarRating = ({ count }) => (
//   <div className="flex gap-0.5">
//     {Array.from({ length: 5 }).map((_, i) => (
//       <Star key={i} size={13} className={i < count ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'} />
//     ))}
//   </div>
// );

// // ─────────────────────────────────────────────────────────────────────────────
// // TESTIMONIAL CARD
// // ─────────────────────────────────────────────────────────────────────────────
// const TestimonialCard = ({ t, featured = false }) => (
//   <article className={`group relative flex flex-col rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 ${featured ? 'bg-[#002b5c] text-white shadow-2xl shadow-[#002b5c]/30 md:-translate-y-5 border border-[#ffd100]/30' : 'bg-white border border-slate-100 shadow-lg hover:shadow-2xl hover:border-[#ffd100]/40'}`}>
//     <Quote size={52} className={`absolute top-5 right-5 opacity-[0.07] ${featured ? 'text-[#ffd100]' : 'text-[#002b5c]'}`} />
//     <span className={`mb-4 self-start rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest ${featured ? 'bg-[#ffd100] text-[#002b5c]' : tagStyles[t.tag]}`}>{t.tag}</span>
//     <StarRating count={t.rating} />
//     <p className={`mt-4 mb-6 text-sm leading-relaxed flex-1 font-light ${featured ? 'text-blue-100' : 'text-gray-500'}`}>"{t.text}"</p>
//     {t.dogName && t.dogImage && (
//       <div className={`mb-5 flex items-center gap-3 rounded-2xl px-4 py-3 w-fit ${featured ? 'bg-white/10 border border-white/10' : 'bg-slate-50 border border-slate-100'}`}>
//         <img src={t.dogImage} alt={t.dogName} className="w-10 h-10 rounded-full object-cover ring-2 ring-[#ffd100]" loading="lazy" />
//         <div>
//           <p className={`text-xs font-bold ${featured ? 'text-[#ffd100]' : 'text-[#002b5c]'}`}>{t.dogName}</p>
//           <p className={`text-[10px] ${featured ? 'text-blue-300' : 'text-gray-400'}`}>Rescued & Rehomed ✓</p>
//         </div>
//       </div>
//     )}
//     <div className={`flex items-center gap-3 mt-auto pt-5 border-t ${featured ? 'border-white/10' : 'border-slate-100'}`}>
//       <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-[#ffd100]" loading="lazy" />
//       <div>
//         <p className={`font-bold text-sm ${featured ? 'text-white' : 'text-[#002b5c]'}`}>{t.name}</p>
//         <p className={`text-xs ${featured ? 'text-blue-300' : 'text-gray-400'}`}>{t.role} · {t.location}</p>
//       </div>
//     </div>
//   </article>
// );

// // ─────────────────────────────────────────────────────────────────────────────
// // LIGHTBOX
// // ─────────────────────────────────────────────────────────────────────────────
// const Lightbox = ({ images, startIndex, onClose }) => {
//   const [current, setCurrent] = useState(startIndex);
//   const [loaded, setLoaded] = useState(false);
//   const prev = useCallback(() => { setLoaded(false); setCurrent(i => (i - 1 + images.length) % images.length); }, [images.length]);
//   const next = useCallback(() => { setLoaded(false); setCurrent(i => (i + 1) % images.length); }, [images.length]);
//   useEffect(() => {
//     const h = e => { if (e.key === 'ArrowLeft') prev(); if (e.key === 'ArrowRight') next(); if (e.key === 'Escape') onClose(); };
//     window.addEventListener('keydown', h);
//     document.body.style.overflow = 'hidden';
//     return () => { window.removeEventListener('keydown', h); document.body.style.overflow = ''; };
//   }, [prev, next, onClose]);
//   const img = images[current];
//   return (
//     <div className="fixed inset-0 z-[9999] flex flex-col bg-black/95 backdrop-blur-md" role="dialog" aria-modal="true">
//       <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 flex-shrink-0">
//         <div className="flex items-center gap-3">
//           <Images size={18} className="text-[#ffd100]" />
//           <span className="text-white font-bold">Our Gallery</span>
//           <span className="text-gray-500 text-sm">{current + 1} / {images.length}</span>
//         </div>
//         <div className="hidden md:flex items-center gap-2 overflow-x-auto max-w-xl">
//           {images.map((im, i) => (
//             <button key={im.id} onClick={() => { setLoaded(false); setCurrent(i); }} className={`flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${i === current ? 'border-[#ffd100] scale-110' : 'border-white/10 opacity-40 hover:opacity-80'}`}>
//               <img src={im.thumb} alt="" className="w-full h-full object-cover" loading="lazy" />
//             </button>
//           ))}
//         </div>
//         <button onClick={onClose} className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/15 transition-all"><X size={18} /></button>
//       </div>
//       <div className="relative flex-1 flex items-center justify-center overflow-hidden px-16">
//         <button onClick={prev} className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#ffd100] hover:text-[#002b5c] hover:border-[#ffd100] transition-all"><ChevronLeft size={22} /></button>
//         <div className="relative max-w-5xl w-full flex items-center justify-center">
//           {!loaded && <div className="absolute inset-0 flex items-center justify-center"><div className="w-12 h-12 border-3 border-[#ffd100]/30 border-t-[#ffd100] rounded-full animate-spin" /></div>}
//           <img key={img.id} src={img.src} alt={img.caption} onLoad={() => setLoaded(true)} className={`max-h-[68vh] max-w-full object-contain rounded-2xl shadow-2xl transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
//         </div>
//         <button onClick={next} className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#ffd100] hover:text-[#002b5c] hover:border-[#ffd100] transition-all"><ChevronRight size={22} /></button>
//       </div>
//       <div className="flex-shrink-0 px-6 py-4 border-t border-white/10">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <span className={`w-2 h-2 rounded-full flex-shrink-0 ${categoryColor[img.category] ?? 'bg-gray-400'}`} />
//             <p className="text-white text-sm font-medium">{img.caption}</p>
//             <span className={`px-2 py-0.5 rounded-full text-white text-[10px] font-bold uppercase ${categoryColor[img.category] ?? 'bg-gray-600'}`}>{img.category}</span>
//           </div>
//           <p className="hidden sm:block text-gray-600 text-xs">← → to navigate · Esc to close</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ─────────────────────────────────────────────────────────────────────────────
// // SCROLL REVEAL HOOK
// // ─────────────────────────────────────────────────────────────────────────────
// function useReveal(threshold = 0.1) {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     const el = ref.current; if (!el) return;
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return { ref, visible };
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // TESTIMONIALS SLIDER COMPONENT
// // ─────────────────────────────────────────────────────────────────────────────

// const CARDS_PER_VIEW_DESKTOP = 3; // show 3 at a time on desktop
// const TOTAL = testimonials.length;

// const TestimonialsSlider = ({ revealRef, isVisible }) => {
//   const [current, setCurrent] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [paused, setPaused] = useState(false);
//   const timerRef = useRef(null);

//   const goTo = useCallback((idx) => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrent(idx);
//     setTimeout(() => setIsAnimating(false), 600);
//   }, [isAnimating]);

//   const prev = useCallback(() => goTo((current - 1 + TOTAL) % TOTAL), [current, goTo]);
//   const next = useCallback(() => goTo((current + 1) % TOTAL), [current, goTo]);

//   // Auto-play
//   useEffect(() => {
//     if (paused) return;
//     timerRef.current = setInterval(() => {
//       setCurrent(c => (c + 1) % TOTAL);
//     }, 4500);
//     return () => clearInterval(timerRef.current);
//   }, [paused]);

//   // Keyboard
//   useEffect(() => {
//     const h = e => { if (e.key === 'ArrowLeft') prev(); if (e.key === 'ArrowRight') next(); };
//     window.addEventListener('keydown', h);
//     return () => window.removeEventListener('keydown', h);
//   }, [prev, next]);

//   // Desktop: show 3 cards, center card is active
//   const getDesktopCards = () => {
//     const indices = [];
//     for (let i = -1; i <= 1; i++) {
//       indices.push((current + i + TOTAL) % TOTAL);
//     }
//     return indices;
//   };

//   const desktopCards = getDesktopCards();

//   return (
//     <section
//       ref={revealRef}
//       className={`py-28 relative overflow-hidden reveal ${isVisible ? 'in' : ''}`}
//       style={{background:'linear-gradient(160deg, #001628 0%, #002b5c 100%)'}}
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//     >
//       {/* BG decoration */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-10" style={{background:'radial-gradient(circle, #ffd100, transparent)', filter:'blur(100px)'}} />
//         <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-10" style={{background:'radial-gradient(circle, #60a5fa, transparent)', filter:'blur(80px)'}} />
//         {/* subtle grid lines */}
//         <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize:'60px 60px'}} />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">

//         {/* Header row */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
//           <div>
//             <span className="inline-flex items-center gap-2 bg-[#ffd100]/15 text-[#ffd100] border border-[#ffd100]/25 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-5">
//               <Heart size={13} fill="#ffd100" /> Real Stories
//             </span>
//             <h2 className="display text-4xl md:text-5xl font-black text-white leading-tight">
//               Voices of Our<br />
//               <span className="italic font-light" style={{color:'rgba(255,209,0,0.7)'}}>Community</span>
//             </h2>
//           </div>
//           <div className="flex flex-col items-start md:items-end gap-4">
//             <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-5 py-3">
//               <div className="flex gap-0.5">{Array.from({length:5}).map((_,i)=><Star key={i} size={15} className="text-amber-400 fill-amber-400"/>)}</div>
//               <span className="font-black text-white">4.9</span>
//               <span className="text-blue-300 text-sm font-light">/ 200+ Reviews</span>
//             </div>
//             <a href="/share-story" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#ffd100]/50 text-[#ffd100] font-bold text-sm hover:bg-[#ffd100] hover:text-[#002b5c] transition-all duration-300">
//               Share Your Story <ArrowRight size={14} />
//             </a>
//           </div>
//         </div>

//         {/* ── DESKTOP SLIDER (3 cards visible) ── */}
//         <div className="hidden md:block relative">
//           <div className="flex items-center gap-5 justify-center" style={{minHeight:'420px'}}>
//             {desktopCards.map((tIdx, pos) => {
//               const t = testimonials[tIdx];
//               const isCenter = pos === 1;
//               return (
//                 <div
//                   key={`${tIdx}-${pos}`}
//                   className="relative flex flex-col rounded-3xl overflow-hidden flex-shrink-0 transition-all duration-700"
//                   style={{
//                     width: isCenter ? '420px' : '300px',
//                     opacity: isCenter ? 1 : 0.5,
//                     transform: isCenter ? 'scale(1) translateY(0)' : pos === 0 ? 'scale(0.92) translateX(20px)' : 'scale(0.92) translateX(-20px)',
//                     background: isCenter ? '#ffd100' : 'rgba(255,255,255,0.06)',
//                     border: isCenter ? 'none' : '1px solid rgba(255,255,255,0.1)',
//                     boxShadow: isCenter ? '0 30px 70px rgba(255,209,0,0.3)' : 'none',
//                     zIndex: isCenter ? 10 : 1,
//                     filter: isCenter ? 'none' : 'blur(1px)',
//                     pointerEvents: isCenter ? 'auto' : 'none',
//                   }}
//                 >
//                   <div className="p-8 flex flex-col h-full">
//                     {/* Top */}
//                     <div className="flex items-center justify-between mb-5">
//                       <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest ${isCenter ? 'bg-[#002b5c] text-[#ffd100]' : 'bg-white/10 text-white'}`}>{t.tag}</span>
//                       <div className="flex gap-0.5">
//                         {Array.from({length:5}).map((_,i)=>(
//                           <Star key={i} size={12} className={i < t.rating ? (isCenter ? 'text-[#002b5c] fill-[#002b5c]' : 'text-amber-400 fill-amber-400') : 'text-gray-300 fill-gray-300'} />
//                         ))}
//                       </div>
//                     </div>
//                     {/* Big quote */}
//                     <div className="text-7xl font-black mb-1 leading-none select-none" style={{fontFamily:'Georgia,serif', color: isCenter ? 'rgba(0,43,92,0.15)' : 'rgba(255,255,255,0.1)', lineHeight:0.8}}>"</div>
//                     {/* Text */}
//                     <p className={`text-sm leading-relaxed flex-1 mb-6 ${isCenter ? 'text-[#002b5c] font-medium' : 'text-white/70 font-light'}`}>{t.text}</p>
//                     {/* Dog chip */}
//                     {t.dogName && t.dogImage && (
//                       <div className={`flex items-center gap-3 rounded-2xl px-4 py-2.5 w-fit mb-5 ${isCenter ? 'bg-[#002b5c]/10' : 'bg-white/10'}`}>
//                         <img src={t.dogImage} alt={t.dogName} className="w-8 h-8 rounded-full object-cover ring-2 ring-[#002b5c]" loading="lazy" />
//                         <div>
//                           <p className={`text-xs font-bold ${isCenter ? 'text-[#002b5c]' : 'text-white'}`}>{t.dogName}</p>
//                           <p className={`text-[10px] ${isCenter ? 'text-[#002b5c]/60' : 'text-white/50'}`}>Rescued & Rehomed ✓</p>
//                         </div>
//                       </div>
//                     )}
//                     {/* Author */}
//                     <div className={`flex items-center gap-3 pt-5 border-t ${isCenter ? 'border-[#002b5c]/15' : 'border-white/10'}`}>
//                       <img src={t.avatar} alt={t.name} className={`w-11 h-11 rounded-full object-cover ring-2 ${isCenter ? 'ring-[#002b5c]/30' : 'ring-[#ffd100]/50'}`} loading="lazy" />
//                       <div>
//                         <p className={`font-bold text-sm ${isCenter ? 'text-[#002b5c]' : 'text-white'}`}>{t.name}</p>
//                         <p className={`text-xs ${isCenter ? 'text-[#002b5c]/60' : 'text-white/50'}`}>{t.role}</p>
//                       </div>
//                       <span className={`ml-auto text-[10px] px-2.5 py-1 rounded-lg font-bold ${isCenter ? 'bg-[#002b5c]/10 text-[#002b5c]' : 'bg-white/10 text-white/60'}`}>📍 {t.location}</span>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Prev/Next buttons */}
//           <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-14 h-14 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#ffd100] hover:text-[#002b5c] hover:border-[#ffd100] transition-all duration-300 backdrop-blur-sm z-20" aria-label="Previous">
//             <ChevronLeft size={24} />
//           </button>
//           <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-14 h-14 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#ffd100] hover:text-[#002b5c] hover:border-[#ffd100] transition-all duration-300 backdrop-blur-sm z-20" aria-label="Next">
//             <ChevronRight size={24} />
//           </button>
//         </div>

//         {/* ── MOBILE SLIDER (1 card) ── */}
//         <div className="md:hidden relative overflow-hidden rounded-3xl">
//           <div
//             className="flex transition-transform duration-600 ease-in-out"
//             style={{transform:`translateX(-${current * 100}%)`, transitionDuration:'600ms'}}
//           >
//             {testimonials.map((t, i) => (
//               <div key={t.id} className="min-w-full flex-shrink-0 px-1">
//                 <div className="rounded-3xl overflow-hidden" style={{background:'#ffd100'}}>
//                   <div className="p-7 flex flex-col">
//                     <div className="flex items-center justify-between mb-5">
//                       <span className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-[#002b5c] text-[#ffd100]">{t.tag}</span>
//                       <div className="flex gap-0.5">{Array.from({length:5}).map((_,si)=><Star key={si} size={13} className={si < t.rating ? 'text-[#002b5c] fill-[#002b5c]' : 'text-gray-300 fill-gray-300'}/>)}</div>
//                     </div>
//                     <div className="text-6xl font-black mb-1 text-[#002b5c]/10" style={{fontFamily:'Georgia,serif',lineHeight:0.8}}>"</div>
//                     <p className="text-sm leading-relaxed text-[#002b5c] font-medium mb-6 flex-1">{t.text}</p>
//                     {t.dogName && t.dogImage && (
//                       <div className="flex items-center gap-3 rounded-2xl px-4 py-2.5 w-fit mb-5 bg-[#002b5c]/10">
//                         <img src={t.dogImage} alt={t.dogName} className="w-8 h-8 rounded-full object-cover ring-2 ring-[#002b5c]" loading="lazy" />
//                         <div>
//                           <p className="text-xs font-bold text-[#002b5c]">{t.dogName}</p>
//                           <p className="text-[10px] text-[#002b5c]/60">Rescued & Rehomed ✓</p>
//                         </div>
//                       </div>
//                     )}
//                     <div className="flex items-center gap-3 pt-5 border-t border-[#002b5c]/15">
//                       <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-[#002b5c]/30" loading="lazy" />
//                       <div>
//                         <p className="font-bold text-sm text-[#002b5c]">{t.name}</p>
//                         <p className="text-xs text-[#002b5c]/60">{t.role} · {t.location}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ── DOT NAVIGATION + ARROWS (both desktop & mobile) ── */}
//         <div className="flex items-center justify-center gap-6 mt-10">
//           <button onClick={prev} className="md:hidden w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#ffd100] hover:text-[#002b5c] transition-all" aria-label="Previous">
//             <ChevronLeft size={20} />
//           </button>
//           {/* Dot indicators */}
//           <div className="flex items-center gap-2">
//             {testimonials.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => goTo(i)}
//                 className="transition-all duration-400 rounded-full"
//                 style={{
//                   width: i === current ? '32px' : '8px',
//                   height: '8px',
//                   background: i === current ? '#ffd100' : 'rgba(255,255,255,0.25)',
//                   transitionDuration: '400ms',
//                 }}
//                 aria-label={`Go to testimonial ${i + 1}`}
//               />
//             ))}
//           </div>
//           <button onClick={next} className="md:hidden w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#ffd100] hover:text-[#002b5c] transition-all" aria-label="Next">
//             <ChevronRight size={20} />
//           </button>
//         </div>

//         {/* Auto-play progress bar */}
//         <div className="mt-6 max-w-xs mx-auto h-0.5 bg-white/10 rounded-full overflow-hidden">
//           <div
//             className="h-full bg-[#ffd100] rounded-full"
//             style={{
//               width: `${((current + 1) / TOTAL) * 100}%`,
//               transition: paused ? 'none' : 'width 4.5s linear',
//             }}
//           />
//         </div>
//         <p className="text-center text-blue-400/60 text-xs mt-3 font-light">{current + 1} / {TOTAL} · Hover to pause</p>
//       </div>
//     </section>
//   );
// };

// // ─────────────────────────────────────────────────────────────────────────────
// // MAIN PAGE
// // ─────────────────────────────────────────────────────────────────────────────
// const HomePage = () => {
//   const rwa = useReveal();
//   const emergency = useReveal();
//   const test = useReveal();
//   const gallery = useReveal();
//   const [activeTestIdx, setActiveTestIdx] = useState(0);
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [lightboxStart, setLightboxStart] = useState(0);
//   const prevTest = useCallback(() => setActiveTestIdx(i => (i - 1 + testimonials.length) % testimonials.length), []);
//   const nextTest = useCallback(() => setActiveTestIdx(i => (i + 1) % testimonials.length), []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
//         :root { --navy:#002b5c; --gold:#ffd100; --gold-light:#fff3b0; }
//         *, *::before, *::after { box-sizing: border-box; }
//         html, body { font-family:'DM Sans', sans-serif; color:var(--navy); overflow-x:hidden; margin:0; }
//         .display { font-family:'Playfair Display', Georgia, serif; }
        
//         /* Reveal Animations */
//         .reveal { opacity:0; transform:translateY(40px); transition:opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1); }
//         .reveal.in { opacity:1; transform:translateY(0); }
//         .reveal-scale { opacity:0; transform:scale(0.94); transition:opacity 0.8s ease, transform 0.8s ease; }
//         .reveal-scale.in { opacity:1; transform:scale(1); }

//         /* Hero particles */
//         @keyframes float { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-20px) rotate(180deg)} }
//         @keyframes drift { 0%{transform:translateX(0)} 100%{transform:translateX(100vw)} }
//         @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(1.8);opacity:0} }
//         @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
//         @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        
//         .marquee-track { animation: marquee 20s linear infinite; }
//         .marquee-track:hover { animation-play-state: paused; }

//         /* Gold shimmer button */
//         .btn-gold {
//           position:relative; overflow:hidden;
//           background:var(--gold); color:var(--navy);
//           background-image: linear-gradient(105deg, var(--gold) 40%, #fffacc 50%, var(--gold) 60%);
//           background-size:200% 100%;
//           transition: background-position 0.4s ease, transform 0.2s, box-shadow 0.2s;
//         }
//         .btn-gold:hover { background-position:100% 0; transform:translateY(-2px); box-shadow:0 12px 32px rgba(255,209,0,0.4); }

//         /* Card hover lift */
//         .card-lift { transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease; }
//         .card-lift:hover { transform:translateY(-8px); box-shadow:0 24px 50px rgba(0,43,92,0.12); }

//         /* Gallery image zoom */
//         .gallery-img { transition:transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); }
//         .gallery-card:hover .gallery-img { transform:scale(1.1); }

//         /* Dotted background */
//         .dotted-bg { background-image:radial-gradient(circle, rgba(0,43,92,0.08) 1px, transparent 1px); background-size:28px 28px; }

//         /* Noise texture overlay */
//         .noise::after { content:''; position:absolute; inset:0; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E"); pointer-events:none; }

//         /* Pulsing dot */
//         .live-dot::before { content:''; position:absolute; inset:0; border-radius:50%; background:currentColor; animation:pulse-ring 1.5s ease-out infinite; }

//         /* Step connector line */
//         .step-line { position:relative; }
//         .step-line:not(:last-child)::after { content:''; position:absolute; left:22px; top:52px; bottom:-30px; width:2px; background:linear-gradient(to bottom, #002b5c30, transparent); }
//       `}</style>

//       {/* ── HERO ─────────────────────────────────────────────────────────── */}
//       <section className="relative w-full flex flex-col items-center justify-center overflow-hidden noise" style={{background:'linear-gradient(160deg, #001a3d 0%, #002b5c 50%, #00407a 100%)', minHeight:'100vh', marginTop:0, paddingTop:'80px', paddingBottom:'60px'}}>
//         {/* Decorative orbs */}
//         <div className="pointer-events-none absolute inset-0">
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20" style={{background:'radial-gradient(circle, #ffd100, transparent)', filter:'blur(80px)'}} />
//           <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10" style={{background:'radial-gradient(circle, #60a5fa, transparent)', filter:'blur(80px)'}} />
//           <div className="absolute top-10 right-10 w-40 h-40 rounded-full border border-white/5" />
//           <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full border border-[#ffd100]/10" />
//           {/* Floating paw prints */}
//           {[...Array(6)].map((_, i) => (
//             <div key={i} className="absolute text-white/5 text-5xl select-none" style={{top:`${10+i*15}%`, left:`${5+i*17}%`, animation:`float ${4+i}s ease-in-out infinite`, animationDelay:`${i*0.8}s`}}>🐾</div>
//           ))}
//         </div>

//         {/* Background image with overlay */}
//         <div className="absolute inset-0 z-0">
//           <img src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1920&h=1080&fit=crop&q=80" alt="" className="w-full h-full object-cover opacity-20" />
//           <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, transparent 40%, #001a3d 100%)'}} />
//         </div>

//         <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
//           {/* Pill badge */}
//           <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-[#ffd100]/30 bg-[#ffd100]/10 backdrop-blur-sm">
//             <span className="relative w-2 h-2 flex-shrink-0">
//               <span className="live-dot relative inline-flex w-2 h-2 rounded-full bg-[#ffd100]" />
//             </span>
//             <span className="text-[#ffd100] font-semibold tracking-widest text-xs uppercase">Since 2010 · Rajasthan</span>
//           </div>

//           <h1 className="display text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-6">
//             Every Dog<br />
//             <span style={{background:'linear-gradient(90deg, #ffd100, #ffec6e, #ffd100)', backgroundClip:'text', WebkitBackgroundClip:'text', color:'transparent'}}>
//               Deserves Love
//             </span>
//           </h1>

//           <p className="text-blue-200 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
//             We rescue, rehabilitate, and rehome street dogs. Join us in creating a world where no tail stops wagging.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <a href="/rehoming" className="btn-gold px-9 py-4 rounded-full font-bold text-base flex items-center gap-2 shadow-lg">
//               Find a Friend <Heart size={18} fill="#002b5c" />
//             </a>
//             <a href="/donate" className="px-9 py-4 rounded-full font-semibold text-base text-white border border-white/30 backdrop-blur-sm hover:bg-white hover:text-[#002b5c] transition-all duration-300">
//               Donate to Rescue
//             </a>
//           </div>

//           {/* Stats strip */}
//           <div className="mt-16 grid grid-cols-3 gap-0 max-w-lg mx-auto">
//             {[['15K+','Rescues'],['8K+','Adoptions'],['50K+','Vaccinations']].map(([num, lbl], i) => (
//               <div key={lbl} className={`text-center px-4 py-3 ${i < 2 ? 'border-r border-white/10' : ''}`}>
//                 <div className="display text-3xl font-black text-[#ffd100]">{num}</div>
//                 <div className="text-blue-300 text-xs font-medium uppercase tracking-wider mt-1">{lbl}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
//           <span className="text-white text-xs uppercase tracking-widest">Scroll</span>
//           <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
//         </div>
//       </section>

//       {/* ── MARQUEE TRUST BAR ───────────────────────────────────────────── */}
//       <div className="bg-[#ffd100] py-3 overflow-hidden">
//         <div className="flex marquee-track whitespace-nowrap gap-0">
//           {[...Array(2)].map((_, r) => (
//             <div key={r} className="flex gap-0">
//               {['🐾 Rescuing Since 2010','❤️ 15,000+ Lives Saved','🏥 24/7 Emergency Response','💉 ABC Drives Across Rajasthan','🏠 8,000+ Successful Adoptions','🤝 Trusted by 200+ Societies'].map(item => (
//                 <span key={item} className="text-[#002b5c] font-black text-sm px-10 uppercase tracking-wider border-r border-[#002b5c]/20 last:border-0">{item}</span>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── QUICK ACTIONS ───────────────────────────────────────────────── */}
//       <section className="py-24 bg-white dotted-bg relative">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-14">
//             <p className="text-[#ffd100] font-black uppercase tracking-widest text-xs mb-2">How You Can Help</p>
//             <h2 className="display text-4xl md:text-5xl font-black text-[#002b5c]">Make a Difference<br /><span className="font-light italic">Today</span></h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { icon: Heart, title: 'Adopt a Dog', desc: 'Give a rescue dog a loving forever home. Browse our dogs waiting for adoption.', link: '/adopt', cta: 'Find your match', accent: '#ffd100' },
//               { icon: HeartPulse, title: 'Donate', desc: 'Your generosity helps us care for dogs and find them loving homes.', link: '/donate', cta: 'Make a donation', accent: '#f43f5e' },
//               { icon: Users, title: 'Volunteer', desc: 'Join our team of dedicated volunteers and help make a real difference.', link: '/volunteer', cta: 'Get involved', accent: '#3b82f6' },
//               { icon: ShieldCheck, title: 'Dog Care Tips', desc: 'Expert advice on training, health, and caring for your furry friend.', link: '/tips', cta: 'Learn more', accent: '#10b981' },
//             ].map((card) => (
//               <a key={card.title} href={card.link} className="card-lift group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-lg overflow-hidden block no-underline">
//                 {/* Top accent line */}
//                 <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{background:card.accent}} />
//                 <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110" style={{background:`${card.accent}18`}}>
//                   <card.icon size={26} style={{color:card.accent}} />
//                 </div>
//                 <h3 className="text-xl font-bold text-[#002b5c] mb-3">{card.title}</h3>
//                 <p className="text-gray-500 text-sm mb-6 leading-relaxed min-h-[60px]">{card.desc}</p>
//                 <div className="inline-flex items-center gap-2 font-bold text-sm transition-all duration-300 group-hover:gap-3" style={{color:card.accent}}>
//                   {card.cta} <ArrowRight size={14} />
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── GALLERY ─────────────────────────────────────────────────────── */}
//       <section ref={gallery.ref} className={`py-28 relative overflow-hidden reveal ${gallery.visible ? 'in' : ''}`} style={{background:'linear-gradient(160deg, #001628 0%, #002b5c 100%)'}}>
//         <div className="pointer-events-none absolute inset-0">
//           <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-10" style={{background:'radial-gradient(circle, #ffd100, transparent)', filter:'blur(100px)'}} />
//           <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10" style={{background:'radial-gradient(circle, #60a5fa, transparent)', filter:'blur(80px)'}} />
//         </div>

//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
//             <div>
//               <span className="inline-flex items-center gap-2 bg-[#ffd100]/15 text-[#ffd100] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-5 border border-[#ffd100]/20">
//                 <Images size={13} /> Photo Stories
//               </span>
//               <h2 className="display text-4xl md:text-5xl font-black text-white mb-3">Stories in Frames</h2>
//               <p className="text-blue-300 text-base max-w-md font-light">Every photo is a life changed — rescues, recoveries, and reunions from across Rajasthan.</p>
//             </div>
//             <a href="/gallery" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#ffd100]/50 text-[#ffd100] font-semibold text-sm hover:bg-[#ffd100] hover:text-[#002b5c] transition-all duration-300 backdrop-blur-sm">
//               Full Gallery <ExternalLink size={15} />
//             </a>
//           </div>

//           {/* Uniform gallery grid - all same height */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//             {galleryImages.slice(0, 4).map((img, index) => (
//               <button key={img.id} onClick={() => { setLightboxStart(index); setLightboxOpen(true); }}
//                 className="gallery-card group relative rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd100] shadow-2xl"
//                 style={{aspectRatio:'1/1', height:'260px', width:'100%'}}
//                 aria-label={`Open: ${img.caption}`}>
//                 <img src={img.thumb} alt={img.caption} className="gallery-img w-full h-full object-cover" loading="lazy" />
//                 <div className="absolute inset-0" style={{background:'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)'}} />
//                 {/* Category badge */}
//                 <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-wider ${categoryColor[img.category]}`}>{img.category}</span>
//                 {/* Hover zoom icon */}
//                 <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-[#ffd100] group-hover:text-[#002b5c] transition-all duration-300 border border-white/20 group-hover:border-[#ffd100]">
//                   <ZoomIn size={15} />
//                 </div>
//                 {/* Caption */}
//                 <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
//                   <p className="text-white text-sm font-semibold leading-snug">{img.caption}</p>
//                   <span className="inline-flex items-center gap-1 mt-1.5 text-[#ffd100] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">View <ArrowRight size={11} /></span>
//                 </div>
//                 {/* Gold border on hover */}
//                 <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#ffd100]/50 transition-all duration-300 pointer-events-none" />
//               </button>
//             ))}
//           </div>

//           <div className="mt-8 flex items-center justify-center gap-4">
//             <div className="h-px flex-1 bg-white/10" />
//             <span className="text-blue-400 text-xs font-medium">Showing 4 of {galleryImages.length} photos</span>
//             <div className="h-px flex-1 bg-white/10" />
//           </div>
//         </div>
//       </section>

//       {/* ── RWA SECTION ─────────────────────────────────────────────────── */}
//       <section ref={rwa.ref} className={`py-28 bg-white relative overflow-hidden transition-all duration-1000 ${rwa.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//         {/* Decorative */}
//         <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{background:'radial-gradient(circle, #ffd100, transparent)', filter:'blur(60px)'}} />

//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <p className="text-[#ffd100] font-black uppercase tracking-widest text-xs mb-3">Community Harmony</p>
//             <h2 className="display text-4xl md:text-5xl font-black text-[#002b5c] mb-5">
//               Solutions for<br />
//               <span className="italic font-light">Societies & RWAs</span>
//             </h2>
//             <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">Conflict resolution through scientific and legal methods. <strong className="text-[#002b5c] font-bold">Sterilization & Vaccination</strong> is the only humane answer.</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6 items-stretch">
//             {[
//               { icon: Users, title: 'Conflict Mediation', desc: 'We send experts to talk to residents, explain dog behavior, and conduct safety workshops for children and housekeeping staff.', featured: false },
//               { icon: Stethoscope, title: 'Sterilization (ABC)', desc: 'The only permanent solution. We catch, neuter, vaccinate, and release dogs back to the same spot (as per law) to stabilize the population.', featured: true, link: '/abc-drive' },
//               { icon: Syringe, title: 'Mass Vaccination', desc: 'Protect your society from Rabies. We conduct annual 7-in-1 and Anti-Rabies vaccination drives for all community dogs.', featured: false },
//             ].map((item) => item.featured ? (
//               <div key={item.title} className="relative bg-[#002b5c] rounded-3xl p-10 shadow-2xl shadow-[#002b5c]/30 overflow-hidden border border-[#ffd100]/20 flex flex-col">
//                 <div className="pointer-events-none absolute top-0 right-0 w-40 h-40 rounded-full opacity-20" style={{background:'radial-gradient(circle, #ffd100, transparent)', filter:'blur(40px)'}} />
//                 <div className="w-16 h-16 bg-[#ffd100] rounded-2xl flex items-center justify-center text-[#002b5c] mb-7 shadow-lg shadow-[#ffd100]/30 flex-shrink-0">
//                   <item.icon size={30} />
//                 </div>
//                 <h3 className="display text-2xl font-black text-white mb-4">{item.title}</h3>
//                 <p className="text-blue-200 font-light leading-relaxed mb-8 flex-1">{item.desc}</p>
//                 <a href={item.link} className="inline-flex items-center gap-2 text-[#ffd100] font-bold text-sm uppercase tracking-wide hover:gap-4 transition-all mt-auto">Request Drive <ArrowRight size={14} /></a>
//               </div>
//             ) : (
//               <div key={item.title} className="bg-slate-50 rounded-3xl p-8 border-2 border-[#ffd100] shadow-lg flex flex-col">
//                 <div className="w-14 h-14 bg-[#002b5c] rounded-2xl flex items-center justify-center text-[#ffd100] mb-6 flex-shrink-0">
//                   <item.icon size={26} />
//                 </div>
//                 <h3 className="text-xl font-bold text-[#002b5c] mb-3">{item.title}</h3>
//                 <p className="text-gray-500 font-light leading-relaxed flex-1">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── EMERGENCY SECTION ───────────────────────────────────────────── */}
//       <section ref={emergency.ref} className={`py-28 bg-slate-50 relative overflow-hidden reveal ${emergency.visible ? 'in' : ''}`}>
//         <div className="pointer-events-none absolute inset-0 dotted-bg opacity-50" />
//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <div className="flex flex-col lg:flex-row gap-20 items-center">
//             <div className="lg:w-1/2">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-xs font-bold mb-6 border border-red-100">
//                 <span className="relative flex h-2 w-2 flex-shrink-0">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
//                   <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
//                 </span>
//                 EMERGENCY RESPONSE
//               </div>
//               <h2 className="display text-4xl md:text-5xl font-black text-[#002b5c] mb-4 leading-tight">
//                 Found an Injured Dog?
//               </h2>
//               <p className="text-gray-500 text-lg font-light mb-10">Here's exactly what to do — we respond within 45 minutes.</p>
//               <div className="space-y-8">
//                 {[
//                   { num: '01', title: 'Share Location', desc: 'WhatsApp us a video and Google Location pin.' },
//                   { num: '02', title: 'Triage', desc: 'Our vet assesses urgency. Ambulance dispatched for critical cases.' },
//                   { num: '03', title: 'Treatment', desc: 'On-spot aid for minor wounds; Admission for surgeries.' },
//                 ].map((step) => (
//                   <div key={step.num} className="flex gap-5 step-line">
//                     <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#002b5c] text-[#ffd100] flex items-center justify-center font-black text-sm border-2 border-[#ffd100]">
//                       {step.num}
//                     </div>
//                     <div className="pt-2">
//                       <h4 className="text-lg font-bold text-[#002b5c] mb-1">{step.title}</h4>
//                       <p className="text-gray-500 font-light">{step.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <a href="tel:+911234567890" className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-[#002b5c] text-white font-bold rounded-2xl shadow-xl shadow-[#002b5c]/20 hover:bg-[#001a3d] hover:-translate-y-1 transition-all duration-300">
//                 <PhoneCall size={20} className="text-[#ffd100]" />
//                 Call Helpline Now
//               </a>
//             </div>

//             <div className="lg:w-1/2 relative">
//               <div className="absolute inset-0 rounded-[2.5rem] translate-x-5 translate-y-5" style={{background:'linear-gradient(135deg, #ffd100, #ffec6e)'}} />
//               <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[520px] border-4 border-white">
//                 <img src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?w=800&q=80" alt="Vet treating dog" className="w-full h-full object-cover" loading="lazy" />
//                 <div className="absolute inset-0" style={{background:'linear-gradient(to top, #002b5c 0%, transparent 50%)'}} />
//                 <div className="absolute bottom-0 left-0 right-0 p-8">
//                   <div className="flex items-center gap-4 text-white bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
//                     <div className="w-12 h-12 bg-[#ffd100] rounded-xl flex items-center justify-center flex-shrink-0">
//                       <ShieldCheck size={24} className="text-[#002b5c]" />
//                     </div>
//                     <div>
//                       <p className="display font-black text-xl">15,000+ Rescues</p>
//                       <p className="text-sm text-blue-200 font-light">Serving Rajasthan since 2010</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── LEGAL SECTION ───────────────────────────────────────────────── */}
//       <section className="py-28 relative overflow-hidden noise" style={{background:'linear-gradient(150deg, #002b5c 0%, #001a3d 100%)'}}>
//         <div className="pointer-events-none absolute inset-0">
//           <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10" style={{background:'radial-gradient(circle, #ffd100, transparent)', filter:'blur(100px)'}} />
//           <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15" style={{background:'radial-gradient(circle, #3b82f6, transparent)', filter:'blur(60px)'}} />
//         </div>
//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <div>
//               <div className="inline-block bg-[#ffd100] text-[#002b5c] px-3 py-1 rounded-lg text-xs font-black mb-5 tracking-widest uppercase">Legal Framework</div>
//               <h2 className="display text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
//                 Know Your Rights &<br /><span className="italic font-light text-blue-200">Responsibilities</span>
//               </h2>
//               <p className="text-blue-200 mb-10 text-base leading-relaxed font-light">Many conflicts happen due to misinformation. Under Indian Law (PCA Act 1960), it is illegal to relocate stray dogs. We educate communities on how to coexist peacefully.</p>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {[
//                   { icon: Scale, title: 'No Relocation', desc: 'Supreme Court orders strictly ban displacing dogs.' },
//                   { icon: AlertTriangle, title: 'Cruelty is Crime', desc: 'Harassing or beating animals is a punishable offense.' },
//                 ].map(item => (
//                   <div key={item.title} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
//                     <item.icon className="text-[#ffd100] mb-4" size={26} />
//                     <h4 className="font-bold text-lg text-white mb-2">{item.title}</h4>
//                     <p className="text-sm text-blue-300 font-light">{item.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-white text-[#002b5c] p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
//               <div className="pointer-events-none absolute top-0 right-0 w-40 h-40 opacity-5" style={{background:'radial-gradient(circle, #ffd100, transparent)'}} />
//               <div className="absolute -top-3 -right-3 bg-[#ffd100] text-[#002b5c] font-black px-4 py-2 rounded-xl shadow-lg text-xs uppercase tracking-wider rotate-6">PDF Guide</div>
//               <h3 className="display text-2xl font-black mb-8">Responsible Community Living</h3>
//               <ul className="space-y-5">
//                 {['Designate feeding spots away from high footfall areas.','Ensure all dogs are sterilized & vaccinated (ABC).','Do not act aggressive; dogs react to fear.','Cooperate with authorized feeders.'].map((item, i) => (
//                   <li key={i} className="flex items-start gap-4">
//                     <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#002b5c] text-white flex items-center justify-center text-xs font-black mt-0.5">✓</span>
//                     <span className="text-gray-600 font-medium leading-relaxed">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//               <a href="/resources/awareness-poster.pdf" download className="block w-full mt-10 border-2 border-[#002b5c] text-[#002b5c] font-bold py-4 rounded-2xl hover:bg-[#002b5c] hover:text-white transition-all duration-300 text-center text-sm uppercase tracking-wide">
//                 Download Awareness Poster
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIALS SLIDER ─────────────────────────────────────────── */}
//       {/* <TestimonialsSlider revealRef={test.ref} isVisible={test.visible} /> */}

//       {/* ── DONATION CTA ────────────────────────────────────────────────── */}
//       <section className="relative py-28 overflow-hidden" style={{background:'linear-gradient(135deg, #ffd100 0%, #ffec6e 50%, #ffd100 100%)'}}>
//         <div className="pointer-events-none absolute inset-0">
//           <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{backgroundImage:'radial-gradient(circle at 20% 50%, #002b5c 1px, transparent 1px), radial-gradient(circle at 80% 50%, #002b5c 1px, transparent 1px)', backgroundSize:'30px 30px'}} />
//           <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20" style={{background:'radial-gradient(circle, #002b5c, transparent)', filter:'blur(40px)'}} />
//         </div>
//         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
//           <p className="font-black text-[#002b5c]/50 uppercase tracking-widest text-xs mb-4">Make an Impact</p>
//           <h2 className="display text-4xl md:text-6xl font-black text-[#002b5c] mb-6 leading-tight">We Run on<br /><span className="italic font-light">Compassion</span></h2>
//           <p className="text-[#002b5c]/70 text-lg mb-12 font-light max-w-2xl mx-auto leading-relaxed">We do not sell dogs. We do not charge for rescues. Your donation buys bandages, vaccines, and food for the voiceless.</p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <a href="/donate" className="bg-[#002b5c] text-white px-10 py-5 rounded-2xl font-bold text-base hover:bg-[#001a3d] shadow-2xl shadow-[#002b5c]/30 transition-all hover:-translate-y-1">
//               Donate Now
//             </a>
//             <a href="/volunteer" className="bg-white/40 border-2 border-[#002b5c] text-[#002b5c] px-10 py-5 rounded-2xl font-bold text-base hover:bg-[#002b5c] hover:text-white hover:border-[#002b5c] transition-all hover:-translate-y-1 backdrop-blur-sm">
//               Become a Volunteer
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* ── LIGHTBOX ────────────────────────────────────────────────────── */}
//       {lightboxOpen && <Lightbox images={galleryImages} startIndex={lightboxStart} onClose={() => setLightboxOpen(false)} />}
//     </>
//   );
// };

// export default HomePage;






import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  Users, Stethoscope, Syringe, CheckCircle2, PhoneCall, HeartPulse,
  Scale, AlertTriangle, ArrowRight, Heart, ShieldCheck, Star, Quote,
  ChevronLeft, ChevronRight, X, ZoomIn, Images, ExternalLink,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// TYPES & DATA (same as original)
// ─────────────────────────────────────────────────────────────────────────────

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=420&fit=crop', caption: 'Injured dog treated after road accident', category: '' },
  { id: 2, src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=420&fit=crop', caption: 'Mass anti-rabies vaccination drive', category: '' },
  { id: 3, src: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=600&h=420&fit=crop', caption: 'Puppy safety & mother dog care', category: '' },
  { id: 4, src: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600&h=420&fit=crop', caption: 'Society conflict resolved peacefully', category: '' },
  { id: 5, src: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=600&h=420&fit=crop', caption: 'Community feeding drive — Jodhpur', category: 'Community' },
  { id: 6, src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=420&fit=crop', caption: 'Vaccination drive at Udaipur society', category: 'Medical' },
  { id: 7, src: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=420&fit=crop', caption: 'Rescue team on field — Bikaner', category: 'Rescue' },
  { id: 8, src: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=1200&q=85', thumb: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&h=420&fit=crop', caption: 'Happy tails — adoption success stories', category: 'Adoption' },
];

const testimonials = [
  { id: 1, name: 'Priya Sharma', role: 'Dog Adopter', location: 'Jaipur', avatar: 'https://i.pravatar.cc/150?img=47', rating: 5, text: 'Adopting Bruno was the best decision of my life. The team guided me through every step — health check to home adjustment. He was vaccinated, sterilized, and full of love!', dogName: 'Bruno', dogImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop', tag: 'Adopter' },
  { id: 2, name: 'Rahul Meena', role: 'Weekend Volunteer', location: 'Jodhpur', avatar: 'https://i.pravatar.cc/150?img=12', rating: 5, text: 'I have been volunteering for 2 years. The community here is incredible. Every feeding drive, every rescue — I leave feeling like I actually made a difference.', tag: 'Volunteer' },
  { id: 3, name: 'Sunita & Vikram Patel', role: 'Monthly Donors', location: 'Udaipur', avatar: 'https://i.pravatar.cc/150?img=33', rating: 5, text: 'We donate every month and the team sends photo updates. The transparency of this organization is unmatched. Our money truly goes to the dogs.', tag: 'Donor' },
  { id: 4, name: 'Amit Joshi', role: 'Emergency Rescuer', location: 'Kota', avatar: 'https://i.pravatar.cc/150?img=59', rating: 5, text: 'I reported an injured dog at 11 PM. Within 45 minutes a volunteer arrived. The dog had surgery next morning and is now recovering. Incredible response time!', dogName: 'Moti', dogImage: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=200&h=200&fit=crop', tag: 'Rescuer' },
  { id: 5, name: 'Kavya Rathore', role: 'Foster Parent', location: 'Ajmer', avatar: 'https://i.pravatar.cc/150?img=25', rating: 5, text: 'Fostering Coco for three weeks was emotional — but the support was constant. Medicines, food, vet consultations all arranged. She found her forever home!', dogName: 'Coco', dogImage: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=200&h=200&fit=crop', tag: 'Adopter' },
  { id: 6, name: 'Deepak Singh', role: 'RWA Secretary', location: 'Bikaner', avatar: 'https://i.pravatar.cc/150?img=68', rating: 4, text: 'Our society had constant complaints about stray dogs. After the ABC drive and resident workshop, conflicts reduced by 80%. The only humane solution that actually works.', tag: 'Volunteer' },
];

const tagStyles = { Adopter: 'bg-emerald-100 text-emerald-700', Volunteer: 'bg-sky-100 text-sky-700', Donor: 'bg-violet-100 text-violet-700', Rescuer: 'bg-rose-100 text-rose-700' };
const categoryColor = { Rescue: 'bg-rose-500', Adoption: 'bg-emerald-500', Medical: 'bg-sky-500', Community: 'bg-amber-500' };

// ─────────────────────────────────────────────────────────────────────────────
// STAR RATING
// ─────────────────────────────────────────────────────────────────────────────
const StarRating = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={13} className={i < count ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'} />
    ))}
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIAL CARD
// ─────────────────────────────────────────────────────────────────────────────
const TestimonialCard = ({ t, featured = false }) => (
  <article className={`group relative flex flex-col rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 ${featured ? 'bg-[#002b5c] text-white shadow-2xl shadow-[#002b5c]/30 md:-translate-y-5 border border-[#ffd100]/30' : 'bg-white border border-slate-100 shadow-lg hover:shadow-2xl hover:border-[#ffd100]/40'}`}>
    <Quote size={52} className={`absolute top-5 right-5 opacity-[0.07] ${featured ? 'text-[#ffd100]' : 'text-[#002b5c]'}`} />
    <span className={`mb-4 self-start rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest ${featured ? 'bg-[#ffd100] text-[#002b5c]' : tagStyles[t.tag]}`}>{t.tag}</span>
    <StarRating count={t.rating} />
    <p className={`mt-4 mb-6 text-sm leading-relaxed flex-1 font-light ${featured ? 'text-blue-100' : 'text-gray-500'}`}>"{t.text}"</p>
    {t.dogName && t.dogImage && (
      <div className={`mb-5 flex items-center gap-3 rounded-2xl px-4 py-3 w-fit ${featured ? 'bg-white/10 border border-white/10' : 'bg-slate-50 border border-slate-100'}`}>
        <img src={t.dogImage} alt={t.dogName} className="w-10 h-10 rounded-full object-cover ring-2 ring-[#ffd100]" loading="lazy" />
        <div>
          <p className={`text-xs font-bold ${featured ? 'text-[#ffd100]' : 'text-[#002b5c]'}`}>{t.dogName}</p>
          <p className={`text-[10px] ${featured ? 'text-blue-300' : 'text-gray-400'}`}>Rescued & Rehomed ✓</p>
        </div>
      </div>
    )}
    <div className={`flex items-center gap-3 mt-auto pt-5 border-t ${featured ? 'border-white/10' : 'border-slate-100'}`}>
      <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-[#ffd100]" loading="lazy" />
      <div>
        <p className={`font-bold text-sm ${featured ? 'text-white' : 'text-[#002b5c]'}`}>{t.name}</p>
        <p className={`text-xs ${featured ? 'text-blue-300' : 'text-gray-400'}`}>{t.role} · {t.location}</p>
      </div>
    </div>
  </article>
);

// ─────────────────────────────────────────────────────────────────────────────
// LIGHTBOX
// ─────────────────────────────────────────────────────────────────────────────
const Lightbox = ({ images, startIndex, onClose }) => {
  const [current, setCurrent] = useState(startIndex);
  const [loaded, setLoaded] = useState(false);
  const prev = useCallback(() => { setLoaded(false); setCurrent(i => (i - 1 + images.length) % images.length); }, [images.length]);
  const next = useCallback(() => { setLoaded(false); setCurrent(i => (i + 1) % images.length); }, [images.length]);
  useEffect(() => {
    const h = e => { if (e.key === 'ArrowLeft') prev(); if (e.key === 'ArrowRight') next(); if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', h); document.body.style.overflow = ''; };
  }, [prev, next, onClose]);
  const img = images[current];
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col bg-black/95 backdrop-blur-md" role="dialog" aria-modal="true">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 flex-shrink-0">
        <div className="flex items-center gap-3">
          <Images size={18} className="text-[#ffd100]" />
          <span className="text-white font-bold">Our Gallery</span>
          <span className="text-gray-500 text-sm">{current + 1} / {images.length}</span>
        </div>
        <div className="hidden md:flex items-center gap-2 overflow-x-auto max-w-xl">
          {images.map((im, i) => (
            <button key={im.id} onClick={() => { setLoaded(false); setCurrent(i); }} className={`flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${i === current ? 'border-[#ffd100] scale-110' : 'border-white/10 opacity-40 hover:opacity-80'}`}>
              <img src={im.thumb} alt="" className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
        <button onClick={onClose} className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/15 transition-all"><X size={18} /></button>
      </div>
      <div className="relative flex-1 flex items-center justify-center overflow-hidden px-16">
        <button onClick={prev} className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#ffd100] hover:text-[#002b5c] hover:border-[#ffd100] transition-all"><ChevronLeft size={22} /></button>
        <div className="relative max-w-5xl w-full flex items-center justify-center">
          {!loaded && <div className="absolute inset-0 flex items-center justify-center"><div className="w-12 h-12 border-3 border-[#ffd100]/30 border-t-[#ffd100] rounded-full animate-spin" /></div>}
          <img key={img.id} src={img.src} alt={img.caption} onLoad={() => setLoaded(true)} className={`max-h-[68vh] max-w-full object-contain rounded-2xl shadow-2xl transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
        </div>
        <button onClick={next} className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#ffd100] hover:text-[#002b5c] hover:border-[#ffd100] transition-all"><ChevronRight size={22} /></button>
      </div>
      <div className="flex-shrink-0 px-6 py-4 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${categoryColor[img.category] ?? 'bg-gray-400'}`} />
            <p className="text-white text-sm font-medium">{img.caption}</p>
            <span className={`px-2 py-0.5 rounded-full text-white text-[10px] font-bold uppercase ${categoryColor[img.category] ?? 'bg-gray-600'}`}>{img.category}</span>
          </div>
          <p className="hidden sm:block text-gray-600 text-xs">← → to navigate · Esc to close</p>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// SCROLL REVEAL HOOK
// ─────────────────────────────────────────────────────────────────────────────
function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS SLIDER COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

const CARDS_PER_VIEW_DESKTOP = 3; // show 3 at a time on desktop
const TOTAL = testimonials.length;

const TestimonialsSlider = ({ revealRef, isVisible }) => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((idx) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(idx);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const prev = useCallback(() => goTo((current - 1 + TOTAL) % TOTAL), [current, goTo]);
  const next = useCallback(() => goTo((current + 1) % TOTAL), [current, goTo]);

  // Auto-play
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % TOTAL);
    }, 4500);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  // Keyboard
  useEffect(() => {
    const h = e => { if (e.key === 'ArrowLeft') prev(); if (e.key === 'ArrowRight') next(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [prev, next]);

  // Desktop: show 3 cards, center card is active
  const getDesktopCards = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      indices.push((current + i + TOTAL) % TOTAL);
    }
    return indices;
  };

  const desktopCards = getDesktopCards();

  return (
    <section
      ref={revealRef}
      className={`py-28 relative overflow-hidden reveal ${isVisible ? 'in' : ''}`}
      style={{background:'linear-gradient(160deg, #001628 0%, #002b5c 100%)'}}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* BG decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-10" style={{background:'radial-gradient(circle, #ffd100, transparent)', filter:'blur(100px)'}} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-10" style={{background:'radial-gradient(circle, #60a5fa, transparent)', filter:'blur(80px)'}} />
        {/* subtle grid lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize:'60px 60px'}} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#ffd100]/15 text-[#ffd100] border border-[#ffd100]/25 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-5">
              <Heart size={13} fill="#ffd100" /> Real Stories
            </span>
            <h2 className="display text-4xl md:text-5xl font-black text-white leading-tight">
              Voices of Our<br />
              <span className="italic font-light" style={{color:'rgba(255,209,0,0.7)'}}>Community</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-5 py-3">
              <div className="flex gap-0.5">{Array.from({length:5}).map((_,i)=><Star key={i} size={15} className="text-amber-400 fill-amber-400"/>)}</div>
              <span className="font-black text-white">4.9</span>
              <span className="text-blue-300 text-sm font-light">/ 200+ Reviews</span>
            </div>
            <a href="/share-story" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#ffd100]/50 text-[#ffd100] font-bold text-sm hover:bg-[#ffd100] hover:text-[#002b5c] transition-all duration-300">
              Share Your Story <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* ── DESKTOP SLIDER (3 cards visible) ── */}
        <div className="hidden md:block relative">
          <div className="flex items-center gap-5 justify-center" style={{minHeight:'420px'}}>
            {desktopCards.map((tIdx, pos) => {
              const t = testimonials[tIdx];
              const isCenter = pos === 1;
              return (
                <div
                  key={`${tIdx}-${pos}`}
                  className="relative flex flex-col rounded-3xl overflow-hidden flex-shrink-0 transition-all duration-700"
                  style={{
                    width: isCenter ? '420px' : '300px',
                    opacity: isCenter ? 1 : 0.5,
                    transform: isCenter ? 'scale(1) translateY(0)' : pos === 0 ? 'scale(0.92) translateX(20px)' : 'scale(0.92) translateX(-20px)',
                    background: isCenter ? '#ffd100' : 'rgba(255,255,255,0.06)',
                    border: isCenter ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    boxShadow: isCenter ? '0 30px 70px rgba(255,209,0,0.3)' : 'none',
                    zIndex: isCenter ? 10 : 1,
                    filter: isCenter ? 'none' : 'blur(1px)',
                    pointerEvents: isCenter ? 'auto' : 'none',
                  }}
                >
                  <div className="p-8 flex flex-col h-full">
                    {/* Top */}
                    <div className="flex items-center justify-between mb-5">
                      <span className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest ${isCenter ? 'bg-[#002b5c] text-[#ffd100]' : 'bg-white/10 text-white'}`}>{t.tag}</span>
                      <div className="flex gap-0.5">
                        {Array.from({length:5}).map((_,i)=>(
                          <Star key={i} size={12} className={i < t.rating ? (isCenter ? 'text-[#002b5c] fill-[#002b5c]' : 'text-amber-400 fill-amber-400') : 'text-gray-300 fill-gray-300'} />
                        ))}
                      </div>
                    </div>
                    {/* Big quote */}
                    <div className="text-7xl font-black mb-1 leading-none select-none" style={{fontFamily:'Georgia,serif', color: isCenter ? 'rgba(0,43,92,0.15)' : 'rgba(255,255,255,0.1)', lineHeight:0.8}}>"</div>
                    {/* Text */}
                    <p className={`text-sm leading-relaxed flex-1 mb-6 ${isCenter ? 'text-[#002b5c] font-medium' : 'text-white/70 font-light'}`}>{t.text}</p>
                    {/* Dog chip */}
                    {t.dogName && t.dogImage && (
                      <div className={`flex items-center gap-3 rounded-2xl px-4 py-2.5 w-fit mb-5 ${isCenter ? 'bg-[#002b5c]/10' : 'bg-white/10'}`}>
                        <img src={t.dogImage} alt={t.dogName} className="w-8 h-8 rounded-full object-cover ring-2 ring-[#002b5c]" loading="lazy" />
                        <div>
                          <p className={`text-xs font-bold ${isCenter ? 'text-[#002b5c]' : 'text-white'}`}>{t.dogName}</p>
                          <p className={`text-[10px] ${isCenter ? 'text-[#002b5c]/60' : 'text-white/50'}`}>Rescued & Rehomed ✓</p>
                        </div>
                      </div>
                    )}
                    {/* Author */}
                    <div className={`flex items-center gap-3 pt-5 border-t ${isCenter ? 'border-[#002b5c]/15' : 'border-white/10'}`}>
                      <img src={t.avatar} alt={t.name} className={`w-11 h-11 rounded-full object-cover ring-2 ${isCenter ? 'ring-[#002b5c]/30' : 'ring-[#ffd100]/50'}`} loading="lazy" />
                      <div>
                        <p className={`font-bold text-sm ${isCenter ? 'text-[#002b5c]' : 'text-white'}`}>{t.name}</p>
                        <p className={`text-xs ${isCenter ? 'text-[#002b5c]/60' : 'text-white/50'}`}>{t.role}</p>
                      </div>
                      <span className={`ml-auto text-[10px] px-2.5 py-1 rounded-lg font-bold ${isCenter ? 'bg-[#002b5c]/10 text-[#002b5c]' : 'bg-white/10 text-white/60'}`}>📍 {t.location}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prev/Next buttons */}
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-14 h-14 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#ffd100] hover:text-[#002b5c] hover:border-[#ffd100] transition-all duration-300 backdrop-blur-sm z-20" aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-14 h-14 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#ffd100] hover:text-[#002b5c] hover:border-[#ffd100] transition-all duration-300 backdrop-blur-sm z-20" aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* ── MOBILE SLIDER (1 card) ── */}
        <div className="md:hidden relative overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-600 ease-in-out"
            style={{transform:`translateX(-${current * 100}%)`, transitionDuration:'600ms'}}
          >
            {testimonials.map((t, i) => (
              <div key={t.id} className="min-w-full flex-shrink-0 px-1">
                <div className="rounded-3xl overflow-hidden" style={{background:'#ffd100'}}>
                  <div className="p-7 flex flex-col">
                    <div className="flex items-center justify-between mb-5">
                      <span className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-[#002b5c] text-[#ffd100]">{t.tag}</span>
                      <div className="flex gap-0.5">{Array.from({length:5}).map((_,si)=><Star key={si} size={13} className={si < t.rating ? 'text-[#002b5c] fill-[#002b5c]' : 'text-gray-300 fill-gray-300'}/>)}</div>
                    </div>
                    <div className="text-6xl font-black mb-1 text-[#002b5c]/10" style={{fontFamily:'Georgia,serif',lineHeight:0.8}}>"</div>
                    <p className="text-sm leading-relaxed text-[#002b5c] font-medium mb-6 flex-1">{t.text}</p>
                    {t.dogName && t.dogImage && (
                      <div className="flex items-center gap-3 rounded-2xl px-4 py-2.5 w-fit mb-5 bg-[#002b5c]/10">
                        <img src={t.dogImage} alt={t.dogName} className="w-8 h-8 rounded-full object-cover ring-2 ring-[#002b5c]" loading="lazy" />
                        <div>
                          <p className="text-xs font-bold text-[#002b5c]">{t.dogName}</p>
                          <p className="text-[10px] text-[#002b5c]/60">Rescued & Rehomed ✓</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-3 pt-5 border-t border-[#002b5c]/15">
                      <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-[#002b5c]/30" loading="lazy" />
                      <div>
                        <p className="font-bold text-sm text-[#002b5c]">{t.name}</p>
                        <p className="text-xs text-[#002b5c]/60">{t.role} · {t.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DOT NAVIGATION + ARROWS (both desktop & mobile) ── */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button onClick={prev} className="md:hidden w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#ffd100] hover:text-[#002b5c] transition-all" aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="transition-all duration-400 rounded-full"
                style={{
                  width: i === current ? '32px' : '8px',
                  height: '8px',
                  background: i === current ? '#ffd100' : 'rgba(255,255,255,0.25)',
                  transitionDuration: '400ms',
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="md:hidden w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#ffd100] hover:text-[#002b5c] transition-all" aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Auto-play progress bar */}
        <div className="mt-6 max-w-xs mx-auto h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#ffd100] rounded-full"
            style={{
              width: `${((current + 1) / TOTAL) * 100}%`,
              transition: paused ? 'none' : 'width 4.5s linear',
            }}
          />
        </div>
        <p className="text-center text-blue-400/60 text-xs mt-3 font-light">{current + 1} / {TOTAL} · Hover to pause</p>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────
const HomePage = () => {
  const rwa = useReveal();
  const emergency = useReveal();
  const test = useReveal();
  const gallery = useReveal();
  const [activeTestIdx, setActiveTestIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxStart, setLightboxStart] = useState(0);
  const prevTest = useCallback(() => setActiveTestIdx(i => (i - 1 + testimonials.length) % testimonials.length), []);
  const nextTest = useCallback(() => setActiveTestIdx(i => (i + 1) % testimonials.length), []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        :root { --navy:#002b5c; --gold:#ffd100; --gold-light:#fff3b0; }
        *, *::before, *::after { box-sizing: border-box; }
        html, body { font-family:'DM Sans', sans-serif; color:var(--navy); overflow-x:hidden; margin:0; }
        .display { font-family:'Playfair Display', Georgia, serif; }
        
        /* Reveal Animations */
        .reveal { opacity:0; transform:translateY(40px); transition:opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1); }
        .reveal.in { opacity:1; transform:translateY(0); }
        .reveal-scale { opacity:0; transform:scale(0.94); transition:opacity 0.8s ease, transform 0.8s ease; }
        .reveal-scale.in { opacity:1; transform:scale(1); }

        /* Hero particles */
        @keyframes float { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-20px) rotate(180deg)} }
        @keyframes drift { 0%{transform:translateX(0)} 100%{transform:translateX(100vw)} }
        @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(1.8);opacity:0} }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        
        .marquee-track { animation: marquee 20s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }

        /* Gold shimmer button */
        .btn-gold {
          position:relative; overflow:hidden;
          background:var(--gold); color:var(--navy);
          background-image: linear-gradient(105deg, var(--gold) 40%, #fffacc 50%, var(--gold) 60%);
          background-size:200% 100%;
          transition: background-position 0.4s ease, transform 0.2s, box-shadow 0.2s;
        }
        .btn-gold:hover { background-position:100% 0; transform:translateY(-2px); box-shadow:0 12px 32px rgba(255,209,0,0.4); }

        /* Card hover lift */
        .card-lift { transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease; }
        .card-lift:hover { transform:translateY(-8px); box-shadow:0 24px 50px rgba(0,43,92,0.12); }

        /* Gallery image zoom */
        .gallery-img { transition:transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); }
        .gallery-card:hover .gallery-img { transform:scale(1.1); }

        /* Dotted background */
        .dotted-bg { background-image:radial-gradient(circle, rgba(0,43,92,0.08) 1px, transparent 1px); background-size:28px 28px; }

        /* Noise texture overlay */
        .noise::after { content:''; position:absolute; inset:0; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E"); pointer-events:none; }

        /* Pulsing dot */
        .live-dot::before { content:''; position:absolute; inset:0; border-radius:50%; background:currentColor; animation:pulse-ring 1.5s ease-out infinite; }

        /* Step connector line */
        .step-line { position:relative; }
        .step-line:not(:last-child)::after { content:''; position:absolute; left:22px; top:52px; bottom:-30px; width:2px; background:linear-gradient(to bottom, #002b5c30, transparent); }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
   <section className="relative w-full overflow-hidden" style={{background:'#1a2744', minHeight:'380px'}}>
  {/* Full-bleed dog image */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=1400&h=600&fit=crop&q=85"
      alt="Dog close up"
      className="w-full h-full object-cover object-center"
      style={{opacity:0.55}}
    />
    {/* Gradient — on mobile full dark, on desktop left-to-right */}
    <div
      className="absolute inset-0"
      style={{background:'linear-gradient(180deg, rgba(26,39,68,0.92) 0%, rgba(26,39,68,0.85) 60%, rgba(26,39,68,0.75) 100%)'}}
    />
    <div
      className="absolute inset-0 hidden md:block"
      style={{background:'linear-gradient(90deg, rgba(26,39,68,0.97) 0%, rgba(26,39,68,0.92) 40%, rgba(26,39,68,0.5) 65%, transparent 100%)'}}
    />
    {/* Bottom wave */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{display:'block', width:'100%', height:'50px'}}>
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff"/>
      </svg>
    </div>
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-14 flex flex-col justify-center"
    style={{minHeight:'380px', paddingTop:'40px', paddingBottom:'70px'}}>
    <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">

      {/* Top label */}
      <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
        <Heart size={13} fill="#ffd100" className="text-[#ffd100]" />
        <span className="text-[#ffd100] font-black uppercase tracking-widest text-xs">
          Giving Every Dog Safety & Care
        </span>
      </div>

      {/* Headline */}
      <h2 className="font-black text-white leading-tight mb-4"
        style={{fontSize:'clamp(1.7rem, 4.5vw, 3.5rem)'}}>
        Humane solutions for dog-related<br className="hidden sm:block" /> issues in society.
      </h2>

      {/* Sub text */}
      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light max-w-md mx-auto md:mx-0">
        Surana Dog NGO works to resolve dog-related issues in societies through vaccination,
        emergency medical care, shelter support, and legal awareness. We ensure safety for
        both people and community dogs without relocation or cruelty.
      </p>

      {/* Buttons */}
      <div className="flex flex-row gap-3 items-center justify-center md:justify-start">
        <a href="/contact"
          className="btn-gold inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold text-sm shadow-lg whitespace-nowrap">
          Contact <ArrowRight size={16} />
        </a>
        <a href="/donate"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold text-sm border-2 border-[#ffd100] text-[#ffd100] hover:bg-[#ffd100] hover:text-[#002b5c] transition-all duration-300 whitespace-nowrap">
          Donate Today
        </a>
      </div>

    </div>
  </div>
</section>
      {/* ── MARQUEE TRUST BAR ───────────────────────────────────────────── */}
      {/* <div className="bg-[#ffd100] py-3 overflow-hidden">
        <div className="flex marquee-track whitespace-nowrap gap-0">
          {[...Array(2)].map((_, r) => (
            <div key={r} className="flex gap-0">
              {['🐾 Rescuing Since 2010','❤️ 15,000+ Lives Saved','🏥 24/7 Emergency Response','💉 ABC Drives Across Rajasthan','🏠 8,000+ Successful Adoptions','🤝 Trusted by 200+ Societies'].map(item => (
                <span key={item} className="text-[#002b5c] font-black text-sm px-10 uppercase tracking-wider border-r border-[#002b5c]/20 last:border-0">{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div> */}

      {/* ── QUICK ACTIONS ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: 'Dog Problem Resolution',
                desc: 'Handling society complaints related to community dogs through humane, legal, and scientific methods',
                link: '/contact',
                cta: 'Find your match',
                bg: '#ffc107',   // yellow like screenshot
                iconBg: 'rgba(255,255,255,0.25)',
              },
              {
                icon: HeartPulse,
                title: 'Emergency & Medical Care',
                desc: 'Immediate response for injured, sick, or accident-affected dogs with on-site aid or hospital treatment',
                link: '/contact',
                cta: 'Make a donation',
                bg: '#f97316',   // orange
                iconBg: 'rgba(255,255,255,0.25)',
              },
              {
                icon: Users,
                title: 'Vaccination Programs',
                desc: 'Anti-rabies and core vaccination drives to protect dogs and ensure public safety in communities',
                link: '/volunteer',
                cta: 'Get involved',
                bg: '#0891b2',   // teal
                iconBg: 'rgba(255,255,255,0.25)',
              },
              {
                icon: ShieldCheck,
                title: 'Shelter & Recovery Care',
                desc: 'Temporary shelter support for injured or recovering dogs under veterinary supervision',
                link: '/tips',
                cta: 'Learn more',
                bg: '#65a30d',   // green
                iconBg: 'rgba(255,255,255,0.25)',
              },
            ].map((card) => (
              <a
                key={card.title}
                href={card.link}
                className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-400 hover:-translate-y-2 no-underline"
                style={{border:'1px solid #f1f5f9'}}
              >
                {/* Colored top block with icon — like screenshot */}
                <div
                  className="flex items-center justify-center"
                  style={{background: card.bg, height:'160px'}}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{background: card.iconBg}}
                  >
                    <card.icon size={32} color="white" />
                  </div>
                </div>
                {/* White bottom with text — like screenshot */}
                <div className="bg-white p-6">
                  <h3 className="text-lg font-bold text-[#002b5c] mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5" style={{minHeight:'56px'}}>{card.desc}</p>
                  <div className="inline-flex items-center gap-1.5 font-bold text-sm" style={{color: card.bg}}>
                    {card.cta} <ArrowRight size={15} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────────────────── */}
      <section ref={gallery.ref} className={`py-28 relative overflow-hidden reveal ${gallery.visible ? 'in' : ''}`} style={{background:'linear-gradient(160deg, #001628 0%, #002b5c 100%)'}}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-10" style={{background:'radial-gradient(circle, #ffd100, transparent)', filter:'blur(100px)'}} />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10" style={{background:'radial-gradient(circle, #60a5fa, transparent)', filter:'blur(80px)'}} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="inline-flex items-center gap-2 bg-[#ffd100]/15 text-[#ffd100] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-5 border border-[#ffd100]/20">
                <Images size={13} /> Photo Stories
              </span>
              <h2 className="display text-4xl md:text-5xl font-black text-white mb-3">Our Work in Action</h2>
              <p className="text-blue-300 text-base max-w-md font-light">Real moments from our field work — rescues, treatments, vaccinations, and community interventions across Rajasthan</p>
            </div>
            <a href="/gallery" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#ffd100]/50 text-[#ffd100] font-semibold text-sm hover:bg-[#ffd100] hover:text-[#002b5c] transition-all duration-300 backdrop-blur-sm">
              Full Gallery <ExternalLink size={15} />
            </a>
          </div>

          {/* Uniform gallery grid - all same height */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.slice(0, 4).map((img, index) => (
              <button key={img.id} onClick={() => { setLightboxStart(index); setLightboxOpen(true); }}
                className="gallery-card group relative rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd100] shadow-2xl"
                style={{aspectRatio:'1/1', height:'260px', width:'100%'}}
                aria-label={`Open: ${img.caption}`}>
                <img src={img.thumb} alt={img.caption} className="gallery-img w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0" style={{background:'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)'}} />
                {/* Category badge */}
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-wider ${categoryColor[img.category]}`}>{img.category}</span>
                {/* Hover zoom icon */}
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-[#ffd100] group-hover:text-[#002b5c] transition-all duration-300 border border-white/20 group-hover:border-[#ffd100]">
                  <ZoomIn size={15} />
                </div>
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-semibold leading-snug">{img.caption}</p>
                  <span className="inline-flex items-center gap-1 mt-1.5 text-[#ffd100] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">View <ArrowRight size={11} /></span>
                </div>
                {/* Gold border on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#ffd100]/50 transition-all duration-300 pointer-events-none" />
              </button>
            ))}
          </div>

          {/* <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-blue-400 text-xs font-medium">Showing 4 of {galleryImages.length} photos</span>
            <div className="h-px flex-1 bg-white/10" />
          </div> */}
        </div>
      </section>

      {/* ── RWA SECTION ─────────────────────────────────────────────────── */}
      <section ref={rwa.ref} className={`py-28 bg-white relative overflow-hidden transition-all duration-1000 ${rwa.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Decorative */}
        <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{background:'radial-gradient(circle, #ffd100, transparent)', filter:'blur(60px)'}} />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#ffd100] font-black uppercase tracking-widest text-xs mb-3">Community Harmony</p>
            <h2 className="display text-4xl md:text-5xl font-black text-[#002b5c] mb-5">
              Solutions for<br />
              <span className="italic font-light">Societies & RWAs</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">We help societies manage dog-related concerns without fear or illegal actions.<strong className="text-[#002b5c] font-bold">Our approach focuses on awareness, vaccination</strong> medical care, and cooperation.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {[
              { icon: Users, title: 'Conflict Mediation', desc: 'We send experts to talk to residents, explain dog behavior, and conduct safety workshops for children and housekeeping staff.', featured: false },
              { icon: Stethoscope, title: 'Sterilization (ABC)', desc: 'The only permanent solution. We catch, neuter, vaccinate, and release dogs back to the same spot (as per law) to stabilize the population.', featured: true, link: '/abc-drive' },
              { icon: Syringe, title: 'Mass Vaccination', desc: 'Protect your society from Rabies. We conduct annual 7-in-1 and Anti-Rabies vaccination drives for all community dogs.', featured: false },
            ].map((item) => item.featured ? (
              <div key={item.title} className="relative bg-[#002b5c] rounded-3xl p-10 shadow-2xl shadow-[#002b5c]/30 overflow-hidden border border-[#ffd100]/20 flex flex-col">
                <div className="pointer-events-none absolute top-0 right-0 w-40 h-40 rounded-full opacity-20" style={{background:'radial-gradient(circle, #ffd100, transparent)', filter:'blur(40px)'}} />
                <div className="w-16 h-16 bg-[#ffd100] rounded-2xl flex items-center justify-center text-[#002b5c] mb-7 shadow-lg shadow-[#ffd100]/30 flex-shrink-0">
                  <item.icon size={30} />
                </div>
                <h3 className="display text-2xl font-black text-white mb-4">{item.title}</h3>
                <p className="text-blue-200 font-light leading-relaxed mb-8 flex-1">{item.desc}</p>
                <a href={item.link} className="inline-flex items-center gap-2 text-[#ffd100] font-bold text-sm uppercase tracking-wide hover:gap-4 transition-all mt-auto">Request Drive <ArrowRight size={14} /></a>
              </div>
            ) : (
              <div key={item.title} className="bg-slate-50 rounded-3xl p-8 border-2 border-[#ffd100] shadow-lg flex flex-col">
                <div className="w-14 h-14 bg-[#002b5c] rounded-2xl flex items-center justify-center text-[#ffd100] mb-6 flex-shrink-0">
                  <item.icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-[#002b5c] mb-3">{item.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed flex-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMERGENCY SECTION ───────────────────────────────────────────── */}
      <section ref={emergency.ref} className={`py-28 bg-slate-50 relative overflow-hidden reveal ${emergency.visible ? 'in' : ''}`}>
        <div className="pointer-events-none absolute inset-0 dotted-bg opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-xs font-bold mb-6 border border-red-100">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                </span>
                EMERGENCY RESPONSE
              </div>
              <h2 className="display text-4xl md:text-5xl font-black text-[#002b5c] mb-4 leading-tight">
                Found an Injured Dog?
              </h2>
              <p className="text-gray-500 text-lg font-light mb-10">Here's exactly what to do — we respond within 45 minutes.</p>
              <div className="space-y-8">
                {[
                  { num: '01', title: 'Share Location', desc: 'Send photo/video + Google map location on WhatsApp.' },
                  { num: '02', title: 'Triage', desc: 'Our vet assesses urgency. Ambulance dispatched for critical cases.' },
                  { num: '03', title: 'Treatment', desc: 'On-spot aid for minor wounds; Admission for surgeries.' },
                ].map((step) => (
                  <div key={step.num} className="flex gap-5 step-line">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#002b5c] text-[#ffd100] flex items-center justify-center font-black text-sm border-2 border-[#ffd100]">
                      {step.num}
                    </div>
                    <div className="pt-2">
                      <h4 className="text-lg font-bold text-[#002b5c] mb-1">{step.title}</h4>
                      <p className="text-gray-500 font-light">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="tel:+911234567890" className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-[#002b5c] text-white font-bold rounded-2xl shadow-xl shadow-[#002b5c]/20 hover:bg-[#001a3d] hover:-translate-y-1 transition-all duration-300">
                <PhoneCall size={20} className="text-[#ffd100]" />
                Call Helpline Now
              </a>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 rounded-[2.5rem] translate-x-5 translate-y-5" style={{background:'linear-gradient(135deg, #ffd100, #ffec6e)'}} />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[520px] border-4 border-white">
                <img src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?w=800&q=80" alt="Vet treating dog" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0" style={{background:'linear-gradient(to top, #002b5c 0%, transparent 50%)'}} />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-4 text-white bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                    <div className="w-12 h-12 bg-[#ffd100] rounded-xl flex items-center justify-center flex-shrink-0">
                      <ShieldCheck size={24} className="text-[#002b5c]" />
                    </div>
                    <div>
                      <p className="display font-black text-xl">15,000+ Rescues</p>
                      <p className="text-sm text-blue-200 font-light">Serving Rajasthan since 2010</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEGAL SECTION ───────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden noise" style={{background:'linear-gradient(150deg, #002b5c 0%, #001a3d 100%)'}}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10" style={{background:'radial-gradient(circle, #ffd100, transparent)', filter:'blur(100px)'}} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15" style={{background:'radial-gradient(circle, #3b82f6, transparent)', filter:'blur(60px)'}} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#ffd100] text-[#002b5c] px-3 py-1 rounded-lg text-xs font-black mb-5 tracking-widest uppercase">Legal Framework</div>
              <h2 className="display text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Know Your Rights &<br /><span className="italic font-light text-blue-200">Responsibilities</span>
              </h2>
              <p className="text-blue-200 mb-10 text-base leading-relaxed font-light">Many conflicts happen due to misinformation. Under Indian Law (PCA Act 1960), it is illegal to relocate stray dogs. We educate communities on how to coexist peacefully.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Scale, title: 'No Relocation', desc: 'Supreme Court orders strictly ban displacing dogs.' },
                  { icon: AlertTriangle, title: 'Cruelty is Crime', desc: 'Harassing or beating animals is a punishable offense.' },
                ].map(item => (
                  <div key={item.title} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                    <item.icon className="text-[#ffd100] mb-4" size={26} />
                    <h4 className="font-bold text-lg text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-blue-300 font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white text-[#002b5c] p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              {/* <div className="pointer-events-none absolute top-0 right-0 w-40 h-40 opacity-5" style={{background:'radial-gradient(circle, #ffd100, transparent)'}} /> */}
              {/* <div className="absolute -top-3 -right-3 bg-[#ffd100] text-[#002b5c] font-black px-4 py-2 rounded-xl shadow-lg text-xs uppercase tracking-wider rotate-6">PDF Guide</div> */}
              <h3 className="display text-2xl font-black mb-8">Responsible Community Living</h3>
              <ul className="space-y-5">
                {['Designate feeding spots away from high footfall areas.','Ensure all dogs are sterilized & vaccinated (ABC).','Do not act aggressive; dogs react to fear.','Cooperate with authorized feeders.'].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#002b5c] text-white flex items-center justify-center text-xs font-black mt-0.5">✓</span>
                    <span className="text-gray-600 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/resources/awareness-poster.pdf" download className="block w-full mt-10 border-2 border-[#002b5c] text-[#002b5c] font-bold py-4 rounded-2xl hover:bg-[#002b5c] hover:text-white transition-all duration-300 text-center text-sm uppercase tracking-wide">
                Download Awareness Poster
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── DONATION CTA ────────────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden" style={{background:'linear-gradient(135deg, #ffd100 0%, #ffec6e 50%, #ffd100 100%)'}}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{backgroundImage:'radial-gradient(circle at 20% 50%, #002b5c 1px, transparent 1px), radial-gradient(circle at 80% 50%, #002b5c 1px, transparent 1px)', backgroundSize:'30px 30px'}} />
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20" style={{background:'radial-gradient(circle, #002b5c, transparent)', filter:'blur(40px)'}} />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="font-black text-[#002b5c]/50 uppercase tracking-widest text-xs mb-4">Make an Impact</p>
          <h2 className="display text-4xl md:text-6xl font-black text-[#002b5c] mb-6 leading-tight">Facing Dog-Related <br /><span className="italic font-light">Problems in Your Area?</span></h2>
          <p className="text-[#002b5c]/70 text-lg mb-12 font-light max-w-2xl mx-auto leading-relaxed">If your society is facing any issue with community dogs, contact Surana Dog NGO. Our team will reach, assess, and resolve the situation responsibly</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-[#002b5c] text-white px-10 py-5 rounded-2xl font-bold text-base hover:bg-[#001a3d] shadow-2xl shadow-[#002b5c]/30 transition-all hover:-translate-y-1">
              Contact Us
            </a>
            <a href="/contact" className="bg-white/40 border-2 border-[#002b5c] text-[#002b5c] px-10 py-5 rounded-2xl font-bold text-base hover:bg-[#002b5c] hover:text-white hover:border-[#002b5c] transition-all hover:-translate-y-1 backdrop-blur-sm">
              Report a Problem
            </a>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ────────────────────────────────────────────────────── */}
      
    </>
  );
};

export default HomePage;