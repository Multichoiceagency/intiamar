"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// Categories data
const categories = [
  'New Now', 'Selection', 'Jassen', 'Jurken en jumpsuits', 'Truien en vesten',
  'Jasjes', 'Broeken', 'Jeans', 'Blazers', 'Trenchcoats en parka\'s',
  'Blouses', 'Rokken', 'Tops', 'T-shirts', 'Leer', 'Gilets',
  'Pyjama\'s', 'Bikini\'s en badpakken', 'Schoenen', 'Tassen',
  'Sieraden', 'Ceinturen', 'Portemonnees en tassen', 'Sjaals en sjaaltjes',
  'Mutsen en handschoenen', 'Zonnebrillen', 'Meer accessoires', 'Geurtjes',
  'Leer', 'Kantooroutfits', 'Feesten en evenementen', 'Co-ords',
  'Linnen', 'Selection', 'CAPSULE', 'Zwangerschapskleding',
  'Butter Yellow', 'Breiwerk', 'Vakantie', 'Best sellers',
  'Boho', 'Luipaardprint', 'Chocolade', 'Bordeauxrood'
];

// Social media links using organized assets
const socialLinks = [
  { name: 'Facebook', icon: '/Footer/social-icons/facebook.svg', url: '#' },
  { name: 'Instagram', icon: '/Footer/social-icons/instagram.svg', url: '#' },
  { name: 'Twitter', icon: '/Footer/social-icons/twitter.svg', url: '#' },
  { name: 'YouTube', icon: '/Footer/social-icons/youtube.svg', url: '#' },
  { name: 'Pinterest', icon: '/Footer/social-icons/pinterest.svg', url: '#' },
  { name: 'TikTok', icon: '/Footer/social-icons/tiktok.svg', url: '#' },
];

// Payment methods using organized assets
const paymentMethods = [
  { name: 'iDeal', icon: '/Footer/payment-methods/ideal.svg' },
  { name: 'Klarna', icon: '/Footer/payment-methods/klarna.png' },
  { name: 'Visa', icon: '/Footer/payment-methods/visa.svg' },
  { name: 'Mastercard', icon: '/Footer/payment-methods/mastercard.svg' },
  { name: 'PayPal', icon: '/Footer/payment-methods/paypal.svg' },
  { name: 'American Express', icon: '/Footer/payment-methods/amex.svg' },
  { name: 'Apple Pay', icon: '/Footer/payment-methods/applepay.svg' },
];

const IntiamarFooter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    // Add your subscription logic here
  };

  return (
    <footer className="bg-white relative overflow-hidden">
      {/*
        FOOTER ORGANIZATION:

        1. Club Intiamar Section - Top hero section with video placeholder and CTA
        2. Categories Section - Horizontal scrolling product categories with arrow navigation
           - Uses: /Footer/arrows-icons/arrow-right.svg
        3. Main Footer Content - 5-column layout with links and newsletter signup
           - Uses: /Footer/social-icons/* (Facebook, Instagram, Twitter, YouTube, Pinterest, TikTok)
           - Uses: /Footer/arrows-icons/arrow-diagonal.svg for email submit button
        4. Bottom Section - Country selector, copyright, payment methods
           - Uses: /Footer/country-flag.png for US flag
           - Uses: /Footer/dropdown-arrow.svg for country selector dropdown
           - Uses: /Footer/payment-methods/* for all payment logos
        5. Final Logo Section - Large INTIAMAR text logo
           - Uses: /Footer/footertxt.svg for the main brand logo
      */}

      {/* Club Intiamar Section */}
      <section className="box-border flex flex-col lg:flex-row gap-4 lg:gap-[48px] items-center lg:items-start justify-center px-4 lg:px-[32px] py-6 lg:py-[48px] relative w-full">
        <div className="w-full lg:basis-0 content-stretch flex lg:grow items-center justify-center min-h-[300px] lg:min-h-[468px] min-w-px relative lg:self-stretch shrink-0">
          <div className="shrink-0 w-[280px] h-[280px] lg:size-[401px] bg-gray-100 rounded-lg overflow-hidden relative">
            {/* Placeholder for video - replace with actual video component */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <span className="text-sm">Video: mly-home-acquisition.mp4</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:basis-0 box-border content-stretch flex flex-col lg:grow items-center lg:items-start justify-center min-h-px min-w-px pb-[0.5px] pt-0 px-4 lg:px-0 relative lg:self-stretch shrink-0">
          <div className="box-border content-stretch flex flex-col items-center lg:items-start mb-[-0.5px] pb-[24px] pt-0 px-0 relative shrink-0">
            <div className="content-stretch flex flex-col items-center lg:items-start relative shrink-0">
              <div className="flex flex-col font-['Trirong'] justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[32px] lg:text-[55.016px] text-nowrap font-normal">
                <p className="leading-[40px] lg:leading-[60px] whitespace-pre text-center lg:text-left">Club</p>
              </div>
              <div className="content-stretch flex flex-col items-center lg:items-start relative shrink-0 w-full">
                <div className="flex flex-col font-['Trirong'] italic justify-center leading-[0] relative shrink-0 text-[#121212] text-[28px] lg:text-[51.844px] text-nowrap font-normal">
                  <p className="leading-[36px] lg:leading-[60px] whitespace-pre text-center lg:text-left">Intiamar likes you</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-['Trirong'] justify-center leading-[0] mb-[-0.5px] not-italic relative shrink-0 text-[#121212] text-[11.984px] text-wrap lg:text-nowrap font-normal">
            <p className="leading-[18px] text-center lg:text-left lg:whitespace-pre px-4 lg:px-0">Geniet van ervaringen, verlotingen, voorverkoop van collecties en nog veel meer.</p>
          </div>
          <div className="box-border content-stretch flex flex-col items-center lg:items-start mb-[-0.5px] pb-0 pt-[40px] px-0 relative shrink-0">
            <a className="bg-[#131313] box-border content-stretch cursor-pointer flex h-[44px] items-center justify-center min-w-[90px] overflow-visible px-[32px] py-0 relative shrink-0 hover:bg-neutral-800 transition-colors duration-200" href="https://shop.mango.com/nl/nl/mango-likes-you">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="flex flex-col font-['Trirong'] justify-center leading-[0] not-italic relative shrink-0 text-[#fdfdfd] text-[11.781px] text-nowrap font-semibold">
                  <p className="cursor-pointer leading-[18px] whitespace-pre">Ontdek de club</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-4 lg:px-8 py-6 lg:py-10">
        <div className="pb-1">
          <h4 className="text-[13px] font-semibold font-['Trirong'] uppercase text-[#121212] leading-[18px] mb-1">
            Dames
          </h4>
        </div>

        <div className="relative w-full">
          <div className="h-12 overflow-x-auto overflow-y-hidden relative">
            <div className="absolute flex items-center h-12">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center px-2 lg:px-3 py-3.5 first:pl-0">
                  <a
                    href="https://shop.mango.com/nl/nl/c/dames/new-now_56b5c5ed"
                    className="text-[11px] lg:text-[13px] font-semibold font-['Trirong'] uppercase text-[#121212] leading-[18px] hover:text-gray-600 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    {category}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button - Hidden on mobile */}
          <div className="hidden lg:block absolute right-[-12px] top-1/2 transform -translate-y-1/2 bg-white flex items-center justify-center w-12 h-12 px-1.5 py-0.5">
            <div className="w-6 h-6 relative">
              <Image
                src="/Footer/arrows-icons/arrow-right.svg"
                alt="Next"
                width={24}
                height={24}
              />
            </div>
            <div className="absolute left-[-24px] w-6 h-12 bg-gradient-to-l from-white to-transparent" />
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <section className="box-border content-stretch flex flex-col lg:flex-row items-start justify-between px-4 lg:px-[40px] xl:px-[60px] py-8 lg:py-[60px] xl:py-[90px] relative w-full gap-8 lg:gap-0">
        {/* About Us */}
        <div className="w-full lg:w-auto content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 text-[#1d1d1d]">
          <p className="capitalize font-['Tenor_Sans'] leading-[30px] not-italic relative shrink-0 text-[20px] text-left lg:text-center text-nowrap whitespace-pre font-normal">
            About Us
          </p>
          <p className="font-['Jost'] font-normal leading-[28px] relative shrink-0 text-[14px] w-full lg:w-[364px]">
            We love our customers and we provide them with high quality and best products from our top collection. We offer easy and convenient shipping worldwide.
          </p>
          <p className="capitalize font-['Jost'] font-bold leading-[28px] relative shrink-0 text-[14px] text-left lg:text-center text-nowrap whitespace-pre">
            INTI AMAR
          </p>
          <p className="font-['Jost'] font-normal leading-[28px] relative shrink-0 text-[14px] w-full lg:w-[364px]">
            KvK-nummer 65480929
            <br />
            De Overmaat 45D
            <br />
            6831 AE Arnhem
          </p>
        </div>

        {/* Mobile Collapsible Sections Container */}
        <div className="w-full lg:hidden flex flex-col gap-4">
          {/* EXPLORE Section (Mobile collapsible) */}
          <details className="group border-b border-gray-200 pb-4">
            <summary className="flex justify-between items-center cursor-pointer font-['Tenor_Sans'] font-normal text-[20px] text-[#1d1d1d] leading-[30px] py-2">
              <span>EXPLORE</span>
              <span className="group-open:rotate-45 transition-transform text-2xl">+</span>
            </summary>
            <div className="mt-4 font-['Jost'] font-normal text-[14px] text-[#040c13] space-y-2">
              <p>Shop</p>
              <p>New</p>
              <p>Our Story</p>
            </div>
          </details>

          {/* CUSTOMER CARE Section (Mobile collapsible) */}
          <details className="group border-b border-gray-200 pb-4">
            <summary className="flex justify-between items-center cursor-pointer font-['Tenor_Sans'] font-normal text-[20px] text-[#1d1d1d] leading-[30px] py-2">
              <span>CUSTOMER CARE</span>
              <span className="group-open:rotate-45 transition-transform text-2xl">-</span>
            </summary>
            <div className="mt-4 font-['Jost'] font-normal text-[14px] text-[#040c13] space-y-2">
              <p>May we help you?</p>
              <p>Faq</p>
              <p>Contact Us</p>
              <p>Returns and Refunds</p>
              <p>Shipping & Payment</p>
              <p>Store Finder</p>
              <p>Track Order</p>
            </div>
          </details>

          {/* LEGAL AREA Section (Mobile collapsible) */}
          <details className="group border-b border-gray-200 pb-4">
            <summary className="flex justify-between items-center cursor-pointer font-['Tenor_Sans'] font-normal text-[20px] text-[#1d1d1d] leading-[30px] py-2">
              <span>LEGAL AREA</span>
              <span className="group-open:rotate-45 transition-transform text-2xl">+</span>
            </summary>
            <div className="mt-4 font-['Jost'] font-normal text-[14px] text-[#040c13] space-y-2">
              <p>Privacy Policy</p>
              <p>Terms Of Service</p>
              <p>Terms & Conditions</p>
            </div>
          </details>

          {/* FOLLOW US Section (Mobile collapsible) */}
          <details className="group border-b border-gray-200 pb-4">
            <summary className="flex justify-between items-center cursor-pointer font-['Tenor_Sans'] font-normal text-[20px] text-[#1d1d1d] leading-[30px] py-2">
              <span>FOLLOW US</span>
              <span className="group-open:rotate-45 transition-transform text-2xl">+</span>
            </summary>
            <div className="mt-4 flex gap-4 items-center">
              {socialLinks.map((social) => (
                <div key={social.name} className="relative shrink-0 size-[16px]">
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={16}
                    height={16}
                    className="block max-w-none size-full hover:opacity-70 transition-opacity duration-200 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </details>

          {/* SUBSCRIBE TO OUR NEWSLETTER Section (Mobile collapsible) */}
          <details className="group border-b border-gray-200 pb-4">
            <summary className="flex justify-between items-center cursor-pointer font-['Tenor_Sans'] font-normal text-[20px] text-[#1d1d1d] leading-[30px] py-2">
              <span>SUBSCRIBE TO OUR NEWSLETTER</span>
              <span className="group-open:rotate-45 transition-transform text-2xl">+</span>
            </summary>
            <div className="mt-4">
              <p className="font-['Jost'] font-normal leading-[28px] text-[#1d1d1d] text-[14px] mb-4">
                Sign up for exclusive offers, product drops, events, and more.
              </p>
              <div className="bg-white box-border flex gap-[10px] items-center pl-[20px] pr-[10px] py-[10px] rounded-[8px] border border-gray-200 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="flex-1 font-['Outfit'] font-normal text-[#040c13] text-[14px] bg-transparent outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-white flex items-center justify-center rounded-[8px] size-[40px] hover:bg-gray-50 transition-colors duration-200"
                  onClick={handleSubscribe}
                >
                  <div className="relative shrink-0 size-[14px]">
                    <Image
                      src="/Footer/arrows-icons/arrow-diagonal.svg"
                      alt="Subscribe"
                      width={14}
                      height={14}
                      className="block max-w-none size-full"
                    />
                  </div>
                </button>
              </div>
            </div>
          </details>
        </div>

        {/* Desktop Sections (hidden on mobile) */}
        <div className="hidden lg:flex lg:gap-[20px] xl:gap-[80px]">
          {/* Categories */}
          <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 text-nowrap">
            <p className="capitalize font-['Tenor_Sans'] leading-[30px] not-italic relative shrink-0 text-[#1d1d1d] text-[20px] text-center whitespace-pre font-normal">
              Categories
            </p>
            <div className="font-['Jost'] font-normal leading-[35px] relative shrink-0 text-[#040c13] text-[14px] whitespace-pre">
              <p className="mb-0">Shop</p>
              <p className="mb-0">New</p>
              <p>Our Story</p>
            </div>
          </div>

          {/* Company */}
          <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 text-nowrap">
            <p className="capitalize font-['Tenor_Sans'] leading-[30px] not-italic relative shrink-0 text-[#1d1d1d] text-[20px] text-center whitespace-pre font-normal">
              Company
            </p>
            <div className="font-['Jost'] font-normal leading-[35px] relative shrink-0 text-[#040c13] text-[14px] whitespace-pre">
              <p className="mb-0">About us</p>
              <p className="mb-0">Contact</p>
              <p className="mb-0">Sustainability</p>
              <p>Stores</p>
            </div>
          </div>

          {/* Service */}
          <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 text-nowrap">
            <p className="capitalize font-['Tenor_Sans'] leading-[30px] not-italic relative shrink-0 text-[#1d1d1d] text-[20px] text-center whitespace-pre font-normal">
              Service
            </p>
            <div className="font-['Jost'] font-normal leading-[35px] relative shrink-0 text-[#040c13] text-[14px] whitespace-pre">
              <p className="mb-0">Contact</p>
              <p className="mb-0">Delivery</p>
              <p className="mb-0">Returns</p>
              <p className="mb-0">FAQ</p>
              <p>
                Privacy Policy
                <br />
                Terms Of Service
                <br />
                {`Terms & Conditions`}
              </p>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0 w-[280px] xl:w-[700px]">
            <p className="capitalize font-['Tenor_Sans'] leading-[30px] not-italic relative shrink-0 text-[#1d1d1d] text-[20px] text-center text-wrap font-normal">
              Subscribe to our emails
            </p>
            <p className="font-['Jost'] font-normal leading-[28px] relative shrink-0 text-[#1d1d1d] text-[14px] text-center text-wrap">
              Sign up for exclusive offers, product drops, events, and more.
            </p>

            {/* Email Form */}
            <div className="bg-white box-border content-stretch flex gap-[10px] items-center pl-[15px] xl:pl-[30px] pr-[10px] py-[10px] relative rounded-[8px] shrink-0 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="basis-0 font-['Outfit'] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#040c13] text-[14px] bg-transparent outline-none"
                required
              />
              <button
                type="submit"
                className="bg-white content-stretch flex gap-[10px] items-center justify-center relative rounded-[8px] shrink-0 size-[50px] hover:bg-gray-50 transition-colors duration-200"
                onClick={handleSubscribe}
              >
                <div className="overflow-clip relative shrink-0 size-[14px]">
                  <Image
                    src="/Footer/arrows-icons/arrow-diagonal.svg"
                    alt="Subscribe"
                    width={14}
                    height={14}
                    className="block max-w-none size-full"
                  />
                </div>
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
              {socialLinks.map((social) => (
                <div key={social.name} className="relative shrink-0 size-[16px]">
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={16}
                    height={16}
                    className="block max-w-none size-full hover:opacity-70 transition-opacity duration-200 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="box-border content-stretch flex flex-col lg:flex-row gap-4 lg:gap-[200px] xl:gap-[420px] items-center justify-center lg:justify-between px-4 lg:px-[30px] xl:px-[58px] py-6 lg:py-[20px] xl:py-[30px] relative w-full">
        <div className="absolute border-[#e6e6e6] border-[1px_0px] border-solid inset-0 pointer-events-none" />

        {/* Country Selector */}
        <div className="flex gap-[10px] items-center justify-center lg:justify-start relative">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="[grid-area:1_/_1] ml-0 mt-0 relative rounded-[120px] size-[16px]">
              <Image
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[120px] size-full"
                src="/Footer/country-flag.png"
                width={16}
                height={16}
              />
            </div>
          </div>
          <p className="font-['Jost'] font-normal leading-[28px] relative shrink-0 text-[#1d1d1d] text-[14px] text-center text-nowrap whitespace-pre">
            United States (USD $)
          </p>
          <div className="overflow-clip relative shrink-0 size-[8px]">
            <div className="absolute bottom-[21.5%] left-0 right-0 top-[21.5%]">
              <Image
                alt=""
                className="block max-w-none size-full"
                src="/Footer/dropdown-arrow.svg"
                width={8}
                height={8}
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="font-['Jost'] font-normal leading-[28px] relative text-[#1d1d1d] text-[14px] text-center text-wrap lg:text-nowrap lg:whitespace-pre order-3 lg:order-2">
          <span>© 2025, </span>Intiamar<span>. Custom Design by </span>Multichoiceagency.
        </p>

        {/* Payment Logos */}
        <div className="flex gap-2 lg:gap-[10px] items-center justify-center relative order-2 lg:order-3">
          {/* iDeal */}
          <div className="h-4 lg:h-[22.105px] overflow-clip relative shrink-0 w-6 lg:w-[35px]">
            <div className="absolute contents left-0 right-[28.57%] top-[-0.16px]">
              <div className="absolute h-[22px] left-0 overflow-clip right-[28.57%] top-[-0.16px]">
                <div className="absolute inset-[5.77%_4.72%_4.52%_4.72%]">
                  <Image
                    alt=""
                    className="block max-w-none size-full"
                    src="/Footer/payment-methods/ideal.svg"
                    width={35}
                    height={22}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Klarna */}
          <div className="h-4 lg:h-[22.105px] overflow-clip relative shrink-0 w-6 lg:w-[35px]">
            <div className="absolute contents left-[5.71%] right-[2.86%] top-[1.84px]">
              <div className="absolute aspect-[1280/712] left-[5.71%] right-[2.86%] top-[1.84px]">
                <Image
                  alt=""
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                  src="/Footer/payment-methods/klarna.png"
                  width={35}
                  height={22}
                />
              </div>
            </div>
          </div>

          {/* Visa */}
          <div className="h-4 lg:h-[22.105px] relative shrink-0 w-6 lg:w-[35px]">
            <Image
              alt=""
              className="block max-w-none size-full"
              src="/Footer/payment-methods/visa.svg"
              width={35}
              height={22}
            />
          </div>

          {/* Mastercard */}
          <div className="h-4 lg:h-[22.105px] relative shrink-0 w-6 lg:w-[35px]">
            <Image
              alt=""
              className="block max-w-none size-full"
              src="/Footer/payment-methods/mastercard.svg"
              width={35}
              height={22}
            />
          </div>

          {/* American Express */}
          <div className="h-4 lg:h-[22.105px] overflow-clip relative shrink-0 w-6 lg:w-[35px]">
            <div className="absolute bottom-0 left-[0.67%] right-[0.67%] top-0">
              <Image
                alt=""
                className="block max-w-none size-full"
                src="/Footer/payment-methods/paypal.svg"
                width={35}
                height={22}
              />
            </div>
          </div>

          {/* Apple Pay */}
          <div className="h-4 lg:h-[22.105px] overflow-clip relative shrink-0 w-6 lg:w-[35px]">
            <Image
              alt=""
              className="block max-w-none size-full"
              src="/Footer/payment-methods/applepay.svg"
              width={35}
              height={22}
            />
          </div>
        </div>
      </section>

      {/* INTIAMAR Logo at bottom - Final Section */}
      <section className="box-border content-stretch flex flex-col gap-[40px] items-center pb-0 pt-8 lg:pt-[40px] xl:pt-[60px] px-4 lg:px-[40px] xl:px-[60px] relative w-full">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <p className="[grid-area:1_/_1] capitalize font-['Trirong'] leading-[40px] lg:leading-[45px] xl:leading-[65px] ml-0 mt-0 not-italic relative text-[80px] lg:text-[150px] xl:text-[250px] text-black text-nowrap whitespace-pre font-normal">
            INTIAMAR
          </p>
        </div>
      </section>
    </footer>
  );
};

export default IntiamarFooter;