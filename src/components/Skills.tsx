'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Cpu, Terminal, CheckCircle2, Compass, Wrench, Database, Code2, Sparkles } from 'lucide-react';

export default function Skills() {
  const { skillCategories } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-20 relative bg-[#05070c] border-t border-[#1b2438]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#090d16] border border-[#1b2438] text-xs font-mono text-[#00f59b] mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>04 // TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Verified Technical Skills Matrix
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
            Derived directly from hands-on production code, internship projects, and academic software engineering.
          </p>

          {/* Status Legend */}
          <div className="flex items-center gap-4 mt-4 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00f59b]" />
              <span className="text-neutral-300">Completed in Production / Projects</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#a855f7]" />
              <span className="text-neutral-400">Currently Exploring</span>
            </div>
          </div>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-[#090d16] border border-[#1b2438] flex flex-col justify-between hover:border-[#1b2438]/80 transition-all"
            >
              <div>
                <h3 className="text-base font-bold text-white tracking-tight flex items-center justify-between">
                  <span>{category.title}</span>
                  <span className="text-xs font-mono text-neutral-400">
                    {category.skills.length} skills
                  </span>
                </h3>
                <p className="text-xs text-neutral-400 mt-1 mb-5">
                  {category.description}
                </p>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill) => {
                    const isCompleted = skill.level === 'Completed Project';
                    return (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-[#0f1523]/60 border border-[#1b2438]/80 hover:border-[#00f59b]/30 transition-all"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-white">
                            {skill.name}
                          </span>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                              isCompleted
                                ? 'bg-[#00f59b]/10 text-[#00f59b] border border-[#00f59b]/30'
                                : 'bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/30'
                            }`}
                          >
                            {isCompleted ? 'Completed' : 'Exploring'}
                          </span>
                        </div>
                        {skill.highlight && (
                          <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
                            {skill.highlight}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
