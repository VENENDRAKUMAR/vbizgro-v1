import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGrid, FiLayers, FiArrowRight } from "react-icons/fi";

export default function TiltedArcShowcase() {
  const [isGrid, setIsGrid] = useState(false);

  const images = [
    { src: "/images/work1.png", title: "Brand Identity", cat: "Luxury" },
    { src: "/images/work2.png", title: "Digital Ecosystem", cat: "Web3" },
    { src: "/images/ecoavenstalcd.png", title: "Eco Aven", cat: "Sustainable" },
    { src: "/images/work3.png", title: "Neural Interface", cat: "AI Tech" },
    { src: "/images/work5.png", title: "Minimalist Flow", cat: "UI/UX" },
    { src: "/images/work6.png", title: "Meta Architecture", cat: "3D Design" },
    { src: "/images/work7.png", title: "Global Expansion", cat: "Strategy" },
  ];

  const rotations = [-22, -12, -6, 0, 6, 12, 22];
  const offsets = [-450, -300, -150, 0, 150, 300, 450];
  const scales = [0.8, 0.85, 0.95, 1.1, 0.95, 0.85, 0.8];
  const zIndices = [10, 20, 30, 50, 30, 20, 10];

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center relative bg-[#ffffff] overflow-hidden py-20">
      
      {/* 1. Cinematic Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
        <h2 className="text-[25vw] font-black tracking-tighter  uppercase">Vbizgro</h2>
      </div>

      {/* 2. Professional View Toggle */}
      <div className="absolute top-10 z-50 flex items-center gap-2 p-1.5 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full">
        <button
          onClick={() => setIsGrid(false)}
          className={`px-6 py-2 rounded-full flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all ${
            !isGrid ? "bg-black text-white shadow-[0_0_20px_rgba(255,255,255,0.3)]" : "text-white/40 hover:text-blue-500"
          }`}
        >
          <FiLayers /> Arc Flow
        </button>
        <button
          onClick={() => setIsGrid(true)}
          className={`px-6 py-2 rounded-full flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all ${
            isGrid ? "bg-blue-400 text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]" : "text-white hover:text-white"
          }`}
        >
          <FiGrid /> Grid View
        </button>
      </div>

      {/* 3. Showcase Area */}
      <div className="relative w-full h-[80vh] flex items-center justify-center pt-20">
        <AnimatePresence mode="wait">
          {!isGrid ? (
            /* ARC VIEW: Cinematic Perspective */
            <motion.div 
              key="arc"
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {images.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 0, rotateY: 45 }}
                  animate={{
                    opacity: 1,
                    x: offsets[i],
                    rotate: rotations[i],
                    scale: scales[i],
                    rotateY: rotations[i] * -1.5, // 3D Tilt Effect
                  }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                  className="absolute cursor-pointer group"
                  style={{ zIndex: zIndices[i], perspective: "2000px" }}
                >
                  <motion.div
                    whileHover={{ y: -40, rotateY: 0, scale: 1.05 }}
                    className="relative w-[280px] h-[400px] md:w-[320px] md:h-[450px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Hover Info Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                      <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">{item.cat}</p>
                      <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
                      <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-tighter">
                        View Case Study <FiArrowRight />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* GRID VIEW: Brutalist Minimalist */
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-7xl"
            >
              {images.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="relative aspect-[4/5] rounded-3xl overflow-hidden group border border-white/5"
                >
                  <img src={item.src} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center p-6 text-center">
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-xs">{item.title}</h4>
                      <p className="text-white/40 text-[10px] mt-2 uppercase">{item.cat}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 4. Scroll Indicator */}
      <div className="absolute bottom-10 flex flex-col items-center gap-4">
        <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.5em]">Explore Portfolio</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-indigo-500 to-transparent" />
      </div>
    </section>
  );
}