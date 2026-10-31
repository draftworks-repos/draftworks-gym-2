import React from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin, ArrowUpRight } from 'lucide-react';
import { SITE_INFO, BRANCHES } from '../data/siteData';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <footer className="bg-[#101010] border-t border-[#35332D] text-[#A6A39B] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#35332D]">
          {/* Brand & Summary (col 4) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-none cursor-pointer"
            >
              <span className="font-heading font-black text-2xl tracking-tighter text-[#F5F3ED]">
                DRAFT<span className="text-[#F2C14E]">WORKS</span>
              </span>
            </button>
            <p className="text-xs sm:text-sm text-[#A6A39B] leading-relaxed max-w-sm">
              Established premium gym and strength centre across India. Dedicated to intentional barbell mechanics, high-performance athletic conditioning, and biometric contrast recovery suites.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-[2px] bg-[#1A1A1A] border border-[#35332D] flex items-center justify-center text-[#A6A39B] hover:text-[#F2C14E] hover:border-[#F2C14E] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-[2px] bg-[#1A1A1A] border border-[#35332D] flex items-center justify-center text-[#A6A39B] hover:text-[#F2C14E] hover:border-[#F2C14E] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-[2px] bg-[#1A1A1A] border border-[#35332D] flex items-center justify-center text-[#A6A39B] hover:text-[#F2C14E] hover:border-[#F2C14E] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-[#F5F3ED]">
              Club
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#F2C14E] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#F2C14E] transition-colors cursor-pointer"
                >
                  About & Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-[#F2C14E] transition-colors cursor-pointer"
                >
                  Training Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-[#F2C14E] transition-colors cursor-pointer"
                >
                  Membership Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#F2C14E] transition-colors cursor-pointer"
                >
                  Visual Archive
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#F2C14E] transition-colors cursor-pointer"
                >
                  Contact & Branches
                </button>
              </li>
            </ul>
          </div>

          {/* Flagship Branches (col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-[#F5F3ED]">
              Flagship Locations
            </h4>
            <ul className="space-y-2.5 text-xs">
              {BRANCHES.map((b) => (
                <li key={b.id} className="flex flex-col">
                  <span className="text-[#F5F3ED] font-medium">{b.name}</span>
                  <span className="text-[#A6A39B]/80 text-[11px] truncate">{b.area}, {b.city}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact (col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-[#F5F3ED]">
              Concierge
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${SITE_INFO.phone}`}
                className="flex items-center gap-2 hover:text-[#F2C14E] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F2C14E] shrink-0" />
                <span>{SITE_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${SITE_INFO.email}`}
                className="flex items-center gap-2 hover:text-[#F2C14E] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#F2C14E] shrink-0" />
                <span>{SITE_INFO.email}</span>
              </a>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenEnquiry}
                  className="w-full py-2.5 px-3 bg-[#1A1A1A] hover:bg-[#F2C14E] text-[#F5F3ED] hover:text-[#101010] border border-[#35332D] hover:border-[#F2C14E] text-xs font-bold uppercase tracking-wider rounded-[2px] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Request Membership Tour</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Exact requirements */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
          <div className="text-[#A6A39B]">
            © 2026 DraftWorks. All rights reserved.
          </div>

          <div className="text-[#A6A39B]">
            Designed & Developed by{' '}
            <a
              href={SITE_INFO.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F2C14E] hover:text-[#D9A52E] font-semibold transition-colors underline underline-offset-2"
            >
              draftworks.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
