import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="bg-gray-900 py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://imagedelivery.net/Ef11cwJOxTBjAJ0V4Yn5vw/3d4a3ecf-4f6a-4361-40a9-4819c77d0900/public"
                alt="Burns Realty Team, a real estate team at Keller Williams Realty Partners"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <p className="text-red-400 text-sm font-medium tracking-widest uppercase mb-4">
              About Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Cherokee County
              <br />
              Every Day
            </h2>

            <div className="flex flex-col gap-5 text-gray-400 leading-relaxed text-[15px]">
              <p>
                The Burns Realty Team was founded in 2001 by Terry Burns,
                a Georgia native and longtime resident of Canton. Since 2017,
                Eric has led the team, continuing to grow its presence in both
                residential and commercial sales across the region.
              </p>
              <p>
                We handle both commercial and residential real estate sales 
                throughout Cherokee, Bartow, and Cobb County with special
                exceptions for referrals beyond our typical region.
              </p>
              <p>
                We are not a "numbers" team. We offer excellent service only to excellent
                clients to ensure each one receives direct, experienced guidance
                from start to finish. No handoffs, no layers of team members to weave through — just clear communication and a focused strategy.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-block mt-10 bg-white hover:bg-gray-100 text-gray-900 font-medium px-7 py-4 rounded transition-colors duration-200 text-sm"
            >
              Meet the Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
