import React from 'react';
import Link from 'next/link';
import { Terminal, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#05070c] text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00f59b]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-md w-full p-8 rounded-2xl bg-[#090d16] border border-[#1b2438] text-center shadow-2xl z-10">
        <div className="w-12 h-12 rounded-xl bg-[#00f59b]/10 border border-[#00f59b]/30 text-[#00f59b] flex items-center justify-center mx-auto mb-4">
          <Terminal className="w-6 h-6" />
        </div>

        <div className="text-xs font-mono text-[#00f59b] uppercase tracking-widest mb-1">
          Error 404 // Coordinate Out Of Bounds
        </div>

        <h1 className="text-3xl font-bold text-white tracking-tight mb-3">
          Page Not Found
        </h1>

        <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
          The requested system node or route does not exist in this architecture.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#00f59b] text-[#05070c] font-semibold text-xs hover:bg-[#00ffb2] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
