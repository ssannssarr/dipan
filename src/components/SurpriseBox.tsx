import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Heart, RotateCcw, Sparkles } from "lucide-react";
import { HeartBurst } from "./FloatingDecorations";

const MESSAGE =
  "You're someone special to me, Dipan. This little website is just a tiny reminder that you deserve thoughtful moments, genuine care, and smiles. Here's one more little heart for you. ♡";

export default function SurpriseBox() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [burstKey, setBurstKey] = useState(0);
  const spring = reduce ? { duration: 0 } : { type: "spring" as const, stiffness: 160, damping: 12 };

  const openBox = () => { if (!open) { setOpen(true); setBurstKey((k) => k + 1); } };

  return (
    <section aria-labelledby="gift" className="py-14 text-center">
      <h2 id="gift" className="hand mb-6 text-2xl text-[#E979A5]">Wait... there's one more thing!</h2>
      <button onClick={openBox} aria-expanded={open} aria-label={open ? "Gift box opened" : "Open the gift box"}
        className="relative mx-auto block h-52 w-48 rounded-2xl" disabled={open}>
        {!open && [0, 1, 2].map((i) => (
          <motion.span key={i} aria-hidden className="absolute text-[#E979A5]" style={{ left: `${10 + i * 38}%`, top: `${4 + (i % 2) * 14}%` }}
            animate={reduce ? undefined : { scale: [0.6, 1.2, 0.6], opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}>
            <Sparkles size={18} />
          </motion.span>
        ))}
        {/* glow of hearts rising from inside */}
        <motion.div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-[#E979A5]" initial={false}
          animate={{ y: open ? -70 : 0, opacity: open ? 1 : 0, scale: open ? 1.3 : 0.3 }} transition={spring}>
          <Heart size={34} fill="currentColor" />
        </motion.div>
        {/* body */}
        <div className="absolute bottom-0 left-4 right-4 h-28 rounded-b-xl border-2 border-[#E979A5] bg-[#F7A9C4]">
          <div className="absolute inset-y-0 left-1/2 w-6 -translate-x-1/2 bg-[#E979A5]" />
        </div>
        {/* lid */}
        <motion.div className="absolute bottom-28 left-1 right-1 h-12 origin-bottom-left rounded-lg border-2 border-[#E979A5] bg-[#F9BCD2]"
          animate={{ y: open ? -34 : 0, rotate: open ? -24 : 0, x: open ? -10 : 0 }} transition={spring}>
          <div className="absolute inset-y-0 left-1/2 w-6 -translate-x-1/2 bg-[#E979A5]" />
          <Heart aria-hidden className="absolute -top-5 left-1/2 -translate-x-1/2 text-[#E979A5]" size={28} fill="currentColor" />
        </motion.div>
        {burstKey > 0 && <HeartBurst key={burstKey} />}
      </button>

      {!open && <p className="mt-4 text-lg">I kept a tiny surprise for you.</p>}

      <AnimatePresence>
        {open && (
          <motion.div key="msg" role="status" className="mt-6 rounded-3xl border-2 border-[#F7A9C4] bg-white p-6 text-left shadow-md"
            initial={{ opacity: 0, y: reduce ? 0 : 30, scale: reduce ? 1 : 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }} transition={{ delay: reduce ? 0 : 0.5, duration: reduce ? 0 : 0.6 }}>
            <p className="hand text-lg leading-relaxed">{MESSAGE}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {open && (
        <button onClick={() => setOpen(false)}
          className="mx-auto mt-5 flex min-h-11 items-center gap-2 rounded-xl border-2 border-[#F7A9C4] bg-white px-4 py-2 font-semibold active:scale-95 transition">
          <RotateCcw size={18} /> Close &amp; open again
        </button>
      )}
    </section>
  );
}
