export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-b border-gray-800 py-8">
          <p className="text-gray-600 text-xs tracking-widest uppercase mb-5 text-center">

          </p>
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
                { label: 'Services', href: '#services' },
                { label: 'Why Choose Us', href: '#why-us' },
                { label: 'About Us', href: '#about' },
                { label: 'Contact', href: '#contact' },
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
