import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenEnquiry: (preselectedProgram?: string, preselectedBranch?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenEnquiry }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (pageId: string) => {
    onNavigate(pageId);
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200  ${
          scrolled
            ? 'bg-[#101010]/95 border-b backdrop-blur-md border-[#35332D] py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#101010]/90 to-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element Brand wordmark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-1.5 text-left focus:outline-none group cursor-pointer"
            aria-label="DraftWorks Home"
          >
            <span className="font-heading font-black text-2xl tracking-tighter text-[#F5F3ED] group-hover:text-[#F2C14E] transition-colors">
              DRAFT<span className="text-[#F2C14E]">WORKS</span>
            </span>
          </button>

          {/* Zone 2: Desktop 4-6 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer text-[13px] uppercase font-semibold tracking-wider ${
                    isActive
                      ? 'text-[#F2C14E]'
                      : 'text-[#A6A39B] hover:text-[#F5F3ED]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F2C14E]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action + Mobile Drawer Trigger */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenEnquiry()}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#101010] bg-[#F2C14E] hover:bg-[#D9A52E] rounded-[2px] transition-all cursor-pointer whitespace-nowrap shadow-sm active:scale-[0.98]"
            >
              Enquire Now
            </button>

            {/* Mobile / Tablet Drawer Button */}
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden p-2 text-[#F5F3ED] hover:text-[#F2C14E] focus:outline-none transition-colors cursor-pointer"
              aria-label="Open Navigation Drawer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Drawer for Mobile & Tablet */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          {/* Backdrop with subtle fade */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content: slides from right to left */}
          <div className="relative w-full max-w-sm bg-[#1A1A1A] border-l border-[#35332D] h-full flex flex-col justify-between p-6 sm:p-8 z-10 shadow-2xl overflow-y-auto">
            <div>
              {/* Header with close control */}
              <div className="flex items-center justify-between pb-6 border-b border-[#35332D]">
                <span className="font-heading font-black text-xl tracking-tight text-[#F5F3ED]">
                  DRAFT<span className="text-[#F2C14E]">WORKS</span>
                </span>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 text-[#A6A39B] hover:text-[#F5F3ED] rounded-sm transition-colors cursor-pointer"
                  aria-label="Close navigation"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Page Links */}
              <nav className="flex flex-col py-8 gap-3" aria-label="Drawer Links">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className={`flex items-center justify-between py-3 px-3 text-left font-heading text-lg font-bold tracking-tight rounded-sm transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#252525] text-[#F2C14E]'
                          : 'text-[#F5F3ED] hover:bg-[#252525]/60 hover:text-[#F2C14E]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#F2C14E]' : 'text-[#A6A39B]'}`} />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Contact & Primary Action */}
            <div className="pt-6 border-t border-[#35332D] space-y-4">
              <button
                onClick={() => {
                  setDrawerOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3.5 px-4 text-center font-heading font-bold text-sm uppercase tracking-wider text-[#101010] bg-[#F2C14E] hover:bg-[#D9A52E] rounded-[2px] transition-colors cursor-pointer shadow-md"
              >
                Enquire for Membership
              </button>

              <div className="flex items-center justify-between text-xs text-[#A6A39B] px-1">
                <a
                  href={`tel:${SITE_INFO.phone}`}
                  className="inline-flex items-center gap-1.5 hover:text-[#F5F3ED] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F2C14E]" />
                  <span>{SITE_INFO.phone}</span>
                </a>
                <span>India · 5 Clubs</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
