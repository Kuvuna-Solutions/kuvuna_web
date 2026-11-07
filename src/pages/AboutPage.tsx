import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { teamData } from '../data/team';
import { CatchAllBanner } from '../components/CatchAllBanner';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 sm:pt-40 bg-kuvuna-cloud min-h-screen">
      
      {/* Header & Meaning Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-kuvuna-amber uppercase tracking-spaced-label block">
              About Kuvuna
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-kuvuna-navy tracking-tight leading-tight">
              Kuvuna is Shona for &ldquo;to harvest&rdquo;.
            </h1>

            <p className="text-base sm:text-lg text-kuvuna-slate leading-relaxed">
              We started Kuvuna with a single belief: growing a business should not be an endless cycle of guesswork, fragmented agencies, and technical confusion.
            </p>

            <p className="text-sm sm:text-base text-kuvuna-slate leading-relaxed">
              Just like a successful harvest requires preparing the soil, tending the crops, and collecting the yield, lasting business growth requires connecting **marketing**, **technology**, and **growth tracking** into one continuous loop.
            </p>

            <div className="pt-2">
              <div className="p-5 rounded-2xl bg-white border border-kuvuna-navy/10 flex items-start gap-3.5 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-kuvuna-teal flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-kuvuna-navy font-semibold leading-relaxed">
                  We are a dedicated team of four focused on building solutions that genuinely move the needle for your business—so you can focus on running it.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Logo Symbology Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-kuvuna-navy text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-kuvuna-navy-light w-full max-w-md space-y-6">
              
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="text-xs uppercase tracking-spaced-label text-kuvuna-cloud/60 font-bold">
                  Brand Symbology
                </span>
                <span className="text-xs text-kuvuna-amber font-bold">The &ldquo;K&rdquo; Mark</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-kuvuna-navy-light border border-white/20 flex-shrink-0 mt-0.5"></div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Navy Squares</h4>
                    <p className="text-xs text-kuvuna-cloud/70 mt-0.5">The solid foundation that grounds the business.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-kuvuna-teal flex-shrink-0 mt-0.5"></div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Teal Square</h4>
                    <p className="text-xs text-kuvuna-cloud/70 mt-0.5">The center where marketing, tech, and data connect.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-kuvuna-amber flex-shrink-0 mt-0.5"></div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Amber Square</h4>
                    <p className="text-xs text-kuvuna-cloud/70 mt-0.5">The spark of growth at the top—the harvest.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-center">
                <img
                  src="/brand/for-dark-backgrounds/svg/kuvuna-logo-tagline.svg"
                  alt="Kuvuna Logo"
                  className="h-8 mx-auto object-contain opacity-90"
                />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Meet the Core Team of 4 */}
      <section className="bg-white py-24 border-t border-b border-kuvuna-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-kuvuna-amber uppercase tracking-spaced-label block mb-2">
              The People Behind Kuvuna
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-kuvuna-navy tracking-tight">
              A dedicated team of four
            </h2>
            <p className="mt-3 text-kuvuna-slate text-sm sm:text-base">
              You work directly with the creators and strategists building your solutions—never passed off to junior reps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="bg-kuvuna-cloud rounded-3xl overflow-hidden border border-kuvuna-navy/10 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  {/* Photo Frame with Fallback Initials */}
                  <div className="w-full h-72 bg-kuvuna-navy relative overflow-hidden flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 relative z-10"
                    />

                    {/* Fallback Initials Badge */}
                    <div className="absolute inset-0 bg-gradient-to-br from-kuvuna-navy to-kuvuna-navy-dark flex flex-col items-center justify-center p-6 text-white pointer-events-none -z-0">
                      <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl font-bold mb-2">
                        {member.initials}
                      </div>
                      <span className="text-xs text-kuvuna-cloud/60 text-center font-medium">
                        Photo Placeholder
                      </span>
                    </div>

                    {/* Role Accent Strip */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1.5"
                      style={{ backgroundColor: member.accent }}
                    ></div>
                  </div>

                  {/* Info Body */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-kuvuna-navy group-hover:text-kuvuna-navy-light transition-colors">
                      {member.name}
                    </h3>

                    <div className="text-xs font-bold uppercase tracking-spaced-label text-kuvuna-amber mt-1">
                      {member.role}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 flex items-center justify-between text-xs border-t border-kuvuna-navy/5 pt-4">
                  <span className="text-kuvuna-slate font-medium">Kuvuna Partner</span>
                  <Link
                    to="/contact"
                    className="font-bold text-kuvuna-navy hover:text-kuvuna-amber transition-colors flex items-center gap-1"
                  >
                    <span>Talk to us</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Catch All */}
      <CatchAllBanner />

    </div>
  );
};
