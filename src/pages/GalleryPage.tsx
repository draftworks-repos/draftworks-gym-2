import React, { useState } from 'react';
import { Maximize2, Filter } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/siteData';
import { Lightbox } from '../components/Lightbox';

interface GalleryPageProps {
  onNavigate: (page: string) => void;
  onOpenEnquiry: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = ['All', 'Lifting Rigs', 'Recovery', 'Turf & Movement', 'Coaching'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightboxAt = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full bg-[#101010]">
      {/* INTERNAL SPLIT HERO */}
      <section className="relative min-h-[92svh] lg:min-h-[100svh] flex items-center pt-24 pb-16 border-b border-[#35332D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Content Side */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
                Visual Document
              </span>

              <h1 className="font-heading text-3xl sm:text-5xl font-black text-[#F5F3ED] tracking-tight uppercase leading-[1.08]">
                The Architecture <br />
                Of <span className="text-[#F2C14E]">Performance.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#A6A39B] leading-relaxed max-w-xl">
                A photographic catalog of our competition lifting platforms, calibrated steel racks, 30-meter indoor turf runs, and clinical contrast bath recovery suites across India.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={onOpenEnquiry}
                  className="py-3.5 px-8 font-heading font-bold text-xs uppercase tracking-wider text-[#101010] bg-[#F2C14E] hover:bg-[#D9A52E] rounded-[2px] transition-colors cursor-pointer text-center"
                >
                  Book In-Person Walkthrough
                </button>
              </div>

              <div className="pt-6 border-t border-[#35332D] text-xs text-[#A6A39B]">
                <span>Click any image to inspect in full-screen resolution.</span>
              </div>
            </div>

            {/* Photo Side */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] lg:aspect-[1/1] rounded-[3px] overflow-hidden border border-[#35332D] shadow-2xl bg-[#1A1A1A]">
                <img
                  src="/temp/hero.webp"
                  alt="DraftWorks Strength Equipment"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY GRID SECTION */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Functional category filter buttons */}
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-[#35332D]">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`py-2 px-4 text-xs font-semibold rounded-[2px] transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#F2C14E] text-[#101010] font-bold'
                      : 'bg-[#252525] text-[#A6A39B] hover:text-[#F5F3ED] border border-[#35332D]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Photography Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightboxAt(index)}
                className="group relative aspect-[4/3] bg-[#252525] border border-[#35332D] rounded-[3px] overflow-hidden cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                {/* Minimal label and expand icon as required by prompt (no heavy titles/descriptions overlay) */}
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

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={filteredItems}
        currentIndex={lightboxIndex}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % filteredItems.length)}
      />
    </div>
  );
};
