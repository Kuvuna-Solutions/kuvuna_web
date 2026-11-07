import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCategory } from '../types';
import { CatchAllBanner } from '../components/CatchAllBanner';

export const WorkPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 sm:pt-40 bg-kuvuna-cloud min-h-screen">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-kuvuna-amber uppercase tracking-spaced-label block mb-3">
            Our Work &amp; Solution Blueprints
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-kuvuna-navy tracking-tight leading-tight">
            Solutions built to grow your business
          </h1>
          <p className="mt-4 text-base sm:text-lg text-kuvuna-slate leading-relaxed">
            We don&rsquo;t believe in vanity projects. Here are real-world blueprints of websites, marketing campaigns, and growth systems built to solve specific bottlenecks.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mt-10 flex flex-wrap gap-3 items-center border-b border-kuvuna-navy/10 pb-6">
          <span className="text-xs font-bold text-kuvuna-slate uppercase tracking-spaced-label mr-2">
            Filter:
          </span>
          {[
            { id: 'all', label: 'All Solutions' },
            { id: 'websites', label: 'Websites & Systems' },
            { id: 'marketing', label: 'Marketing & Brand' },
            { id: 'growth', label: 'Growth & Analytics' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as ProjectCategory)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === tab.id
                  ? 'bg-kuvuna-navy text-white shadow-md'
                  : 'bg-white text-kuvuna-slate hover:text-kuvuna-navy border border-kuvuna-navy/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid: 2-Column Editorial Showcase with Large Image Frames */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden border border-kuvuna-navy/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image Header */}
                <div className="w-full h-64 sm:h-72 bg-kuvuna-navy-dark relative overflow-hidden flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Fallback Graphic Header when local image is pending */}
                  <div className="absolute inset-0 bg-gradient-to-br from-kuvuna-navy to-kuvuna-navy-dark p-8 flex flex-col justify-between pointer-events-none -z-0">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold uppercase tracking-spaced-label text-kuvuna-amber">
                        {project.categoryLabel}
                      </span>
                      <span className="text-xs font-semibold text-kuvuna-cloud/70">
                        {project.clientType}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs text-kuvuna-teal font-bold uppercase tracking-spaced-label block mb-1">
                        Blueprint
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8 sm:p-10 space-y-6">
                  
                  <div>
                    <h3 className="text-2xl font-bold text-kuvuna-navy mb-2 group-hover:text-kuvuna-navy-light transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-kuvuna-slate leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold bg-kuvuna-cloud text-kuvuna-navy px-3 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Problem & Solution */}
                  <div className="space-y-4 pt-4 border-t border-kuvuna-navy/10 text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-kuvuna-navy block mb-1 uppercase tracking-spaced-label text-[11px]">
                        The Bottleneck
                      </span>
                      <p className="text-kuvuna-slate leading-relaxed">
                        {project.bottleneck}
                      </p>
                    </div>

                    <div>
                      <span className="font-bold text-kuvuna-navy block mb-1 uppercase tracking-spaced-label text-[11px]">
                        The Solution
                      </span>
                      <p className="text-kuvuna-slate leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* The Harvest */}
                    <div className="bg-kuvuna-cloud p-4 rounded-2xl border border-kuvuna-navy/5">
                      <span className="font-bold text-kuvuna-teal flex items-center gap-2 mb-1 text-xs uppercase tracking-spaced-label">
                        <CheckCircle2 className="w-4 h-4 text-kuvuna-teal" />
                        <span>The Harvest / Outcome</span>
                      </span>
                      <p className="text-sm font-bold text-kuvuna-navy leading-relaxed">
                        {project.harvest}
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Action Bar */}
              <div className="p-8 sm:p-10 pt-0">
                <Link
                  to={`/contact?interest=${encodeURIComponent(project.ctaPreselect)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold bg-kuvuna-amber text-kuvuna-navy hover:bg-kuvuna-amber-hover transition-colors shadow-sm"
                >
                  <span>Need a solution like this? Talk to us</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>

      <CatchAllBanner />
    </div>
  );
};
