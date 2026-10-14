'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Mail, Send, CheckCircle2, ArrowUpRight, Copy, Check } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from '@/components/SocialIcons';

export default function Contact() {
  const { profile } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Create mailto fallback or simulated client submission
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;

    setIsSubmitted(true);
  };

  const copyProfileLink = () => {
    navigator.clipboard.writeText(profile.linkedin);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#060910] border-t border-[#1b2438]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#090d16] border border-[#1b2438] text-xs font-mono text-[#00f59b] mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>05 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Connect & Collaborate
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
            Available for software engineering internships, AI agent development, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Profile Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#090d16] border border-[#1b2438]">
              <h3 className="text-lg font-bold text-white mb-2">
                Professional Channels
              </h3>
              <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                Connect directly through verified social and developer profiles for technical queries, internship interviews, or code review discussions.
              </p>

              <div className="space-y-4">
                {/* LinkedIn Card */}
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-[#0f1523] border border-[#1b2438] hover:border-[#00d2ff]/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#00d2ff]/10 text-[#00d2ff]">
                      <LinkedInIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-neutral-400 uppercase">LinkedIn</div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#00d2ff] transition-colors">
                        S. Abhiram
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#00d2ff] transition-colors" />
                </a>

                {/* GitHub Card */}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-[#0f1523] border border-[#1b2438] hover:border-[#00f59b]/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#00f59b]/10 text-[#00f59b]">
                      <GitHubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-neutral-400 uppercase">GitHub</div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#00f59b] transition-colors">
                        abhi-45-dev
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#00f59b] transition-colors" />
                </a>
              </div>

              {/* Quick Copy Link */}
              <div className="mt-6 pt-6 border-t border-[#1b2438] flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">Share Profile:</span>
                <button
                  onClick={copyProfileLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0f1523] border border-[#1b2438] text-xs font-mono text-neutral-300 hover:text-white"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00f59b]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy LinkedIn Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Target Roles Card */}
            <div className="p-6 rounded-2xl bg-[#090d16] border border-[#1b2438]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                Targeted Opportunities
              </h4>
              <div className="flex flex-wrap gap-2">
                {profile.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#0f1523] border border-[#1b2438] text-[#00f59b]"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#090d16] border border-[#1b2438]">
              <h3 className="text-lg font-bold text-white mb-2">
                Direct Message
              </h3>
              <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                Send a project inquiry, interview invitation, or general engineering question. Launches your mail client directly with your message pre-filled.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-xl bg-[#00f59b]/10 border border-[#00f59b]/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#00f59b]/20 text-[#00f59b] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Message Ready</h4>
                  <p className="text-xs text-neutral-300 max-w-sm mx-auto leading-relaxed">
                    Your email client has been opened with your message. You can also reach out directly via LinkedIn anytime.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-[#00f59b] text-[#05070c] font-semibold text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jane Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#05070c] border border-[#1b2438] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#00f59b] focus:ring-1 focus:ring-[#00f59b] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#05070c] border border-[#1b2438] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#00f59b] focus:ring-1 focus:ring-[#00f59b] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. AI Internship Opportunity / Technical Collaboration"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#05070c] border border-[#1b2438] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#00f59b] focus:ring-1 focus:ring-[#00f59b] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                      Message Content *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your team, project scope, or opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#05070c] border border-[#1b2438] text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#00f59b] focus:ring-1 focus:ring-[#00f59b] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00f59b] text-[#05070c] font-semibold text-sm hover:bg-[#00ffb2] hover:shadow-[0_0_20px_rgba(0,245,155,0.4)] transition-all active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
