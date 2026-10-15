import React from 'react';
import { PageRoute } from '../types';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, MessageSquare, Instagram, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, getCopyrightText, getWhatsAppUrl } from '../data/companyConfig';
import { PRODUCT_CATEGORIES } from '../data/productsData';

interface FooterProps {
  navigate: (path: PageRoute, categorySlug?: string) => void;
  onRequestQuote: (productName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate, onRequestQuote }) => {
  const whatsappUrl = getWhatsAppUrl('Hello AL TAYER Building Materials Trading, I would like to enquire about your products.');

  return (
    <footer className="bg-[#050505] text-slate-300 border-t border-[#1F1F1F] pt-16 pb-12">
      {/* Top CTA Banner Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-2xl bg-gradient-to-r from-[#121212] via-[#1A1A1A] to-[#121212] border border-[#D4AF37]/30 p-8 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
          {/* Subtle gold accent light background */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-block px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-bold tracking-[0.3em] uppercase mb-3">
                <span>UAE BUILDING MATERIALS SUPPLIER</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white tracking-tighter uppercase leading-none">
                NEED BUILDING MATERIALS? <br />
                <span className="text-[#D4AF37]">CONTACT AL TAYER TODAY.</span>
              </h2>
              <p className="mt-3 text-slate-400 text-sm max-w-xl">
                Serving residential, commercial, and industrial construction projects in Ajman and across all 7 Emirates. Get fast quotations and direct site delivery support.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  navigate('/contact-us');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-3 rounded-xl bg-white text-black hover:bg-slate-200 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
              >
                CONTACT US
              </button>

              <button
                onClick={() => onRequestQuote()}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#9A7B2C] text-black font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-[#D4AF37]/20 hover:brightness-110"
              >
                REQUEST A QUOTE
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1eb753] text-slate-950 font-display font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                title={`WhatsApp Direct (${COMPANY_INFO.whatsappDisplay})`}
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WHATSAPP US</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#1A1A1A]">
        {/* Column 1: Brand Info */}
        <div className="lg:col-span-4 space-y-4">
          <Logo size="lg" />
          <p className="text-slate-400 text-xs leading-relaxed max-w-md pt-2">
            <strong className="text-slate-200">{COMPANY_INFO.name}</strong> (ESTABLISHED {COMPANY_INFO.establishedYear}) is a premier supplier of quality building, hardware, timber, steel, and electrical materials for residential, commercial, and industrial developments in the UAE.
          </p>
          <div className="pt-2 text-xs text-slate-500">
            <span>Location: {COMPANY_INFO.location}</span>
          </div>
        </div>

        {/* Column 2: Navigation & Company */}
        <div className="lg:col-span-2">
          <h3 className="text-white font-bold text-xs uppercase tracking-widest border-b border-[#222] pb-2 mb-4 text-[#D4AF37]">
            COMPANY
          </h3>
          <ul className="space-y-2.5 text-xs">
            {[
              { label: 'Home', path: '/' as PageRoute },
              { label: 'About Us', path: '/about-us' as PageRoute },
              { label: 'Products Catalogue', path: '/products' as PageRoute },
              { label: 'Contact Us', path: '/contact-us' as PageRoute }
            ].map((link) => (
              <li key={link.path}>
                <button
                  onClick={() => {
                    navigate(link.path);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Brochure Categories (Dynamic from categories list) - Positioned slightly left between Company and Contact Info */}
        <div className="lg:col-span-3 lg:-ml-6 xl:-ml-10">
          <h3 className="text-white font-bold text-xs uppercase tracking-widest border-b border-[#222] pb-2 mb-4 text-[#D4AF37]">
            PRODUCTS
          </h3>
          <ul className="space-y-2 text-[11px] text-slate-400">
            {PRODUCT_CATEGORIES.slice(0, 10).map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => {
                    navigate('/products', cat.slug);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#D4AF37] transition-colors text-left truncate max-w-[240px] block cursor-pointer"
                  title={cat.name}
                >
                  {cat.serialNumber < 10 ? `0${cat.serialNumber}` : cat.serialNumber}. {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact & Social */}
        <div className="lg:col-span-3">
          <h3 className="text-white font-bold text-xs uppercase tracking-widest border-b border-[#222] pb-2 mb-4 text-[#D4AF37]">
            CONTACT INFO
          </h3>
          <div className="space-y-3 text-xs">
            <div className="flex items-start gap-2.5 text-white font-semibold">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span className="text-white font-semibold">{COMPANY_INFO.location}</span>
            </div>

            <div className="space-y-1.5">
              {COMPANY_INFO.phones.map((p) => (
                <a 
                  key={p.raw} 
                  href={`tel:${p.raw}`} 
                  className="flex items-center gap-2 text-white hover:text-[#D4AF37] font-semibold transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span className="whitespace-nowrap text-white font-semibold">{p.number}</span>
                </a>
              ))}
            </div>

            <div className="space-y-1.5 pt-1">
              <a 
                href={`mailto:${COMPANY_INFO.emails.primary}`}
                className="flex items-center gap-2 text-white hover:text-[#D4AF37] font-semibold transition-colors whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span className="text-white font-semibold">{COMPANY_INFO.emails.primary}</span>
              </a>
              <a 
                href={`mailto:${COMPANY_INFO.emails.secondary}`}
                className="flex items-center gap-2 text-white hover:text-[#D4AF37] font-semibold transition-colors whitespace-nowrap text-xs"
              >
                <span className="w-3.5 h-3.5 shrink-0"></span>
                <span className="text-white font-semibold">{COMPANY_INFO.emails.secondary}</span>
              </a>
            </div>

            <div className="pt-2 border-t border-[#1E1E1E]">
              <span className="text-[11px] text-white font-bold uppercase tracking-wider block mb-2">FOLLOW US ON SOCIAL</span>
              <div className="flex flex-col gap-2">
                <a
                  href={COMPANY_INFO.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all text-xs font-semibold group"
                >
                  <Instagram className="w-4 h-4 text-pink-500 group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-white font-semibold">Instagram ({COMPANY_INFO.socials.instagram.handle})</span>
                </a>

                <a
                  href={COMPANY_INFO.socials.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all text-xs font-semibold group"
                >
                  <svg className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.35 22a6.33 6.33 0 0 0 6.33-6.33V9.07a8.16 8.16 0 0 0 4.71 1.48V7.1a4.85 4.85 0 0 1-.8-.41z"/>
                  </svg>
                  <span className="text-white font-semibold">TikTok ({COMPANY_INFO.socials.tiktok.handle})</span>
                </a>

                <a
                  href={COMPANY_INFO.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all text-xs font-semibold group"
                >
                  <svg className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-white font-semibold">Facebook Page</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal & Dynamic Copyright Bottom Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>
          {getCopyrightText()}
        </p>

        {/* Legal Links */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          {[
            { label: 'Privacy Policy', path: '/privacy-policy' as PageRoute },
            { label: 'Terms & Conditions', path: '/terms-and-conditions' as PageRoute },
            { label: 'Disclaimer', path: '/disclaimer' as PageRoute },
            { label: 'Cookie Policy', path: '/cookie-policy' as PageRoute }
          ].map((item) => (
            <button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};
