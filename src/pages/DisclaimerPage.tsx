import React from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/companyConfig';

interface LegalPageProps {
  navigate: (path: PageRoute) => void;
}

export const DisclaimerPage: React.FC<LegalPageProps> = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-slate-300 text-sm leading-relaxed">
      <div className="border-b border-[#222] pb-6 space-y-2">
        <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider">LEGAL DOCUMENTATION</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">DISCLAIMER</h1>
        <p className="text-xs text-slate-400">{COMPANY_INFO.legalName} | {COMPANY_INFO.location}</p>
      </div>

      <div className="space-y-6">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">1. Product Information</h2>
          <p>
            The information contained on this website is for general informational and material catalogue purposes only. While {COMPANY_INFO.legalName} endeavors to keep product descriptions, dimensions, and specifications accurate, final specifications should be verified prior to placing commercial orders.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">2. Availability & Specifications</h2>
          <p>
            Product availability, mill origins, and technical grades are subject to change based on market supply. Contractors are advised to request official mill test certificates or material data sheets where required for consultant approvals.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">3. Third-Party Trademarks</h2>
          <p>
            All brand names, trademarks, and logos mentioned on this website belong to their respective manufacturers or trademark holders. {COMPANY_INFO.legalName} trades authentic building materials sourced through legal supply channels in the UAE.
          </p>
        </section>
      </div>
    </div>
  );
};
