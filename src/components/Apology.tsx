import { Heart } from "lucide-react";

export const APOLOGY =
  "I'm sorry, Dipan. Sometimes I get caught up in my own little world and forget to give you the time and attention you deserve. I never want you to feel ignored or unimportant. You matter to me, and I want to do better at showing that through my actions, not just words.";

export default function Apology() {
  return (
    <section aria-labelledby="apology" className="py-14">
      <h2 id="apology" className="hand mb-5 text-center text-2xl text-[#E979A5]">First, I want to say something...</h2>
      <div className="relative rounded-3xl border-2 border-[#F7A9C4] bg-white p-6 shadow-md">
        <div className="absolute -top-4 left-6 rotate-[-8deg] rounded bg-[#FFE6F0] px-3 py-1 text-xs border border-[#F7A9C4]/60">♡ from me</div>
        <p className="text-lg leading-relaxed">{APOLOGY}</p>
        <Heart aria-hidden className="mx-auto mt-5 text-[#E979A5]" size={40} fill="currentColor" />
      </div>
    </section>
  );
}
