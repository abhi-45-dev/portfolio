'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { GraduationCap, Award, BookOpen, Layers, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  const { education, credential, profile } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 relative border-t border-[#1b2438]/60 bg-[#060910]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#090d16] border border-[#1b2438] text-xs font-mono text-[#00f59b] mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // ABOUT & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering with First-Principles Rigor
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
            Bridging autonomous agent workflows, distributed backend logic, and structured database systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: First-Person Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-[#090d16] border border-[#1b2438] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f59b]/5 rounded-bl-full pointer-events-none" />

              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#00f59b]" />
                <span>Background & Engineering Approach</span>
              </h3>

              <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
                {profile.about.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Focus Pillars */}
              <div className="mt-8 pt-6 border-t border-[#1b2438] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0f1523]/60 border border-[#1b2438]/70">
                  <div className="p-2 rounded-lg bg-[#00f59b]/10 text-[#00f59b] shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">Agentic AI & RAG</h4>
                    <p className="text-xs text-neutral-400 mt-1">Multi-agent LangGraph workflows, contextual guideline retrieval, AST inspection.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0f1523]/60 border border-[#1b2438]/70">
                  <div className="p-2 rounded-lg bg-[#00d2ff]/10 text-[#00d2ff] shrink-0 mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">Relational Systems & APIs</h4>
                    <p className="text-xs text-neutral-400 mt-1">Normalized schema design, foreign keys, FastAPI microservices, and integrity constraints.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education & IBM Certification */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-[#090d16] border border-[#1b2438] relative overflow-hidden">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#00f59b]/10 text-[#00f59b] border border-[#00f59b]/20">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Formal Education</span>
                    <h4 className="text-base font-bold text-white">{education.institution}</h4>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm font-semibold text-[#00f59b]">
                  {education.degree} in {education.program}
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  {education.verifiedDetails}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1b2438]">
                <div className="text-xs font-mono text-neutral-400 mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#00d2ff]" />
                  <span>Key Completed Coursework:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {education.coursework.map((course) => (
                    <span 
                      key={course}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#0f1523] border border-[#1b2438] text-neutral-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* IBM Agentic AI Credential Card */}
            <div className="p-6 rounded-2xl bg-[#090d16] border border-[#1b2438] relative overflow-hidden">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#00d2ff]/10 text-[#00d2ff] border border-[#00d2ff]/20">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Professional Credential</span>
                    <h4 className="text-base font-bold text-white">{credential.issuer}</h4>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#00f59b]/10 border border-[#00f59b]/30 text-[10px] font-mono text-[#00f59b] font-medium">
                  {credential.status}
                </span>
              </div>

              <div className="mb-4">
                <h5 className="text-sm font-semibold text-white">
                  {credential.title}
                </h5>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mt-1">
                  <span>{credential.period}</span>
                  <span>•</span>
                  <span>{credential.format}</span>
                </div>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  {credential.note}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1b2438]">
                <div className="text-xs font-mono text-neutral-400 mb-2">
                  Verified Curriculum Focus:
                </div>
                <div className="space-y-1.5">
                  {credential.skillsCovered.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00f59b] shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
