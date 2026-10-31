import React, { useState } from 'react';
import { Mail, Phone, MapPin, Navigation, Clock, CheckCircle2, Shield, ArrowUpRight } from 'lucide-react';
import { BRANCHES, PROGRAMS, SITE_INFO, Branch } from '../data/siteData';
import { validateEnquiryForm } from '../utils/pricingAndBooking';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  onOpenEnquiry: (programId?: string, branchId?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>(BRANCHES[0].id);

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    programId: PROGRAMS[0].id,
    branchId: BRANCHES[0].id,
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const activeBranch = BRANCHES.find((b) => b.id === selectedBranchId) || BRANCHES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateEnquiryForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
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
                Direct Concierge & Clubs
              </span>

              <h1 className="font-heading text-3xl sm:text-5xl font-black text-[#F5F3ED] tracking-tight uppercase leading-[1.08]">
                Connect With <br />
                <span className="text-[#F2C14E]">DraftWorks.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#A6A39B] leading-relaxed max-w-xl">
                Schedule a facility inspection, discuss tailored athletic programming, or reach our central concierge desk across India.
              </p>

              {/* Quick direct contact links */}
              <div className="pt-2 space-y-3">
                <a
                  href={`tel:${SITE_INFO.phone}`}
                  className="flex items-center gap-3 text-sm text-[#F5F3ED] hover:text-[#F2C14E] transition-colors"
                >
                  <div className="w-9 h-9 rounded-[2px] bg-[#252525] border border-[#35332D] flex items-center justify-center text-[#F2C14E]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#A6A39B] uppercase font-bold">Direct Line</div>
                    <div className="font-mono font-semibold">{SITE_INFO.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="flex items-center gap-3 text-sm text-[#F5F3ED] hover:text-[#F2C14E] transition-colors"
                >
                  <div className="w-9 h-9 rounded-[2px] bg-[#252525] border border-[#35332D] flex items-center justify-center text-[#F2C14E]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#A6A39B] uppercase font-bold">Central Inbox</div>
                    <div className="font-mono font-semibold">{SITE_INFO.email}</div>
                  </div>
                </a>
              </div>

              <div className="pt-6 border-t border-[#35332D] text-xs text-[#A6A39B] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F2C14E]" />
                <span>Concierge active Mon–Sat 06:00 to 22:30 IST</span>
              </div>
            </div>

            {/* Photo Side */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] lg:aspect-[1/1] rounded-[3px] overflow-hidden border border-[#35332D] shadow-2xl bg-[#1A1A1A]">
                <img
                  src="/temp/split.webp"
                  alt="DraftWorks Member Concierge & Coaching"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM & INTERACTIVE MAP SECTION */}
      <section className="py-24 bg-[#1A1A1A] border-b border-[#35332D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Form (Col 6) */}
            <div className="lg:col-span-6 bg-[#252525] border border-[#35332D] rounded-[3px] p-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
                Direct Enquiry Form
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F5F3ED] tracking-tight mt-1 mb-6">
                Request Facility Walkthrough
              </h2>

              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#F2C14E] flex items-center justify-center text-[#F2C14E] mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#F5F3ED]">
                    Consultation Request Lodged
                  </h3>
                  <p className="text-xs text-[#A6A39B] max-w-sm mx-auto leading-relaxed">
                    Thank you. The club concierge for {BRANCHES.find(b => b.id === formData.branchId)?.name} will contact you at {formData.phone} within 2 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 py-2.5 px-6 text-xs font-bold uppercase tracking-wider text-[#101010] bg-[#F2C14E] rounded-[2px] cursor-pointer"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A39B] mb-1.5">
                      Your Full Name <span className="text-[#F2C14E]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Vikramaditya Sen"
                      className="w-full bg-[#1A1A1A] border border-[#35332D] focus:border-[#F2C14E] text-[#F5F3ED] text-sm rounded-[3px] px-3.5 py-2.5 focus:outline-none transition-colors"
                    />
                    {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A39B] mb-1.5">
                      Contact Number (India) <span className="text-[#F2C14E]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 89596 90529"
                      className="w-full bg-[#1A1A1A] border border-[#35332D] focus:border-[#F2C14E] text-[#F5F3ED] text-sm rounded-[3px] px-3.5 py-2.5 focus:outline-none transition-colors"
                    />
                    {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A39B] mb-1.5">
                        Preferred Club
                      </label>
                      <select
                        value={formData.branchId}
                        onChange={(e) => {
                          setFormData({ ...formData, branchId: e.target.value });
                          setSelectedBranchId(e.target.value);
                        }}
                        className="w-full bg-[#1A1A1A] border border-[#35332D] focus:border-[#F2C14E] text-[#F5F3ED] text-sm rounded-[3px] px-3 py-2.5 focus:outline-none transition-colors"
                      >
                        {BRANCHES.map((b) => (
                          <option key={b.id} value={b.id} className="bg-[#101010]">
                            {b.city} — {b.area}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A39B] mb-1.5">
                        Program Focus
                      </label>
                      <select
                        value={formData.programId}
                        onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
                        className="w-full bg-[#1A1A1A] border border-[#35332D] focus:border-[#F2C14E] text-[#F5F3ED] text-sm rounded-[3px] px-3 py-2.5 focus:outline-none transition-colors"
                      >
                        {PROGRAMS.map((p) => (
                          <option key={p.id} value={p.id} className="bg-[#101010]">
                            {p.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A39B] mb-1.5">
                      Specific Inquiries / Goals (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Let us know your training background, lifting PRs, or scheduling preference..."
                      className="w-full bg-[#1A1A1A] border border-[#35332D] focus:border-[#F2C14E] text-[#F5F3ED] text-sm rounded-[3px] px-3.5 py-2 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-4 font-heading font-bold text-xs uppercase tracking-wider text-[#101010] bg-[#F2C14E] hover:bg-[#D9A52E] rounded-[2px] transition-colors cursor-pointer shadow-md disabled:opacity-70"
                  >
                    {submitting ? 'Submitting...' : 'Dispatch Consultation Request'}
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-[#A6A39B] pt-2">
                    <span className="flex items-center gap-1">
                      <Shield className="w-3.5 h-3.5 text-[#F2C14E]" />
                      Direct concierge callback
                    </span>
                    <span>No automated robot calls</span>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Interactive Branch Switcher & Responsive Google Map (Col 6) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
                  Find Your Flagship
                </span>
                <h3 className="font-heading text-xl font-bold text-[#F5F3ED] tracking-tight mt-1">
                  Select a Club to View Location & Directions
                </h3>
              </div>

              {/* Branch quick tabs */}
              <div className="flex flex-wrap gap-2">
                {BRANCHES.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => {
                      setSelectedBranchId(b.id);
                      setFormData(prev => ({ ...prev, branchId: b.id }));
                    }}
                    className={`py-2 px-3 text-xs font-semibold rounded-[2px] transition-colors cursor-pointer ${
                      selectedBranchId === b.id
                        ? 'bg-[#F2C14E] text-[#101010] font-bold'
                        : 'bg-[#252525] text-[#A6A39B] hover:text-[#F5F3ED] border border-[#35332D]'
                    }`}
                  >
                    {b.city} ({b.area})
                  </button>
                ))}
              </div>

              {/* Selected Branch Details Card */}
              <div className="bg-[#252525] border border-[#35332D] rounded-[3px] p-5 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-heading font-bold text-lg text-[#F5F3ED]">
                      {activeBranch.name}
                    </h4>
                    <p className="text-xs text-[#A6A39B] mt-1 leading-relaxed">
                      {activeBranch.address}
                    </p>
                  </div>

                  <a
                    href={activeBranch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 bg-[#1A1A1A] hover:bg-[#F2C14E] text-[#F5F3ED] hover:text-[#101010] border border-[#35332D] text-xs font-semibold rounded-[2px] transition-colors shrink-0 flex items-center gap-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#F2C14E]" />
                    <span>Get Directions</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-[#35332D] flex flex-wrap items-center justify-between text-xs text-[#A6A39B] gap-2">
                  <span><strong>Timings:</strong> {activeBranch.timings}</span>
                  <span className="text-[#F2C14E]">{activeBranch.sqft}</span>
                </div>
              </div>

              {/* Responsive Embedded Google Map */}
              <div className="relative w-full aspect-[16/10] bg-[#1A1A1A] border border-[#35332D] rounded-[3px] overflow-hidden">
                <iframe
                  title={`Google Maps location for ${activeBranch.name}`}
                  src={activeBranch.mapEmbedUrl}
                  className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-80"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALL BRANCHES DIRECTORY */}
      <section className="py-20 bg-[#101010]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
              National Network
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F5F3ED] tracking-tight mt-1">
              All 5 Flagship Addresses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANCHES.map((b) => (
              <div key={b.id} className="bg-[#1A1A1A] border border-[#35332D] rounded-[3px] p-6 space-y-3">
                <span className="text-xs font-bold text-[#F2C14E] uppercase tracking-wider">
                  {b.city}
                </span>
                <h4 className="font-heading font-bold text-lg text-[#F5F3ED]">
                  {b.name}
                </h4>
                <p className="text-xs text-[#A6A39B] leading-relaxed">
                  {b.address}
                </p>
                <div className="text-[11px] text-[#A6A39B]/80 pt-2 border-t border-[#35332D]">
                  {b.timings}
                </div>
                <div className="pt-2 flex items-center justify-between text-xs">
                  <a
                    href={b.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F2C14E] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Google Maps Directions</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(undefined, b.id)}
                    className="text-[#F5F3ED] hover:text-[#F2C14E] font-medium"
                  >
                    Book Tour
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
