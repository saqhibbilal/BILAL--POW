
import React, { useState, useEffect } from 'react';
import {
  PROJECTS,
  SOCIAL_LINKS,
  TECH_ARSENAL,
  WORK_EXPERIENCE,
  HACKATHONS,
  EDUCATION,
  // OPEN_SOURCE,
  NAVIGATION
} from './constants';
import { ExternalLink, Code2, Database, Brain, Globe, TrendingUp, Layers, BarChart4, Microscope, Globe2, Terminal, Cpu, Activity, Zap, X } from 'lucide-react';

const SectionHeader: React.FC<{ title: string; id: string }> = ({ title, id }) => (
  <div className="mb-8 mt-12 md:mt-24 border-b border-black/10 pb-4 scroll-mt-24" id={id}>
    <h2 className="font-heading text-xl md:text-3xl font-extrabold tracking-tight">{title}</h2>
  </div>
);

const ProjectCard: React.FC<{ project: any; badge?: string; onClick: () => void }> = ({ project, badge, onClick }) => (
  <div className="group relative h-full cursor-pointer" onClick={onClick}>
    <div className="polaroid h-full flex flex-col transition-all duration-300 group-hover:-rotate-1 group-hover:scale-[1.01] hover:shadow-xl">
      <div className="aspect-[16/10] w-full overflow-hidden mb-4 bg-gray-100 border border-gray-100 rounded-sm shrink-0 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          loading="lazy"
        />
        {badge && (
          <div className="absolute top-2 right-2 bg-black text-white font-mono text-[8px] px-2 py-1 uppercase tracking-widest rounded-sm shadow-md">
            {badge}
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-heading text-lg font-bold leading-tight">{project.title}</h3>
          <div className="p-2 -mt-2 -mr-2 opacity-30 hover:opacity-100 transition-opacity shrink-0">
            <ExternalLink size={14} />
          </div>
        </div>

        <p className="text-xs opacity-60 line-clamp-4 leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span key={tag} className="font-mono text-[8px] px-2 py-0.5 bg-black/5 rounded-full uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Modal: React.FC<{ item: any; badge?: string; onClose: () => void }> = ({ item, badge, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/40 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="polaroid max-w-3xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black text-white rounded-full hover:scale-110 transition-transform z-10"
        >
          <X size={18} />
        </button>

        <div className="aspect-[16/9] w-full overflow-hidden mb-6 bg-gray-100 border border-gray-100 rounded-sm relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          {badge && (
            <div className="absolute top-4 left-4 bg-black text-white font-mono text-[10px] px-3 py-1.5 uppercase tracking-widest rounded-sm shadow-lg">
              {badge}
            </div>
          )}
        </div>

        <div className="px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-6">
            <h2 className="font-heading text-xl md:text-3xl font-black leading-tight">{item.title}</h2>
            {item.year && <span className="font-mono text-[10px] md:text-xs opacity-40">{item.year}</span>}
          </div>

          <div className="space-y-6">
            <div className="prose prose-sm max-w-none">
              <p className="text-sm md:text-base opacity-80 leading-relaxed whitespace-pre-wrap">
                {item.description}
              </p>
            </div>

            <div className="pt-6 border-t border-black/5">
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-3">Technical Stack // Metadata</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag: string) => (
                  <span key={tag} className="font-mono text-[10px] px-3 py-1 bg-black/5 rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<{ item: any; badge?: string } | null>(null);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    NAVIGATION.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen selection:bg-black selection:text-white pb-20 overflow-x-hidden relative bg-[#f1f1ef]">

      {selectedItem && (
        <Modal
          item={selectedItem.item}
          badge={selectedItem.badge}
          onClose={() => setSelectedItem(null)}
        />
      )}

      <nav
        className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-1 z-50 group/nav py-4 pr-2"
        aria-label="Table of contents"
      >
        <div className="mb-4 text-right">
          <p className="font-mono text-[12px] uppercase tracking-widest opacity-20">System Index</p>
        </div>
        {NAVIGATION.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => handleNavClick(e, section.id)}
            className="flex items-center gap-4 transition-all duration-300 py-0.5 pl-8 group/item cursor-pointer"
          >
            <span className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap select-none
              ${activeSection === section.id
                ? 'opacity-100 translate-x-0 font-bold text-black'
                : 'opacity-0 translate-x-4 pointer-events-none group-hover/nav:opacity-40 group-hover/nav:translate-x-0 group-hover/item:opacity-100 group-hover/item:text-black group-hover/nav:pointer-events-auto'
              }`}>
              {section.label}
            </span>
            <div className={`w-[2px] transition-all duration-500 rounded-full
              ${activeSection === section.id
                ? 'bg-black h-4 scale-x-150'
                : 'bg-black/10 h-2 group-hover/nav:bg-black/20 group-hover/item:bg-black/60 group-hover/item:h-4'
              }`}
            />
          </a>
        ))}
      </nav>

      <div className="fixed bottom-8 left-8 hidden lg:flex flex-col gap-4 z-40">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/70 backdrop-blur-md border border-black/5 hover:border-black/20 hover:bg-white rounded-full shadow-sm transition-all hover:-translate-y-1 active:scale-95"
            title={link.name}
          >
            {React.cloneElement(link.icon as React.ReactElement, { size: 18 })}
          </a>
        ))}
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-16 md:pt-32">
        <header className="mb-16 md:mb-32">
          <div className="inline-block mb-6 px-4 py-1 border border-black/10 rounded-full">
            <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.3em] opacity-40">Applied Intelligence & Systems Engineering</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-7xl md:text-9xl font-black leading-[0.85] mb-8 md:mb-12">
            MOHAMMED BILAL.
          </h1>
          <p className="font-mono text-xs md:text-xl opacity-70 max-w-3xl leading-relaxed mb-12">
            Software Engineer specializing in ML Systems and Distributed Infrastructure. Bridging the gap between high-performance distributed backends and efficient ML inference artifacts.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 py-8 border-y border-black/10">
            {[
              { icon: <Layers size={16} />, label: 'Distributed Systems' },
              { icon: <Brain size={16} />, label: 'ML Systems' },
              { icon: <Zap size={16} />, label: 'Inference Opt.' },
              { icon: <Terminal size={16} />, label: 'Backend Arch.' },
              { icon: <Cpu size={16} />, label: 'Systems Eng.' },
              { icon: <Database size={16} />, label: 'Data Pipelines' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="opacity-30">{item.icon}</div>
                <span className="text-[10px] font-mono uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </header>

        <div className="space-y-24">
          {/* Tech Arsenal Section */}
          <section id="tech-arsenal" className="scroll-mt-24">
            <SectionHeader title="Tech Arsenal" id="tech-arsenal" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TECH_ARSENAL.map((group) => (
                <div key={group.category} className="polaroid p-6">
                  <h3 className="font-heading text-sm font-bold mb-4 opacity-40">{group.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="font-mono text-[10px] px-2 py-1 bg-black/5 rounded-sm uppercase tracking-wider border border-black/5">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Work Experience Section */}
          <section id="work-experience" className="scroll-mt-24">
            <SectionHeader title="Work Experience" id="work-experience" />
            <div className="space-y-6 md:space-y-8">
              {WORK_EXPERIENCE.map((job, i) => (
                <div key={i} className="polaroid p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">
                  <div className="md:w-1/3">
                    <h3 className="font-heading text-lg md:text-xl font-bold">{job.company}</h3>
                    <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-40 mt-1">{job.role}</p>
                    <p className="font-mono text-[9px] md:text-[10px] mt-4 opacity-60">{job.period}</p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-xs md:text-sm opacity-70 leading-relaxed mb-6">{job.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {job.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-black rounded-full opacity-20" />
                          <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest opacity-60">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-24">
            <SectionHeader title="Projects" id="projects" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedItem({ item: project })}
                />
              ))}
            </div>
          </section>

          {/* Hackathons Section */}
          <section id="hackathons" className="scroll-mt-24">
            <SectionHeader title="Hackathons" id="hackathons" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {HACKATHONS.map((h) => (
                <ProjectCard
                  key={h.id}
                  project={h}
                  badge={h.rank}
                  onClick={() => setSelectedItem({ item: h, badge: h.rank })}
                />
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="scroll-mt-24">
            <SectionHeader title="Education" id="education" />
            <div className="space-y-6 md:space-y-8">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="polaroid p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 hover:shadow-lg transition-all duration-300">
                  <div className="md:w-1/3">
                    <h3 className="font-heading text-lg md:text-xl font-bold">{edu.institution}</h3>
                    <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest opacity-40 mt-1">{edu.degree}</p>
                    <p className="font-mono text-[9px] md:text-[10px] mt-4 opacity-60">{edu.period}</p>
                    <p className="font-mono text-[9px] md:text-[10px] mt-1 opacity-40">{edu.location}</p>
                  </div>
                  <div className="md:w-2/3">
                    <div className="mb-6">
                      <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-3">Key Coursework</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span key={course} className="font-mono text-[10px] px-2 py-1 bg-black/5 rounded-sm uppercase tracking-wider border border-black/5">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {edu.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-black rounded-full opacity-20" />
                          <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest opacity-60">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <footer className="pt-24 pb-16 border-t border-black/10 text-center">
          <div className="flex justify-center gap-6 mb-8 lg:hidden">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-40 hover:opacity-100 transition-opacity"
                title={link.name}
              >
                {React.cloneElement(link.icon as React.ReactElement, { size: 20 })}
              </a>
            ))}
          </div>
          <p className="font-mono text-[8px] md:text-[10px] opacity-20 uppercase tracking-[0.5em] mb-4">
            SYSTEM_REPORT_V6.0 // MOHAMMED BILAL &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </main>

      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-black/[0.01] blur-[150px] rounded-full -z-10 pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-black/[0.01] blur-[100px] rounded-full -z-10 pointer-events-none"></div>
    </div>
  );
};



export default App;
