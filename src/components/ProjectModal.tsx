'use client';

import React, { useEffect } from 'react';
import { Project, PORTFOLIO_DATA } from '@/data/portfolioData';
import { X, ExternalLink, CheckCircle2, Shield, AlertTriangle, Layers, Database, Cpu, Compass, BookOpen } from 'lucide-react';
import { GitHubIcon } from '@/components/SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#090d16] border border-[#1b2438] rounded-2xl shadow-2xl p-6 sm:p-8 z-10 text-left">
        
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#1b2438]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#00f59b]/10 text-[#00f59b] border border-[#00f59b]/30">
                {project.category}
              </span>
              <span className="text-xs font-mono text-neutral-400">
                {project.status}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-neutral-400 text-sm mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg bg-[#0f1523] border border-[#1b2438] text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Technical Highlights Bar */}
        {project.technicalHighlights && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            {project.technicalHighlights.map((th) => (
              <div key={th.label} className="p-3 rounded-xl bg-[#0f1523] border border-[#1b2438]">
                <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">{th.label}</div>
                <div className="text-xs font-semibold text-white mt-0.5 font-mono">{th.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Problem & Contribution */}
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00d2ff] font-semibold flex items-center gap-2">
              <Compass className="w-4 h-4" />
              <span>Problem Statement & Context</span>
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed bg-[#05070c] p-4 rounded-xl border border-[#1b2438]">
              {project.problem}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00f59b] font-semibold flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>My Engineering Contribution</span>
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed bg-[#05070c] p-4 rounded-xl border border-[#1b2438]">
              {project.contribution}
            </p>
          </div>

          {/* Architecture Details if present */}
          {project.architectureSummary && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#a855f7] font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Architecture Summary</span>
              </h4>
              <div className="text-xs font-mono p-4 rounded-xl bg-[#0f1523] border border-[#1b2438] text-neutral-300 leading-relaxed">
                {project.architectureSummary}
              </div>
            </div>
          )}

          {/* Implemented Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00f59b]" />
              <span>Implemented Features (Verified)</span>
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 bg-[#0f1523]/50 p-3 rounded-lg border border-[#1b2438]/80">
                  <span className="font-mono text-[#00f59b] font-bold">{idx + 1}.</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Planned Features (Strictly separated for CrisisOS) */}
          {project.plannedFeatures && project.plannedFeatures.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Planned Features / Roadmap (Not Implemented)</span>
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {project.plannedFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-400 bg-amber-500/5 p-3 rounded-lg border border-amber-500/20">
                    <span className="font-mono text-amber-400">•</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div className="pt-4 border-t border-[#1b2438]">
            <div className="text-xs font-mono text-neutral-400 mb-2">Verified Technologies:</div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded-md bg-[#0f1523] border border-[#1b2438] text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-[#1b2438] flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00f59b] text-[#05070c] font-semibold text-xs hover:bg-[#00ffb2] transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>View Source on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-[#0f1523] border border-[#1b2438] text-xs font-medium text-neutral-300 hover:text-white"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
