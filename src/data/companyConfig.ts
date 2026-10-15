/**
 * Single source of truth for AL TAYER BUILDING MATERIALS TRADING L.L.C.
 * All contact details, company information, addresses, and dynamic utility methods.
 */

export const COMPANY_INFO = {
  name: 'AL TAYER BUILDING MATERIALS TRADING L.L.C.',
  shortName: 'AL TAYER',
  legalName: 'AL TAYER BUILDING MATERIALS TRADING L.L.C.',
  establishedYear: 2024,
  tagline: 'Quality Building Materials Supplier in UAE',
  location: 'Al Alia, Ajman, U.A.E.',
  address: {
    street: 'Al Alia',
    city: 'Ajman',
    country: 'United Arab Emirates',
    full: 'Al Alia, Ajman, United Arab Emirates'
  },
  coordinates: {
    lat: 25.398136138916016,
    lng: 55.565731048583984,
    googleMapsUrl: 'https://www.google.com/maps?q=25.398136138916016,55.565731048583984&z=17&hl=en',
    embedUrl: 'https://maps.google.com/maps?q=25.398136138916016,55.565731048583984&z=16&output=embed'
  },
  phones: [
    { number: '+971 55 955 9981', raw: '+971559559981', label: 'Primary Hotline / WhatsApp' },
    { number: '+971 55 191 5060', raw: '+971551915060', label: 'Trade Desk' },
    { number: '+971 56 768 8555', raw: '+971567688555', label: 'Sales Support' }
  ],
  primaryPhone: '+971 55 955 9981',
  primaryPhoneRaw: '+971559559981',
  primaryWhatsApp: '+971559559981',
  primaryWhatsAppClean: '971559559981',
  whatsappDisplay: '+971 55 955 9981',
  emails: {
    primary: 'info@altayerbuildingmaterialstrd.com',
    secondary: 'altayerbuildingmaterialtrading@gmail.com'
  },
  socials: {
    instagram: {
      handle: '@altayer_111',
      url: 'https://www.instagram.com/altayer_111/'
    },
    tiktok: {
      handle: '@altayerbmt_111',
      url: 'https://www.tiktok.com/@altayerbmt_111?_r=1&_t=ZS-98dG4P47pYO'
    },
    facebook: {
      name: 'AL TAYER Building Materials',
      url: 'https://www.facebook.com/share/1EjHe8gvLE/?mibextid=wwXIfr'
    }
  },
  website: 'https://www.altayerbuildingmaterialstrd.com'
};

export const UAE_EMIRATES = [
  { name: 'Ajman', highlight: 'HQ & Express Local Dispatch' },
  { name: 'Dubai', highlight: 'Commercial & High-Rise Sites' },
  { name: 'Abu Dhabi', highlight: 'Industrial & Infrastructure' },
  { name: 'Sharjah', highlight: 'Industrial & Residential' },
  { name: 'Fujairah', highlight: 'Quarry & Civil Projects' },
  { name: 'Al Ain', highlight: 'Residential & Agricultural' },
  { name: 'Ras Al Khaimah', highlight: 'Heavy Masonry & Manufacturing' }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Wide Product Range',
    description: '19 specialized product categories covering heavy structural steel, wood, cement, plumbing, electrical, and site safety supplies.'
  },
  {
    title: 'Quality Supplies',
    description: 'All materials sourced from certified regional mills and reputable international manufacturers with Mill Test Certificates.'
  },
  {
    title: 'Customer-Focused Service',
    description: 'Dedicated trade coordinators provide fast response, technical specification guidance, and clear commercial quotations.'
  },
  {
    title: 'Reliable UAE Logistics',
    description: 'Fleet transport coordination ensuring on-time jobsite delivery across all 7 Emirates without project delays.'
  },
  {
    title: 'Competitive Trade Rates',
    description: 'Direct wholesale rates and transparent trade pricing tailored for MEP, civil, and finishing contracting firms.'
  },
  {
    title: 'Rapid Quotation Turnaround',
    description: 'Swift RFQ processing via WhatsApp Direct and online portal within 30 minutes for active project needs.'
  }
];

/**
 * Returns dynamic copyright year string: e.g. "© 2024–2026 AL TAYER BUILDING MATERIALS TRADING L.L.C. All rights reserved."
 * The starting year 2024 remains fixed, current year updates automatically.
 */
export const getCopyrightText = (): string => {
  const startYear = COMPANY_INFO.establishedYear;
  const currentYear = new Date().getFullYear();
  const yearRange = currentYear > startYear ? `${startYear}–${currentYear}` : `${startYear}`;
  return `© ${yearRange} ${COMPANY_INFO.legalName}. All rights reserved.`;
};

/**
 * Helper to generate consistent, valid international WhatsApp URLs.
 */
export const getWhatsAppUrl = (customMessage?: string): string => {
  const message = customMessage || 'Hello AL TAYER Building Materials Trading, I would like to enquire about your products.';
  return `https://wa.me/${COMPANY_INFO.primaryWhatsAppClean}?text=${encodeURIComponent(message)}`;
};
