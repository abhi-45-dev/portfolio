'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Briefcase, Calendar, MapPin, ExternalLink, ArrowRight, CheckCircle, Code, ShieldAlert, Cpu, Database, FileText } from 'lucide-react';

interface ExperienceProps {
  onOpenCaseStudy: () => void;
}

export default function Experience({ onOpenCaseStudy }: ExperienceProps) {
  const exp = PORTFOLIO_DATA.featuredExperience;

  return (
    <section id="experience" className="py-20 relative bg-[#05070c] border-t border-[#1b2438]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#090d16] border border-[#1b2438] text-xs font-mono text-[#00f59b] mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>02 // FEATURED WORK EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Industry Internship Experience
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
            Production AI agent engineering, multilingual repository parsing, and automated architectural quality pipelines.
          </p>
        </div>

        {/* Featured Internship Card */}
        <div className="relative rounded-2xl bg-[#090d16] border border-[#1b2438] p-6 sm:p-8 lg:p-10 overflow-hidden shadow-2xl">
          {/* Accent Glow */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#00f59b]/5 rounded-br-full pointer-events-none" />

          {/* Top Banner: Role & Company Details */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#1b2438]">
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {exp.company}
                </h3>
                <span className="px-3 py-0.5 rounded-full bg-[#00f59b]/10 border border-[#00f59b]/30 text-xs font-mono text-[#00f59b]">
                  {exp.arrangement}
                </span>
              </div>
              <div className="text-lg font-medium text-[#00f59b] mt-1">
                {exp.role}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-neutral-400" />
                <span>{exp.period}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-neutral-400" />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="py-6 border-b border-[#1b2438]">
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {exp.summary}
            </p>
          </div>

          {/* Responsibilities & Architecture Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 border-b border-[#1b2438]">
            
            {/* Responsibilities List */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#00d2ff] font-semibold flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>Core Engineering Responsibilities</span>
              </h4>
              <ul className="space-y-3">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-[#00f59b] shrink-0 mt-1" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RAG Core Pipeline Flow Diagram */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-xl bg-[#0f1523]/70 border border-[#1b2438]">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#00f59b] font-semibold flex items-center gap-2 mb-4">
                  <Database className="w-4 h-4" />
                  <span>RAG Execution Pipeline</span>
                </h4>
                <div className="space-y-2.5">
                  {exp.ragWorkflow.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs">
                      <span className="font-mono text-[#00f59b] font-semibold shrink-0">
                        {item.step.slice(0, 3)}
                      </span>
                      <div>
                        <span className="font-semibold text-white">{item.step.slice(4)}: </span>
                        <span className="text-neutral-400">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Case Study Trigger */}
              <div className="mt-6 pt-4 border-t border-[#1b2438]">
                <button
                  onClick={onOpenCaseStudy}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#00f59b]/10 border border-[#00f59b]/30 text-xs font-mono text-[#00f59b] hover:bg-[#00f59b] hover:text-[#05070c] transition-all font-semibold"
                >
                  <FileText className="w-4 h-4" />
                  <span>Inspect Architecture & Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Verified Technologies & Public Project Link */}
          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-neutral-400 mr-2">Verified Stack:</span>
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#0f1523] border border-[#1b2438] text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={exp.verifiedRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-[#00f59b] transition-colors shrink-0"
            >
              <span>Repository Reference</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
