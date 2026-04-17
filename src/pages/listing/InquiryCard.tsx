import { useState } from 'react';
import { Phone, Mail, ArrowRight, CheckCircle, Download, FileText } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { PROPERTY } from './listingData';

interface Form {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function InquiryCard() {
  const [form, setForm] = useState<Form>({
    name: '',
    email: '',
    phone: '',
    message: `I'm interested in ${PROPERTY.address}, ${PROPERTY.city}, ${PROPERTY.state} ${PROPERTY.zip}.`,
  });
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
      setError('Something went wrong. Please call us directly.');
    } else {
      setSuccess(true);
    }
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-gray-900 px-6 py-5">
        <p className="text-gray-400 text-xs tracking-widest uppercase mb-1">Asking Price</p>
        <p className="font-serif text-3xl font-bold text-white">{PROPERTY.price}</p>
        <p className="text-gray-400 text-sm mt-1 leading-relaxed">{PROPERTY.size}</p>
      </div>

      <div className="px-6 py-4 border-b border-gray-100 space-y-2">
        <a
          href="tel:+14046453356"
          className="flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white font-medium px-5 py-3.5 rounded-lg transition-colors text-sm w-full"
        >
          <Phone size={15} />
          Call (404) 645-3356
        </a>
        <a
          href="mailto:ericburns@kw.com"
          className="flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-400 text-gray-700 font-medium px-5 py-3.5 rounded-lg transition-colors text-sm w-full"
        >
          <Mail size={15} />
          Email the Team
        </a>
      </div>

      <div className="px-6 py-4 border-b border-gray-100">
        <a
          href={PROPERTY.brochureUrl}
          className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 transition-colors group"
        >
          <div className="bg-red-50 p-2 rounded shrink-0">
            <FileText size={15} className="text-red-700" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-gray-900 text-xs font-semibold">Property Brochure</p>
            <p className="text-gray-400 text-[11px] mt-0.5">Full details · PDF download</p>
          </div>
          <Download size={14} className="text-gray-400 group-hover:text-gray-700 transition-colors shrink-0" />
        </a>
      </div>

      <div className="px-6 py-5">
        {success ? (
          <div className="text-center py-5">
            <div className="bg-green-50 p-3 rounded-full w-fit mx-auto mb-3">
              <CheckCircle size={26} className="text-green-600" />
            </div>
            <p className="font-semibold text-gray-900 mb-1 text-sm">Inquiry Sent!</p>
            <p className="text-gray-500 text-xs">We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-gray-900 mb-0.5">Request Information</p>
            <input name="name" type="text" required placeholder="Full Name" value={form.name} onChange={handleChange}
              className="border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700/20 focus:border-red-700 transition-colors" />
            <input name="email" type="email" required placeholder="Email Address" value={form.email} onChange={handleChange}
              className="border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700/20 focus:border-red-700 transition-colors" />
            <input name="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={handleChange}
              className="border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700/20 focus:border-red-700 transition-colors" />
            <textarea name="message" rows={3} value={form.message} onChange={handleChange}
              className="border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700/20 focus:border-red-700 transition-colors resize-none" />
            {error && <p className="text-red-600 text-xs">{error}</p>}
            <button type="submit" disabled={loading}
              className="flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 disabled:bg-red-400 text-white font-medium px-5 py-3 rounded-lg transition-colors text-sm">
              {loading ? 'Sending...' : 'Send Inquiry'}
              {!loading && <ArrowRight size={14} />}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
