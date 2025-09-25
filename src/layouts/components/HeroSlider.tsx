"use client";

import Image from "next/image";
import { Trirong, Figtree } from "next/font/google";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Fonts must be initialized at module scope
const trirong = Trirong({ subsets: ["latin"], weight: ["400", "500", "700"] });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600"] });

// Slider images - selected random images from homepage directory
const SLIDER_IMAGES = [
  {
    src: "/images/homepage/image 1743.png",
    alt: "Hero image 1",
    title: "New Collection SS 2025",
    subtitle: "INTIAMAR PREMIUM COLLECTION",
    description: "When it comes to sustainable swimwear, the future starts now!"
  },
  {
    src: "/images/homepage/17005854-92-01009.jpg.png",
    alt: "Hero image 2",
    title: "Premium Swimwear",
    subtitle: "INTIAMAR PREMIUM COLLECTION",
    description: "Discover our latest collection of sustainable and stylish swimwear."
  },
  {
    src: "/images/homepage/17055802-32-01001.jpg.png",
    alt: "Hero image 3",
    title: "Summer Collection",
    subtitle: "INTIAMAR PREMIUM COLLECTION",
    description: "Embrace the summer with our elegant and comfortable designs."
  },
  {
    src: "/images/homepage/17065821-30-01002.jpg.png",
    alt: "Hero image 4",
    title: "Elegant Designs",
    subtitle: "INTIAMAR PREMIUM COLLECTION",
    description: "Experience luxury and comfort in every piece of our collection."
  }
];

const HeroSlider: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="w-full bg-white">
      <div className="relative w-full h-[85vh] sm:h-[90vh] lg:h-[calc(100vh-74px)] max-h-[1080px] min-h-[560px]">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-white/50 !w-3 !h-3 !mx-1',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-white',
          }}
          className="w-full h-full"
        >
          {SLIDER_IMAGES.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />

                {/* Centered content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-6 px-4 text-center">
                    <p className={`${figtree.className} text-white uppercase tracking-wide text-[18px] sm:text-[20px] lg:text-[24px]`}>
                      {image.subtitle}
                    </p>
                    <h1 className={`${trirong.className} text-white capitalize leading-[48px] sm:leading-[56px] lg:leading-[65px] text-5xl sm:text-7xl lg:text-[96px]`}>
                      {image.title}
                    </h1>
                    <p className={`${figtree.className} text-white/90 text-[14px] sm:text-[16px] lg:text-[24px] max-w-[760px]`}>
                      {image.description}
                    </p>
                    <div className="pt-1 sm:pt-2">
                      <a
                        href="/products"
                        className={`${figtree.className} inline-block bg-white text-[#1d1d1d] uppercase text-[14px] tracking-wide px-[35px] py-[20px] hover:bg-white/90 transition-colors duration-300`}
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation arrows */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 z-10">
          <button
            onClick={handlePrevSlide}
            aria-label="Previous slide"
            className="size-[35px] flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <span className="inline-block">
              <Image
                src="/icons/arrow-left.svg"
                alt="Previous"
                width={35}
                height={37}
              />
            </span>
          </button>
          <button
            onClick={handleNextSlide}
            aria-label="Next slide"
            className="size-[35px] flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <Image
              src="/icons/arrow-left.svg"
              alt="Next"
              width={35}
              height={37}
              className="transform rotate-180"
            />
          </button>
        </div>

        {/* Custom pagination styling */}
        <style jsx global>{`
          .swiper-pagination {
            bottom: 100px !important;
          }
          .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.5) !important;
            width: 12px !important;
            height: 12px !important;
            margin: 0 4px !important;
            border-radius: 50% !important;
            transition: all 0.3s ease !important;
          }
          .swiper-pagination-bullet-active {
            background: white !important;
            transform: scale(1.2) !important;
          }
          .swiper-pagination-bullet:hover {
            background: rgba(255, 255, 255, 0.8) !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default HeroSlider;
