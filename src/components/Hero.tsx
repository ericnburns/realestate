import { ArrowRight, PhoneCall } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://imagedelivery.net/Ef11cwJOxTBjAJ0V4Yn5vw/3c7fb280-b7d4-471f-c282-f2c5081bf000/public)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl">
          <p className="animate-fade-in-up text-red-400 text-sm font-medium tracking-widest uppercase mb-5">
            Cherokee, Bartow, Cobb
          </p>

          <h1 className="animate-fade-in-up delay-100 font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Local Expertise.
            <br />
            Real Results.
          </h1>

          <p className="animate-fade-in-up delay-200 text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Helping families and businesses buy and sell commercial and
            residential real estate since 2001.
          </p>

          <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4 mb-14">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white font-medium px-7 py-4 rounded transition-all duration-200 hover:gap-3"
            >
              Get Your Property Value
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:+14046453356"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-7 py-4 rounded border border-white/30 transition-colors duration-200"
            >
              <PhoneCall size={18} />
              Call Us Today
            </a>
          </div>

          <div className="animate-fade-in-up delay-400 flex flex-wrap gap-x-10 gap-y-4">
            {[
              { value: '200+', label: 'Satisfied Clients' },
              { value: '25', label: 'Years in Cherokee County' },
              { value: '$110M+', label: 'In Closed Sales' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-white text-3xl font-serif font-bold">{stat.value}</p>
                <p className="text-white/60 text-sm mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#social-proof"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors animate-fade-in delay-500"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/30" />
      </a>
    </section>
  );
}
