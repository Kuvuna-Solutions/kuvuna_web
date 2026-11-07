import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-kuvuna-cloud flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-kuvuna-navy/10 text-center shadow-sm space-y-4">
        
        <div className="w-16 h-16 rounded-2xl bg-kuvuna-navy/5 text-kuvuna-navy font-bold text-2xl flex items-center justify-center mx-auto">
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-kuvuna-navy">
          Page not found
        </h1>

        <p className="text-sm text-kuvuna-slate leading-relaxed">
          Looks like this page doesn&rsquo;t exist. Let&rsquo;s get you back to what matters: growing your business.
        </p>

        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-kuvuna-navy text-white hover:bg-kuvuna-navy-light transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
