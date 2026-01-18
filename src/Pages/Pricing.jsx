import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const pricingPlans = [
  {
    index: "01",
    tier: "Essentials",
    price: "₹8,999",
    tagline: "Presence Foundation",
    features: ["6 Static Visuals", "1 Cinematic Reel", "2 Strategy Carousels", "Basic Management"],
    bg: "bg-[#f8f7f2]"
  },
  {
    index: "02",
    tier: "Growth Elite",
    price: "₹21,999",
    tagline: "Content Architecture",
    features: ["10 Premium Posts", "4 High-Velocity Reels", "3 Data Carousels", "Advanced Insights"],
    bg: "bg-white",
    featured: true,
  },
  {
    index: "03",
    tier: "Dominance",
    price: "₹25,999",
    tagline: "Complete Ecosystem",
    features: ["16 Elite Visuals", "6 Viral Reels", "4 Master Carousels", "Full Community Ops"],
    bg: "bg-[#f0eee6]"
  },
];

export default function PricingElite() {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Modern Parallax for Cards
    gsap.to(".parallax-card", {
      y: (i, el) => i * -40, // Middle card stands out more
      scrollTrigger: {
        trigger: ".pricing-grid",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-40 bg-[#fdfcf9] overflow-hidden">
      {/* 1. ULTRA MODERN BACKGROUND DETAIL */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#efede4] rounded-full blur-[120px]" />
        <div className="absolute bottom-[5%] left-[-10%] w-[30%] h-[30%] bg-[#f3f0e8] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 2. MINIMALIST HEADER */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-black" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Investment Blueprints</span>
          </motion.div>
          
          <h2 className="text-6xl md:text-9xl font-medium tracking-tighter leading-[0.8]">
            Scalable <br />
            <span className="italic font-serif text-slate-300">Dominance.</span>
          </h2>
        </div>

        {/* 3. MODERN BENTO PRICING GRID */}
        <div className="pricing-grid grid grid-cols-1 lg:grid-cols-3 gap-4">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`parallax-card relative group p-10 lg:p-14 rounded-[60px] border border-[#e5e2d9] flex flex-col justify-between transition-all duration-700 overflow-hidden ${plan.bg} ${
                plan.featured ? "shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] lg:z-20 scale-105" : "lg:z-10"
              }`}
            >
              {/* Glassy Background Number */}
              <span className="absolute -top-10 -right-10 text-[15rem] font-black text-black/[0.02] pointer-events-none">
                {plan.index}
              </span>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-16">
                  <div>
                    <h3 className="text-4xl font-bold tracking-tighter">{plan.tier}</h3>
                    <p className="text-slate-400 text-xs mt-2 uppercase tracking-widest">{plan.tagline}</p>
                  </div>
                  {plan.featured && (
                    <span className="bg-black text-white text-[8px] font-bold px-4 py-2 rounded-full uppercase tracking-tighter">Recommended</span>
                  )}
                </div>

                <div className="mb-16">
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl md:text-7xl font-black tracking-tight">{plan.price}</span>
                    <span className="text-slate-400 font-mono text-sm">/mo</span>
                  </div>
                </div>

                <ul className="space-y-6">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-sm font-medium text-slate-600 group-hover:text-black transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-black/10 group-hover:bg-indigo-600" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-20 relative z-10">
                <a
                  href="https://wa.me/919752505639"
                  className={`group relative flex items-center justify-center w-full py-6 rounded-[30px] text-[10px] font-black uppercase tracking-[0.3em] transition-all overflow-hidden ${
                    plan.featured ? "bg-black text-white" : "border border-black text-black"
                  }`}
                >
                  <span className="relative z-10">Secure Slot</span>
                  {/* Modern slide-over effect */}
                  <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ${plan.featured ? "bg-indigo-600" : "bg-black"}`} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4. FOOTER ADD-ON (Rich Detail) */}
        <div className="mt-32 pt-12 border-t border-[#e5e2d9] flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-slate-400 text-sm max-w-sm italic">
             "Pricing is transparent. Results are exponential. Choose the tier that matches your speed."
           </p>
           <div className="flex gap-4">
              <div className="px-6 py-3 rounded-full bg-white border border-[#e5e2d9] text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:bg-black hover:text-white transition-all">
                Custom Enterprise
              </div>
              <div className="px-6 py-3 rounded-full bg-white border border-[#e5e2d9] text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:bg-black hover:text-white transition-all">
                View ROI Guide
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}