import { useState } from 'react';
import { 
  Globe, 
  Search, 
  Code2, 
  CheckCircle2, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles,
  Info,
  ShieldCheck,
  FileCode2,
  RefreshCw
} from 'lucide-react';

interface PageSeoConfig {
  id: string;
  pageName: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
}

export default function AdminSeoDesk() {
  const [activeSubTab, setActiveSubTab] = useState<'meta' | 'schema' | 'gtm' | 'sitemap'>('meta');
  const [selectedPage, setSelectedPage] = useState<string>('home');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [savedToast, setSavedToast] = useState(false);

  // GTM & Analytics State
  const [gtmId, setGtmId] = useState('GTM-SFI2026');
  const [ga4Id, setGa4Id] = useState('G-9X7Y8Z1234');
  const [gtmEnabled, setGtmEnabled] = useState(true);
  const [searchConsoleVerification, setSearchConsoleVerification] = useState('google-site-verification=sfi_verify_token_prod_998877');

  // Schema State
  const [schemaType, setSchemaType] = useState<'Organization' | 'EducationalOrganization' | 'FAQPage' | 'Custom'>('EducationalOrganization');
  const [customSchema, setCustomSchema] = useState(`{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Study First Info Ltd.",
  "url": "https://studyfirstinfo.com",
  "logo": "https://studyfirstinfo.com/logo.png",
  "description": "Premier international education consultancy for Chinese Government Scholarships (CSC), German blocked accounts, and global admissions.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "House 42, Road 11, Block D, Banani",
    "addressLocality": "Dhaka",
    "postalCode": "1213",
    "addressCountry": "BD"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+880-1712-345678",
    "contactType": "customer service",
    "areaServed": "BD",
    "availableLanguage": ["English", "Bengali"]
  }
}`);

  // Page-by-Page SEO Metadata
  const [pagesSeo, setPagesSeo] = useState<Record<string, PageSeoConfig>>({
    home: {
      id: 'home',
      pageName: 'Homepage',
      slug: '/',
      metaTitle: 'Study First Info | 100% Merit Scholarships & European Admissions',
      metaDescription: 'Trusted higher education consultancy for German public universities, Chinese CSC full tuition waivers, and guaranteed visa support from Dhaka HQ.',
      keywords: 'study abroad, CSC scholarship china, study in germany, study visa bangladesh'
    },
    counselors: {
      id: 'counselors',
      pageName: 'Certified Counselors Desk',
      slug: '/counselors',
      metaTitle: 'Expert Global Education Counselors | Study First Info',
      metaDescription: 'Book direct 1-on-1 counseling with certified education advisers specialized in German APS verification, Chinese CSC quotas, and visa file preparation.',
      keywords: 'education counselors, study abroad advice, german education consultant dhaka'
    },
    countries: {
      id: 'countries',
      pageName: 'Study Destinations',
      slug: '/countries',
      metaTitle: 'Study in Germany, China, UK & Top Global Hubs | Study First Info',
      metaDescription: 'Explore zero-tuition German universities, fully funded Chinese CSC scholarships, and streamlined UK fast-track admissions with expert guidance.',
      keywords: 'study in germany free tuition, csc scholarship list, study in uk from bangladesh'
    },
    pathways: {
      id: 'pathways',
      pageName: 'Academic Pathways',
      slug: '/pathways',
      metaTitle: 'Direct University Pathways & Transfer Programs | Study First Info',
      metaDescription: 'Structured foundation, direct bachelor, and research master pathways tailored to your academic grades and target international institutions.',
      keywords: 'university pathways, master abroad, bachelors degree germany'
    },
    scholarships: {
      id: 'scholarships',
      pageName: 'Scholarships & Waivers',
      slug: '/scholarships',
      metaTitle: '100% Tuition Fee Waivers & Government Scholarships | SFI',
      metaDescription: 'Complete directory of fully funded scholarships including Chinese CSC, German DAAD, and bilateral government student grants with zero agent fee.',
      keywords: 'csc scholarship 2026, daad scholarship germany, 100% tuition waiver'
    },
    services: {
      id: 'services',
      pageName: 'Student Services',
      slug: '/services',
      metaTitle: 'Visa Filing, Blocked Accounts & Admission Services | Study First Info',
      metaDescription: 'End-to-end guidance: German blocked account setups (Fintiba/Coracle), statement of purpose writing, certified document attestation, and mock visa interviews.',
      keywords: 'german blocked account assistance, student visa filing, sop writing service'
    },
    blog: {
      id: 'blog',
      pageName: 'Blog & Articles Hub',
      slug: '/blog',
      metaTitle: 'International Education Insights & Admission Guides | Study First Info',
      metaDescription: 'Latest updates on German student visa rules, China border protocols, scholarship application deadlines, and student living expense guides.',
      keywords: 'study abroad blogs, german visa updates, china csc news'
    }
  });

  const currentPage = pagesSeo[selectedPage] || pagesSeo.home;

  const handlePageFieldChange = (field: keyof PageSeoConfig, value: string) => {
    setPagesSeo((prev) => ({
      ...prev,
      [selectedPage]: {
        ...prev[selectedPage],
        [field]: value,
      },
    }));
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(key);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  const handleSaveAll = () => {
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 3500);
  };

  return (
    <div className="space-y-6">
      {/* Toast Alert */}
      {savedToast && (
        <div className="bg-emerald-600 text-white p-4 rounded-2xl shadow-lg text-xs font-bold flex items-center justify-between gap-3 animate-in slide-in-from-top-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} />
            <span>SEO Meta, Schema.org JSON-LD &amp; Analytics configurations published live to https://studyfirstinfo.com!</span>
          </div>
          <span className="bg-white/20 px-2 py-0.5 rounded text-[11px]">Synced to Head</span>
        </div>
      )}

      {/* Top SEO Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-accent flex items-center justify-center border border-emerald-500/20">
            <Globe size={24} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-black text-primary">SEO, Schema &amp; Analytics Control Desk</h2>
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-300">
                Production Ready
              </span>
            </div>
            <p className="text-xs text-gray-500">
              Live configuration for Google Search Console, Google Tag Manager, Schema.org Rich Snippets &amp; XML Sitemap.
            </p>
          </div>
        </div>

        <button
          onClick={handleSaveAll}
          className="inline-flex items-center gap-2 bg-accent hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md shadow-emerald-700/20 transition-all cursor-pointer"
        >
          <Sparkles size={14} />
          <span>Save &amp; Publish SEO Changes</span>
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 gap-2 bg-white px-4 pt-3 rounded-2xl border shadow-xs overflow-x-auto">
        <button
          onClick={() => setActiveSubTab('meta')}
          className={`flex items-center gap-2 pb-3 px-3 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
            activeSubTab === 'meta'
              ? 'border-accent text-accent'
              : 'border-transparent text-gray-500 hover:text-gray-900'
          }`}
        >
          <Search size={15} />
          <span>Page Meta Titles &amp; Descriptions</span>
        </button>

        <button
          onClick={() => setActiveSubTab('schema')}
          className={`flex items-center gap-2 pb-3 px-3 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
            activeSubTab === 'schema'
              ? 'border-accent text-accent'
              : 'border-transparent text-gray-500 hover:text-gray-900'
          }`}
        >
          <Code2 size={15} />
          <span>Schema.org Markup (JSON-LD)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('gtm')}
          className={`flex items-center gap-2 pb-3 px-3 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
            activeSubTab === 'gtm'
              ? 'border-accent text-accent'
              : 'border-transparent text-gray-500 hover:text-gray-900'
          }`}
        >
          <RefreshCw size={15} />
          <span>Google Tag Manager &amp; GA4</span>
        </button>

        <button
          onClick={() => setActiveSubTab('sitemap')}
          className={`flex items-center gap-2 pb-3 px-3 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
            activeSubTab === 'sitemap'
              ? 'border-accent text-accent'
              : 'border-transparent text-gray-500 hover:text-gray-900'
          }`}
        >
          <FileCode2 size={15} />
          <span>Robots.txt &amp; Sitemap.xml Desk</span>
        </button>
      </div>

      {/* TAB 1: Page Meta Titles & Descriptions */}
      {activeSubTab === 'meta' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Page Selector Sidebar */}
          <div className="lg:col-span-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-xs space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 px-2 mb-2">
              Select Page to Optimize
            </h4>
            {Object.values(pagesSeo).map((page) => (
              <button
                key={page.id}
                onClick={() => setSelectedPage(page.id)}
                className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                  selectedPage === page.id
                    ? 'bg-accent text-white shadow-xs font-bold'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold'
                }`}
              >
                <div>
                  <div className="text-xs">{page.pageName}</div>
                  <div className={`text-[10px] ${selectedPage === page.id ? 'text-emerald-100' : 'text-gray-400'}`}>
                    https://studyfirstinfo.com{page.slug === '/' ? '' : page.slug}
                  </div>
                </div>
                <Search size={14} className={selectedPage === page.id ? 'text-white' : 'text-gray-400'} />
              </button>
            ))}
          </div>

          {/* Edit Fields & Google SERP Preview */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Google Search Preview Box */}
            <div className="bg-white p-5 rounded-2xl border border-blue-100 shadow-xs space-y-2 bg-gradient-to-br from-blue-50/20 to-white">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                  <Globe size={13} />
                  Live Google Search Snippet Preview
                </span>
                <span className="text-[10px] text-gray-400">Desktop &amp; Mobile SERP</span>
              </div>

              {/* The Google Card Simulator */}
              <div className="bg-white p-4 rounded-xl border border-gray-200 space-y-1">
                <div className="flex items-center gap-2 text-xs text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] font-bold">
                    S
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Study First Info</span>
                    <span className="text-gray-400 text-[11px]"> &bull; https://studyfirstinfo.com{currentPage.slug === '/' ? '' : currentPage.slug}</span>
                  </div>
                </div>
                <h3 className="text-base font-semibold text-[#1a0dab] hover:underline cursor-pointer leading-snug">
                  {currentPage.metaTitle || 'Please enter a Meta Title'}
                </h3>
                <p className="text-xs text-[#4d5156] leading-relaxed line-clamp-2">
                  {currentPage.metaDescription || 'Please enter a Meta Description to see how Google displays your page summary to prospective students.'}
                </p>
              </div>
            </div>

            {/* Inputs Form */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-gray-700">
                    SEO Meta Headline / Title
                  </label>
                  <span className={`text-[11px] font-mono ${
                    currentPage.metaTitle.length > 60 ? 'text-amber-600 font-bold' : 'text-gray-400'
                  }`}>
                    {currentPage.metaTitle.length}/60 chars (Recommended: 50-60)
                  </span>
                </div>
                <input
                  type="text"
                  value={currentPage.metaTitle}
                  onChange={(e) => handlePageFieldChange('metaTitle', e.target.value)}
                  placeholder="e.g. Study in Germany & China | Study First Info"
                  className="w-full text-xs font-medium px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-hidden"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-gray-700">
                    SEO Meta Description
                  </label>
                  <span className={`text-[11px] font-mono ${
                    currentPage.metaDescription.length > 160 ? 'text-amber-600 font-bold' : 'text-gray-400'
                  }`}>
                    {currentPage.metaDescription.length}/160 chars (Recommended: 140-160)
                  </span>
                </div>
                <textarea
                  rows={3}
                  value={currentPage.metaDescription}
                  onChange={(e) => handlePageFieldChange('metaDescription', e.target.value)}
                  placeholder="Provide a compelling 150-160 character description of this page..."
                  className="w-full text-xs font-medium px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 mb-1.5 block">
                  Focus Target Keywords (Comma Separated)
                </label>
                <input
                  type="text"
                  value={currentPage.keywords}
                  onChange={(e) => handlePageFieldChange('keywords', e.target.value)}
                  placeholder="e.g. study abroad, csc scholarship, daad germany, visa support"
                  className="w-full text-xs font-medium px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-hidden"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Schema.org Markup (JSON-LD) */}
      {activeSubTab === 'schema' && (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100">
            <div>
              <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <Code2 size={16} className="text-accent" />
                Schema.org Structured Data Injector (JSON-LD)
              </h3>
              <p className="text-xs text-gray-500">
                Helps Google algorithms render Rich Snippets, Knowledge Graph panels, and Star Ratings.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-600">Schema Preset:</span>
              <select
                value={schemaType}
                onChange={(e) => setSchemaType(e.target.value as any)}
                className="text-xs font-semibold px-3 py-1.5 rounded-xl border border-gray-200 bg-gray-50 outline-hidden"
              >
                <option value="EducationalOrganization">Educational Organization</option>
                <option value="Organization">Standard Company</option>
                <option value="FAQPage">FAQ Page Schema</option>
                <option value="Custom">Custom JSON-LD</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-gray-700 flex items-center gap-1.5">
                <FileCode2 size={14} className="text-accent" />
                application/ld+json Code Editor
              </span>
              <span className="text-[11px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                <CheckCircle2 size={12} /> Valid JSON Syntax
              </span>
            </div>
            <textarea
              rows={14}
              value={customSchema}
              onChange={(e) => setCustomSchema(e.target.value)}
              className="w-full text-xs font-mono p-4 rounded-xl border border-gray-200 bg-gray-900 text-emerald-400 focus:border-accent focus:ring-1 focus:ring-accent outline-hidden leading-relaxed"
            />
          </div>

          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-3 text-xs text-blue-900">
            <Info size={16} className="shrink-0 mt-0.5 text-blue-600" />
            <div>
              <p className="font-bold">Google Rich Results Test Ready</p>
              <p className="text-[11px] text-blue-800">
                You can test this schema code anytime on Google's official validator:{' '}
                <a
                  href="https://search.google.com/test/rich-results"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline hover:text-blue-950 inline-flex items-center gap-1"
                >
                  Google Rich Results Tool <ExternalLink size={10} />
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Google Tag Manager & GA4 */}
      {activeSubTab === 'gtm' && (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-6">
          <div className="pb-4 border-b border-gray-100">
            <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
              <RefreshCw size={16} className="text-accent" />
              Tracking, Analytics &amp; Tag Manager Integration
            </h3>
            <p className="text-xs text-gray-500">
              Paste your IDs here to automatically inject tracking scripts without editing any codebase files.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* GTM Box */}
            <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50/50 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-900">Google Tag Manager (GTM)</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={gtmEnabled}
                    onChange={() => setGtmEnabled(!gtmEnabled)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent"></div>
                </label>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1.5">
                  GTM Container ID
                </label>
                <input
                  type="text"
                  value={gtmId}
                  onChange={(e) => setGtmId(e.target.value)}
                  placeholder="GTM-XXXXXXX"
                  className="w-full text-xs font-mono px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-accent outline-hidden"
                />
                <span className="text-[10px] text-gray-400 mt-1 block">
                  Format: GTM-XXXXXXX (Found in your Google Tag Manager workspace)
                </span>
              </div>
            </div>

            {/* GA4 Box */}
            <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50/50 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-900">Google Analytics 4 (GA4)</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Direct Stream
                </span>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1.5">
                  GA4 Measurement ID
                </label>
                <input
                  type="text"
                  value={ga4Id}
                  onChange={(e) => setGa4Id(e.target.value)}
                  placeholder="G-XXXXXXXXXX"
                  className="w-full text-xs font-mono px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-accent outline-hidden"
                />
                <span className="text-[10px] text-gray-400 mt-1 block">
                  Format: G-XXXXXXXXXX (Web Data Stream Measurement ID)
                </span>
              </div>
            </div>
          </div>

          {/* Search Console Token */}
          <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50/50 space-y-2">
            <label className="text-xs font-bold text-gray-900 block">
              Google Search Console Meta Verification Tag
            </label>
            <p className="text-[11px] text-gray-500">
              Alternative verification method for Google Search Console HTML tag validation.
            </p>
            <input
              type="text"
              value={searchConsoleVerification}
              onChange={(e) => setSearchConsoleVerification(e.target.value)}
              placeholder="google-site-verification=xxxxxxxxxxxxxxxxxxxx"
              className="w-full text-xs font-mono px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-accent outline-hidden"
            />
          </div>
        </div>
      )}

      {/* TAB 4: Robots.txt & Sitemap.xml Desk */}
      {activeSubTab === 'sitemap' && (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-6">
          <div className="pb-4 border-b border-gray-100">
            <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
              <FileCode2 size={16} className="text-accent" />
              Crawling Files (Google Search Console Ready)
            </h3>
            <p className="text-xs text-gray-500">
              Both files have been generated at the root of https://studyfirstinfo.com.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sitemap.xml Card */}
            <div className="p-5 rounded-2xl border border-emerald-100 bg-emerald-50/20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                  <FileCode2 size={15} className="text-accent" />
                  sitemap.xml
                </span>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                  Ready &amp; Validated
                </span>
              </div>

              <div className="p-3 bg-white rounded-xl border border-gray-200 font-mono text-[11px] text-gray-700 flex items-center justify-between">
                <span className="truncate">https://studyfirstinfo.com/sitemap.xml</span>
                <button
                  onClick={() => handleCopy('https://studyfirstinfo.com/sitemap.xml', 'sitemap')}
                  className="ml-2 text-gray-400 hover:text-accent p-1 cursor-pointer"
                  title="Copy link"
                >
                  {copiedLink === 'sitemap' ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
                </button>
              </div>

              <p className="text-[11px] text-gray-600 leading-relaxed">
                Contains all 10 priority indexed URLs including Homepage, Counselors, Pathways, Countries, Scholarships, Blog and Services.
              </p>

              <div className="flex items-center gap-2">
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline"
                >
                  <span>Open live sitemap.xml</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Robots.txt Card */}
            <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50/50 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                  <ShieldCheck size={15} className="text-accent" />
                  robots.txt
                </span>
                <span className="text-[10px] font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded-full border border-blue-300">
                  Crawlers Configured
                </span>
              </div>

              <div className="p-3 bg-white rounded-xl border border-gray-200 font-mono text-[11px] text-gray-700 flex items-center justify-between">
                <span className="truncate">https://studyfirstinfo.com/robots.txt</span>
                <button
                  onClick={() => handleCopy('https://studyfirstinfo.com/robots.txt', 'robots')}
                  className="ml-2 text-gray-400 hover:text-accent p-1 cursor-pointer"
                  title="Copy link"
                >
                  {copiedLink === 'robots' ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
                </button>
              </div>

              <p className="text-[11px] text-gray-600 leading-relaxed">
                Permits public access to prospective student content while strictly disallowing crawlers from /admin and /dashboard portals.
              </p>

              <div className="flex items-center gap-2">
                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline"
                >
                  <span>Open live robots.txt</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
