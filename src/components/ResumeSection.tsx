import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, AnimatePresence } from 'framer-motion';
import { 
  Code, Database, Globe, Briefcase, Gamepad2, Calendar, MapPin, Zap, 
  Layers, Smartphone, Terminal, Activity, Shield, Cpu, Rocket, 
  Wifi, BarChart3, Crosshair, Award, ChevronRight 
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

/**
 * Tactical Command Hub: Premium Career & Production Section
 * Features 3D holographic project modules, animated border-beams, and diagnostic HUDs.
 */

const ResumeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const gridY = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const productionProjects = [
    {
      type: "mobile",
      icon: Gamepad2,
      name: "Blame Game",
      tagline: "High-Performance VR/Mobile",
      description: "Engineered and published 'Blame Game' on the Google Play Store, featuring optimized gameplay mechanics and immersive UI architecture.",
      metrics: { status: "PROD-ACTIVE", build: "STABLE v3.1", uptime: "99.9%" },
      coord: "24.2185° N, 55.2272° E"
    },
    {
      type: "mobile",
      icon: Smartphone,
      name: "Mivadodra",
      tagline: "Real-time EdTech Neural",
      description: "Architected 'Mivadodra', a production-ready school attendance management application live on the Play Store, streamlining administrative workflows.",
      metrics: { status: "LIVE", build: "v2.0.4", latency: "<40ms" },
      coord: "25.0744° N, 55.1887° E"
    },
    {
      type: "laptop",
      icon: Globe,
      name: "Complaint Hub",
      tagline: "Enterprise Web Matrix",
      description: "Delivered bespoke enterprise solutions including the 'Complaint Hub' platform, specializing in high-performance system integrations and fluid frontend architectures.",
      metrics: { status: "SECURE", build: "v1.5-LTS", nodes: "12-GLOBAL" },
      coord: "25.2048° N, 55.2708° E"
    }
  ];

  const experiences = [
    {
      role: "Game Developer Intern",
      company: "Futurebits",
      type: "Internship",
      duration: "Jan 2026 - Present",
      location: "Dubai, UAE (Remote)",
      description: "Developing React Native and IoT projects, improving UI, performance, and integrations for innovative gaming and hardware experiences.",
      skills: ["React Native", "IoT", "UI/UX", "System Integration", "Front-End Design"],
      icon: Gamepad2
    },
    {
      role: "App Developer (Freelance)",
      company: "Freelance",
      type: "Remote",
      duration: "Jul 2025 - Jan 2026",
      location: "Remote",
      description: "Delivering custom web, mobile, and software solutions using a diverse stack including React, Node, Laravel, and Kotlin. Focused on scalability and CI/CD integration.",
      skills: ["React", "Node.js", "Laravel", "Kotlin", "Computer Vision", "CI/CD", "Cloud Tools"],
      icon: Briefcase
    }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-black relative overflow-hidden" id="experience">
      <div className="absolute inset-0 noise-overlay opacity-[0.02] z-[99] pointer-events-none" />
      <motion.div style={{ y: gridY }} className="absolute inset-0 perspective-grid z-0 opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-portfolio-indigo/5 via-transparent to-transparent z-0 pointer-events-none blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-portfolio-indigo/10 border border-portfolio-indigo/20 text-portfolio-indigo text-xs font-bold tracking-widest uppercase mb-8">
            <Activity className="w-4 h-4" /> Professional Journey
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight uppercase mb-8">
             Career <span className="text-portfolio-indigo">Roadmap</span>
          </h2>
        </motion.div>

        <div className="relative mb-60">
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5">
            <motion.div style={{ scaleY: pathLength, originY: 0 }} className="w-full h-full bg-gradient-to-b from-portfolio-indigo via-portfolio-sky to-portfolio-indigo shadow-[0_0_20px_rgba(99,102,241,0.5)]" />
          </div>

          <div className="space-y-32">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* --- TACTICAL COMMAND HUB --- */}
        <div className="mt-60 relative">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="text-center mb-24"
           >
              <h3 className="text-5xl md:text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-4">
                Production <span className="text-portfolio-indigo text-glow">Matrix</span>
              </h3>
              <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] font-mono">Deployment Console • Operation: Active</p>
           </motion.div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-20">
              {productionProjects.map((proj, idx) => (
                <ProjectCommandCard key={idx} project={proj} index={idx} />
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceItem = ({ exp, index }: { exp: any, index: number }) => (
  <div className={`relative flex items-center justify-between md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} flex-row`}>
    <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
      <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} className="w-12 h-12 rounded-full bg-black border-2 border-portfolio-indigo flex items-center justify-center relative z-20 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
        <exp.icon className="w-5 h-5 text-portfolio-indigo" />
      </motion.div>
    </div>

    <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} className="w-full md:w-[45%] ml-16 md:ml-0">
      <div className="group p-8 rounded-[2rem] bg-portfolio-navy/10 backdrop-blur-3xl border border-white/5 hover:border-portfolio-indigo/30 transition-all duration-700 relative overflow-hidden">
        <div className="absolute h-px w-full top-0 left-0 bg-gradient-to-r from-transparent via-portfolio-indigo/40 to-transparent group-hover:scale-x-110 transition-transform duration-700" />
        
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
           <h4 className="text-2xl font-bold text-white group-hover:text-portfolio-indigo transition-colors">{exp.role}</h4>
           <Badge variant="outline" className="text-[10px] uppercase tracking-widest border-portfolio-indigo/40 text-portfolio-indigo px-3">{exp.type}</Badge>
        </div>

        <div className="space-y-4 mb-6">
           <div className="flex items-center gap-3 text-portfolio-indigo/80">
              <Briefcase className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">{exp.company}</span>
           </div>
           <div className="flex items-center gap-6 text-[10px] font-medium text-white/30 uppercase tracking-widest">
              <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> {exp.duration}</span>
              <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> {exp.location}</span>
           </div>
        </div>

        <p className="text-sm text-white/50 leading-relaxed mb-8">{exp.description}</p>

        <div className="flex flex-wrap gap-2">
           {exp.skills.map(skill => (
             <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-white/40 uppercase tracking-widest hover:text-white hover:border-portfolio-indigo/50 transition-all">{skill}</span>
           ))}
        </div>
      </div>
    </motion.div>
    <div className="hidden md:block md:w-[45%]" />
  </div>
);

const ProjectCommandCard = ({ project, index }: { project: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [15, -15]), { damping: 30, stiffness: 80 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-15, 15]), { damping: 30, stiffness: 80 });
  const iconTranslateZ = useSpring(isHovered ? 100 : 0, { damping: 15, stiffness: 100 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      x.set((e.clientX - rect.left) / rect.width);
      y.set((e.clientY - rect.top) / rect.height);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); x.set(0.5); y.set(0.5); }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      style={{ rotateX, rotateY, perspective: "1200px" }}
      className="relative h-[550px] group cursor-default"
    >
       <div className="h-full relative overflow-hidden rounded-[3rem] bg-[#050505] border border-white/5 backdrop-blur-[100px] transition-all duration-700 shadow-2xl group-hover:border-portfolio-indigo/30">
          
          {/* BORDER SCAN BEAMS (Framer Motion Implementation) */}
          <AnimatePresence>
            {isHovered && (
               <>
                  <motion.div 
                    initial={{ left: "-100%" }} animate={{ left: "200%" }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 w-32 h-[1px] bg-gradient-to-r from-transparent via-portfolio-indigo to-transparent z-[1]" 
                  />
                  <motion.div 
                    initial={{ top: "-100%" }} animate={{ top: "200%" }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                    className="absolute right-0 w-[1px] h-32 bg-gradient-to-b from-transparent via-portfolio-indigo to-transparent z-[1]" 
                  />
               </>
            )}
          </AnimatePresence>

          <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity overflow-hidden pointer-events-none">
             <div className="w-full h-full perspective-grid scale-150 rotate-45" />
          </div>

          <div className="relative z-10 h-full p-10 flex flex-col items-center">
             <div className="w-full flex justify-between items-start mb-12">
                <div className="flex flex-col gap-1">
                   <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-portfolio-indigo animate-pulse" />
                      <span className="text-[9px] font-black text-white/40 uppercase tracking-widest font-mono">LINK_CONNECTED</span>
                   </div>
                   <span className="text-[8px] font-bold text-white/20 font-mono italic">{project.coord}</span>
                </div>
                <div className="flex items-end gap-[2px] h-4">
                   {[0.4, 0.7, 0.5, 0.9, 0.6].map((h, i) => (
                      <motion.div key={i} animate={{ height: [`${h*100}%`, `${(h+0.2)*100}%`, `${h*100}%`] }} transition={{ duration: 1.5 + i*0.2, repeat: Infinity }} className="w-[3px] bg-portfolio-indigo/50 rounded-full" />
                   ))}
                </div>
             </div>

             <div className="flex-grow flex items-center justify-center relative w-full mb-12">
                <motion.div style={{ translateZ: iconTranslateZ }} className="relative flex items-center justify-center">
                   <project.icon className="w-16 h-16 text-portfolio-indigo/10 absolute scale-150 blur-sm transition-transform duration-700" />
                   <project.icon className="w-16 h-16 text-portfolio-indigo/40 absolute scale-125 transition-transform duration-700" />
                   <project.icon className="w-16 h-16 text-white group-hover:text-portfolio-indigo transition-colors duration-700" />
                   <div className="absolute bottom-[-15px] w-12 h-1 bg-portfolio-indigo/30 blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
             </div>

             <div className="w-full relative z-20 text-center space-y-4" style={{ transform: "translateZ(80px)" }}>
                <div>
                   <h4 className="text-3xl font-black text-white tracking-tighter uppercase mb-2 leading-none group-hover:text-portfolio-indigo transition-colors">{project.name}</h4>
                   <p className="text-[9px] font-black text-portfolio-indigo uppercase tracking-[0.3em] font-mono">{project.tagline}</p>
                </div>

                <p className="text-[11px] font-medium text-white/40 leading-relaxed max-w-[280px] mx-auto italic">{project.description}</p>

                <div className="relative w-full h-[64px] overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 p-3.5 text-left">
                   <AnimatePresence mode="wait">
                      {isHovered ? (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} key="metrics" className="grid grid-cols-2 gap-4">
                           {Object.entries(project.metrics).slice(0, 2).map(([key, val]: any) => (
                              <div key={key}>
                                 <p className="text-[7px] font-black text-white/20 uppercase tracking-widest mb-1 font-mono">{key}</p>
                                 <p className="text-[10px] font-bold text-white tracking-tight">{val}</p>
                              </div>
                           ))}
                        </motion.div>
                      ) : (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key="idle" className="flex flex-col gap-1 font-mono">
                           <p className="text-[7px] text-white/20 tracking-tighter uppercase leading-none">&gt; HANDSHAKE SUCCESSFUL</p>
                           <p className="text-[7px] text-portfolio-indigo animate-pulse uppercase leading-none">&gt; PROD_SYS: NOMINAL</p>
                           <p className="text-[7px] text-white/20 tracking-tighter uppercase leading-none">&gt; DIST_CDN: VERIFIED</p>
                        </motion.div>
                      )}
                   </AnimatePresence>
                </div>
             </div>
          </div>
       </div>
    </motion.div>
  );
};

export default ResumeSection;
