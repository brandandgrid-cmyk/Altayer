import React from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/companyConfig';

interface LegalPageProps {
  navigate: (path: PageRoute) => void;
}

export const PrivacyPolicyPage: React.FC<LegalPageProps> = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-slate-300 text-sm leading-relaxed">
      <div className="border-b border-[#222] pb-6 space-y-2">
        <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider">LEGAL DOCUMENTATION</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">PRIVACY POLICY</h1>
        <p className="text-xs text-slate-400">Effective Date: January 1, {COMPANY_INFO.establishedYear} | {COMPANY_INFO.legalName}</p>
      </div>

      <div className="space-y-6">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">1. Introduction</h2>
          <p>
            {COMPANY_INFO.legalName} ("Company", "we", "us", or "our"), located in {COMPANY_INFO.location}, respects your privacy and is committed to protecting the personal data of our customers, contractors, suppliers, and website visitors.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
          <p>When you request a quote, submit an online enquiry, or communicate with us, we may collect:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs">
            <li>Contact details (Full Name, Phone Number, Email Address, Company Name).</li>
            <li>Project information and material specifications required.</li>
            <li>Site delivery locations within the United Arab Emirates.</li>
            <li>Technical log data (IP address, browser type, device information for analytical purposes).</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">3. How We Use Your Information</h2>
          <p>We process collected information strictly for business purposes, including:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs">
            <li>Preparing and issuing building material price quotations and invoices.</li>
            <li>Coordinating product delivery and transport logistics across UAE Emirates.</li>
            <li>Responding to customer enquiries submitted via web forms, phone, or WhatsApp.</li>
            <li>Complying with local legal and commercial regulations in Ajman and the UAE.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">4. Data Protection & Sharing</h2>
          <p>
            We do not sell, rent, or trade your personal or commercial contact information to third parties. Data may only be shared with authorized transport and logistics partners solely for fulfilling site deliveries.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">5. Contact Us</h2>
          <p>For privacy queries, contact {COMPANY_INFO.legalName}:</p>
          <p className="text-xs text-slate-400">
            Address: {COMPANY_INFO.location}<br />
            Email: {COMPANY_INFO.emails.primary} / {COMPANY_INFO.emails.secondary}<br />
            Phone: {COMPANY_INFO.primaryPhone}
          </p>
        </section>
      </div>
    </div>
  );
};
