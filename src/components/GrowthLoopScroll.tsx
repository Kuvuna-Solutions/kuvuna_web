import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Megaphone, Globe, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PillarPhase {
  id: string;
  stepNumber: string;
  pillar: string;
  tagline: string;
  accentHex: string;
  headline: string;
  description: string;
  whatItIncludes: string[];
  ctaTag: string;
}

const phases: PillarPhase[] = [
  {
    id: 'marketing',
    stepNumber: '01',
    pillar: 'Marketing',
    tagline: 'Bring in more sales',
    accentHex: '#F28C28',
    headline: 'Reach more customers and get chosen',
    description: 'We help your business get found, noticed, and chosen through targeted campaigns, content, and design that clearly stand out from competitors.',
    whatItIncludes: [
      'Search engine optimization (SEO) & local search',
      'Targeted customer ad campaigns',
      'High-impact brand, logo & graphic design',
      'Photography and videography that build trust'
    ],
    ctaTag: 'Marketing & Branding'
  },
  {
    id: 'technology',
    stepNumber: '02',
    pillar: 'Technology',
    tagline: 'Cut costs & save time',
    accentHex: '#2E8B7A',
    headline: 'Build smarter systems and fast websites',
    description: 'We build high-converting websites and custom digital software tools that eliminate repeat work, save hours of team effort, and keep customers returning.',
    whatItIncludes: [
      'Fast, modern, high-converting websites',
      'Custom customer inquiry & booking systems',
      'Software tools tailored to your daily workflow',
      'Frictionless mobile ordering & client platforms'
    ],
    ctaTag: 'New Website'
  },
  {
    id: 'growth',
    stepNumber: '03',
    pillar: 'Growth',
    tagline: 'Know what makes you money',
    accentHex: '#F28C28',
    headline: 'See what is working and do more of it',
    description: 'Stop spending on hunches. We connect your website, campaigns, and real revenue into clean dashboards so you see exactly what drives profit.',
    whatItIncludes: [
      'Executive dashboards with zero confusing fluff',
      'Revenue attribution across all sales channels',
      'Customer lifetime retention systems',
      'Clear, verified numbers behind every decision'
    ],
    ctaTag: 'Analytics & Strategy'
  }
];

export const GrowthLoopScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  // Native scroll progress tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const stepProgress = useTransform(scrollYProgress, [0, 0.45, 0.75, 1], [0, 1, 2, 2]);

  useEffect(() => {
    return stepProgress.on('change', (latest) => {
      const idx = Math.min(Math.floor(latest + 0.2), 2);
      setActiveTab(idx);
    });
  }, [stepProgress]);

  const activePillar = phases[activeTab];

  return (
    <section id="what-we-do" className="relative bg-kuvuna-navy text-white">
      
      {/* Scroll Track Container */}
      <div ref={containerRef} className="relative min-h-[220vh]">
        
        {/* Sticky Stage */}
        <div className="sticky top-0 min-h-screen flex flex-col justify-between py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto pt-4">
            <span className="text-xs font-bold text-kuvuna-amber uppercase tracking-spaced-label block mb-2">
              The Connected Growth Loop
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Marketing, technology, and growth working together
            </h2>
            <p className="mt-3 text-sm sm:text-base text-kuvuna-cloud/70">
              One partner for the entire journey. Scroll to see how each phase drives the next.
            </p>

            {/* Clean Tab Bar (no gimmick pills) */}
            <div className="mt-6 flex justify-center">
              <div className="inline-flex border-b border-white/20 gap-6 sm:gap-10">
                {phases.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveTab(idx)}
                    className={`pb-3 text-xs sm:text-sm font-semibold transition-all relative ${
                      activeTab === idx
                        ? 'text-white border-b-2 border-kuvuna-amber'
                        : 'text-kuvuna-cloud/60 hover:text-white'
                    }`}
                  >
                    <span className="mr-2 text-kuvuna-amber">{p.stepNumber}.</span>
                    <span>{p.pillar}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Content Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-8">
            
            {/* Left: The Brand Geometry Stage (Clean, spaced, no overlap) */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-sm bg-kuvuna-navy-dark/80 rounded-3xl p-8 border border-white/10 shadow-2xl">
                
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <span className="text-xs font-bold text-kuvuna-cloud/60 uppercase tracking-spaced-label">
                    Phase {activePillar.stepNumber} Focus
                  </span>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded"
                    style={{ backgroundColor: activePillar.accentHex, color: '#12304A' }}
                  >
                    {activePillar.tagline}
                  </span>
                </div>

                {/* Geometric Visualizer of the Kuvuna K */}
                <div className="py-6 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-3 w-44 h-44 p-4 rounded-2xl bg-white/5 border border-white/10">
                    
                    {/* Top Row: Navy, Empty, Amber Spark */}
                    <div className="w-10 h-10 rounded-xl bg-kuvuna-navy-light border border-white/10"></div>
                    <div></div>
                    <motion.div
                      animate={{
                        scale: activeTab === 0 ? 1.12 : 1,
                        opacity: activeTab === 0 ? 1 : 0.4
                      }}
                      className="w-10 h-10 rounded-xl bg-kuvuna-amber flex items-center justify-center text-kuvuna-navy shadow-lg"
                    >
                      <Megaphone className="w-5 h-5 text-kuvuna-navy" />
                    </motion.div>

                    {/* Middle Row: Navy, Teal Connector, Empty */}
                    <div className="w-10 h-10 rounded-xl bg-kuvuna-navy-light border border-white/10"></div>
                    <motion.div
                      animate={{
                        scale: activeTab === 1 ? 1.12 : 1,
                        opacity: activeTab === 1 ? 1 : 0.4
                      }}
                      className="w-10 h-10 rounded-xl bg-kuvuna-teal flex items-center justify-center text-white shadow-lg"
                    >
                      <Globe className="w-5 h-5 text-white" />
                    </motion.div>
                    <div></div>

                    {/* Bottom Row: Navy, Empty, Amber Harvest */}
                    <div className="w-10 h-10 rounded-xl bg-kuvuna-navy-light border border-white/10"></div>
                    <div></div>
                    <motion.div
                      animate={{
                        scale: activeTab === 2 ? 1.12 : 1,
                        opacity: activeTab === 2 ? 1 : 0.4
                      }}
                      className="w-10 h-10 rounded-xl bg-kuvuna-amber flex items-center justify-center text-kuvuna-navy shadow-lg"
                    >
                      <TrendingUp className="w-5 h-5 text-kuvuna-navy" />
                    </motion.div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 text-center text-xs text-kuvuna-cloud/70">
                  {activeTab === 0 && 'Igniting attention & winning customers'}
                  {activeTab === 1 && 'Automating capture & streamlining operations'}
                  {activeTab === 2 && 'Tracking revenue & scaling what works'}
                </div>

              </div>
            </div>

            {/* Right: Narrative & Inclusions */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              
              <div>
                <span className="text-xs font-bold text-kuvuna-amber uppercase tracking-spaced-label">
                  {activePillar.pillar} &middot; {activePillar.tagline}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1 leading-tight">
                  {activePillar.headline}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-kuvuna-cloud/80 leading-relaxed max-w-xl">
                {activePillar.description}
              </p>

              {/* High Contrast Checklist */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-semibold text-kuvuna-cloud/60 uppercase tracking-spaced-label block mb-2">
                  What we put in place:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activePillar.whatItIncludes.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/10 border border-white/10 text-xs sm:text-sm text-white font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-kuvuna-teal flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to={`/contact?interest=${encodeURIComponent(activePillar.ctaTag)}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-kuvuna-amber text-kuvuna-navy hover:bg-kuvuna-amber-hover transition-colors shadow-md"
                >
                  <span>Talk to us about {activePillar.pillar}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/work"
                  className="text-xs sm:text-sm font-semibold text-kuvuna-cloud/70 hover:text-white transition-colors"
                >
                  See example projects &rarr;
                </Link>
              </div>

            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-kuvuna-cloud/50">
            <span>The Kuvuna Loop</span>
            <span>Scroll naturally to transition through the loop</span>
          </div>

        </div>

      </div>
    </section>
  );
};
