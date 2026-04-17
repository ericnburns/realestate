import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Building2,
  Ruler,
  Calendar,
  DollarSign,
  CheckCircle,
  Phone,
  Download,
  FileText,
  Navigation,
  Plane,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
} from 'lucide-react';
import Gallery from './listing/Gallery';
import FloorplanGallery from './listing/FloorplanGallery';
import InquiryCard from './listing/InquiryCard';
import { PROPERTY, POI_ITEMS } from './listing/listingData';

const POI_ICONS: Record<string, React.ElementType> = {
  highway: Navigation,
  airport: Plane,
  retail: ShoppingBag,
  amenity: MapPin,
  education: GraduationCap,
  medical: HeartPulse,
};

function ListingFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-950 text-gray-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-b border-gray-800 py-8">
          <div className="flex items-center justify-center">
            <img
              src="https://imagedelivery.net/Ef11cwJOxTBjAJ0V4Yn5vw/a39d96d8-f31e-4aab-d6ee-2997f76b4a00/public"
              alt="Burns Realty Team with Keller Williams Realty Partners"
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          <div>
            <p className="text-white text-sm font-semibold mb-4">Quick Links</p>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { label: 'Services', href: '/#services' },
                { label: 'Why Choose Us', href: '/#why-us' },
                { label: 'About Us', href: '/#about' },
                { label: 'Contact', href: '/#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white text-sm font-semibold mb-4">Contact</p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+14046453356" className="hover:text-white transition-colors">
                (404) 645-3356
              </a>
              <a href="mailto:ericburns@kw.com" className="hover:text-white transition-colors">
                ericburns@kw.com
              </a>
              <p className="text-gray-600 text-xs mt-2">
                
                <br />
                
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 py-6 text-xs text-gray-600 text-center">
          <p>&copy; {year} Burns Realty Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function PropertyListing() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Back to Burns Realty Team
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-gray-900 font-serif font-semibold hidden sm:block">Burns Realty Team</span>
            <span className="text-red-700 font-bold hidden sm:block">|</span>
            <span className="text-gray-500 text-xs tracking-widest uppercase hidden sm:block">Cherokee, Bartow, Cobb</span>
          </div>
        </div>
      </header>

      <div className="bg-gray-50 border-b border-gray-100 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <span>/</span>
          <span>Commercial Listings</span>
          <span>/</span>
          <span className="text-gray-900 font-medium">{PROPERTY.address}, {PROPERTY.city}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Available</span>
                <span className="text-gray-400 text-xs">&bull;</span>
                <span className="text-gray-500 text-sm">{PROPERTY.type}</span>
                <span className="text-gray-400 text-xs">&bull;</span>
                <span className="text-gray-500 text-sm">Built {PROPERTY.yearBuilt}</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {PROPERTY.address}
              </h1>
              <p className="flex items-center gap-1.5 text-gray-500">
                <MapPin size={15} className="text-red-700" />
                {PROPERTY.city}, {PROPERTY.state} {PROPERTY.zip}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="text-right">
                <p className="font-serif text-4xl font-bold text-gray-900">{PROPERTY.price}</p>
                <p className="text-gray-400 text-sm mt-0.5">{PROPERTY.size}</p>
              </div>
              <a
                href={PROPERTY.brochureUrl}
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                <FileText size={14} />
                Download Brochure
                <Download size={13} className="text-gray-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 p-5 bg-gray-50 rounded-xl border border-gray-100">
          {[
            { icon: Building2, label: 'Property Type', value: PROPERTY.type },
            { icon: Ruler, label: 'Building Size', value: '16,284 SF' },
            { icon: Calendar, label: 'Year Built', value: String(PROPERTY.yearBuilt) },
            { icon: DollarSign, label: 'Asking Price', value: PROPERTY.price },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg border border-gray-200 shrink-0">
                <Icon size={16} className="text-red-700" />
              </div>
              <div>
                <p className="text-gray-400 text-xs">{label}</p>
                <p className="text-gray-900 font-semibold text-sm">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <Gallery />

            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-5">About This Property</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
                {PROPERTY.description.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <a
                href={PROPERTY.brochureUrl}
                className="inline-flex items-center gap-2 mt-6 border border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white text-gray-700 text-sm font-medium px-5 py-3 rounded-lg transition-all duration-200 group"
              >
                <FileText size={15} className="group-hover:text-white text-gray-400 transition-colors" />
                Download Full Property Brochure (PDF)
                <Download size={13} className="group-hover:text-gray-300 text-gray-400 transition-colors" />
              </a>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-5">Property Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROPERTY.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <CheckCircle size={16} className="text-red-700 shrink-0" />
                    <span className="text-gray-700 text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-5">Building Specifications</h2>
              <div className="rounded-xl border border-gray-200 overflow-hidden">
                {PROPERTY.specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex items-center justify-between px-5 py-3.5 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <span className="text-gray-500">{spec.label}</span>
                    <span className="text-gray-900 font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <FloorplanGallery />

            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">Location</h2>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Positioned near Hwy 41 and Hwy 92 in Acworth —
                This property offers immediate access
                to major arterials and is within minutes of I-75, McCollum Airport, and a dense concentration
                of retail, dining, housing, and professional services.
              </p>

              <div className="mb-6">
                <div className="relative">
                  <img
                    src="https://imagedelivery.net/Ef11cwJOxTBjAJ0V4Yn5vw/f82e2f0f-457f-437e-5345-17da0e57b200/public"
                    alt="Aerial view of the Acworth/Kennesaw commercial corridor near 3957 S Main St"
                    className="w-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white font-semibold text-sm"></p>
                    <p className="text-white/70 text-xs mt-0.5">
                      
                    </p>
                  </div>

                  {[
                    { label: 'Subject Property', x: '38%', y: '52%', highlight: true },
                    { label: 'Hwy 41', x: '28%', y: '35%', highlight: false },
                    { label: 'I-75', x: '70%', y: '28%', highlight: false },
                    { label: 'Hwy 92', x: '55%', y: '65%', highlight: false },
                  ].map((pin) => (
                    <div
                      key={pin.label}
                      className="absolute flex flex-col items-center"
                      style={{ left: pin.x, top: pin.y, transform: 'translate(-50%, -50%)' }}
                    >
                      <div className={`px-2 py-0.5 rounded text-[10px] font-semibold whitespace-nowrap ${
                        pin.highlight
                          ? 'bg-red-700 text-white shadow-lg'
                          : 'bg-white/80 text-gray-800 shadow'
                      }`}>
                        {pin.label}
                      </div>
                      <div className={`w-1.5 h-1.5 rounded-full mt-0.5 ${pin.highlight ? 'bg-red-500' : 'bg-gray-800'}`} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {POI_ITEMS.map((poi) => {
                  const Icon = POI_ICONS[poi.type] ?? MapPin;
                  return (
                    <div key={poi.label} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3.5 border border-gray-100">
                      <div className="bg-white border border-gray-200 p-2 rounded-lg shrink-0">
                        <Icon size={14} className="text-red-700" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-800 text-sm font-medium truncate">{poi.label}</p>
                      </div>
                      <span className="text-gray-400 text-xs font-medium shrink-0">{poi.distance}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-5">
              <InquiryCard />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-t border-gray-100 py-16 px-6 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-red-700 text-sm font-medium tracking-widest uppercase mb-3"></p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interested in This Property?
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Schedule a showing, request financials, or ask any question.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+14046453356"
              className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-medium px-7 py-4 rounded-lg transition-colors"
            >
              <Phone size={16} />
              (404) 645-3356
            </a>
            <a
              href={PROPERTY.brochureUrl}
              className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-500 text-gray-700 font-medium px-7 py-4 rounded-lg transition-colors"
            >
              <Download size={16} />
              Download Brochure
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-400 text-gray-500 font-medium px-7 py-4 rounded-lg transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>

      <ListingFooter />
    </div>
  );
}
