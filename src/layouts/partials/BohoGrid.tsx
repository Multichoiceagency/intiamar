"use client";

import Image from "next/image";
import { Trirong, Figtree } from "next/font/google";

const trirong = Trirong({ subsets: ["latin"], weight: ["600"] });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "600"] });

const BohoGrid = () => {
  return (
    <section className="w-full bg-white">
      {/* Top 2x2 grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* TL */}
        <div className="relative h-[360px] sm:h-[420px] md:h-[480px]">
          <Image src="/images/homepage/17005854-92-01009.jpg.png" alt="Look 1" fill className="object-cover" />
        </div>
        {/* TR */}
        <div className="relative h-[360px] sm:h-[420px] md:h-[480px]">
          <Image src="/images/homepage/17066744-76-01008.jpg.png" alt="Look 2" fill className="object-cover" />
        </div>
        {/* BL */}
        <div className="relative h-[360px] sm:h-[420px] md:h-[480px]">
          <Image src="/images/homepage/17065821-30-01002.jpg.png" alt="Look 3" fill className="object-cover" />
        </div>
        {/* BR */}
        <div className="relative h-[360px] sm:h-[420px] md:h-[480px]">
          <Image src="/images/homepage/17055802-32-01001.jpg.png" alt="Look 4" fill className="object-cover" />
        </div>
      </div>

      {/* Bottom full-width with centered text */}
      <div className="relative w-full h-[520px] sm:h-[600px] md:h-[720px]">
        <Image src="/images/homepage/BUrubundy.jpg.png" alt="Boho" fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h3 className={`${trirong.className} text-white uppercase text-4xl sm:text-5xl md:text-6xl tracking-[0.08em]`}>BOHO</h3>
            <p className={`${figtree.className} text-white/90 uppercase text-[11px] sm:text-xs tracking-[0.08em] mt-2`}>DISCOVER MORE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BohoGrid;


