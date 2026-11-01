import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Clock, ArrowUpRight, Navigation } from 'lucide-react';
import { BRANCHES, Branch } from '../data/siteData';

interface BranchesCarouselProps {
  onSelectBranch?: (branch: Branch) => void;
  onEnquireBranch?: (branchId: string) => void;
}

export const BranchesCarousel: React.FC<BranchesCarouselProps> = ({
  onSelectBranch,
  onEnquireBranch,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsVisible(3);
      } else if (window.innerWidth >= 640) {
        setCardsVisible(2);
      } else {
        setCardsVisible(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, BRANCHES.length - cardsVisible);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
            Presence Across India
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#F5F3ED] tracking-tight mt-1">
            Flagship Clubs
          </h2>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-3 bg-[#1A1A1A] hover:bg-[#252525] disabled:opacity-30 disabled:cursor-not-allowed text-[#F5F3ED] rounded-[2px] border border-[#35332D] transition-colors cursor-pointer"
            aria-label="Previous branch"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="p-3 bg-[#1A1A1A] hover:bg-[#252525] disabled:opacity-30 disabled:cursor-not-allowed text-[#F5F3ED] rounded-[2px] border border-[#35332D] transition-colors cursor-pointer"
            aria-label="Next branch"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Track */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out gap-6"
          style={{
            transform: `translateX(calc(-${currentIndex * (100 / cardsVisible)}% - ${currentIndex * (1.5 / cardsVisible)}rem))`,
          }}
        >
          {BRANCHES.map((branch) => (
            <div
              key={branch.id}
              className="shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#1A1A1A] border border-[#35332D] rounded-[3px] overflow-hidden flex flex-col group hover:border-[#F2C14E]/60 transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#252525]">
                <img
                  src={branch.image}
                  alt={branch.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-black/40 to-transparent" />

                <div className="absolute top-3 left-3 bg-[#101010]/90 backdrop-blur-sm border border-[#35332D] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#F2C14E] rounded-[2px]">
                  {branch.city}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-xs text-[#A6A39B] flex items-center justify-between">
                  <span>{branch.sqft}</span>
                </div>
              </div>

              {/* Branch Details */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#F5F3ED] group-hover:text-[#F2C14E] transition-colors tracking-tight">
                    {branch.name}
                  </h3>

                  <div className="flex items-start gap-2 text-xs text-[#A6A39B] mt-2.5 leading-relaxed">
                    <MapPin className="w-4 h-4 text-[#F2C14E] shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#A6A39B]/80 mt-2">
                    <Clock className="w-3.5 h-3.5 text-[#A6A39B] shrink-0" />
                    <span>{branch.timings}</span>
                  </div>
                </div>

                {/* Features Pill-free list */}
                <div className="pt-3 border-t border-[#35332D]/70 space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A6A39B]">
                    Specialty Facilities:
                  </span>
                  <div className="text-xs text-[#F5F3ED]/90 flex flex-wrap gap-x-2 gap-y-1">
                    {branch.features.slice(0, 2).map((feat, idx) => (
                      <span key={idx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#F2C14E]" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action links */}
                <div className="pt-2 flex items-center gap-2">
                  <a
                    href={branch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 bg-[#252525] hover:bg-[#35332D] text-[#F5F3ED] text-xs font-semibold rounded-[2px] border border-[#35332D] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#F2C14E]" />
                    <span>Directions</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      if (onEnquireBranch) onEnquireBranch(branch.id);
                      else if (onSelectBranch) onSelectBranch(branch);
                    }}
                    className="flex-1 py-2.5 px-3 bg-[#F2C14E] hover:bg-[#D9A52E] text-[#101010] text-xs font-bold uppercase tracking-wider rounded-[2px] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Book Tour</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
