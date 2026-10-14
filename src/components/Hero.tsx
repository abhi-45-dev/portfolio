'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import Hero3D from './Hero3D';
import { ArrowRight, ShieldCheck, Sparkles, Terminal, Cpu } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      {/* Radial Gradient Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#00f59b]/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#00d2ff]/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Verified Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#090d16] border border-[#1b2438] text-xs font-mono mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f59b] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f59b]"></span>
              </span>
              <span className="text-neutral-300">
                AI Intern @ Auriseg • B.Tech CSE @ VIT
              </span>
            </div>

            {/* Candidate Name */}
            <div className="mb-2">
              <h2 className="text-sm font-mono tracking-widest text-[#00f59b] uppercase font-semibold">
                {PORTFOLIO_DATA.profile.name}
              </h2>
            </div>

            {/* Master Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
              Building intelligent systems.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f59b] via-[#00d2ff] to-[#a855f7]">
                Turning ideas into software.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl font-normal leading-relaxed mb-8">
              {PORTFOLIO_DATA.profile.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#00f59b] text-[#05070c] font-semibold text-sm hover:bg-[#00ffb2] hover:shadow-[0_0_25px_rgba(0,245,155,0.4)] transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#090d16] border border-[#1b2438] text-white font-medium text-sm hover:border-[#00f59b]/50 hover:bg-[#0f1523] transition-all focus:outline-none focus:ring-2 focus:ring-[#00f59b]"
              >
                <span>Connect With Me</span>
              </a>
            </div>

            {/* Verified External Profiles */}
            <div className="flex items-center gap-6 pt-6 border-t border-[#1b2438]/80 w-full">
              <div className="text-xs font-mono text-neutral-400">
                Verified Profiles:
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_DATA.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-[#00f59b] transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span className="font-mono">github.com/abhi-45-dev</span>
                </a>
                <span className="text-neutral-700">•</span>
                <a
                  href={PORTFOLIO_DATA.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-[#00d2ff] transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span className="font-mono">LinkedIn Profile</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Computational Object */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[480px]">
              
              {/* Decorative Corner Framing */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00f59b]/40 pointer-events-none z-20" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00f59b]/40 pointer-events-none z-20" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00f59b]/40 pointer-events-none z-20" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00f59b]/40 pointer-events-none z-20" />

              {/* Subdued Backdrop Card */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#090d16]/70 to-[#05070c]/90 border border-[#1b2438]/60 shadow-2xl backdrop-blur-sm pointer-events-none" />

              {/* Real 3D Three.js Object */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <Hero3D />
              </div>

              {/* Interactive Hint */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#05070c]/80 border border-[#1b2438] text-[10px] font-mono text-neutral-400">
                <Cpu className="w-3 h-3 text-[#00f59b]" />
                <span>Interactive 3D • Move cursor to inspect</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
