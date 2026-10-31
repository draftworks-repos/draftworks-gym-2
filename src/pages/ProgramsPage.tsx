import React from 'react';
import { ArrowUpRight, Check, Flame, Clock, User, Dumbbell, ShieldCheck } from 'lucide-react';
import { PROGRAMS, Program } from '../data/siteData';

interface ProgramsPageProps {
  onNavigate: (page: string) => void;
  onOpenEnquiry: (programId?: string) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="w-full bg-[#101010]">
      {/* INTERNAL SPLIT HERO */}
      <section className="relative min-h-[92svh] lg:min-h-[100svh] flex items-center pt-24 pb-16 border-b border-[#35332D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Content Side */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
                Systematic Periodization
              </span>

              <h1 className="font-heading text-3xl sm:text-5xl font-black text-[#F5F3ED] tracking-tight uppercase leading-[1.08]">
                Discipline-Led <br />
                <span className="text-[#F2C14E]">Training</span> Programs.
              </h1>

              <p className="text-base sm:text-lg text-[#A6A39B] leading-relaxed max-w-xl">
                We do not sell separate prices for individual classes. Every DraftWorks membership provides unrestricted access to all 5 core training disciplines, coached by certified strength specialists.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry()}
                  className="py-3.5 px-8 font-heading font-bold text-xs uppercase tracking-wider text-[#101010] bg-[#F2C14E] hover:bg-[#D9A52E] rounded-[2px] transition-colors cursor-pointer text-center"
                >
                  Claim Assessment Session
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('pricing')}
                  className="py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-[#F5F3ED] bg-[#1A1A1A] hover:bg-[#252525] border border-[#35332D] rounded-[2px] transition-colors cursor-pointer text-center"
                >
                  View Membership Tiers
                </button>
              </div>

              {/* Note on inclusion */}
              <div className="pt-6 border-t border-[#35332D] flex items-center gap-3 text-xs text-[#A6A39B]">
                <ShieldCheck className="w-5 h-5 text-[#F2C14E] shrink-0" />
                <span>All programs and recovery suites are fully included in all membership tiers. No surprise add-ons.</span>
              </div>
            </div>

            {/* Photo Side */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] lg:aspect-[1/1] rounded-[3px] overflow-hidden border border-[#35332D] shadow-2xl bg-[#1A1A1A]">
                <img
                  src="/temp/funtional.webp"
                  alt="DraftWorks Functional Turf & Lifting Arena"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED PROGRAM BREAKDOWN */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
              Comprehensive Curriculum
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#F5F3ED] tracking-tight mt-1">
              The 5 Core Disciplines
            </h2>
            <p className="text-xs sm:text-sm text-[#A6A39B] mt-2">
              Structured progressive cycles designed to be mixed according to your individual athletic goals.
            </p>
          </div>

          <div className="space-y-12">
            {PROGRAMS.map((program, index) => (
              <div
                key={program.id}
                className="bg-[#252525] border border-[#35332D] rounded-[3px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8"
              >
                {/* Photo Column */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[16/10] sm:aspect-[4/3] rounded-[2px] overflow-hidden border border-[#35332D] relative bg-[#101010]">
                    <img
                      src={program.image}
                      alt={program.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#101010]/90 px-2.5 py-1 text-[11px] font-semibold text-[#F2C14E] rounded-[2px] border border-[#35332D]">
                      {program.duration}
                    </div>
                  </div>
                </div>

                {/* Details Column */}
                <div className={`lg:col-span-7 space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#A6A39B]">
                      <span className="text-[#F2C14E] font-medium flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5" />
                        Intensity: {program.intensity}
                      </span>
                      <span>·</span>
                      <span>Head Coach: {program.coachLead}</span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F3ED] tracking-tight mt-1">
                      {program.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F2C14E] font-medium mt-0.5">
                      {program.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A6A39B] leading-relaxed">
                    {program.description}
                  </p>

                  {/* Target Outcomes */}
                  <div className="pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5F3ED]">
                      Target Adaptations:
                    </span>
                    <ul className="mt-2 space-y-1.5 text-xs text-[#A6A39B]">
                      {program.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#F2C14E] shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Equipment */}
                  <div className="pt-2 text-xs text-[#A6A39B] flex items-center gap-2">
                    <Dumbbell className="w-4 h-4 text-[#F2C14E] shrink-0" />
                    <span><strong>Platform Gear:</strong> {program.equipment.join(' · ')}</span>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => onOpenEnquiry(program.id)}
                      className="py-2.5 px-5 bg-[#F2C14E] hover:bg-[#D9A52E] text-[#101010] text-xs font-bold uppercase tracking-wider rounded-[2px] transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Enquire For This Program</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEEKLY SCHEDULE ARCHITECTURE */}
      <section className="py-24 bg-[#101010] border-t border-[#35332D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
              Training Rhythm
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-[#F5F3ED] tracking-tight mt-1">
              Floor Schedule Architecture
            </h2>
            <p className="text-xs sm:text-sm text-[#A6A39B] mt-2">
              Sessions run continuously in synchronized morning and evening blocks to respect working professionals' schedules across our Indian clubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1A1A1A] border border-[#35332D] rounded-[3px] p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#35332D]">
                <h4 className="font-heading text-lg font-bold text-[#F5F3ED]">
                  Morning Prime Blocks
                </h4>
                <span className="font-mono text-xs text-[#F2C14E]">06:00 – 10:30 AM</span>
              </div>
              <ul className="space-y-3 text-xs text-[#A6A39B]">
                <li className="flex justify-between py-1 border-b border-[#35332D]/40">
                  <span className="text-[#F5F3ED] font-semibold">06:00 – 07:15 AM</span>
                  <span>Strength & Conditioning / Heavy Compounds</span>
                </li>
                <li className="flex justify-between py-1 border-b border-[#35332D]/40">
                  <span className="text-[#F5F3ED] font-semibold">07:30 – 08:45 AM</span>
                  <span>Olympic Weightlifting Technique & Platforms</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="text-[#F5F3ED] font-semibold">09:00 – 10:00 AM</span>
                  <span>Hypertrophy Mechanics & Turf Intervals</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1A1A1A] border border-[#35332D] rounded-[3px] p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#35332D]">
                <h4 className="font-heading text-lg font-bold text-[#F5F3ED]">
                  Evening Power & Recovery
                </h4>
                <span className="font-mono text-xs text-[#F2C14E]">05:00 – 09:30 PM</span>
              </div>
              <ul className="space-y-3 text-xs text-[#A6A39B]">
                <li className="flex justify-between py-1 border-b border-[#35332D]/40">
                  <span className="text-[#F5F3ED] font-semibold">05:30 – 06:45 PM</span>
                  <span>Hypertrophy & Biomechanical Loading</span>
                </li>
                <li className="flex justify-between py-1 border-b border-[#35332D]/40">
                  <span className="text-[#F5F3ED] font-semibold">07:00 – 08:15 PM</span>
                  <span>Combat & Movement Engine / Sled Drags</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="text-[#F5F3ED] font-semibold">08:30 – 09:30 PM</span>
                  <span>Thermal Contrast Plunge & Guided Breathwork</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
