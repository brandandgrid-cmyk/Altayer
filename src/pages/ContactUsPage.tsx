import React, { useState } from 'react';
import { PageRoute, QuoteFormData } from '../types';
import { Phone, Mail, MapPin, MessageSquare, Instagram, Send, Compass, CheckCircle, AlertCircle, Globe } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyConfig';

interface ContactUsPageProps {
  navigate: (path: PageRoute, categorySlug?: string) => void;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    productRequired: '',
    quantity: '',
    deliveryLocation: 'Ajman',
    message: '',
    fileAttachment: null
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.productRequired.trim()) {
      newErrors.productRequired = 'Please specify the material required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleWhatsAppDirect = () => {
    const msg = `Hello ${COMPANY_INFO.name},\n\n*CONTACT ENQUIRY / QUOTE REQUEST*\n*Name:* ${formData.name || 'N/A'}\n*Company:* ${formData.companyName || 'N/A'}\n*Phone:* ${formData.phone || 'N/A'}\n*Email:* ${formData.email || 'N/A'}\n*Material Required:* ${formData.productRequired || 'N/A'}\n*Quantity:* ${formData.quantity || 'N/A'}\n*Location:* ${formData.deliveryLocation || 'N/A'}\n*Message:* ${formData.message || 'N/A'}`;
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  const whatsappGeneralUrl = getWhatsAppUrl('Hello AL TAYER Building Materials Trading, I would like to enquire about your products.');

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-[#0A0A0A] border-b border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-bold tracking-[0.3em] uppercase">
            <span>GET IN TOUCH WITH {COMPANY_INFO.shortName}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tighter uppercase">
            CONTACT <span className="text-[#D4AF37]">OUR TRADE DESK</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Reach out to our trade team in {COMPANY_INFO.location} for material quotations, pricing, order status, or direct WhatsApp support across all UAE Emirates.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121212] border border-[#262626] space-y-6 shadow-xl">
              <h2 className="text-xl font-extrabold text-white border-b border-[#222] pb-4">
                {COMPANY_INFO.name}
              </h2>

              <div className="space-y-5 text-xs text-slate-300">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#1A1A1A] border border-[#333] flex items-center justify-center text-[#D4AF37] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white text-sm block mb-0.5">Location & Office:</strong>
                    <p className="text-white font-semibold">{COMPANY_INFO.location}</p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#1A1A1A] border border-[#333] flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white text-sm block mb-1">Phone Contact Lines:</strong>
                    <div className="space-y-1 font-semibold text-white">
                      {COMPANY_INFO.phones.map((p) => (
                        <a key={p.raw} href={`tel:${p.raw}`} className="block hover:text-[#D4AF37] transition-colors text-white font-semibold">
                          {p.number} ({p.label})
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#1A1A1A] border border-[#333] flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white text-sm block mb-0.5">Email Enquiries:</strong>
                    <a href={`mailto:${COMPANY_INFO.emails.primary}`} className="text-white hover:text-[#D4AF37] transition-colors whitespace-nowrap block font-semibold">
                      {COMPANY_INFO.emails.primary}
                    </a>
                    <a href={`mailto:${COMPANY_INFO.emails.secondary}`} className="text-white hover:text-[#D4AF37] transition-colors whitespace-nowrap block font-semibold mt-0.5">
                      {COMPANY_INFO.emails.secondary}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#1A1A1A] border border-[#333] flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white text-sm block mb-0.5">Official Website:</strong>
                    <span className="text-white font-semibold">www.altayerbuildingmaterialstrd.com</span>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="space-y-3 pt-3 border-t border-[#1F1F1F]">
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block">Official Social Media</span>

                  {/* Instagram */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#1A1A1A] border border-[#333] flex items-center justify-center text-pink-500 shrink-0">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white text-xs block">Instagram:</strong>
                      <a 
                        href={COMPANY_INFO.socials.instagram.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white font-semibold text-xs hover:text-pink-400 hover:underline"
                      >
                        {COMPANY_INFO.socials.instagram.handle}
                      </a>
                    </div>
                  </div>

                  {/* TikTok */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#1A1A1A] border border-[#333] flex items-center justify-center text-cyan-400 shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.35 22a6.33 6.33 0 0 0 6.33-6.33V9.07a8.16 8.16 0 0 0 4.71 1.48V7.1a4.85 4.85 0 0 1-.8-.41z"/>
                      </svg>
                    </div>
                    <div>
                      <strong className="text-white text-xs block">TikTok:</strong>
                      <a 
                        href={COMPANY_INFO.socials.tiktok.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white font-semibold text-xs hover:text-cyan-400 hover:underline"
                      >
                        {COMPANY_INFO.socials.tiktok.handle}
                      </a>
                    </div>
                  </div>

                  {/* Facebook */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#1A1A1A] border border-[#333] flex items-center justify-center text-blue-500 shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div>
                      <strong className="text-white text-xs block">Facebook:</strong>
                      <a 
                        href={COMPANY_INFO.socials.facebook.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white font-semibold text-xs hover:text-blue-400 hover:underline"
                      >
                        {COMPANY_INFO.socials.facebook.name}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Quick Action Buttons */}
              <div className="pt-4 border-t border-[#222] space-y-2.5">
                <a
                  href={whatsappGeneralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1eb753] text-slate-950 font-display font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>WHATSAPP US ({COMPANY_INFO.whatsappDisplay})</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                  className="w-full py-3 px-4 rounded-xl bg-[#1E1E1E] hover:bg-[#2A2A2A] text-slate-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#333] transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>DIRECT CALL HOTLINE</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quote Request Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#121212] border border-[#262626] shadow-xl space-y-6">
            <div>
              <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-wider">ONLINE ENQUIRY FORM</span>
              <h2 className="text-2xl font-extrabold text-white mt-1">
                REQUEST A MATERIAL QUOTE
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Fill out your required building materials and site delivery location. Our trade team will revert with exact pricing.
              </p>
            </div>

            {isSuccess ? (
              <div className="p-8 text-center space-y-4 bg-[#181818] rounded-xl border border-[#333]">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Quotation Request Received</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your enquiry for <strong className="text-[#D4AF37]">{formData.productRequired}</strong> has been logged.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase flex items-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Send on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-5 py-2.5 rounded-xl bg-[#252525] hover:bg-[#333] text-white font-bold text-xs uppercase cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rashid Al Mansoori"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border text-slate-100 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.name ? 'border-red-500 focus:ring-red-500' : 'border-[#333] focus:border-[#D4AF37] focus:ring-[#D4AF37]/20'
                      }`}
                    />
                    {errors.name && <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. UAE General Contracting"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#333] text-slate-100 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 123 4567"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border text-slate-100 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-[#333] focus:border-[#D4AF37] focus:ring-[#D4AF37]/20'
                      }`}
                    />
                    {errors.phone && <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="info@company.ae"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border text-slate-100 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.email ? 'border-red-500 focus:ring-red-500' : 'border-[#333] focus:border-[#D4AF37] focus:ring-[#D4AF37]/20'
                      }`}
                    />
                    {errors.email && <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Product / Material Required <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.productRequired}
                      onChange={(e) => setFormData({ ...formData, productRequired: e.target.value })}
                      placeholder="e.g. Film Faced Plywood 18mm / Rebar 16mm"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border text-slate-100 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.productRequired ? 'border-red-500 focus:ring-red-500' : 'border-[#333] focus:border-[#D4AF37] focus:ring-[#D4AF37]/20'
                      }`}
                    />
                    {errors.productRequired && <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.productRequired}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Quantity
                    </label>
                    <input
                      type="text"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      placeholder="e.g. 500 Sheets"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#333] text-slate-100 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Delivery Emirate
                  </label>
                  <select
                    value={formData.deliveryLocation}
                    onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#333] text-slate-100 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                  >
                    <option value="Ajman">Ajman</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Abu Dhabi">Abu Dhabi</option>
                    <option value="Sharjah">Sharjah</option>
                    <option value="Fujairah">Fujairah</option>
                    <option value="Al Ain">Al Ain</option>
                    <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                    <option value="Umm Al Quwain">Umm Al Quwain</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Additional Message or Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter site delivery address or special requirements..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#333] text-slate-100 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1eb753] text-slate-950 font-display font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>DISPATCH VIA WHATSAPP</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E6CA65] to-[#9A7B2C] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SUBMIT RFQ INQUIRY</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* EMBEDDED GOOGLE MAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white">LOCATION MAP — {COMPANY_INFO.location.toUpperCase()}</h2>
            <p className="text-xs text-slate-400">Coordinates: {COMPANY_INFO.coordinates.lat}, {COMPANY_INFO.coordinates.lng}</p>
          </div>
          <a
            href={COMPANY_INFO.coordinates.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#1E1E1E] hover:bg-[#282828] text-[#D4AF37] font-bold text-xs uppercase border border-[#333] transition-colors flex items-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>GET DIRECTIONS ON GOOGLE MAPS</span>
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden border border-[#262626] h-[400px] shadow-2xl">
          <iframe
            title="AL TAYER Building Materials Google Map"
            src={COMPANY_INFO.coordinates.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
};
