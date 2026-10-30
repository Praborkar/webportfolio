import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionTitle, Tape, type Tone } from "@/components/scrap";
import { Float, MugDoodle, CursorDoodle } from "@/components/doodles";

interface Experience {
  role: string;
  company: string;
  type: string;
  tone: Tone;
  duration: string;
  present?: boolean;
  location: string;
  bullets: string[];
  skills: string[];
  apps?: { label: string; url: string }[];
}

// Source: LinkedIn profile + resume. Futurebits is shown as two roles (10 months in total).
const experiences: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "Futurebits",
    type: "Full-time",
    tone: "mint",
    duration: "Apr 2026 - Present",
    present: true,
    location: "Dubai, UAE · Remote",
    bullets: [
      "Built and published three Android apps on Google Play with Flutter and React Native: Nella (beauty treatment tracker for MyNella Ltd, UK), mivadodara (teacher attendance) and Blame Game (party card game). Contributed to the initial build of BASU Classes, a student and teacher academic app.",
      "Implemented OTP login and fingerprint verification for attendance check-in in mivadodara, with data synced to the administrator dashboard.",
      "Built treatment tracking, AM/PM skincare routines, reminders and spend insights in Nella, and developed Blame Game as an offline app with 25+ question packs unlocked through in-app purchases.",
      "Connected app front ends to backend services through REST APIs and database workflows, and built full-stack applications with React, Next.js, Node.js, Express, MongoDB and Firebase.",
    ],
    skills: ["Flutter", "React Native", "Next.js", "Node.js", "MongoDB", "Firebase", "REST APIs"],
    apps: [
      { label: "Nella", url: "https://play.google.com/store/apps/details?id=com.mynella.nella" },
      { label: "mivadodara", url: "https://play.google.com/store/apps/details?id=org.mivadodara.app" },
      { label: "Blame Game", url: "https://play.google.com/store/apps/details?id=com.prabor.blamegame" },
      { label: "BASU Classes (contributor)", url: "https://play.google.com/store/apps/details?id=com.basuclasses" },
    ],
  },
  {
    role: "App Developer",
    company: "Futurebits",
    type: "Internship",
    tone: "yellow",
    duration: "Jan 2026 - Mar 2026",
    location: "Dubai, UAE · Remote",
    bullets: [
      "Assisted in developing and maintaining web and mobile applications using modern development technologies.",
      "Developed mobile UI and feature workflows in Flutter and React Native, and contributed front-end integration on IoT-connected mobile apps.",
      "Worked with React, JavaScript, REST APIs and database integrations to implement application features.",
      "Collaborated with the team to debug issues, improve UI/UX and optimise performance, using Git, code reviews and testing.",
    ],
    skills: ["React Native", "Flutter", "React", "REST APIs", "IoT", "Git"],
  },
  {
    role: "Freelance Web Developer",
    company: "Freelance",
    type: "Freelance",
    tone: "pink",
    duration: "Jul 2025 - Jan 2026",
    location: "Remote",
    bullets: [
      "Delivered mobile and web applications in React, Node.js, Laravel and Kotlin for clients across various domains, owning requirements, implementation, debugging and delivery.",
      "Built responsive web apps using React, Next.js, Node.js and Tailwind CSS, and mobile apps using React Native with Firebase and REST APIs.",
      "Worked on SaaS platforms, CRM integrations, dashboards and business automation solutions.",
      "Built reusable UI components and navigation flows, and managed deployment on Vercel, Netlify and Render.",
    ],
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "React Native", "Firebase", "SaaS", "CRM", "Computer Vision"],
  },
  {
    role: "Mobile Application Developer",
    company: "BASU Classes",
    type: "Part-time",
    tone: "blue",
    duration: "Mar 2026 - Apr 2026",
    location: "Noida, Uttar Pradesh · Hybrid",
    bullets: [
      "Contributed to the development of the BASU Classes mobile application, supporting the delivery of a mobile learning experience for students.",
      "Worked on mobile app development and user experience improvements, making the app more accessible and convenient for users.",
    ],
    skills: ["Mobile Development", "UI Design", "User Experience"],
    apps: [{ label: "BASU Classes", url: "https://play.google.com/store/apps/details?id=com.basuclasses" }],
  },
  {
    role: "Web Developer Intern",
    company: "Suvidha Foundation (Suvidha Mahila Mandal)",
    type: "Internship",
    tone: "orange",
    duration: "Sep 2025 - Oct 2025",
    location: "Remote · India",
    bullets: ["Contributed to front-end development and feature implementation against project requirements."],
    skills: ["React.js", "MongoDB", "Front-End"],
  },
];

const education = [
  {
    degree: "B.Tech in Information Technology",
    school: "Noida Institute of Engineering & Technology, Greater Noida",
    when: "Nov 2022 - Aug 2026",
    result: "CGPA 7.52",
    tone: "bg-[#f7e3a1]",
    rotate: "-rotate-1",
  },
  {
    degree: "Senior Secondary (Class XII), PCM",
    school: "Kendriya Vidyalaya",
    when: "Apr 2021 - May 2022",
    result: "80%",
    tone: "bg-[#bfe8d0]",
    rotate: "rotate-1",
  },
  {
    degree: "Secondary (Class X)",
    school: "Kendriya Vidyalaya",
    when: "Mar 2019 - May 2020",
    result: "82%",
    tone: "bg-[#f9c5d8]",
    rotate: "-rotate-1",
  },
];

const certifications = [
  "Introduction to Python Data Analysis with Pandas",
  "Python Programming in C",
  "Database Management System - Science Graduates",
  "Java Programming: Arrays, Lists, and Structured Data",
];

const ExperienceSection = () => (
  <section id="experience" className="relative py-28 px-6">
    <div className="max-w-5xl mx-auto">
      <SectionTitle
        kicker="where I've worked"
        aside={
          <Float className="flex items-end gap-4" duration={5}>
            <CursorDoodle className="w-24" />
            <MugDoodle className="w-20 -rotate-6" />
          </Float>
        }
      >
        Experience
      </SectionTitle>

      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role + exp.company + exp.duration}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8"
          >
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-ink/70 md:text-right md:pt-6">
              <p>{exp.duration}</p>
              {exp.present && (
                <p className="inline-flex items-center gap-1.5 mt-1.5 text-[#1f9d63]">
                  <span className="w-2 h-2 rounded-full bg-[#3fbf7f] animate-pulse" /> Current role
                </p>
              )}
              <p className="opacity-60 mt-1 normal-case font-normal">{exp.location}</p>
            </div>

            <div
              className={`relative border-2 border-ink bg-white p-6 md:p-8 shadow-[6px_6px_0_0_#1a1a1a] ${
                i % 2 ? "rotate-[0.4deg]" : "-rotate-[0.4deg]"
              }`}
            >
              <Tape tone={exp.tone} className="absolute -top-3 left-6">{exp.type}</Tape>
              <h3 className="font-display text-4xl md:text-5xl leading-none uppercase text-ink">{exp.role}</h3>
              <p className="font-hand text-2xl text-ink/70 mt-1 mb-4">@ {exp.company}</p>

              <ul className="space-y-2 text-sm leading-relaxed text-ink/80">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 shrink-0 bg-ink" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {exp.apps && (
                <div className="flex flex-wrap items-center gap-2 mt-5">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink/50">On Google Play:</span>
                  {exp.apps.map((a) => (
                    <a
                      key={a.label}
                      href={a.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 border-2 border-ink px-2.5 py-1 font-mono text-[10px] font-bold uppercase hover:bg-[#f6c945] transition-colors"
                    >
                      {a.label} <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-5">
                {exp.skills.map((s) => (
                  <span key={s} className="border border-ink/40 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-ink/70">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education */}
      <div className="mt-28">
        <p className="font-hand text-xl text-ink/60 -rotate-1 mb-1">and the school bit</p>
        <h3 className="font-display text-6xl md:text-7xl leading-[0.9] uppercase text-ink mb-10">Education</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((e) => (
            <div key={e.degree} className={`${e.tone} ${e.rotate} p-6 shadow-[3px_4px_0_rgba(0,0,0,0.18)]`}>
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest opacity-60">{e.when}</p>
              <h4 className="font-display text-3xl leading-tight mt-1 uppercase">{e.degree}</h4>
              <p className="text-sm mt-1 opacity-80">{e.school}</p>
              {e.result && <p className="font-hand text-2xl mt-3">{e.result}</p>}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink/60 mb-3">Certifications</p>
          <div className="flex flex-wrap gap-3">
            {certifications.map((c, i) => (
              <Tape key={c} tone={(["blue", "pink", "mint", "orange"] as Tone[])[i]} className={i % 2 ? "rotate-1" : "-rotate-1"}>
                {c}
              </Tape>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
