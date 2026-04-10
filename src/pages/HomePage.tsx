






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
  { id: 1, src: '/image/dogtreated.png', thumb: '/image/dogtreated.png', caption: 'Injured dog treated after road accident', category: '' },
  { id: 2, src: '/image/antirabies.jpeg', thumb: '/image/antirabies.jpeg', caption: 'Mass anti-rabies vaccination drive', category: '' },
  { id: 3, src: '/image/strretdog.jpeg', thumb: '/image/strretdog.jpeg', caption: 'Puppy safety & mother dog care', category: '' },
  { id: 4, src: '/image/Society.jpeg', thumb: '/image/Society.jpeg', caption: 'Society conflict resolved peacefully', category: '' },
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
            
              cta: 'Find your match',
              bg: '#ffc107',
              img: '/image/Streetdog.jpeg',
            },
            {
              icon: HeartPulse,
              title: 'Emergency & Medical Care',
              desc: 'Immediate response for injured, sick, or accident-affected dogs with on-site aid or hospital treatment',
             
              cta: 'Make a donation',
              bg: '#f97316',
              img: '/image/Animal.jpeg',
            },
            {
              icon: Users,
              title: 'Vaccination Programs',
              desc: 'Anti-rabies and core vaccination drives to protect dogs and ensure public safety in communities',
             
              cta: 'Get involved',
              bg: '#0891b2',
              img: '/image/Vaccination.jpeg',
            },
            {
              icon: ShieldCheck,
              title: 'Shelter & Recovery Care',
              desc: 'Temporary shelter support for injured or recovering dogs under veterinary supervision',
             
              cta: 'Learn more',
              bg: '#65a30d',
              img: '/image/Animalrescue.jpeg',
            },
          ].map((card) => (
            <a
              key={card.title}
              href={card.link}
              className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-400 hover:-translate-y-2 no-underline"
              style={{ border: '1px solid #f1f5f9' }}
            >
              {/* Image top block */}
              <div className="relative overflow-hidden" style={{ height: '180px' }}>
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300"
                  style={{ background: card.bg }}
                >
                  <card.icon size={36} color="white" />
                </div>
              </div>

              {/* Content */}
              <div className="bg-white p-6">
                <h3 className="text-lg font-bold text-[#002b5c] mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5" style={{ minHeight: '56px' }}>
                  {card.desc}
                </p>

                <div
                  className="inline-flex items-center gap-1.5 font-bold text-sm"
                  style={{ color: card.bg }}
                >
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
                <img src="/image/foundinjimg.png" alt="Vet treating dog" className="w-full h-full object-cover" loading="lazy" />
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
            <a href="/contact-us" className="bg-white/40 border-2 border-[#002b5c] text-[#002b5c] px-10 py-5 rounded-2xl font-bold text-base hover:bg-[#002b5c] hover:text-white hover:border-[#002b5c] transition-all hover:-translate-y-1 backdrop-blur-sm">
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