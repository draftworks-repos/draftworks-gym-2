import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { GOOGLE_REVIEWS } from '../data/siteData';

export const ReviewsCarousel: React.FC = () => {
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

  const maxIndex = Math.max(0, GOOGLE_REVIEWS.length - cardsVisible);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="w-full">
      {/* Header with Google Reviews Trust Signal */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            {/* Google "G" standard logo styling */}
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
              Google Reviews
            </span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold text-[#F5F3ED] tracking-tight">
            Member Impressions
          </h2>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-3 bg-[#1A1A1A] hover:bg-[#252525] disabled:opacity-30 disabled:cursor-not-allowed text-[#F5F3ED] rounded-[2px] border border-[#35332D] transition-colors cursor-pointer"
            aria-label="Previous Google reviews"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="p-3 bg-[#1A1A1A] hover:bg-[#252525] disabled:opacity-30 disabled:cursor-not-allowed text-[#F5F3ED] rounded-[2px] border border-[#35332D] transition-colors cursor-pointer"
            aria-label="Next Google reviews"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel Track */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out gap-5"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsVisible + (cardsVisible > 1 ? 1.5 : 0))}%)`,
          }}
        >
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] bg-[#1A1A1A] border border-[#35332D] rounded-[3px] p-6 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                {/* Header: Google Icon & Reviewer Name */}
                <div className="flex items-center justify-between pb-4 border-b border-[#35332D]/70 mb-4">
                  <div className="flex items-center gap-3">
                    {/* Google G icon */}
                    <div className="w-7 h-7 rounded-full bg-[#252525] flex items-center justify-center shrink-0 border border-[#35332D]">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        />
                      </svg>
                    </div>

                    <span className="font-heading font-bold text-base text-[#F5F3ED] tracking-tight">
                      {review.author}
                    </span>
                  </div>

                  {/* 5 Stars */}
                  <div className="flex items-center gap-0.5 text-[#F2C14E]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F2C14E]" />
                    ))}
                  </div>
                </div>

                {/* Short Review Quote */}
                <p className="text-sm text-[#A6A39B] leading-relaxed italic">
                  “{review.quote}”
                </p>
              </div>

              {/* Verified Marker */}
              <div className="text-[11px] text-[#A6A39B]/70 pt-4 flex items-center justify-between">
                <span>Verified Google Review</span>
                <span className="text-[#F2C14E]/90 font-medium">5.0 ★★★★★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
