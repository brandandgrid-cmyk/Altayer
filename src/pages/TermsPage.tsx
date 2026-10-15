import React from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/companyConfig';

interface LegalPageProps {
  navigate: (path: PageRoute) => void;
}

export const TermsPage: React.FC<LegalPageProps> = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-slate-300 text-sm leading-relaxed">
      <div className="border-b border-[#222] pb-6 space-y-2">
        <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider">LEGAL DOCUMENTATION</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">TERMS & CONDITIONS</h1>
        <p className="text-xs text-slate-400">Effective Date: January 1, {COMPANY_INFO.establishedYear} | {COMPANY_INFO.legalName}</p>
      </div>

      <div className="space-y-6">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">1. Business Operations</h2>
          <p>
            These Terms & Conditions govern the commercial trading relationship between {COMPANY_INFO.legalName} ("Company") and buyers, contractors, or clients purchasing building materials.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">2. Quotations & Pricing</h2>
          <p>
            All price quotations issued verbally, electronically, or in writing are subject to stock availability and prevailing raw material market rates (such as steel or timber fluctuations) unless explicitly stated in a formal written commercial quotation.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">3. Delivery & Site Offloading</h2>
          <p>
            Material deliveries are scheduled upon payment confirmation or agreed commercial terms. Buyers must ensure clear, suitable access for heavy delivery trucks at designated job sites across the UAE.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">4. Inspection & Returns</h2>
          <p>
            Buyers are required to inspect materials immediately upon delivery at the site. Any claims regarding damages or quantity discrepancies must be reported at the time of offloading.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">5. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the Emirate of Ajman and the federal laws of the United Arab Emirates.
          </p>
        </section>
      </div>
    </div>
  );
};
