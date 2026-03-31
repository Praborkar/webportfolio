import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Layout, Smartphone, Code, Server, Cpu, Globe, Rocket, ArrowRight, Star } from "lucide-react";

const HeroPortfolio = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const capabilities = [
    { icon: Globe, label: "Web Apps", detail: "React & Next.js Systems" },
    { icon: Smartphone, label: "Mobile First", detail: "Native iOS & Android" },
    { icon: Cpu, label: "System Dev", detail: "Kotlin & Laravel Logic" },
    { icon: Rocket, label: "Deployment", detail: "Automated Workflows" }
  ];

  return (
    <section className="min-h-screen flex flex-col lg:flex-row bg-transparent relative overflow-hidden">
      {/* Background elements removed for global SpaceBackground compatibility */}

      {/* Left Side - Command Center 3.0 */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 flex items-center justify-center p-8 lg:p-16 pt-32 lg:pt-16 relative"
      >
        <div className="max-w-2xl relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white leading-[0.95] uppercase">
              Full Stack <br />
              <span 
                className="text-white relative inline-block"
                style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.4), 0 0 60px rgba(99, 102, 241, 0.3)' }}
              >
                & Mobile
              </span> 
              <br />
              Developer<span className="text-portfolio-indigo animate-pulse">.</span>
            </h1>
            
            <p className="text-lg text-portfolio-light/50 max-w-xl leading-relaxed font-semibold">
              Engineering scalable mobile architectures and high-performance web ecosystems.
            </p>
          </motion.div>

          {/* 3D-Tilt Capability Nodes Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-20 mb-20"
          >
            {capabilities.map((item, index) => (
              <CapabilityNode key={index} item={item} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-8"
          >
            {/* Quantum Primary Button */}
            <div className="relative group">
              <div className="absolute -inset-[2px] bg-gradient-to-r from-portfolio-indigo via-portfolio-sky to-portfolio-indigo rounded-2xl blur-[4px] opacity-30 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              <Button
                onClick={scrollToProjects}
                className="relative h-14 px-12 rounded-2xl bg-black hover:bg-portfolio-navy/20 text-white font-bold text-sm tracking-[0.2em] uppercase transition-all duration-500 border border-white/10 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-portfolio-indigo/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <Rocket className="w-4 h-4 mr-3" />
                My Work
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Developer Console Visual 3.0 */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex-1 bg-black relative flex items-center justify-center p-8 lg:p-16 overflow-hidden"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, white 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
        
        {/* The Console Window 3.0 */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative w-full max-w-lg aspect-[1.1/1] bg-portfolio-navy/30 backdrop-blur-3xl rounded-[3rem] border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group"
        >
          {/* Header */}
          <div className="h-14 bg-white/[0.02] border-b border-white-[0.05] flex items-center px-8 gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400 group-hover:shadow-[0_0_10px_rgba(248,113,113,0.5)] transition-shadow" />
              <div className="w-3 h-3 rounded-full bg-yellow-400 group-hover:shadow-[0_0_10px_rgba(250,204,21,0.5)] transition-shadow" />
              <div className="w-3 h-3 rounded-full bg-green-400 group-hover:shadow-[0_0_10px_rgba(74,222,128,0.5)] transition-shadow" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-[9px] uppercase font-bold tracking-[0.4em] text-white/10 group-hover:text-white/30 transition-colors">IDENTITY_SYST_v3.ts</span>
            </div>
          </div>

          <div className="p-10 font-mono text-sm leading-relaxed">
            <div className="flex gap-6">
              <div className="text-white/5 select-none text-right w-6">
                {Array.from({ length: 9 }).map((_, i) => <div key={i}>{i + 1}</div>)}
              </div>
              
              <div className="flex-1 space-y-1">
                <div className="flex gap-2"><span className="text-purple-400">const</span><span className="text-blue-300 font-bold">Profile</span><span className="text-white/40">=</span><span className="text-white/40">&#123;</span></div>
                <div className="pl-6 flex gap-2"><span className="text-indigo-400">expertise</span><span className="text-white/40">:</span><span className="text-white/40">[</span></div>
                <div className="pl-12 text-emerald-400 text-glow">"FullStack"{"<"}<span className="text-white/30">Web</span>{">"},</div>
                <div className="pl-12 text-emerald-400 text-glow">"Native"{"<"}<span className="text-white/30">IOS/Android</span>{">"}</div>
                <div className="pl-6 text-white/40">],</div>
                <div className="pl-6 flex gap-2"><span className="text-indigo-400">sync</span><span className="text-white/40">:</span><span className="text-emerald-400">true</span><span className="text-white/40">,</span></div>
                <div className="pl-6 flex gap-2"><span className="text-indigo-400">mode</span><span className="text-white/40">:</span><span className="text-emerald-400">"hybrid"</span></div>
                <div className="text-white/40">&#125;;</div>
                <div className="flex gap-2 pt-6"><span className="text-white/20 italic">// Awaiting input...</span><motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-2.5 h-5 bg-portfolio-indigo/40" /></div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// 3D-Tilt Capability Node Component
const CapabilityNode = ({ item }: { item: any }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { damping: 20 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { damping: 20 });

  function onMouseMove(event: any) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX - width / 2);
    y.set(mouseY - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div 
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-6 rounded-3xl flex items-center gap-5 group transition-all duration-300 relative overflow-hidden"
    >
      {/* Animated Border Shimmer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-full" />
      
      <div className="w-12 h-12 rounded-2xl bg-portfolio-indigo/10 flex items-center justify-center border border-portfolio-indigo/20 group-hover:bg-portfolio-indigo/30 transition-all duration-500 relative z-10">
        <item.icon className="w-6 h-6 text-portfolio-indigo group-hover:scale-110 group-hover:text-white transition-all duration-300" />
      </div>
      <div className="relative z-10">
        <h4 className="text-[10px] uppercase font-bold text-white/30 tracking-[0.2em] leading-none mb-2">{item.label}</h4>
        <p className="text-sm text-white/70 font-bold">{item.detail}</p>
      </div>
    </motion.div>
  );
};

export default HeroPortfolio;
