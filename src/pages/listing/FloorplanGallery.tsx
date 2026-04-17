import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Download, FileText } from 'lucide-react';
import { FLOORPLAN_IMAGES, PROPERTY } from './listingData';

export default function FloorplanGallery() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setActive((a) => (a === 0 ? FLOORPLAN_IMAGES.length - 1 : a - 1));
  const next = () => setActive((a) => (a === FLOORPLAN_IMAGES.length - 1 ? 0 : a + 1));

  return (
    <>
      <div>
        <div className="mb-4">
          <h2 className="font-serif text-2xl font-bold text-gray-900">Floor Plans</h2>
          <p className="text-gray-500 text-sm mt-0.5">
            {FLOORPLAN_IMAGES.length} plan views &bull; 16,284 SF total
          </p>
        </div>

        <div
          className="relative rounded-xl overflow-hidden cursor-pointer bg-gray-50 border border-gray-200"
          style={{ aspectRatio: '4/3' }}
          onClick={() => setLightbox(active)}
        >
          <img
            src={FLOORPLAN_IMAGES[active].src}
            alt={FLOORPLAN_IMAGES[active].alt}
            className="w-full h-full object-contain p-4 transition-opacity duration-300"
          />
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 border border-gray-200 p-2 rounded-full shadow-sm transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={16} className="text-gray-700" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 border border-gray-200 p-2 rounded-full shadow-sm transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={16} className="text-gray-700" />
          </button>
          <div className="absolute bottom-3 right-3 bg-black/40 text-white text-xs px-2.5 py-1 rounded-full">
            {active + 1} / {FLOORPLAN_IMAGES.length}
          </div>
          <div className="absolute top-3 left-3 bg-white/90 text-gray-700 text-xs px-2.5 py-1 rounded-full border border-gray-200 font-medium">
            {FLOORPLAN_IMAGES[active].alt}
          </div>
        </div>

        <div className="flex gap-3 mt-3">
          {FLOORPLAN_IMAGES.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex-1 aspect-square rounded-lg overflow-hidden bg-gray-50 border transition-all duration-150 ${
                i === active
                  ? 'border-red-700 ring-1 ring-red-700'
                  : 'border-gray-200 opacity-60 hover:opacity-90'
              }`}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-contain p-1" />
            </button>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
          <div className="bg-red-50 p-2.5 rounded-lg shrink-0">
            <FileText size={18} className="text-red-700" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900">Floor Plan Package — PDF</p>
            <p className="text-xs text-gray-500 mt-0.5">
              Main Level + Upper Level Floorplan PDF Package
            </p>
          </div>
          <a
            href={PROPERTY.floorplanPdfUrl}
            className="inline-flex items-center gap-1.5 bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors shrink-0"
          >
            <Download size={12} />
            Download
          </a>
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
          >
            <X size={18} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((a) => (a === null ? null : a === 0 ? FLOORPLAN_IMAGES.length - 1 : a - 1)); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
          >
            <ChevronLeft size={22} />
          </button>
          <div className="bg-white rounded-2xl p-6 max-w-3xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <p className="text-gray-900 font-semibold text-sm mb-4">{FLOORPLAN_IMAGES[lightbox].alt}</p>
            <img
              src={FLOORPLAN_IMAGES[lightbox].src}
              alt={FLOORPLAN_IMAGES[lightbox].alt}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((a) => (a === null ? null : a === FLOORPLAN_IMAGES.length - 1 ? 0 : a + 1)); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
          >
            <ChevronRight size={22} />
          </button>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {lightbox + 1} / {FLOORPLAN_IMAGES.length}
          </p>
        </div>
      )}
    </>
  );
}

