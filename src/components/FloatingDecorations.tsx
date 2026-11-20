import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Heart, Star, Flower2 } from "lucide-react";

const ICONS = [Heart, Star, Flower2, Heart, Heart, Star];

export default function FloatingDecorations() {
  const reduce = useReducedMotion();
  const items = useMemo(
    () => Array.from({ length: 9 }, (_, i) => ({
      Icon: ICONS[i % ICONS.length], left: 5 + ((i * 11) % 90), size: 14 + (i % 3) * 6,
      dur: 14 + (i % 4) * 3, delay: i * 1.3,
    })), []);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {items.map(({ Icon, left, size, dur, delay }, i) => (
        <motion.span key={i} className="absolute text-[#F7A9C4]/60" style={{ left: `${left}%`, bottom: reduce ? `${10 + i * 9}%` : "-5%" }}
          animate={reduce ? undefined : { y: [0, -1100], x: [0, i % 2 ? 24 : -24, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: dur, delay, repeat: Infinity, ease: "linear" }}>
          <Icon size={size} fill="currentColor" />
        </motion.span>
      ))}
    </div>
  );
}

/** One-shot burst of hearts from the centre of its parent. */
export function HeartBurst({ count = 16 }: { count?: number }) {
  const reduce = useReducedMotion();
  const parts = useMemo(() => Array.from({ length: count }, (_, i) => {
    const a = (i / count) * Math.PI * 2, d = 70 + (i % 4) * 28;
    return { x: Math.cos(a) * d, y: Math.sin(a) * d - 40, s: 12 + (i % 3) * 5, r: (i % 2 ? 1 : -1) * 30 };
  }), [count]);
  if (reduce) return null;
  return (
    <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 z-20">
      {parts.map((p, i) => (
        <motion.span key={i} className="absolute text-[#E979A5]" initial={{ x: 0, y: 0, opacity: 1, scale: 0.4 }}
          animate={{ x: p.x, y: p.y - 60, opacity: 0, scale: 1, rotate: p.r }} transition={{ duration: 1.6, ease: "easeOut" }}>
          <Heart size={p.s} fill="currentColor" />
        </motion.span>
      ))}
    </div>
  );
}
