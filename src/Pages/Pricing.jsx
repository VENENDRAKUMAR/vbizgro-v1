import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const packages = [
  {
    title: "Starter Package",
    price: "₹8,999/month",
    features: [
      "6 Static/Image Posts",
      "1 Reel (Basic Edits)",
      "2 Carousel Posts",
      "Platform Setup & Optimization",
      "Caption + Hashtag Strategy",
      "1 Monthly Report",
      "Basic Page Management",
    ],
    note: "Perfect for building a clean, professional presence.",
    platform: "This package is for only one platform.",
    gradient: "from-indigo-100 via-white to-purple-100",
  },
  {
    title: "Growth Package",
    price: "₹21,999/month",
    features: [
      "10 Static/Image Posts",
      "4 Reels (Professionally Edited)",
      "3 Carousel Posts",
      "Content Strategy + Scheduling",
      "Platform Setup & Optimization",
      "Creative Captions + Hashtag Research",
      "Engagement Monitoring",
      "2 Monthly Reports + Insights",
    ],
    note: "More content, better strategy, stronger results.",
    platform: "This package is for only one platform.",
    gradient: "from-purple-100 via-white to-blue-100",
  },
  {
    title: "Pro Package",
    price: "₹25,999/month",
    features: [
      "16 Static/Image Posts",
      "6 Reels (Professionally Edited)",
      "4 Carousel Posts",
      "Advanced Content Strategy",
      "Competitor & Audience Insights",
      "Ads Setup (Optional)",
      "Community Management (DMs & Comments)",
      "Weekly Performance Reports",
      "Dedicated Social Media Manager",
    ],
    note: "Designed for serious growth and engagement.",
    platform: "This package is for only one platform.",
    gradient: "from-blue-100 via-white to-indigo-100",
  },
];

export default function PricingSection() {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative w-full py-28 bg-[#fcfcfd] text-[#0f172a] font-[EXO] overflow-hidden">
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Social Media <span className="text-indigo-600">Management Plans</span>
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Choose a package that fits your brand’s ambition. Every tier is built for clarity, consistency, and conversion.
        </p>
        <div className="mt-6 h-[3px] w-24 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.title}
            ref={(el) => (cardRefs.current[i] = el)}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(15,23,42,0.08)] backdrop-blur-md border border-white/60 bg-white"
          >
            {/* Gradient Header */}
            <div
              className={`w-full px-6 py-4 bg-gradient-to-r ${pkg.gradient}`}
            >
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#0f172a]">
                {pkg.title}
              </h3>
              <p className="text-lg font-extrabold text-indigo-700 mt-1">
                {pkg.price}
              </p>
            </div>

            {/* Features */}
            <div className="p-6">
              <ul className="text-sm text-slate-700 space-y-2 mb-6">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Notes */}
              <p className="text-xs text-slate-500 italic mb-2">{pkg.note}</p>
              <p className="text-xs text-slate-500">{pkg.platform}</p>

              {/* CTA */}
              <div className="mt-6">
                <a
                  href="/contact"
                  className="inline-block px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/30"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
