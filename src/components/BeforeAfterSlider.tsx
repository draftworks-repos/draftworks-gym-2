import React, { useState, useRef, useCallback } from 'react';
import { TRANSFORMATIONS, Transformation } from '../data/siteData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  transformations?: Transformation[];
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  transformations = TRANSFORMATIONS,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const active = transformations[currentIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
    setSliderPosition(50);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
    setSliderPosition(50);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Navigation between people: displays only name and transformation duration */}
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-3">
          <span className="font-heading text-lg sm:text-xl font-bold text-[#F5F3ED]">
            {active.name}
          </span>
          <span className="text-[#A6A39B] text-sm">·</span>
          <span className="text-sm font-medium text-[#F2C14E] tracking-wide">
            {active.duration}
          </span>
        </div>

        {transformations.length > 1 && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2 bg-[#252525] hover:bg-[#35332D] text-[#F5F3ED] rounded-[2px] border border-[#35332D] transition-colors cursor-pointer"
              aria-label="Previous transformation"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-[#A6A39B] font-mono px-1">
              {currentIndex + 1} / {transformations.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              className="p-2 bg-[#252525] hover:bg-[#35332D] text-[#F5F3ED] rounded-[2px] border border-[#35332D] transition-colors cursor-pointer"
              aria-label="Next transformation"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Large Before & After Comparison Frame with Draggable Divider */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#1A1A1A] border border-[#35332D] rounded-[3px] overflow-hidden select-none cursor-ew-resize touch-none"
      >
        {/* AFTER Image (Full container underneath) */}
        <img
          src={active.afterImage}
          alt={`${active.name} After Transformation`}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Small "AFTER" label in top right */}
        <div className="absolute top-4 right-4 z-20 pointer-events-none bg-[#101010]/80 backdrop-blur-sm border border-[#35332D] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#F2C14E] rounded-[2px]">
          Outcome
        </div>

        {/* BEFORE Image (Clipped overlay on left side) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={active.beforeImage}
            alt={`${active.name} Before Transformation`}
            referrerPolicy="no-referrer"
            className="absolute top-0 left-0 max-w-none h-full object-cover"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
            }}
          />
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />
        </div>

        {/* Small "BEFORE" label in top left */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none bg-[#101010]/80 backdrop-blur-sm border border-[#35332D] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#A6A39B] rounded-[2px]">
          Baseline
        </div>

        {/* Draggable Centre Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 z-30 flex items-center justify-center -translate-x-1/2 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-[2px] h-full bg-[#F2C14E] shadow-[0_0_10px_rgba(242,193,78,0.5)]" />
          <div className="absolute w-8 h-8 rounded-full bg-[#101010] border-2 border-[#F2C14E] text-[#F2C14E] flex items-center justify-center shadow-lg pointer-events-auto cursor-ew-resize">
            <div className="flex items-center gap-0.5 text-[9px] font-black">
              <span>◀</span>
              <span>▶</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
