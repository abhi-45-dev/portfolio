'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ProjectModal from '@/components/ProjectModal';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleOpenAurisegCaseStudy = () => {
    // Find the code-review-agent project
    const aurisegProject = PORTFOLIO_DATA.projects.find((p) => p.id === 'code-review-agent');
    if (aurisegProject) {
      setSelectedProject(aurisegProject);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#05070c] text-white selection:bg-[#00f59b] selection:text-[#05070c]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience onOpenCaseStudy={handleOpenAurisegCaseStudy} />
        <Projects onSelectProject={handleOpenProject} />
        <Skills />
        <Contact />
      </main>

      <Footer />

      {/* Deep-Dive Technical Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
