/**
 * Pricing and booking utility helpers for DraftWorks Gym
 */

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

export function calculateMonthlyEquivalent(annualPrice: number): number {
  return Math.round(annualPrice / 12);
}

export function calculateSavingsPercent(baseMonthly: number, commitmentPrice: number, months: number): number {
  const fullCost = baseMonthly * months;
  const diff = fullCost - commitmentPrice;
  if (diff <= 0) return 0;
  return Math.round((diff / fullCost) * 100);
}

export function calculateGSTBreakdown(amount: number, gstRatePercent: number = 18): {
  baseAmount: number;
  gstAmount: number;
  totalAmount: number;
} {
  // Amount is inclusive of GST
  const factor = 1 + gstRatePercent / 100;
  const baseAmount = Math.round(amount / factor);
  const gstAmount = amount - baseAmount;
  return {
    baseAmount,
    gstAmount,
    totalAmount: amount
  };
}

export function validateIndianPhone(phone: string): { isValid: boolean; normalized: string } {
  // Removes spaces, hyphens, and parenthesis
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  
  // Accepts: +91XXXXXXXXXX, 91XXXXXXXXXX, 0XXXXXXXXXX, or 10-digit XXXXXXXXXX (starts with 6,7,8,9)
  const indianPhoneRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
  if (!indianPhoneRegex.test(cleaned)) {
    return { isValid: false, normalized: cleaned };
  }
  
  // Extract last 10 digits
  const last10 = cleaned.slice(-10);
  return { isValid: true, normalized: `+91 ${last10.slice(0, 5)} ${last10.slice(5)}` };
}

export function validateEnquiryForm(data: {
  fullName: string;
  phone: string;
  programId: string;
  branchId: string;
}): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name (at least 2 characters).";
  }

  const phoneCheck = validateIndianPhone(data.phone || "");
  if (!phoneCheck.isValid) {
    errors.phone = "Please enter a valid 10-digit Indian mobile number.";
  }

  if (!data.programId) {
    errors.programId = "Please select a training program of interest.";
  }

  if (!data.branchId) {
    errors.branchId = "Please select your preferred branch.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
