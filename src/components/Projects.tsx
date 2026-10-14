'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';
import { FolderGit2, ExternalLink, ArrowUpRight, CheckCircle2, Layers, Cpu, Database, Sparkles, Filter } from 'lucide-react';
import { GitHubIcon } from '@/components/SocialIcons';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES = ['All', 'AI & Agents', 'Backend & DBMS', 'Systems & Web'] as const;

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<typeof CATEGORIES[number]>('All');

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 relative bg-[#060910] border-t border-[#1b2438]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#090d16] border border-[#1b2438] text-xs font-mono text-[#00f59b] mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03 // PROJECT REPOSITORY PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Verified Technical Projects
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Production code, calibrated machine learning engines, and relational database systems backed by source code.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#090d16] p-1.5 rounded-xl border border-[#1b2438]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#00f59b] text-[#05070c] font-bold shadow-[0_0_12px_rgba(0,245,155,0.3)]'
                    : 'text-neutral-400 hover:text-white hover:bg-[#0f1523]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group flex flex-col justify-between rounded-2xl bg-[#090d16] border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                project.featured
                  ? 'border-[#00f59b]/30 hover:border-[#00f59b]/60'
                  : 'border-[#1b2438] hover:border-neutral-600'
              }`}
            >
              <div className="p-6 sm:p-7">
                
                {/* Card Top Metadata */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#0f1523] border border-[#1b2438] text-[#00d2ff]">
                    {project.category}
                  </span>
                  
                  {project.featured && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00f59b]/10 text-[#00f59b] border border-[#00f59b]/30 font-semibold flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#00f59b] transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Problem Statement Snippet */}
                <div className="mt-4 pt-4 border-t border-[#1b2438]/80">
                  <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                    Problem & Focus:
                  </div>
                  <p className="text-xs text-neutral-300 line-clamp-3 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Key Verified Features */}
                <div className="mt-4 pt-4 border-t border-[#1b2438]/80">
                  <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-2">
                    Key Features:
                  </div>
                  <ul className="space-y-1.5">
                    {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00f59b] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0f1523] border border-[#1b2438] text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-neutral-400">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 sm:px-7 sm:pb-6 pt-0 flex items-center justify-between border-t border-[#1b2438]/80 mt-4">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00f59b] hover:underline font-medium"
                >
                  <span>Technical Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="p-2 rounded-lg bg-[#0f1523] border border-[#1b2438] text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
