import { Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
  {
    name: 'Jennifer & Mark T.',
    location: 'Canton, GA',
    text: 'We had our home listed on a Friday and under contract by Monday — above asking price. Better yet, we were not just a number. The team cared about us and took time to make sure we were confident in the deal.',
    stars: 5,
  },
  {
    name: 'David R.',
    location: 'Woodstock, GA',
    text: 'Moving commercial spaces is challenging. Using a 1031 Exchange is confusing. Selling and buying real estate in general can be exhausting. All these challenges were mitigated and handled beutifully by the team.',
    stars: 5,
  },
  {
    name: 'Anthony W.',
    location: 'Acworth, GA',
    text: 'When you look through a marketing package on commercial buildings, it becomes obvious that agents spend no time putting them together. Not so with this team. Our marketing package was excellent and the speed of the sale as well as our price further demonstrated that fact.',
    stars: 5,
  },
  {
    name: 'Patricia H.',
    location: 'Ball Ground, GA',
    text: 'After 22 years in our home, selling was emotional. The Burns Realty Team treated us like family, got us a phenomenal price, and made the transition as painless as possible.',
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-amber-500 text-amber-500" />
      ))}
    </div>
  );
}

export default function SocialProof() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="social-proof" className="bg-gray-50 py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-red-700 text-sm font-medium tracking-widest uppercase mb-3">
            Client Stories
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white rounded-xl p-8 border border-gray-100 shadow-sm transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100 + 100}ms` }}
            >
              <StarRating count={t.stars} />
              <p className="text-gray-700 leading-relaxed mt-4 mb-6 text-[15px]">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
                <p className="text-gray-400 text-sm">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
