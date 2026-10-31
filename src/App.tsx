/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { PricingPage } from './pages/PricingPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryProgram, setEnquiryProgram] = useState<string | undefined>(undefined);
  const [enquiryBranch, setEnquiryBranch] = useState<string | undefined>(undefined);

  // Sync with URL Hash for seamless bookmarking/refreshing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'about', 'programs', 'pricing', 'gallery', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (programId?: string, branchId?: string) => {
    setEnquiryProgram(programId);
    setEnquiryBranch(branchId);
    setIsEnquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#101010] text-[#F5F3ED] flex flex-col font-sans selection:bg-[#F2C14E] selection:text-[#101010]">
      {/* Global Top Bar Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Main Content Pages */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenEnquiry={() => handleOpenEnquiry()}
          />
        )}
        {currentPage === 'programs' && (
          <ProgramsPage
            onNavigate={handleNavigate}
            onOpenEnquiry={(progId) => handleOpenEnquiry(progId)}
          />
        )}
        {currentPage === 'pricing' && (
          <PricingPage
            onNavigate={handleNavigate}
            onOpenEnquiry={(progId, bId) => handleOpenEnquiry(progId, bId)}
          />
        )}
        {currentPage === 'gallery' && (
          <GalleryPage
            onNavigate={handleNavigate}
            onOpenEnquiry={() => handleOpenEnquiry()}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenEnquiry={(progId, bId) => handleOpenEnquiry(progId, bId)}
          />
        )}
      </main>

      {/* Global Compact Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Global Enquiry & Membership Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        preselectedProgram={enquiryProgram}
        preselectedBranch={enquiryBranch}
      />
    </div>
  );
}
