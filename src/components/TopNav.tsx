import { useEffect, useState } from "react";
import { Star, Github, Linkedin, Mail } from "lucide-react";

const tabs = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "toolbox", label: "Toolbox" },
];

const dots = [
  { href: "https://github.com/Praborkar", color: "bg-[#f6c945]", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/prabor-kar/", color: "bg-[#f472b6]", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:prabork@gmail.com", color: "bg-[#3fbf7f]", label: "Email", icon: Mail },
];

const TopNav = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    tabs.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // keep the active tab visible when the tab strip scrolls (phones)
  useEffect(() => {
    document.getElementById(`tab-${active}`)?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [active]);

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `/#${id}`);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-11 bg-paper/95 backdrop-blur border-b-2 border-ink flex items-center justify-between px-2 sm:px-3 md:px-5 gap-2 font-mono text-[10px] uppercase tracking-wider">
      <nav className="flex items-center gap-0.5 sm:gap-1 overflow-x-auto no-scrollbar min-w-0">
        <span className="hidden sm:block w-3 h-3 rounded-full bg-[#f472b6] border border-ink mr-2 shrink-0" />
        {tabs.map((t) => (
          <a
            key={t.id}
            id={`tab-${t.id}`}
            href={`/#${t.id}`}
            onClick={(e) => go(e, t.id)}
            className={`px-2 sm:px-3 py-2 font-bold flex items-center gap-1.5 shrink-0 transition-colors ${
              active === t.id ? "bg-[#f6c945] text-ink" : "text-ink/70 hover:text-ink"
            }`}
          >
            {active === t.id && <Star className="w-2.5 h-2.5 fill-ink" />}
            {t.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2 shrink-0">
        {dots.map((d) => (
          <a
            key={d.label}
            href={d.href}
            target={d.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={d.label}
            title={d.label}
            className={`hidden md:flex items-center justify-center w-7 h-7 rounded-full border-2 border-ink ${d.color} hover:scale-110 hover:-rotate-6 transition-transform`}
          >
            <d.icon className="w-3.5 h-3.5 text-ink" strokeWidth={2.2} />
          </a>
        ))}
        <a
          href="/#contact"
          onClick={(e) => go(e, "contact")}
          className="md:ml-2 px-2.5 sm:px-3 py-1.5 border-2 border-ink font-bold hover:bg-ink hover:text-paper transition-colors"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default TopNav;
