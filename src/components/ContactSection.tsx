import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Polaroid, Tape } from "@/components/scrap";
import { Float, PaperPlaneDoodle, PhoneDoodle, SparkleDoodle } from "@/components/doodles";

const workedWith = [
  { name: "Futurebits", tone: "mint" as const },
  { name: "MyNella Ltd", tone: "pink" as const },
  { name: "Theoretic Softnet", tone: "blue" as const },
  { name: "Suvidha Foundation", tone: "yellow" as const },
];

const links = [
  { icon: Mail, label: "prabork@gmail.com", href: "mailto:prabork@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/Praborkar" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/prabor-kar/" },
];

const fieldClass =
  "w-full bg-transparent border-b-2 border-ink/60 focus:border-ink outline-none py-2 font-hand text-2xl text-ink placeholder:text-ink/40";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // No mail backend is configured, so open the visitor's email app with the message filled in.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n- ${form.name} (${form.email})`);
    window.location.href = `mailto:prabork@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email app", description: "Press send there to deliver your message." });
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Worked with */}
        <div className="text-center mb-24">
          <p className="font-hand text-xl text-ink/60 mb-4">worked with</p>
          <div className="flex flex-wrap justify-center gap-4">
            {workedWith.map((w, i) => (
              <Tape key={w.name} tone={w.tone} className={`text-sm md:text-base px-5 py-2 ${i % 2 ? "rotate-1" : "-rotate-2"}`}>
                {w.name}
              </Tape>
            ))}
          </div>
        </div>

        {/* Let's talk */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 160, damping: 12 }}
            className="mx-auto w-28 h-28 rounded-full bg-[#f6c945] border-2 border-ink relative mb-6"
          >
            <span className="absolute top-9 left-8 w-3 h-3 rounded-full bg-ink" />
            <span className="absolute top-9 right-8 w-3 h-3 rounded-full bg-ink" />
            <span className="absolute bottom-7 left-1/2 -translate-x-1/2 w-12 h-6 border-b-4 border-ink rounded-b-full" />
            <span className="absolute bottom-9 left-4 w-4 h-4 rounded-full bg-[#f472b6]/70" />
            <span className="absolute bottom-9 right-4 w-4 h-4 rounded-full bg-[#f472b6]/70" />
          </motion.div>
          <div className="relative inline-block">
            <h2 className="font-display text-7xl md:text-9xl leading-[0.9] uppercase text-ink">Let's Talk</h2>
            <Float className="hidden md:block absolute -right-36 -top-4 w-28" duration={4.5}>
              <PaperPlaneDoodle className="w-full" />
            </Float>
            <Float className="hidden lg:block absolute -left-32 top-2 w-12 -rotate-12" duration={5.5} delay={0.5}>
              <PhoneDoodle className="w-full" />
            </Float>
            <Float className="hidden md:block absolute -left-10 -top-6 w-8" duration={3.8}>
              <SparkleDoodle className="w-full" color="#f472b6" />
            </Float>
          </div>
          <p className="font-hand text-2xl text-ink/70 mt-3">
            Got a project, a role, or just want to say hi? I read every message.
          </p>
        </div>

        {/* Form on a sticky note, flanked by polaroids */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,28rem)_1fr] gap-10 items-center">
          <div className="hidden lg:block justify-self-end w-52">
            <Polaroid src="/profile-cutout.png" caption="say hi" tone="pink" rotate="-rotate-6" backdrop="bg-[#f472b6]" />
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#f7e3a1] p-8 shadow-[0_8px_24px_rgba(0,0,0,0.2)] rotate-1"
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#c5d4f7] opacity-90 -rotate-2" />
            <div className="space-y-6">
              <input name="name" value={form.name} onChange={onChange} required placeholder="your name" className={fieldClass} />
              <input name="email" type="email" value={form.email} onChange={onChange} required placeholder="your email" className={fieldClass} />
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={4}
                placeholder="tell me about your project or role..."
                className={`${fieldClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-3 bg-ink text-paper font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#e5484d] transition-colors"
            >
              Send message <Send className="w-3.5 h-3.5" />
            </button>
          </motion.form>

          <div className="hidden lg:block justify-self-start w-52">
            <div className="relative bg-[#bfe8d0] p-5 shadow-[3px_4px_0_rgba(0,0,0,0.18)] rotate-3">
              <span className="absolute -top-3 left-6 w-16 h-5 bg-[#f7e3a1] opacity-90 -rotate-3" />
              <p className="font-hand text-2xl leading-snug text-ink">
                open to full-time roles &amp; freelance work
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-ink underline underline-offset-4 decoration-2 decoration-[#f472b6] hover:text-[#e5484d]"
            >
              <l.icon className="w-4 h-4" /> {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
