import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-32 sm:pt-40 pb-24 bg-kuvuna-cloud min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold text-kuvuna-navy hover:text-kuvuna-amber transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Contact</span>
          </Link>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-kuvuna-navy/10 shadow-sm space-y-8">
          
          <div>
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-spaced-label text-kuvuna-amber mb-2">
              <Shield className="w-4 h-4" />
              <span>Legal &amp; Privacy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-kuvuna-navy tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-kuvuna-slate mt-2">
              Last updated: November 2026
            </p>
          </div>

          <div className="space-y-6 text-sm text-kuvuna-slate leading-relaxed border-t border-kuvuna-navy/10 pt-6">
            
            <section className="space-y-2">
              <h2 className="text-base font-bold text-kuvuna-navy">
                1. Overview &amp; Plain Language Promise
              </h2>
              <p>
                At Kuvuna, we respect your privacy. In plain language: we only collect the business details you voluntarily give us when reaching out, and we only use them to evaluate your inquiry, discuss solutions, and deliver projects for your business. We never sell, rent, or trade your personal or business data.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-kuvuna-navy">
                2. Information We Collect
              </h2>
              <p>
                When you submit an inquiry through our website, we may collect:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your name and job title or business affiliation.</li>
                <li>Your contact details (such as email address and phone or WhatsApp number).</li>
                <li>Information regarding your business goals, bottlenecks, and project requirements.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-kuvuna-navy">
                3. How We Use Your Information
              </h2>
              <p>
                The information you provide is used solely to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Respond directly to your question, request, or project inquiry.</li>
                <li>Prepare and schedule discovery conversations and commercial proposals.</li>
                <li>Coordinate with our 4-person team to build and deliver your solutions.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-kuvuna-navy">
                4. Data Security &amp; Storage
              </h2>
              <p>
                We use secure, encrypted transmission (HTTPS/SSL) and standard access controls to protect your data. Inquiries are stored in our secure internal systems accessible strictly by our core team members.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-kuvuna-navy">
                5. Third-Party Services
              </h2>
              <p>
                We may use trusted operational services (such as Cloudflare for content delivery and Google Workspace for email communication). These services process data strictly on our behalf under industry-standard security and confidentiality agreements.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-kuvuna-navy">
                6. Contacting Us About Your Data
              </h2>
              <p>
                You may request a copy of the data we hold about you or request that we delete your contact records at any time by emailing us at{' '}
                <a href="mailto:team@kuvuna.com" className="font-semibold text-kuvuna-navy underline hover:text-kuvuna-amber">
                  team@kuvuna.com
                </a>.
              </p>
            </section>

          </div>

          <div className="pt-6 border-t border-kuvuna-navy/10 flex justify-between items-center text-xs text-kuvuna-slate">
            <span>&copy; {new Date().getFullYear()} Kuvuna. Solutions that grow your business.</span>
            <Link to="/" className="font-bold text-kuvuna-navy hover:text-kuvuna-amber">
              Back to Home &rarr;
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};
