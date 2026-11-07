import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Search, Cpu, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BottleneckItem } from '../types';

const bottlenecks: BottleneckItem[] = [
  {
    id: 'traffic-no-inquiries',
    problemTitle: 'People visit our site or page, but nobody reaches out or buys',
    problemQuote: '"We get visits and clicks, but our inbox stays empty and the phone doesn’t ring."',
    pillar: 'Marketing',
    pillarColor: 'text-kuvuna-amber',
    actionTitle: 'Clear Messaging & Conversion Design',
    actionDescription: 'Often the issue is not lack of traffic, but an unclear offer or a complicated contact process. We rewrite your message in plain words, highlight what customers care about, and remove all friction between browsing and inquiring.',
    solutionHighlights: [
      'Rewrite headlines in clear, benefit-driven language',
      'One-click inquiry and booking buttons (no long forms)',
      'High-trust visuals and social proof in the right spots',
      'Speed optimization so visitors do not bounce away'
    ],
    ctaText: 'Fix your inquiry conversion',
    ctaTag: 'New Website'
  },
  {
    id: 'manual-overwhelm',
    problemTitle: 'Our team wastes hours every day on repetitive, manual work',
    problemQuote: '"We are copy-pasting customer details, answering the exact same questions, and juggling spreadsheets."',
    pillar: 'Technology',
    pillarColor: 'text-kuvuna-teal',
    actionTitle: 'Custom Software & Practical Systems',
    actionDescription: 'Your business shouldn’t stall because manual tasks eat up your workday. We build clean digital tools, customer intake portals, and connected software so routine work runs smoothly in the background.',
    solutionHighlights: [
      'Centralized client intake and confirmation systems',
      'Automated email and notification triggers for the team',
      'Custom web software tailored to your exact workflow',
      'Frictionless customer portals that answer common requests'
    ],
    ctaText: 'Build smarter systems',
    ctaTag: 'Software / Tools'
  },
  {
    id: 'blind-spending',
    problemTitle: 'We spend money on marketing, but have no idea what actually works',
    problemQuote: '"We are running ads and posting content, but we can’t tell which one brings in paying clients."',
    pillar: 'Growth',
    pillarColor: 'text-kuvuna-amber',
    actionTitle: 'Revenue Attribution & Clear Dashboards',
    actionDescription: 'Stop spending on hunches. We connect your campaigns, website activity, and real closed revenue into one simple dashboard so you see exactly what makes money and can cut the waste.',
    solutionHighlights: [
      'Unified tracking between ads, inquiries, and closed sales',
      'No complex charts—only clear numbers you can act on',
      'Cut wasted spend on dead channels immediately',
      'Reallocate budget directly into your highest-performing stream'
    ],
    ctaText: 'Get clear numbers',
    ctaTag: 'Analytics & Strategy'
  }
];

export const BottleneckExplorer: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(bottlenecks[0].id);

  const active = bottlenecks.find(b => b.id === selectedId) || bottlenecks[0];

  return (
    <section className="py-20 bg-kuvuna-cloud border-t border-b border-kuvuna-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-kuvuna-amber uppercase tracking-spaced-label block mb-2">
            Diagnose Your Business
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-kuvuna-navy tracking-tight">
            What is holding your business back right now?
          </h2>
          <p className="mt-3 text-kuvuna-slate text-sm sm:text-base">
            Select the challenge that sounds familiar. Here is how Kuvuna solves it.
          </p>
        </div>

        {/* Bottleneck Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {bottlenecks.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`text-left p-6 rounded-2xl transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-kuvuna-navy/20 shadow-xl ring-2 ring-kuvuna-amber'
                    : 'bg-white/70 hover:bg-white border-kuvuna-navy/5 text-kuvuna-slate'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-spaced-label text-kuvuna-navy/70">
                      {item.pillar}
                    </span>
                    {isSelected && (
                      <span className="w-2.5 h-2.5 rounded-full bg-kuvuna-amber"></span>
                    )}
                  </div>
                  <h3 className={`text-base font-bold leading-snug ${isSelected ? 'text-kuvuna-navy' : 'text-kuvuna-navy/80'}`}>
                    {item.problemTitle}
                  </h3>
                </div>
                <div className="mt-4 pt-3 border-t border-kuvuna-navy/5 text-xs italic text-kuvuna-slate">
                  {item.problemQuote}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Solution Reveal Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-kuvuna-navy/10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Solution description and high-contrast checklist */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-kuvuna-teal uppercase tracking-spaced-label block">
                The Kuvuna Solution &middot; {active.pillar}
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-kuvuna-navy leading-tight">
                {active.actionTitle}
              </h3>
              
              <p className="text-sm sm:text-base text-kuvuna-slate leading-relaxed">
                {active.actionDescription}
              </p>

              <div className="pt-3">
                <span className="text-xs font-bold uppercase tracking-spaced-label text-kuvuna-navy mb-3 block">
                  What we put in place:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {active.solutionHighlights.map((hl) => (
                    <div
                      key={hl}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-kuvuna-cloud border border-kuvuna-navy/10 text-xs sm:text-sm text-kuvuna-navy font-semibold"
                    >
                      <CheckCircle2 className="w-4 h-4 text-kuvuna-teal flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Focused Call to Action Box */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center bg-kuvuna-navy text-white rounded-2xl p-8 sm:p-10 text-center shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-5 border border-white/10">
                {active.pillar === 'Marketing' && <Search className="w-7 h-7 text-kuvuna-amber" />}
                {active.pillar === 'Technology' && <Cpu className="w-7 h-7 text-kuvuna-teal" />}
                {active.pillar === 'Growth' && <BarChart3 className="w-7 h-7 text-kuvuna-amber" />}
              </div>

              <h4 className="text-lg font-bold text-white mb-2">
                Ready to resolve this bottleneck?
              </h4>
              <p className="text-xs text-kuvuna-cloud/70 mb-6 max-w-xs leading-relaxed">
                Tell us what you are dealing with. We give you a clear next step in plain language.
              </p>

              <Link
                to={`/contact?interest=${encodeURIComponent(active.ctaTag)}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-kuvuna-amber text-kuvuna-navy hover:bg-kuvuna-amber-hover transition-colors shadow-sm"
              >
                <span>{active.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
