"use client";

import React from 'react';
import Image from 'next/image';

const NewFooter = () => {
  return (
    <footer className="bg-white">
      {/* Club Intiamar Section */}
      <div className="w-full px-8 py-12 flex justify-center items-start gap-12">
        <div className="flex-1 min-h-[468px] flex justify-center items-center">
          <div className="w-96 h-96 relative">
            {/* Video placeholder - you can replace this with actual video */}
            <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">mly-home-acquisition.mp4</span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-start">
          <div className="pb-6 flex flex-col justify-start items-start">
            <div className="text-6xl font-normal font-['Trirong'] leading-[60px] text-gray-800">
              Club
            </div>
            <div className="text-5xl font-normal font-['Trirong'] leading-[60px] text-gray-800">
              Intiamar likes you
            </div>
          </div>

          <div className="text-xs font-normal font-['Trirong'] leading-none text-gray-800 mb-10">
            Geniet van ervaringen, verlotingen, voorverkoop van collecties en nog veel meer.
          </div>

          <button className="h-11 px-8 bg-neutral-900 flex justify-center items-center hover:bg-neutral-800 transition-colors">
            <span className="text-white text-xs font-semibold font-['Trirong'] leading-none">
              Ontdek de club
            </span>
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="w-full px-8 py-10 flex flex-col justify-start items-start">
        <div className="w-full pb-[5px] flex flex-col justify-start items-start">
          <div className="w-full text-xs font-semibold font-['Trirong'] uppercase leading-none text-gray-800">
            Dames
          </div>
        </div>

        <div className="w-full relative flex justify-start items-center">
          {/* Scrollable categories list */}
          <div className="flex-1 h-12 relative overflow-hidden">
            <div className="flex gap-6 h-full items-center overflow-x-auto scrollbar-hide">
              {[
                'New Now', 'Selection', 'Jassen', 'Jurken en jumpsuits', 'Truien en vesten',
                'Jasjes', 'Broeken', 'Jeans', 'Blazers', 'Trenchcoats en parka\'s',
                'Blouses', 'Rokken', 'Tops', 'T-shirts', 'Leer', 'Gilets',
                'Pyjama\'s', 'Bikini\'s en badpakken', 'Schoenen', 'Tassen',
                'Sieraden', 'Ceinturen', 'Portemonnees en tassen', 'Sjaals en sjaaltjes',
                'Mutsen en handschoenen', 'Zonnebrillen', 'Meer accessoires', 'Geurtjes'
              ].map((category, index) => (
                <div key={index} className="flex-shrink-0 px-3 py-3.5 flex items-center">
                  <span className="text-xs font-semibold font-['Trirong'] uppercase leading-none text-gray-800 whitespace-nowrap">
                    {category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <button className="w-12 h-12 px-1.5 py-1 bg-white flex justify-center items-center ml-4">
            <Image
              src="/icons/arrow-right.svg"
              alt="Next"
              width={24}
              height={24}
            />
            {/* Gradient overlay */}
            <div className="absolute left-[-24px] top-0 w-6 h-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full px-14 py-24 flex justify-between items-start">
        {/* About Us */}
        <div className="flex flex-col justify-center items-start gap-5">
          <h3 className="text-xl font-normal font-['Tenor_Sans'] capitalize leading-loose text-stone-900">
            About Us
          </h3>
          <p className="w-96 text-sm font-normal font-['Jost'] leading-7 text-stone-900">
            We love our customers and we provide them with high quality and best products
            from our top collection. We offer easy and convenient shipping worldwide.
          </p>
          <div className="text-sm font-bold font-['Jost'] capitalize leading-7 text-stone-900">
            INTI AMAR
          </div>
          <div className="w-96 text-sm font-normal font-['Jost'] leading-7 text-stone-900">
            KvK-nummer 65480929     De Overmaat 45D     6831 AE Arnhem
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-col justify-start items-start gap-10">
          <h3 className="text-xl font-normal font-['Tenor_Sans'] capitalize leading-loose text-stone-900">
            Categories
          </h3>
          <div className="text-sm font-normal font-['Jost'] leading-9 text-gray-950">
            Shop<br/>New<br/>Our Story
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col justify-start items-start gap-10">
          <h3 className="text-xl font-normal font-['Tenor_Sans'] capitalize leading-loose text-stone-900">
            Company
          </h3>
          <div className="text-sm font-normal font-['Jost'] leading-9 text-gray-950">
            About us<br/>Contact<br/>Sustainability<br/>Stores
          </div>
        </div>

        {/* Service */}
        <div className="flex flex-col justify-start items-start gap-10">
          <h3 className="text-xl font-normal font-['Tenor_Sans'] capitalize leading-loose text-stone-900">
            Service
          </h3>
          <div className="text-sm font-normal font-['Jost'] leading-9 text-gray-950">
            Contact<br/>Delivery<br/>Returns<br/>FAQ<br/>Privacy Policy<br/>Terms Of Service<br/>Terms & Conditions
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="w-[700px] flex flex-col justify-center items-start gap-10">
          <h3 className="text-xl font-normal font-['Tenor_Sans'] capitalize leading-loose text-stone-900">
            Subscribe to our emails
          </h3>
          <p className="text-sm font-normal font-['Jost'] leading-7 text-stone-900">
            Sign up for exclusive offers, product drops, events, and more.
          </p>

          {/* Email Input */}
          <div className="w-full pl-7 pr-2.5 py-2.5 bg-white rounded-lg flex justify-start items-center gap-2.5 border border-gray-200">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 text-sm font-normal font-['Outfit'] text-gray-950 bg-transparent outline-none"
            />
            <button className="w-12 h-12 bg-white rounded-lg flex justify-center items-center gap-2.5 hover:bg-gray-50 transition-colors">
              <Image
                src="/icons/arrow-diagonal.svg"
                alt="Subscribe"
                width={14}
                height={14}
              />
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-start items-center gap-5">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image src="/icons/facebook.svg" alt="Facebook" width={16} height={16} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image src="/icons/instagram.svg" alt="Instagram" width={16} height={16} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image src="/icons/twitter.svg" alt="Twitter" width={16} height={16} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image src="/icons/youtube.svg" alt="YouTube" width={16} height={16} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image src="/icons/pinterest.svg" alt="Pinterest" width={16} height={16} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image src="/icons/tiktok.svg" alt="TikTok" width={16} height={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full px-14 py-7 border-t border-neutral-200 flex justify-between items-center">
        {/* Country Selector */}
        <div className="flex items-center gap-2.5">
          <div className="w-4 h-4 rounded-full overflow-hidden">
            {/* Use the existing top.svg for the INTIAMAR logo instead */}
            <div className="w-full h-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xs">US</span>
            </div>
          </div>
          <span className="text-sm font-normal font-['Jost'] leading-7 text-stone-900">
            United States (USD $)
          </span>
          <Image
            src="/icons/dropdown-arrow.svg"
            alt="Dropdown"
            width={8}
            height={9}
          />
        </div>

        {/* Copyright */}
        <div className="text-sm font-normal font-['Jost'] leading-7 text-stone-900">
          © 2025, Intiamar. Custom Design by Multichoiceagency.
        </div>

        {/* Payment Logos */}
        <div>
          <Image
            src="/Footer/logos.svg"
            alt="Payment methods"
            width={314}
            height={23}
          />
        </div>
      </div>

      {/* INTIAMAR Logo at top - positioned relatively for better responsiveness */}
      <div className="flex justify-center py-8">
        <Image
          src="/Footer/top.svg"
          alt="INTIAMAR"
          width={400}
          height={50}
          className="w-auto h-auto max-w-sm"
        />
      </div>
    </footer>
  );
};

export default NewFooter;

// Usage instructions:
// 1. Import this component: import NewFooter from '@/layouts/partials/NewFooter'
// 2. Replace the existing Footer component in your layout
// 3. Make sure all icon files are in public/icons/ directory
// 4. Make sure Footer SVG files are in public/Footer/ directory