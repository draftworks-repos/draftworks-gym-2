import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, ShieldCheck, Flame, Compass, Award, CheckCircle2, ChevronRight, Maximize2 } from 'lucide-react';
import { SITE_INFO, COACHES, GALLERY_ITEMS, BRANCHES } from '../data/siteData';
import { ProgramsCarousel } from '../components/ProgramsCarousel';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ReviewsCarousel } from '../components/ReviewsCarousel';
import { BranchesCarousel } from '../components/BranchesCarousel';
import { Lightbox } from '../components/Lightbox';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenEnquiry: (programId?: string, branchId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightboxAt = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full bg-[#101010]">
      {/* 1. HERO SECTION: Full-screen background photograph (~100svh on desktop) */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-16 items-end">
        {/* Full-screen background photography with deep black image treatment */}
        <div className="absolute inset-0 z-0">
          <img
            src="/temp/hero.webp"
            alt="DraftWorks Strength Training Facility"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Deep black image treatment with warm golden directional fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/80 to-transparent" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">

            {/* Large Archivo typography with selective warm golden highlight */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-[#F5F3ED] tracking-tighter leading-[1.05] uppercase">
              Intentional <br />
              <span className="text-[#F2C14E]">Strength.</span> <br />
              Zero Compromise.
            </h1>

            {/* Short supporting copy */}
            <p className="mt-6 text-base sm:text-lg text-[#A6A39B] max-w-xl font-normal leading-relaxed">
              DraftWorks is an established strength and athletic conditioning club. We reject crowded commercial gym gimmicks in favor of Olympic-standard lifting platforms, biomechanical precision, and clinical recovery suites.
            </p>

            {/* Action buttons: 1 prominent yellow CTA + optional secondary text link */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={() => onOpenEnquiry()}
                className="py-4 px-8 text-center font-heading font-black text-xs uppercase tracking-widest text-[#101010] bg-[#F2C14E] hover:bg-[#D9A52E] rounded-[2px] transition-all cursor-pointer shadow-lg active:scale-[0.99] whitespace-nowrap"
              >
                Claim Complimentary Session
              </button>

              <button
                type="button"
                onClick={() => onNavigate('programs')}
                className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5F3ED] hover:text-[#F2C14E] transition-colors cursor-pointer py-2 group"
              >
                <span>Explore Training Programs</span>
                <ChevronRight className="w-4 h-4 text-[#F2C14E] transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Quiet trust markers */}
            <div className="mt-14 pt-8 border-t border-[#35332D]/80 hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-6 text-left ">
              <div>
                <div className="font-heading font-black text-2xl text-[#F5F3ED]">5</div>
                <div className="text-[11px] text-[#A6A39B] uppercase tracking-wider font-semibold mt-0.5">Flagship Clubs</div>
              </div>
              <div>
                <div className="font-heading font-black text-2xl text-[#F2C14E]">1 : 6</div>
                <div className="text-[11px] text-[#A6A39B] uppercase tracking-wider font-semibold mt-0.5">Coach-to-Lifter Cap</div>
              </div>
              <div>
                <div className="font-heading font-black text-2xl text-[#F5F3ED]">100%</div>
                <div className="text-[11px] text-[#A6A39B] uppercase tracking-wider font-semibold mt-0.5">Eleiko & Prime Certified</div>
              </div>
              <div>
                <div className="font-heading font-black text-2xl text-[#F5F3ED]">3°C – 85°C</div>
                <div className="text-[11px] text-[#A6A39B] uppercase tracking-wider font-semibold mt-0.5">Contrast Recovery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT: Editorial Introduction */}
      <section className="py-24 bg-[#1A1A1A] border-t border-b border-[#35332D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Photography Left */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-[3px] overflow-hidden border border-[#35332D] bg-[#252525]">
                <img
                  src="/temp/split.webp"
                  alt="DraftWorks Coaching & Lifting Platform"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Editorial Copy Right */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
                  About DraftWorks
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F3ED] tracking-tight mt-2">
                  Built for athletes who take their physical output seriously.
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#A6A39B] leading-relaxed">
                <p>
                  Founded in 2021 by Olympic lifting coach Vikramaditya Rathore and sports biomechanist Rhea Menon, DraftWorks was designed as an antidote to chaotic, overcrowded commercial gym chains in India.
                </p>
                <p>
                  We operate 5 flagship facilities across Bengaluru, Hyderabad, Mumbai, Pune, and New Delhi. Every square foot is engineered around human movement: dedicated Eleiko lifting platforms, custom pin-loaded cams that honor natural muscle resistance curves, high-density sprint turf, and clinical contrast therapy suites.
                </p>
                <p>
                  No gimmicky mirror selfie lighting. No blaring pop tracks. Just serious lifters, knowledgeable coaches, and measurable biometric progression.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F2C14E] hover:text-[#D9A52E] transition-colors cursor-pointer group"
                >
                  <span>Read our full club story & founder manifesto</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES / TRAINING PROGRAMS: Horizontal Carousel */}
      <section className="py-24 bg-[#101010]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProgramsCarousel
            onSelectProgram={() => onNavigate('programs')}
            onEnquireProgram={(progId) => onOpenEnquiry(progId)}
          />
        </div>
      </section>

      {/* 4. WHY US: Asymmetric Editorial Composition (Distinct from generic 4-card grids) */}
      <section className="py-24 bg-[#1A1A1A] border-t border-b border-[#35332D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
              The DraftWorks Architecture
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#F5F3ED] tracking-tight mt-2 max-w-3xl">
              Why serious lifters choose DraftWorks over conventional commercial gyms.
            </h2>
          </div>

          {/* Asymmetric 3-block arrangement with high visual contrast */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Block 1: Large feature with photo & technical spec (col 7) */}
            <div className="lg:col-span-7 bg-[#252525] border border-[#35332D] rounded-[3px] p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#F2C14E] uppercase tracking-wider">
                  01. Mechanical Integrity
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F5F3ED] tracking-tight mt-2">
                  Competition-Grade IWF Platforms & Cam-Loaded Profiles
                </h3>
                <p className="text-sm text-[#A6A39B] leading-relaxed mt-4">
                  We refuse to fill floor space with generic catalog selectorized equipment. Every barbell in DraftWorks is an Eleiko Swedish steel bar calibrated within 10 grams. Our pin-loaded machinery uses variable cam resistance profiles designed to challenge muscles where they are biomechanically strongest, drastically mitigating joint shear.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#35332D] grid grid-cols-3 gap-4 text-xs">
                <div>
                  <div className="font-mono text-[#F5F3ED] font-bold">215,000 PSI</div>
                  <div className="text-[#A6A39B] text-[11px] mt-0.5">Tensile Steel Strength</div>
                </div>
                <div>
                  <div className="font-mono text-[#F5F3ED] font-bold">±10 Grams</div>
                  <div className="text-[#A6A39B] text-[11px] mt-0.5">Plate Calibration</div>
                </div>
                <div>
                  <div className="font-mono text-[#F2C14E] font-bold">Zero Wait</div>
                  <div className="text-[#A6A39B] text-[11px] mt-0.5">Guaranteed Rack Access</div>
                </div>
              </div>
            </div>

            {/* Block 2 & 3: Stacked Editorial Points (col 5) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Point 2 */}
              <div className="bg-[#252525] border border-[#35332D] rounded-[3px] p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#F2C14E] uppercase tracking-wider">
                    02. Coach Density
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F5F3ED] tracking-tight mt-1.5">
                    Strict 1:6 Floor Density Cap
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A6A39B] leading-relaxed mt-2.5">
                    Most gyms sell memberships hoping you will never show up. We cap active floor access so that there is never more than 6 lifters per coaching supervisor during peak morning and evening sessions.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#35332D] text-xs text-[#F2C14E] font-semibold">
                  Active Member Floor Cap Enforced Daily
                </div>
              </div>

              {/* Point 3 */}
              <div className="bg-[#252525] border border-[#35332D] rounded-[3px] p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#F2C14E] uppercase tracking-wider">
                    03. Thermal Contrast
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F5F3ED] tracking-tight mt-1.5">
                    Dedicated 3°C Plunge & 85°C Finnish Sauna
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A6A39B] leading-relaxed mt-2.5">
                    Training is only half the equation. Our dedicated recovery suites allow members to flush metabolic waste and activate cellular recovery immediately following heavy resistance bouts.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#35332D] text-xs text-[#F5F3ED] font-semibold">
                  Normatec 3 Pneumatic Compression Included
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR COACHES: Coaching Team Section */}
      <section className="py-24 bg-[#101010]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
                The Faculty
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#F5F3ED] tracking-tight mt-1">
                Our Head Coaches
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#A6A39B] max-w-md">
              Every DraftWorks coach carries minimum CSCS, USAW or Sports Physio credentials with documented track records in athletic periodization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COACHES.map((coach) => (
              <div
                key={coach.id}
                className="bg-[#1A1A1A] border border-[#35332D] rounded-[3px] overflow-hidden group hover:border-[#F2C14E]/60 transition-colors"
              >
                <div className="aspect-[4/5] bg-[#252525] overflow-hidden relative">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs">
                    <span className="text-[11px] font-mono text-[#F2C14E]">{coach.experience}</span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-heading font-bold text-lg text-[#F5F3ED] tracking-tight group-hover:text-[#F2C14E] transition-colors">
                    {coach.name}
                  </h3>
                  <div className="text-xs font-medium text-[#A6A39B]">
                    {coach.role}
                  </div>
                  <div className="text-[11px] text-[#F2C14E]/90 font-mono">
                    {coach.credentials}
                  </div>
                  <p className="text-xs text-[#A6A39B] leading-relaxed pt-2 border-t border-[#35332D]/80">
                    {coach.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BEFORE & AFTER: Interactive Transformation Slider */}
      <section className="py-24 bg-[#1A1A1A] border-t border-b border-[#35332D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
              Demonstrated Outcomes
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#F5F3ED] tracking-tight mt-1">
              Real Biometric Transformations
            </h2>
            <p className="text-xs sm:text-sm text-[#A6A39B] mt-2">
              Drag the centre divider to inspect the mechanical and compositional change.
            </p>
          </div>

          {/* Dedicated Before & After Interactive Slider */}
          <BeforeAfterSlider />
        </div>
      </section>

      {/* 7. GALLERY: Photography-led with small labels and full-screen viewer */}
      <section className="py-24 bg-[#101010]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
                Visual Archive
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#F5F3ED] tracking-tight mt-1">
                The Facility Floor
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F2C14E] hover:text-[#D9A52E] cursor-pointer"
            >
              <span>Explore All Archive Photography</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Asymmetric Photography Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {GALLERY_ITEMS.slice(0, 4).map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightboxAt(index)}
                className="group relative aspect-[4/3] bg-[#1A1A1A] border border-[#35332D] rounded-[3px] overflow-hidden cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                {/* Small minimal label on bottom left + view control */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#F5F3ED] z-10 pointer-events-none">
                  <span className="bg-[#101010]/85 px-2.5 py-1 rounded-[2px] border border-[#35332D] text-[11px] font-medium">
                    {item.title}
                  </span>
                  <div className="w-7 h-7 rounded-[2px] bg-[#101010]/85 border border-[#35332D] flex items-center justify-center text-[#F2C14E]">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BRANCHES CAROUSEL */}
      <section className="py-24 bg-[#1A1A1A] border-t border-b border-[#35332D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BranchesCarousel
            onSelectBranch={() => onNavigate('contact')}
            onEnquireBranch={(bId) => onOpenEnquiry(undefined, bId)}
          />
        </div>
      </section>

      {/* 9. GOOGLE REVIEWS: Recognized card format */}
      <section className="py-24 bg-[#101010]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReviewsCarousel />
        </div>
      </section>

      {/* 10. FULL-WIDTH PHOTOGRAPHIC CTA: Strong gym photo, dark overlay, warm golden fade */}
      <section className="relative py-28 overflow-hidden border-t border-[#35332D]">
        {/* Full-width background image with deep black overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/temp/hero.webp"
            alt="DraftWorks Strength Platform"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101010] via-[#101010]/90 to-[#101010]/80" />
          <div className="absolute inset-0 bg-[#F2C14E]/5 mix-blend-color-dodge" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
            Private Induction
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F3ED] tracking-tight uppercase mt-2">
            Demand More From Your Training.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A6A39B] max-w-2xl mx-auto leading-relaxed">
            Book a private facility walk-through and an in-depth biomechanical movement evaluation at any of our 5 flagship clubs. No sales pitch; just pure coaching insight.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenEnquiry()}
              className="py-4 px-9 font-heading font-black text-xs uppercase tracking-widest text-[#101010] bg-[#F2C14E] hover:bg-[#D9A52E] rounded-[2px] transition-all cursor-pointer shadow-xl active:scale-[0.99] whitespace-nowrap"
            >
              Enquire for Membership
            </button>

            <button
              type="button"
              onClick={() => onNavigate('pricing')}
              className="py-4 px-7 text-xs font-bold uppercase tracking-wider text-[#F5F3ED] bg-[#1A1A1A] hover:bg-[#252525] border border-[#35332D] rounded-[2px] transition-colors cursor-pointer"
            >
              View Membership Pricing (INR)
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox for Gallery Photos */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % GALLERY_ITEMS.length)}
      />
    </div>
  );
};
