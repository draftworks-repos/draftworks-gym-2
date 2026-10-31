import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{ id: string; src: string; title: string; category?: string }>;
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 p-2.5 bg-[#1A1A1A] text-[#F5F3ED] hover:text-[#F2C14E] border border-[#35332D] rounded-[2px] transition-colors z-20 cursor-pointer"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        type="button"
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 bg-[#1A1A1A]/80 hover:bg-[#252525] text-[#F5F3ED] hover:text-[#F2C14E] border border-[#35332D] rounded-[2px] transition-colors z-20 cursor-pointer"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 bg-[#1A1A1A]/80 hover:bg-[#252525] text-[#F5F3ED] hover:text-[#F2C14E] border border-[#35332D] rounded-[2px] transition-colors z-20 cursor-pointer"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image Container */}
      <div className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center">
        <img
          src={currentImage.src}
          alt={currentImage.title}
          referrerPolicy="no-referrer"
          className="max-h-[80vh] w-auto max-w-full object-contain rounded-[3px] border border-[#35332D] shadow-2xl"
        />

        {/* Minimal small label at bottom as requested: no long overlay descriptions */}
        <div className="mt-4 flex items-center gap-3 text-xs text-[#A6A39B]">
          <span className="font-heading font-semibold text-[#F5F3ED]">{currentImage.title}</span>
          <span>·</span>
          <span>
            {currentIndex + 1} of {images.length}
          </span>
        </div>
      </div>
    </div>
  );
};
