import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Answer = "yes" | "time" | null;

const REPLIES: Record<Exclude<Answer, null>, string> = {
  yes: "Thank you for hearing me out. I'll keep trying to make things better. ♡",
  time: "That's okay. Take all the time you need. Your feelings matter, and I respect that. ♡",
};

export default function ForgivenessQuestion() {
  const [answer, setAnswer] = useState<Answer>(null);
  const btn = "min-h-12 w-full rounded-2xl border-2 px-5 py-3 font-bold shadow-[0_4px_0] transition active:translate-y-1 active:shadow-none";
  return (
    <section aria-labelledby="question" className="py-14 text-center">
      <h2 id="question" className="hand mb-3 text-2xl text-[#E979A5]">One little question... 🥺</h2>
      <p className="mb-6 text-xl font-bold">Will you forgive me?</p>
      <div className="mx-auto flex max-w-xs flex-col gap-3">
        <button onClick={() => setAnswer("yes")} className={`${btn} border-[#E979A5] bg-[#F7A9C4] shadow-[#E979A5]`}>Yes, of course ♡</button>
        <button onClick={() => setAnswer("time")} className={`${btn} border-[#F7A9C4] bg-white shadow-[#F7A9C4]`}>I need a little time</button>
      </div>
      <div aria-live="polite" className="mt-6 min-h-24">
        <AnimatePresence mode="wait">
          {answer && (
            <motion.p key={answer} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="hand mx-auto max-w-sm rounded-3xl border-2 border-[#F7A9C4] bg-white p-5 text-lg leading-relaxed shadow-md">
              {REPLIES[answer]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
