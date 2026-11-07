import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown, CheckCircle2 } from 'lucide-react';
import { GrowthLoopScroll } from '../components/GrowthLoopScroll';
import { BottleneckExplorer } from '../components/BottleneckExplorer';
import { BeforeAfterComparison } from '../components/BeforeAfterComparison';
import { CatchAllBanner } from '../components/CatchAllBanner';
import { FaqSection } from '../components/FaqSection';
import { projectsData } from '../data/projects';

export const HomePage: React.FC = () => {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative bg-kuvuna-navy text-white pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden">
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          
          {/* Editorial Section Label */}
          <div className="mb-6">
            <span className="text-xs sm:text-sm font-bold text-kuvuna-amber uppercase tracking-spaced-label">
              Marketing &middot; Technology &middot; Growth
            </span>
          </div>

          {/* Display Headline: Uses the Tagline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.08] sm:leading-[1.1]">
            Solutions that grow <br />
            <span className="text-kuvuna-amber">your business.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-kuvuna-cloud/80 max-w-2xl mx-auto leading-relaxed font-normal">
            A business growth partner that brings marketing, technology, and growth work together—so you can earn more, waste less, and see what is working.
          </p>

          {/* Hero CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold bg-kuvuna-amber text-kuvuna-navy hover:bg-kuvuna-amber-hover transition-all duration-200 shadow-lg shadow-kuvuna-amber/20 active:scale-98 group"
            >
              <span>Talk to us</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <a
              href="#what-we-do"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-kuvuna-cloud/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <span>See how the loop works</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="mt-16 pt-8 border-t border-white/10 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-kuvuna-teal flex-shrink-0" />
              <div>
                <div className="text-sm font-bold text-white">One Connected Partner</div>
                <div className="text-xs text-kuvuna-cloud/60">No finger-pointing between agencies</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-kuvuna-amber flex-shrink-0" />
              <div>
                <div className="text-sm font-bold text-white">Plain Words Only</div>
                <div className="text-xs text-kuvuna-cloud/60">Zero buzzwords or complicated jargon</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-kuvuna-teal flex-shrink-0" />
              <div>
                <div className="text-sm font-bold text-white">Clear Numbers</div>
                <div className="text-xs text-kuvuna-cloud/60">Data and outcomes behind every step</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* THE SIGNATURE PINNED SCROLL EXPERIENCE */}
      <GrowthLoopScroll />

      {/* BOTTLENECK EXPLORER */}
      <BottleneckExplorer />

      {/* FEATURED WORK PREVIEW WITH IMAGES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-kuvuna-amber uppercase tracking-spaced-label block mb-2">
                Featured Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-kuvuna-navy tracking-tight">
                Real solutions for growing businesses
              </h2>
              <p className="mt-2 text-kuvuna-slate text-sm sm:text-base">
                Explore blueprints of systems and campaigns we design to solve specific growth hurdles.
              </p>
            </div>

            <Link
              to="/work"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-kuvuna-navy hover:text-kuvuna-amber transition-colors group"
            >
              <span>Explore all solutions</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Cards Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((p) => (
              <div
                key={p.id}
                className="bg-kuvuna-cloud rounded-3xl overflow-hidden border border-kuvuna-navy/10 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  {/* Project Image Frame */}
                  <div className="w-full h-48 bg-kuvuna-navy-dark relative overflow-hidden flex items-center justify-center">
                    <img
                      src={p.image}
                      alt={p.title}
                      onError={(e) => {
                        // Fallback styled mockup card if image not yet dropped in folder
                        e.currentTarget.style.display = 'none';
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Fallback visual banner when image is loading or absent */}
                    <div className="absolute inset-0 bg-gradient-to-br from-kuvuna-navy to-kuvuna-navy-dark flex flex-col justify-between p-6 pointer-events-none -z-0">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold uppercase tracking-spaced-label text-kuvuna-amber">
                          {p.categoryLabel}
                        </span>
                        <span className="text-[10px] text-kuvuna-cloud/60">
                          {p.clientType}
                        </span>
                      </div>
                      <div className="text-base font-bold text-white">
                        {p.title}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-kuvuna-navy group-hover:text-kuvuna-navy-light transition-colors mb-2">
                      {p.title}
                    </h3>

                    <p className="text-xs text-kuvuna-slate mb-4 leading-relaxed">
                      {p.subtitle}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-kuvuna-navy/10 text-xs">
                      <div>
                        <span className="font-bold text-kuvuna-navy">The Bottleneck: </span>
                        <span className="text-kuvuna-slate">{p.bottleneck}</span>
                      </div>
                      <div>
                        <span className="font-bold text-kuvuna-teal">The Harvest: </span>
                        <span className="text-kuvuna-navy font-semibold">{p.harvest}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/contact?interest=${encodeURIComponent(p.ctaPreselect)}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold bg-kuvuna-navy text-white hover:bg-kuvuna-navy-light transition-colors"
                  >
                    <span>Need a solution like this? Talk to us</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BEFORE / AFTER COMPARISON */}
      <BeforeAfterComparison />

      {/* CATCH ALL BANNER */}
      <CatchAllBanner />

      {/* FAQ SECTION */}
      <FaqSection />

    </div>
  );
};
