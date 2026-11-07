import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-kuvuna-navy-dark text-kuvuna-cloud pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/brand/for-dark-backgrounds/svg/kuvuna-logo-tagline.svg"
                alt="Kuvuna - Solutions that grow your business"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-kuvuna-cloud/80 text-sm max-w-sm leading-relaxed">
              Kuvuna is a marketing, technology, and growth partner for businesses. We bring the people and tools together to win customers, run things smoothly, and scale with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-kuvuna-amber uppercase tracking-spaced-label">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-kuvuna-cloud/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-white transition-colors">Our Work</Link>
              </li>
              <li>
                <Link to="/how-we-work" className="hover:text-white transition-colors">How We Work</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Kuvuna</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Talk to us</Link>
              </li>
            </ul>
          </div>

          {/* The 3 Pillars */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-kuvuna-teal uppercase tracking-spaced-label">
              What We Do
            </h4>
            <ul className="space-y-2 text-sm text-kuvuna-cloud/80">
              <li>
                <a href="/#marketing" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Marketing</span>
                  <span className="text-xs text-kuvuna-cloud/50">Reach customers</span>
                </a>
              </li>
              <li>
                <a href="/#technology" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Technology</span>
                  <span className="text-xs text-kuvuna-cloud/50">Build systems</span>
                </a>
              </li>
              <li>
                <a href="/#growth" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Growth</span>
                  <span className="text-xs text-kuvuna-cloud/50">Measure & scale</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Catch-all Action */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-kuvuna-amber uppercase tracking-spaced-label">
              Get In Touch
            </h4>
            <p className="text-xs text-kuvuna-cloud/70 leading-relaxed">
              Something else holding your business back?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-kuvuna-amber text-kuvuna-navy hover:bg-kuvuna-amber-hover transition-colors"
            >
              <span>Talk to us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <div className="pt-2 text-xs text-kuvuna-cloud/50 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct next steps in every talk</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-kuvuna-cloud/60">
          <p>&copy; {new Date().getFullYear()} Kuvuna. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <span>&middot;</span>
            <p className="text-center sm:text-right">
              Solutions that grow your business
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
