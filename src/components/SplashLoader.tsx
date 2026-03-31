import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * System Initialization Splash Screen
 * Features a binary rainfall backdrop, a volumetric logo, and staggered terminal logs.
 */

const SplashLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [percent, setPercent] = useState(0);

  const initLogs = [
    "> INITIALIZING SYSTEM_CORES... [OK]",
    "> LOADING_NEURAL_MODELS... [READY]",
    "> SYNCING_PRODUCTION_MATRIX... [ACTIVE]",
    "> ESTABLISHING SECURE_LINK... [CONNECTED]",
    "> BOOT_SEQUENCE: COMPLETE"
  ];

  useEffect(() => {
    // Percentage simulated loading
    const timer = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800); // Small pause at 100%
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    // Logs typing simulation
    initLogs.forEach((log, i) => {
      setTimeout(() => {
        setLogs(prev => [...prev, log]);
      }, i * 600);
    });

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "blur(20px)",
        scale: 1.1,
        transition: { duration: 0.8, ease: "circIn" }
      }}
      className="fixed inset-0 z-[9999] bg-[#030303] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* SCANLINE OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      {/* BINARY RAINFALL BACKDROP */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none select-none overflow-hidden flex justify-around">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100 }}
            animate={{ y: "100vh" }}
            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
            className="text-white text-[10px] font-mono whitespace-pre flex flex-col"
          >
            {Array.from({ length: 30 }).map((_, j) => (
              <span key={j}>{Math.round(Math.random())}</span>
            ))}
          </motion.div>
        ))}
      </div>

      {/* CENTRAL VOLUMETRIC CORE */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-12"
        >
          {/* Volumetric Glows */}
          <div className="absolute inset-0 blur-[40px] bg-portfolio-indigo/20 scale-150 animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase relative select-none">
            Praborkar<span className="text-portfolio-indigo">.</span>
          </h1>
        </motion.div>

        {/* PROGRESS BAR (Minimalist) */}
        <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden mb-8">
           <motion.div 
             initial={{ width: 0 }}
             animate={{ width: `${percent}%` }}
             className="absolute h-full bg-portfolio-indigo shadow-[0_0_10px_rgba(99,102,241,1)]"
           />
        </div>
        <span className="text-[10px] font-mono text-white/40 tracking-[0.3em] font-black uppercase">{percent}% INITIALIZED</span>
      </div>

      {/* TERMINAL INITIALIZATION CONSOLE */}
      <div className="absolute bottom-12 left-0 w-full flex flex-col items-center z-10 px-6">
        <div className="max-w-md w-full font-mono space-y-1">
          <AnimatePresence>
            {logs.map((log, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[10px] text-white/30 uppercase tracking-widest leading-none"
              >
                {log}
              </motion.p>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* GLOBAL HUD BORDER */}
      <div className="absolute inset-12 border border-white/[0.03] pointer-events-none z-20 overflow-hidden">
         <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-portfolio-indigo/40" />
         <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-portfolio-indigo/40" />
      </div>

    </motion.div>
  );
};

export default SplashLoader;
