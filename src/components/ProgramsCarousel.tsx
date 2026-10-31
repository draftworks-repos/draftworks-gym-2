import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Flame, Dumbbell } from 'lucide-react';
import { Program, PROGRAMS } from '../data/siteData';

interface ProgramsCarouselProps {
  onSelectProgram?: (program: Program) => void;
  onEnquireProgram?: (programId: string) => void;
}

export const ProgramsCarousel: React.FC<ProgramsCarouselProps> = ({
  onSelectProgram,
  onEnquireProgram,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cards visible depends on viewport:
  // Desktop >= 1024px: 3 cards
  // Tablet >= 640px: 2 cards
  // Mobile < 640px: 1 card
  const [cardsVisible, setCardsVisible] = useState(3);

  useEffect(() => {
    const updateCardsVisible = () => {
      if (window.innerWidth >= 1024) {
        setCardsVisible(3);
      } else if (window.innerWidth >= 640) {
        setCardsVisible(2);
      } else {
        setCardsVisible(1);
      }
    };
    updateCardsVisible();
    window.addEventListener('resize', updateCardsVisible);
    return () => window.removeEventListener('resize', updateCardsVisible);
  }, []);

  const maxIndex = Math.max(0, PROGRAMS.length - cardsVisible);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Touch swipe support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  return (
    <div className="w-full relative">
      {/* Top Header Controls (Desktop and Tablet) */}
      <div className="hidden sm:flex items-center justify-between mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
            Core Disciplines
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#F5F3ED] tracking-tight mt-1">
            Training Programs
          </h2>
        </div>

        {/* Desktop / Tablet Controls */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-3 bg-[#1A1A1A] hover:bg-[#252525] disabled:opacity-30 disabled:cursor-not-allowed text-[#F5F3ED] rounded-[2px] border border-[#35332D] transition-colors cursor-pointer"
            aria-label="Previous programs"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="p-3 bg-[#1A1A1A] hover:bg-[#252525] disabled:opacity-30 disabled:cursor-not-allowed text-[#F5F3ED] rounded-[2px] border border-[#35332D] transition-colors cursor-pointer"
            aria-label="Next programs"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Title */}
      <div className="sm:hidden mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
          Core Disciplines
        </span>
        <h2 className="font-heading text-2xl font-extrabold text-[#F5F3ED] tracking-tight mt-1">
          Training Programs
        </h2>
      </div>

      {/* Overflow Container */}
      <div
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="overflow-hidden"
      >
        {/* Sliding track with smooth CSS transition */}
        <div
          className="flex transition-transform duration-500 ease-out gap-6"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsVisible + (cardsVisible > 1 ? 1.5 : 0))}%)`,
          }}
        >
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col bg-[#1A1A1A] border border-[#35332D] rounded-[3px] overflow-hidden group hover:border-[#F2C14E]/60 transition-all duration-300"
            >
              {/* Image Container with dark gradient overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#252525]">
                <img
                  src={program.image}
                  alt={program.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-black/40 to-transparent" />

                {/* Duration & Intensity badge */}
                <div className="absolute top-3 left-3 bg-[#101010]/90 backdrop-blur-sm border border-[#35332D] px-2.5 py-1 text-[11px] font-semibold text-[#F5F3ED] rounded-[2px]">
                  {program.duration}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#A6A39B]">
                  <span className="text-[#F2C14E] font-medium flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5" />
                    {program.intensity}
                  </span>
                  <span>Lead: {program.coachLead.split(' ')[0]}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#F5F3ED] group-hover:text-[#F2C14E] transition-colors tracking-tight">
                    {program.title}
                  </h3>
                  <p className="text-xs text-[#A6A39B] font-medium mt-1">
                    {program.subtitle}
                  </p>
                  <p className="text-xs text-[#A6A39B]/90 mt-3 line-clamp-3 leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Outcomes mini list */}
                <div className="space-y-1.5 pt-2 border-t border-[#35332D]/70">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-[#A6A39B]">
                    Key Focus:
                  </div>
                  <div className="text-xs text-[#F5F3ED] truncate">
                    {program.outcomes[0]}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (onEnquireProgram) {
                        onEnquireProgram(program.id);
                      } else if (onSelectProgram) {
                        onSelectProgram(program);
                      }
                    }}
                    className="w-full py-2.5 px-4 bg-[#252525] hover:bg-[#F2C14E] text-[#F5F3ED] hover:text-[#101010] border border-[#35332D] hover:border-[#F2C14E] text-xs font-bold uppercase tracking-wider rounded-[2px] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Enquire for Program</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Controls: Placed below card container as required */}
      <div className="sm:hidden flex items-center justify-between mt-6 pt-4 border-t border-[#35332D]">
        <div className="text-xs text-[#A6A39B]">
          Program <span className="text-[#F2C14E] font-semibold">{currentIndex + 1}</span> of {PROGRAMS.length}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2.5 bg-[#1A1A1A] hover:bg-[#252525] disabled:opacity-30 text-[#F5F3ED] rounded-[2px] border border-[#35332D] transition-colors cursor-pointer"
            aria-label="Previous program"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="p-2.5 bg-[#1A1A1A] hover:bg-[#252525] disabled:opacity-30 text-[#F5F3ED] rounded-[2px] border border-[#35332D] transition-colors cursor-pointer"
            aria-label="Next program"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
