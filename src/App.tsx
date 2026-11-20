import { useRef, useState } from "react";
import Envelope from "./components/Envelope";
import Apology from "./components/Apology";
import Letter from "./components/Letter";
import SurpriseBox from "./components/SurpriseBox";
import ForgivenessQuestion from "./components/ForgivenessQuestion";
import FloatingDecorations from "./components/FloatingDecorations";

export default function App() {
  const [opened, setOpened] = useState(false);
  const apologyRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setOpened(true);
    // wait a tick so the next sections mount before scrolling
    setTimeout(() => apologyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
  };

  return (
    <div className="relative min-h-screen bg-[#FFF5F8]">
      <FloatingDecorations />
      <main className="relative z-10 mx-auto w-full max-w-xl px-4">
        <Envelope opened={opened} onOpen={handleOpen} />
        {opened && (
          <>
            <div ref={apologyRef} className="scroll-mt-4"><Apology /></div>
            <Letter />
            <SurpriseBox />
            <ForgivenessQuestion />
            <p className="hand py-10 text-center text-sm text-[#E979A5]">made with love, Sann ♡</p>
          </>
        )}
      </main>
    </div>
  );
}
