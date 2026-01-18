import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function VBizGroAboutFinal() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // 1. Buttery Smooth Scrolling
    const lenis = new Lenis({ lerp: 0.1 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Text Reveal Animation (Garibi hatane wala effect)
    const revealTexts = document.querySelectorAll(".reveal-type");
    revealTexts.forEach((text) => {
      gsap.fromTo(
        text,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: text,
            start: "top 90%",
          },
        }
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main ref={containerRef} className="relative w-full bg-[#fdfcf9] text-[#1a1a1a] overflow-hidden">
      {/* Premium Texture Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* SECTION 1: THE HERO (Cinematic) */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-20 pt-20">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-indigo-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block"
          >
            Studio / About Us
          </motion.span>
          
          <h1 className="text-[12vw] lg:text-[10vw] font-medium leading-[0.8] tracking-tighter mb-16">
            <span className="block overflow-hidden">
               <span className="reveal-type inline-block">Crafting</span>
            </span>
            <span className="block overflow-hidden text-slate-400 italic font-serif">
               <span className="reveal-type inline-block">Digital Legacies.</span>
            </span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
             <div className="lg:col-span-7">
                <div className="relative rounded-[40px] overflow-hidden h-[400px] lg:h-[600px] bg-[#f0eee6]">
                   <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070" 
                    className="w-full h-full object-cover scale-110" 
                    alt="Studio"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#fdfcf9] via-transparent to-transparent opacity-60" />
                </div>
             </div>
             <div className="lg:col-span-5 pb-10">
                <p className="text-2xl md:text-3xl text-slate-500 font-light leading-relaxed">
                   VBizGro is a <span className="text-black font-medium">high-velocity agency</span> where strategy meets cinematic design. We don't just market; we engineer dominance.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE "STACKED" MISSION (Amiro wali vibe) */}
      <section className="py-40 px-6 lg:px-20 bg-[#f8f7f2]">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="sticky top-40 h-fit">
               <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none uppercase">
                  Our <br /> Philosophy
               </h2>
               <div className="mt-10 h-1 w-20 bg-indigo-600 rounded-full" />
            </div>

            <div className="space-y-40">
               {[
                 { title: "Clarity Over Noise", desc: "In a world of clutter, we choose surgical precision. Every pixel we place and every word we write has a psychological purpose." },
                 { title: "Craft Over Hacks", desc: "Short-term tricks are for amateurs. We build durable brand systems that gain value over time." },
                 { title: "Growth First", desc: "If it doesn't move the needle, it doesn't exist. Our design is beautiful, but our results are undeniable." }
               ].map((item, i) => (
                 <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-md"
                 >
                    <span className="text-indigo-600 font-mono text-sm mb-4 block">0{i+1} —</span>
                    <h3 className="text-4xl font-bold mb-6 tracking-tight">{item.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 3: THE STATS (Big & Bold) */}
      <section className="py-40 px-6 lg:px-20">
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 border-t border-b border-[#e5e2d9] py-20">
            {[
               { label: "Projects Delivered", val: "120+" },
               { label: "Campaign ROI", val: "3.8x" },
               { label: "Client Retention", val: "92%" },
               { label: "Market Reach", val: "140M" }
            ].map((stat, i) => (
               <div key={i} className="text-center">
                  <h4 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">{stat.val}</h4>
                  <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-indigo-600">{stat.label}</p>
               </div>
            ))}
         </div>
      </section>

      {/* SECTION 4: CALL TO ACTION (Milk Glossy Card) */}
      <section className="py-40 px-6">
         <motion.div 
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto bg-[#f8f7f2] rounded-[60px] p-12 lg:p-24 border border-[#e5e2d9] text-center relative overflow-hidden shadow-2xl"
         >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 blur-[100px] rounded-full -z-10" />
            <h2 className="text-5xl md:text-8xl font-medium tracking-tighter mb-10 leading-[0.9]">
               Built for <br /> <span className="italic font-serif text-indigo-600">Calm Confidence.</span>
            </h2>
            <p className="text-slate-500 text-xl max-w-2xl mx-auto mb-12">
               Ready to stop playing small? Let’s build the ecosystem your brand deserves.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
               <a href="/contact" className="px-12 py-6 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-600 transition-all">
                  Start Project
               </a>
               <a href="/services" className="px-12 py-6 border border-[#e5e2d9] rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-all">
                  Explore Ecosystem
               </a>
            </div>
         </motion.div>
      </section>
    </main>
  );
}