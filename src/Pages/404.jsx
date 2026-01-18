import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

export default function PageNotFound() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const bigTextRef = useRef(null);

  useEffect(() => {
    // Mouse Move Parallax Effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;

      gsap.to(".parallax-layer", {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: "power2.out",
        stagger: 0.02
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#050505] text-white flex items-center justify-center overflow-hidden font-sans">
      
      {/* 1. CINEMATIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0">
        {/* Deep Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <main className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center text-center">
        
        {/* 2. THE BIG 404 REVEAL */}
        <div className="relative mb-8">
          <motion.h1 
            ref={bigTextRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="parallax-layer text-[25vw] md:text-[20vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/5 select-none"
          >
            404
          </motion.h1>
          
          {/* Floating Message Badge */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="parallax-layer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl"
          >
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-indigo-400">
              Signal Lost in Hyperspace
            </p>
          </motion.div>
        </div>

        {/* 3. CONTENT & NAVIGATION */}
        <div className="max-w-xl mx-auto">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-5xl font-medium tracking-tight mb-6"
          >
            You’ve drifted beyond the <span className="italic font-serif text-slate-400">known borders.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            className="text-lg text-slate-300 font-light leading-relaxed mb-12"
          >
            The page you are looking for has been archived or moved to a different dimension. 
            Let's get you back to the main station.
          </motion.p>

          {/* LUXURY BUTTONS */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/")}
              className="px-12 py-5 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:bg-indigo-500 hover:text-white transition-all duration-500"
            >
              Return to Base
            </motion.button>
            
            <motion.button
              whileHover={{ x: 5 }}
              onClick={() => navigate("/contact")}
              className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border-b border-white/20 pb-2 hover:border-white transition-all"
            >
              Report Malfunction <span className="text-lg">→</span>
            </motion.button>
          </div>
        </div>

        {/* 4. DECORATIVE FLOATING PARTICLES */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="parallax-layer absolute w-1 h-1 bg-white rounded-full opacity-20"
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </main>

      {/* Bottom Branding */}
      <div className="absolute bottom-10 w-full flex justify-between px-10 items-end opacity-20 pointer-events-none">
        <p className="text-[10px] font-bold tracking-widest uppercase italic">Vbizgro Intelligence</p>
        <p className="text-[8px] font-medium uppercase tracking-[0.3em]">Sector 404 // Node_Void</p>
      </div>
    </div>
  );
}