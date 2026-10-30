const links = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Toolbox", href: "/#toolbox" },
  { label: "Contact", href: "/#contact" },
];

const Footer = () => (
  <footer className="border-t-2 border-ink py-8 px-6 text-center font-mono text-[11px] uppercase tracking-widest text-ink/60">
    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 text-ink">
      {links.map((l) => (
        <a key={l.label} href={l.href} className="font-bold underline underline-offset-4 decoration-2 decoration-[#f6c945] hover:text-[#e5484d]">
          {l.label}
        </a>
      ))}
    </nav>
    © 2026 Prabor Kar · Built with React, Tailwind &amp; Framer Motion
  </footer>
);

export default Footer;
