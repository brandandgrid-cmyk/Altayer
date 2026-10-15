import React from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/companyConfig';

interface LegalPageProps {
  navigate: (path: PageRoute) => void;
}

export const CookiePolicyPage: React.FC<LegalPageProps> = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-slate-300 text-sm leading-relaxed">
      <div className="border-b border-[#222] pb-6 space-y-2">
        <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider">LEGAL DOCUMENTATION</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">COOKIE POLICY</h1>
        <p className="text-xs text-slate-400">{COMPANY_INFO.legalName} | {COMPANY_INFO.location}</p>
      </div>

      <div className="space-y-6">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">1. What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your computer or mobile device when you visit websites. They help improve website functionality and user experience.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">2. How We Use Cookies</h2>
          <p>
            {COMPANY_INFO.legalName} uses essential cookies necessary for website navigation, form submission functionality, and session state management. We do not use intrusive tracking cookies.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">3. Managing Cookies</h2>
          <p>
            You can configure your web browser settings to block or notify you about cookies. However, disabling essential cookies may affect form submission functionality.
          </p>
        </section>
      </div>
    </div>
  );
};
