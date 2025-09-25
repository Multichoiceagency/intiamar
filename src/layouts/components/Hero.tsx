"use client";

import Image from "next/image";
import { Trirong, Figtree } from "next/font/google";
import React from "react";

type HeroProps = {
  imageSrc?: string;
  alt?: string;
};

// Fonts must be initialized at module scope
const trirong = Trirong({ subsets: ["latin"], weight: ["400", "500", "700"] });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600"] });

// Local assets
const LOCAL_BG_IMAGE = "/images/homepage/image 1743.png";
const LOCAL_ARROW_LEFT = "/icons/arrow-left.svg";
const LOCAL_ARROW_RIGHT = "/icons/arrow-right.svg";

const Hero: React.FC<HeroProps> = ({
  imageSrc = LOCAL_BG_IMAGE,
  alt = "Hero image",
}) => {
  return (
    <section className="w-full bg-white ">
      <div className="relative w-full h-[85vh] sm:h-[90vh] lg:h-[calc(100vh-74px)] max-h-[1080px] min-h-[560px]">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />

        {/* Centered content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-6 px-4 text-center">
            <p className={`${figtree.className} text-white uppercase tracking-wide text-[18px] sm:text-[20px] lg:text-[24px]`}>
              INTIAMAR PREMIUM COLLECTION
            </p>
            <h1 className={`${trirong.className} text-white capitalize leading-[48px] sm:leading-[56px] lg:leading-[65px] text-5xl sm:text-7xl lg:text-[96px]`}>
              New Collection SS 2025
            </h1>
            <p className={`${figtree.className} text-white/90 text-[14px] sm:text-[16px] lg:text-[24px] max-w-[760px]`}>
              When it comes to sustainable swimwear, the future starts now!
            </p>
            <div className="pt-1 sm:pt-2">
              <a
                href="/products"
                className={`${figtree.className} inline-block bg-white text-[#1d1d1d] uppercase text-[14px] tracking-wide px-[35px] py-[20px] `}
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom arrows */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6">
          <button
            aria-label="Previous"
            className="size-[35px] flex items-center justify-center opacity-80 hover:opacity-100 transition"
          >
            <span className="inline-block ">
              <Image src={LOCAL_ARROW_LEFT} alt="Prev" width={35} height={37} />
            </span>
          </button>
          <button
            aria-label="Next"
            className="size-[35px] flex items-center justify-center opacity-80 hover:opacity-100 transition"
          >
            <Image
            src={LOCAL_ARROW_LEFT}
             alt="Next"
             width={35}
             height={37}
             className="transform rotate-180"
             />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
