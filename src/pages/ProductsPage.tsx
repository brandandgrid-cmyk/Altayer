import React, { useState, useMemo } from 'react';
import { PageRoute } from '../types';
import { 
  PRODUCT_CATEGORIES, 
  PRODUCTS, 
  formatCategorySerial, 
  getCategoryBySlug,
  TOTAL_CATEGORY_COUNT 
} from '../data/productsData';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyConfig';
import { 
  Search, 
  Filter, 
  FileText, 
  MessageSquare, 
  Info, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  SlidersHorizontal,
  Grid3X3
} from 'lucide-react';

interface ProductsPageProps {
  navigate: (path: PageRoute, categorySlug?: string) => void;
  selectedCategory?: string;
  onSelectCategory?: (categorySlug: string) => void;
  onRequestQuote: (productName: string) => void;
  onSelectProduct: (productName: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  navigate,
  selectedCategory: initialCategory = 'all',
  onSelectCategory,
  onRequestQuote,
  onSelectProduct
}) => {
  const [internalCategory, setInternalCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'grouped'>('grid');

  // Sync with prop when changed from parent navigation
  React.useEffect(() => {
    setInternalCategory(initialCategory);
  }, [initialCategory]);

  const handleCategoryChange = (slug: string) => {
    setInternalCategory(slug);
    if (onSelectCategory) {
      onSelectCategory(slug);
    }
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = internalCategory === 'all' || p.categorySlug === internalCategory;
      const matchesSearch = 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.applications && p.applications.some(a => a.toLowerCase().includes(searchQuery.toLowerCase())));
      
      return matchesCategory && matchesSearch;
    });
  }, [internalCategory, searchQuery]);

  // Grouped products by category for structured catalogue view
  const groupedCategories = useMemo(() => {
    return PRODUCT_CATEGORIES.map(cat => {
      const catProducts = PRODUCTS.filter(p => p.categorySlug === cat.slug);
      const matchesSearch = searchQuery === '' 
        ? catProducts 
        : catProducts.filter(p => 
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            cat.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
      return {
        category: cat,
        products: matchesSearch
      };
    }).filter(group => {
      if (internalCategory !== 'all') {
        return group.category.slug === internalCategory;
      }
      return searchQuery === '' ? true : group.products.length > 0;
    });
  }, [internalCategory, searchQuery]);

  const activeCategoryObj = internalCategory !== 'all' ? getCategoryBySlug(internalCategory) : null;

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-[#0A0A0A] border-b border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-block px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-bold tracking-[0.3em] uppercase">
            <span>UAE BUILDING MATERIALS COMPLETE CATALOGUE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tighter uppercase">
            OUR <span className="text-[#D4AF37]">MATERIALS</span> CATALOGUE
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Explore our comprehensive inventory covering all {TOTAL_CATEGORY_COUNT} material categories across Steel & Reinforcement, Blocks & Masonry, Cement, Aggregates, Plywood & Timber, Plumbing, Water Tanks, Electrical, Chemicals, Tiles, Paints, Gypsum, Fiber Mesh, Drainage, Machinery, Generators, Safety PPE, Power Tools, and General Consumables across all 7 Emirates.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 rounded-2xl bg-[#121212] border border-[#262626]">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products by name, grade, specification, or category..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#181818] border border-[#333] text-slate-100 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all placeholder:text-slate-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white cursor-pointer px-2 py-1 bg-[#222] rounded"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Dropdown Switcher (Especially convenient on mobile / tablet) */}
          <div className="flex items-center gap-3">
            <div className="relative min-w-[200px] flex-1 sm:flex-initial">
              <select
                value={internalCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full appearance-none bg-[#181818] border border-[#333] text-slate-200 text-xs font-bold py-3 pl-3.5 pr-8 rounded-xl focus:outline-none focus:border-[#D4AF37] cursor-pointer"
              >
                <option value="all">All Categories (All {TOTAL_CATEGORY_COUNT})</option>
                {PRODUCT_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.slug}>
                    {formatCategorySerial(cat.serialNumber)}. {cat.name}
                  </option>
                ))}
              </select>
              <SlidersHorizontal className="w-4 h-4 text-[#D4AF37] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center bg-[#181818] border border-[#333] rounded-xl p-1 shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#D4AF37] text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Grid View"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('grouped')}
                className={`p-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'grouped'
                    ? 'bg-[#D4AF37] text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Category Grouped View"
              >
                <Layers className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Horizontal Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
              internalCategory === 'all'
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#9A7B2C] text-black shadow-lg shadow-[#D4AF37]/20 font-black'
                : 'bg-[#141414] text-slate-300 hover:bg-[#202020] border border-[#2B2B2B]'
            }`}
          >
            All Products ({PRODUCTS.length})
          </button>

          {PRODUCT_CATEGORIES.map((cat) => {
            const isActive = internalCategory === cat.slug;
            const count = PRODUCTS.filter(p => p.categorySlug === cat.slug).length;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#9A7B2C] text-black shadow-lg shadow-[#D4AF37]/20 font-black'
                    : 'bg-[#141414] text-slate-300 hover:bg-[#202020] border border-[#2B2B2B]'
                }`}
              >
                <span className={isActive ? 'text-black/80 font-mono text-[11px]' : 'text-[#D4AF37] font-mono text-[11px]'}>
                  {formatCategorySerial(cat.serialNumber)}.
                </span>
                <span>{cat.name}</span>
                <span className={isActive ? 'text-black/60 text-[10px]' : 'text-slate-500 text-[10px]'}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Header Banner (When single category is filtered) */}
        {activeCategoryObj && (
          <div className="p-6 rounded-2xl bg-[#141414] border border-[#D4AF37]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img 
                src={activeCategoryObj.image} 
                alt={activeCategoryObj.name} 
                className="w-16 h-16 rounded-xl object-cover border border-[#D4AF37]/40 shrink-0" 
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-mono font-bold">
                    CATEGORY #{formatCategorySerial(activeCategoryObj.serialNumber)} OF {TOTAL_CATEGORY_COUNT}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white">
                  {formatCategorySerial(activeCategoryObj.serialNumber)}. {activeCategoryObj.name}
                </h2>
                <p className="text-xs text-slate-400 max-w-2xl">
                  {activeCategoryObj.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => onRequestQuote(`Category ${formatCategorySerial(activeCategoryObj.serialNumber)}: ${activeCategoryObj.name}`)}
                className="px-4 py-2.5 rounded-xl bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#B8860B] transition-colors cursor-pointer"
              >
                REQUEST CATEGORY RFQ
              </button>
              <button
                onClick={() => handleCategoryChange('all')}
                className="px-3 py-2.5 rounded-xl bg-[#222] hover:bg-[#333] text-slate-300 text-xs font-semibold cursor-pointer"
              >
                View All
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Main Catalog View */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#121212] border border-[#262626] rounded-2xl p-8 space-y-4">
            <Info className="w-12 h-12 text-[#D4AF37] mx-auto opacity-80" />
            <h3 className="text-lg font-bold text-white">No items found matching your search</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Try clearing your search query or choosing a different product category tab. Alternatively, contact our trade desk directly for custom requests.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                handleCategoryChange('all');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#222] hover:bg-[#333] text-slate-200 text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'grouped' ? (
          /* Grouped / Structured Catalogue Section View */
          <div className="space-y-12">
            {groupedCategories.map(({ category, products }) => (
              <div key={category.id} className="space-y-6 bg-[#101010] border border-[#222] rounded-3xl p-6 sm:p-8">
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#222] pb-5">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center font-mono font-bold text-[#D4AF37] text-sm shrink-0">
                      {formatCategorySerial(category.serialNumber)}
                    </span>
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        {category.name}
                      </h2>
                      <p className="text-xs text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => onRequestQuote(`Category ${formatCategorySerial(category.serialNumber)}: ${category.name}`)}
                      className="px-3.5 py-2 rounded-lg bg-[#1E1E1E] hover:bg-[#282828] border border-[#333] text-[#D4AF37] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      RFQ Category
                    </button>
                  </div>
                </div>

                {/* Category Subcategories Tags */}
                {category.subcategories && category.subcategories.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
                    <span className="text-slate-500 font-semibold text-[11px] uppercase mr-1">Product Lines:</span>
                    {category.subcategories.map((sub, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-[#161616] border border-white/5 text-[11px] text-slate-300">
                        {sub}
                      </span>
                    ))}
                  </div>
                )}

                {/* Products in this category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                  {products.map((product) => {
                    const whatsappUrl = getWhatsAppUrl(`Hello ${COMPANY_INFO.name}, I would like to enquire about: ${product.name} (Category: ${formatCategorySerial(category.serialNumber)}. ${product.categoryName})`);

                    return (
                      <div
                        key={product.id}
                        className="bg-[#151515] border border-[#252525] hover:border-[#D4AF37]/60 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
                      >
                        {/* Image */}
                        <div className="relative aspect-16/10 overflow-hidden bg-[#1A1A1A]">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0A0A0A]/90 text-[#D4AF37] font-semibold text-[10px] uppercase border border-[#333] tracking-wider font-mono">
                            {product.itemCode}
                          </span>
                        </div>

                        {/* Details */}
                        <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                          <div className="space-y-2">
                            <h3 className="text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                              {product.name}
                            </h3>
                            <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                              {product.description}
                            </p>
                          </div>

                          {/* Applications preview */}
                          {product.applications && (
                            <div className="pt-2 border-t border-[#202020] text-[11px] text-slate-400 space-y-1">
                              <span className="text-slate-500 font-semibold block uppercase text-[9.5px]">Applications:</span>
                              <p className="line-clamp-1 italic text-slate-300">
                                {product.applications.join(' • ')}
                              </p>
                            </div>
                          )}

                          {/* Card Actions */}
                          <div className="pt-3 border-t border-[#202020] space-y-2">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => onSelectProduct(product.name)}
                                className="flex-1 py-2.5 px-3 rounded-lg bg-[#1D1D1D] hover:bg-[#282828] border border-[#333] text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                              >
                                <Info className="w-3.5 h-3.5 text-[#D4AF37]" />
                                <span>View Details</span>
                              </button>

                              <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/30 text-[#25D366] transition-colors cursor-pointer"
                                title="Enquire on WhatsApp"
                              >
                                <MessageSquare className="w-4 h-4 fill-current" />
                              </a>
                            </div>

                            <button
                              onClick={() => onRequestQuote(product.name)}
                              className="w-full py-2.5 px-3 rounded-lg bg-gradient-to-r from-[#D4AF37] via-[#E6CA65] to-[#9A7B2C] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:brightness-110"
                            >
                              <FileText className="w-4 h-4" />
                              <span>REQUEST QUOTE</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Standard Product Catalog Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const whatsappUrl = getWhatsAppUrl(`Hello ${COMPANY_INFO.name}, I would like to enquire about: ${product.name} (Category: ${formatCategorySerial(product.categorySerial)}. ${product.categoryName})`);

              return (
                <div
                  key={product.id}
                  className="bg-[#121212] border border-[#222] hover:border-[#D4AF37]/60 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
                >
                  {/* Image Container */}
                  <div className="relative aspect-16/10 overflow-hidden bg-[#1A1A1A]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0A0A0A]/90 text-[#D4AF37] font-semibold text-[10px] uppercase border border-[#333] tracking-wider font-mono">
                      #{formatCategorySerial(product.categorySerial)} • {product.categoryName}
                    </span>
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/80 text-slate-300 font-mono text-[9px] border border-white/10">
                      {product.itemCode}
                    </span>
                  </div>

                  {/* Details Content */}
                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                        {product.name}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                    </div>

                    {/* Applications preview */}
                    {product.applications && (
                      <div className="pt-2 border-t border-[#1F1F1F] text-[11px] text-slate-400 space-y-1">
                        <span className="text-slate-500 font-semibold block uppercase text-[9.5px]">Applications:</span>
                        <p className="line-clamp-1 italic text-slate-300">
                          {product.applications.join(' • ')}
                        </p>
                      </div>
                    )}

                    {/* Card Actions */}
                    <div className="pt-3 border-t border-[#1F1F1F] space-y-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onSelectProduct(product.name)}
                          className="flex-1 py-2.5 px-3 rounded-lg bg-[#1D1D1D] hover:bg-[#282828] border border-[#333] text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Info className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>View Details</span>
                        </button>

                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/30 text-[#25D366] transition-colors cursor-pointer"
                          title="Enquire on WhatsApp"
                        >
                          <MessageSquare className="w-4 h-4 fill-current" />
                        </a>
                      </div>

                      <button
                        onClick={() => onRequestQuote(product.name)}
                        className="w-full py-2.5 px-3 rounded-lg bg-gradient-to-r from-[#D4AF37] via-[#E6CA65] to-[#9A7B2C] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:brightness-110"
                      >
                        <FileText className="w-4 h-4" />
                        <span>REQUEST QUOTE</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* CUSTOM MATERIAL ADVISORY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-[#111111] border border-[#222] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-wider">CAN'T FIND A SPECIFIC GRADE OR SIZE?</span>
            <h3 className="text-xl font-bold text-white">Custom Specification Sourcing Available</h3>
            <p className="text-xs text-slate-400 max-w-xl">
              We source custom dimensions, specialized rebar grades, non-standard timber lengths, and bulk project requirements directly through our network across all 7 Emirates.
            </p>
          </div>
          <button
            onClick={() => onRequestQuote('Custom Specification Material')}
            className="px-6 py-3 rounded-xl bg-[#222] hover:bg-[#2D2D2D] text-white font-bold text-xs uppercase tracking-wider border border-[#333] shrink-0 cursor-pointer"
          >
            Submit Custom Specification
          </button>
        </div>
      </section>
    </div>
  );
};
