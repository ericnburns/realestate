import { useState } from 'react';
import { Phone, Mail, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialForm: FormState = { name: '', email: '', phone: '', message: '' };

export default function Contact() {
  const { ref, visible } = useScrollReveal();
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error: dbError } = await supabase.from('leads').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      message: form.message.trim(),
    });

    if (dbError) {
      setError('Something went wrong. Please try again or call us directly.');
    } else {
      setSuccess(true);
      setForm(initialForm);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="bg-gray-50 py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-red-700 text-sm font-medium tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto leading-relaxed">
            Whether you're buying, selling, or just exploring your options —
            reach out and we'll respond ASAP.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div
            className={`lg:col-span-2 flex flex-col gap-6 transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-gray-900 text-lg mb-6">Contact Details</h3>

              <div className="flex flex-col gap-5">
                <a
                  href="tel:+17705550100"
                  className="flex items-center gap-4 group"
                >
                  <div className="bg-red-50 p-3 rounded-lg group-hover:bg-red-700 transition-colors duration-200">
                    <Phone size={18} className="text-red-700 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Call or Text</p>
                    <p className="text-gray-900 font-medium">(404) 645-3356</p>
                  </div>
                </a>

                <a
                  href="mailto:ericburns@kw.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="bg-red-50 p-3 rounded-lg group-hover:bg-red-700 transition-colors duration-200">
                    <Mail size={18} className="text-red-700 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Email</p>
                    <p className="text-gray-900 font-medium">ericburns@kw.com</p>
                  </div>
                </a>

                <a
                  href="sms:+17705550100"
                  className="flex items-center gap-4 group"
                >
                  <div className="bg-red-50 p-3 rounded-lg group-hover:bg-red-700 transition-colors duration-200">
                    <MessageSquare size={18} className="text-red-700 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Text Us</p>
                    <p className="text-gray-900 font-medium">Quick questions? Text us.</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-7 text-white">
              <h3 className="font-serif text-xl font-bold mb-2">Free Property Valuation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Zestimates are for the birds. Get a real property valuation from a real person. 
                Fill out the form and we'll have an engineer determine its value for you. 
              </p>
            </div>
          </div>

          <div
            className={`lg:col-span-3 bg-white rounded-xl p-8 border border-gray-100 shadow-sm transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {success ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="bg-green-50 p-4 rounded-full mb-5">
                  <CheckCircle size={36} className="text-green-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                  Message Received!
                </h3>
                <p className="text-gray-500 leading-relaxed max-w-sm">
                  Thank you for reaching out. A member of The Burns Realty Team will
                  follow up with you ASAP.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-8 text-red-700 font-medium text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700/20 focus:border-red-700 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(770) 555-0100"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700/20 focus:border-red-700 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700/20 focus:border-red-700 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="I'm interested in selling my home / buying in Canton / getting a free valuation..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700/20 focus:border-red-700 transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-600 text-sm bg-red-50 px-4 py-3 rounded-lg">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 disabled:bg-red-400 text-white font-medium px-7 py-4 rounded-lg transition-colors duration-200 text-sm w-full sm:w-auto"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  {!loading && <ArrowRight size={16} />}
                </button>

                <p className="text-gray-400 text-xs">
                  We respect your privacy and never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
