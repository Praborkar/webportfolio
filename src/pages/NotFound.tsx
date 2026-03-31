
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import SpaceBackground from "@/components/SpaceBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Access attempted on non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative flex items-center justify-center p-6 overflow-hidden">
      <SpaceBackground />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-portfolio-navy/10 backdrop-blur-3xl border border-white/5 p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
          {/* Animated Glow Overlay */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-portfolio-indigo/20 blur-[80px] rounded-full" />
          
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-3xl bg-portfolio-indigo/10 flex items-center justify-center border border-portfolio-indigo/20">
              <AlertCircle size={40} className="text-portfolio-indigo animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-7xl font-black text-white tracking-tighter mb-2">404</h1>
          <p className="text-xs font-black text-portfolio-indigo uppercase tracking-[0.4em] font-mono mb-8">Route: Not_Found</p>
          
          <p className="text-[11px] font-medium text-white/40 leading-relaxed max-w-[280px] mx-auto italic mb-10">
            The system could not locate the requested resource. Coordinates are either invalid or have been purged from the matrix.
          </p>
          
          <Link
            to="/"
            className="inline-flex items-center bg-white/5 hover:bg-portfolio-indigo/20 text-white border border-white/10 hover:border-portfolio-indigo/50 font-bold py-4 px-10 rounded-2xl transition-all duration-500 uppercase text-[10px] tracking-widest group"
          >
            <Home className="mr-3 h-4 w-4 group-hover:scale-110 transition-transform" />
            Return to Nexus
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
