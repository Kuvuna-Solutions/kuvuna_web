import React, { useState } from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BeforeAfterComparison: React.FC = () => {
  const [viewMode, setViewMode] = useState<'both' | 'before' | 'after'>('both');

  const beforePoints = [
    {
      title: 'Scattered Freelancers & Disconnected Agencies',
      desc: 'One person designs a site, another runs ads, and neither talks to the other when things don’t convert.'
    },
    {
      title: 'Confusing Buzzwords & Vague Promises',
      desc: 'Complicated technical terms with endless meetings that don’t translate into real paying customers.'
    },
    {
      title: 'Hours Lost on Manual Repetitive Work',
      desc: 'Copy-pasting data across systems, answering repeat inquiries manually, and drowning in busywork.'
    },
    {
      title: 'Guessing What Drives Revenue',
      desc: 'Spending money on ads and marketing blindly without knowing which channel produces real profit.'
    }
  ];

  const afterPoints = [
    {
      title: 'One Partner for the Whole Growth Loop',
      desc: 'Marketing, technology, and growth coordinated together so your website, tools, and ads work seamlessly.'
    },
    {
      title: 'Plain Language & A Clear Next Step',
      desc: 'No jargon, no fluff. Straightforward conversations focused strictly on outcomes and next steps.'
    },
    {
      title: 'Smarter Systems & Fast Websites',
      desc: 'Websites and custom tools designed to capture customer interest instantly and save hours of team effort.'
    },
    {
      title: 'Clear Numbers Behind Every Decision',
      desc: 'See exactly what makes money, stop paying for what doesn’t, and invest with certainty.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-kuvuna-amber uppercase tracking-spaced-label block mb-2">
            The Difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-kuvuna-navy tracking-tight">
            Less guesswork. More customers.
          </h2>
          <p className="mt-3 text-kuvuna-slate text-sm sm:text-base">
            Here is what happens when marketing, technology, and growth work as one connected partner.
          </p>
        </div>

        {/* View Mode Switcher (For Mobile) */}
        <div className="flex justify-center mb-8 md:hidden">
          <div className="inline-flex p-1 bg-kuvuna-cloud rounded-xl">
            <button
              onClick={() => setViewMode('before')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg ${viewMode === 'before' ? 'bg-white text-kuvuna-navy shadow' : 'text-kuvuna-slate'}`}
            >
              The Guesswork Way
            </button>
            <button
              onClick={() => setViewMode('after')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg ${viewMode === 'after' ? 'bg-kuvuna-navy text-white shadow' : 'text-kuvuna-slate'}`}
            >
              The Kuvuna Way
            </button>
          </div>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Before: The Guesswork Way */}
          {(viewMode === 'both' || viewMode === 'before') && (
            <div className="bg-red-50/50 rounded-3xl p-8 sm:p-10 border border-red-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6 text-red-700">
                  <XCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-spaced-label">Without Kuvuna: The Guesswork Way</span>
                </div>

                <div className="space-y-6">
                  {beforePoints.map((item) => (
                    <div key={item.title} className="space-y-1">
                      <h4 className="text-sm font-bold text-kuvuna-navy flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                        <span>{item.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-kuvuna-slate pl-3.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-red-200/60 text-xs text-red-600 font-semibold italic">
                Result: High effort, wasted budget, and uncertainty about what is working.
              </div>
            </div>
          )}

          {/* After: The Kuvuna Way */}
          {(viewMode === 'both' || viewMode === 'after') && (
            <div className="bg-kuvuna-navy rounded-3xl p-8 sm:p-10 text-white border border-kuvuna-navy-light flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center gap-2 mb-6 text-kuvuna-amber">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-spaced-label">With Kuvuna: The Connected Loop</span>
                </div>

                <div className="space-y-6">
                  {afterPoints.map((item) => (
                    <div key={item.title} className="space-y-1">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-kuvuna-amber"></span>
                        <span>{item.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-kuvuna-cloud/80 pl-3.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-kuvuna-teal font-bold">
                  Result: Earn more, waste less, and clear numbers.
                </span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-kuvuna-amber hover:text-white transition-colors"
                >
                  <span>Talk to us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
