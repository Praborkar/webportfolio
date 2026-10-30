import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { Polaroid, SectionTitle } from "@/components/scrap";
import { Float, SparkleDoodle, SquiggleDoodle } from "@/components/doodles";

const chips = [
  { label: "Mobile Apps", bg: "bg-[#f6c945]", rotate: "-rotate-2" },
  { label: "Web & SaaS", bg: "bg-[#3fbf7f]", rotate: "rotate-1" },
  { label: "Backend & APIs", bg: "bg-[#f472b6]", rotate: "-rotate-1" },
  { label: "Integrations", bg: "bg-[#4a67e8] text-white", rotate: "rotate-2" },
];

const AboutSection = () => (
  <section id="about" className="relative py-28 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionTitle
        kicker="what's up"
        aside={
          <Float className="flex items-end gap-3" duration={4.5}>
            <SquiggleDoodle className="w-28" />
            <SparkleDoodle className="w-10" />
            <SparkleDoodle className="w-6" color="#f472b6" />
          </Float>
        }
      >
        About
      </SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block border-2 border-ink px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest mb-6 bg-white">
            Main bio
          </span>

          <p className="font-hand text-3xl md:text-4xl leading-snug text-ink">
            I'm a full-stack and mobile developer who ships. I build Android apps for Google Play with Flutter and
            React Native, and I designed a multi-tenant hotel SaaS end to end.
          </p>

          <div className="mt-6 space-y-4 text-ink/75 leading-relaxed max-w-2xl">
            <p>
              Based in Noida, I work remotely with Futurebits, a startup in Dubai. My day-to-day is mobile UI,
              REST APIs, databases and the integrations that make an app useful: payments, messaging, OTP and
              fingerprint login, and IoT devices.
            </p>
            <p>
              I'm finishing my B.Tech in Information Technology at NIET in August 2026, and I'm open to full-time
              roles and freelance projects.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            {chips.map((c) => (
              <motion.span
                key={c.label}
                whileHover={{ rotate: 0, scale: 1.08 }}
                className={`${c.bg} ${c.rotate} border-2 border-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0_0_#1a1a1a] cursor-default`}
              >
                {c.label}
              </motion.span>
            ))}
          </div>

          <div className="flex gap-6 mt-10">
            <a
              href="https://github.com/Praborkar"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-ink underline underline-offset-4 decoration-2 decoration-[#f472b6] hover:text-[#e5484d]"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/prabor-kar/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-ink underline underline-offset-4 decoration-2 decoration-[#4a67e8] hover:text-[#e5484d]"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: 6 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto w-72 md:w-80 mt-4"
        >
          <Polaroid src="/profile-cutout.png" caption="Prabor" tone="yellow" rotate="rotate-3" backdrop="bg-[#f6c945]" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
