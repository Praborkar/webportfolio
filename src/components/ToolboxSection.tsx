import { motion } from "framer-motion";
import { SectionTitle } from "@/components/scrap";
import { Float, GearDoodle, GitBranchDoodle, CodeWindowDoodle } from "@/components/doodles";

const groups = [
  {
    title: "Languages",
    bg: "bg-[#f7e3a1]",
    chip: "bg-[#f6c945]",
    rotate: "-rotate-1",
    skills: ["JavaScript", "TypeScript", "Java", "Python", "SQL", "Kotlin", "Dart"],
  },
  {
    title: "Frontend & Mobile",
    bg: "bg-[#bfe8d0]",
    chip: "bg-[#3fbf7f]",
    rotate: "rotate-1",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Flutter", "React Native", "Android (Kotlin)"],
  },
  {
    title: "Backend & Data",
    bg: "bg-[#f9c5d8]",
    chip: "bg-[#f472b6]",
    rotate: "rotate-1",
    skills: ["Node.js", "Express.js", "Spring Boot", "Laravel", "REST APIs", "Prisma", "PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    title: "Cloud & Tools",
    bg: "bg-[#c5d4f7]",
    chip: "bg-[#4a67e8] text-white",
    rotate: "-rotate-1",
    skills: ["AWS", "Docker", "CI/CD", "Git", "GitHub", "Postman", "Razorpay", "WhatsApp & email APIs", "IoT devices", "AI-assisted dev"],
  },
];

const ToolboxSection = () => (
  <section id="toolbox" className="relative py-28 px-6">
    <div className="max-w-6xl mx-auto">
      <SectionTitle
        kicker="stuff I use every day"
        aside={
          <Float className="flex items-end gap-5" duration={5.5}>
            <CodeWindowDoodle className="w-40 rotate-3" />
            <GitBranchDoodle className="w-10" />
            <GearDoodle className="w-14" />
          </Float>
        }
      >
        Toolbox
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.08 }}
            className={`${g.bg} ${g.rotate} p-8 shadow-[3px_5px_0_rgba(0,0,0,0.18)]`}
          >
            <h3 className="font-display text-4xl uppercase leading-none mb-6">{g.title}</h3>
            <div className="flex flex-wrap gap-3">
              {g.skills.map((s, i) => (
                <motion.span
                  key={s}
                  whileHover={{ rotate: i % 2 ? 4 : -4, scale: 1.1, y: -3 }}
                  className={`${g.chip} border-2 border-ink px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0_0_#1a1a1a] cursor-default`}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ToolboxSection;
