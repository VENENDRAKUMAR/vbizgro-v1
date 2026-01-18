import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TrendingUp, Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function SocialDominanceHero() {
  const containerRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Entrance
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".reveal-item", { y: 50, opacity: 0, stagger: 0.15, duration: 1.2 })
        .from(".phone-mockup", { x: 100, opacity: 0, duration: 1.5 }, "-=1")
        .from(".float-badge", { scale: 0, opacity: 0, stagger: 0.2, duration: 1 }, "-=0.8");

      // 2. Subtle Float Animation for badges
      gsap.to(".float-badge", {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.3
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-[#0a0a0a] text-white px-6 lg:px-20 py-10 overflow-hidden">
      
      {/* Nothing Dot Grid Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(white_1px,transparent_1px)] [background-size:32px_32px]" />

     

      {/* HERO GRID */}
      <div className="relative z-10 max-w-[1400px]  mt-12 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* LEFT: TEXT CONTENT */}
        <div className="lg:col-span-6 space-y-8">
          <div className="reveal-item">
            <h1 className="text-6xl md:text-[7rem] font-bold leading-[0.85] tracking-tighter uppercase">
              We Engineer <br />
              <span className="text-[#2214e6] italic font-light">Social Dominance</span> <br />
              Digitally.
            </h1>
          </div>
          
          <p className="reveal-item text-white/40 text-lg max-w-md leading-relaxed">
            Our passionate team of 20+ digital strategists crafts campaigns that capture global attention and drive scale.
          </p>

          <div className="reveal-item flex flex-wrap gap-4">
            {/* Impressions Card */}
            <div className="float-badge relative p-8 bg-[#f5f5f5] rounded-[40px] text-black w-72 group shadow-2xl">
               <div className="absolute top-4 left-4 px-3 py-1 bg-[#FFD700] rounded-lg text-[10px] font-black">4.5 Rating</div>
               <div className="flex justify-between items-start mt-4">
                 <h3 className="text-5xl font-black tracking-tighter">2.5M</h3>
                 <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform"><ArrowUpRight size={20}/></div>
               </div>
               <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest mt-2">Impressions for the year</p>
               
               <div className="mt-8 flex items-center justify-between">
                  <div className="w-16 h-16 border-4 border-[#FFB6C1] rounded-full flex items-center justify-center font-black text-xs">75%</div>
                  <div className="text-right">
                    <p className="text-[8px] font-black opacity-30 uppercase">User Trust</p>
                    <div className="flex -space-x-2 mt-1">
                      {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />)}
                    </div>
                  </div>
               </div>
            </div>

            {/* Total Points Small Card */}
            <div className="float-badge p-6 bg-[#6067ca] rounded-[30px] text-black w-40 flex flex-col justify-between">
               <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Total Points</p>
               <h3 className="text-3xl font-black tracking-tighter mt-4">5000+</h3>
            </div>
          </div>
        </div>

        {/* RIGHT: PHONE & STATS ASSETS */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end py-10">
          
          {/* Main Nothing Phone Mockup */}
          <div className="phone-mockup relative w-full max-w-[400px] aspect-[9/18] bg-[#1a1a1a] rounded-[60px] p-3 border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1000" 
              className="w-full h-full object-cover rounded-[50px] opacity-40 grayscale"
              alt="Device"
            />
            
            {/* Dynamic UI on Phone Screen */}
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-center">
               <div className="p-6 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[40px] text-center">
                  <div className="w-full h-32 flex items-center justify-center mb-4">
                     <TrendingUp size={60} className="text-[#FFB6C1] animate-bounce" />
                  </div>
                  <h4 className="text-xl font-bold uppercase tracking-tighter mb-1">Hyper-Targeted Ads</h4>
                  <div className="flex justify-center gap-2">
                     <div className="px-3 py-1 bg-white/10 rounded-full text-[8px] font-bold">10X ROI</div>
                  </div>
               </div>
            </div>
          </div>

          {/* Social Icons Floating Card */}
          <motion.div 
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="float-badge absolute bottom-20 -left-10 md:left-0 p-8 bg-white rounded-[40px] text-black shadow-2xl z-30 w-72"
          >
             <div className="flex justify-between items-center mb-4">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-40">100M+ Reach</p>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
             </div>
             <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center"><Instagram size={20}/></div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center"><Twitter size={20}/></div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center"><Facebook size={20}/></div>
             </div>
             <button className="w-full mt-6 py-3 bg-black text-white text-[8px] font-black uppercase tracking-[0.2em] rounded-2xl">View Metrics</button>
          </motion.div>

          {/* Floating Spring Decoration */}
          <div className="absolute -top-10 right-10 opacity-20 pointer-events-none select-none">
             <h1 className="text-[150px] font-black tracking-tighter rotate-12">SM</h1>
          </div>
        </div>

      </div>

      {/* FOOTER TICKER */}
      <div className="mt-20 border-t border-white/5 pt-8 flex justify-between items-center opacity-30">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em]">Proprietary Algorithm v4.2</p>
        <div className="flex gap-8 text-[8px] font-black uppercase tracking-widest">
           <span>Tiktok Mastery</span>
           <span>Meta Ads</span>
           <span>Growth Hacking</span>
        </div>
      </div>
    </section>
  );
}