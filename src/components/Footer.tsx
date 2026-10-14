'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { ArrowUp, Code2, Sparkles } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040609] border-t border-[#1b2438] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#1b2438]/80">
          
          {/* Left: Branding & Status */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-md bg-[#090d16] border border-[#00f59b]/50 flex items-center justify-center text-[#00f59b] font-mono text-xs font-bold">
                SA
              </div>
              <span className="font-semibold text-white tracking-tight text-sm">
                S. Abhiram
              </span>
            </div>

            <p className="text-xs text-neutral-400 max-w-sm">
              Student developer building intelligent agentic pipelines, relational backends, and practical software.
            </p>

            <div className="inline-flex items-center gap-2 mt-3 text-xs font-mono text-[#00f59b]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f59b] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f59b]"></span>
              </span>
              <span>Available for 2026/2027 Engineering Opportunities</span>
            </div>
          </div>

          {/* Right: Quick Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg bg-[#090d16] border border-[#1b2438] text-neutral-400 hover:text-[#00f59b] transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-[#090d16] border border-[#1b2438] text-neutral-400 hover:text-[#00d2ff] transition-colors"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="p-2 rounded-lg bg-[#090d16] border border-[#1b2438] text-neutral-400 hover:text-white transition-colors"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © 2026 S. Abhiram. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5 text-[#00f59b]" />
            <span>Built with Next.js, React, Three.js & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
