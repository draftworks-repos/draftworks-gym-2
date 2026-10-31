import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Target, Award, Users } from 'lucide-react';
import { COACHES, BRANCHES } from '../data/siteData';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="w-full bg-[#101010]">
      {/* INTERNAL PAGE HERO: Split Hero (Content on one side + Large Photograph on the other, ~100svh on desktop) */}
      <section className="relative min-h-[92svh] lg:min-h-[100svh] flex items-center pt-24 pb-16 border-b border-[#35332D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content Side (Col 6) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
                <span>Our Heritage & Standards</span>
                <span className="text-[#35332D]">|</span>
                <span>Established 2021</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl font-black text-[#F5F3ED] tracking-tight uppercase leading-[1.08]">
                Crafting <span className="text-[#F2C14E]">Strength</span> As A Discipline.
              </h1>

              <p className="text-base sm:text-lg text-[#A6A39B] leading-relaxed max-w-xl">
                DraftWorks was founded on a singular conviction: genuine physical transformation demands scientific periodization, competition-grade equipment, and uncompromised coaching density.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={onOpenEnquiry}
                  className="py-3.5 px-7 font-heading font-bold text-xs uppercase tracking-wider text-[#101010] bg-[#F2C14E] hover:bg-[#D9A52E] rounded-[2px] transition-colors cursor-pointer text-center"
                >
                  Book Private Club Tour
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('pricing')}
                  className="py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-[#F5F3ED] bg-[#1A1A1A] hover:bg-[#252525] border border-[#35332D] rounded-[2px] transition-colors cursor-pointer text-center"
                >
                  Membership Tiers
                </button>
              </div>

              {/* Stats strip */}
              <div className="pt-8 border-t border-[#35332D] grid grid-cols-3 gap-4 text-xs">
                <div>
                  <div className="font-heading font-black text-2xl text-[#F5F3ED]">5</div>
                  <div className="text-[11px] text-[#A6A39B] uppercase font-semibold mt-0.5">Clubs Across India</div>
                </div>
                <div>
                  <div className="font-heading font-black text-2xl text-[#F2C14E]">1 : 6</div>
                  <div className="text-[11px] text-[#A6A39B] uppercase font-semibold mt-0.5">Lifter-to-Coach Ratio</div>
                </div>
                <div>
                  <div className="font-heading font-black text-2xl text-[#F5F3ED]">98%</div>
                  <div className="text-[11px] text-[#A6A39B] uppercase font-semibold mt-0.5">Annual Member Retention</div>
                </div>
              </div>
            </div>

            {/* Large Photograph Side (Col 6) */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] lg:aspect-[1/1] rounded-[3px] overflow-hidden border border-[#35332D] shadow-2xl bg-[#1A1A1A]">
                <img
                  src="/temp/split.webp"
                  alt="DraftWorks Coaching and Olympic Platform"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY & FOUNDERS */}
      <section className="py-24 bg-[#1A1A1A] border-b border-[#35332D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Founder narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
                The Founders' Origin
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#F5F3ED] tracking-tight">
                From competitive lifting platforms to a national standard of fitness.
              </h2>
              <div className="space-y-4 text-sm text-[#A6A39B] leading-relaxed">
                <p>
                  Before launching DraftWorks, founders Vikramaditya Rathore (former national weightlifter and CSCS coach) and Rhea Menon (M.Sc. Sports Physiotherapist) noticed a recurring failure in urban Indian fitness: high-end gyms prioritized crystal chandeliers and influencer photo booths over biomechanical safety and periodized coaching.
                </p>
                <p>
                  Lifters were experiencing chronic tendon injuries due to poorly designed machines with brutal shearing forces, or wandering aimlessly across crowded gym floors waiting 20 minutes for a single squat rack.
                </p>
                <p>
                  DraftWorks was created to correct this. By imposing a strict cap on active members, selecting machinery based on musculoskeletal anatomy, and building clinical thermal contrast suites into every facility, we created a sanctuary for serious practitioners.
                </p>
              </div>

              {/* Founder Signatures block */}
              <div className="pt-4 border-t border-[#35332D] grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="font-heading font-bold text-base text-[#F5F3ED]">Vikramaditya Rathore</div>
                  <div className="text-xs text-[#F2C14E]">Co-Founder · Head of Strength</div>
                  <div className="text-[11px] text-[#A6A39B] mt-0.5">CSCS / USAW Level 2</div>
                </div>
                <div>
                  <div className="font-heading font-bold text-base text-[#F5F3ED]">Rhea Menon</div>
                  <div className="text-xs text-[#F2C14E]">Co-Founder · Head of Biomechanics</div>
                  <div className="text-[11px] text-[#A6A39B] mt-0.5">M.Sc. Sports Physiotherapy</div>
                </div>
              </div>
            </div>

            {/* Founder Visual Side */}
            <div className="lg:col-span-5">
              <div className="bg-[#252525] border border-[#35332D] rounded-[3px] p-8 space-y-6">
                <h3 className="font-heading text-xl font-bold text-[#F5F3ED]">
                  The 4 Non-Negotiable Pillars
                </h3>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[#F2C14E] font-bold text-sm">01.</span>
                    <div>
                      <strong className="text-[#F5F3ED] block text-sm">Progressive Overload Tracking</strong>
                      <span className="text-[#A6A39B]">Every rep, load, and velocity is systematically logged to eliminate guesswork.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[#F2C14E] font-bold text-sm">02.</span>
                    <div>
                      <strong className="text-[#F5F3ED] block text-sm">Anatomical Matching</strong>
                      <span className="text-[#A6A39B]">We match exercises to individual femur-to-torso ratios rather than forcing dogma.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[#F2C14E] font-bold text-sm">03.</span>
                    <div>
                      <strong className="text-[#F5F3ED] block text-sm">Active Floor Supervision</strong>
                      <span className="text-[#A6A39B]">No passive coaches standing idle; every session receives real-time form corrections.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-mono text-[#F2C14E] font-bold text-sm">04.</span>
                    <div>
                      <strong className="text-[#F5F3ED] block text-sm">Thermal Restoration</strong>
                      <span className="text-[#A6A39B]">Immediate access to cold plunge and cedar saunas prevents chronic inflammation.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES BREAKDOWN */}
      <section className="py-24 bg-[#101010] border-b border-[#35332D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
              Infrastructure Spec
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#F5F3ED] tracking-tight mt-1">
              Engineered For Human Output
            </h2>
            <p className="text-xs sm:text-sm text-[#A6A39B] mt-2">
              Every DraftWorks club provides a minimum 11,000+ sq.ft custom floor plan zoned for specific physiological adaptations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1A1A1A] border border-[#35332D] rounded-[3px] p-6 space-y-4">
              <div className="aspect-[16/10] bg-[#252525] rounded-[2px] overflow-hidden">
                <img
                  src="/temp/hero.webp"
                  alt="Free Weight & Barbell Arena"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#F5F3ED]">
                Olympic Rig & Barbell Arena
              </h3>
              <p className="text-xs text-[#A6A39B] leading-relaxed">
                Dedicated sound-dampened lifting platforms with Eleiko competition barbells, calibrated steel discs, chalk bowls, and heavy-duty safety straps for maximum limit attempts.
              </p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#35332D] rounded-[3px] p-6 space-y-4">
              <div className="aspect-[16/10] bg-[#252525] rounded-[2px] overflow-hidden">
                <img
                  src="/temp/funtional.webp"
                  alt="30-Meter Functional Sprint Turf"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#F5F3ED]">
                Sprint Turf & Dynamic Conditioning
              </h3>
              <p className="text-xs text-[#A6A39B] leading-relaxed">
                30-meter continuous turf track equipped with Torque Tank magnetic sleds, cast-iron kettlebells up to 48kg, battle ropes, and plyometric boxes for multi-directional power.
              </p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#35332D] rounded-[3px] p-6 space-y-4">
              <div className="aspect-[16/10] bg-[#252525] rounded-[2px] overflow-hidden">
                <img
                  src="/temp/recovery.webp"
                  alt="Thermal Plunge & Sauna Suite"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#F5F3ED]">
                Thermal Contrast & Recovery Pods
              </h3>
              <p className="text-xs text-[#A6A39B] leading-relaxed">
                Medical-grade chilled stainless steel cold plunges maintained at 3°C to 5°C with dual filtration, paired with 85°C dry Finnish cedar saunas and Normatec 3 compression lounges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COACHING TEAM */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
              Coaching Standards
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#F5F3ED] tracking-tight mt-1">
              Meet the Strength Faculty
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COACHES.map((coach) => (
              <div key={coach.id} className="bg-[#252525] border border-[#35332D] rounded-[3px] p-5 space-y-3">
                <div className="aspect-[1/1] rounded-[2px] overflow-hidden bg-[#1A1A1A]">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#F5F3ED]">{coach.name}</h4>
                  <div className="text-xs text-[#F2C14E] font-medium">{coach.role}</div>
                  <div className="text-[11px] text-[#A6A39B] mt-0.5">{coach.credentials}</div>
                  <p className="text-xs text-[#A6A39B] mt-2.5 line-clamp-3 leading-relaxed">
                    {coach.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 p-8 bg-[#252525] border border-[#35332D] rounded-[3px] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-xl font-bold text-[#F5F3ED]">
                Interested in personal assessment by our head coaches?
              </h3>
              <p className="text-xs text-[#A6A39B] mt-1">
                Every new member receives a 45-minute 1-on-1 movement screen before their first lifting block.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenEnquiry}
              className="py-3 px-6 text-xs font-bold uppercase tracking-wider text-[#101010] bg-[#F2C14E] hover:bg-[#D9A52E] rounded-[2px] transition-colors cursor-pointer whitespace-nowrap"
            >
              Book Assessment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
