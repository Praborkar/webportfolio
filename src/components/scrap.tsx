import { ReactNode } from "react";

/** Shared scrapbook building blocks: tape labels, polaroids, section titles. */

export const tapeColors = {
  yellow: "bg-[#f7e3a1]",
  pink: "bg-[#f9c5d8]",
  mint: "bg-[#bfe8d0]",
  blue: "bg-[#c5d4f7]",
  sand: "bg-[#e6ddc9]",
  orange: "bg-[#f9d3a8]",
} as const;

export type Tone = keyof typeof tapeColors;

export const Tape = ({
  children,
  tone = "yellow",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) => (
  <span
    className={`inline-block px-3 py-1 font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-ink shadow-[1px_2px_0_rgba(0,0,0,0.12)] ${tapeColors[tone]} ${className}`}
    style={{ clipPath: "polygon(2% 0, 98% 6%, 100% 94%, 0 100%)" }}
  >
    {children}
  </span>
);

export const Polaroid = ({
  src,
  caption,
  className = "",
  rotate = "-rotate-3",
  tone = "yellow",
  backdrop = "bg-[#e7e3d8]",
}: {
  src: string;
  caption: string;
  className?: string;
  rotate?: string;
  tone?: Tone;
  backdrop?: string;
}) => (
  <figure
    className={`relative bg-white p-3 pb-10 shadow-[0_6px_18px_rgba(0,0,0,0.2)] ${rotate} ${className}`}
  >
    <span className={`absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 rotate-2 opacity-90 ${tapeColors[tone]}`} />
    <div className={`overflow-hidden ${backdrop}`}>
      <img src={src} alt={caption} className="w-full aspect-[4/5] object-cover object-top" />
    </div>
    <figcaption className="absolute bottom-2 left-0 right-0 text-center font-hand text-base text-ink/70">
      {caption}
    </figcaption>
  </figure>
);

export const SectionTitle = ({
  kicker,
  children,
  aside,
}: {
  kicker: string;
  children: ReactNode;
  aside?: ReactNode;
}) => (
  <div className="mb-12 relative">
    {aside && <div className="hidden md:block absolute right-0 -top-6">{aside}</div>}
    <p className="font-hand text-xl text-ink/60 -rotate-1 mb-1">{kicker}</p>
    <h2 className="font-display text-6xl md:text-8xl leading-[0.9] text-ink uppercase">{children}</h2>
  </div>
);
