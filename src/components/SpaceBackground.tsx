import React, { useMemo } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';

/**
 * Deep Space & Astro Theme Background
 * Features a multi-tier starfield, drifting nebulas, and constellation grids.
 */

const SpaceBackground = () => {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth);
    mouseY.set(clientY / innerHeight);
  };

  const parallaxX = useSpring(useTransform(mouseX, [0, 1], [0, -40]), { stiffness: 50 });
  const parallaxY = useSpring(useTransform(mouseY, [0, 1], [0, -40]), { stiffness: 50 });

  // Generate Base Starfield (Memoized for performance)
  const stars = useMemo(() => {
     return Array.from({ length: 180 }).map((_, i) => ({
        size: Math.random() < 0.7 ? 1 : Math.random() < 0.9 ? 2 : 3,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        type: Math.random() < 0.15 ? 'twinkle' : 'static'
     }));
  }, []);

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="fixed inset-0 w-full h-full bg-[#020205] z-[-1] overflow-hidden pointer-events-none"
    >
       {/* 1. LAYER - STATIC & TWINKLING STARS */}
       <motion.div 
          style={{ x: parallaxX, y: parallaxY }}
          className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%]"
       >
          {stars.map((star, i) => (
             <motion.div 
                key={i}
                className="absolute bg-white rounded-full"
                style={{ 
                   width: star.size, 
                   height: star.size, 
                   left: `${star.x}%`, 
                   top: `${star.y}%`,
                   opacity: star.type === 'static' ? 0.4 : 0
                }}
                animate={star.type === 'twinkle' ? {
                   opacity: [0.1, 0.8, 0.1],
                   scale: [1, 1.5, 1],
                } : {}}
                transition={star.type === 'twinkle' ? {
                   duration: star.duration,
                   repeat: Infinity,
                   delay: star.delay,
                   ease: "easeInOut"
                } : {}}
             />
          ))}
       </motion.div>

       {/* 2. ATMOSPHERIC NEBULAS (Drifting) */}
       <div className="absolute inset-0 z-[1] mix-blend-screen opacity-40">
          {/* Indigo Nebula */}
          <motion.div 
             animate={{ 
                x: [0, 100, 0], 
                y: [0, -50, 0],
                rotate: [0, 45, 0],
                scale: [1, 1.2, 1]
             }}
             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
             className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] bg-portfolio-indigo/10 rounded-full blur-[160px]"
          />
          {/* Deep Violet Nebula */}
          <motion.div 
             animate={{ 
                x: [0, -80, 0], 
                y: [0, 60, 0],
                rotate: [0, -45, 0],
                scale: [1, 1.1, 1]
             }}
             transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 5 }}
             className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-portfolio-sky/5 rounded-full blur-[140px]"
          />
       </div>

       {/* 3. CONSTELLATION GEOMETRIC GRID */}
       <div 
          className="absolute inset-0 z-[2] opacity-[0.04] pointer-events-none"
          style={{ 
             backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
             backgroundSize: '120px 120px',
             maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)'
          }} 
       />

       {/* 4. DEPTH & GRAIN */}
       <div className="absolute inset-0 bg-black/10 z-[3]" />
       <div className="absolute inset-0 z-[4] opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

    </div>
  );
};

export default SpaceBackground;
