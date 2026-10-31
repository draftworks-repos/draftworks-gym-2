import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatINR,
  calculateMonthlyEquivalent,
  calculateSavingsPercent,
  calculateGSTBreakdown,
  validateIndianPhone,
  validateEnquiryForm
} from './pricingAndBooking';

test('formatINR formats currency in Indian numbering', () => {
  const result = formatINR(48000);
  assert.ok(result.includes('48,000'));
});

test('calculateMonthlyEquivalent computes correct monthly cost', () => {
  assert.equal(calculateMonthlyEquivalent(48000), 4000);
  assert.equal(calculateMonthlyEquivalent(16500), 1375);
});

test('calculateSavingsPercent computes savings correctly', () => {
  // Monthly 6500 * 3 = 19500 vs Quarterly 16500 -> diff 3000 -> 3000/19500 = 15%
  assert.equal(calculateSavingsPercent(6500, 16500, 3), 15);
  // Monthly 6500 * 12 = 78000 vs Annual 48000 -> diff 30000 -> 30000/78000 = 38%
  assert.equal(calculateSavingsPercent(6500, 48000, 12), 38);
});

test('calculateGSTBreakdown calculates 18% inclusive GST', () => {
  const { baseAmount, gstAmount, totalAmount } = calculateGSTBreakdown(11800, 18);
  assert.equal(baseAmount, 10000);
  assert.equal(gstAmount, 1800);
  assert.equal(totalAmount, 11800);
});

test('validateIndianPhone validates standard Indian formats', () => {
  // 10 digits starting with 9
  const res1 = validateIndianPhone('8959690529');
  assert.equal(res1.isValid, true);
  assert.equal(res1.normalized, '+91 89596 90529');

  // +91 format with spaces
  const res2 = validateIndianPhone('+91 89596 90529');
  assert.equal(res2.isValid, true);
  assert.equal(res2.normalized, '+91 89596 90529');

  // Invalid length or leading digit
  const res3 = validateIndianPhone('123456');
  assert.equal(res3.isValid, false);

  const res4 = validateIndianPhone('2234567890');
  assert.equal(res4.isValid, false);
});

test('validateEnquiryForm catches missing fields and invalid inputs', () => {
  const valid = validateEnquiryForm({
    fullName: 'Aditya Rao',
    phone: '9845012345',
    programId: 'strength-conditioning',
    branchId: 'blr-indiranagar'
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);

  const invalid = validateEnquiryForm({
    fullName: '',
    phone: 'invalid',
    programId: '',
    branchId: ''
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.programId);
  assert.ok(invalid.errors.branchId);
});
