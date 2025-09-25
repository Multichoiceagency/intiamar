"use client";

import Image from "next/image";
import { Trirong, Figtree } from "next/font/google";
import React from "react";

const trirong = Trirong({ subsets: ["latin"], weight: ["600"] });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "600"] });

type NewNowProps = {
  imageSrc?: string;
};

const NewNow: React.FC<NewNowProps> = ({ imageSrc = "/images/homepage/BUrubundy.jpg.png" }) => {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full h-[100vh] sm:h-[75vh] lg:h-[100vh] max-h-[900px] min-h-[520px]">
        <Image
          src={imageSrc}
          alt="New Now"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover"
        />

        {/* Centered content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className={`${trirong.className} text-white uppercase text-4xl sm:text-5xl md:text-[56px] lg:text-[66px] leading-[1.1]`}>NEW NOW</h2>
            <p className={`${figtree.className} text-white/90 uppercase text-[11px] sm:text-xs tracking-[0.08em] mt-2`}>
              DISCOVER MORE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewNow;


