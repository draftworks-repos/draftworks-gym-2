import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Shield, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { BRANCHES, PROGRAMS, SITE_INFO } from '../data/siteData';
import { validateEnquiryForm } from '../utils/pricingAndBooking';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProgram?: string;
  preselectedBranch?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedProgram,
  preselectedBranch,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    programId: preselectedProgram || PROGRAMS[0].id,
    branchId: preselectedBranch || BRANCHES[0].id,
    goals: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  useEffect(() => {
    if (preselectedProgram) {
      setFormData(prev => ({ ...prev, programId: preselectedProgram }));
    }
    if (preselectedBranch) {
      setFormData(prev => ({ ...prev, branchId: preselectedBranch }));
    }
  }, [preselectedProgram, preselectedBranch]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateEnquiryForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      const code = `DW-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceCode(code);
      setSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      programId: PROGRAMS[0].id,
      branchId: BRANCHES[0].id,
      goals: '',
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Surface */}
      <div className="relative w-full max-w-lg bg-[#1A1A1A] border border-[#35332D] rounded-[4px] shadow-2xl overflow-hidden z-10 my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Top Accent Bar */}
        <div className="h-1 bg-gradient-to-r from-[#F2C14E] via-[#D9A52E] to-[#F2C14E]" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#A6A39B] hover:text-[#F5F3ED] rounded-[2px] hover:bg-[#252525] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#252525] border border-[#F2C14E]/30 flex items-center justify-center text-[#F2C14E]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold text-[#F5F3ED] tracking-tight">
                  Enquiry Received
                </h3>
                <p className="text-sm text-[#A6A39B] mt-2 max-w-sm mx-auto">
                  Thank you, <span className="text-[#F5F3ED] font-medium">{formData.fullName}</span>. Our member concierge will contact you within 2 business hours.
                </p>
              </div>

              <div className="bg-[#252525] border border-[#35332D] p-4 rounded-[3px] text-left text-xs space-y-2">
                <div className="flex justify-between text-[#A6A39B]">
                  <span>Reference ID:</span>
                  <span className="font-mono text-[#F2C14E] font-semibold">{referenceCode}</span>
                </div>
                <div className="flex justify-between text-[#A6A39B]">
                  <span>Branch:</span>
                  <span className="text-[#F5F3ED]">
                    {BRANCHES.find(b => b.id === formData.branchId)?.name || 'Flagship Club'}
                  </span>
                </div>
                <div className="flex justify-between text-[#A6A39B]">
                  <span>Selected Program:</span>
                  <span className="text-[#F5F3ED]">
                    {PROGRAMS.find(p => p.id === formData.programId)?.title}
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#A6A39B] flex items-center justify-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#F2C14E]" />
                Zero spam policy. Your details remain confidential.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="w-full py-3 text-xs font-bold uppercase tracking-wider text-[#101010] bg-[#F2C14E] hover:bg-[#D9A52E] rounded-[2px] transition-colors cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
                  Private Consultation
                </span>
                <h2
                  id="enquiry-modal-title"
                  className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F5F3ED] tracking-tight mt-1"
                >
                  Experience DraftWorks
                </h2>
                <p className="text-xs sm:text-sm text-[#A6A39B] mt-1.5">
                  Book a facility walk-through and complimentary 30-minute biomechanical movement screen with our head coaches.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#A6A39B] mb-1.5">
                    Full Name <span className="text-[#F2C14E]">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Aditya Sharma"
                    className={`w-full bg-[#252525] border text-[#F5F3ED] text-sm rounded-[3px] px-3.5 py-2.5 focus:outline-none transition-colors placeholder-[#A6A39B]/50 ${
                      errors.fullName ? 'border-red-500/80 focus:border-red-500' : 'border-[#35332D] focus:border-[#F2C14E]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#A6A39B] mb-1.5">
                    Contact Number (India) <span className="text-[#F2C14E]">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 89596 90529 or 10 digits"
                    className={`w-full bg-[#252525] border text-[#F5F3ED] text-sm rounded-[3px] px-3.5 py-2.5 focus:outline-none transition-colors placeholder-[#A6A39B]/50 ${
                      errors.phone ? 'border-red-500/80 focus:border-red-500' : 'border-[#35332D] focus:border-[#F2C14E]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-400 mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Program & Branch in 2 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Program Selection */}
                  <div>
                    <label htmlFor="programId" className="block text-xs font-semibold uppercase tracking-wider text-[#A6A39B] mb-1.5">
                      Program of Interest
                    </label>
                    <select
                      id="programId"
                      value={formData.programId}
                      onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
                      className="w-full bg-[#252525] border border-[#35332D] text-[#F5F3ED] text-sm rounded-[3px] px-3 py-2.5 focus:outline-none focus:border-[#F2C14E] transition-colors"
                    >
                      {PROGRAMS.map((prog) => (
                        <option key={prog.id} value={prog.id} className="bg-[#1A1A1A]">
                          {prog.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Branch Selection */}
                  <div>
                    <label htmlFor="branchId" className="block text-xs font-semibold uppercase tracking-wider text-[#A6A39B] mb-1.5">
                      Preferred Club
                    </label>
                    <select
                      id="branchId"
                      value={formData.branchId}
                      onChange={(e) => setFormData({ ...formData, branchId: e.target.value })}
                      className="w-full bg-[#252525] border border-[#35332D] text-[#F5F3ED] text-sm rounded-[3px] px-3 py-2.5 focus:outline-none focus:border-[#F2C14E] transition-colors"
                    >
                      {BRANCHES.map((b) => (
                        <option key={b.id} value={b.id} className="bg-[#1A1A1A]">
                          {b.city} — {b.area}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Training Goals or Notes */}
                <div>
                  <label htmlFor="goals" className="block text-xs font-semibold uppercase tracking-wider text-[#A6A39B] mb-1.5">
                    Current Training Goals (Optional)
                  </label>
                  <textarea
                    id="goals"
                    rows={2}
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    placeholder="e.g. Olympic weightlifting technique, rehab post-rotator cuff, or powerlifting..."
                    className="w-full bg-[#252525] border border-[#35332D] text-[#F5F3ED] text-sm rounded-[3px] px-3.5 py-2 focus:outline-none focus:border-[#F2C14E] transition-colors placeholder-[#A6A39B]/50 resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-4 flex items-center justify-center gap-2 font-heading font-bold text-xs uppercase tracking-wider text-[#101010] bg-[#F2C14E] hover:bg-[#D9A52E] rounded-[2px] transition-all cursor-pointer shadow-md disabled:opacity-70 active:scale-[0.99]"
                  >
                    {submitting ? 'Submitting Request...' : 'Confirm Consultation Request'}
                    {!submitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#A6A39B] pt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#F2C14E]" />
                    Same-day tour scheduling available
                  </span>
                  <span>{SITE_INFO.phone}</span>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
