import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WhyChooseUs() {
  const { scrollYProgress } = useScroll();
  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -500]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <motion.main className="relative w-full bg-white py-32 px-6 lg:px-20 overflow-hidden text-black">
      
      {/* 1. LARGE LUXURY WATERMARK (Moving on Scroll) */}
      <motion.div 
        style={{ x: xLeft }}
        className="absolute top-20 left-0 w-full whitespace-nowrap opacity-[0.03] select-none pointer-events-none"
      >
        <h2 className="text-[20vw] font-black leading-none uppercase tracking-tighter text-black">
          THE VBIZGRO STANDARD • THE VBIZGRO STANDARD
        </h2>
      </motion.div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* HEADER: MINIMAL & POWERFUL */}
        <div className="flex flex-col mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-black" />
            <span className="text-black font-black tracking-[0.5em] uppercase text-[10px]">
              Why Partners Choose Us
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="text-6xl md:text-[9rem] font-medium leading-[0.85] tracking-tighter uppercase"
          >
            EXCELLENCE <br />
            <span className="italic font-light text-slate-300">IS NON-NEGOTIABLE</span>
          </motion.h2>
        </div>

        {/* BENTO GRID: MODERN WHITE DEPTH */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Card 01: Minimalist Precision */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative bg-[#f9f9f9] p-12 rounded-[50px] h-[550px] flex flex-col justify-between border border-transparent hover:border-black/10 hover:bg-white hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] transition-all duration-700"
          >
            <div>
              <p className="text-[10px] font-bold text-slate-400 mb-12 tracking-widest">01 / ARCHITECTURE</p>
              <h3 className="text-5xl font-light tracking-tighter mb-6 leading-tight">
                Engineering <br/> <span className="font-bold">Pure Growth</span>
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed max-w-[280px]">
                We don't build sites; we build high-frequency financial instruments.
              </p>
            </div>
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
               <div className="w-2 h-2 bg-white rounded-full animate-ping" />
            </div>
          </motion.div>

          {/* Card 02: The Premium Focus (Black Accent) */}
          <motion.div 
            variants={cardVariants}
            className="group relative bg-black p-12 rounded-[50px] h-[550px] lg:-mt-16 flex flex-col justify-between overflow-hidden shadow-2xl"
          >
            <div className="relative z-10 text-white">
              <p className="text-[10px] font-bold text-white/40 mb-12 tracking-widest">02 / THE EDGE</p>
              <h3 className="text-5xl font-light tracking-tighter mb-6 leading-tight">
                Psychological <br/> <span className="font-bold">Dominance</span>
              </h3>
              <p className="text-white/60 text-lg leading-relaxed max-w-[280px]">
                Triggering the right emotions at the right millisecond of the user journey.
              </p>
            </div>
            <div className="absolute top-0 right-0 p-12">
               <div className="w-20 h-20 border border-white/10 rounded-full flex items-center justify-center">
                 <div className="w-10 h-10 border border-white/20 rounded-full" />
               </div>
            </div>
            <span className="text-[15vw] font-black text-white/[0.03] absolute -bottom-10 -right-5">EDGE</span>
          </motion.div>

          {/* Card 03: Minimalist Trust */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative bg-[#f9f9f9] p-12 rounded-[50px] h-[550px] flex flex-col justify-between border border-transparent hover:border-black/10 hover:bg-white hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] transition-all duration-700"
          >
            <div>
              <p className="text-[10px] font-bold text-slate-400 mb-12 tracking-widest">03 / REAL-TIME</p>
              <h3 className="text-5xl font-light tracking-tighter mb-6 leading-tight">
                Unfiltered <br/> <span className="font-bold">Intelligence</span>
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed max-w-[280px]">
                24/7 access to the metrics that actually move the needle.
              </p>
            </div>
            <div className="flex -space-x-4">
              {[1,2,3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ULTRA-MODERN STATS SECTION */}
        <div className="mt-40 grid grid-cols-1 lg:grid-cols-4 gap-16">
          {[
            { label: "Assets Under Strategy", val: "$1.2B" },
            { label: "Consumer Touchpoints", val: "140M" },
            { label: "Client Retention", val: "98%" },
            { label: "Growth Velocity", val: "3.5x" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-default"
            >
              <p className="text-slate-400 text-[10px] uppercase tracking-[0.4em] font-black mb-4 group-hover:text-black transition-colors">
                {stat.label}
              </p>
              <h4 className="text-7xl font-medium tracking-tighter text-black">
                {stat.val}
              </h4>
              <div className="w-0 group-hover:w-full h-[2px] bg-black transition-all duration-700 mt-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}