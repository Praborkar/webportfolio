import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { 
  GraduationCap, Calendar, BookOpen, ExternalLink, 
  MapPin, Cpu, Code2, Layers, CircleDot, ChevronRight, Award
} from 'lucide-react';

/**
 * Minimalist Glassmorphic Stack: Modern Academic Redesign
 * Features layered floating cards, phantom background headers, and interactive global glows.
 */

const EducationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // GLOBAL MOUSE FOLLOW LIGHT
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "Noida Institute of Engineering and Technology",
      duration: "2022 - 2026",
      specialization: "Computer Science & Engineering",
      shortYear: "'22—'26",
      focus: ["Full-Stack", "Software Eng.", "Web Architecture"],
      metrics: "7.34 CGPA",
      achievements: ["Photography Lead", "Peer Mentorship", "Hackathon Finalist"],
      status: "IN_PROGRESS",
      logo: GraduationCap,
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Kendriya Vidyalaya",
      duration: "2021 - 2022",
      specialization: "Physical Sciences",
      shortYear: "'21—'22",
      focus: ["Mathematics", "Physics", "Computer Science"],
      metrics: "80% AGGREGATE",
      achievements: ["Math Olympiad", "Tech Club Leader", "Community Outreach"],
      status: "GRADUATED",
      logo: BookOpen,
    }
  ];

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="py-64 bg-black relative overflow-hidden" 
      id="education"
    >
      {/* GLOBAL MOUSE FOLLOW GLOW */}
      <motion.div 
        className="absolute w-[800px] h-[800px] bg-portfolio-indigo/5 blur-[150px] rounded-full pointer-events-none z-0"
        style={{ x: useSpring(mouseX, { stiffness: 50 }), y: useSpring(mouseY, { stiffness: 50 }), translateX: "-50%", translateY: "-50%" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mb-48"
        >
          <div className="flex flex-col items-center text-center">
            <span className="text-[10px] font-black text-portfolio-indigo uppercase tracking-[0.4em] mb-4">Academic Background</span>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
               Knowledge<br/>
               <span className="text-portfolio-indigo italic">Architecture</span>
            </h2>
          </div>
        </motion.div>

        {/* --- HORIZONTAL GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-12 items-start">
           {education.map((edu, index) => (
             <EducationStackItem key={index} edu={edu} index={index} />
           ))}
        </div>
      </div>
    </section>
  );
};

const EducationStackItem = ({ edu, index }: { edu: any, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="relative flex flex-col items-center">
       
       {/* PHANTOM BACKGROUND HEADER */}
       <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          viewport={{ once: true }}
          className="absolute -top-12 lg:-top-20 select-none pointer-events-none z-0"
       >
          <span className="text-[150px] lg:text-[180px] font-black text-white tracking-tighter leading-none">{edu.shortYear}</span>
       </motion.div>

       {/* FLOATING DUO: BADGE CARD */}
       <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative mb-[-40px] z-20"
       >
          <div className="p-5 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col items-center min-w-[100px]">
             <div className="w-10 h-10 rounded-2xl bg-portfolio-indigo/10 flex items-center justify-center text-portfolio-indigo mb-2">
                <edu.logo className="w-5 h-5" />
             </div>
             <span className="text-[7px] font-black text-white/40 uppercase tracking-widest">{edu.status}</span>
          </div>
       </motion.div>

       {/* FLOATING DUO: DETAIL CARD */}
       <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full z-10"
       >
          <div className="p-10 lg:p-12 rounded-[3.5rem] bg-white/[0.01] backdrop-blur-[150px] border border-white/5 hover:border-white/10 transition-colors duration-700 shadow-3xl h-full">
             
             <div className="space-y-8">
                <div>
                   <h4 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase leading-tight mb-2">{edu.degree}</h4>
                   <div className="flex items-center gap-2 text-portfolio-indigo/60 font-bold text-[10px] uppercase tracking-widest">
                      <MapPin className="w-3 h-3" />
                      {edu.institution}
                   </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                   {edu.focus.map((f: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/5">
                         <CircleDot className="w-2 h-2 text-portfolio-indigo" />
                         <span className="text-[9px] font-bold text-white/50 tracking-wide">{f}</span>
                      </div>
                   ))}
                </div>

                <div className="grid grid-cols-2 gap-6">
                   {/* DURATION */}
                   <div>
                      <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em] mb-2 font-mono">Timeline</p>
                      <div className="flex items-center gap-2 text-white/40">
                         <Calendar className="w-3 h-3" />
                         <span className="text-[11px] font-bold tracking-tight italic">{edu.duration}</span>
                      </div>
                   </div>
                   
                   {/* METRICS */}
                   <div>
                      <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em] mb-2 font-mono">Status</p>
                      <div className="flex items-center gap-2 text-portfolio-indigo">
                         <Award className="w-3 h-3" />
                         <span className="text-[11px] font-black tracking-widest uppercase">{edu.metrics}</span>
                      </div>
                   </div>
                </div>

                {/* ACHIEVEMENTS */}
                <div className="pt-6 border-t border-white/5">
                   <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em] mb-4 font-mono">Certification_Log</p>
                   <div className="space-y-2">
                      {edu.achievements.map((ach: string, i: number) => (
                         <div key={i} className="flex items-start gap-3">
                            <ChevronRight className="w-3 h-3 text-portfolio-indigo mt-0.5" />
                            <p className="text-[11px] font-medium text-white/30 leading-relaxed italic">{ach}</p>
                         </div>
                      ))}
                   </div>
                </div>
             </div>

          </div>
       </motion.div>

    </div>
  );
};

export default EducationSection;