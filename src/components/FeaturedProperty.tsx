import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FeaturedProperty() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="bg-white py-24 px-6 border-t border-gray-100">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-red-700 text-sm font-medium tracking-widest uppercase mb-3">
            Live Listing
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
            Featured Commercial Property
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-100 shadow-md transition-all duration-700 delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative overflow-hidden">
            <img
              src="https://imagedelivery.net/Ef11cwJOxTBjAJ0V4Yn5vw/32f5e5da-b27d-4165-9d91-1073e4da4900/public"
              alt="Featured property at 412 Ridgecrest Drive, Canton GA"
              className="w-full h-full object-cover min-h-72 lg:min-h-0 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              AVAILABLE
            </div>
          </div>

          <div className="bg-gray-50 p-10 lg:p-12 flex flex-col justify-center">
            <p className="text-gray-400 text-sm mb-2">Acworth, GA 30101</p>
            <h3 className="font-serif text-3xl font-bold text-gray-900 mb-2">
              3957 S Main St
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Premium Office &bull; Built 2021 &bull; 16,284 SF
            </p>
            <p className="text-gray-600 leading-relaxed text-[15px] mb-8">
              Ideal for professional services, medical, or corporate headquarters users. Easily accommodates a variety of business types and strategies with potential multi-tenant configuration or departmental segmentation. 
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                '3 Spacious Conference Rooms',
                'Luxury design and inviting reception',
                'Turnkey with minimal renovations required',
                'Excellent location near Hwy 41 in Acworth',
              ].map((result) => (
                <div key={result} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <CheckCircle size={15} className="text-green-600 shrink-0" />
                  {result}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900">Offered at $2,490,000</span>
              <Link
                to="/3957-s-main-st"
                className="inline-flex items-center gap-1.5 text-red-700 hover:text-red-800 text-sm font-medium transition-colors hover:gap-2.5 duration-200"
              >
                View Listing <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
