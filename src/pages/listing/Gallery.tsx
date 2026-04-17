import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Grid3x3 as Grid3X3 } from 'lucide-react';
import { GALLERY_IMAGES } from './listingData';

const CATEGORIES = ['All', ...Array.from(new Set(GALLERY_IMAGES.map((g) => g.category)))];

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const filtered = filter === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((g) => g.category === filter);
  const filteredActive = Math.min(active, filtered.length - 1);

  const prev = () => {
    const next = filteredActive === 0 ? filtered.length - 1 : filteredActive - 1;
    setActive(next);
    scrollThumb(next);
  };
  const next = () => {
    const n = filteredActive === filtered.length - 1 ? 0 : filteredActive + 1;
    setActive(n);
    scrollThumb(n);
  };

  const scrollThumb = (idx: number) => {
    const el = thumbsRef.current;
    if (!el) return;
    const thumb = el.children[idx] as HTMLElement;
    if (thumb) thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  const handleThumbClick = (i: number) => {
    setActive(i);
    scrollThumb(i);
  };

  const prevLight = () => {
    if (lightbox === null) return;
    const n = lightbox === 0 ? filtered.length - 1 : lightbox - 1;
    setLightbox(n);
  };
  const nextLight = () => {
    if (lightbox === null) return;
    const n = lightbox === filtered.length - 1 ? 0 : lightbox + 1;
    setLightbox(n);
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            Property Photos
            <span className="ml-2 text-base font-normal text-gray-400 font-sans">
              ({GALLERY_IMAGES.length} photos)
            </span>
          </h2>
          <button
            onClick={() => setLightbox(filteredActive)}
            className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-xs font-medium transition-colors"
          >
            <Grid3X3 size={13} />
            View all
          </button>
        </div>

        <div className="flex gap-2 flex-wrap mb-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => { setFilter(cat); setActive(0); }}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors duration-150 ${
                filter === cat
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          className="relative rounded-xl overflow-hidden cursor-pointer aspect-[16/9] bg-gray-100"
          onClick={() => setLightbox(filteredActive)}
        >
          <img
            src={filtered[filteredActive].src}
            alt={filtered[filteredActive].alt}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-200" />

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={18} className="text-gray-800" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={18} className="text-gray-800" />
          </button>

          <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full max-w-[60%] truncate">
            {filtered[filteredActive].alt}
          </div>
          <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full">
            {filteredActive + 1} / {filtered.length}
          </div>
        </div>

        <div
          ref={thumbsRef}
          className="flex gap-2 overflow-x-auto py-2 scrollbar-thin"
          style={{ scrollbarWidth: 'thin' }}
        >
          {filtered.map((img, i) => (
            <button
              key={i}
              onClick={() => handleThumbClick(i)}
              className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-150 ${
                i === filteredActive
                  ? 'ring-2 ring-red-700 ring-offset-1 opacity-100'
                  : 'opacity-50 hover:opacity-80'
              }`}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          onClick={() => setLightbox(null)}
        >
          <div className="flex items-center justify-between px-5 py-4 shrink-0" onClick={(e) => e.stopPropagation()}>
            <p className="text-white/70 text-sm truncate max-w-xs">
              {filtered[lightbox].alt}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-white/50 text-sm">{lightbox + 1} / {filtered.length}</span>
              <button
                onClick={() => setLightbox(null)}
                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center relative px-12 min-h-0" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={prevLight}
              className="absolute left-3 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
            >
              <ChevronLeft size={22} />
            </button>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-w-full max-h-full rounded-lg object-contain shadow-2xl"
              style={{ maxHeight: 'calc(100vh - 180px)' }}
            />
            <button
              onClick={nextLight}
              className="absolute right-3 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="shrink-0 px-5 py-3 overflow-x-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex gap-2 w-max mx-auto">
              {filtered.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(i)}
                  className={`w-14 h-14 rounded-lg overflow-hidden shrink-0 transition-all ${
                    i === lightbox ? 'ring-2 ring-red-600 opacity-100' : 'opacity-40 hover:opacity-70'
                  }`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
