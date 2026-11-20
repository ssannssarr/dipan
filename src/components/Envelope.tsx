import { motion, useReducedMotion } from "framer-motion";
import { Heart, Star } from "lucide-react";

type Props = { opened: boolean; onOpen: () => void };

export default function Envelope({ opened, onOpen }: Props) {
  const reduce = useReducedMotion();
  const t = { duration: reduce ? 0 : 0.7, ease: "easeInOut" as const };
  const open = () => { if (!opened) onOpen(); };
  return (
    <section aria-labelledby="welcome" className="flex min-h-[92vh] flex-col items-center justify-center gap-6 py-10 text-center">
      <button onClick={open} aria-label="Open the envelope" className="relative h-44 w-64 [perspective:800px] active:scale-95 transition-transform">
        <div className="absolute inset-0 rounded-2xl border-2 border-[#F7A9C4] bg-[#FFE6F0] shadow-md" />
        <motion.div className="absolute left-4 right-4 top-2 h-32 rounded-lg border border-[#F7A9C4] bg-white px-3 pt-4 hand text-sm text-[#633D50]"
          animate={{ y: opened ? -70 : 0 }} transition={t}>
          For Dipan ♡
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-28 overflow-hidden rounded-b-2xl">
          <div className="absolute -left-2 bottom-0 h-0 w-0 border-b-[112px] border-l-[140px] border-b-[#F9BCD2] border-l-transparent" />
          <div className="absolute -right-2 bottom-0 h-0 w-0 border-b-[112px] border-r-[140px] border-b-[#F9BCD2] border-r-transparent" />
        </div>
        <motion.div className="absolute left-0 right-0 top-0 h-24 origin-top overflow-hidden rounded-t-2xl"
          style={{ zIndex: opened ? 0 : 5 }} animate={{ rotateX: opened ? 180 : 0 }} transition={t}>
          <div className="absolute left-0 top-0 h-0 w-0 border-l-[128px] border-r-[128px] border-t-[96px] border-l-transparent border-r-transparent border-t-[#F7A9C4]" />
        </motion.div>
        {!opened && <Heart className="absolute left-1/2 top-[88px] z-10 -translate-x-1/2 text-[#E979A5]" size={26} fill="currentColor" />}
        <Star className="absolute -right-3 -top-3 text-[#F7A9C4]" size={20} fill="currentColor" />
      </button>
      <h1 id="welcome" className="hand text-3xl leading-snug text-[#E979A5]">A little surprise for Dipan ♡</h1>
      <p className="text-lg">Some words from my heart, just for you.</p>
      <button onClick={open} disabled={opened}
        className="min-h-12 rounded-2xl border-2 border-[#E979A5] bg-[#F7A9C4] px-6 py-3 font-bold text-[#633D50] shadow-[0_4px_0_#E979A5] transition active:translate-y-1 active:shadow-none disabled:opacity-60">
        {opened ? "Opened ♡" : "Open my little letter"}
      </button>
    </section>
  );
}
