import React, { useState } from 'react';
import { PageRoute } from '../types';
import { 
  PRODUCT_CATEGORIES, 
  formatCategorySerial, 
  formatCategoryTitle,
  TOTAL_CATEGORY_COUNT 
} from '../data/productsData';
import { COMPANY_INFO, getWhatsAppUrl, UAE_EMIRATES, WHY_CHOOSE_US } from '../data/companyConfig';
import uaeHeroImg from '../assets/images/uae_construction_hero_1785868828213.jpg';
import { 
  Building2, 
  ShieldCheck, 
  Truck, 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  MapPin, 
  Grid, 
  Users, 
  Tag, 
  Compass, 
  ChevronRight,
  Factory,
  Home as HomeIcon,
  HardHat,
  Droplets,
  Wrench,
  Zap,
  Layers,
  Hammer,
  Box,
  Mountain,
  TreePine,
  Waves,
  FlaskConical,
  Paintbrush,
  LayoutGrid,
  Maximize2,
  Disc,
  Cog,
  Activity,
  ShieldAlert
} from 'lucide-react';

interface HomePageProps {
  navigate: (path: PageRoute, categorySlug?: string) => void;
  onRequestQuote: (productName?: string) => void;
  onSelectProduct?: (productName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  navigate,
  onRequestQuote
}) => {
  const [heroDirectoryTab, setHeroDirectoryTab] = useState<'main' | 'all'>('main');
  const whatsappUrl = getWhatsAppUrl('Hello AL TAYER Building Materials Trading, I would like to enquire about your building materials.');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />;
      case 'Box': return <Box className="w-5 h-5 text-[#D4AF37]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#D4AF37]" />;
      case 'Mountain': return <Mountain className="w-5 h-5 text-[#D4AF37]" />;
      case 'TreePine': return <TreePine className="w-5 h-5 text-[#D4AF37]" />;
      case 'Droplet': return <Droplets className="w-5 h-5 text-[#D4AF37]" />;
      case 'Waves': return <Waves className="w-5 h-5 text-[#D4AF37]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#D4AF37]" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5 text-[#D4AF37]" />;
      case 'Grid': return <Grid className="w-5 h-5 text-[#D4AF37]" />;
      case 'Paintbrush': return <Paintbrush className="w-5 h-5 text-[#D4AF37]" />;
      case 'LayoutGrid': return <LayoutGrid className="w-5 h-5 text-[#D4AF37]" />;
      case 'Maximize2': return <Maximize2 className="w-5 h-5 text-[#D4AF37]" />;
      case 'Disc': return <Disc className="w-5 h-5 text-[#D4AF37]" />;
      case 'Cog': return <Cog className="w-5 h-5 text-[#D4AF37]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#D4AF37]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-[#D4AF37]" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-[#D4AF37]" />;
      case 'Hammer': return <Hammer className="w-5 h-5 text-[#D4AF37]" />;
      default: return <HardHat className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  const displayedHeroCategories = heroDirectoryTab === 'main' 
    ? PRODUCT_CATEGORIES.slice(0, 6) 
    : PRODUCT_CATEGORIES;

  return (
    <div className="space-y-20 pb-16">
      {/* HERO SECTION - BOLD TYPOGRAPHY DESIGN THEME WITH UAE CREATIVE BACKGROUND */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a] border-b border-white/10">
        {/* Background Image with Dark Vignette & Gold Accent Glow Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-referrer scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url(${uaeHeroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Bold Typography Headline & Actions */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] text-[10px] font-bold tracking-[0.3em] uppercase inline-flex items-center gap-2 shadow-lg shadow-[#D4AF37]/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
                    ESTABLISHED {COMPANY_INFO.establishedYear} • {COMPANY_INFO.location}
                  </span>
                  <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider hidden sm:inline">
                    • 7 EMIRATES DIRECT LOGISTICS
                  </span>
                </div>

                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black leading-[0.88] tracking-tighter uppercase text-white drop-shadow-2xl">
                  QUALITY<br />
                  <span className="text-[#D4AF37] bg-gradient-to-r from-[#D4AF37] via-[#FFF2B2] to-[#D4AF37] bg-clip-text text-transparent">BUILDING</span><br />
                  MATERIALS
                </h1>

                <p className="text-base sm:text-lg text-slate-200 font-medium max-w-xl leading-relaxed">
                  <strong className="text-white">{COMPANY_INFO.name}</strong> is your trusted trading partner across all {TOTAL_CATEGORY_COUNT} product categories — from Rebar, Plywood, White Wood and Cement to Electrical, Plumbing, Solar Tanks, Chemicals and Safety Gear.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
                <button
                  onClick={() => onRequestQuote()}
                  className="px-8 py-4 bg-[#D4AF37] text-black font-display font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-[#B8860B] transition-all cursor-pointer shadow-xl shadow-[#D4AF37]/25 hover:scale-[1.02]"
                >
                  REQUEST RFQ QUOTE
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-[#25D366] text-slate-950 font-display font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-[#1eb753] transition-all cursor-pointer flex items-center gap-2.5 shadow-xl shadow-[#25D366]/20 hover:scale-[1.02]"
                  title={`Direct Trade Desk: ${COMPANY_INFO.whatsappDisplay}`}
                >
                  <MessageSquare className="w-4.5 h-4.5 fill-current" />
                  <span>WHATSAPP TRADE DESK</span>
                </a>

                <div className="flex flex-col pl-3 border-l border-white/20">
                  <span className="text-[10px] text-slate-300 uppercase tracking-widest font-bold">24/7 Hotline</span>
                  <a href={`tel:${COMPANY_INFO.primaryPhoneRaw}`} className="text-base font-bold text-[#D4AF37] hover:underline font-display tracking-wide whitespace-nowrap">
                    {COMPANY_INFO.primaryPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Category Directory & Stat Badges Box */}
            <div className="lg:col-span-5 relative space-y-6">
              <div className="bg-black/85 backdrop-blur-2xl border border-[#D4AF37]/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden group rounded-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl group-hover:bg-[#D4AF37]/20 transition-all pointer-events-none" />
                
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                  <h3 className="text-[#D4AF37] text-xs font-display font-black uppercase tracking-widest flex items-center gap-2">
                    <Grid className="w-4 h-4" />
                    CORE MATERIALS DIRECTORY
                  </h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setHeroDirectoryTab(heroDirectoryTab === 'main' ? 'all' : 'main')}
                      className="text-[10px] text-slate-300 hover:text-[#D4AF37] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 cursor-pointer"
                    >
                      {heroDirectoryTab === 'main' ? `View All ${TOTAL_CATEGORY_COUNT}` : 'Show Top 6'}
                    </button>
                  </div>
                </div>

                <ul className={`space-y-2.5 ${heroDirectoryTab === 'all' ? 'max-h-[320px] overflow-y-auto pr-1' : ''}`}>
                  {displayedHeroCategories.map((cat) => (
                    <li 
                      key={cat.id} 
                      onClick={() => navigate('/products', cat.slug)}
                      className="flex items-center justify-between group/item cursor-pointer border-b border-white/5 pb-2 transition-colors hover:border-[#D4AF37]/40"
                    >
                      <div className="flex items-center gap-3">
                        <img 
                          src={cat.image} 
                          alt={cat.name} 
                          referrerPolicy="no-referrer"
                          className="w-8 h-8 object-cover rounded border border-white/15 group-hover/item:border-[#D4AF37] transition-all shrink-0" 
                        />
                        <span className="text-xs font-bold text-slate-200 group-hover/item:text-[#D4AF37] transition-colors font-display tracking-wide uppercase truncate max-w-[240px]">
                          {formatCategorySerial(cat.serialNumber)}. {cat.name}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#D4AF37] group-hover/item:translate-x-1 transition-transform shrink-0" />
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/10 mt-3">
                  <button
                    onClick={() => navigate('/products', 'all')}
                    className="w-full py-3 border border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] font-display font-bold text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer text-center rounded-sm"
                  >
                    EXPLORE ALL {TOTAL_CATEGORY_COUNT} CATEGORIES →
                  </button>
                </div>
              </div>

              {/* Grid Metric Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/70 backdrop-blur-lg p-4 border border-white/10 hover:border-[#D4AF37]/40 transition-colors rounded-lg">
                  <span className="block text-3xl font-display font-black text-[#D4AF37]">100%</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-300 font-bold">SOURCE VERIFIED</span>
                </div>
                <div className="bg-black/70 backdrop-blur-lg p-4 border border-white/10 hover:border-[#D4AF37]/40 transition-colors rounded-lg">
                  <span className="block text-3xl font-display font-black text-[#D4AF37]">7 EMIRATES</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-300 font-bold">EXPRESS DELIVERY</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EXPRESS RFQ BUILDER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
        <div className="bg-[#111111] border border-[#D4AF37]/40 p-6 shadow-2xl shadow-black/80 space-y-4 rounded-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#D4AF37] inline-block animate-ping rounded-full"></span>
              <h3 className="font-display font-black text-white text-sm uppercase tracking-widest">
                EXPRESS MATERIAL RFQ & SOURCE FINDER
              </h3>
            </div>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              Instant Quotation Dispatch • Response in &lt; 30 Mins
            </span>
          </div>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const material = (form.elements.namedItem('material') as HTMLSelectElement)?.value || 'General Building Materials';
              const qty = (form.elements.namedItem('quantity') as HTMLInputElement)?.value || '';
              const emirate = (form.elements.namedItem('emirate') as HTMLSelectElement)?.value || 'United Arab Emirates';
              onRequestQuote(`${material} (${qty ? qty + ', ' : ''}Delivery to ${emirate})`);
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end"
          >
            <div>
              <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                SELECT MATERIAL (ALL {TOTAL_CATEGORY_COUNT} CATEGORIES)
              </label>
              <select 
                name="material"
                className="w-full bg-black border border-white/20 text-white text-xs font-bold p-3 focus:border-[#D4AF37] focus:outline-none rounded-lg"
              >
                {PRODUCT_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {formatCategoryTitle(cat)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                ESTIMATED QUANTITY / UNITS
              </label>
              <input 
                type="text" 
                name="quantity"
                placeholder="e.g. 50 Bundles / 100 Sheets"
                className="w-full bg-black border border-white/20 text-white text-xs p-3 placeholder-slate-600 focus:border-[#D4AF37] focus:outline-none font-medium rounded-lg"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                DELIVERY LOCATION
              </label>
              <select 
                name="emirate"
                defaultValue="United Arab Emirates"
                className="w-full bg-black border border-white/20 text-white text-xs font-bold p-3 focus:border-[#D4AF37] focus:outline-none rounded-lg"
              >
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="Dubai, United Arab Emirates">Dubai, United Arab Emirates</option>
                <option value="Abu Dhabi, United Arab Emirates">Abu Dhabi, United Arab Emirates</option>
                <option value="Sharjah, United Arab Emirates">Sharjah, United Arab Emirates</option>
                <option value="Ajman, United Arab Emirates">Ajman, United Arab Emirates</option>
                <option value="Ras Al Khaimah, United Arab Emirates">Ras Al Khaimah, United Arab Emirates</option>
                <option value="Fujairah, United Arab Emirates">Fujairah, United Arab Emirates</option>
                <option value="Umm Al Quwain, United Arab Emirates">Umm Al Quwain, United Arab Emirates</option>
                <option value="Al Ain, United Arab Emirates">Al Ain, United Arab Emirates</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3.5 bg-[#D4AF37] hover:bg-[#B8860B] text-black font-display font-black text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg shadow-[#D4AF37]/20 rounded-lg"
              >
                REQUEST INSTANT QUOTE →
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 p-4 sm:p-6 bg-[#121212] border border-white/10 shadow-2xl rounded-2xl">
          {[
            { label: 'WIDE PRODUCT RANGE', icon: <Grid className="w-5 h-5 text-[#D4AF37]" /> },
            { label: 'QUALITY SUPPLIES', icon: <ShieldCheck className="w-5 h-5 text-[#D4AF37]" /> },
            { label: 'CUSTOMER-FOCUSED SERVICE', icon: <Users className="w-5 h-5 text-[#D4AF37]" /> },
            { label: 'RELIABLE SUPPLY', icon: <Truck className="w-5 h-5 text-[#D4AF37]" /> },
            { label: 'COMPETITIVE PRICES', icon: <Tag className="w-5 h-5 text-[#D4AF37]" /> }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-3 space-y-2">
              <div className="p-2.5 bg-[#1A1A1A] border border-white/10 rounded-xl">
                {item.icon}
              </div>
              <span className="text-[11px] font-display font-bold text-slate-200 uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT CATEGORIES (ALL 19 UNIQUE CATEGORIES WITH EXACT SERIAL NUMBERING) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#222] pb-6">
          <div>
            <span className="text-[#D4AF37] font-extrabold text-xs tracking-widest uppercase block mb-1">
              PROVEN MATERIAL CATALOGUE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              ALL {TOTAL_CATEGORY_COUNT} PRODUCT CATEGORIES
            </h2>
          </div>
          <button
            onClick={() => navigate('/products', 'all')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] hover:text-amber-300 transition-colors uppercase tracking-wider cursor-pointer"
          >
            <span>Explore Complete Catalogue (All {TOTAL_CATEGORY_COUNT} Categories)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="group relative bg-[#121212] border border-[#262626] hover:border-[#D4AF37]/60 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="relative aspect-16/9 overflow-hidden bg-[#1A1A1A]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                <div className="absolute top-3 left-3 p-2 rounded-xl bg-[#0A0A0A]/90 border border-[#333] shadow-lg">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#0A0A0A]/90 border border-[#D4AF37]/30 text-[#D4AF37] text-[11px] font-mono font-bold">
                  #{formatCategorySerial(cat.serialNumber)}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {formatCategorySerial(cat.serialNumber)}. {cat.name}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>

                  {cat.subcategories && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cat.subcategories.slice(0, 3).map((sub, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-[#1A1A1A] border border-white/10 text-[10px] text-slate-300 font-medium">
                          {sub}
                        </span>
                      ))}
                      {cat.subcategories.length > 3 && (
                        <span className="px-2 py-0.5 rounded bg-[#1A1A1A] text-[10px] text-[#D4AF37] font-semibold">
                          +{cat.subcategories.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => navigate('/products', cat.slug)}
                    className="flex-1 py-2.5 px-3 rounded-lg bg-[#1E1E1E] hover:bg-[#2A2A2A] border border-[#333] text-slate-200 font-bold text-[11px] uppercase tracking-wider transition-colors text-center cursor-pointer"
                  >
                    VIEW PRODUCTS
                  </button>

                  <button
                    onClick={() => onRequestQuote(cat.name)}
                    className="flex-1 py-2.5 px-3 rounded-lg bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 border border-[#D4AF37]/40 text-[#D4AF37] font-bold text-[11px] uppercase tracking-wider transition-colors text-center cursor-pointer"
                  >
                    REQUEST QUOTE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT AL TAYER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-3xl bg-[#111111] border border-[#222] p-8 sm:p-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase">
              <span>TRADING COMPANY PROFILE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              ABOUT AL TAYER BUILDING MATERIALS TRADING L.L.C.
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              Established in <strong className="text-white">{COMPANY_INFO.establishedYear}</strong> in <strong className="text-white">{COMPANY_INFO.location}</strong>, <strong className="text-[#D4AF37]">{COMPANY_INFO.name}</strong> was founded to provide contractors, developers, and trade clients with a reliable supply of top-tier building and construction materials across the UAE.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#181818] border border-[#282828] space-y-1">
                <span className="text-xs font-bold text-[#D4AF37] uppercase">Head Office & Store</span>
                <p className="text-xs text-slate-300">{COMPANY_INFO.location}</p>
              </div>
              <div className="p-4 rounded-xl bg-[#181818] border border-[#282828] space-y-1">
                <span className="text-xs font-bold text-[#D4AF37] uppercase">Target Segments</span>
                <p className="text-xs text-slate-300">Residential, Commercial & Industrial</p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              We focus on delivering high-quality materials at competitive pricing with personal, client-centered trade service and prompt delivery.
            </p>

            <button
              onClick={() => navigate('/about-us')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#222] hover:bg-[#2D2D2D] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>READ FULL COMPANY PROFILE</span>
              <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-[#333] shadow-2xl aspect-4/3">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80" 
              alt="AL TAYER Materials Warehouse" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0A0A0A]/90 border border-[#333] backdrop-blur-md">
              <p className="text-xs text-slate-200 font-semibold">
                Serving Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah, Al Ain & Ras Al Khaimah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE AL TAYER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[#D4AF37] font-extrabold text-xs tracking-widest uppercase">
            OUR COMMITMENT TO CLIENTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            WHY CHOOSE AL TAYER
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Core pillars driving our trading operations and building long-term contractor trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((pillar, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-[#121212] border border-[#222] hover:border-[#D4AF37]/50 transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center border border-[#D4AF37]/30 text-[#D4AF37]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">{pillar.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-[#222] pb-4">
          <span className="text-[#D4AF37] font-extrabold text-xs tracking-widest uppercase">
            SECTOR VERSATILITY
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            WHO WE SERVE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Residential */}
          <div className="rounded-2xl bg-[#121212] border border-[#262626] overflow-hidden space-y-4 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#333] flex items-center justify-center text-[#D4AF37]">
                <HomeIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">RESIDENTIAL</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Supplying private villa builders, housing contractors, residential developments, and interior fit-out specialists across the UAE.
              </p>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 pt-4 border-t border-[#222]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Villa Formwork & Timber</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Plumbing & Electrical Accessories</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Gypsum & Partition Ceiling Systems</span>
              </li>
            </ul>
          </div>

          {/* Commercial */}
          <div className="rounded-2xl bg-[#121212] border border-[#262626] overflow-hidden space-y-4 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#333] flex items-center justify-center text-[#D4AF37]">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">COMMERCIAL</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Equipping office towers, retail malls, hotel complexes, and commercial spaces with structural rebar, MEP items, and safety equipment.
              </p>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 pt-4 border-t border-[#222]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Deformed Steel & Structural Sections</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Waterproofing Membranes & Adhesives</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Power Distribution & Cable Management</span>
              </li>
            </ul>
          </div>

          {/* Industrial */}
          <div className="rounded-2xl bg-[#121212] border border-[#262626] overflow-hidden space-y-4 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#333] flex items-center justify-center text-[#D4AF37]">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">INDUSTRIAL</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Bulk supply for industrial warehouses, manufacturing plants, infrastructure projects, and logistics hubs.
              </p>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 pt-4 border-t border-[#222]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Heavy Hollow Sections & GI Pipes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Concrete Anchor Bolts & Fasteners</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Certified PPE & Industrial Safety Gear</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* UAE COVERAGE */}
      <section className="bg-[#090909] border-y border-[#1F1F1F] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#D4AF37] font-extrabold text-xs tracking-widest uppercase">
              GEOGRAPHIC SUPPLY NETWORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              SERVING ACROSS THE UAE
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Headquartered in {COMPANY_INFO.location} with coordinated supply capabilities across all 7 Emirates.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {UAE_EMIRATES.map((emirate, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-[#121212] border border-[#222] hover:border-[#D4AF37]/50 transition-colors text-center space-y-2"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1A1A1A] flex items-center justify-center mx-auto text-[#D4AF37]">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-sm text-white">{emirate.name}</h3>
                <p className="text-[10px] text-slate-400">{emirate.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UAE & INTERNATIONAL BRANDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-[#111] border border-[#222] text-center space-y-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            BRAND POSITIONING
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#D4AF37]">
            UAE & INTERNATIONAL BRANDS
          </h3>
          <p className="text-xs text-slate-400 max-w-xl mx-auto leading-relaxed">
            We partner with reliable regional mills, manufacturers, and international building product lines to ensure compliant quality for all structural and non-structural material requirements.
          </p>
        </div>
      </section>

      {/* CONTACT PREVIEW WITH MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-[#222] pb-4">
          <span className="text-[#D4AF37] font-extrabold text-xs tracking-widest uppercase">
            FIND OUR OFFICE & STORE
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            LOCATION & CONTACT PREVIEW
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-1 p-6 rounded-2xl bg-[#121212] border border-[#262626] space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white border-b border-[#222] pb-3">
                {COMPANY_INFO.name}
              </h3>

              <div className="space-y-3 text-xs text-white">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Office Address:</span>
                    <span className="text-white font-semibold">{COMPANY_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Phone Lines:</span>
                    {COMPANY_INFO.phones.map((p) => (
                      <div key={p.raw}>
                        <a href={`tel:${p.raw}`} className="text-white font-semibold hover:text-[#D4AF37] transition-colors">
                          {p.number}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">WhatsApp Direct:</span>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-semibold hover:underline">
                      {COMPANY_INFO.whatsappDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#222] space-y-2">
              <a
                href={COMPANY_INFO.coordinates.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#333] transition-colors"
              >
                <Compass className="w-4 h-4 text-[#D4AF37]" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              </a>
            </div>
          </div>

          {/* Google Map Iframe */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-[#262626] min-h-[320px]">
            <iframe
              title="AL TAYER Building Materials Location Map"
              src={COMPANY_INFO.coordinates.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '340px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
