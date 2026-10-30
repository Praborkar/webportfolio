import { ReactNode } from "react";
import { motion } from "framer-motion";

/** Flat, sticker-style SVG illustrations used around the page. */

const INK = "#1a1a1a";
const PAPER = "#f4f2ec";

type P = { className?: string };

export const Float = ({
  children,
  className = "",
  amount = 8,
  duration = 5,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
  duration?: number;
  delay?: number;
}) => (
  <motion.div
    aria-hidden
    className={`pointer-events-none select-none ${className}`}
    animate={{ y: [0, -amount, 0] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
  >
    {children}
  </motion.div>
);

export const PhoneDoodle = ({ className }: P) => (
  <svg viewBox="0 0 100 190" className={className} fill="none">
    <rect x="10" y="10" width="88" height="176" rx="16" fill={INK} />
    <rect x="4" y="4" width="88" height="176" rx="16" fill={PAPER} stroke={INK} strokeWidth="4" />
    <rect x="12" y="14" width="72" height="156" rx="8" fill="#c5d4f7" stroke={INK} strokeWidth="2" />
    <rect x="36" y="8" width="24" height="4" rx="2" fill={INK} />
    <rect x="18" y="22" width="60" height="12" rx="3" fill="#f6c945" stroke={INK} strokeWidth="2" />
    <rect x="18" y="42" width="60" height="34" rx="4" fill="#fff" stroke={INK} strokeWidth="2" />
    <circle cx="30" cy="59" r="8" fill="#f472b6" stroke={INK} strokeWidth="2" />
    <rect x="44" y="52" width="26" height="4" rx="2" fill={INK} />
    <rect x="44" y="61" width="18" height="4" rx="2" fill={INK} opacity="0.4" />
    <rect x="18" y="84" width="28" height="28" rx="4" fill="#f472b6" stroke={INK} strokeWidth="2" />
    <rect x="50" y="84" width="28" height="28" rx="4" fill="#3fbf7f" stroke={INK} strokeWidth="2" />
    <rect x="18" y="120" width="60" height="18" rx="4" fill="#fff" stroke={INK} strokeWidth="2" />
    <rect x="18" y="146" width="60" height="16" rx="8" fill={INK} />
  </svg>
);

export const LaptopDoodle = ({ className }: P) => (
  <svg viewBox="0 0 220 150" className={className} fill="none">
    <rect x="36" y="14" width="164" height="104" rx="8" fill={INK} />
    <rect x="30" y="8" width="164" height="104" rx="8" fill={PAPER} stroke={INK} strokeWidth="4" />
    <rect x="38" y="16" width="148" height="88" rx="3" fill={INK} />
    <rect x="46" y="26" width="50" height="5" rx="2" fill="#f6c945" />
    <rect x="56" y="38" width="70" height="5" rx="2" fill="#3fbf7f" />
    <rect x="56" y="50" width="40" height="5" rx="2" fill="#f472b6" />
    <rect x="66" y="62" width="64" height="5" rx="2" fill="#c5d4f7" />
    <rect x="56" y="74" width="30" height="5" rx="2" fill="#f6c945" />
    <rect x="46" y="86" width="20" height="5" rx="2" fill="#3fbf7f" />
    <path d="M10 116 H222 L210 134 H22 Z" fill={INK} />
    <path d="M6 112 H218 L206 130 H18 Z" fill="#e7e3d8" stroke={INK} strokeWidth="4" strokeLinejoin="round" />
    <rect x="96" y="112" width="28" height="5" rx="2" fill={INK} />
  </svg>
);

export const CodeWindowDoodle = ({ className }: P) => (
  <svg viewBox="0 0 200 130" className={className} fill="none">
    <rect x="10" y="10" width="186" height="116" rx="8" fill={INK} />
    <rect x="4" y="4" width="186" height="116" rx="8" fill="#fff" stroke={INK} strokeWidth="4" />
    <rect x="6" y="6" width="182" height="20" rx="5" fill="#f6c945" />
    <line x1="4" y1="26" x2="190" y2="26" stroke={INK} strokeWidth="3" />
    <circle cx="18" cy="16" r="3.5" fill="#f472b6" stroke={INK} strokeWidth="1.5" />
    <circle cx="30" cy="16" r="3.5" fill="#fff" stroke={INK} strokeWidth="1.5" />
    <circle cx="42" cy="16" r="3.5" fill="#3fbf7f" stroke={INK} strokeWidth="1.5" />
    <rect x="16" y="38" width="44" height="6" rx="3" fill="#3b5bdb" />
    <rect x="26" y="52" width="70" height="6" rx="3" fill={INK} opacity="0.7" />
    <rect x="26" y="66" width="48" height="6" rx="3" fill="#f472b6" />
    <rect x="26" y="80" width="62" height="6" rx="3" fill="#3fbf7f" />
    <rect x="16" y="94" width="30" height="6" rx="3" fill="#3b5bdb" />
    <text x="146" y="82" textAnchor="middle" fontFamily="'Space Mono', monospace" fontWeight="700" fontSize="30" fill="#e5484d">
      {"{ }"}
    </text>
  </svg>
);

export const MugDoodle = ({ className }: P) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    <path d="M26 24 q-6 -8 0 -14 M40 24 q-6 -8 0 -14 M54 24 q-6 -8 0 -14" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    <rect x="14" y="34" width="56" height="56" rx="10" fill={INK} />
    <path d="M70 46 h6 a11 11 0 0 1 0 28 h-6" stroke={INK} strokeWidth="4" strokeLinecap="round" />
    <rect x="10" y="30" width="56" height="56" rx="10" fill="#f9c5d8" stroke={INK} strokeWidth="4" />
    <text x="38" y="66" textAnchor="middle" fontFamily="'Space Mono', monospace" fontWeight="700" fontSize="15" fill={INK}>
      {"</>"}
    </text>
  </svg>
);

export const CursorDoodle = ({ className }: P) => (
  <svg viewBox="0 0 110 70" className={className} fill="none">
    <path d="M6 4 L6 40 L15 31 L22 46 L29 43 L22 28 L34 28 Z" fill="#fff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    <rect x="36" y="38" width="68" height="24" rx="12" fill="#3b5bdb" stroke={INK} strokeWidth="3" />
    <text x="70" y="55" textAnchor="middle" fontFamily="'Space Mono', monospace" fontWeight="700" fontSize="12" fill="#fff">
      Prabor
    </text>
  </svg>
);

export const GearDoodle = ({ className }: P) => (
  <svg viewBox="0 0 60 60" className={className} fill="none">
    <g transform="translate(30 30)">
      <circle r="22" stroke={INK} strokeWidth="9" strokeDasharray="8.64 8.64" />
      <circle r="18" fill="#f6c945" stroke={INK} strokeWidth="4" />
      <circle r="6" fill={PAPER} stroke={INK} strokeWidth="3" />
    </g>
  </svg>
);

export const GitBranchDoodle = ({ className }: P) => (
  <svg viewBox="0 0 50 80" className={className} fill="none">
    <path d="M12 14 V66" stroke={INK} strokeWidth="4" strokeLinecap="round" />
    <path d="M12 50 C12 32 38 36 38 22" stroke={INK} strokeWidth="4" strokeLinecap="round" />
    <circle cx="12" cy="12" r="8" fill="#f6c945" stroke={INK} strokeWidth="3.5" />
    <circle cx="12" cy="68" r="8" fill="#f472b6" stroke={INK} strokeWidth="3.5" />
    <circle cx="38" cy="20" r="8" fill="#3fbf7f" stroke={INK} strokeWidth="3.5" />
  </svg>
);

export const SparkleDoodle = ({ className, color = "#f6c945" }: P & { color?: string }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none">
    <path
      d="M20 2 C22 14 26 18 38 20 C26 22 22 26 20 38 C18 26 14 22 2 20 C14 18 18 14 20 2Z"
      fill={color}
      stroke={INK}
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const SquiggleDoodle = ({ className }: P) => (
  <svg viewBox="0 0 120 20" className={className} fill="none">
    <path d="M2 10 q10 -12 20 0 t20 0 t20 0 t20 0 t20 0" stroke="#e5484d" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const PaperPlaneDoodle = ({ className }: P) => (
  <svg viewBox="0 0 110 80" className={className} fill="none">
    <path d="M2 70 C20 70 22 50 40 52" stroke={INK} strokeWidth="2.5" strokeDasharray="4 5" strokeLinecap="round" />
    <path d="M30 36 L104 6 L78 70 L58 48 Z" fill="#fff" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
    <path d="M58 48 L104 6 L66 56 Z" fill="#c5d4f7" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
  </svg>
);
