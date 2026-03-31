import React, { useRef, useState } from "react";
import { motion, useSpring, useTransform, useMotionValue, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Send, Mail, Phone, Globe, Activity, Zap, 
  ShieldCheck, ArrowUpRight, Github, Linkedin, Twitter
} from "lucide-react";

/**
 * Minimalist Premium Glass Contact Section
 * A clean, centered, and sophisticated communication node.
 */

const ContactSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({ title: "Signal Sent", description: "Your message has been stored in my priority queue." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({ title: "Transmission Failed", description: "Signal unstable. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={containerRef} className="py-32 bg-black relative overflow-hidden" id="contact">
      {/* ATMOSPHERIC OVERLAYS */}
      <div className="absolute inset-0 noise-overlay opacity-[0.02] z-[99] pointer-events-none" />
      <div className="absolute inset-0 perspective-grid opacity-[0.05] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase mb-8">
            <Zap className="w-3.5 h-3.5" /> Direct Uplink
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tighter uppercase mb-6">
             Get In <span className="text-portfolio-indigo text-glow">Touch</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm text-white/30 leading-relaxed font-medium">
             Always open for high-impact collaborations and technical engineering disputes. Establish a priority connection below.
          </p>
        </motion.div>

        {/* --- CENTRAL GLASS CARD --- */}
        <ContactCard 
           formData={formData} 
           handleInputChange={handleInputChange} 
           handleSubmit={handleSubmit} 
           isSubmitting={isSubmitting} 
        />

        {/* --- MINIMALIST SOCIAL BAR --- */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-16 flex flex-wrap justify-center items-center gap-10"
        >
           {[
              { icon: Mail, label: "prabork@gmail.com" },
              { icon: Github, label: "GitHub" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Twitter, label: "X" }
           ].map((social, i) => (
              <a 
                 key={i} 
                 href="#" 
                 className="group flex items-center gap-3 text-white/40 hover:text-portfolio-indigo transition-all duration-300"
              >
                 <social.icon className="w-4 h-4" />
                 <span className="text-[11px] font-bold uppercase tracking-widest">{social.label}</span>
              </a>
           ))}
        </motion.div>

      </div>
    </section>
  );
};

const ContactCard = ({ formData, handleInputChange, handleSubmit, isSubmitting }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), { damping: 20, stiffness: 60 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), { damping: 20, stiffness: 60 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    }
  };

  return (
    <motion.div
       ref={cardRef}
       onMouseMove={handleMouseMove}
       onMouseLeave={() => { mouseX.set(0.5); mouseY.set(0.5); }}
       style={{ rotateX, rotateY, perspective: "1000px" }}
       className="relative"
    >
       <div className="p-10 md:p-14 rounded-[3rem] bg-portfolio-navy/10 backdrop-blur-3xl border border-white/5 shadow-2xl relative overflow-hidden group hover:border-portfolio-indigo/30 transition-all duration-700">
          
          {/* CARD TOP DECO */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/5 overflow-hidden">
             <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-1/3 h-full bg-gradient-to-r from-transparent via-portfolio-indigo to-transparent"
             />
          </div>

          <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                   <p className="text-[10px] font-black text-white/40 uppercase tracking-widest font-mono">UID_NAME</p>
                   <Input
                      name="name"
                      placeholder="ENTER NAME..."
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      autoComplete="off"
                      className="bg-white/[0.02] border-0 border-b border-white/20 rounded-none h-14 px-4 text-xl font-bold text-white placeholder:text-white/20 focus-visible:ring-0 focus-visible:border-portfolio-indigo transition-all"
                   />
                </div>
                <div className="space-y-3">
                   <p className="text-[10px] font-black text-white/40 uppercase tracking-widest font-mono">CHANNEL_EMAIL</p>
                   <Input
                      name="email"
                      type="email"
                      placeholder="ENTER EMAIL..."
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      autoComplete="off"
                      className="bg-white/[0.02] border-0 border-b border-white/20 rounded-none h-14 px-4 text-xl font-bold text-white placeholder:text-white/20 focus-visible:ring-0 focus-visible:border-portfolio-indigo transition-all"
                   />
                </div>
             </div>

             <div className="space-y-3 pt-6">
                <p className="text-[10px] font-black text-white/40 uppercase tracking-widest font-mono">ENCODED_MESSAGE</p>
                <Textarea
                   name="message"
                   placeholder="DESCRIBE PROJECT PARAMETERS..."
                   value={formData.message}
                   onChange={handleInputChange}
                   required
                   rows={5}
                   className="bg-white/[0.02] border-0 border-b border-white/20 rounded-none p-4 text-lg font-medium text-white/80 placeholder:text-white/20 focus-visible:ring-0 focus-visible:border-portfolio-indigo transition-all resize-none leading-relaxed"
                />
             </div>

             <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-portfolio-indigo/10 flex items-center justify-center border border-portfolio-indigo/20">
                      <ShieldCheck className="w-5 h-5 text-portfolio-indigo" />
                   </div>
                   <div>
                      <p className="text-[9px] font-black text-white/60 uppercase tracking-widest">End-to-End Encryption</p>
                      <p className="text-[8px] font-bold text-white/20 uppercase">SECURE_LINK: ACTIVE</p>
                   </div>
                </div>

                <Button
                   type="submit"
                   disabled={isSubmitting}
                   className="h-16 px-12 rounded-2xl bg-portfolio-indigo text-white font-black text-xs tracking-widest uppercase hover:bg-portfolio-indigo/90 hover:scale-[1.03] transition-all shadow-xl disabled:opacity-50"
                >
                   {isSubmitting ? (
                      <Activity className="w-5 h-5 animate-spin" />
                   ) : (
                      <div className="flex items-center gap-3">
                         ESTABLISH CONTACT <ArrowUpRight className="w-5 h-5" />
                      </div>
                   )}
                </Button>
             </div>
          </form>

          {/* BACKGROUND GLOW */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-portfolio-indigo/5 blur-[120px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
       </div>

       {/* CARD SHADOW/GLOW */}
       <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[70%] h-40 bg-portfolio-indigo/10 blur-[100px] pointer-events-none -z-10" />
    </motion.div>
  );
};

export default ContactSection;