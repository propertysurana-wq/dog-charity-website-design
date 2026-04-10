// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { Heart, Users, Calendar, Gift, Building, ArrowRight } from 'lucide-react';
// // import { Button } from '@/components/ui/Button';
// // import { CTABanner } from '@/components/sections/CTABanner';
// // import { orgInfo } from '@/constants/theme';

// // /**
// //  * GetInvolvedPage Component
// //  * Ways to support the charity - volunteering, fundraising, etc.
// //  */

// // const GetInvolvedPage: React.FC = () => {
// //   const volunteerRoles = [
// //     {
// //       title: 'Dog Walker',
// //       description: 'Help exercise and socialize our dogs while they wait for their forever homes.',
// //       commitment: '2-4 hours per week',
// //     },
// //     {
// //       title: 'Foster Carer',
// //       description: 'Provide temporary care for dogs in your home while they await adoption.',
// //       commitment: 'Varies by dog',
// //     },
// //     {
// //       title: 'Event Helper',
// //       description: 'Support our fundraising events, awareness campaigns, and community activities.',
// //       commitment: 'Flexible',
// //     },
// //     {
// //       title: 'Administrative Support',
// //       description: 'Help with office tasks, data entry, and organizational support.',
// //       commitment: '4+ hours per week',
// //     },
// //     {
// //       title: 'Photography',
// //       description: 'Take photos of our dogs to help them find homes through our website.',
// //       commitment: 'Flexible',
// //     },
// //     {
// //       title: 'Transport Volunteer',
// //       description: 'Help transport dogs between centres or to vet appointments.',
// //       commitment: 'As needed',
// //     },
// //   ];

// //   const fundraisingIdeas = [
// //     { icon: '🏃', title: 'Sponsored Run', description: 'Join a marathon or fun run for charity' },
// //     { icon: '🎂', title: 'Bake Sale', description: 'Organize a bake sale at work or school' },
// //     { icon: '🎮', title: 'Gaming Stream', description: 'Stream games and collect donations' },
// //     { icon: '🎪', title: 'Host an Event', description: 'Organize a quiz night or party' },
// //     { icon: '✂️', title: 'Head Shave', description: 'Get sponsored for a brave haircut' },
// //     { icon: '🎁', title: 'Birthday Fundraiser', description: 'Ask for donations instead of gifts' },
// //   ];

// //   return (
// //     <div>
// //       {/* Hero Section */}
// //       <section className="bg-[#002B5C] py-20">
// //         <div className="max-w-7xl mx-auto px-4">
// //           <div className="max-w-3xl">
// //             <span className="inline-block text-[#FFD100] font-semibold text-sm uppercase tracking-wider mb-4">
// //               Make a Difference
// //             </span>
// //             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
// //               Get Involved With {orgInfo.name}
// //             </h1>
// //             <p className="text-gray-300 text-lg leading-relaxed">
// //               There are many ways you can help us save more dogs. Whether you have
// //               time, money, or skills to give, your contribution makes a real difference.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Quick Links */}
// //       <section className="py-12 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-4">
// //           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-16">
// //             {[
// //               { icon: <Heart className="w-6 h-6" />, title: 'Donate', link: '/donate' },
// //               { icon: <Users className="w-6 h-6" />, title: 'Volunteer', link: '#volunteer' },
// //               { icon: <Calendar className="w-6 h-6" />, title: 'Fundraise', link: '#fundraise' },
// //               { icon: <Building className="w-6 h-6" />, title: 'Corporate', link: '#corporate' },
// //             ].map((item, index) => (
// //               <Link
// //                 key={index}
// //                 to={item.link}
// //                 className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow group"
// //               >
// //                 <div className="w-14 h-14 bg-[#FFD100] rounded-full flex items-center justify-center mx-auto mb-4 text-[#002B5C] group-hover:scale-110 transition-transform">
// //                   {item.icon}
// //                 </div>
// //                 <h3 className="font-bold text-[#002B5C]">{item.title}</h3>
// //               </Link>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Volunteering Section */}
// //       <section className="py-16" id="volunteer">
// //         <div className="max-w-7xl mx-auto px-4">
// //           <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
// //             <div>
// //               <span className="inline-block text-[#F58220] font-semibold text-sm uppercase tracking-wider mb-2">
// //                 Volunteer With Us
// //               </span>
// //               <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-6">
// //                 Give Your Time, Change a Dog's Life
// //               </h2>
// //               <p className="text-gray-600 mb-6">
// //                 Our amazing volunteers are the heart of our organization. From dog
// //                 walking to event support, there's a role for everyone. No experience
// //                 necessary – just a love for dogs and a willingness to help.
// //               </p>
// //               <div className="flex flex-col sm:flex-row gap-4">
// //                 <Button variant="primary" size="lg">
// //                   Apply to Volunteer
// //                 </Button>
// //                 <Button variant="outline" size="lg">
// //                   Download Info Pack
// //                 </Button>
// //               </div>
// //             </div>
// //             <div className="relative">
// //               <img
// //                 src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop"
// //                 alt="Volunteer walking dogs"
// //                 className="rounded-2xl shadow-lg"
// //                 loading="lazy"
// //               />
// //             </div>
// //           </div>

// //           {/* Volunteer Roles Grid */}
// //           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {volunteerRoles.map((role, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#FFD100] hover:shadow-lg transition-all"
// //               >
// //                 <h3 className="text-xl font-bold text-[#002B5C] mb-2">
// //                   {role.title}
// //                 </h3>
// //                 <p className="text-gray-600 text-sm mb-4">{role.description}</p>
// //                 <p className="text-[#F58220] text-sm font-medium">
// //                   ⏰ {role.commitment}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Fundraising Section */}
// //       <section className="py-16 bg-gray-50" id="fundraise">
// //         <div className="max-w-7xl mx-auto px-4">
// //           <div className="text-center mb-12">
// //             <span className="inline-block text-[#F58220] font-semibold text-sm uppercase tracking-wider mb-2">
// //               Fundraise For Us
// //             </span>
// //             <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">
// //               Start Your Own Fundraiser
// //             </h2>
// //             <p className="text-gray-600 max-w-2xl mx-auto">
// //               Whether it's a sponsored challenge, a bake sale, or a creative event,
// //               your fundraising helps us rescue and rehome more dogs.
// //             </p>
// //           </div>

// //           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
// //             {fundraisingIdeas.map((idea, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
// //               >
// //                 <span className="text-4xl mb-4 block">{idea.icon}</span>
// //                 <h3 className="text-lg font-bold text-[#002B5C] mb-2">
// //                   {idea.title}
// //                 </h3>
// //                 <p className="text-gray-600 text-sm">{idea.description}</p>
// //               </div>
// //             ))}
// //           </div>

// //           <div className="text-center">
// //             <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
// //               Start Fundraising
// //             </Button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Corporate Partners Section */}
// //       <section className="py-16" id="corporate">
// //         <div className="max-w-7xl mx-auto px-4">
// //           <div className="grid lg:grid-cols-2 gap-12 items-center">
// //             <div className="order-2 lg:order-1">
// //               <img
// //                 src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
// //                 alt="Corporate team with rescue dogs"
// //                 className="rounded-2xl shadow-lg"
// //                 loading="lazy"
// //               />
// //             </div>
// //             <div className="order-1 lg:order-2">
// //               <span className="inline-block text-[#F58220] font-semibold text-sm uppercase tracking-wider mb-2">
// //                 Corporate Partnerships
// //               </span>
// //               <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-6">
// //                 Partner With Us
// //               </h2>
// //               <p className="text-gray-600 mb-6">
// //                 Join leading businesses supporting dog welfare. Corporate partnerships
// //                 offer unique opportunities to engage employees, demonstrate CSR
// //                 commitment, and make a tangible difference.
// //               </p>
// //               <ul className="space-y-3 mb-8">
// //                 {[
// //                   'Charity of the Year partnerships',
// //                   'Employee volunteering programs',
// //                   'Cause-related marketing campaigns',
// //                   'Sponsorship opportunities',
// //                   'Payroll giving schemes',
// //                 ].map((item, index) => (
// //                   <li key={index} className="flex items-center gap-3 text-gray-700">
// //                     <span className="w-6 h-6 bg-[#FFD100] rounded-full flex items-center justify-center text-[#002B5C] text-sm">
// //                       ✓
// //                     </span>
// //                     {item}
// //                   </li>
// //                 ))}
// //               </ul>
// //               <Button variant="secondary" size="lg">
// //                 Contact Our Corporate Team
// //               </Button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Legacy Giving */}
// //       <section className="py-16 bg-[#002B5C]" id="legacy">
// //         <div className="max-w-7xl mx-auto px-4">
// //           <div className="max-w-3xl mx-auto text-center">
// //             <Gift className="w-16 h-16 text-[#FFD100] mx-auto mb-6" />
// //             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
// //               Leave a Lasting Legacy
// //             </h2>
// //             <p className="text-gray-300 mb-8">
// //               A gift in your will, no matter the size, helps ensure that future
// //               generations of dogs will receive the care and love they deserve.
// //               Legacy gifts fund nearly a third of our work.
// //             </p>
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //               <Button variant="primary" size="lg">
// //                 Learn About Legacy Giving
// //               </Button>
// //               <Button
// //                 variant="outline"
// //                 size="lg"
// //                 className="border-white text-white hover:bg-white hover:text-[#002B5C]"
// //               >
// //                 Request a Free Guide
// //               </Button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA */}
// //       <CTABanner
// //         title="Ready to Make a Difference?"
// //         description="Every contribution, big or small, helps us save more dogs. Start your journey with Paws & Hearts today."
// //         primaryButtonText="Get Started"
// //         primaryButtonLink="/contact"
// //       />
// //     </div>
// //   );
// // };

// // export default GetInvolvedPage;









// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { orgInfo } from '@/constants/theme';

// const GetInvolvedPage: React.FC = () => {
//   const [formData, setFormData] = useState({
//     fullName: '', email: '', phone: '', age: '',
//     city: '', role: '', availability: '', experience: '',
//     motivation: '', agreeTerms: false,
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const volunteerRoles = [
//   {
//     title: "Rescue Assistant",
//     description:
//       "Help during emergency rescue cases and injured dog support.",
//     button: "Learn More",
//     img: "/image/Rescueaction.png",
//   },
//   {
//     title: "Vaccination Support",
//     description:
//       "Assist in anti-rabies and sterilization campaigns in communities.",
//     button: "Join Campaign",
//     img: "/image/Vaccinationcamp.png",
//   },
//   {
//     title: "Event Helper",
//     description:
//       "Support awareness programs and community education drives.",
//     button: "Participate",
//     img: "/image/foundinjimg.png",
//   },
//   {
//     title: "Administrative Support",
//     description:
//       "Help with data entry, case documentation, and reporting work.",
//     button: "Get Involved",
//     img: "/image/admintrusing.png",
//   },
//   {
//     title: "Photography Volunteer",
//     description:
//       "Capture rescue work and vaccination drives for awareness.",
//     button: "Volunteer",
//     img: "/image/4boysvolunte.png",
//   },
//   {
//     title: "Transport Volunteer",
//     description:
//       "Help safely transport injured dogs to clinics or shelter.",
//     button: "Apply",
//     img: "/image/Rescuingstreet.png",
//   },
// ];

//   const fundraisingIdeas = [
//     { emoji: '🏃', title: 'Sponsored Run', description: 'Join a marathon or fun run for charity', img: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=300&h=200&fit=crop' },
//     { emoji: '🎂', title: 'Bake Sale', description: 'Organize a bake sale at work or school', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop' },
//     { emoji: '🎮', title: 'Gaming Stream', description: 'Stream games and collect donations', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop' },
//     { emoji: '🎪', title: 'Host an Event', description: 'Organize a quiz night or party', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=200&fit=crop' },
//     { emoji: '✂️', title: 'Head Shave', description: 'Get sponsored for a brave haircut', img: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&h=200&fit=crop' },
//     { emoji: '🎁', title: 'Birthday Fundraiser', description: 'Ask for donations instead of gifts', img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=200&fit=crop' },
//   ];

//   const corporateItems = ['Charity of the Year partnerships', 'Employee volunteering programs', 'Cause-related marketing campaigns', 'Sponsorship opportunities', 'Payroll giving schemes'];

//   // const quickLinks = [
//   //   { label: 'Donate', emoji: '❤️', link: '/donate', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=80&h=80&fit=crop' },
//   //   { label: 'Volunteer', emoji: '🙋', link: '#volunteer', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=80&h=80&fit=crop' },
//   //   { label: 'Fundraise', emoji: '💰', link: '#fundraise', img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=80&h=80&fit=crop' },
//   //   { label: 'Corporate', emoji: '🏢', link: '#corporate', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=80&h=80&fit=crop' },
//   // ];

//   const validate = () => {
//     const e: Record<string, string> = {};
//     if (!formData.fullName.trim()) e.fullName = 'Naam zaroori hai';
//     if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Valid email daalen';
//     if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) e.phone = 'Valid phone number daalen';
//     if (!formData.age) e.age = 'Umar likhein';
//     if (!formData.city.trim()) e.city = 'Shehar likhein';
//     if (!formData.role) e.role = 'Role select karein';
//     if (!formData.availability) e.availability = 'Availability batayein';
//     if (!formData.motivation.trim()) e.motivation = 'Yeh field zaroori hai';
//     if (!formData.agreeTerms) e.agreeTerms = 'Terms accept karein';
//     return e;
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value, type } = e.target;
//     setFormData(p => ({ ...p, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
//     setErrors(p => { const n = { ...p }; delete n[name]; return n; });
//   };

//   const handleSubmit = () => {
//     const errs = validate();
//     if (Object.keys(errs).length > 0) { setErrors(errs); return; }
//     setSubmitted(true);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800&family=Hind:wght@400;500;600&display=swap');
//         :root { --Y:#ffd100; --N:#002b5c; --NL:#003d85; --YD:#e6bc00; }
//         *,*::before,*::after{box-sizing:border-box;}
//         .gi{font-family:'Hind',sans-serif;min-height:100vh;color:#333;}
//         .gi h1,.gi h2,.gi h3,.gi h4{font-family:'Baloo 2',cursive;}
//         .gi-w{max-width:1200px;margin:0 auto;padding:0 20px;}

//         /* HERO */
//         .gi-hero{background:var(--N);color:white;padding:90px 0 120px;position:relative;overflow:hidden;}
//         .gi-hero::before{content:'';position:absolute;top:-100px;right:-100px;width:450px;height:450px;background:var(--Y);border-radius:50%;opacity:.07;}
//         .gi-hero::after{content:'';position:absolute;bottom:-80px;left:-60px;width:300px;height:300px;background:var(--Y);border-radius:50%;opacity:.05;}
//         .gi-hero-in{position:relative;z-index:1;max-width:680px;}
//         .gi-tag{display:inline-block;background:var(--Y);color:var(--N);font-family:'Baloo 2',cursive;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:5px 16px;border-radius:4px;margin-bottom:16px;}
//         .gi-hero h1{font-size:clamp(2.2rem,5vw,3.8rem);font-weight:800;line-height:1.1;margin-bottom:20px;}
//         .gi-hero h1 span{color:var(--Y);}
//         .gi-hero p{font-size:1.05rem;color:rgba(255,255,255,.8);line-height:1.7;}

//         /* QUICK */
//         .gi-quick{background:#f8f9ff;padding:0 0 56px;}
//         .gi-qg{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:-60px;}
//         @media(min-width:768px){.gi-qg{grid-template-columns:repeat(4,1fr);}}
//         .gi-qc{background:white;border-radius:16px;padding:24px 16px;text-align:center;box-shadow:0 8px 30px rgba(0,43,92,.1);text-decoration:none;transition:transform .35s cubic-bezier(.34,1.56,.64,1),box-shadow .3s,border-color .3s;border-bottom:4px solid transparent;display:block;}
//         .gi-qc:hover{transform:translateY(-8px);box-shadow:0 20px 50px rgba(0,43,92,.18);border-bottom-color:var(--Y);}
//         .gi-qi{width:54px;height:54px;border-radius:50%;object-fit:cover;margin:0 auto 10px;border:3px solid var(--Y);display:block;transition:transform .3s;}
//         .gi-qc:hover .gi-qi{transform:scale(1.1) rotate(-5deg);}
//         .gi-qc h3{font-weight:700;color:var(--N);font-size:.95rem;}

//         /* LABELS */
//         .gi-lbl{display:inline-block;background:var(--Y);color:var(--N);font-family:'Baloo 2',cursive;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:4px 14px;border-radius:4px;margin-bottom:12px;}
//         .gi-ttl{font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:800;color:var(--N);margin-bottom:12px;}
//         .gi-desc{color:#666;font-size:1rem;line-height:1.7;}

//         /* BTNS */
//         .gi-bp{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;background:var(--N);color:white;font-family:'Baloo 2',cursive;font-weight:700;font-size:.95rem;border-radius:50px;text-decoration:none;border:none;cursor:pointer;transition:background .25s,transform .3s;}
//         .gi-bp:hover{background:var(--NL);transform:translateY(-3px);}
//         .gi-bo{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;background:transparent;color:var(--N);font-family:'Baloo 2',cursive;font-weight:700;font-size:.95rem;border-radius:50px;text-decoration:none;border:2px solid var(--N);cursor:pointer;transition:background .25s,color .25s,transform .3s;}
//         .gi-bo:hover{background:var(--N);color:white;transform:translateY(-3px);}
//         .gi-by{display:inline-flex;align-items:center;gap:8px;padding:14px 30px;background:var(--Y);color:var(--N);font-family:'Baloo 2',cursive;font-weight:700;font-size:1rem;border-radius:50px;text-decoration:none;transition:background .25s,transform .3s;}
//         .gi-by:hover{background:var(--YD);transform:translateY(-3px);}
//         .gi-bwo{display:inline-flex;align-items:center;gap:8px;padding:14px 30px;background:transparent;color:white;font-family:'Baloo 2',cursive;font-weight:700;font-size:1rem;border-radius:50px;text-decoration:none;border:2px solid white;transition:background .25s,color .25s,transform .3s;}
//         .gi-bwo:hover{background:white;color:var(--N);transform:translateY(-3px);}

//         /* VOL */
//         .gi-vol{padding:80px 0;background:white;}
//         .gi-vtop{display:grid;gap:40px;align-items:center;margin-bottom:52px;}
//         @media(min-width:1024px){.gi-vtop{grid-template-columns:1fr 1fr;}}
//         .gi-vtop p{color:#555;line-height:1.7;margin-bottom:24px;}
//         .gi-vbtns{display:flex;flex-wrap:wrap;gap:14px;}
//         .gi-vimg{width:100%;height:380px;object-fit:cover;border-radius:20px;box-shadow:0 20px 60px rgba(0,43,92,.15);transition:transform .4s;}
//         .gi-vimg:hover{transform:scale(1.02);}
//         .gi-rg{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;}
//         .gi-rc{background:#f8f9ff;border-radius:16px;overflow:hidden;border:2px solid transparent;transition:transform .35s cubic-bezier(.34,1.56,.64,1),border-color .3s,box-shadow .3s;cursor:pointer;}
//         .gi-rc:hover{transform:translateY(-8px);border-color:var(--Y);box-shadow:0 16px 40px rgba(0,43,92,.12);}
//         .gi-riw{overflow:hidden;height:160px;position:relative;}
//         .gi-ri{width:100%;height:100%;object-fit:cover;transition:transform .5s;}
//         .gi-rc:hover .gi-ri{transform:scale(1.08);}
//         .gi-rov{position:absolute;inset:0;background:linear-gradient(to bottom,transparent 40%,rgba(0,43,92,.5));opacity:0;transition:opacity .3s;}
//         .gi-rc:hover .gi-rov{opacity:1;}
//         .gi-rb{padding:18px;}
//         .gi-rb h3{font-weight:700;color:var(--N);font-size:1.05rem;margin-bottom:6px;}
//         .gi-rb p{color:#666;font-size:.85rem;line-height:1.5;margin-bottom:10px;}
//         .gi-badge{display:inline-flex;align-items:center;gap:5px;background:var(--Y);color:var(--N);font-family:'Baloo 2',cursive;font-size:.78rem;font-weight:700;padding:3px 12px;border-radius:50px;}

//         /* FUND */
//         .gi-fund{padding:80px 0;background:#f8f9ff;}
//         .gi-fg{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;margin:48px 0 36px;}
//         .gi-fc{background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 16px rgba(0,43,92,.08);transition:transform .35s cubic-bezier(.34,1.56,.64,1),box-shadow .3s,border-color .3s;border-bottom:4px solid transparent;cursor:pointer;}
//         .gi-fc:hover{transform:translateY(-10px) scale(1.02);box-shadow:0 22px 50px rgba(0,43,92,.15);border-bottom-color:var(--Y);}
//         .gi-fiw{overflow:hidden;height:140px;position:relative;}
//         .gi-fimg{width:100%;height:100%;object-fit:cover;transition:transform .5s;}
//         .gi-fc:hover .gi-fimg{transform:scale(1.1);}
//         .gi-fem{position:absolute;top:10px;right:10px;font-size:1.8rem;background:var(--Y);padding:4px 10px;border-radius:10px;}
//         .gi-fb{padding:18px;text-align:center;}
//         .gi-fb h3{font-weight:700;color:var(--N);font-size:1rem;margin-bottom:4px;}
//         .gi-fb p{color:#666;font-size:.85rem;line-height:1.5;}

//         /* CORP */
//         .gi-corp{padding:80px 0;background:white;}
//         .gi-cg{display:grid;gap:48px;align-items:center;}
//         @media(min-width:1024px){.gi-cg{grid-template-columns:1fr 1fr;}}
//         .gi-cimg{width:100%;height:380px;object-fit:cover;border-radius:20px;box-shadow:0 20px 60px rgba(0,43,92,.15);transition:transform .4s;}
//         .gi-cimg:hover{transform:scale(1.02);}
//         .gi-cl{list-style:none;padding:0;margin:20px 0 28px;}
//         .gi-cl li{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #f0f0f0;color:#555;font-size:.92rem;transition:padding-left .25s,color .25s;cursor:pointer;}
//         .gi-cl li:hover{padding-left:8px;color:var(--N);}
//         .gi-ck{width:26px;height:26px;min-width:26px;background:var(--Y);color:var(--N);border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.85rem;}

//         /* LEGACY */
//         .gi-leg{padding:80px 0;background:var(--N);color:white;text-align:center;}
//         .gi-legi{width:80px;height:80px;border-radius:50%;object-fit:cover;border:4px solid var(--Y);margin:0 auto 24px;display:block;animation:gipls 2.5s infinite;}
//         @keyframes gipls{0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(255,209,0,.4)}50%{transform:scale(1.06);box-shadow:0 0 0 14px rgba(255,209,0,0)}}
//         .gi-leg h2{font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:800;margin-bottom:16px;}
//         .gi-leg p{color:rgba(255,255,255,.75);font-size:1rem;max-width:560px;margin:0 auto 32px;line-height:1.7;}
//         .gi-legb{display:flex;flex-wrap:wrap;gap:14px;justify-content:center;}

//         /* ════════════ FORM SECTION ════════════ */
//         .gi-fsec{padding:90px 0;background:linear-gradient(135deg,var(--N) 0%,#004080 100%);position:relative;overflow:hidden;}
//         .gi-fsec::before{content:'';position:absolute;top:-80px;right:-80px;width:380px;height:380px;background:var(--Y);border-radius:50%;opacity:.07;}
//         .gi-fsec::after{content:'';position:absolute;bottom:-80px;left:-80px;width:280px;height:280px;background:var(--Y);border-radius:50%;opacity:.05;}
//         .gi-fcard{max-width:820px;margin:0 auto;background:white;border-radius:28px;padding:52px 44px;box-shadow:0 40px 100px rgba(0,0,0,.28);position:relative;z-index:1;}
//         @media(max-width:600px){.gi-fcard{padding:32px 18px;}}

//         .gi-fhdr{text-align:center;margin-bottom:36px;}
//         .gi-fhdr-img{width:74px;height:74px;border-radius:50%;object-fit:cover;border:4px solid var(--Y);margin:0 auto 16px;display:block;}
//         .gi-fhdr h2{font-size:1.9rem;font-weight:800;color:var(--N);margin-bottom:8px;}
//         .gi-fhdr p{color:#666;font-size:.93rem;line-height:1.6;max-width:500px;margin:0 auto;}

//         .gi-divider{display:flex;align-items:center;gap:12px;margin:28px 0 20px;}
//         .gi-divider-l{flex:1;height:2px;background:linear-gradient(to right,var(--Y),transparent);}
//         .gi-divider-r{flex:1;height:2px;background:linear-gradient(to left,var(--Y),transparent);}
//         .gi-divider-t{font-family:'Baloo 2',cursive;font-weight:700;color:var(--N);font-size:.8rem;letter-spacing:1.5px;text-transform:uppercase;white-space:nowrap;}

//         .gi-fgrid{display:flex;flex-direction:column;gap:20px;}
//         .gi-fr2{display:grid;grid-template-columns:1fr 1fr;gap:20px;}
//         @media(max-width:600px){.gi-fr2{grid-template-columns:1fr;}}
//         .gi-fld{display:flex;flex-direction:column;gap:6px;}
//         .gi-fld label{font-family:'Baloo 2',cursive;font-weight:700;font-size:.88rem;color:var(--N);display:flex;align-items:center;gap:8px;}
//         .gi-fld label img{width:22px;height:22px;border-radius:50%;object-fit:cover;border:1.5px solid var(--Y);}
//         .req{color:#e74c3c;}
//         .gi-inp{width:100%;padding:13px 16px;border:2px solid #e0e4f0;border-radius:11px;font-family:'Hind',sans-serif;font-size:.92rem;color:#333;background:#f8f9ff;transition:border-color .25s,box-shadow .25s,background .25s;outline:none;}
//         .gi-inp:focus{border-color:var(--N);background:white;box-shadow:0 0 0 4px rgba(0,43,92,.08);}
//         .gi-inp.er{border-color:#e74c3c;background:#fff5f5;}
//         .gi-em{color:#e74c3c;font-size:.78rem;font-weight:600;margin-top:2px;}

//         .gi-chkr{display:flex;align-items:flex-start;gap:12px;padding:16px;background:#f8f9ff;border-radius:12px;border:2px solid #e0e4f0;cursor:pointer;transition:border-color .25s,background .25s;}
//         .gi-chkr.er{border-color:#e74c3c;background:#fff5f5;}
//         .gi-chkr:hover{border-color:var(--N);}
//         .gi-chkr input[type=checkbox]{width:20px;height:20px;accent-color:var(--N);cursor:pointer;margin-top:2px;flex-shrink:0;}
//         .gi-chkr span{font-size:.87rem;color:#555;line-height:1.55;}

//         .gi-sub{width:100%;padding:17px;background:var(--N);color:white;font-family:'Baloo 2',cursive;font-size:1.1rem;font-weight:700;border:none;border-radius:14px;cursor:pointer;transition:background .25s,transform .3s,box-shadow .3s;display:flex;align-items:center;justify-content:center;gap:12px;margin-top:4px;}
//         .gi-sub:hover{background:var(--NL);transform:translateY(-3px);box-shadow:0 12px 35px rgba(0,43,92,.25);}
//         .gi-sub img{width:30px;height:30px;border-radius:50%;object-fit:cover;border:2px solid var(--Y);}

//         /* success */
//         .gi-succ{text-align:center;padding:60px 20px;}
//         .gi-succ-tick{width:72px;height:72px;background:#27ae60;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:2rem;margin:0 auto 18px;animation:pop .5s cubic-bezier(.34,1.56,.64,1);}
//         .gi-succ img{width:88px;height:88px;border-radius:50%;object-fit:cover;border:4px solid var(--Y);margin:0 auto 18px;display:block;animation:pop .5s cubic-bezier(.34,1.56,.64,1);}
//         @keyframes pop{from{transform:scale(0)}to{transform:scale(1)}}
//         .gi-succ h2{font-size:2rem;font-weight:800;color:var(--N);margin-bottom:10px;}
//         .gi-succ p{color:#666;font-size:1rem;line-height:1.7;max-width:460px;margin:0 auto 26px;}

//         /* CTA */
//         .gi-cta{padding:80px 0;background:var(--Y);text-align:center;}
//         .gi-cta-img{width:70px;height:70px;border-radius:50%;object-fit:cover;border:4px solid var(--N);margin:0 auto 20px;display:block;}
//         .gi-cta h2{font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:800;color:var(--N);margin-bottom:12px;}
//         .gi-cta p{color:rgba(0,43,92,.75);font-size:1rem;max-width:520px;margin:0 auto 32px;line-height:1.7;}
//       `}</style>

//       <div className="gi">

//         {/* HERO */}
//         <section className="gi-hero">
//           <div className="gi-w"><div className="gi-hero-in">
//             <span className="gi-tag">Make a Difference</span>
//             <h1>Get Involved With <span>{orgInfo?.name || 'Us'}</span></h1>
//             <p>There are many ways you can help us save more dogs. Whether you have time, money, or skills to give, your contribution makes a real difference.</p>
//           </div></div>
//         </section>

//         {/* QUICK LINKS */}
//         {/* <section className="gi-quick">
//           <div className="gi-w">
//             <div className="gi-qg">
//               {quickLinks.map((q, i) => (
//                 <Link key={i} to={q.link} className="gi-qc">
//                   <img src={q.img} alt={q.label} className="gi-qi" />
//                   <h3>{q.emoji} {q.label}</h3>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section> */}

//         {/* VOLUNTEER */}
//         <section className="gi-vol" id="volunteer">
//           <div className="gi-w">
//             <div className="gi-vtop">
//               <div>
//                 <span className="gi-lbl">Volunteer With Us</span>
//                 <h2 className="gi-ttl">Give Your Time,<br />Change a Dog's Life</h2>
//                 <p>Our amazing volunteers are the heart of our organization. From dog walking to event support, there's a role for everyone. No experience necessary – just a love for dogs!</p>
//                 <div className="gi-vbtns">
//                   <a href="#apply-form" className="gi-bp">Apply to Volunteer →</a>
//                   <a href="#" className="gi-bo">Download Info Pack</a>
//                 </div>
//               </div>
//               <div>
//                 <img src="/image/changeshelter.png" alt="Volunteer" className="gi-vimg" />
//               </div>
//             </div>
//             <div className="gi-rg">
//               {volunteerRoles.map((r, i) => (
//                 <div key={i} className="gi-rc">
//                   <div className="gi-riw"><img src={r.img} alt={r.title} className="gi-ri" /><div className="gi-rov" /></div>
//                   <div className="gi-rb">
//                     <h3>{r.title}</h3>
//                     <p>{r.description}</p>
//                     <span className="gi-badge">⏰ {r.commitment}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* FUNDRAISING */}
//         {/* <section className="gi-fund" id="fundraise">
//           <div className="gi-w">
//             <div style={{textAlign:'center'}}>
//               <span className="gi-lbl">Fundraise For Us</span>
//               <h2 className="gi-ttl">Start Your Own Fundraiser</h2>
//               <p className="gi-desc" style={{maxWidth:540,margin:'0 auto'}}>Whether it's a sponsored challenge, a bake sale, or a creative event, your fundraising helps us rescue more dogs.</p>
//             </div>
//             <div className="gi-fg">
//               {fundraisingIdeas.map((f, i) => (
//                 <div key={i} className="gi-fc">
//                   <div className="gi-fiw"><img src={f.img} alt={f.title} className="gi-fimg" /><span className="gi-fem">{f.emoji}</span></div>
//                   <div className="gi-fb"><h3>{f.title}</h3><p>{f.description}</p></div>
//                 </div>
//               ))}
//             </div>
//             <div style={{textAlign:'center'}}><a href="#" className="gi-bp">Start Fundraising →</a></div>
//           </div>
//         </section> */}

//         {/* CORPORATE */}
//         {/* <section className="gi-corp" id="corporate">
//           <div className="gi-w">
//             <div className="gi-cg">
//               <div><img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop" alt="Corporate" className="gi-cimg" /></div>
//               <div>
//                 <span className="gi-lbl">Corporate Partnerships</span>
//                 <h2 className="gi-ttl">Partner With Us</h2>
//                 <p className="gi-desc" style={{marginBottom:16}}>Join leading businesses supporting dog welfare. Corporate partnerships offer unique opportunities to engage employees and make a tangible difference.</p>
//                 <ul className="gi-cl">
//                   {corporateItems.map((item, i) => (
//                     <li key={i}><span className="gi-ck">✓</span>{item}</li>
//                   ))}
//                 </ul>
//                 <a href="/contact" className="gi-bp">Contact Our Corporate Team →</a>
//               </div>
//             </div>
//           </div>
//         </section> */}

//         {/* LEGACY */}
        

//         {/* ══════════════════════════════════════════
//               VOLUNTEER APPLICATION FORM — PAGE KE END MEIN
//         ══════════════════════════════════════════ */}
//        <section className="gi-fsec" id="apply-form">
//   <div className="gi-w">
//     <div className="gi-fcard">
//       {submitted ? (
//         <div className="gi-succ">
//           <div className="gi-succ-tick">✓</div>
//           <img src="/image/Rescueaction.png" alt="Thank you" />
//           <h2>Application Submitted Successfully! 🎉</h2>
//           <p>Thank you! We have received your volunteer application. We will contact you within 2-3 working days.</p>
//           <button className="gi-bp" onClick={() => { setSubmitted(false); setFormData({ fullName:'', email:'', phone:'', age:'', city:'', role:'', availability:'', experience:'', motivation:'', agreeTerms:false }); }}>
//             Submit New Form
//           </button>
//         </div>
//       ) : (
//         <>
//           <div className="gi-fhdr">
//             <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=160&h=160&fit=crop" alt="" className="gi-fhdr-img" />
//             <h2>🐾 Volunteer Application Form</h2>
//             <p>Join us and help improve the lives of community dogs. Fill out the form below — we will get in touch with you soon!</p>
//           </div>

//           {/* Section 1: Personal Info */}
//           <div className="gi-divider">
//             <div className="gi-divider-l" /><span className="gi-divider-t">Personal Information</span><div className="gi-divider-r" />
//           </div>
//           <div className="gi-fgrid">
//             <div className="gi-fr2">
//               <div className="gi-fld">
//                 <label><img src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=40&h=40&fit=crop" alt="" />Full Name <span className="req">*</span></label>
//                 <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your full name" className={`gi-inp ${errors.fullName?'er':''}`} />
//                 {errors.fullName && <span className="gi-em">⚠ {errors.fullName}</span>}
//               </div>
//               <div className="gi-fld">
//                 <label><img src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=40&h=40&fit=crop" alt="" />Email Address <span className="req">*</span></label>
//                 <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="your@email.com" className={`gi-inp ${errors.email?'er':''}`} />
//                 {errors.email && <span className="gi-em">⚠ {errors.email}</span>}
//               </div>
//             </div>
//             <div className="gi-fr2">
//               <div className="gi-fld">
//                 <label><img src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=40&h=40&fit=crop" alt="" />Phone Number <span className="req">*</span></label>
//                 <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+919999999999" className={`gi-inp ${errors.phone?'er':''}`} />
//                 {errors.phone && <span className="gi-em">⚠ {errors.phone}</span>}
//               </div>
//               <div className="gi-fld">
//                 <label><img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=40&h=40&fit=crop" alt="" />Age <span className="req">*</span></label>
//                 <input name="age" value={formData.age} onChange={handleChange} type="number" min="16" max="70" placeholder="Your age" className={`gi-inp ${errors.age?'er':''}`} />
//                 {errors.age && <span className="gi-em">⚠ {errors.age}</span>}
//               </div>
//             </div>
//             <div className="gi-fld">
//               <label><img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=40&h=40&fit=crop" alt="" />City <span className="req">*</span></label>
//               <input name="city" value={formData.city} onChange={handleChange} placeholder="Which city do you live in?" className={`gi-inp ${errors.city?'er':''}`} />
//               {errors.city && <span className="gi-em">⚠ {errors.city}</span>}
//             </div>
//           </div>

//           {/* Section 2: Role */}
//           <div className="gi-divider" style={{marginTop:12}}>
//             <div className="gi-divider-l" /><span className="gi-divider-t">Role & Availability</span><div className="gi-divider-r" />
//           </div>
//           <div className="gi-fgrid">
//             <div className="gi-fr2">
//               <div className="gi-fld">
//                 <label><img src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=40&h=40&fit=crop" alt="" />Volunteer Role <span className="req">*</span></label>
//                 <select name="role" value={formData.role} onChange={handleChange} className={`gi-inp ${errors.role?'er':''}`}>
//                   <option value="">-- Select a role --</option>
//                   <option>Dog Walker</option>
//                   <option>Foster Carer</option>
//                   <option>Event Helper</option>
//                   <option>Administrative Support</option>
//                   <option>Photography</option>
//                   <option>Transport Volunteer</option>
//                   <option>Other</option>
//                 </select>
//                 {errors.role && <span className="gi-em">⚠ {errors.role}</span>}
//               </div>
//               <div className="gi-fld">
//                 <label><img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=40&h=40&fit=crop" alt="" />Availability <span className="req">*</span></label>
//                 <select name="availability" value={formData.availability} onChange={handleChange} className={`gi-inp ${errors.availability?'er':''}`}>
//                   <option value="">-- Select availability --</option>
//                   <option>Weekdays Only</option>
//                   <option>Weekends Only</option>
//                   <option>Both Weekdays & Weekends</option>
//                   <option>Flexible</option>
//                   <option>1-2 hours/week</option>
//                   <option>3-5 hours/week</option>
//                   <option>5+ hours/week</option>
//                 </select>
//                 {errors.availability && <span className="gi-em">⚠ {errors.availability}</span>}
//               </div>
//             </div>
//           </div>

//           {/* Section 3: About You */}
//           <div className="gi-divider" style={{marginTop:12}}>
//             <div className="gi-divider-l" /><span className="gi-divider-t">About You</span><div className="gi-divider-r" />
//           </div>
//           <div className="gi-fgrid">
//             <div className="gi-fld">
//               <label><img src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=40&h=40&fit=crop" alt="" />Prior Experience (Optional)</label>
//               <textarea name="experience" value={formData.experience} onChange={handleChange as any} rows={3} placeholder="Have you previously worked with any NGO or animal shelter? Tell us about it..." className="gi-inp" style={{resize:'vertical',minHeight:88}} />
//             </div>
//             <div className="gi-fld">
//               <label><img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=40&h=40&fit=crop" alt="" />Your Motivation <span className="req">*</span></label>
//               <textarea name="motivation" value={formData.motivation} onChange={handleChange as any} rows={4} placeholder="Tell us about yourself — what brought you here? How would you like to contribute?..." className={`gi-inp ${errors.motivation?'er':''}`} style={{resize:'vertical',minHeight:110}} />
//               {errors.motivation && <span className="gi-em">⚠ {errors.motivation}</span>}
//             </div>
//             <div>
//               <div className={`gi-chkr ${errors.agreeTerms?'er':''}`} onClick={() => { setFormData(p=>({...p,agreeTerms:!p.agreeTerms})); setErrors(p=>{const n={...p};delete n.agreeTerms;return n;}); }}>
//                 <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} onClick={e=>e.stopPropagation()} />
//                 <span> <strong style={{color:'var(--N)'}}>I agree to the Terms & Conditions *</strong></span>
//               </div>
//               {errors.agreeTerms && <span className="gi-em" style={{marginTop:6,display:'block'}}>⚠ {errors.agreeTerms}</span>}
//             </div>
//             <button className="gi-sub" onClick={handleSubmit}>
//               <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=60&h=60&fit=crop" alt="" />
//               Submit Application 🐾
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   </div>
// </section>

//         {/* CTA */}
//         {/* <section className="gi-cta">
//           <div className="gi-w">
//             <img src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=160&h=160&fit=crop" alt="" className="gi-cta-img" />
//             <h2>Ready to Make a Difference?</h2>
//             <p>Every contribution, big or small, helps us save more dogs. Start your journey with us today.</p>
//             <Link to="/contact" className="gi-bp" style={{display:'inline-flex'}}>Get Started →</Link>
//           </div>
//         </section> */}

//       </div>
//     </>
//   );
// };

// export default GetInvolvedPage;






import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { orgInfo } from '@/constants/theme';

const GetInvolvedPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', age: '',
    city: '', role: '', availability: '', experience: '',
    motivation: '', agreeTerms: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);       // ← NEW
  const [errors, setErrors] = useState<Record<string, string>>({});

  const volunteerRoles = [
  {
    title: "Rescue Assistant",
    description:
      "Help during emergency rescue cases and injured dog support.",
    button: "Learn More",
    img: "/image/Rescueaction.png",
  },
  {
    title: "Vaccination Support",
    description:
      "Assist in anti-rabies and sterilization campaigns in communities.",
    button: "Join Campaign",
    img: "/image/Vaccinationcamp.png",
  },
  {
    title: "Event Helper",
    description:
      "Support awareness programs and community education drives.",
    button: "Participate",
    img: "/image/foundinjimg.png",
  },
  {
    title: "Administrative Support",
    description:
      "Help with data entry, case documentation, and reporting work.",
    button: "Get Involved",
    img: "/image/admintrusing.png",
  },
  {
    title: "Photography Volunteer",
    description:
      "Capture rescue work and vaccination drives for awareness.",
    button: "Volunteer",
    img: "/image/4boysvolunte.png",
  },
  {
    title: "Transport Volunteer",
    description:
      "Help safely transport injured dogs to clinics or shelter.",
    button: "Apply",
    img: "/image/Rescuingstreet.png",
  },
];

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.fullName.trim()) e.fullName = 'Naam zaroori hai';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Valid email daalen';
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) e.phone = 'Valid phone number daalen';
    if (!formData.age) e.age = 'Umar likhein';
    if (!formData.city.trim()) e.city = 'Shehar likhein';
    if (!formData.role) e.role = 'Role select karein';
    if (!formData.availability) e.availability = 'Availability batayein';
    if (!formData.motivation.trim()) e.motivation = 'Yeh field zaroori hai';
    if (!formData.agreeTerms) e.agreeTerms = 'Terms accept karein';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(p => ({ ...p, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
    setErrors(p => { const n = { ...p }; delete n[name]; return n; });
  };

  // ── UPDATED handleSubmit with API call ──────────────────────────────────────
  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);

    try {
      const res = await fetch('https://dogbackend-coral.vercel.app/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName:     formData.fullName,
          email:        formData.email,
          phone:        formData.phone,
          age:          formData.age,
          city:         formData.city,
          role:         formData.role,
          availability: formData.availability,
          experience:   formData.experience,
          motivation:   formData.motivation,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert(data.message || 'Kuch galat hua. Dobara try karein.');
      }
    } catch (err) {
      alert('Server se connect nahi ho pa raha. Backend chal raha hai? (localhost:5000)');
    } finally {
      setLoading(false);
    }
  };
  // ───────────────────────────────────────────────────────────────────────────

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800&family=Hind:wght@400;500;600&display=swap');
        :root { --Y:#ffd100; --N:#002b5c; --NL:#003d85; --YD:#e6bc00; }
        *,*::before,*::after{box-sizing:border-box;}
        .gi{font-family:'Hind',sans-serif;min-height:100vh;color:#333;}
        .gi h1,.gi h2,.gi h3,.gi h4{font-family:'Baloo 2',cursive;}
        .gi-w{max-width:1200px;margin:0 auto;padding:0 20px;}

        /* HERO */
        .gi-hero{background:var(--N);color:white;padding:90px 0 120px;position:relative;overflow:hidden;}
        .gi-hero::before{content:'';position:absolute;top:-100px;right:-100px;width:450px;height:450px;background:var(--Y);border-radius:50%;opacity:.07;}
        .gi-hero::after{content:'';position:absolute;bottom:-80px;left:-60px;width:300px;height:300px;background:var(--Y);border-radius:50%;opacity:.05;}
        .gi-hero-in{position:relative;z-index:1;max-width:680px;}
        .gi-tag{display:inline-block;background:var(--Y);color:var(--N);font-family:'Baloo 2',cursive;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:5px 16px;border-radius:4px;margin-bottom:16px;}
        .gi-hero h1{font-size:clamp(2.2rem,5vw,3.8rem);font-weight:800;line-height:1.1;margin-bottom:20px;}
        .gi-hero h1 span{color:var(--Y);}
        .gi-hero p{font-size:1.05rem;color:rgba(255,255,255,.8);line-height:1.7;}

        /* LABELS */
        .gi-lbl{display:inline-block;background:var(--Y);color:var(--N);font-family:'Baloo 2',cursive;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:4px 14px;border-radius:4px;margin-bottom:12px;}
        .gi-ttl{font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:800;color:var(--N);margin-bottom:12px;}
        .gi-desc{color:#666;font-size:1rem;line-height:1.7;}

        /* BTNS */
        .gi-bp{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;background:var(--N);color:white;font-family:'Baloo 2',cursive;font-weight:700;font-size:.95rem;border-radius:50px;text-decoration:none;border:none;cursor:pointer;transition:background .25s,transform .3s;}
        .gi-bp:hover{background:var(--NL);transform:translateY(-3px);}
        .gi-bo{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;background:transparent;color:var(--N);font-family:'Baloo 2',cursive;font-weight:700;font-size:.95rem;border-radius:50px;text-decoration:none;border:2px solid var(--N);cursor:pointer;transition:background .25s,color .25s,transform .3s;}
        .gi-bo:hover{background:var(--N);color:white;transform:translateY(-3px);}

        /* VOL */
        .gi-vol{padding:80px 0;background:white;}
        .gi-vtop{display:grid;gap:40px;align-items:center;margin-bottom:52px;}
        @media(min-width:1024px){.gi-vtop{grid-template-columns:1fr 1fr;}}
        .gi-vtop p{color:#555;line-height:1.7;margin-bottom:24px;}
        .gi-vbtns{display:flex;flex-wrap:wrap;gap:14px;}
        .gi-vimg{width:100%;height:380px;object-fit:cover;border-radius:20px;box-shadow:0 20px 60px rgba(0,43,92,.15);transition:transform .4s;}
        .gi-vimg:hover{transform:scale(1.02);}
        .gi-rg{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;}
        .gi-rc{background:#f8f9ff;border-radius:16px;overflow:hidden;border:2px solid transparent;transition:transform .35s cubic-bezier(.34,1.56,.64,1),border-color .3s,box-shadow .3s;cursor:pointer;}
        .gi-rc:hover{transform:translateY(-8px);border-color:var(--Y);box-shadow:0 16px 40px rgba(0,43,92,.12);}
        .gi-riw{overflow:hidden;height:160px;position:relative;}
        .gi-ri{width:100%;height:100%;object-fit:cover;transition:transform .5s;}
        .gi-rc:hover .gi-ri{transform:scale(1.08);}
        .gi-rov{position:absolute;inset:0;background:linear-gradient(to bottom,transparent 40%,rgba(0,43,92,.5));opacity:0;transition:opacity .3s;}
        .gi-rc:hover .gi-rov{opacity:1;}
        .gi-rb{padding:18px;}
        .gi-rb h3{font-weight:700;color:var(--N);font-size:1.05rem;margin-bottom:6px;}
        .gi-rb p{color:#666;font-size:.85rem;line-height:1.5;margin-bottom:10px;}
        .gi-badge{display:inline-flex;align-items:center;gap:5px;background:var(--Y);color:var(--N);font-family:'Baloo 2',cursive;font-size:.78rem;font-weight:700;padding:3px 12px;border-radius:50px;}

        /* FORM SECTION */
        .gi-fsec{padding:90px 0;background:linear-gradient(135deg,var(--N) 0%,#004080 100%);position:relative;overflow:hidden;}
        .gi-fsec::before{content:'';position:absolute;top:-80px;right:-80px;width:380px;height:380px;background:var(--Y);border-radius:50%;opacity:.07;}
        .gi-fsec::after{content:'';position:absolute;bottom:-80px;left:-80px;width:280px;height:280px;background:var(--Y);border-radius:50%;opacity:.05;}
        .gi-fcard{max-width:820px;margin:0 auto;background:white;border-radius:28px;padding:52px 44px;box-shadow:0 40px 100px rgba(0,0,0,.28);position:relative;z-index:1;}
        @media(max-width:600px){.gi-fcard{padding:32px 18px;}}

        .gi-fhdr{text-align:center;margin-bottom:36px;}
        .gi-fhdr-img{width:74px;height:74px;border-radius:50%;object-fit:cover;border:4px solid var(--Y);margin:0 auto 16px;display:block;}
        .gi-fhdr h2{font-size:1.9rem;font-weight:800;color:var(--N);margin-bottom:8px;}
        .gi-fhdr p{color:#666;font-size:.93rem;line-height:1.6;max-width:500px;margin:0 auto;}

        .gi-divider{display:flex;align-items:center;gap:12px;margin:28px 0 20px;}
        .gi-divider-l{flex:1;height:2px;background:linear-gradient(to right,var(--Y),transparent);}
        .gi-divider-r{flex:1;height:2px;background:linear-gradient(to left,var(--Y),transparent);}
        .gi-divider-t{font-family:'Baloo 2',cursive;font-weight:700;color:var(--N);font-size:.8rem;letter-spacing:1.5px;text-transform:uppercase;white-space:nowrap;}

        .gi-fgrid{display:flex;flex-direction:column;gap:20px;}
        .gi-fr2{display:grid;grid-template-columns:1fr 1fr;gap:20px;}
        @media(max-width:600px){.gi-fr2{grid-template-columns:1fr;}}
        .gi-fld{display:flex;flex-direction:column;gap:6px;}
        .gi-fld label{font-family:'Baloo 2',cursive;font-weight:700;font-size:.88rem;color:var(--N);display:flex;align-items:center;gap:8px;}
        .gi-fld label img{width:22px;height:22px;border-radius:50%;object-fit:cover;border:1.5px solid var(--Y);}
        .req{color:#e74c3c;}
        .gi-inp{width:100%;padding:13px 16px;border:2px solid #e0e4f0;border-radius:11px;font-family:'Hind',sans-serif;font-size:.92rem;color:#333;background:#f8f9ff;transition:border-color .25s,box-shadow .25s,background .25s;outline:none;}
        .gi-inp:focus{border-color:var(--N);background:white;box-shadow:0 0 0 4px rgba(0,43,92,.08);}
        .gi-inp.er{border-color:#e74c3c;background:#fff5f5;}
        .gi-em{color:#e74c3c;font-size:.78rem;font-weight:600;margin-top:2px;}

        .gi-chkr{display:flex;align-items:flex-start;gap:12px;padding:16px;background:#f8f9ff;border-radius:12px;border:2px solid #e0e4f0;cursor:pointer;transition:border-color .25s,background .25s;}
        .gi-chkr.er{border-color:#e74c3c;background:#fff5f5;}
        .gi-chkr:hover{border-color:var(--N);}
        .gi-chkr input[type=checkbox]{width:20px;height:20px;accent-color:var(--N);cursor:pointer;margin-top:2px;flex-shrink:0;}
        .gi-chkr span{font-size:.87rem;color:#555;line-height:1.55;}

        /* Submit button + loading state */
        .gi-sub{width:100%;padding:17px;background:var(--N);color:white;font-family:'Baloo 2',cursive;font-size:1.1rem;font-weight:700;border:none;border-radius:14px;cursor:pointer;transition:background .25s,transform .3s,box-shadow .3s;display:flex;align-items:center;justify-content:center;gap:12px;margin-top:4px;}
        .gi-sub:hover:not(:disabled){background:var(--NL);transform:translateY(-3px);box-shadow:0 12px 35px rgba(0,43,92,.25);}
        .gi-sub:disabled{opacity:.7;cursor:not-allowed;transform:none;}
        .gi-sub img{width:30px;height:30px;border-radius:50%;object-fit:cover;border:2px solid var(--Y);}
        .gi-spinner{width:22px;height:22px;border:3px solid rgba(255,255,255,.3);border-top-color:white;border-radius:50%;animation:spin .7s linear infinite;flex-shrink:0;}
        @keyframes spin{to{transform:rotate(360deg)}}

        /* success */
        .gi-succ{text-align:center;padding:60px 20px;}
        .gi-succ-tick{width:72px;height:72px;background:#27ae60;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:2rem;margin:0 auto 18px;animation:pop .5s cubic-bezier(.34,1.56,.64,1);}
        .gi-succ img{width:88px;height:88px;border-radius:50%;object-fit:cover;border:4px solid var(--Y);margin:0 auto 18px;display:block;animation:pop .5s cubic-bezier(.34,1.56,.64,1);}
        @keyframes pop{from{transform:scale(0)}to{transform:scale(1)}}
        .gi-succ h2{font-size:2rem;font-weight:800;color:var(--N);margin-bottom:10px;}
        .gi-succ p{color:#666;font-size:1rem;line-height:1.7;max-width:460px;margin:0 auto 26px;}
      `}</style>

      <div className="gi">

        {/* HERO */}
        <section className="gi-hero">
          <div className="gi-w"><div className="gi-hero-in">
            <span className="gi-tag">Make a Difference</span>
            <h1>Get Involved With <span>{orgInfo?.name || 'Us'}</span></h1>
            <p>There are many ways you can help us save more dogs. Whether you have time, money, or skills to give, your contribution makes a real difference.</p>
          </div></div>
        </section>

        {/* VOLUNTEER */}
        <section className="gi-vol" id="volunteer">
          <div className="gi-w">
            <div className="gi-vtop">
              <div>
                <span className="gi-lbl">Volunteer With Us</span>
                <h2 className="gi-ttl">Give Your Time,<br />Change a Dog's Life</h2>
                <p>Our amazing volunteers are the heart of our organization. From dog walking to event support, there's a role for everyone. No experience necessary – just a love for dogs!</p>
                <div className="gi-vbtns">
                  <a href="#apply-form" className="gi-bp">Apply to Volunteer →</a>
                  <a href="#" className="gi-bo">Download Info Pack</a>
                </div>
              </div>
              <div>
                <img src="/image/changeshelter.png" alt="Volunteer" className="gi-vimg" />
              </div>
            </div>
            <div className="gi-rg">
              {volunteerRoles.map((r, i) => (
                <div key={i} className="gi-rc">
                  <div className="gi-riw"><img src={r.img} alt={r.title} className="gi-ri" /><div className="gi-rov" /></div>
                  <div className="gi-rb">
                    <h3>{r.title}</h3>
                    <p>{r.description}</p>
                    <span className="gi-badge">⏰ {r.commitment}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VOLUNTEER APPLICATION FORM */}
        <section className="gi-fsec" id="apply-form">
          <div className="gi-w">
            <div className="gi-fcard">
              {submitted ? (
                <div className="gi-succ">
                  <div className="gi-succ-tick">✓</div>
                  <img src="/image/Rescueaction.png" alt="Thank you" />
                  <h2>Application Submitted Successfully! 🎉</h2>
                  <p>Thank you! We have received your volunteer application. We will contact you within 2-3 working days.</p>
                  <button className="gi-bp" onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName:'', email:'', phone:'', age:'', city:'', role:'', availability:'', experience:'', motivation:'', agreeTerms:false });
                  }}>
                    Submit New Form
                  </button>
                </div>
              ) : (
                <>
                  <div className="gi-fhdr">
                    <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=160&h=160&fit=crop" alt="" className="gi-fhdr-img" />
                    <h2>🐾 Volunteer Application Form</h2>
                    <p>Join us and help improve the lives of community dogs. Fill out the form below — we will get in touch with you soon!</p>
                  </div>

                  {/* Section 1: Personal Info */}
                  <div className="gi-divider">
                    <div className="gi-divider-l" /><span className="gi-divider-t">Personal Information</span><div className="gi-divider-r" />
                  </div>
                  <div className="gi-fgrid">
                    <div className="gi-fr2">
                      <div className="gi-fld">
                        <label><img src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=40&h=40&fit=crop" alt="" />Full Name <span className="req">*</span></label>
                        <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your full name" className={`gi-inp ${errors.fullName?'er':''}`} />
                        {errors.fullName && <span className="gi-em">⚠ {errors.fullName}</span>}
                      </div>
                      <div className="gi-fld">
                        <label><img src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=40&h=40&fit=crop" alt="" />Email Address <span className="req">*</span></label>
                        <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="your@email.com" className={`gi-inp ${errors.email?'er':''}`} />
                        {errors.email && <span className="gi-em">⚠ {errors.email}</span>}
                      </div>
                    </div>
                    <div className="gi-fr2">
                      <div className="gi-fld">
                        <label><img src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=40&h=40&fit=crop" alt="" />Phone Number <span className="req">*</span></label>
                        <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+919999999999" className={`gi-inp ${errors.phone?'er':''}`} />
                        {errors.phone && <span className="gi-em">⚠ {errors.phone}</span>}
                      </div>
                      <div className="gi-fld">
                        <label><img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=40&h=40&fit=crop" alt="" />Age <span className="req">*</span></label>
                        <input name="age" value={formData.age} onChange={handleChange} type="number" min="16" max="70" placeholder="Your age" className={`gi-inp ${errors.age?'er':''}`} />
                        {errors.age && <span className="gi-em">⚠ {errors.age}</span>}
                      </div>
                    </div>
                    <div className="gi-fld">
                      <label><img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=40&h=40&fit=crop" alt="" />City <span className="req">*</span></label>
                      <input name="city" value={formData.city} onChange={handleChange} placeholder="Which city do you live in?" className={`gi-inp ${errors.city?'er':''}`} />
                      {errors.city && <span className="gi-em">⚠ {errors.city}</span>}
                    </div>
                  </div>

                  {/* Section 2: Role */}
                  <div className="gi-divider" style={{marginTop:12}}>
                    <div className="gi-divider-l" /><span className="gi-divider-t">Role & Availability</span><div className="gi-divider-r" />
                  </div>
                  <div className="gi-fgrid">
                    <div className="gi-fr2">
                      <div className="gi-fld">
                        <label><img src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=40&h=40&fit=crop" alt="" />Volunteer Role <span className="req">*</span></label>
                        <select name="role" value={formData.role} onChange={handleChange} className={`gi-inp ${errors.role?'er':''}`}>
                          <option value="">-- Select a role --</option>
                          <option>Rescue Assistant</option>
                          <option>Vaccination Support</option>
                          <option>Event Helper</option>
                          <option>Administrative Support</option>
                          <option>Photography Volunteer</option>
                          <option>Transport Volunteer</option>
                          <option>Other</option>
                        </select>
                        {errors.role && <span className="gi-em">⚠ {errors.role}</span>}
                      </div>
                      <div className="gi-fld">
                        <label><img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=40&h=40&fit=crop" alt="" />Availability <span className="req">*</span></label>
                        <select name="availability" value={formData.availability} onChange={handleChange} className={`gi-inp ${errors.availability?'er':''}`}>
                          <option value="">-- Select availability --</option>
                          <option>Weekdays Only</option>
                          <option>Weekends Only</option>
                          <option>Both Weekdays & Weekends</option>
                          <option>Flexible</option>
                          <option>1-2 hours/week</option>
                          <option>3-5 hours/week</option>
                          <option>5+ hours/week</option>
                        </select>
                        {errors.availability && <span className="gi-em">⚠ {errors.availability}</span>}
                      </div>
                    </div>
                  </div>

                  {/* Section 3: About You */}
                  <div className="gi-divider" style={{marginTop:12}}>
                    <div className="gi-divider-l" /><span className="gi-divider-t">About You</span><div className="gi-divider-r" />
                  </div>
                  <div className="gi-fgrid">
                    <div className="gi-fld">
                      <label><img src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=40&h=40&fit=crop" alt="" />Experience </label>
                      <textarea name="experience" value={formData.experience} onChange={handleChange as any} rows={3} placeholder="Have you previously worked with any NGO or animal shelter? Tell us about it..." className="gi-inp" style={{resize:'vertical',minHeight:88}} />
                    </div>
                    <div className="gi-fld">
                      <label><img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=40&h=40&fit=crop" alt="" />Your Motivation <span className="req">*</span></label>
                      <textarea name="motivation" value={formData.motivation} onChange={handleChange as any} rows={4} placeholder="Tell us about yourself — what brought you here? How would you like to contribute?..." className={`gi-inp ${errors.motivation?'er':''}`} style={{resize:'vertical',minHeight:110}} />
                      {errors.motivation && <span className="gi-em">⚠ {errors.motivation}</span>}
                    </div>
                    <div>
                      <div className={`gi-chkr ${errors.agreeTerms?'er':''}`} onClick={() => { setFormData(p=>({...p,agreeTerms:!p.agreeTerms})); setErrors(p=>{const n={...p};delete n.agreeTerms;return n;}); }}>
                        <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} onClick={e=>e.stopPropagation()} />
                        <span><strong style={{color:'var(--N)'}}>I agree to the Terms & Conditions *</strong></span>
                      </div>
                      {errors.agreeTerms && <span className="gi-em" style={{marginTop:6,display:'block'}}>⚠ {errors.agreeTerms}</span>}
                    </div>

                    {/* ── Submit Button with loading spinner ── */}
                    <button className="gi-sub" onClick={handleSubmit} disabled={loading}>
                      {loading ? (
                        <>
                          <div className="gi-spinner" />
                          Sending Application...
                        </>
                      ) : (
                        <>
                          <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=60&h=60&fit=crop" alt="" />
                          Submit Application 🐾
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default GetInvolvedPage;