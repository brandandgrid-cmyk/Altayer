import React, { useState, useEffect } from 'react';
import { QuoteFormData } from '../types';
import { X, CheckCircle, AlertCircle, Upload, Send, MessageSquare, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyConfig';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct = ''
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    productRequired: initialProduct,
    quantity: '',
    deliveryLocation: 'Ajman',
    message: '',
    fileAttachment: null
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({ ...prev, productRequired: initialProduct }));
    }
  }, [initialProduct]);

  if (!isOpen) return null;

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
      newErrors.productRequired = 'Please specify the product or material required';
    }

    if (formData.fileAttachment) {
      const maxMB = 10;
      if (formData.fileAttachment.size > maxMB * 1024 * 1024) {
        newErrors.fileAttachment = 'File size must be under 10MB';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate backend submission process
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, fileAttachment: file }));
      if (errors.fileAttachment) {
        setErrors(prev => ({ ...prev, fileAttachment: '' }));
      }
    }
  };

  const handleWhatsAppDirect = () => {
    const msg = `Hello ${COMPANY_INFO.name},\n\n*NEW QUOTE REQUEST*\n*Name:* ${formData.name || 'N/A'}\n*Company:* ${formData.companyName || 'N/A'}\n*Phone:* ${formData.phone || 'N/A'}\n*Email:* ${formData.email || 'N/A'}\n*Product:* ${formData.productRequired || 'N/A'}\n*Quantity:* ${formData.quantity || 'N/A'}\n*Delivery Location:* ${formData.deliveryLocation || 'N/A'}\n*Notes:* ${formData.message || 'N/A'}`;
    const url = getWhatsAppUrl(msg);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#121212] border border-[#2D2D2D] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#222] bg-[#0A0A0A]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center border border-[#D4AF37]/30">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-xl font-display font-black text-white tracking-tight uppercase">REQUEST A QUOTE</h3>
              <p className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest">{COMPANY_INFO.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-white">Quote Request Prepared!</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Your enquiry for <strong className="text-[#D4AF37]">{formData.productRequired}</strong> has been logged.
              </p>
              
              <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#333] text-left text-xs space-y-2 max-w-md mx-auto text-slate-300">
                <div><span className="text-slate-500 font-semibold">Delivery Location:</span> {formData.deliveryLocation}</div>
                <div><span className="text-slate-500 font-semibold">Contact Email:</span> {formData.email}</div>
                <div><span className="text-slate-500 font-semibold">Phone:</span> {formData.phone}</div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send Directly via WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#222] hover:bg-[#333] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Mohammed Al Hashmi"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border text-slate-100 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.name ? 'border-red-500 focus:ring-red-500' : 'border-[#333] focus:border-[#D4AF37] focus:ring-[#D4AF37]/20'
                    }`}
                  />
                  {errors.name && <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Al Jurf Contracting Co."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#333] text-slate-100 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone / Mobile <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 000 0000"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border text-slate-100 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-[#333] focus:border-[#D4AF37] focus:ring-[#D4AF37]/20'
                    }`}
                  />
                  {errors.phone && <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.ae"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border text-slate-100 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-[#333] focus:border-[#D4AF37] focus:ring-[#D4AF37]/20'
                    }`}
                  />
                  {errors.email && <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Product Required */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Product / Material Required <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.productRequired}
                    onChange={(e) => setFormData({ ...formData, productRequired: e.target.value })}
                    placeholder="e.g. Deformed Steel Rebar 12mm / Film Faced Plywood"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border text-slate-100 text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.productRequired ? 'border-red-500 focus:ring-red-500' : 'border-[#333] focus:border-[#D4AF37] focus:ring-[#D4AF37]/20'
                    }`}
                  />
                  {errors.productRequired && <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.productRequired}</p>}
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Quantity / Volume
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 10 Tons / 500 Sheets"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#333] text-slate-100 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                  />
                </div>
              </div>

              {/* Delivery Location */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Delivery Location (Emirate)
                </label>
                <select
                  value={formData.deliveryLocation}
                  onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#333] text-slate-100 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                >
                  <option value="Ajman">Ajman (Al Alia & Surrounds)</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Abu Dhabi">Abu Dhabi</option>
                  <option value="Sharjah">Sharjah</option>
                  <option value="Fujairah">Fujairah</option>
                  <option value="Al Ain">Al Ain</option>
                  <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                  <option value="Umm Al Quwain">Umm Al Quwain</option>
                </select>
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Project Details / Specifications / Special Instructions
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide any specific dimensions, grades, delivery timelines, or site access instructions..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#181818] border border-[#333] text-slate-100 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all resize-none"
                />
              </div>

              {/* Attachment */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Attach Specification or BOQ File (PDF / Images / Docs, max 10MB)
                </label>
                <div className="relative flex items-center justify-center p-3 border-2 border-dashed border-[#333] hover:border-[#D4AF37]/50 rounded-lg bg-[#151515] transition-colors group cursor-pointer">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="flex items-center gap-2 text-xs text-slate-400 group-hover:text-slate-200">
                    <Upload className="w-4 h-4 text-[#D4AF37]" />
                    <span>
                      {formData.fileAttachment 
                        ? `Attached: ${formData.fileAttachment.name}` 
                        : 'Click or drag BOQ / Drawing file to attach'}
                    </span>
                  </div>
                </div>
                {errors.fileAttachment && <p className="text-red-400 text-[11px] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.fileAttachment}</p>}
              </div>

              {/* Form Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-[#222]">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-transparent hover:bg-white/5 text-slate-400 hover:text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1eb753] text-slate-950 font-display font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>DISPATCH VIA WHATSAPP</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E6CA65] to-[#9A7B2C] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SUBMIT QUOTE REQUEST</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
