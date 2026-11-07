import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, MessageCircle, Mail } from 'lucide-react';

const INTEREST_OPTIONS = [
  'New Website',
  'Software / Tools',
  'Marketing & Branding',
  'Analytics & Strategy',
  'Something else'
];

export const ContactPage: React.FC = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    message: ''
  });

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [agreedPrivacy, setAgreedPrivacy] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Pre-select interest tag from URL query params (e.g. ?interest=New%20Website)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const interest = params.get('interest');
    if (interest && INTEREST_OPTIONS.includes(interest)) {
      setSelectedInterests([interest]);
    }
  }, [location.search]);

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    const scriptUrl = (import.meta as any).env?.VITE_GOOGLE_SCRIPT_URL || '';

    const payload = {
      name: formData.name,
      business: formData.business,
      email: formData.email,
      phone: formData.phone,
      interests: selectedInterests.length > 0 ? selectedInterests : ['General Inquiry'],
      message: formData.message,
      submittedAt: new Date().toISOString()
    };

    try {
      if (scriptUrl) {
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } else {
        await new Promise(resolve => setTimeout(resolve, 600));
        console.log('[Kuvuna Lead Captured]:', payload);
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error('Submission error:', err);
      setErrorMessage('Something went wrong submitting your note. Please message us directly via WhatsApp or email below.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-32 sm:pt-40 pb-24 bg-kuvuna-cloud min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-kuvuna-amber uppercase tracking-spaced-label block mb-2">
            Start a Conversation
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-kuvuna-navy tracking-tight leading-tight">
            Tell us what&rsquo;s holding your business back.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-kuvuna-slate">
            Tell us what you are trying to solve. We will review it and take it from there.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Form Column */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-12 border border-kuvuna-navy/10 shadow-sm">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-kuvuna-teal/15 text-kuvuna-teal flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-kuvuna-navy">
                  Thank you. We received your note.
                </h3>
                <p className="text-sm sm:text-base text-kuvuna-slate max-w-md mx-auto leading-relaxed">
                  Our team will review your challenge and reach out shortly with clear, practical next steps. No pushy sales pitch—just honest solutions.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', business: '', email: '', phone: '', message: '' });
                      setSelectedInterests([]);
                      setAgreedPrivacy(false);
                    }}
                    className="text-xs font-semibold text-kuvuna-navy hover:text-kuvuna-amber underline underline-offset-4"
                  >
                    Send another message &rarr;
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Interest Tags */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-spaced-label text-kuvuna-navy mb-3">
                    What are you looking to solve? (Select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {INTEREST_OPTIONS.map((option) => {
                      const isSelected = selectedInterests.includes(option);
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => toggleInterest(option)}
                          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                            isSelected
                              ? 'bg-kuvuna-navy text-white shadow-sm ring-1 ring-kuvuna-amber'
                              : 'bg-kuvuna-cloud text-kuvuna-slate hover:bg-kuvuna-navy/10 hover:text-kuvuna-navy'
                          }`}
                        >
                          {isSelected ? '✓ ' : '+ '} {option}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Business */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-kuvuna-navy mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl border border-kuvuna-navy/15 text-sm text-kuvuna-navy placeholder:text-kuvuna-slate/40 focus:outline-none focus:ring-2 focus:ring-kuvuna-amber focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="business" className="block text-xs font-semibold text-kuvuna-navy mb-1.5">
                      Business or Project Name
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="e.g. Acme Studio"
                      className="w-full px-4 py-3 rounded-xl border border-kuvuna-navy/15 text-sm text-kuvuna-navy placeholder:text-kuvuna-slate/40 focus:outline-none focus:ring-2 focus:ring-kuvuna-amber focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-kuvuna-navy mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sarah@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-kuvuna-navy/15 text-sm text-kuvuna-navy placeholder:text-kuvuna-slate/40 focus:outline-none focus:ring-2 focus:ring-kuvuna-amber focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-kuvuna-navy mb-1.5">
                      Phone or WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-kuvuna-navy/15 text-sm text-kuvuna-navy placeholder:text-kuvuna-slate/40 focus:outline-none focus:ring-2 focus:ring-kuvuna-amber focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-kuvuna-navy mb-1.5">
                    What is the main challenge holding your business back right now? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you're dealing with. For example: 'We have a website that isn't generating leads' or 'We need an automated intake system to save 10 hours a week'."
                    className="w-full px-4 py-3 rounded-xl border border-kuvuna-navy/15 text-sm text-kuvuna-navy placeholder:text-kuvuna-slate/40 focus:outline-none focus:ring-2 focus:ring-kuvuna-amber focus:border-transparent resize-y"
                  ></textarea>
                </div>

                {/* Privacy Policy Checkbox */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-kuvuna-cloud border border-kuvuna-navy/10">
                  <input
                    type="checkbox"
                    id="privacyPolicy"
                    name="privacyPolicy"
                    required
                    checked={agreedPrivacy}
                    onChange={(e) => setAgreedPrivacy(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-kuvuna-amber focus:ring-kuvuna-amber border-kuvuna-navy/30 cursor-pointer flex-shrink-0"
                  />
                  <label htmlFor="privacyPolicy" className="text-xs text-kuvuna-slate leading-relaxed cursor-pointer select-none">
                    I agree to the{' '}
                    <Link
                      to="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-kuvuna-navy font-bold underline hover:text-kuvuna-amber"
                    >
                      Privacy Policy
                    </Link>{' '}
                    and consent to Kuvuna contacting me regarding this business inquiry. *
                  </label>
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold bg-kuvuna-amber text-kuvuna-navy hover:bg-kuvuna-amber-hover transition-colors shadow-sm disabled:opacity-60 active:scale-98"
                >
                  {submitting ? (
                    <span>Sending your note...</span>
                  ) : (
                    <>
                      <span>Talk to us</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-kuvuna-slate/70">
                  We respect your privacy. No spam, ever.
                </p>

              </form>
            )}

          </div>

          {/* Direct Contact Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-white rounded-3xl p-8 border border-kuvuna-navy/10 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-kuvuna-navy">
                Prefer a direct conversation?
              </h3>
              <p className="text-xs text-kuvuna-slate leading-relaxed">
                If you prefer messaging directly or chatting on WhatsApp without waiting for forms:
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href="mailto:team@kuvuna.com"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-kuvuna-cloud hover:bg-kuvuna-navy/10 transition-colors text-xs font-semibold text-kuvuna-navy"
                >
                  <Mail className="w-4 h-4 text-kuvuna-amber flex-shrink-0" />
                  <span>team@kuvuna.com</span>
                </a>

                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-kuvuna-cloud hover:bg-kuvuna-navy/10 transition-colors text-xs font-semibold text-kuvuna-navy"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>

            <div className="bg-kuvuna-navy text-white rounded-3xl p-8 border border-kuvuna-navy-light space-y-3">
              <div className="text-xs font-bold uppercase tracking-spaced-label text-kuvuna-amber">
                Our Promise
              </div>
              <p className="text-xs text-kuvuna-cloud/80 leading-relaxed">
                Plain language, zero pushy sales tactics, and a clear next step in every conversation.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
