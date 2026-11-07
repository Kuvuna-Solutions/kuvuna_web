import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const CatchAllBanner: React.FC = () => {
  return (
    <section className="py-20 bg-kuvuna-cloud">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-kuvuna-navy to-kuvuna-navy-light rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl border border-white/10">
          
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-bold text-kuvuna-amber uppercase tracking-spaced-label block">
              Open Growth Support
            </span>

            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Something else holding your business back?
            </h3>

            <p className="text-sm sm:text-base text-kuvuna-cloud/80 leading-relaxed">
              We aren&rsquo;t locked into a rigid menu. If a problem is stopping your business from reaching customers, running smoothly, or growing, let&rsquo;s talk through it.
            </p>

            <div className="pt-3">
              <Link
                to="/contact?interest=Something%20else"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold bg-kuvuna-amber text-kuvuna-navy hover:bg-kuvuna-amber-hover transition-all shadow-md active:scale-98"
              >
                <span>Talk to us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
