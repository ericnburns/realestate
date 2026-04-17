import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We start with a no-pressure conversation to understand your goals, timeline, and what success looks like for you. No commitments required.',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'Based on your goals and current market conditions, we develop a clear, personalized plan — whether you\'re buying, selling, or both.',
  },
  {
    number: '03',
    title: 'Execution',
    description:
      'We handle the heavy lifting. From pricing and marketing to negotiations and closing, we manage every detail so you can stay focused on what matters.',
  },
];

export default function Process() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-red-700 text-sm font-medium tracking-widest uppercase mb-3">
            How It Works
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple. Focused. Effective.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            We've refined our process over 25 years to offer the greatest possible value to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gray-200" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative flex flex-col items-center text-center transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150 + 100}ms` }}
            >
              <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-red-700 flex items-center justify-center mb-6 shadow-sm">
                <span className="font-serif text-red-700 font-bold text-lg">{step.number}</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-xl mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">{step.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-14 transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="#contact"
            className="inline-block bg-red-700 hover:bg-red-800 text-white font-medium px-8 py-4 rounded transition-colors duration-200"
          >
            Start with a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
