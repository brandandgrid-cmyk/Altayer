import React from 'react';
import { ProductItem } from '../types';
import { X, CheckCircle2, MessageSquare, FileText, Layers, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyConfig';
import { getCategoryIndex } from '../data/productsData';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestQuote
}) => {
  if (!product) return null;

  const categorySerial = getCategoryIndex(product.categorySlug);
  const whatsappUrl = getWhatsAppUrl(`Hello ${COMPANY_INFO.name}, I would like to enquire about: ${product.name} (Category: ${categorySerial}. ${product.categoryName})`);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#121212] border border-[#2D2D2D] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-[#222] bg-[#0A0A0A]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
              {categorySerial}. {product.categoryName}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Product Details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Product Image */}
            <div className="relative rounded-xl overflow-hidden bg-[#181818] border border-[#282828] aspect-4/3 group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-300 font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>{COMPANY_INFO.shortName} Quality Verified Material</span>
              </div>
            </div>

            {/* Product Overview */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight">
                {product.name}
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Quick Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onRequestQuote(product.name);
                  }}
                  className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E6CA65] to-[#9A7B2C] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>REQUEST QUOTE</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#1eb753] text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>WHATSAPP ENQUIRY</span>
                </a>
              </div>
            </div>
          </div>

          {/* Key Applications Section */}
          <div className="p-5 rounded-xl bg-[#181818] border border-[#262626] space-y-3">
            <h3 className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>RECOMMENDED APPLICATIONS</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {product.applications.map((app, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specifications */}
          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                TECHNICAL SPECIFICATIONS
              </h3>
              <div className="border border-[#262626] rounded-xl overflow-hidden divide-y divide-[#222] bg-[#161616]">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-1 sm:grid-cols-3 px-4 py-2.5 text-xs">
                    <span className="font-semibold text-slate-400">{key}</span>
                    <span className="sm:col-span-2 text-slate-200">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
