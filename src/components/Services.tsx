import { Home, Building2, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const residential = [
  'Buying and selling all styles of homes',
  'Helping families upgrade, downsize, or relocate',
  'Proven pricing and marketing strategies',
  'First-time buyer guidance, start to close',
  'Tough negotiation on your behalf',
];

const commercial = [
  'Buying and selling office, industrial, and mixed-use properties',
  'Working with business owners and investors',
  'Owner-User and investment sales',
  'Market analysis and valuation for business properties',
  'Streamlined transaction management',
];

export default function Services() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="services" className="bg-white py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-red-700 text-sm font-medium tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Residential & Commercial Real Estate
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Whether you're buying a home for your family or selling a commercial
            property, we bring the same focused strategy every time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            className={`rounded-2xl p-10 border border-gray-100 bg-gray-50 transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-50 p-2.5 rounded-lg">
                <Home size={22} className="text-red-700" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900">Residential</h3>
            </div>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              We work with buyers, sellers, and investors to
              navigate one of the most important financial decisions of their
              lives — with clarity and confidence.
            </p>
            <ul className="flex flex-col gap-3">
              {residential.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-gray-700">
                  <CheckCircle size={16} className="text-red-700 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`rounded-2xl p-10 border border-gray-900 bg-gray-900 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/10 p-2.5 rounded-lg">
                <Building2 size={22} className="text-amber-400" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">Commercial</h3>
            </div>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              We help business owners, entrepreneurs, and investors buy and sell
              commercial properties — with a sharp focus on execution, results, and 
              unmatched service to our clients.
            </p>
            <ul className="flex flex-col gap-3">
              {commercial.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-gray-300">
                  <CheckCircle size={16} className="text-amber-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
