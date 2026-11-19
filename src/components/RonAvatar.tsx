import { motion } from "framer-motion";

// Ron's illustrated avatar: a friendly robot face in the site's ink-outline doodle style.
// Eyes blink on a loop and the antenna light pulses, so it reads as a live agent, not a static icon.
const RonAvatar = ({ className = "w-10 h-10", showStatus = false }: { className?: string; showStatus?: boolean }) => {
  const blink = {
    animate: { scaleY: [1, 1, 0.1, 1] },
    transition: { duration: 4, repeat: Infinity, times: [0, 0.9, 0.93, 1], ease: "easeInOut" as const },
    style: { transformBox: "fill-box" as const, transformOrigin: "center" },
  };

  return (
    <span className={`relative inline-block shrink-0 ${className}`} aria-hidden="true">
      <svg viewBox="0 0 64 64" className="w-full h-full overflow-visible" role="img">
        {/* antenna and pulsing light */}
        <line x1="32" y1="12" x2="32" y2="6" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
        <motion.circle
          cx="32"
          cy="4.5"
          r="3.5"
          fill="#f472b6"
          stroke="#1a1a1a"
          strokeWidth="2"
          animate={{ opacity: [1, 0.35, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ears */}
        <rect x="4" y="27" width="7" height="13" rx="2.5" fill="#bfe8d0" stroke="#1a1a1a" strokeWidth="2.5" />
        <rect x="53" y="27" width="7" height="13" rx="2.5" fill="#bfe8d0" stroke="#1a1a1a" strokeWidth="2.5" />

        {/* head */}
        <rect x="10" y="12" width="44" height="42" rx="15" fill="#f6c945" stroke="#1a1a1a" strokeWidth="2.5" />

        {/* visor screen */}
        <rect x="16" y="22" width="32" height="20" rx="8" fill="#fdf6dc" stroke="#1a1a1a" strokeWidth="1.5" />

        {/* eyes */}
        <motion.ellipse cx="25" cy="32" rx="3.2" ry="4.2" fill="#1a1a1a" {...blink} />
        <motion.ellipse cx="39" cy="32" rx="3.2" ry="4.2" fill="#1a1a1a" {...blink} />
        <circle cx="26.2" cy="30.4" r="1" fill="#fdf6dc" />
        <circle cx="40.2" cy="30.4" r="1" fill="#fdf6dc" />

        {/* cheeks */}
        <circle cx="18" cy="40" r="3" fill="#f472b6" opacity="0.6" />
        <circle cx="46" cy="40" r="3" fill="#f472b6" opacity="0.6" />

        {/* smile */}
        <path d="M27 46 Q32 50.5 37 46" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      {showStatus && (
        <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3" aria-label="online">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#3fbf7f] opacity-75 animate-ping" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-[#3fbf7f] border-2 border-ink" />
        </span>
      )}
    </span>
  );
};

export default RonAvatar;
