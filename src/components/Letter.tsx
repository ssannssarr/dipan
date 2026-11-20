import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { FastForward } from "lucide-react";

// Edit the letter here.
export const LETTER = `Dear Dipan,

I wanted to make something small and special for you.

I know that an apology is more than just saying sorry. It is about understanding how someone feels and trying to do better.

You deserve kindness, attention, and little moments that remind you how important you are.

I might not always get everything right, but I want to keep learning and making things better.

Sending you the biggest collection of tiny virtual hearts.

Yours,
Sann ♡`;

export default function Letter() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);
  const done = reduce || count >= LETTER.length;

  useEffect(() => {
    if (!inView || reduce || count >= LETTER.length) return;
    const id = setTimeout(() => setCount((c) => c + 1), 28);
    return () => clearTimeout(id);
  }, [inView, reduce, count]);

  return (
    <section aria-labelledby="letter" className="py-14">
      <h2 id="letter" className="hand mb-5 text-center text-2xl text-[#E979A5]">A little letter for you 💌</h2>
      <div ref={ref} className="relative rounded-xl border border-[#F7A9C4] bg-[#FFFDF9] p-6 shadow-md"
        style={{ backgroundImage: "repeating-linear-gradient(transparent 0 31px,#FFE6F0 31px 32px)", backgroundPosition: "0 8px" }}>
        <p className="sr-only">{LETTER}</p>
        <p aria-hidden className="hand whitespace-pre-line text-[17px] leading-8 min-h-[22rem]">
          {done ? LETTER : LETTER.slice(0, count)}
        </p>
      </div>
      {!done && (
        <button onClick={() => setCount(LETTER.length)}
          className="mx-auto mt-4 flex min-h-11 items-center gap-2 rounded-xl border-2 border-[#F7A9C4] bg-white px-4 py-2 font-semibold active:scale-95 transition">
          <FastForward size={18} /> Show the whole letter
        </button>
      )}
    </section>
  );
}
