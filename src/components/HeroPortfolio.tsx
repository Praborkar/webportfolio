import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroPortfolio = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col lg:flex-row bg-background">
      {/* Left Side - Content */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        className="flex-1 hero-gradient flex items-center justify-center p-8 lg:p-16"
      >
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="text-foreground">Frontend</span>{" "}
            <span className="text-portfolio-indigo text-glow">Developer</span>
            <span className="text-portfolio-sky">.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
            className="text-lg lg:text-xl text-foreground/90 mb-8 leading-relaxed"
          >
            I design and develop scalable, high-performance frontend applications with a focus on clean architecture and seamless user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
            className="mb-12"
          >
            <Button
              onClick={scrollToProjects}
              className="gradient-primary text-white px-8 py-6 text-lg font-semibold transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              My Work
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              className="glassmorphism p-6 transition-all duration-500 ease-in-out"
            >
              <p className="text-foreground/90 text-sm lg:text-base leading-relaxed">
                Proficient in implementing progressive enhancement techniques, building scalable design systems, and engineering modern, responsive UIs
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              className="glassmorphism p-6 transition-all duration-500 ease-in-out"
            >
              <p className="text-foreground/90 text-sm lg:text-base leading-relaxed">
                Over a year of hands-on experience architecting and developing full-scale projects from the ground up.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Profile Image */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex-1 gradient-accent flex items-center justify-center p-8 lg:p-16 relative overflow-hidden"
      >
        {/* Animated Background Frames */}
        <motion.div 
          initial={{ scale: 0.8, rotate: -5 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute w-80 h-80 border-4 border-portfolio-navy rounded-lg transform rotate-3 opacity-60"
        />
        <motion.div 
          initial={{ scale: 0.8, rotate: 5 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute w-80 h-80 border-4 border-portfolio-indigo rounded-lg transform -rotate-2 opacity-40"
        />
        
        {/* Profile Image */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          className="relative z-10 w-80 h-80 rounded-lg overflow-hidden shadow-2xl border-4 border-black transition-all duration-300 ease-in-out"
        >
          <img 
            src="public\lovable-uploads\profile-Picsart-BackgroundChanger (1).png" 
            alt="Prabor Kar profile"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroPortfolio;
