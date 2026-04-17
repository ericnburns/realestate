import { TrendingUp, MapPin, MessageSquare, Target } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const differentiators = [
  {
    icon: MapPin,
    title: 'Deep Local Roots',
    description:
      'We have lived, worked, and raised families in Cherokee County for over 30 years. We know north Georgia because this is our home too.',
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven Pricing',
    description:
      'Our team is led by some nerdy engineers. Translation: we love numbers and our numbers are accurate. Our analysis is thorough and backed by real market data. Certified Guess-Work Free.',
  },
  {
    icon: Target,
    title: 'Targeted Marketing',
    description:
      'Professional photography, compelling listings, and targeted digital exposure reach the right buyers. Real Estate is not magic, but, with the right marketing, it can feel that way.',
  },
  {
    icon: MessageSquare,
    title: 'Direct & Transparent',
    description:
      'There are no secrets here. We provide complete information about property condition, value, and surrounding areas. We tell the truth and nothing but the truth.',
  },
];

export default function WhyChooseUs() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="why-us" className="bg-white py-24 px-6 border-t border-gray-100">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-red-700 text-sm font-medium tracking-widest uppercase mb-3">
            Worth a Phone Call
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Burns Realty Team Difference
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Success should not be measured by volume, but by the satisfaction of our clients. With satisfied clients, the rest will follow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group flex gap-5 transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100 + 100}ms` }}
              >
                <div className="shrink-0 mt-1">
                  <div className="bg-red-50 group-hover:bg-red-700 p-3 rounded-xl transition-colors duration-300">
                    <Icon size={20} className="text-red-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-[15px]">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
