import React, { useState } from 'react';
import { Check, ShieldCheck, ArrowUpRight, HelpCircle, Sparkles } from 'lucide-react';
import { PRICING_PLANS, PricingPlan } from '../data/siteData';
import { calculateGSTBreakdown } from '../utils/pricingAndBooking';

interface PricingPageProps {
  onNavigate: (page: string) => void;
  onOpenEnquiry: (programId?: string, branchId?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [selectedPlan, setSelectedPlan] = useState<string>('quarterly');

  return (
    <div className="w-full bg-[#101010]">
      {/* INTERNAL SPLIT HERO */}
      <section className="relative min-h-[92svh] lg:min-h-[100svh] flex items-center pt-24 pb-16 border-b border-[#35332D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Content Side */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
                Transparent Commitment
              </span>

              <h1 className="font-heading text-3xl sm:text-5xl font-black text-[#F5F3ED] tracking-tight uppercase leading-[1.08]">
                Straightforward <br />
                <span className="text-[#F2C14E]">Membership</span> Rates.
              </h1>

              <p className="text-base sm:text-lg text-[#A6A39B] leading-relaxed max-w-xl">
                One membership unlocks every lifting platform, coach-led session, turf track, and thermal recovery suite across our 5 flagship clubs. No registration penalties or hidden locker charges.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => onOpenEnquiry()}
                  className="py-3.5 px-8 font-heading font-bold text-xs uppercase tracking-wider text-[#101010] bg-[#F2C14E] hover:bg-[#D9A52E] rounded-[2px] transition-colors cursor-pointer text-center"
                >
                  Apply For Membership
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-[#F5F3ED] bg-[#1A1A1A] hover:bg-[#252525] border border-[#35332D] rounded-[2px] transition-colors cursor-pointer text-center"
                >
                  Locate Flagship Clubs
                </button>
              </div>

              {/* Guarantees */}
              <div className="pt-6 border-t border-[#35332D] space-y-2 text-xs text-[#A6A39B]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#F2C14E]" />
                  <span>All prices in Indian Rupees (INR), fully inclusive of 18% GST.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#F2C14E]" />
                  <span>30-Day medical or travel membership freeze available on all commitments.</span>
                </div>
              </div>
            </div>

            {/* Photo Side */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] lg:aspect-[1/1] rounded-[3px] overflow-hidden border border-[#35332D] shadow-2xl bg-[#1A1A1A]">
                <img
                  src="/temp/recovery.webp"
                  alt="DraftWorks Recovery Suite Cold Plunge"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="py-24 bg-[#1A1A1A] border-b border-[#35332D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
              Membership Packages
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#F5F3ED] tracking-tight mt-1">
              Select Your Commitment Horizon
            </h2>
            <p className="text-xs sm:text-sm text-[#A6A39B] mt-2">
              We reward consistency. Quarterly and annual memberships include multi-club roaming across Bengaluru, Hyderabad, Mumbai, Pune, and New Delhi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_PLANS.map((plan) => {
              const gst = calculateGSTBreakdown(plan.priceNumeric);
              const isPopular = plan.popular;

              return (
                <div
                  key={plan.id}
                  className={`relative bg-[#252525] rounded-[3px] p-8 flex flex-col justify-between transition-all duration-300 border ${
                    isPopular
                      ? 'border-[#F2C14E] shadow-[0_0_30px_rgba(242,193,78,0.1)]'
                      : 'border-[#35332D] hover:border-[#35332D]/90'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F2C14E] text-[#101010] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-[2px] shadow-sm">
                      Most Popular
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="pb-6 border-b border-[#35332D]">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#A6A39B]">
                        {plan.period}
                      </span>
                      <h3 className="font-heading text-2xl font-black text-[#F5F3ED] tracking-tight mt-1">
                        {plan.name}
                      </h3>

                      <div className="mt-4 flex items-baseline gap-2">
                        <span className="font-heading text-4xl sm:text-5xl font-black text-[#F2C14E] tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-xs text-[#A6A39B]">/ period</span>
                      </div>

                      <p className="text-xs text-[#A6A39B] mt-2 leading-relaxed">
                        {plan.billingText}
                      </p>

                      <div className="mt-3 text-[11px] text-[#A6A39B]/70 font-mono">
                        Base: ₹{gst.baseAmount.toLocaleString('en-IN')} + 18% GST: ₹{gst.gstAmount.toLocaleString('en-IN')}
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="py-6 space-y-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5F3ED]">
                        Included In Membership:
                      </span>
                      <ul className="space-y-2.5 text-xs text-[#A6A39B]">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                            <Check className="w-4 h-4 text-[#F2C14E] shrink-0 mt-0.5" />
                            <span className="text-[#F5F3ED]/90">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="pt-6 border-t border-[#35332D]">
                    <button
                      type="button"
                      onClick={() => onOpenEnquiry(undefined, undefined)}
                      className={`w-full py-3.5 px-4 font-heading font-bold text-xs uppercase tracking-wider rounded-[2px] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md ${
                        isPopular
                          ? 'bg-[#F2C14E] hover:bg-[#D9A52E] text-[#101010]'
                          : 'bg-[#1A1A1A] hover:bg-[#35332D] text-[#F5F3ED] border border-[#35332D]'
                      }`}
                    >
                      <span>Join This Tier</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#101010]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F2C14E]">
              Membership Clarifications
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-[#F5F3ED] tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6 text-xs sm:text-sm">
            <div className="bg-[#1A1A1A] border border-[#35332D] rounded-[3px] p-6 space-y-2">
              <h4 className="font-heading font-bold text-base text-[#F5F3ED]">
                Do I have to pay extra for specific classes or lifting coaching?
              </h4>
              <p className="text-[#A6A39B] leading-relaxed">
                No. Unlike commercial boutique studios that charge ₹1,200 per individual class, all DraftWorks group lifting, Olympic weightlifting technique sessions, and sprint turf intervals are fully included in your membership.
              </p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#35332D] rounded-[3px] p-6 space-y-2">
              <h4 className="font-heading font-bold text-base text-[#F5F3ED]">
                Can I train across different cities when traveling?
              </h4>
              <p className="text-[#A6A39B] leading-relaxed">
                Yes. Quarterly and Annual members have seamless roaming privileges across all 5 flagship facilities in Bengaluru, Hyderabad, Mumbai, Pune, and New Delhi. Your digital keycard works across all doors.
              </p>
            </div>

            <div className="bg-[#1A1A1A] border border-[#35332D] rounded-[3px] p-6 space-y-2">
              <h4 className="font-heading font-bold text-base text-[#F5F3ED]">
                How does the 30-day membership freeze work?
              </h4>
              <p className="text-[#A6A39B] leading-relaxed">
                If you have travel, medical rest, or work commitments, simply message your member concierge with 48 hours notice. You can pause your membership for up to 30 consecutive days without losing credit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
