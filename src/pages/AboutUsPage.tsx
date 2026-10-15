import React from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO, getWhatsAppUrl, WHY_CHOOSE_US } from '../data/companyConfig';
import { ShieldCheck, Building2, Factory, Home as HomeIcon, CheckCircle2, MessageSquare } from 'lucide-react';

interface AboutUsPageProps {
  navigate: (path: PageRoute, categorySlug?: string) => void;
  onRequestQuote: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onRequestQuote }) => {
  const whatsappUrl = getWhatsAppUrl(`Hello ${COMPANY_INFO.name}, I would like to enquire about your company profile and material supplies.`);

  return (
    <div className="space-y-16 pb-16">
      {/* Page Header Banner */}
      <section className="bg-[#0A0A0A] border-b border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-bold tracking-[0.3em] uppercase">
            <span>COMPANY PROFILE & VALUES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tighter uppercase">
            ABOUT <span className="text-[#D4AF37]">{COMPANY_INFO.shortName}</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            <strong className="text-white">{COMPANY_INFO.name}</strong> — Your trusted building materials supplier in {COMPANY_INFO.location}, serving contractors and builders across the United Arab Emirates.
          </p>
        </div>
      </section>

      {/* Main Profile Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              ESTABLISHED IN {COMPANY_INFO.establishedYear} IN {COMPANY_INFO.location.toUpperCase()}
            </h2>

            <p>
              <strong className="text-white">{COMPANY_INFO.name}</strong> is a specialized building materials trading enterprise established in {COMPANY_INFO.establishedYear}, located in the strategic industrial hub of {COMPANY_INFO.location}.
            </p>

            <p>
              We were established with a clear objective: to provide construction companies, MEP contractors, interior fit-out specialists, and private developers with a dependable source of high-quality building supplies at transparent, competitive prices.
            </p>

            <div className="p-5 rounded-2xl bg-[#121212] border border-[#222] space-y-3">
              <h3 className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider">OUR CORE VALUES</h3>
              <ul className="space-y-2 text-xs">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Quality Assurance:</strong> Verified materials meeting local municipality standards and international ASTM/BS requirements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Reliable Logistics:</strong> Prompt order processing and site delivery across all 7 Emirates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Transparent Pricing:</strong> Competitive bulk quotations without hidden fees or surprise surcharges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Client-Centric Support:</strong> Dedicated trade experts guiding your material selections.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-[#2B2B2B] shadow-2xl aspect-4/3 bg-[#111]">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80" 
              alt="AL TAYER Warehouse Facility" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0A0A0A]/90 border border-[#333] text-xs text-slate-200">
              <span className="text-[#D4AF37] font-bold block mb-1 uppercase">SUPPLY NETWORK</span>
              Direct material distribution to Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah, Al Ain & Ras Al Khaimah.
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER SEGMENTS */}
      <section className="bg-[#080808] border-y border-[#1E1E1E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#D4AF37] font-extrabold text-xs tracking-widest uppercase">TARGET SEGMENTS</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">WHO WE SERVE</h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Supporting projects of all scales with specialized material selections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#121212] border border-[#262626] space-y-3">
              <HomeIcon className="w-8 h-8 text-[#D4AF37]" />
              <h3 className="text-lg font-bold text-white">RESIDENTIAL PROJECTS</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Private villas, residential buildings, townhouses, and housing developments requiring formwork timber, rebar, plumbing, electrical, and hardware accessories.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121212] border border-[#262626] space-y-3">
              <Building2 className="w-8 h-8 text-[#D4AF37]" />
              <h3 className="text-lg font-bold text-white">COMMERCIAL PROJECTS</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Commercial towers, retail centers, hotels, offices, and interior fit-out jobs needing high-spec waterproofing, gypsum boards, steel beams, and fasteners.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121212] border border-[#262626] space-y-3">
              <Factory className="w-8 h-8 text-[#D4AF37]" />
              <h3 className="text-lg font-bold text-white">INDUSTRIAL PROJECTS</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Warehouses, industrial plants, infrastructure projects, and logistics facilities requiring heavy hollow sections, GI pipes, BRC mesh, and certified PPE gear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[#D4AF37] font-extrabold text-xs tracking-widest uppercase">THE AL TAYER ADVANTAGE</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">WHY CONTRACTORS TRUST AL TAYER</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#121212] border border-[#222] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#121212] via-[#1A1A1A] to-[#121212] border border-[#D4AF37]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">READY TO SOURCE YOUR MATERIALS?</h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">Get direct pricing, stock availability, and tailored quotation support.</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onRequestQuote}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#9A7B2C] text-black font-bold text-xs uppercase tracking-wider cursor-pointer shadow-lg"
            >
              REQUEST A QUOTE
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1eb753] text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WHATSAPP US</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
