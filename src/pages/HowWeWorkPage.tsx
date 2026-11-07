import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageSquare, Layers, LineChart } from 'lucide-react';
import { FaqSection } from '../components/FaqSection';
import { CatchAllBanner } from '../components/CatchAllBanner';

export const HowWeWorkPage: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Diagnose the Real Bottleneck',
      description: 'We don’t pitch you a predetermined package. We sit down, listen to where your business feels stuck—whether it’s lack of inquiries, wasted hours on manual work, or unknown marketing return—and pinpoint the exact obstacle in plain language.',
      focus: 'No guessing. A clear understanding of what needs fixing.'
    },
    {
      step: '02',
      title: 'Build and Connect the Right Tools',
      description: 'We execute the solution. That could be a high-converting website, custom digital tools to save hours of repeat work, or targeted customer campaigns. Because we work across marketing, tech, and growth, everything connects cleanly from day one.',
      focus: 'Practical systems tailored directly to how your business operates.'
    },
    {
      step: '03',
      title: 'Harvest Results & Plan Next Steps',
      description: 'We measure what actually happens. We review real numbers: inquiries received, hours saved, and revenue generated. From there, the next step is always obvious—double down on what works and cut whatever does not.',
      focus: 'Clear numbers behind every single decision.'
    }
  ];

  return (
    <div className="pt-32 sm:pt-40 bg-kuvuna-cloud min-h-screen">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-kuvuna-amber uppercase tracking-spaced-label block mb-3">
            The Kuvuna Standard
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-kuvuna-navy tracking-tight leading-tight">
            One partner for the whole journey.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-kuvuna-slate leading-relaxed">
            In practice, that means plain language, a clear next step in every conversation, and numbers behind decisions wherever possible.
          </p>
        </div>
      </div>

      {/* The 3 Core Guarantees */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-3xl p-8 border border-kuvuna-navy/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-kuvuna-amber/15 text-kuvuna-amber flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-kuvuna-navy mb-3">
                Plain Words, No Buzzwords
              </h3>
              <p className="text-sm text-kuvuna-slate leading-relaxed">
                If a business owner would need to ask what a word means, we rewrite it. We talk like partners, not textbooks. No jargon—just clear explanations and practical next steps.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-kuvuna-navy/5 text-xs text-kuvuna-slate/80 italic">
              &ldquo;We build you a website that brings in inquiries.&rdquo;
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-kuvuna-navy/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-kuvuna-teal/15 text-kuvuna-teal flex items-center justify-center mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-kuvuna-navy mb-3">
                The Whole Growth Loop
              </h3>
              <p className="text-sm text-kuvuna-slate leading-relaxed">
                Marketing brings in sales, technology cuts costs and saves time, and growth shows what makes money. When all three talk to each other, you stop leaking time and budget.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-kuvuna-navy/5 text-xs text-kuvuna-slate/80 italic">
              One team managing the loop under one roof.
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-kuvuna-navy/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-kuvuna-navy text-white flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6 text-kuvuna-amber" />
              </div>
              <h3 className="text-xl font-bold text-kuvuna-navy mb-3">
                Numbers Behind Every Step
              </h3>
              <p className="text-sm text-kuvuna-slate leading-relaxed">
                We never guess. We look at real metrics: actual calls booked, hours saved, and revenue earned. Every recommendation is grounded in clear numbers you can verify.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-kuvuna-navy/5 text-xs text-kuvuna-slate/80 italic">
              &ldquo;Here is what is working, and what to do next.&rdquo;
            </div>
          </div>

        </div>
      </div>

      {/* The 3-Step Process */}
      <section className="bg-kuvuna-navy text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-kuvuna-amber uppercase tracking-spaced-label block mb-2">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              How a project unfolds with us
            </h2>
            <p className="mt-3 text-kuvuna-cloud/70 text-sm sm:text-base">
              Predictable, transparent, and built around your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((st) => (
              <div
                key={st.step}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl font-bold text-kuvuna-amber mb-4">
                    {st.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {st.title}
                  </h3>
                  <p className="text-sm text-kuvuna-cloud/80 leading-relaxed mb-6">
                    {st.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-kuvuna-teal font-semibold">
                  {st.focus}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold bg-kuvuna-amber text-kuvuna-navy hover:bg-kuvuna-amber-hover transition-colors shadow-lg shadow-kuvuna-amber/20"
            >
              <span>Talk to us about your project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* Catch All */}
      <CatchAllBanner />

    </div>
  );
};
