import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { Logo } from './Logo';
import { Phone, MessageSquare, Menu, X, FileText, ChevronRight, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyConfig';

interface HeaderProps {
  currentPath: PageRoute;
  navigate: (path: PageRoute, categorySlug?: string) => void;
  onRequestQuote: (productName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  navigate,
  onRequestQuote
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; path: PageRoute }[] = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT US', path: '/about-us' },
    { label: 'PRODUCTS', path: '/products' },
    { label: 'CONTACT US', path: '/contact-us' }
  ];

  const handleNavClick = (path: PageRoute) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = getWhatsAppUrl('Hello AL TAYER Building Materials Trading, I would like to enquire about your products.');

  return (
    <>
      {/* Top Banner Bar - Clean Responsive Layout across 320px to 4K */}
      <div className="bg-[#050505] border-b border-[#1E1E1E] text-slate-300 text-xs py-2 px-3 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Location & Status Badge */}
          <div className="flex items-center gap-2 text-[11px] sm:text-xs shrink-0">
            <span className="flex items-center gap-1.5 text-white font-semibold whitespace-nowrap">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37] hidden xs:inline" />
              <span>{COMPANY_INFO.location}</span>
            </span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="hidden lg:inline text-slate-300 font-medium text-[11px]">Serving Residential, Commercial & Industrial Projects Across All 7 Emirates</span>
          </div>

          {/* Contact Details & Direct Hotline */}
          <div className="flex items-center gap-2.5 sm:gap-4 ml-auto text-[11px] sm:text-xs">
            {/* Direct Email (Desktop & Tablet) */}
            <a 
              href={`mailto:${COMPANY_INFO.emails.primary}`}
              className="hidden sm:flex items-center gap-1.5 text-white hover:text-[#D4AF37] transition-colors whitespace-nowrap font-semibold"
              title={`Email ${COMPANY_INFO.shortName}`}
            >
              <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span className="font-semibold text-white">{COMPANY_INFO.emails.primary}</span>
            </a>

            {/* Social Icons (Desktop) */}
            <div className="hidden xl:flex items-center gap-2 border-l border-[#222] pl-3">
              <a 
                href={COMPANY_INFO.socials.instagram.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="text-slate-300 hover:text-pink-500 transition-colors p-1"
                title="Follow on Instagram"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a 
                href={COMPANY_INFO.socials.tiktok.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="TikTok"
                className="text-slate-300 hover:text-cyan-400 transition-colors p-1"
                title="Follow on TikTok"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.35 22a6.33 6.33 0 0 0 6.33-6.33V9.07a8.16 8.16 0 0 0 4.71 1.48V7.1a4.85 4.85 0 0 1-.8-.41z"/>
                </svg>
              </a>

              <a 
                href={COMPANY_INFO.socials.facebook.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="text-slate-300 hover:text-blue-500 transition-colors p-1"
                title="Follow on Facebook"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>

            {/* Primary Phone Number - Strictly Protected with whitespace-nowrap */}
            <a 
              href={`tel:${COMPANY_INFO.primaryPhoneRaw}`} 
              className="flex items-center gap-1.5 text-white hover:text-[#D4AF37] transition-colors whitespace-nowrap font-semibold"
              title="Call Primary Hotline"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span className="tracking-tight font-semibold text-white">{COMPANY_INFO.primaryPhone}</span>
            </a>

            {/* WhatsApp Direct Header Link */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-bold whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5 shrink-0" />
              <span className="font-bold">WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#262626] shadow-xl py-3' 
          : 'bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#1A1A1A] py-3.5 sm:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('/')}
            className="text-left focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 rounded-lg p-0.5 transition-transform active:scale-95 shrink-0"
            aria-label="AL TAYER Building Materials Home"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-display font-bold tracking-widest uppercase">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`transition-all pb-1 cursor-pointer ${
                    isActive 
                      ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]' 
                      : 'text-slate-300 hover:text-[#D4AF37]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3 shrink-0">
            <button
              onClick={() => onRequestQuote()}
              className="px-5 py-2.5 border border-[#D4AF37] text-[#D4AF37] text-xs font-black uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer rounded-sm"
            >
              REQUEST QUOTE
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#25D366] hover:bg-[#1eb753] text-slate-950 font-display font-black text-xs uppercase tracking-wider flex items-center gap-2 rounded-full transition-all cursor-pointer shadow-lg shadow-[#25D366]/25 hover:scale-105 ring-2 ring-[#25D366]/40"
              title={`Chat on WhatsApp (${COMPANY_INFO.whatsappDisplay})`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-950"></span>
              </span>
              <MessageSquare className="w-4 h-4 fill-current shrink-0" />
              <span className="whitespace-nowrap">WHATSAPP US</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-200 hover:text-[#D4AF37] hover:bg-[#1A1A1A] border border-[#2A2A2A] transition-colors focus:outline-none shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0F0F0F] border-b border-[#262626] px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold tracking-wider text-left transition-colors ${
                      isActive 
                        ? 'bg-[#D4AF37]/15 text-[#D4AF37] border-l-4 border-[#D4AF37]' 
                        : 'text-slate-200 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#D4AF37]' : 'text-slate-600'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#222] space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#9A7B2C] text-black font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 active:scale-98 transition-all"
              >
                <FileText className="w-4 h-4 shrink-0" />
                <span>REQUEST A QUOTE</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg bg-[#25D366] hover:bg-[#1eb753] text-slate-950 font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 active:scale-98 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-current shrink-0" />
                <span>WHATSAPP TRADE DESK</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.emails.primary}`}
                className="w-full py-2.5 px-4 rounded-lg bg-[#1E1E1E] border border-[#333] text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#282828] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="truncate text-white font-semibold">{COMPANY_INFO.emails.primary}</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                className="w-full py-2.5 px-4 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#282828] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="whitespace-nowrap text-white font-semibold">CALL NOW ({COMPANY_INFO.primaryPhone})</span>
              </a>

              {/* Social Channels in Mobile Menu */}
              <div className="pt-2 flex items-center justify-center gap-2">
                <a
                  href={COMPANY_INFO.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-2 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white font-semibold hover:text-pink-400 text-xs flex items-center justify-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5 text-pink-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="font-semibold text-white">Instagram</span>
                </a>
                <a
                  href={COMPANY_INFO.socials.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-2 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white font-semibold hover:text-cyan-400 text-xs flex items-center justify-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5 text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.35 22a6.33 6.33 0 0 0 6.33-6.33V9.07a8.16 8.16 0 0 0 4.71 1.48V7.1a4.85 4.85 0 0 1-.8-.41z"/>
                  </svg>
                  <span className="font-semibold text-white">TikTok</span>
                </a>
                <a
                  href={COMPANY_INFO.socials.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-2 rounded-lg bg-[#181818] border border-[#2A2A2A] text-white font-semibold hover:text-blue-400 text-xs flex items-center justify-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5 text-blue-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="font-semibold text-white">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
