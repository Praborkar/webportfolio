import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { publishedWork } from "@/data/publishedWork";
import { SectionTitle, Tape } from "@/components/scrap";
import { Float, PhoneDoodle, LaptopDoodle } from "@/components/doodles";

const tones = [
  "bg-[#f6c945] text-ink",
  "bg-ink text-paper",
  "bg-[#bfe8d0] text-ink",
  "bg-[#f9c5d8] text-ink",
  "bg-[#c5d4f7] text-ink",
];

const caseNotes = [
  {
    title: "Reservations",
    text: "Booking lifecycle workflows, room availability and inventory management, and guest management.",
    tone: "bg-[#f7e3a1]",
    rotate: "-rotate-1",
  },
  {
    title: "Operations",
    text: "Restaurant POS and room service, housekeeping, and hotel inventory modules.",
    tone: "bg-[#bfe8d0]",
    rotate: "rotate-1",
  },
  {
    title: "Money & messaging",
    text: "Invoicing and tax functionality, Razorpay payments, plus email and WhatsApp messaging.",
    tone: "bg-[#f9c5d8]",
    rotate: "-rotate-1",
  },
];

const facts = [
  { label: "Role", value: "Full-Stack Developer" },
  { label: "Type", value: "Client project · B2B + B2C" },
  { label: "Stack", value: "Next.js · TypeScript · PostgreSQL · Prisma · Redis" },
  { label: "Status", value: "Live" },
];

const WorkSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!api || paused) return;
    const id = setInterval(() => api.scrollNext(), 4500);
    return () => clearInterval(id);
  }, [api, paused]);

  return (
    <section id="work" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          kicker="selected things I've shipped"
          aside={
            <Float className="flex items-end gap-4" duration={6}>
              <LaptopDoodle className="w-40 -rotate-3" />
              <PhoneDoodle className="w-14 rotate-6" />
            </Float>
          }
        >
          Featured Works
        </SectionTitle>

        <div
          className="relative px-0 md:px-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <Carousel setApi={setApi} opts={{ loop: true, align: "start" }}>
            <CarouselContent className="-ml-6 py-8 pr-3">
              {publishedWork.map((p, i) => (
                <CarouselItem key={p.name} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <motion.article
                    whileHover={{ y: -6 }}
                    className={`relative h-full border-2 border-ink p-6 pt-9 shadow-[6px_6px_0_0_#1a1a1a] flex flex-col ${tones[i % tones.length]}`}
                  >
                    <span className="absolute -top-3 left-4 bg-[#3b5bdb] text-white font-mono text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
                      Project #{String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="flex items-center justify-between mb-5">
                      <p.icon className="w-8 h-8" strokeWidth={1.5} />
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider opacity-70">
                        {p.platform}
                      </span>
                    </div>

                    <h3 className="font-display text-5xl leading-none uppercase">{p.name}</h3>
                    <p className="font-hand text-2xl mt-1 mb-3 opacity-80">{p.tagline}</p>
                    <p className="text-sm leading-relaxed opacity-80">{p.description}</p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {p.stack.map((t) => (
                        <span key={t} className="border border-current/40 px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-6 flex flex-wrap gap-4">
                      {p.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest underline underline-offset-4 decoration-2"
                        >
                          {l.label} <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </motion.article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:inline-flex rounded-none border-2 border-ink bg-paper text-ink hover:bg-[#f6c945] -left-2 md:-left-12" />
            <CarouselNext className="hidden md:inline-flex rounded-none border-2 border-ink bg-paper text-ink hover:bg-[#f6c945] -right-2 md:-right-12" />
          </Carousel>
        </div>

        {/* Case study */}
        <div className="mt-28">
          <p className="font-hand text-xl text-ink/60 -rotate-1 mb-1">case study</p>
          <h3 className="font-display text-6xl md:text-8xl leading-[0.9] uppercase text-ink">Theoretic Hotels</h3>
          <p className="mt-3 text-ink/70 max-w-2xl">
            A multi-tenant B2B property management and CRM system for hotel managers, plus a B2C direct-booking
            storefront for travellers. I designed and built the full system.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {facts.map((f, i) => (
              <div
                key={f.label}
                className={`p-4 shadow-[2px_3px_0_rgba(0,0,0,0.15)] ${["bg-[#c5d4f7] -rotate-1", "bg-[#f7e3a1] rotate-1", "bg-[#bfe8d0] -rotate-1", "bg-[#f9c5d8] rotate-1"][i]}`}
              >
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest opacity-60">{f.label}</p>
                <p className="text-sm font-bold mt-1">{f.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseNotes.map((n) => (
              <div
                key={n.title}
                className={`relative border-2 border-ink bg-white p-6 shadow-[5px_5px_0_0_#1a1a1a] ${n.rotate}`}
              >
                <Tape tone="yellow" className="absolute -top-3 left-4">{n.title}</Tape>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">{n.text}</p>
              </div>
            ))}
          </div>

          <a
            href="http://theoretichotels.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-ink text-paper font-mono text-xs font-bold uppercase tracking-widest shadow-[4px_4px_0_0_#f6c945] hover:bg-[#e5484d] transition-colors"
          >
            Visit live site <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
