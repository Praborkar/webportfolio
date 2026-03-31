import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { Layout, Server, Cpu, Smartphone, Globe, Terminal, Database, Rocket, Shield, Activity, MousePointer2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SkillPosition {
  x: number;
  y: number;
  z: number;
  text: string;
}

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  
  const categories = [
    {
      id: 0,
      title: "Frontend & Mobile",
      icon: Layout,
      skills: ["React", "Next.js", "TypeScript", "React Native", "Tailwind CSS", "Framer Motion", "UI/UX", "Vite", "PWA", "Expo"]
    },
    {
      id: 1,
      title: "Backend & Systems",
      icon: Server,
      skills: ["Node.js", "Express.js", "Python", "FastAPI", "PostgreSQL", "MongoDB", "WebSockets", "Auth0", "Docker", "REST"]
    },
    {
      id: 2,
      title: "Tools & Ecosystem",
      icon: Cpu,
      skills: ["Git", "GitHub", "TanStack", "Vercel", "Postman", "CI/CD", "Linux", "Nginx", "Firebase", "Redis"]
    }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden" id="skills">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-portfolio-indigo/5 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-portfolio-indigo/10 border border-portfolio-indigo/20 text-portfolio-indigo text-[10px] font-bold tracking-[0.3em] uppercase mb-8"
          >
            <Activity className="w-3 h-3" /> Mastery Visualizer v4.0
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-widest uppercase mb-6 leading-none">
            Tech <span className="text-portfolio-indigo text-glow">Singularity</span>
          </h2>
          <p className="text-portfolio-light/40 font-medium max-w-xl mx-auto">
             Enter the interactive 3D dimension of my technology stack. Click and drag the orbit to rotate, and select any node to project its specializations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
          {/* Category Switcher - Side Panel */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xs font-bold text-white/20 uppercase tracking-[0.4em] mb-8">Active Modules</h3>
            {categories.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(idx)}
                className={`w-full p-6 rounded-[1.5rem] border transition-all duration-500 flex items-center gap-4 group relative overflow-hidden ${
                  activeCategory === idx 
                    ? "bg-portfolio-indigo/10 border-portfolio-indigo/40 text-white shadow-[0_0_30px_rgba(99,102,241,0.2)]" 
                    : "bg-white/[0.02] border-white/5 text-white/30 hover:bg-white/[0.05] hover:border-white/10"
                }`}
              >
                 <cat.icon className={`w-5 h-5 transition-transform duration-500 ${activeCategory === idx ? "scale-110 text-portfolio-indigo" : "group-hover:scale-110"}`} />
                 <span className="text-[11px] font-bold uppercase tracking-widest">{cat.title.split(' ')[0]}</span>
                 
                 {activeCategory === idx && (
                   <motion.div layoutId="active-bg" className="absolute left-0 w-1 h-1/2 bg-portfolio-indigo rounded-r-full" />
                 )}
              </button>
            ))}
            
            {/* Legend / Status */}
            <div className="pt-12 px-6 space-y-6">
                <div className="flex items-center gap-4">
                   <div className="w-1.5 h-1.5 rounded-full bg-portfolio-indigo animate-pulse" />
                   <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-white/20 italic">Orbit Active</span>
                </div>
                <div className="flex items-center gap-4">
                   <MousePointer2 className="w-3 h-3 text-white/10" />
                   <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-white/10">3D Interaction Enabled</span>
                </div>
            </div>
          </div>

          {/* Large 3D Cloud Container */}
          <div className="lg:col-span-2 aspect-square relative flex items-center justify-center -my-20 lg:-my-0">
             <AnimatePresence mode="wait">
               <Tech3DCloud key={activeCategory} skills={categories[activeCategory].skills} onSelect={setSelectedSkill} />
             </AnimatePresence>
          </div>

          {/* Holographic Projector - Side Panel */}
          <div className="lg:col-span-1">
             <div className="h-full min-h-[400px] rounded-[2.5rem] bg-portfolio-navy/40 backdrop-blur-3xl border border-white/5 p-10 relative overflow-hidden flex flex-col items-center justify-center text-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-indigo/5 via-transparent to-portfolio-sky/5 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-portfolio-indigo/40 to-transparent" />
                
                <AnimatePresence mode="wait">
                  {selectedSkill ? (
                    <motion.div 
                      key={selectedSkill}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="relative z-10 space-y-8"
                    >
                       <div className="w-24 h-24 mx-auto rounded-3xl bg-portfolio-indigo/10 border border-portfolio-indigo/30 flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.2)]">
                          <Info className="w-10 h-10 text-portfolio-indigo" />
                       </div>
                       <div>
                         <h4 className="text-2xl font-bold text-white uppercase tracking-tighter mb-2">{selectedSkill}</h4>
                         <p className="text-[10px] font-bold text-portfolio-indigo tracking-[0.3em] uppercase mb-6 italic">Validated Specialization</p>
                         <p className="text-xs text-white/40 leading-relaxed max-w-[200px] mx-auto">
                            Advanced competency in high-performance {selectedSkill} architecture and scalable deployment strategies.
                         </p>
                       </div>
                       
                       <Button variant="outline" className="w-full border-portfolio-indigo/20 bg-portfolio-indigo/5 text-[10px] uppercase font-bold tracking-[0.2em] h-10 hover:bg-portfolio-indigo/20 transition-all">
                          Verify Documentation
                       </Button>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="placeholder"
                      className="flex flex-col items-center opacity-20"
                    >
                       <Rocket className="w-16 h-16 text-white mb-6 animate-bounce" />
                       <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Awaiting Selection...</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Cyber Accents */}
                <div className="absolute bottom-6 left-6 flex gap-1">
                   {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-portfolio-indigo/30" />)}
                </div>
                <div className="absolute bottom-6 right-6 text-[8px] font-mono text-white/10 uppercase tracking-widest">v4.0.01</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3D Tag Cloud Implementation
const Tech3DCloud = ({ skills, onSelect }: { skills: string[], onSelect: (s: string) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<SkillPosition[]>([]);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Generate spherical coordinates
  useEffect(() => {
    const radius = 250;
    const count = skills.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle in radians

    const newPositions = skills.map((skill, i) => {
      const y = 1 - (i / (count - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      return {
        x: Math.cos(theta) * radiusAtY * radius,
        y: y * radius,
        z: Math.sin(theta) * radiusAtY * radius,
        text: skill
      };
    });

    setPositions(newPositions);
  }, [skills]);

  // Auto-orbit logic
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => ({
        x: prev.x + 0.003,
        y: prev.y + 0.005
      }));
    }, 16);
    return () => clearInterval(interval);
  }, []);

  // Mouse drag interaction
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isHovering) {
       const rect = containerRef.current?.getBoundingClientRect();
       if (!rect) return;
       const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
       const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
       setRotation({ x: y * 0.5, y: -x * 0.5 });
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      className="w-full h-full relative cursor-crosshair group"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 30 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-full h-full relative flex items-center justify-center p-20"
      >
        {positions.map((pos, idx) => {
          // 3D Matrix Rotation Math
          const cosX = Math.cos(rotation.x);
          const sinX = Math.sin(rotation.x);
          const cosY = Math.cos(rotation.y);
          const sinY = Math.sin(rotation.y);

          const rY = pos.y * cosX - pos.z * sinX;
          const rZ = pos.z * cosX + pos.y * sinX;
          const rX = pos.x * cosY + rZ * sinY;
          const finalZ = rZ * cosY - pos.x * sinY;

          const scale = (finalZ + 300) / 450;
          const opacity = scale < 0.3 ? 0.1 : scale;
          const zIndex = Math.round(finalZ);

          return (
            <motion.button
              key={pos.text}
              onClick={() => onSelect(pos.text)}
              whileHover={{ scale: 1.3, zIndex: 1000, color: "#6366f1" }}
              className="absolute font-black tracking-tighter uppercase whitespace-nowrap transition-colors duration-300 pointer-events-auto"
              style={{
                x: rX,
                y: rY,
                scale,
                opacity,
                zIndex,
                fontSize: "1.2rem",
                color: scale > 0.8 ? "white" : "rgba(255,255,255,0.4)",
                filter: `blur(${Math.max(0, (0.8 - scale) * 4)}px)`
              }}
            >
              <div className="relative group">
                 {pos.text}
                 {scale > 0.9 && (
                    <motion.div 
                      layoutId="focus" 
                      className="absolute -inset-x-2 -bottom-1 h-0.5 bg-portfolio-indigo/40" 
                    />
                 )}
              </div>
            </motion.button>
          );
        })}
      </motion.div>
      
      {/* Visual background center node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-portfolio-indigo/20 blur-[10px]" />
    </div>
  );
};

export default SkillsSection;
;