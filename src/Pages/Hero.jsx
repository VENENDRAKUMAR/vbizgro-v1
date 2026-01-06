import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CanvasWaveLayer from "./wave";
import ThreeDSlider from "../Components/ThreeDslider";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const headlineRef = useRef(null);
  const ctaRef = useRef(null);
  const strapRef = useRef(null);

  useEffect(() => {
    // Pin the hero for a dramatic entry (mobile-safe)
    if (heroRef.current) {
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom+=20% top",
        pin: true,
        pinSpacing: false,
      });
    }

    // Entrance timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      contentRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9 }
    )
      .fromTo(
        headlineRef.current,
        { y: 36, opacity: 0, skewY: 2 },
        { y: 0, opacity: 1, skewY: 0, duration: 0.9 },
        "-=0.6"
      )
      .fromTo(
        strapRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { scale: 0.92, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.4)" },
        "-=0.4"
      );

    // subtle parallax on pointer move for 3D feel
    function onMove(e) {
      const { innerWidth, innerHeight } = window;
      const nx = (e.clientX / innerWidth - 0.5) * 10;
      const ny = (e.clientY / innerHeight - 0.5) * 10;
      gsap.to(headlineRef.current, { x: nx * -0.6, y: ny * -0.6, duration: 0.6, ease: "sine.out" });
      gsap.to(strapRef.current, { x: nx * -0.3, y: ny * -0.3, duration: 0.6, ease: "sine.out" });
    }
    window.addEventListener("pointermove", onMove);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("pointermove", onMove);
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden font-[EXO] bg-gradient-to-br from-white via-pink-50 to-blue-50"
    >
      {/* Decorative canvas / particles / wave layer */}
      <CanvasWaveLayer />

      {/* Optional 3D slider or work teaser (positioned right/top) */}
      <div className="absolute right-6 top-12 hidden lg:block w-[420px] h-[360px] pointer-events-none">
      
      </div>

      {/* Soft radial glow behind content */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <div className="w-[640px] h-[640px] rounded-full bg-gradient-to-br from-pink-200 via-white to-lime-200 opacity-40 blur-3xl" />
      </div>

      {/* Hero content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-28"
        style={{ minHeight: "calc(100vh - 0px)" }}
      >
        <hgroup className="max-w-4xl">
          <motion.h1
            ref={headlineRef}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-[#0f172a]"
          >
            WE BUILD DIGITAL EXPERIENCES THAT FEEL PREMIUM
          </motion.h1>

          <p
            ref={strapRef}
            className="mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-slate-600"
          >
            Bespoke creativity, strategic clarity, and rapid scalability — crafted for brands that want calm confidence and cinematic momentum.
          </p>
        </hgroup>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link
            ref={ctaRef}
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white font-semibold shadow-2xl hover:scale-[1.02] transition-transform"
            aria-label="Start a project"
          >
            Start a project
          </Link>

          <a
            href="/work"
            className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-white/60 bg-white/70 text-[#0f172a] font-medium shadow hover:translate-y-[-2px] transition"
          >
            View work
          </a>
        </div>

        <div className="mt-8 text-xs text-slate-400">Trusted by visionary teams and growth-driven leaders</div>

        {/* subtle scroller hint */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-12 rounded-xl border-2 border-white/40 flex items-start justify-center p-1 opacity-80">
            <div className="w-1 h-3 rounded-full bg-white/60 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Accent stripe left */}
      <div className="hidden lg:block absolute left-6 top-24 bottom-24 w-[2px] bg-gradient-to-b from-pink-400 via-white to-lime-400 opacity-50 pointer-events-none" />

      {/* Decorative label / microcopy top-left */}
      <div className="absolute top-8 left-6 z-20">
        <div className="px-3 py-1 rounded-full bg-white/90 text-xs font-medium text-indigo-700 shadow">
          VBizGro Studio
        </div>
      </div>
    </section>
  );
}
