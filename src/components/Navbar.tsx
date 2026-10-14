'use client';

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070c]/85 backdrop-blur-md border-b border-[#1b2438]/80 shadow-2xl shadow-black/50 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#"
          className="group flex items-center gap-2.5 text-white font-medium focus:outline-none focus:ring-2 focus:ring-[#00f59b] rounded-lg px-1 py-0.5"
          aria-label="S. Abhiram Portfolio Home"
        >
          <div className="w-8 h-8 rounded-lg bg-[#090d16] border border-[#00f59b]/40 flex items-center justify-center text-[#00f59b] group-hover:border-[#00f59b] group-hover:shadow-[0_0_12px_rgba(0,245,155,0.4)] transition-all">
            <span className="font-mono text-xs font-bold tracking-tighter">SA</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white group-hover:text-[#00f59b] transition-colors">
              S. Abhiram
            </span>
            <span className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase">
              Developer & AI Intern
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-[#090d16]/80 border border-[#1b2438] px-3 py-1.5 rounded-full shadow-inner">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00f59b] ${
                  isActive
                    ? 'text-[#00f59b] bg-[#00f59b]/10'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/40'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#00f59b] rounded-full shadow-[0_0_6px_#00f59b]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons & Socials */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg bg-[#090d16] border border-[#1b2438] text-neutral-300 hover:text-[#00f59b] hover:border-[#00f59b]/40 hover:shadow-[0_0_10px_rgba(0,245,155,0.2)] transition-all focus:outline-none focus:ring-2 focus:ring-[#00f59b]"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg bg-[#090d16] border border-[#1b2438] text-neutral-300 hover:text-[#00d2ff] hover:border-[#00d2ff]/40 hover:shadow-[0_0_10px_rgba(0,210,255,0.2)] transition-all focus:outline-none focus:ring-2 focus:ring-[#00d2ff]"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#00f59b] text-[#05070c] font-semibold text-xs hover:bg-[#00ffb2] hover:shadow-[0_0_20px_rgba(0,245,155,0.4)] transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span>Explore Work</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg bg-[#090d16] border border-[#1b2438] text-neutral-300 hover:text-[#00f59b] focus:outline-none focus:ring-2 focus:ring-[#00f59b]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070a12] border-b border-[#1b2438] px-4 pt-4 pb-6 space-y-3 mt-2 shadow-2xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:text-[#00f59b] hover:bg-[#0f1523] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#1b2438] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0f1523] text-neutral-300 hover:text-[#00f59b]"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0f1523] text-neutral-300 hover:text-[#00d2ff]"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-1.5 rounded-lg bg-[#00f59b] text-[#05070c] font-semibold text-xs"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
