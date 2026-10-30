import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { Tape } from "@/components/scrap";
import {
  Float,
  PhoneDoodle,
  LaptopDoodle,
  CodeWindowDoodle,
  MugDoodle,
  CursorDoodle,
  GearDoodle,
  GitBranchDoodle,
  SparkleDoodle,
  SquiggleDoodle,
} from "@/components/doodles";

const handles = ["-top-1.5 -left-1.5", "-top-1.5 -right-1.5", "-bottom-1.5 -left-1.5", "-bottom-1.5 -right-1.5"];

const HeroPortfolio = () => {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Illustrations around the headline (wide screens) */}
      <Float className="hidden xl:block absolute left-[2%] top-[22%] w-24 -rotate-12" duration={6}>
        <PhoneDoodle className="w-full" />
      </Float>
      <Float className="hidden xl:block absolute right-[3%] top-[15%] w-44 rotate-6" duration={5.5} delay={0.8}>
        <CodeWindowDoodle className="w-full" />
      </Float>
      <Float className="hidden xl:block absolute left-[8%] bottom-[14%] w-20 -rotate-6" duration={4.5} delay={0.4}>
        <MugDoodle className="w-full" />
      </Float>
      <Float className="hidden xl:block absolute right-[14%] top-[44%] w-24" duration={4} delay={1.2}>
        <CursorDoodle className="w-full" />
      </Float>
      <Float className="hidden 2xl:block absolute right-[5%] bottom-[10%] w-56 -rotate-3" duration={6.5} delay={0.2}>
        <LaptopDoodle className="w-full" />
      </Float>
      <Float className="hidden 2xl:block absolute left-[18%] top-[14%] w-12" duration={5} delay={1}>
        <GitBranchDoodle className="w-full" />
      </Float>
      <Float className="hidden 2xl:block absolute left-[3%] bottom-[34%] w-14" duration={7}>
        <GearDoodle className="w-full" />
      </Float>
      <Float className="hidden lg:block absolute left-[26%] bottom-[10%] w-9" duration={3.5}>
        <SparkleDoodle className="w-full" />
      </Float>
      <Float className="hidden lg:block absolute right-[28%] top-[12%] w-8" duration={4.2} delay={0.6}>
        <SparkleDoodle className="w-full" color="#f472b6" />
      </Float>
      <Float className="hidden xl:block absolute right-[22%] bottom-[7%] w-24 rotate-3" duration={5}>
        <SquiggleDoodle className="w-full" />
      </Float>

      <div className="relative text-center max-w-5xl w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-hand text-2xl text-ink/70 mb-4"
        >
          my name is
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative inline-block border-2 border-[#e5484d] px-6 md:px-12 py-2 md:py-4"
        >
          {handles.map((pos) => (
            <span key={pos} className={`absolute ${pos} w-3 h-3 bg-white border border-[#e5484d]`} />
          ))}
          <h1 className="font-display text-[22vw] sm:text-[16vw] md:text-[11rem] leading-[0.85] text-ink uppercase">
            Prabor
            <span className="sr-only"> Kar - Full-Stack &amp; Mobile Developer</span>
          </h1>

          <Tape tone="mint" className="absolute -top-4 left-3 lg:-top-5 lg:-left-24 -rotate-6 hidden sm:inline-block">Flutter</Tape>
          <Tape tone="blue" className="absolute -top-4 right-3 lg:top-3 lg:-right-28 rotate-3 hidden sm:inline-block">React Native</Tape>
          <Tape tone="yellow" className="absolute -bottom-4 left-3 lg:-bottom-5 lg:-left-28 rotate-2 hidden sm:inline-block">Node.js</Tape>
          <Tape tone="pink" className="absolute -bottom-4 right-3 lg:-bottom-6 lg:-right-20 -rotate-3 hidden sm:inline-block">Next.js</Tape>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-14"
        >
          <p className="text-3xl md:text-5xl font-extrabold tracking-tight text-ink leading-tight">
            I build apps and software{" "}
            <br className="hidden md:block" />
            that ship to real users. <span className="text-[#f472b6]">✿</span>
          </p>

          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60">
            Full-Stack &amp; Mobile Developer · Noida, India · Open to new work
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => go("contact")}
              className="px-7 py-3 bg-ink text-paper font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#e5484d] transition-colors shadow-[4px_4px_0_0_#f6c945]"
            >
              Contact me
            </button>
            <a
              href="/Prabor_Kar_Resume.pdf"
              download
              className="px-7 py-3 border-2 border-ink font-mono text-xs font-bold uppercase tracking-widest text-ink hover:bg-ink hover:text-paper transition-colors flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" /> Resume
            </a>
          </div>
        </motion.div>

        {/* Illustration strip for phones and tablets */}
        <div className="mt-12 flex items-end justify-center gap-5 sm:gap-8 xl:hidden" aria-hidden>
          <PhoneDoodle className="w-10 sm:w-12 -rotate-6" />
          <LaptopDoodle className="w-24 sm:w-32" />
          <CodeWindowDoodle className="w-20 sm:w-28 rotate-3" />
          <MugDoodle className="w-12 sm:w-16 -rotate-3" />
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-14 flex justify-center text-ink/40"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>

        <div className="hidden lg:block absolute left-0 top-[30%] w-16 h-16 rounded-full ring-4 ring-[#f2a14b] overflow-hidden bg-[#f6c945] -rotate-6">
          <img src="/profile-cutout.png" alt="" className="w-full h-full object-cover object-top scale-[2.2] origin-[50%_14%]" />
        </div>
      </div>
    </section>
  );
};

export default HeroPortfolio;
