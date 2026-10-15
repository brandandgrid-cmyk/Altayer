import React, { useState, useEffect } from 'react';
import { PageRoute, ProductItem } from './types';
import { PRODUCTS } from './data/productsData';
import { COMPANY_INFO, getWhatsAppUrl } from './data/companyConfig';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ProductDetailModal } from './components/ProductDetailModal';

import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactUsPage } from './pages/ContactUsPage';

import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<PageRoute>(() => {
    const path = window.location.pathname as PageRoute;
    const allowedPaths: PageRoute[] = [
      '/',
      '/about-us',
      '/products',
      '/contact-us',
      '/privacy-policy',
      '/terms-and-conditions',
      '/disclaimer',
      '/cookie-policy'
    ];
    return allowedPaths.includes(path) ? path : '/';
  });

  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('category') || 'all';
  });

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<string>('');
  const [selectedProductDetail, setSelectedProductDetail] = useState<ProductItem | null>(null);

  // Sync routing state with window location history and query params
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname as PageRoute;
      const allowedPaths: PageRoute[] = [
        '/',
        '/about-us',
        '/products',
        '/contact-us',
        '/privacy-policy',
        '/terms-and-conditions',
        '/disclaimer',
        '/cookie-policy'
      ];
      setCurrentPath(allowedPaths.includes(path) ? path : '/');

      const params = new URLSearchParams(window.location.search);
      const cat = params.get('category');
      if (cat) {
        setSelectedCategorySlug(cat);
      } else {
        setSelectedCategorySlug('all');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: PageRoute, categorySlug?: string) => {
    if (categorySlug) {
      setSelectedCategorySlug(categorySlug);
    } else if (path !== '/products') {
      setSelectedCategorySlug('all');
    }

    setCurrentPath(path);
    const targetUrl = categorySlug && path === '/products' ? `${path}?category=${categorySlug}` : path;
    if (window.location.pathname !== path || (categorySlug && !window.location.search.includes(categorySlug))) {
      window.history.pushState({}, '', targetUrl);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (categorySlug: string) => {
    setSelectedCategorySlug(categorySlug);
    const targetUrl = categorySlug === 'all' ? '/products' : `/products?category=${categorySlug}`;
    window.history.pushState({}, '', targetUrl);
  };


  // Dynamic SEO Page Title update
  useEffect(() => {
    switch (currentPath) {
      case '/':
        document.title = `${COMPANY_INFO.name} | Quality Building Materials in UAE`;
        break;
      case '/about-us':
        document.title = `About Us | ${COMPANY_INFO.name}`;
        break;
      case '/products':
        document.title = `Products Catalogue | ${COMPANY_INFO.name}`;
        break;
      case '/contact-us':
        document.title = `Contact Us | ${COMPANY_INFO.name}`;
        break;
      case '/privacy-policy':
        document.title = `Privacy Policy | ${COMPANY_INFO.name}`;
        break;
      case '/terms-and-conditions':
        document.title = `Terms & Conditions | ${COMPANY_INFO.name}`;
        break;
      case '/disclaimer':
        document.title = `Disclaimer | ${COMPANY_INFO.name}`;
        break;
      case '/cookie-policy':
        document.title = `Cookie Policy | ${COMPANY_INFO.name}`;
        break;
      default:
        document.title = COMPANY_INFO.name;
    }
  }, [currentPath]);

  const handleOpenQuoteModal = (productName?: string) => {
    setQuoteProduct(productName || '');
    setIsQuoteModalOpen(true);
  };

  const handleSelectProduct = (productName: string) => {
    const found = PRODUCTS.find(p => p.name.toLowerCase() === productName.toLowerCase());
    if (found) {
      setSelectedProductDetail(found);
    } else {
      handleOpenQuoteModal(productName);
    }
  };

  const floatingWhatsAppUrl = getWhatsAppUrl('Hello AL TAYER Building Materials Trading, I would like to enquire about building materials.');

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-slate-100 flex flex-col font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Sticky Header */}
      <Header
        currentPath={currentPath}
        navigate={navigate}
        onRequestQuote={handleOpenQuoteModal}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPath === '/' && (
          <HomePage
            navigate={navigate}
            onRequestQuote={handleOpenQuoteModal}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentPath === '/about-us' && (
          <AboutUsPage
            navigate={navigate}
            onRequestQuote={() => handleOpenQuoteModal()}
          />
        )}

        {currentPath === '/products' && (
          <ProductsPage
            navigate={navigate}
            selectedCategory={selectedCategorySlug}
            onSelectCategory={handleSelectCategory}
            onRequestQuote={handleOpenQuoteModal}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentPath === '/contact-us' && (
          <ContactUsPage
            navigate={navigate}
          />
        )}

        {currentPath === '/privacy-policy' && (
          <PrivacyPolicyPage navigate={navigate} />
        )}

        {currentPath === '/terms-and-conditions' && (
          <TermsPage navigate={navigate} />
        )}

        {currentPath === '/disclaimer' && (
          <DisclaimerPage navigate={navigate} />
        )}

        {currentPath === '/cookie-policy' && (
          <CookiePolicyPage navigate={navigate} />
        )}
      </main>

      {/* Footer */}
      <Footer
        navigate={navigate}
        onRequestQuote={handleOpenQuoteModal}
      />

      {/* Global Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialProduct={quoteProduct}
      />

      {/* Inline Product Detail Modal */}
      <ProductDetailModal
        product={selectedProductDetail}
        onClose={() => setSelectedProductDetail(null)}
        onRequestQuote={(productName) => handleOpenQuoteModal(productName)}
      />

      {/* Floating Quick Trade Action Bar */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <a
          href={floatingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#1eb753] text-slate-950 px-4 py-3 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.5)] flex items-center gap-3 transition-all duration-300 hover:scale-105 group relative border-2 border-white/20 cursor-pointer"
          title={`Chat on WhatsApp (${COMPANY_INFO.whatsappDisplay})`}
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-950"></span>
          </span>

          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.754zm6.097-4.232l.397.235c1.432.85 3.082 1.302 4.764 1.303 5.21 0 9.447-4.237 9.45-9.448 0-2.522-.982-4.893-2.766-6.677-1.784-1.784-4.155-2.766-6.678-2.766-5.212 0-9.45 4.237-9.452 9.45-.001 1.78.471 3.513 1.365 5.033l.258.441-1.002 3.662 3.753-.982z"/>
          </svg>

          <span className="font-display font-black text-xs uppercase tracking-wider hidden sm:inline-block">
            WHATSAPP TRADE DESK
          </span>
        </a>
      </div>
    </div>
  );
}
